// Dependency-free checks for source records, translations, and timeline metadata.
import { entries, markers, TICK_START, TICK_END, UPDATED_AT } from '../src/data/timeline.js'
import { LANGS, ui, layers, langLabels, layerForYear } from '../src/i18n/ui.js'

const categories = new Set(['discovery', 'theory', 'observation', 'mission', 'human'])
const visuals = new Set(['voyager', 'webb', 'sputnik', 'rocket', 'moon', 'mars', 'saturn', 'earth', 'telescope', 'orbit', 'blackhole', 'lander', 'station', 'dish'])
const problems = []
const fail = (message) => problems.push(message)
const nonempty = (value) => typeof value === 'string' && value.trim().length > 0

function checkLocales(value, label) {
  for (const language of LANGS) {
    if (!nonempty(value?.[language])) fail(`${label} missing ${language}`)
  }
}

function validDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const parsed = new Date(`${value}T00:00:00Z`)
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value
}

if (!validDate(UPDATED_AT)) fail('UPDATED_AT must be a real ISO calendar date (YYYY-MM-DD)')
if (!Number.isInteger(TICK_START) || !Number.isInteger(TICK_END) || TICK_START > TICK_END) fail('invalid ruler year bounds')
if (validDate(UPDATED_AT) && TICK_END !== Number(UPDATED_AT.slice(0, 4))) fail('ruler end should match the editorial update year')
if (!entries.length) fail('timeline contains no events')

// A year can contain several independent events; IDs preserve their identity.
const ids = new Set()
for (const entry of entries) {
  const label = `entry ${entry.id || entry.year}`
  if (!nonempty(entry.id) || !/^[a-z0-9][a-z0-9-]*$/.test(entry.id)) fail(`${label} needs a stable lowercase ID`)
  else if (ids.has(entry.id)) fail(`duplicate event ID ${entry.id}`)
  ids.add(entry.id)
  if (!Number.isInteger(entry.year) || entry.year === 0) fail(`${label} has an invalid historical year`)
  if (entry.year > TICK_END) fail(`${label} extends beyond the timeline range`)
  checkLocales(entry.title, `${label} title`)
  checkLocales(entry.body, `${label} body`)
  if (entry.detail !== undefined) checkLocales(entry.detail, `${label} detail`)
  if (!categories.has(entry.category)) fail(`${label} has unsupported category ${entry.category}`)
  if (!visuals.has(entry.visual)) fail(`${label} has unsupported object ${entry.visual}`)
  if (entry.date !== undefined) {
    if (!validDate(entry.date)) fail(`${label} date must be YYYY-MM-DD`)
    else if (Number(entry.date.slice(0, 4)) !== entry.year) fail(`${label} date and year disagree`)
    else if (validDate(UPDATED_AT) && entry.date > UPDATED_AT) fail(`${label} date is later than the editorial cutoff`)
  }
  if (!Array.isArray(entry.sources) || entry.sources.length === 0) {
    fail(`${label} needs at least one source`)
  } else {
    for (const source of entry.sources) {
      if (!nonempty(source.label)) fail(`${label} has a source without a label`)
      try {
        const url = new URL(source.url)
        if (url.protocol !== 'https:' || !url.hostname || url.username || url.password) fail(`${label} source must use an HTTPS URL without credentials`)
      } catch {
        fail(`${label} has an invalid source URL`)
      }
    }
  }
}

for (const marker of markers) {
  if (!Number.isInteger(marker.year)) fail('marker has a non-integer year')
  checkLocales(marker.label, `marker ${marker.year}`)
  if (!entries.some((entry) => entry.year === marker.year)) fail(`marker ${marker.year} has no matching event`)
}

const keys = Object.keys(ui.en).sort().join(',')
for (const language of LANGS) {
  if (Object.keys(ui[language] || {}).sort().join(',') !== keys) fail(`ui.${language} keys differ from ui.en`)
  for (const [key, value] of Object.entries(ui[language] || {})) {
    if (!nonempty(value)) fail(`ui.${language}.${key} is empty`)
  }
  if (!nonempty(langLabels[language])) fail(`langLabels missing ${language}`)
}
for (const [key, layer] of Object.entries(layers)) checkLocales(layer.name, `layer ${key}`)

const years = entries.map((entry) => entry.year).filter(Number.isInteger).sort((a, b) => a - b)
for (let year = years[0] ?? TICK_START; year <= TICK_END; year++) {
  if (!layers[layerForYear(year)]) fail(`layerForYear(${year}) returns an unknown layer`)
}

console.log(`Entries: ${entries.length} (${years[0]}–${years.at(-1)}) | distinct years: ${new Set(years).size}`)
console.log(`Objects: ${new Set(entries.map((entry) => entry.visual)).size} | sources: ${entries.reduce((count, entry) => count + (entry.sources?.length || 0), 0)}`)
console.log('Editorial cutoff:', UPDATED_AT, '| languages:', LANGS.join('/'), '| markers:', markers.length)
for (const problem of problems) console.error(`  ✗ ${problem}`)
console.log(problems.length ? `✗ ${problems.length} CONTENT CHECK(S) FAILED` : '✓ ALL CONTENT CHECKS PASSED')
process.exitCode = problems.length ? 1 : 0
