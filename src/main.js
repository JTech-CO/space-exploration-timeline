import './style.css'
import { entries, markers, TICK_START, TICK_END } from './data/timeline.js'
import { LANGS, langLabels, ui, layers, layerForYear } from './i18n/ui.js'

// Don't let the browser restore a previous scroll position — we always open at
// the bottom (the earliest history, at "ground level").
if ('scrollRestoration' in history) history.scrollRestoration = 'manual'

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)',
).matches

/* ── State ─────────────────────────────────────────────────────────────── */

let lang = localStorage.getItem('selt-lang')
if (!LANGS.includes(lang)) lang = 'en'

const entryByYear = new Map(entries.map((e) => [e.year, e]))
const markerByYear = new Map(markers.map((m) => [m.year, m]))
const preRocketYears = entries
  .filter((e) => e.year < TICK_START)
  .map((e) => e.year)
  .sort((a, b) => b - a) // newest first

// rows: { year, center } for every year-bearing element, sorted top→bottom.
let rows = []

/* ── Scene colour model ────────────────────────────────────────────────── */
// Anchors (year → rgb). The background reads as a vertical gradient whose
// bottom edge (the horizon) and top edge are interpolated independently, so the
// warm dawn glow at ground level fades to uniform deep space as time advances.

const BG_BOTTOM = [
  [1232, [40, 25, 15]],
  [1903, [16, 18, 28]],
  [1942, [10, 17, 31]],
  [1957, [8, 14, 26]],
  [1969, [6, 11, 20]],
  [2026, [2, 4, 11]],
]
const BG_TOP = [
  [1232, [12, 9, 7]],
  [1903, [10, 12, 19]],
  [1942, [7, 12, 22]],
  [1957, [5, 9, 18]],
  [1969, [4, 7, 14]],
  [2026, [1, 2, 7]],
]

function lerp(a, b, t) {
  return a + (b - a) * t
}

function sampleColor(anchors, year) {
  if (year <= anchors[0][0]) return anchors[0][1]
  const last = anchors[anchors.length - 1]
  if (year >= last[0]) return last[1]
  for (let i = 0; i < anchors.length - 1; i++) {
    const [y0, c0] = anchors[i]
    const [y1, c1] = anchors[i + 1]
    if (year >= y0 && year <= y1) {
      const t = (year - y0) / (y1 - y0)
      return [
        Math.round(lerp(c0[0], c1[0], t)),
        Math.round(lerp(c0[1], c1[1], t)),
        Math.round(lerp(c0[2], c1[2], t)),
      ]
    }
  }
  return last[1]
}

const rgb = (c) => `rgb(${c[0]}, ${c[1]}, ${c[2]})`
const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x)

/* ── Element references ────────────────────────────────────────────────── */

const app = document.getElementById('app')

const sceneBg = el('div', 'scene-bg')
const sceneStars = el('canvas', 'scene-stars')
const sceneEarth = el('div', 'scene-earth')

const brandEl = el('div', 'brand')
const langsEl = el('nav', 'langs')
const topbar = el('header', 'topbar')
topbar.append(brandEl, langsEl)

const readoutYear = el('span', 'readout__year')
const readoutName = el('span', 'readout__name')
const readoutAltSep = spacer()
const readoutAlt = el('span', 'readout__alt')
const readout = el('aside', 'readout')
readout.append(readoutYear, spacer(), readoutName, readoutAltSep, readoutAlt)

const timeline = el('main', 'timeline')

app.append(sceneBg, sceneStars, sceneEarth, topbar, readout, timeline)

const langButtons = LANGS.map((code) => {
  const b = el('button', 'lang-btn')
  b.type = 'button'
  b.textContent = langLabels[code]
  b.addEventListener('click', () => setLang(code))
  langsEl.append(b)
  return [code, b]
})

/* ── Build helpers ─────────────────────────────────────────────────────── */

function el(tag, className) {
  const node = document.createElement(tag)
  if (className) node.className = className
  return node
}

