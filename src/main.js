import './style.css'
import { entries, markers, TICK_START, TICK_END, UPDATED_AT, VERIFICATION_NOTE } from './data/timeline.js'
import { LANGS, langLabels, ui, layers, layerForYear } from './i18n/ui.js'
import { exhibitFor, eventExhibits } from './data/exhibits.js'

if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
const app = document.getElementById('app')
let lang = 'en'
try { lang = localStorage.getItem('selt-lang') || 'en' } catch { /* private browsing */ }
if (!LANGS.includes(lang)) lang = 'en'

const categories = {
  discovery: { en: 'Discovery', ko: '발견', ja: '発見' },
  theory: { en: 'Theory', ko: '이론', ja: '理論' },
  observation: { en: 'Observation', ko: '관측', ja: '観測' },
  mission: { en: 'Exploration', ko: '탐사', ja: '探査' },
  human: { en: 'Human spaceflight', ko: '유인 우주비행', ja: '有人宇宙飛行' },
}
const eras = [
  { id: 'present', year: 2026, label: { en: 'New horizons', ko: '새로운 지평', ja: '新たな地平' }, range: '2000—2026' },
  { id: 'deep', year: 1977, label: { en: 'Into deep space', ko: '심우주를 향해', ja: '深宇宙へ' }, range: '1973—1999' },
  { id: 'moon', year: 1969, label: { en: 'The Moon & beyond', ko: '달과 그 너머', ja: '月とその先へ' }, range: '1961—1972' },
  { id: 'orbit', year: 1957, label: { en: 'Leaving Earth', ko: '지구를 떠나다', ja: '地球を離れる' }, range: '1942—1960' },
  { id: 'pioneers', year: 1926, label: { en: 'Rocket pioneers', ko: '로켓의 선구자들', ja: 'ロケットの先駆者' }, range: '1903—1941' },
  { id: 'antiquity', year: 1543, label: { en: 'Learning the sky', ko: '하늘을 이해하다', ja: '空を知る' }, range: 'BCE—1902' },
]
const groups = new Map()
for (const entry of entries) {
  if (!groups.has(entry.year)) groups.set(entry.year, [])
  groups.get(entry.year).push(entry)
}
for (const group of groups.values()) group.sort((a, b) => (b.date || '').localeCompare(a.date || ''))
const earlyYears = [...groups.keys()].filter(y => y < TICK_START).sort((a, b) => b - a)
const markerByYear = new Map(markers.map(m => [m.year, m]))
const figureNumbers = new Map([...entries].sort((a, b) => a.year - b.year || (a.date || '').localeCompare(b.date || '')).map((e, i) => [e.id, i + 1]))
let rows = []
let observatory = null
let renderGeneration = 0
let resizeTimer = 0
let lastEra = ''

function el(tag, className, text) {
  const node = document.createElement(tag)
  if (className) node.className = className
  if (text !== undefined) node.textContent = text
  return node
}
function button(className, text, action) {
  const b = el('button', className, text)
  b.type = 'button'
  b.addEventListener('click', action)
  return b
}
function yearLabel(year) {
  if (year >= 0) return String(year)
  return lang === 'en' ? `${Math.abs(year)} ${ui[lang].bce}` : `${ui[lang].bce} ${Math.abs(year)}`
}
function shortDate(date) {
  if (!date) return ''
  const parsed = new Date(`${date}T12:00:00Z`)
  if (Number.isNaN(parsed.valueOf())) return ''
  return new Intl.DateTimeFormat(lang, { month: 'short', day: 'numeric', timeZone: 'UTC' }).format(parsed)
}
function safeSource(source) {
  try {
    const url = new URL(source.url)
    if (url.protocol !== 'https:' || url.username || url.password) return null
    const link = el('a', 'source-link', `${source.label} ↗`)
    link.href = url.href
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    return link
  } catch { return null }
}

