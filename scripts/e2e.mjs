// Browser checks against a local Vite dev/preview server.
// npm run preview -- --port 4280, then npm run test:e2e.
// E2E_URL overrides the URL; PLAYWRIGHT_MODULE can select a bundled package.
import { createRequire } from 'node:module'
import { entries, markers, TICK_START, TICK_END } from '../src/data/timeline.js'
import { langLabels } from '../src/i18n/ui.js'

const require = createRequire(import.meta.url)
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright')
const URL = process.env.E2E_URL || 'http://localhost:4280/'
const results = []
const check = (name, condition, detail) => results.push({ name, pass: Boolean(condition), detail })
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] })
const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' })
const page = await context.newPage()
const errors = []
page.on('pageerror', (error) => errors.push(String(error)))
page.on('console', (message) => {
  if (message.type() === 'error') errors.push(message.text())
})

async function centreId(id) {
  await page.evaluate((target) => {
    const row = [...document.querySelectorAll('.row--event[data-id]')].find((element) => element.dataset.id === target)
    if (!row) throw new Error(`Missing event ${target}`)
    const bounds = row.getBoundingClientRect()
    window.scrollTo({ top: window.scrollY + bounds.top + bounds.height / 2 - innerHeight / 2, behavior: 'instant' })
  }, id)
  await page.waitForTimeout(180)
}

async function centreYear(year) {
  const event = entries.find((entry) => entry.year === year)
  if (event) return centreId(event.id)
  await page.evaluate((target) => {
    const row = [...document.querySelectorAll('.row[data-year]')].find((element) => Number(element.dataset.year) === target)
    if (!row) throw new Error(`Missing year ${target}`)
    const bounds = row.getBoundingClientRect()
    window.scrollTo({ top: window.scrollY + bounds.top + bounds.height / 2 - innerHeight / 2, behavior: 'instant' })
  }, year)
  await page.waitForTimeout(180)
}

async function nearestEvent() {
  return page.evaluate(() => {
    const rows = [...document.querySelectorAll('.row--event[data-id]')]
      .map((element) => {
        const bounds = element.getBoundingClientRect()
        return { id: element.dataset.id, year: Number(element.dataset.year), offset: bounds.top + bounds.height / 2 - innerHeight / 2 }
      })
      .sort((a, b) => Math.abs(a.offset) - Math.abs(b.offset))
    return rows[0]
  })
}

async function scene() {
  return page.evaluate(() => ({
    readout: document.querySelector('.readout').textContent.replace(/\s+/g, ' ').trim(),
    stars: Number(getComputedStyle(document.querySelector('.scene-stars')).opacity),
    earth: Number(getComputedStyle(document.querySelector('.scene-earth')).opacity),
    background: getComputedStyle(document.querySelector('.scene-bg')).backgroundImage,
  }))
}

