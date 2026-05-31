// Headless end-to-end check of the live site (run against `vite preview`).
// Prints a report and exits non-zero on any failed assertion.
// Optional dev tool — needs Playwright, which is NOT a project dependency:
//   npm i -D playwright && npx playwright install chromium
//   npm run build && npm run preview -- --port 4280   (in another shell)
//   node scripts/e2e.mjs
import { chromium } from 'playwright'

const URL = process.env.E2E_URL || 'http://localhost:4280/'
const results = []
const assert = (name, cond, detail) => results.push({ name, pass: !!cond, detail })

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 860 } })

const errors = []
page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
page.on('pageerror', (e) => errors.push(String(e)))

await page.goto(URL, { waitUntil: 'load' })
await page.waitForSelector('.row[data-year]', { timeout: 10000 })
await page.waitForTimeout(400) // let boot() settle (scroll-to-bottom + reveal)

// 1. Structure
const counts = await page.evaluate(() => ({
  rows: document.querySelectorAll('.row[data-year]').length,
  events: document.querySelectorAll('.row--event').length,
  markers: document.querySelectorAll('.marker').length,
  ready: document.body.classList.contains('is-ready'),
  hero: !!document.querySelector('.hero__title'),
}))
assert('renders 130 year rows', counts.rows === 130, counts.rows)
assert('renders event rows', counts.events >= 80, counts.events)
assert('renders 4 markers', counts.markers === 4, counts.markers)
assert('boot completed (is-ready)', counts.ready, counts.ready)
assert('hero present', counts.hero)

// 2. Opens at the very bottom (ground level / earliest year)
const onLoad = await page.evaluate(() => {
  const d = document.documentElement
  return {
    atBottom: window.scrollY + window.innerHeight >= d.scrollHeight - 4,
    readout: document.querySelector('.readout').textContent.replace(/\s+/g, ' ').trim(),
  }
})
assert('scrolls to bottom on load', onLoad.atBottom, onLoad)
assert('bottom shows ground level', /ground level/i.test(onLoad.readout), onLoad.readout)

// helper to centre a given year and wait for the scene to update
async function centre(year) {
  await page.evaluate((y) => {
    const el = [...document.querySelectorAll('.row[data-year]')].find((n) => +n.dataset.year === y)
    const r = el.getBoundingClientRect()
    window.scrollTo({ top: r.top + window.scrollY + r.height / 2 - window.innerHeight / 2 })
  }, year)
  await page.waitForTimeout(120)
  return page.evaluate(() => ({
    readout: document.querySelector('.readout').textContent.replace(/\s+/g, ' ').trim(),
    star: +getComputedStyle(document.querySelector('.scene-stars')).opacity,
    earth: +getComputedStyle(document.querySelector('.scene-earth')).opacity,
    bg: getComputedStyle(document.querySelector('.scene-bg')).backgroundImage,
  }))
}

// 3. Scene transitions across eras
const sGround = await centre(1232)
assert('1232 → ground, no stars/earth', /ground/i.test(sGround.readout) && sGround.star === 0 && sGround.earth === 0, sGround)

const sKarman = await centre(1944)
assert('1944 → Kármán line read-out', /kármán|karman/i.test(sKarman.readout), sKarman.readout)

const sMoon = await centre(1969)
assert('1969 → Moon read-out', /moon/i.test(sMoon.readout), sMoon.readout)
assert('1969 → Earth limb visible', sMoon.earth > 0.5, sMoon.earth)
assert('1969 → stars visible', sMoon.star > 0.1, sMoon.star)

const sDeep = await centre(2026)
assert('2026 → deep space', /deep space/i.test(sDeep.readout), sDeep.readout)
assert('2026 → stars bright, earth gone', sDeep.star > 0.6 && sDeep.earth < 0.1, sDeep)

// 4. Background actually changes colour ground→space
assert('background colour shifts with era', sGround.bg !== sDeep.bg, { ground: sGround.bg.slice(0, 40), deep: sDeep.bg.slice(0, 40) })

// 5. Language switching with position preservation
await centre(1969)
const enBody = await page.evaluate(() => {
  const e = [...document.querySelectorAll('.row[data-year]')].find((n) => +n.dataset.year === 1969)
  return e.querySelector('.row__body').textContent
})
await page.click('.lang-btn:has-text("한국어")')
await page.waitForTimeout(150)
const ko = await page.evaluate(() => {
  const e = [...document.querySelectorAll('.row[data-year]')].find((n) => +n.dataset.year === 1969)
  return {
    lang: document.documentElement.lang,
    brand: document.querySelector('.brand').textContent,
    body: e.querySelector('.row__body').textContent,
    readout: document.querySelector('.readout').textContent.replace(/\s+/g, ' ').trim(),
  }
})
assert('switches to Korean (html lang)', ko.lang === 'ko', ko.lang)
assert('Korean brand', ko.brand.includes('연표'), ko.brand)
assert('Korean body differs from English', ko.body !== enBody && /[가-힣]/.test(ko.body), ko.body.slice(0, 24))
assert('Korean read-out localised + still 1969', ko.readout.includes('1969') && /[가-힣]/.test(ko.readout), ko.readout)

await page.click('.lang-btn:has-text("日本語")')
await page.waitForTimeout(150)
const ja = await page.evaluate(() => {
  const e = [...document.querySelectorAll('.row[data-year]')].find((n) => +n.dataset.year === 1969)
  return {
    lang: document.documentElement.lang,
    body: e.querySelector('.row__body').textContent,
    readout: document.querySelector('.readout').textContent.replace(/\s+/g, ' ').trim(),
  }
})
assert('switches to Japanese', ja.lang === 'ja' && /[぀-ヿ一-鿿]/.test(ja.body), ja.body.slice(0, 24))
assert('Japanese read-out still 1969', ja.readout.includes('1969'), ja.readout)

// 6. No console / page errors
assert('no console/page errors', errors.length === 0, errors.slice(0, 3))

await browser.close()

const failed = results.filter((r) => !r.pass)
for (const r of results) {
  console.log(`${r.pass ? '✓' : '✗'} ${r.name}${r.pass ? '' : '  →  ' + JSON.stringify(r.detail)}`)
}
console.log(`\n${failed.length === 0 ? '✓ ALL E2E CHECKS PASSED' : '✗ ' + failed.length + ' E2E CHECK(S) FAILED'} (${results.length - failed.length}/${results.length})`)
process.exit(failed.length === 0 ? 0 : 1)