function spacer() {
  const s = el('span', 'readout__sep')
  s.textContent = '·'
  return s
}

function row(year, isEvent) {
  const r = el('div', `row ${isEvent ? 'row--event' : 'row--tick'}`)
  r.dataset.year = String(year)
  const y = el('div', 'row__year')
  y.textContent = String(year)
  r.append(y)
  if (isEvent) {
    const body = el('div', 'row__body')
    body.textContent = entryByYear.get(year).body[lang]
    r.append(body)
  }
  return r
}

function markerRow(label) {
  const m = el('div', 'marker')
  const span = el('span')
  span.textContent = label
  m.append(span)
  return m
}

/* ── Render the timeline for the current language ──────────────────────── */

function render() {
  timeline.replaceChildren()

  // continuous trajectory line behind the rows
  timeline.append(el('div', 'timeline__rail'))

  // closing note (top of the page)
  timeline.append(buildClosing())

  // 2026 → 1903, newest first. A marker is rendered just above its year.
  for (let year = TICK_END; year >= TICK_START; year--) {
    if (markerByYear.has(year)) {
      timeline.append(markerRow(markerByYear.get(year).label[lang]))
    }
    timeline.append(row(year, entryByYear.has(year)))
  }

  // the divider into the pre-rocket era, then the early entries
  timeline.append(buildDivider())
  for (const year of preRocketYears) timeline.append(row(year, true))

  // hero (bottom of the page — what the visitor sees on load)
  timeline.append(buildHero())

  // top bar + read-out chrome
  brandEl.textContent = ui[lang].brand
  document.title = ui[lang].brand
  readout.setAttribute('aria-label', ui[lang].readoutAria)
  for (const [code, btn] of langButtons) {
    btn.setAttribute('aria-pressed', String(code === lang))
  }
  document.documentElement.lang = lang
}

function buildHero() {
  const hero = el('section', 'hero')
  const title = el('h1', 'hero__title')
  title.textContent = ui[lang].heroTitle
  const tagline = el('p', 'hero__tagline')
  tagline.textContent = ui[lang].heroTagline
  const hint = el('div', 'hero__hint')
  hint.append(el('span', 'hero__chev'))
  const hintText = el('span')
  hintText.textContent = ui[lang].heroHint
  hint.append(hintText)
  hero.append(title, tagline, hint)
  return hero
}

function buildDivider() {
  const d = el('div', 'divider')
  const span = el('span')
  span.textContent = ui[lang].rocketAge
  d.append(span)
  return d
}

function buildClosing() {
  const c = el('section', 'closing')
  const lead = el('p', 'closing__lead')
  lead.textContent = ui[lang].closingLead
  const note = el('p', 'closing__note')
  note.textContent = ui[lang].closingNote
  const btn = el('button', 'back-to-start')
  btn.type = 'button'
  btn.textContent = ui[lang].backToStart
  btn.addEventListener('click', () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    }),
  )
  c.append(lead, note, btn)
  return c
}

/* ── Measurement + scroll-driven scene ─────────────────────────────────── */

function measureRows() {
  const scrollY = window.scrollY
  rows = [...timeline.querySelectorAll('[data-year]')]
    .map((node) => {
      const rect = node.getBoundingClientRect()
      return { year: Number(node.dataset.year), center: rect.top + scrollY + rect.height / 2 }
    })
    .sort((a, b) => a.center - b.center)
}

function fractionalYearAtCenter() {
  if (rows.length === 0) return TICK_END
  const center = window.scrollY + window.innerHeight / 2
  if (center <= rows[0].center) return rows[0].year
  const last = rows[rows.length - 1]
  if (center >= last.center) return last.year
  // rows are sorted by center ascending (top→bottom => year descending)
  let lo = 0
  let hi = rows.length - 1
  while (lo < hi - 1) {
    const mid = (lo + hi) >> 1
    if (rows[mid].center < center) lo = mid
    else hi = mid
  }
  const a = rows[lo]
  const b = rows[hi]
  const t = (center - a.center) / (b.center - a.center)
  return lerp(a.year, b.year, t)
}

