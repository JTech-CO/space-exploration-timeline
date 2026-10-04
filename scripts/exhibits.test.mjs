import test from 'node:test'
import assert from 'node:assert/strict'
import { exhibits, eventExhibits } from '../src/data/exhibits.js'
import { entries } from '../src/data/timeline.js'
import { studyScene, ellipsePoint, sectorPoints } from '../src/visuals/study-scenes.js'

test('every curated exhibit is attached to a real event and has a renderable scene', () => {
  const ids = new Set(entries.map(entry => entry.id))
  const used = new Set(Object.values(eventExhibits))
  for (const [id, key] of Object.entries(eventExhibits)) {
    assert.ok(ids.has(id), `Unknown event: ${id}`)
    assert.ok(exhibits[key], `Unknown exhibit: ${key}`)
  }
  for (const [key, exhibit] of Object.entries(exhibits)) {
    assert.ok(used.has(key), `Unreachable exhibit: ${key}`)
    for (const language of ['en', 'ko', 'ja']) {
      assert.ok(exhibit.title[language]?.trim())
      assert.ok(exhibit.note[language]?.trim())
    }
    if (exhibit.reference) assert.equal(new URL(exhibit.reference).protocol, 'https:')
    const scene = studyScene(key)
    assert.ok(scene.length > 2, key)
    assert.ok(!JSON.stringify(scene).includes('null'), `Non-finite coordinate in ${key}`)
  }
})

test('Kepler example contains exactly one star and two planets at every phase', () => {
  for (const phase of [0, .17, .5, .9, 1]) {
    const scene = studyScene('kepler-laws', phase)
    assert.equal(scene.filter(item => item.role === 'star').length, 1)
    assert.equal(scene.filter(item => item.role === 'planet').length, 2)
  }
})

test('both orbital paths have the star at a focus, not at the ellipse centre', () => {
  for (const [a, e] of [[1.45, .56], [2.45, .28]]) for (let n = 0; n <= 80; n++) {
    const [x, , z] = ellipsePoint(a, e, n / 80 * Math.PI * 2)
    const distanceToStar = Math.hypot(x, z)
    const distanceToOtherFocus = Math.hypot(x + 2 * a * e, z)
    assert.ok(Math.abs(distanceToStar + distanceToOtherFocus - 2 * a) < 1e-10)
  }
})

function area(points) {
  return Math.abs(points.reduce((sum, p, i) => {
    const q = points[(i + 1) % points.length]
    return sum + p[0] * q[2] - q[0] * p[2]
  }, 0)) / 2
}
test('equal time intervals sweep equal areas near periapsis and apoapsis', () => {
  const a = area(sectorPoints(1.45, .56, -.29, .29, 2000))
  const b = area(sectorPoints(1.45, .56, Math.PI - .29, Math.PI + .29, 2000))
  assert.ok(Math.abs(a - b) / a < 1e-6)
  const peri = ellipsePoint(1.45, .56, .03), apo = ellipsePoint(1.45, .56, Math.PI + .03)
  const peri0 = ellipsePoint(1.45, .56, 0), apo0 = ellipsePoint(1.45, .56, Math.PI)
  assert.ok(Math.hypot(peri[0] - peri0[0], peri[2] - peri0[2]) > Math.hypot(apo[0] - apo0[0], apo[2] - apo0[2]) * 2)
})

test('different discoveries and hardware do not collapse to identical geometry', () => {
  const seen = new Map()
  for (const key of Object.keys(exhibits)) {
    // Labels and paint are not enough to count as a different exhibit.
    const signature = JSON.stringify(studyScene(key).filter(item => item.kind !== 'label').map(({ color, opacity, role, ...geometry }) => geometry))
    assert.ok(!seen.has(signature), `${key} duplicates ${seen.get(signature)}`)
    seen.set(signature, key)
  }
})
