// Run against a local dev/preview server. All rendering stays local.
import { createRequire } from 'node:module'
import assert from 'node:assert/strict'
import { mkdir, writeFile } from 'node:fs/promises'
const require = createRequire(import.meta.url)
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright')
const url = process.env.E2E_URL || 'http://127.0.0.1:4281/'
await mkdir('artifacts', { recursive: true })
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] })
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' })
const page = await context.newPage()
const errors = [], results = []
page.on('pageerror', error => errors.push(String(error)))
page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
const captureKeys = new Set(['kepler-laws', 'star-catalogue', 'newton-gravity', 'goddard-1926', 'sls-orion', 'sputnik-2', 'nisar', 'spherex', 'perseverance', 'ingenuity', 'earth-measurement', 'far-side-imaging'])
async function centre(host) {
  await host.evaluate(el => { const r = el.getBoundingClientRect(); window.scrollTo({ top: scrollY + r.top + r.height / 2 - innerHeight / 2, behavior: 'instant' }) })
  await host.focus()
  await page.waitForTimeout(100)
}
try {
  await page.goto(url, { waitUntil: 'networkidle' })
  await page.waitForSelector('.row--event .observatory__illustration')
  const examples = await page.evaluate(() => {
    const seen = new Set()
    return [...document.querySelectorAll('.row--event .artifact__viewport')].filter(host => {
      if (seen.has(host.dataset.modelVariant)) return false
      seen.add(host.dataset.modelVariant); return true
    }).map(host => ({ id: host.dataset.entryId, variant: host.dataset.modelVariant }))
  })
  for (const example of examples) {
    const host = page.locator(`.artifact__viewport[data-entry-id="${example.id}"]`)
    await centre(host)
    const canvas = host.locator('.observatory__canvas')
    await canvas.waitFor({ state: 'attached', timeout: 8000 })
    const screenshot = await canvas.screenshot({ animations: 'disabled' })
    const bright = await page.evaluate(async base64 => {
      const image = new Image(); image.src = `data:image/png;base64,${base64}`; await image.decode()
      const canvas = document.createElement('canvas'); canvas.width = image.width; canvas.height = image.height
      const ctx = canvas.getContext('2d'); ctx.drawImage(image, 0, 0)
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data
      let count = 0
      for (let i = 0; i < pixels.length; i += 4) if (pixels[i] + pixels[i + 1] + pixels[i + 2] > 225 && pixels[i + 3] > 30) count++
      return count
    }, screenshot.toString('base64'))
    assert.ok(bright > 50, `Empty exhibit ${example.variant}: ${bright} pixels`)
    assert.equal(await page.locator('.observatory__canvas').count(), 1)
    assert.equal(await host.getAttribute('data-observatory-state'), 'interactive')
    if (example.variant.startsWith('study:')) {
      const key = example.variant.slice(6)
      assert.equal(await host.locator('svg').getAttribute('data-study'), key)
      if (captureKeys.has(key)) await host.locator('..').screenshot({ path: `artifacts/exhibit-${key}.png` })
    }
    results.push({ ...example, bright })
  }
  const kepler = page.locator('[data-entry-id="kepler-planetary-laws"]')
  await centre(kepler)
  assert.equal(await kepler.locator('svg [data-role="star"]').count(), 1)
  assert.equal(await kepler.locator('svg [data-role="planet"]').count(), 2)
  const canvas = kepler.locator('canvas')
  const before = await canvas.screenshot()
  const slider = page.locator('#event-kepler-planetary-laws .experiment__phase')
  await slider.fill('46'); await slider.dispatchEvent('input'); await page.waitForTimeout(100)
  assert.equal(await kepler.getAttribute('data-orbit-phase'), '0.46')
  assert.ok(!before.equals(await canvas.screenshot()), 'Time input must change actual 3D positions')
  await slider.focus(); await page.keyboard.press('ArrowRight')
  assert.equal(await slider.inputValue(), '47', 'Time input supports keyboard operation')
  await page.getByRole('button', { name: '한국어', exact: true }).click()
  await page.waitForTimeout(150)
  await centre(page.locator('[data-entry-id="kepler-planetary-laws"]'))
  await page.screenshot({ path: 'artifacts/exhibits-kepler-ko-desktop.png' })
  await page.setViewportSize({ width: 390, height: 844 })
  await centre(page.locator('[data-entry-id="kepler-planetary-laws"]'))
  await page.locator('#event-kepler-planetary-laws').screenshot({ path: 'artifacts/exhibits-kepler-ko-mobile.png' })
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Mobile overflow')
  assert.deepEqual(errors, [])

  const fallbackContext = await browser.newContext({ reducedMotion: 'reduce', viewport: { width: 1000, height: 800 } })
  await fallbackContext.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext
    HTMLCanvasElement.prototype.getContext = function (type, ...args) { return /webgl/.test(type) ? null : original.call(this, type, ...args) }
  })
  const fallback = await fallbackContext.newPage()
  await fallback.goto(url, { waitUntil: 'networkidle' })
  await fallback.waitForSelector('[data-entry-id="kepler-planetary-laws"] svg')
  const diagram = fallback.locator('[data-entry-id="kepler-planetary-laws"] svg')
  const initial = await diagram.locator('[data-role="planet"]').first().getAttribute('cx')
  const fallbackSlider = fallback.locator('#event-kepler-planetary-laws .experiment__phase')
  await fallbackSlider.fill('50'); await fallbackSlider.dispatchEvent('input')
  assert.notEqual(await diagram.locator('[data-role="planet"]').first().getAttribute('cx'), initial, 'Time input works without WebGL')
  assert.equal(await fallback.locator('.row--event .artifact__viewport svg').count(), 139)
  await fallbackContext.close()
  // vsf-ignore: Only an exhibit count and fixed test labels are logged; no user data.
  console.log(`PASS: ${results.length} distinct models rendered; Kepler physics UI, keyboard, mobile and SVG fallback verified.`)
} finally {
  await writeFile('artifacts/exhibits-browser.json', JSON.stringify({ results, errors }, null, 2))
  await browser.close()
}