function updateScene() {
  const fy = fractionalYearAtCenter()

  // background gradient
  const top = sampleColor(BG_TOP, fy)
  const bottom = sampleColor(BG_BOTTOM, fy)
  sceneBg.style.background = `linear-gradient(to top, ${rgb(bottom)} 0%, ${rgb(top)} 100%)`

  // stars fade in as we cross from the atmosphere into space
  sceneStars.style.opacity = String(clamp01((fy - 1944) / 25) * 0.8)

  // Earth's limb: appears in low orbit, peaks near the Moon era, recedes in deep space
  const rise = clamp01((fy - 1957) / 11)
  const fall = 1 - clamp01((fy - 1975) / 22)
  sceneEarth.style.opacity = String(Math.min(rise, fall) * 0.9)

  // read-out
  const year = Math.round(fy)
  const layer = layers[layerForYear(year)]
  readoutYear.textContent = String(year)
  readoutName.textContent = layer.name[lang]
  if (layer.alt) {
    readoutAlt.textContent = layer.alt
    readoutAlt.style.display = ''
    readoutAltSep.style.display = ''
  } else {
    readoutAlt.textContent = ''
    readoutAlt.style.display = 'none'
    readoutAltSep.style.display = 'none'
  }
}

let ticking = false
function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    updateScene()
    ticking = false
  })
}

/* ── Starfield (static, drawn once per size) ───────────────────────────── */

function drawStars() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const w = window.innerWidth
  const h = window.innerHeight
  sceneStars.width = Math.floor(w * dpr)
  sceneStars.height = Math.floor(h * dpr)
  const ctx = sceneStars.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.clearRect(0, 0, w, h)
  const count = Math.min(420, Math.round((w * h) / 7000))
  for (let i = 0; i < count; i++) {
    const x = Math.random() * w
    const y = Math.random() * h
    const r = Math.random() * 0.7 + 0.35
    const a = Math.random() * 0.5 + 0.35
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 255, 255, ${a.toFixed(3)})`
    ctx.fill()
  }
}

/* ── Language switching (preserves the centred year) ───────────────────── */

function setLang(next) {
  if (next === lang) return
  const doc = document.documentElement
  const atBottom = window.scrollY + window.innerHeight >= doc.scrollHeight - 4
  const atTop = window.scrollY <= 4
  const focusYear = Math.round(fractionalYearAtCenter())

  lang = next
  localStorage.setItem('selt-lang', next)
  render()
  measureRows()

  if (atBottom) {
    scrollToGround()
  } else if (atTop) {
    window.scrollTo({ top: 0, behavior: 'auto' })
  } else {
    // re-centre on the year the reader was looking at
    let target = rows.find((r) => r.year === focusYear)
    if (!target) {
      target = rows.reduce((best, r) =>
        Math.abs(r.year - focusYear) < Math.abs(best.year - focusYear) ? r : best,
      )
    }
    window.scrollTo({ top: target.center - window.innerHeight / 2, behavior: 'auto' })
  }
  updateScene()
}

/* ── Resize ────────────────────────────────────────────────────────────── */

let resizeTimer = 0
function onResize() {
  window.clearTimeout(resizeTimer)
  resizeTimer = window.setTimeout(() => {
    drawStars()
    measureRows()
    updateScene()
  }, 150)
}

/* ── Boot ──────────────────────────────────────────────────────────────── */

function scrollToGround() {
  window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'auto' })
}

function boot() {
  render()
  drawStars()
  measureRows()
  scrollToGround()
  updateScene()

  // reveal after layout has settled, re-pinning to the bottom in case fonts
  // shifted the height
  requestAnimationFrame(() => {
    scrollToGround()
    measureRows()
    updateScene()
    document.body.classList.add('is-ready')
  })

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize)
  window.addEventListener('load', () => {
    scrollToGround()
    measureRows()
    updateScene()
  })
}

boot()