const sceneBg = el('div', 'scene-bg')
const sceneStars = el('canvas', 'scene-stars')
const sceneEarth = el('div', 'scene-earth')
for (const node of [sceneBg, sceneStars, sceneEarth]) node.setAttribute('aria-hidden', 'true')
const topbar = el('header', 'topbar')
const brandEl = el('a', 'brand')
brandEl.href = '#start'
brandEl.addEventListener('click', event => { event.preventDefault(); scrollToGround(true) })
const brandSymbol = el('span', 'brand__symbol', '◌')
brandSymbol.setAttribute('aria-hidden', 'true')
const brandText = el('span', 'brand__text')
brandEl.append(brandSymbol, brandText)
const editionEl = el('span', 'edition')
const langsEl = el('nav', 'langs')
langsEl.setAttribute('aria-label', 'Language / 언어 / 言語')
topbar.append(brandEl, editionEl, langsEl)
const langButtons = LANGS.map(code => {
  const b = button('lang-btn', langLabels[code], () => setLang(code))
  b.lang = code
  langsEl.append(b)
  return [code, b]
})
const eraNav = el('nav', 'era-nav')
const timeline = el('main', 'timeline')
timeline.id = 'timeline'
const readout = el('aside', 'readout')
const readoutYear = el('span', 'readout__year')
const readoutName = el('span', 'readout__name')
const readoutAlt = el('span', 'readout__alt')
const readoutProgress = el('span', 'readout__progress')
readout.append(readoutProgress, readoutYear, readoutName, readoutAlt)
const latestBtn = button('latest-button', '', () => jumpToYear(TICK_END))
app.append(sceneBg, sceneStars, sceneEarth, topbar, eraNav, timeline, readout, latestBtn)