try {
  await page.goto(URL, { waitUntil: 'load' })
  await page.waitForSelector('.row--event[data-id]', { timeout: 10000 })
  await page.waitForSelector('.row--event .observatory__illustration', { timeout: 10000 })
  await page.waitForTimeout(250)
  const structure = await page.evaluate(() => {
    const rows = [...document.querySelectorAll('.row[data-year]')]
    return {
      rows: rows.length,
      ids: [...document.querySelectorAll('.row--event')].map((element) => element.dataset.id),
      years: rows.map((element) => Number(element.dataset.year)),
      markers: document.querySelectorAll('.marker').length,
      exhibits: document.querySelectorAll('.row--event .artifact__viewport').length,
      illustrations: document.querySelectorAll('.row--event .artifact__viewport svg').length,
      sources: [...document.querySelectorAll('.row--event a[href]')].map((element) => element.href),
      ready: document.body.classList.contains('is-ready'),
      hero: Boolean(document.querySelector('.hero__title')),
    }
  })
  const eventYears = new Set(entries.filter((entry) => entry.year >= TICK_START).map((entry) => entry.year))
  const expectedRows = entries.length + TICK_END - TICK_START + 1 - eventYears.size
  check('renders all events and empty ruler years', structure.rows === expectedRows, { expected: expectedRows, actual: structure.rows })
  check('every stable event ID appears once', structure.ids.length === entries.length && new Set(structure.ids).size === entries.length && entries.every((entry) => structure.ids.includes(entry.id)))
  check('chronology ascends from bottom to top', structure.years.every((year, index) => index === 0 || structure.years[index - 1] >= year))
  check('renders all milestone markers', structure.markers === markers.length, structure.markers)
  check('each event has an exhibit and static illustration', structure.exhibits === entries.length && structure.illustrations === entries.length, { exhibits: structure.exhibits, illustrations: structure.illustrations })
  check('event source links use HTTPS', structure.sources.length >= entries.length && structure.sources.every((url) => url.startsWith('https:')), structure.sources.length)
  check('boot completes with hero', structure.ready && structure.hero)
  const atBottom = await page.evaluate(() => scrollY + innerHeight >= document.documentElement.scrollHeight - 8)
  check('opens at the bottom of the timeline', atBottom)

  await centreYear(1232)
  const ground = await scene()
  check('early history shows ground level', /ground/i.test(ground.readout) && ground.stars < 0.02 && ground.earth < 0.02, ground)
  await centreYear(1944)
  const karman = await scene()
  check('1944 has Kármán-line readout', /kármán|karman/i.test(karman.readout), karman.readout)
  await centreYear(1969)
  const moon = await scene()
  check('1969 shows the lunar frontier and Earth limb', /moon/i.test(moon.readout) && moon.earth > 0.5, moon)
  await centreYear(TICK_END)
  const deep = await scene()
  check('latest history shows deep space', /deep space/i.test(deep.readout) && deep.stars > 0.5 && deep.earth < 0.1, deep)
  check('background changes between ground and deep space', ground.background !== deep.background)

  // Use an ID from a repeated year to catch accidental year-only positioning.
  const repeated = entries.find((entry) => entries.filter((other) => other.year === entry.year).length > 1 && entry.visual === 'voyager')
    || entries.find((entry) => entries.filter((other) => other.year === entry.year).length > 1)
    || entries.find((entry) => entry.year === 1969)
  await centreId(repeated.id)
  for (const language of ['ko', 'ja', 'en']) {
    await page.getByRole('button', { name: langLabels[language], exact: true }).click()
    await page.waitForTimeout(180)
    const localized = await page.evaluate((id) => {
      const row = [...document.querySelectorAll('.row--event')].find((element) => element.dataset.id === id)
      return { language: document.documentElement.lang, text: row.querySelector('.row__body').textContent, readout: document.querySelector('.readout').textContent }
    }, repeated.id)
    const positioned = await nearestEvent()
    check(`${language} content is translated`, localized.language === language && localized.text.includes(repeated.body[language]), localized.language)
    check(`${language} switching retains the same event ID`, positioned.id === repeated.id && Math.abs(positioned.offset) < 16, positioned)
    check(`${language} readout retains the event year`, localized.readout.includes(String(Math.abs(repeated.year))), localized.readout)
  }

  await page.locator('.era-nav button[data-era="present"]').click()
  await page.waitForTimeout(250)
  const present = await nearestEvent()
  check('present era navigation reaches recent history', present.year >= 2020, present)
  await page.locator('.era-nav button[data-era="antiquity"]').click()
  await page.waitForTimeout(250)
  const ancient = await nearestEvent()
  check('antiquity navigation reaches early astronomy', ancient.year < 1543, ancient)
  const jump = page.locator('#year-jump')
  const jumpOptions = await jump.locator('option').evaluateAll((options) => options.map((option) => ({ value: option.value, label: option.textContent })))
  const choice = jumpOptions.find((option) => option.value === repeated.id || option.value === String(repeated.year))
    || jumpOptions.find((option) => option.label.includes(String(repeated.year)))
  check('year selector offers a repeated-year destination', Boolean(choice))
  if (choice) {
    await jump.selectOption(choice.value)
    await page.waitForTimeout(250)
    const destination = await nearestEvent()
    check('year selector jumps to the selected year', destination.year === repeated.year, destination)
  }

  const exhibit = entries.find((entry) => entry.visual === 'voyager') || entries[0]
  await centreId(exhibit.id)
  const row = page.locator(`.row--event[data-id="${exhibit.id}"]`)
  const viewport = row.locator('.artifact__viewport')
  await viewport.scrollIntoViewIfNeeded()
  await viewport.focus()
  await page.waitForTimeout(300)
  const liveCanvases = page.locator('.artifact__viewport canvas')
  check('shares at most one WebGL canvas', await liveCanvases.count() <= 1, await liveCanvases.count())
  if (await liveCanvases.count()) {
    check('focused exhibit activates its interactive canvas', await viewport.getAttribute('data-observatory-state') === 'interactive')
    const canvas = viewport.locator('.observatory__canvas')
    const before = await canvas.screenshot()
    const initialRevision = Number(await viewport.getAttribute('data-view-revision'))
    const box = await viewport.boundingBox()
    await page.mouse.move(box.x + box.width * 0.4, box.y + box.height * 0.4)
    await page.mouse.down()
    await page.mouse.move(box.x + box.width * 0.65, box.y + box.height * 0.55, { steps: 8 })
    await page.mouse.up()
    await page.waitForTimeout(180)
    const after = await canvas.screenshot()
    const dragRevision = Number(await viewport.getAttribute('data-view-revision'))
    check('dragging rotates the rendered exhibit', !before.equals(after) && dragRevision > initialRevision)
    await viewport.getByRole('button', { name: 'Zoom in', exact: true }).click()
    await page.waitForTimeout(100)
    const zoomRevision = Number(await viewport.getAttribute('data-view-revision'))
    check('zoom button changes the camera', zoomRevision > dragRevision)
    await viewport.getByRole('button', { name: 'Reset view', exact: true }).click()
    await page.waitForTimeout(100)
    const reset = await canvas.screenshot()
    check('reset restores the initial camera view', before.equals(reset))
    await viewport.focus()
    const keyRevision = Number(await viewport.getAttribute('data-view-revision'))
    await viewport.press('ArrowRight')
    await viewport.press('+')
    await viewport.press('Home')
    await page.waitForTimeout(100)
    check('keyboard rotation, zoom and reset work', Number(await viewport.getAttribute('data-view-revision')) > keyRevision)
    const scrollBefore = await page.evaluate(() => scrollY)
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
    await page.mouse.wheel(0, -220)
    await page.waitForTimeout(180)
    check('wheel over the exhibit scrolls the timeline', await page.evaluate(() => scrollY) < scrollBefore)
  } else {
    check('WebGL-unavailable view retains its illustration', await viewport.locator('svg').isVisible() && await viewport.getAttribute('data-observatory-state') === 'unavailable')
  }

  for (const width of [390, 360]) {
    await page.setViewportSize({ width, height: 844 })
    for (const id of [entries[0].id, exhibit.id, entries.at(-1).id]) {
      await centreId(id)
      const overflow = await page.evaluate(() => ({ width: innerWidth, content: document.documentElement.scrollWidth }))
      check(`mobile ${width}px has no horizontal overflow at ${id}`, overflow.content <= overflow.width + 1, overflow)
    }
  }
  check('no browser console or page errors', errors.length === 0, errors.slice(0, 5))

  // Deliberately remove WebGL in a separate context to exercise graceful recovery.
  const fallbackContext = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' })
  await fallbackContext.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext
    HTMLCanvasElement.prototype.getContext = function (type, ...arguments_) {
      if (['webgl', 'webgl2', 'experimental-webgl'].includes(type)) return null
      return original.call(this, type, ...arguments_)
    }
  })
  const fallback = await fallbackContext.newPage()
  const fallbackErrors = []
  fallback.on('pageerror', (error) => fallbackErrors.push(String(error)))
  await fallback.goto(URL, { waitUntil: 'load' })
  await fallback.waitForSelector('.row--event .observatory__illustration')
  await fallback.waitForTimeout(250)
  const fallbackState = await fallback.evaluate(() => ({
    illustrations: document.querySelectorAll('.row--event .artifact__viewport svg').length,
    events: document.querySelectorAll('.row--event').length,
    ready: document.body.classList.contains('is-ready'),
    sources: document.querySelectorAll('.row--event a[href]').length,
    unavailable: [...document.querySelectorAll('.artifact__viewport')].every((element) => element.dataset.observatoryState === 'unavailable'),
  }))
  check('forced WebGL fallback retains every event illustration', fallbackState.illustrations === entries.length && fallbackState.events === entries.length && fallbackState.ready, fallbackState)
  check('forced WebGL fallback keeps sources accessible', fallbackState.sources >= entries.length)
  check('forced WebGL fallback reports unavailable state', fallbackState.unavailable)
  check('forced WebGL fallback has no uncaught errors', fallbackErrors.length === 0, fallbackErrors)
  await fallbackContext.close()
} catch (error) {
  check('browser checks complete', false, String(error))
} finally {
  await browser.close()
}

for (const result of results) {
  console.log(`${result.pass ? '✓' : '✗'} ${result.name}${result.pass ? '' : ' → ' + JSON.stringify(result.detail)}`)
}
const failed = results.filter((result) => !result.pass)
console.log(`\n${failed.length ? '✗ ' + failed.length + ' BROWSER CHECK(S) FAILED' : '✓ ALL BROWSER CHECKS PASSED'} (${results.length - failed.length}/${results.length})`)
process.exitCode = failed.length ? 1 : 0
