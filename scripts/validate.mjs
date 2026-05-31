// Deterministic content/integrity check for the timeline data and UI strings.
import { entries, markers, TICK_START, TICK_END } from '../src/data/timeline.js'
import { LANGS, ui, layers, langLabels, layerForYear } from '../src/i18n/ui.js'

let problems = 0
const fail = (msg) => {
  problems++
  console.log('  ✗ ' + msg)
}

// 1. Every entry has all three languages, non-empty.
for (const e of entries) {
  if (typeof e.year !== 'number') fail(`entry has non-numeric year: ${JSON.stringify(e)}`)
  for (const l of LANGS) {
    if (!e.body || !e.body[l] || !e.body[l].trim()) fail(`entry ${e.year} missing ${l}`)
  }
}

// 2. No duplicate years.
const seen = new Set()
for (const e of entries) {
  if (seen.has(e.year)) fail(`duplicate year ${e.year}`)
  seen.add(e.year)
}

// 3. Markers complete.
for (const m of markers) {
  for (const l of LANGS) {
    if (!m.label || !m.label[l] || !m.label[l].trim()) fail(`marker ${m.year} missing ${l}`)
  }
  if (!entries.some((e) => e.year === m.year)) fail(`marker ${m.year} has no matching entry`)
}

// 4. UI strings complete (same key set across languages).
const enKeys = Object.keys(ui.en).sort().join(',')
for (const l of LANGS) {
  const k = Object.keys(ui[l] || {}).sort().join(',')
  if (k !== enKeys) fail(`ui.${l} key set differs from ui.en`)
  if (!langLabels[l]) fail(`langLabels missing ${l}`)
}

// 5. Layers complete + layerForYear returns a known layer for the full range.
for (const key of Object.keys(layers)) {
  for (const l of LANGS) {
    if (!layers[key].name[l]) fail(`layer ${key} missing name.${l}`)
  }
}
for (let y = 1200; y <= TICK_END; y++) {
  const key = layerForYear(y)
  if (!layers[key]) fail(`layerForYear(${y}) -> unknown layer "${key}"`)
}

const eventYears = entries.map((e) => e.year).sort((a, b) => a - b)
console.log(`Entries: ${entries.length}  (range ${eventYears[0]}–${eventYears[eventYears.length - 1]})`)
console.log(`Pre-${TICK_START} entries: ${entries.filter((e) => e.year < TICK_START).length}`)
console.log(`Ruler years ${TICK_START}–${TICK_END}: ${TICK_END - TICK_START + 1}`)
console.log(`Markers: ${markers.length}  | UI langs: ${LANGS.join('/')}  | Layers: ${Object.keys(layers).length}`)
console.log(problems === 0 ? '✓ ALL CHECKS PASSED' : `✗ ${problems} PROBLEM(S)`)
process.exit(problems === 0 ? 0 : 1)