function buildEvent(entry) {
  const r = el('article', 'row row--event')
  r.dataset.year = String(entry.year)
  r.dataset.id = entry.id
  r.id = `event-${entry.id}`
  const year = el('div', 'row__year', yearLabel(entry.year))
  const content = el('div', 'row__content')
  const meta = el('div', 'row__meta')
  meta.append(el('span', `category category--${entry.category}`, categories[entry.category]?.[lang] || categories.mission[lang]))
  if (entry.date) {
    const time = el('time', 'row__date', shortDate(entry.date))
    time.dateTime = entry.date
    meta.append(time)
  }
  const title = el('h2', 'row__title', entry.title?.[lang] || entry.body[lang])
  title.id = `title-${entry.id}`
  r.setAttribute('aria-labelledby', title.id)
  content.append(meta, title, el('p', 'row__body', entry.body[lang]))
  if (entry.detail || entry.sources?.length) {
    const details = el('details', 'event-details')
    const summary = el('summary', 'event-details__summary', ui[lang].sourceSummary)
    if (entry.sources?.length) summary.append(el('span', 'source-count', String(entry.sources.length).padStart(2, '0')))
    details.append(summary)
    if (entry.detail) details.append(el('p', 'event-details__text', entry.detail[lang]))
    const links = el('div', 'event-details__sources')
    for (const source of entry.sources || []) {
      const link = safeSource(source)
      if (link) links.append(link)
    }
    details.append(links)
    details.addEventListener('toggle', () => { measureRows(); updateScene() })
    content.append(details)
  }
  const figure = buildArtifact(entry.visual || 'orbit', title.textContent, `${ui[lang].figure} ${String(figureNumbers.get(entry.id)).padStart(3, '0')}`)
  figure.querySelector('.artifact__viewport').dataset.entryId = entry.id
  const exhibit = exhibitFor(entry.id)
  if (exhibit) {
    const study = el('div', 'artifact__study')
    study.append(el('strong', 'artifact__study-title', exhibit.title[lang]), el('p', 'artifact__study-note', exhibit.note[lang]))
    figure.append(study)
    if (exhibit.experiment === 'phase') {
      const control = el('label', 'experiment')
      control.append(el('span', '', { en: 'Time along the orbit', ko: '궤도 위의 시간', ja: '軌道上の時刻' }[lang]))
      const slider = el('input', 'experiment__phase')
      slider.type = 'range'; slider.min = '0'; slider.max = '100'; slider.step = '1'; slider.value = '0'
      control.append(slider); figure.append(control)
    }
    if (exhibit.reference) {
      const link = safeSource({ url: exhibit.reference, label: { en: 'Diagram reference · NASA', ko: '도해 참고 자료 · NASA', ja: '図の参考資料 · NASA' }[lang] })
      if (link) { link.classList.add('artifact__reference'); figure.append(link) }
    }
  }
  r.append(year, content, figure)
  return r
}
function buildArtifact(type, label, number, hero = false) {
  const figure = el('figure', `artifact${hero ? ' artifact--hero' : ''}`)
  const head = el('div', 'artifact__head')
  head.append(el('span', '', number), el('span', 'artifact__type', ui[lang].object))
  const viewport = el('div', 'artifact__viewport')
  viewport.dataset.type = type
  viewport.dataset.label = label
  viewport.setAttribute('aria-label', label)
  viewport.append(el('span', 'artifact__loading', '✦'))
  figure.append(head, viewport, el('figcaption', 'artifact__caption', ui[lang].reconstruction))
  return figure
}
function buildTick(year) {
  const r = el('div', 'row row--tick')
  r.dataset.year = String(year)
  r.setAttribute('aria-hidden', 'true')
  r.append(el('span', 'row__year', String(year)))
  return r
}
function buildMarker(label) {
  const m = el('div', 'marker')
  m.append(el('span', '', label))
  return m
}
function buildHero() {
  const hero = el('section', 'hero')
  hero.id = 'start'
  const copy = el('div', 'hero__copy')
  copy.append(el('p', 'eyebrow', ui[lang].eyebrow), el('h1', 'hero__title', ui[lang].heroTitle), el('p', 'hero__tagline', ui[lang].heroTagline))
  const actions = el('div', 'hero__actions')
  actions.append(button('primary-button', `${ui[lang].begin} ↑`, () => jumpToYear(earlyYears.at(-1))), button('text-button', `${ui[lang].latest} ↗`, () => jumpToYear(TICK_END)))
  copy.append(actions)
  const stats = el('div', 'hero__stats')
  for (const [value, label] of [[entries.length, ui[lang].events], [new Set(entries.map(e => eventExhibits[e.id] || e.visual)).size, ui[lang].models], [LANGS.length, ui[lang].languages]]) {
    const stat = el('div', 'hero__stat')
    stat.append(el('strong', '', String(value).padStart(2, '0')), el('span', '', label))
    stats.append(stat)
  }
  copy.append(stats)
  const visual = el('div', 'hero__visual')
  const orbit = el('div', 'hero__orbits')
  orbit.setAttribute('aria-hidden', 'true')
  for (let i = 0; i < 3; i++) orbit.append(el('i'))
  visual.append(orbit, buildArtifact('earth', lang === 'ko' ? '우리의 출발점, 지구' : lang === 'ja' ? '旅の出発点、地球' : 'Earth, our point of departure', '01 / SOL', true), el('span', 'hero__coordinate', ui[lang].earthCoordinate))
  const hint = el('div', 'hero__hint')
  hint.append(el('span', 'hero__chev'), el('span', '', ui[lang].heroHint))
  hero.append(copy, visual, hint)
  return hero
}
function buildClosing() {
  const closing = el('section', 'closing')
  closing.append(el('p', 'eyebrow', ui[lang].onward), el('p', 'closing__lead', ui[lang].closingLead), el('p', 'closing__note', ui[lang].closingNote))
  const methodology = el('details', 'methodology')
  methodology.append(el('summary', '', ui[lang].sourceSummary), el('p', '', VERIFICATION_NOTE[lang]), el('p', '', ui[lang].methodology), el('p', '', ui[lang].narrative))
  closing.append(el('p', 'review-date', `${ui[lang].updated} · ${UPDATED_AT}`), methodology, button('back-to-start', `${ui[lang].backToStart} ↓`, () => scrollToGround(true)))
  return closing
}
function buildNavigation() {
  lastEra = ''
  eraNav.replaceChildren()
  eraNav.setAttribute('aria-label', ui[lang].eraNav)
  eraNav.append(el('p', 'era-nav__title', ui[lang].overview))
  for (const era of eras) {
    const b = button('era-nav__button', '', () => jumpToYear(era.id === 'antiquity' ? earlyYears.at(-1) : era.year))
    b.dataset.era = era.id
    b.append(el('span', 'era-nav__dot'), el('span', 'era-nav__label', era.label[lang]), el('small', 'era-nav__range', era.range.replace('BCE', ui[lang].bce)))
    eraNav.append(b)
  }
  const label = el('label', 'year-jump-label', ui[lang].jump)
  label.htmlFor = 'year-jump'
  const select = el('select', 'year-jump')
  select.id = 'year-jump'
  select.append(el('option', '', ui[lang].jump))
  select.firstElementChild.value = ''
  for (const year of [...groups.keys()].sort((a, b) => b - a)) {
    const option = el('option', '', yearLabel(year))
    option.value = String(year)
    select.append(option)
  }
  select.addEventListener('change', () => {
    const value = Number(select.value)
    if (select.value !== '' && groups.has(value)) jumpToYear(value)
    select.value = ''
  })
  eraNav.append(label, select)
}
async function loadObjects(generation) {
  try {
    const { createObservatory } = await import('./visuals/observatory.js')
    if (generation !== renderGeneration) return
    observatory = createObservatory()
    for (const host of timeline.querySelectorAll('.artifact__viewport')) {
      host.replaceChildren()
      observatory.observe(host, { type: host.dataset.type, label: host.dataset.label, entryId: host.dataset.entryId, lang })
    }
  } catch (error) {
    console.warn('Object studies could not be loaded.', error)
    for (const host of timeline.querySelectorAll('.artifact__viewport')) host.textContent = host.dataset.label
  }
}
function render() {
  observatory?.dispose()
  observatory = null
  const generation = ++renderGeneration
  const fragment = document.createDocumentFragment()
  fragment.append(el('div', 'timeline__rail'), buildClosing())
  for (let year = TICK_END; year >= TICK_START; year--) {
    if (markerByYear.has(year)) fragment.append(buildMarker(markerByYear.get(year).label[lang]))
    if (groups.has(year)) for (const entry of groups.get(year)) fragment.append(buildEvent(entry))
    else fragment.append(buildTick(year))
  }
  fragment.append(el('div', 'divider', ui[lang].rocketAge))
  for (const year of earlyYears) for (const entry of groups.get(year)) fragment.append(buildEvent(entry))
  fragment.append(buildHero())
  timeline.replaceChildren(fragment)
  brandText.textContent = ui[lang].brand
  editionEl.textContent = ui[lang].edition
  document.title = ui[lang].brand
  document.documentElement.lang = lang
  readout.setAttribute('aria-label', ui[lang].readoutAria)
  latestBtn.textContent = `${ui[lang].latest} ↑`
  for (const [code, btn] of langButtons) btn.setAttribute('aria-pressed', String(code === lang))
  buildNavigation()
  loadObjects(generation)
}

const BG_BOTTOM = [[-3000, [23, 24, 25]], [1232, [28, 24, 20]], [1903, [15, 21, 28]], [1957, [8, 16, 26]], [2026, [4, 9, 15]]]
const BG_TOP = [[-3000, [8, 13, 18]], [1232, [9, 14, 18]], [1903, [8, 13, 20]], [1957, [5, 11, 19]], [2026, [3, 7, 13]]]
const clamp01 = x => Math.max(0, Math.min(1, x))
const lerp = (a, b, t) => a + (b - a) * t
function sampleColor(anchors, year) {
  if (year <= anchors[0][0]) return anchors[0][1]
  for (let i = 0; i < anchors.length - 1; i++) {
    const [y0, c0] = anchors[i], [y1, c1] = anchors[i + 1]
    if (year <= y1) return c0.map((c, j) => Math.round(lerp(c, c1[j], (year - y0) / (y1 - y0))))
  }
  return anchors.at(-1)[1]
}
function measureRows() {
  const sy = window.scrollY
  rows = [...timeline.querySelectorAll('.row[data-year]')].map(node => {
    const rect = node.getBoundingClientRect()
    return { year: Number(node.dataset.year), id: node.dataset.id, node, center: rect.top + sy + rect.height / 2 }
  })
}
function centerRows() {
  const center = window.scrollY + window.innerHeight / 2
  if (!rows.length) return { year: TICK_END }
  if (center <= rows[0].center) return rows[0]
  if (center >= rows.at(-1).center) return rows.at(-1)
  let lo = 0, hi = rows.length - 1
  while (lo < hi - 1) {
    const mid = (lo + hi) >> 1
    if (rows[mid].center < center) lo = mid
    else hi = mid
  }
  const a = rows[lo], b = rows[hi]
  return { ...((center - a.center) < (b.center - center) ? a : b), year: lerp(a.year, b.year, (center - a.center) / (b.center - a.center)) }
}
function updateScene() {
  const fy = centerRows().year
  const top = sampleColor(BG_TOP, fy), bottom = sampleColor(BG_BOTTOM, fy)
  sceneBg.style.background = `linear-gradient(to top, rgb(${bottom.join(',')}), rgb(${top.join(',')}))`
  sceneStars.style.opacity = String(clamp01((fy - 1944) / 25) * 0.8)
  sceneEarth.style.opacity = String(Math.min(clamp01((fy - 1957) / 11), 1 - clamp01((fy - 1975) / 22)) * 0.9)
  const year = Math.round(fy)
  const layer = layers[layerForYear(year)]
  readoutYear.textContent = yearLabel(year)
  readoutName.textContent = layer.name[lang]
  readoutAlt.textContent = layer.alt
  const max = document.documentElement.scrollHeight - window.innerHeight
  const progress = max > 0 ? 1 - window.scrollY / max : 0
  readoutProgress.style.setProperty('--progress', `${progress * 100}%`)
  let era = 'antiquity'
  if (year >= 2000) era = 'present'
  else if (year >= 1973) era = 'deep'
  else if (year >= 1961) era = 'moon'
  else if (year >= 1942) era = 'orbit'
  else if (year >= 1903) era = 'pioneers'
  for (const b of eraNav.querySelectorAll('[data-era]')) {
    if (b.dataset.era === era) b.setAttribute('aria-current', 'true')
    else b.removeAttribute('aria-current')
  }
  if (era !== lastEra && eraNav.scrollWidth > eraNav.clientWidth) {
    const active = eraNav.querySelector('[aria-current]')
    if (active) eraNav.scrollTo({ left: active.offsetLeft - (eraNav.clientWidth - active.clientWidth) / 2, behavior: 'instant' })
  }
  lastEra = era
}
let ticking = false
function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => { updateScene(); ticking = false })
}
function jumpToYear(year) {
  const target = rows.find(r => r.year === year) || rows.reduce((best, r) => Math.abs(r.year - year) < Math.abs(best.year - year) ? r : best, rows[0])
  if (!target) return
  window.scrollTo({ top: target.center - window.innerHeight / 2, behavior: motionQuery.matches ? 'auto' : 'smooth' })
}
function scrollToGround(smooth = false) {
  window.scrollTo({ top: document.documentElement.scrollHeight, behavior: smooth && !motionQuery.matches ? 'smooth' : 'auto' })
}
function setLang(next) {
  if (!LANGS.includes(next) || next === lang) return
  const doc = document.documentElement
  const atBottom = window.scrollY + window.innerHeight >= doc.scrollHeight - 5
  const atTop = window.scrollY <= 5
  const focus = centerRows()
  lang = next
  try { localStorage.setItem('selt-lang', lang) } catch { /* optional persistence */ }
  render()
  measureRows()
  if (atBottom) scrollToGround()
  else if (atTop) window.scrollTo({ top: 0, behavior: 'auto' })
  else {
    const target = (focus.id && rows.find(r => r.id === focus.id)) || rows.find(r => r.year === Math.round(focus.year))
    if (target) window.scrollTo({ top: target.center - window.innerHeight / 2, behavior: 'auto' })
  }
  updateScene()
}
function drawStars() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const w = window.innerWidth, h = window.innerHeight
  sceneStars.width = Math.round(w * dpr)
  sceneStars.height = Math.round(h * dpr)
  const ctx = sceneStars.getContext('2d')
  if (!ctx) return
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.clearRect(0, 0, w, h)
  let seed = 1937
  const random = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647 }
  for (let i = 0; i < Math.min(380, w * h / 5200); i++) {
    ctx.beginPath()
    ctx.arc(random() * w, random() * h, random() * 0.7 + 0.3, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(215,232,239,${random() * 0.6 + 0.2})`
    ctx.fill()
  }
}
function onResize() {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => { drawStars(); measureRows(); updateScene() }, 120)
}
render()
drawStars()
measureRows()
scrollToGround()
updateScene()
requestAnimationFrame(() => {
  measureRows()
  scrollToGround()
  updateScene()
  document.body.classList.add('is-ready')
})
window.addEventListener('scroll', onScroll, { passive: true })
window.addEventListener('resize', onResize)
window.addEventListener('pagehide', () => observatory?.dispose())
window.addEventListener('pageshow', event => { if (event.persisted) loadObjects(renderGeneration) })
document.fonts?.ready.then(() => { measureRows(); updateScene() })
