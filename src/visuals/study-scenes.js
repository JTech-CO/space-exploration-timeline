// A small, renderer-independent scene description. Both SVG and WebGL use it,
// so an inactive exhibit communicates the same idea as its interactive model.
const TAU = Math.PI * 2
export const C = { gold: '#cfac64', teal: '#7cadb0', silver: '#bbc8ca', white: '#dedfd5', dark: '#293943', blue: '#426985', orange: '#b87948', red: '#b77c66', ink: '#101c25' }

export function eccentricAnomaly(mean, eccentricity) {
  let value = mean
  for (let i = 0; i < 12; i++) value -= (value - eccentricity * Math.sin(value) - mean) / (1 - eccentricity * Math.cos(value))
  return value
}
export function ellipsePoint(a, e, mean) {
  const E = eccentricAnomaly(mean, e)
  return [a * (Math.cos(E) - e), 0, a * Math.sqrt(1 - e * e) * Math.sin(E)]
}
export function sectorPoints(a, e, start, end, samples = 48) {
  return [[0, .015, 0], ...Array.from({ length: samples + 1 }, (_, i) => {
    const p = ellipsePoint(a, e, start + (end - start) * i / samples)
    p[1] = .015
    return p
  })]
}

export function studyScene(key, phase = 0) {
  const items = []
  const add = (kind, props) => { const item = { kind, ...props }; items.push(item); return item }
  const sphere = (radius, position, color = C.silver, role) => add('sphere', { radius, position, color, role })
  const box = (size, position, color = C.silver, rotation = [0, 0, 0]) => add('box', { size, position, color, rotation })
  const cylinder = (top, bottom, height, position, color = C.silver, rotation = [0, 0, 0], open = false) => add('cylinder', { top, bottom, height, position, color, rotation, open })
  const line = (points, color = C.teal, opacity = .8) => add('line', { points, color, opacity })
  const polygon = (points, color = C.gold, opacity = .25) => add('polygon', { points, color, opacity })
  const label = (text, position, color = C.silver) => add('label', { text, position, color })
  const rod = (a, b, radius = .02, color = C.silver) => add('rod', { a, b, radius, color })
  const ring = (radius, center = [0, 0, 0], plane = 'xz', color = C.teal) => line(Array.from({ length: 97 }, (_, i) => {
    const a = TAU * i / 96
    return plane === 'xy' ? [center[0] + Math.cos(a) * radius, center[1] + Math.sin(a) * radius, center[2]] : plane === 'yz' ? [center[0], center[1] + Math.cos(a) * radius, center[2] + Math.sin(a) * radius] : [center[0] + Math.cos(a) * radius, center[1], center[2] + Math.sin(a) * radius]
  }), color, .55)
  const ellipse = (a, e, color = C.teal) => line(Array.from({ length: 145 }, (_, i) => ellipsePoint(a, e, TAU * i / 144)), color, .6)
  const arrow = (a, b, color = C.gold) => {
    line([a, b], color)
    const d = b.map((v, i) => v - a[i]), len = Math.hypot(...d) || 1
    const t = d.map(v => v / len), side = Math.abs(t[1]) < .9 ? [-t[2], 0, t[0]] : [1, 0, 0]
    for (const sign of [-1, 1]) line([b, b.map((v, i) => v - t[i] * .18 + side[i] * sign * .09)], color)
  }
  const panel = (w, h, p, rotation = [0, 0, 0]) => {
    const item = box([w, h, .035], p, C.blue, rotation)
    item.panel = true
    return item
  }
  const dish = (r, p, color = C.gold) => {
    add('dish', { radius: r, position: p, color })
    rod(p, [p[0], p[1], p[2] + r * .5], .015)
    for (const angle of [0, TAU / 3, TAU * 2 / 3]) rod([p[0] + Math.cos(angle) * r, p[1] + Math.sin(angle) * r, p[2] + r * .1], [p[0], p[1], p[2] + r * .5], .011)
  }
  const bandedPlanet = (r, p, color = C.orange) => {
    sphere(r, p, color)
    for (const y of [-.55, -.2, .22, .52]) ring(r * Math.sqrt(1 - y * y) * 1.005, [p[0], p[1] + y * r, p[2]], 'xz', y < 0 ? C.gold : C.white)
  }
  const capsule = (p, r = .4) => {
    cylinder(r * .35, r, r * 1.2, [p[0], p[1] + r * .6, p[2]], C.white)
    cylinder(r, r, .06, p, C.dark)
    box([r * .35, r * .16, .025], [p[0], p[1] + r * .8, p[2] + r * .65], C.ink, [-.45, 0, 0])
  }
  const fins = (radius, bottom, spread = .3) => {
    for (let i = 0; i < 4; i++) {
      const a = i * Math.PI / 2
      polygon([[Math.cos(a) * radius, bottom + .55, Math.sin(a) * radius], [Math.cos(a) * (radius + spread), bottom, Math.sin(a) * (radius + spread)], [Math.cos(a) * radius, bottom + .1, Math.sin(a) * radius]], C.silver, 1)
    }
  }
  const rocket = (radius, height, position = [0, 0, 0], color = C.white) => {
    cylinder(radius, radius, height, position, color)
    cylinder(0, radius, radius * 2.3, [position[0], position[1] + height / 2 + radius * 1.15, position[2]], C.white)
    cylinder(radius * .6, radius * .85, .2, [position[0], position[1] - height / 2 - .1, position[2]], C.dark)
  }

  if (key === 'kepler-laws') {
    sphere(.17, [0, 0, 0], C.gold, 'star')
    ellipse(1.45, .56, C.teal); ellipse(2.45, .28, C.silver)
    polygon(sectorPoints(1.45, .56, -.29, .29), C.gold, .42)
    polygon(sectorPoints(1.45, .56, Math.PI - .29, Math.PI + .29), C.teal, .42)
    const p1 = ellipsePoint(1.45, .56, phase * TAU + .48)
    const p2 = ellipsePoint(2.45, .28, .95 + phase * TAU / Math.pow(2.45 / 1.45, 1.5))
    sphere(.1, p1, C.teal, 'planet'); sphere(.14, p2, C.red, 'planet')
    label('P1', [p1[0], .24, p1[2]], C.teal); label('P2', [p2[0], .27, p2[2]], C.red)
    label('F1', [.2, .22, -.22], C.gold)
    label('A', [.47, .1, .18], C.gold); label('B', [-1.74, .1, -.14], C.teal)
    label('A = B', [-.9, .1, -1.78])
  } else if (key === 'star-catalogue') {
    for (const y of [-.7, 0, .7]) ring(Math.sqrt(1.5 ** 2 - y ** 2), [0, y, 0])
    ring(1.5, [0, 0, 0], 'xy'); ring(1.5, [0, 0, 0], 'yz')
    const stars = Array.from({ length: 23 }, (_, i) => { const y = -1 + i * 2 / 22, a = i * 2.39996, r = Math.sqrt(1 - y * y); return [1.5 * r * Math.cos(a), 1.5 * y, 1.5 * r * Math.sin(a)] })
    for (const [i, p] of stars.entries()) sphere(i % 5 === 0 ? .05 : .024, p, i % 4 === 0 ? C.gold : C.white, 'star')
    line(stars.filter((_, i) => [4, 7, 10, 13, 16].includes(i)), C.gold, .6)
    label('α / δ', [1.4, 1.25, 0])
  } else if (key === 'earth-measurement') {
    sphere(1, [0, 0, 0], C.blue)
    ring(1.015, [0, 0, 0], 'xy', C.teal)
    for (const a of [.63, .63 + .126]) {
      const p = [Math.sin(a), Math.cos(a), .05]
      rod(p, [p[0] * 1.35, p[1] * 1.35, .05], .022, C.gold)
      line([[0, 0, 0], p], C.gold, .7)
    }
    for (const x of [-.7, 0, .7]) arrow([x, 2.2, .1], [x, 1.35, .1], C.gold)
    label('7.2° ≈ 1/50', [-1.35, -.95, .1])
  } else if (key === 'newton-gravity') {
    sphere(.65, [-1.3, 0, 0], C.blue); sphere(.19, [1.3, 0, 0], C.silver)
    line([[-1.3, 0, 0], [1.3, 0, 0]], C.silver, .35)
    arrow([-.6, .25, 0], [.05, .25, 0], C.gold)
    arrow([1.05, -.25, 0], [.4, -.25, 0], C.gold)
    label('F = G m₁m₂ / r²', [0, .95, 0], C.gold)
    label('r', [0, -.48, 0])
  } else if (key === 'neptune-perturbation') {
    sphere(.13, [0, 0, 0], C.gold); ring(1.18); ring(1.98, [0, 0, 0], 'xz', C.silver)
    sphere(.17, [1.18, 0, 0], C.teal); sphere(.2, [1.72, 0, -.98], C.blue)
    arrow([1.19, .05, -.07], [1.48, .05, -.58], C.gold)
    line(Array.from({ length: 30 }, (_, i) => { const a = -.65 + i * .035, r = 1.18 + .1 * Math.cos(a * 3); return [Math.cos(a) * r, .025, Math.sin(a) * r] }), C.gold)
    label('U', [1.18, .34, 0]); label('N', [1.72, .4, -.98])
  } else if (key === 'cepheid-period') {
    sphere(.24, [-1.55, .72, 0], C.gold); sphere(.36, [-1.55, -.67, 0], C.white)
    for (const [row, frequency, color] of [[.65, 3.4, C.gold], [-.65, 1.7, C.teal]]) {
      line([[-.95, row - .36, 0], [2, row - .36, 0]], C.silver, .3)
      line(Array.from({ length: 120 }, (_, i) => { const x = i / 119 * 2.8; return [x - .9, row + Math.sin(x * frequency * Math.PI) * .23, 0] }), color)
    }
    label('P₁ < P₂', [.45, 1.35, 0]); label('L₁ < L₂', [.45, -1.25, 0])
  } else if (key === 'curved-spacetime') {
    const height = (x, z) => -.78 * Math.exp(-(x * x + z * z) / .55)
    for (let n = -8; n <= 8; n++) for (const axis of [0, 1]) line(Array.from({ length: 49 }, (_, i) => {
      const x = axis ? n * .23 : -1.84 + i * 3.68 / 48, z = axis ? -1.84 + i * 3.68 / 48 : n * .23
      return [x, height(x, z), z]
    }), C.teal, .45)
    sphere(.3, [0, -.42, 0], C.gold)
    line(Array.from({ length: 70 }, (_, i) => { const x = -1.9 + i * 3.8 / 69, z = .48 + .5 * Math.exp(-x * x); return [x, height(x, z) + .08, z] }), C.gold)
  } else if (key === 'galaxy-expansion') {
    sphere(.06, [0, 0, 0], C.white)
    for (let i = 0; i < 9; i++) {
      const a = i * 2.4, r = .55 + i * .15, p = [Math.cos(a) * r, 0, Math.sin(a) * r]
      sphere(.09, p, i % 2 ? C.teal : C.gold)
      arrow(p.map(v => v * 1.13), p.map(v => v * 1.48), C.teal)
    }
    label('v ∝ d', [0, 1, 0], C.gold)
  } else if (key === 'accelerating-expansion') {
    for (const [i, scale] of [.28, .45, .83].entries()) {
      const x = -1.6 + i * 1.6
      for (const [dx, dy] of [[-.7, -.5], [.75, -.3], [.1, .8], [-.8, .55]]) sphere(.055, [x + dx * scale, dy * scale, 0], C.teal)
      label(`t${i + 1}`, [x, -1.12, 0])
      if (i < 2) arrow([x + .6, 0, .02], [x + .97, 0, .02])
    }
    line([[-2, -.95, 0], [2.25, -.95, 0]], C.silver, .3)
  } else if (key === 'pulsar-planets' || key === 'hot-jupiter') {
    sphere(key === 'pulsar-planets' ? .15 : .46, [0, 0, 0], key === 'pulsar-planets' ? C.white : C.gold, 'star')
    if (key === 'pulsar-planets') {
      for (const sign of [-1, 1]) polygon([[0, 0, 0], [sign * .35, sign * 1.35, -.2], [sign * .75, sign * 1.35, .2]], C.teal, .3)
      ring(.85); ring(1.5)
      sphere(.09, [.6, 0, .6], C.red, 'planet'); sphere(.12, [-1.4, 0, .54], C.blue, 'planet')
    } else {
      ring(1.05); sphere(.23, [1.0, 0, .32], C.blue, 'planet')
      label('51 Peg b', [1.05, .54, .25], C.teal)
    }
  } else if (key === 'comet-impact') {
    bandedPlanet(.85, [.6, 0, 0])
    for (let i = 0; i < 7; i++) {
      const x = -1.8 + i * .22, y = .6 - i * .06
      sphere(.025 + i * .006, [x, y, .2], C.silver)
      line([[x, y, .2], [x - .21, y + .09, .2]], C.teal, .5)
    }
    for (let i = 0; i < 4; i++) sphere(.045, [.18 + i * .14, -.2, .73], C.ink)
  } else if (key === 'interstellar-comet') {
    sphere(.22, [.3, 0, 0], C.gold, 'star')
    line(Array.from({ length: 100 }, (_, i) => { const t = -1.3 + i * 2.6 / 99; return [-.65 * Math.cosh(t) + .1, 0, 1.1 * Math.sinh(t)] }), C.teal)
    const p = [-.69, 0, .77]; sphere(.07, p, C.white)
    for (let i = 0; i < 6; i++) line([p, [-1.45 - i * .04, i * .023, 1.27 + i * .045]], i % 2 ? C.teal : C.silver, .35)
  } else if (key === 'dart-impact') {
    sphere(.58, [0, 0, 0], C.silver, 'asteroid'); ring(1.55)
    line(Array.from({ length: 97 }, (_, i) => { const a = i * TAU / 96; return [1.42 * Math.cos(a), 0, 1.34 * Math.sin(a)] }), C.gold, .7)
    sphere(.14, [1.42, 0, 0], C.teal, 'asteroid')
    box([.13, .12, .1], [1.93, .3, .1], C.gold)
    arrow([1.93, .3, .1], [1.58, .08, .025])
    for (let i = 0; i < 6; i++) line([[1.42, 0, 0], [1.53 + i * .035, .3 + i * .028, -.22 + i * .08]], C.silver, .6)
  } else if (key === 'solar-encounter') {
    sphere(.92, [-.85, 0, 0], C.orange, 'star')
    for (const r of [1.0, 1.16]) ring(r, [-.85, 0, 0], 'xy', C.gold)
    cylinder(.29, .29, .06, [.7, .1, 0], C.ink, [0, 0, Math.PI / 2])
    box([.38, .27, .28], [1.05, .1, 0], C.gold)
    panel(.18, .42, [1.08, .43, 0], [0, 0, -.35]); panel(.18, .42, [1.08, -.24, 0], [0, 0, .35])
    line([[1.75, 0, -1.5], [1.2, 0, -.7], [.78, 0, 0], [1.2, 0, .7], [1.75, 0, 1.5]], C.teal)
  } else if (key === 'ligo-interferometer') {
    const origin = [-1.35, 0, 1.1]
    box([.28, .18, .28], origin, C.silver)
    for (const end of [[1.55, 0, 1.1], [-1.35, 0, -1.65]]) {
      rod(origin, end, .06, C.dark); line([origin.map(v => v + .045), end.map(v => v + .045)], C.red)
      box([.21, .25, .21], end, C.silver)
    }
    line(Array.from({ length: 90 }, (_, i) => { const x = -1.4 + i * 3 / 89; return [x, .45 + Math.sin(x * 7) * .2, -.35] }), C.teal)
    label('ΔL', [-.2, .85, .4], C.gold)
  } else if (key === 'cmb-horn') {
    // Flared rectangular horn and a back reflector on a ground pedestal.
    const a = [[-.2, .1, .1], [.2, .1, .1], [.2, -.2, .1], [-.2, -.2, .1]]
    const b = [[-.9, 1.2, -.85], [.9, 1.2, -.85], [.9, .15, -.85], [-.9, .15, -.85]]
    for (let i = 0; i < 4; i++) polygon([a[i], a[(i + 1) % 4], b[(i + 1) % 4], b[i]], C.silver, .75)
    cylinder(.16, .28, .6, [0, -.6, -.15]); box([1.4, .12, 1.0], [0, -.98, -.15], C.dark)
    for (let i = 0; i < 3; i++) line([[-1.2, 1.25 + i * .22, -.9], [1.2, 1.25 + i * .22, -.9]], C.gold, .45)
  } else if (['rocket-design', 'research-documents'].includes(key)) {
    for (let i = 0; i < (key === 'research-documents' ? 3 : 1); i++) {
      const x = (i - 1) * .32
      box([1.8, 2.3, .025], [x, i * .13, -.07 * i], i ? C.silver : C.blue)
      for (let y = -.8; y <= .8; y += .23) line([[x - .68, y + i * .13, .045], [x + .55, y + i * .13, .045]], C.teal, .45)
    }
    if (key === 'rocket-design') {
      cylinder(.15, .15, 1.4, [-.32, -.02, .15], C.white)
      cylinder(0, .15, .32, [-.32, .84, .15], C.white)
      label('LOX / FUEL', [-.1, -1.12, .2], C.gold)
    } else arrow([.65, -.7, .3], [1.7, -.7, .3])
  } else if (key === 'rocket-equation') {
    cylinder(.28, .28, 1.5, [0, .33, 0], C.silver)
    cylinder(0, .28, .45, [0, 1.3, 0], C.white)
    cylinder(.24, .35, .25, [0, -.54, 0], C.dark)
    for (let i = 0; i < 9; i++) sphere(.025 + i * .005, [(i % 3 - 1) * .13, -.87 - i * .11, .04], C.gold)
    arrow([.6, .4, 0], [.6, 1.4, 0]); arrow([-.7, -.7, 0], [-.7, -1.6, 0], C.teal)
    label('Δv = vₑ ln(m₀/mf)', [0, 1.98, 0], C.gold)
  } else if (key === 'staged-rocket') {
    cylinder(.3, .3, .95, [0, -1, 0]); cylinder(.21, .21, .8, [0, .32, 0], C.white)
    cylinder(0, .21, .42, [0, 1.35, 0], C.white)
    arrow([.58, -.75, 0], [.58, -1.6, 0]); arrow([.5, .3, 0], [.5, .86, 0], C.teal)
    label('1', [-.55, -1, 0]); label('2', [-.55, .3, 0])
  } else if (key === 'altitude-study' || key === 'space-boundary') {
    for (const y of [-1, 0, .85]) line([[-1.7, y, 0], [1.7, y, 0]], y === .85 ? C.gold : C.teal, .45)
    line(Array.from({ length: 100 }, (_, i) => { const t = i / 99; return [-1.5 + 3 * t, -1 + Math.sin(Math.PI * t) * 2.55, 0] }), C.white)
    label(key === 'space-boundary' ? '100 km' : 'h', [1.25, 1.05, 0], C.gold)
    sphere(.055, [-.55, 1.15, 0], C.gold)
    arrow([-.87, .77, 0], [-.57, 1.16, 0])
    if (key === 'space-boundary') {
      cylinder(.065, .065, .39, [-.55, 1.15, .06], C.silver, [0, 0, -.5])
      polygon([[-.55, .99, .06], [-.7, .88, .06], [-.6, 1.13, .06]], C.white, 1)
      line(Array.from({ length: 60 }, (_, i) => { const x = -1.75 + i * 3.5 / 59; return [x, -1.15 + .09 * (1 - x * x / 3.1), .01] }), C.blue)
    } else {
      arrow([1.3, -1, .03], [1.3, 1.55, .03], C.teal)
      box([.39, .51, .035], [-1.48, -.61, .05], C.blue)
    }
  } else if (['liquid-feed', 'engine-test', 'goddard-1926'].includes(key)) {
    const early = key === 'goddard-1926', test = key === 'engine-test'
    for (const x of [-.5, .5]) {
      cylinder(.22, .22, early ? .65 : 1.0, [x, early ? -.68 : .6, 0], x < 0 ? C.teal : C.gold)
      const y = early ? 1.1 : -.45
      rod([x, early ? -.36 : .08, 0], [x, y, 0], .025)
      rod([x, y, 0], [0, y, 0], .025)
    }
    const y = early ? 1.1 : -.45
    cylinder(.17, .17, .27, [0, y, 0], C.silver)
    cylinder(.09, .27, .35, [0, y - .31, 0], C.dark)
    if (early || test) for (const x of [-.9, .9]) { rod([x, -1.45, -.3], [x, 1.5, -.3]); rod([x, 1.5, -.3], [0, 1.5, -.3]) }
    if (test) cylinder(.15, .04, .6, [0, -1.17, 0], C.orange)
    label('LOX', [-.55, early ? -.05 : 1.35, .1], C.teal)
    label('FUEL', [.55, early ? -.05 : 1.35, .1], C.gold)
  } else if (key === 'instrument-payload' || key === 'biological-payload') {
    cylinder(.47, .47, 1.2, [0, -.25, 0], C.silver, [0, 0, 0], true)
    cylinder(0, .47, .7, [0, 1.06, 0], C.white)
    if (key === 'instrument-payload') {
      box([.48, .27, .36], [.55, -.27, .37], C.gold)
      cylinder(.12, .12, .22, [.67, .01, .38], C.dark, [Math.PI / 2, 0, 0])
      line([[.31, -.2, 0], [.55, -.2, .37]], C.teal)
    } else {
      cylinder(.26, .26, .55, [.63, -.22, .25], C.gold)
      cylinder(.22, .22, .03, [.63, .07, .25], C.teal)
      line([[.63, -.51, .25], [.3, -.6, 0]], C.teal)
    }
  } else if (['gird-09', 'a2-rocket', 'a5-rocket', 'mercury-redstone'].includes(key)) {
    const r = key === 'a5-rocket' ? .27 : key === 'mercury-redstone' ? .23 : key === 'a2-rocket' ? .17 : .1
    rocket(r, 2.6); fins(r, -1.3, key === 'gird-09' ? .15 : .27)
    if (key === 'a2-rocket') cylinder(r * 1.015, r * 1.015, .32, [0, -.1, 0], C.dark)
    if (key === 'a5-rocket') for (const y of [-.85, .65]) cylinder(r * 1.01, r * 1.01, .23, [0, y, 0], C.dark)
    if (key === 'mercury-redstone') {
      capsule([0, 1.48, 0], .23); rod([0, 1.9, 0], [0, 2.5, 0], .025, C.white)
      for (const x of [-.17, .17]) rod([x, 1.7, 0], [0, 2.25, 0], .01)
    }
  } else if (key === 'rocket-glider') {
    cylinder(.16, .2, 2.6, [0, 0, 0], C.silver, [Math.PI / 2, 0, 0])
    polygon([[-1.65, 0, -.3], [0, .03, .36], [1.65, 0, -.3], [1.6, 0, -.65], [-1.6, 0, -.65]], C.white, 1)
    polygon([[0, 0, -1.05], [0, .6, -1.3], [0, 0, -1.5]], C.teal, 1)
    box([.28, .2, .5], [0, .17, .55], C.blue)
    cylinder(.08, .03, .5, [0, 0, -1.65], C.orange, [Math.PI / 2, 0, 0])
  } else if (['falcon-heavy', 'falcon-landing', 'sls-orion', 'new-glenn', 'suborbital-capsule', 'super-heavy-catch'].includes(key)) {
    const sls = key === 'sls-orion', heavy = key === 'super-heavy-catch', glenn = key === 'new-glenn', sub = key === 'suborbital-capsule'
    const radius = heavy ? .38 : glenn ? .29 : sls ? .31 : sub ? .32 : .17
    cylinder(radius, radius, 2.75, [0, 0, 0], sls ? C.orange : heavy ? C.silver : C.white)
    if (!heavy) {
      if (sls || sub) capsule([0, 1.44, 0], sub ? .49 : .24)
      else { cylinder(glenn ? .38 : .23, glenn ? .38 : .23, .65, [0, 1.63, 0], C.white); cylinder(0, glenn ? .38 : .23, .4, [0, 2.15, 0], C.white) }
    }
    if (key === 'falcon-heavy' || sls) for (const x of [-.53, .53]) rocket(sls ? .14 : .17, 2.42, [x, -.19, 0], C.white)
    if (glenn) for (let i = 0; i < 7; i++) {
      const a = i * TAU / 6, r = i === 6 ? 0 : .19
      cylinder(.054, .076, .16, [Math.cos(a) * r, -1.46, Math.sin(a) * r], C.dark)
    }
    if (key === 'falcon-landing') {
      for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2; rod([Math.cos(a) * radius, -.76, Math.sin(a) * radius], [Math.cos(a) * .72, -1.58, Math.sin(a) * .72], .04) }
      cylinder(1.05, 1.05, .05, [0, -1.62, 0], C.dark)
      ring(.57, [0, -1.588, 0], 'xz', C.gold)
    }
    if (heavy) {
      for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2; box([.32, .055, .24], [Math.cos(a) * .44, 1.12, Math.sin(a) * .44], C.dark, [0, a, 0]) }
      for (const x of [1.05, 1.43]) rod([x, -1.7, -.15], [x, 1.85, -.15], .05, C.dark)
      for (let y = -1.5; y < 1.7; y += .4) { rod([1.05, y, -.15], [1.43, y + .32, -.15], .025); rod([1.05, y + .32, -.15], [1.43, y, -.15], .025) }
      for (const z of [-.46, .46]) { rod([1.22, .55, -.15], [.4, .55, z], .055, C.gold); rod([.4, .55, z], [-.18, .55, z], .055, C.gold) }
    }
    if (sub) for (const x of [-.22, .22]) box([.14, .25, .04], [x, 1.7, .34], C.ink)
  } else if (key === 'sputnik-2') {
    cylinder(.45, .45, .7, [0, -.55, 0], C.silver)
    sphere(.23, [0, .62, 0], C.silver)
    for (let i = 0; i < 6; i++) { const a = i * TAU / 6; rod([Math.cos(a) * .72, -1.02, Math.sin(a) * .72], [0, 1.35, 0], .018) }
    ring(.72, [0, -1.02, 0]); ring(.39, [0, .15, 0])
    for (const x of [-1, 1]) rod([0, .47, 0], [x * .88, .8, .2], .009)
  } else if (key === 'tiros-echo') {
    cylinder(.44, .44, .42, [-.9, -.2, 0], C.silver)
    cylinder(.43, .43, .026, [-.9, .025, 0], C.blue)
    for (const x of [-1.18, -.62]) rod([x, -.43, 0], [x, -.98, .2], .008)
    cylinder(.11, .11, .13, [-.9, -.48, 0], C.dark)
    sphere(.75, [.92, .18, 0], C.silver)
    label('TIROS', [-.9, .5, 0]); label('ECHO', [.92, 1.25, 0])
  } else if (key === 'vostok') {
    sphere(.56, [0, .45, 0], C.silver)
    cylinder(.32, .45, .68, [0, -.5, 0], C.gold)
    for (const x of [-.3, .3]) rod([x, -.2, 0], [x * 1.4, .1, 0], .035)
    cylinder(.16, .16, .03, [0, .55, .548], C.ink, [Math.PI / 2, 0, 0])
    for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2; rod([Math.cos(a) * .4, -.6, Math.sin(a) * .4], [Math.cos(a) * 1.05, -.9, Math.sin(a) * 1.05], .009) }
  } else if (key === 'crew-dragon') {
    cylinder(.38, .38, .85, [0, -.55, 0], C.white)
    capsule([0, -.05, 0], .5)
    sphere(.2, [0, .63, 0], C.white)
    panel(.54, .72, [0, -.55, -.385])
    for (const x of [-.16, .16]) box([.13, .15, .03], [x, .28, .382], C.ink, [-.35, 0, 0])
  } else if (['polar-orbit', 'lunar-polar-orbit'].includes(key)) {
    sphere(.82, [0, 0, 0], key === 'polar-orbit' ? C.blue : C.silver)
    ring(1.3, [0, 0, 0], 'yz', C.gold)
    rod([0, -1.16, 0], [0, 1.16, 0], .009, C.teal)
    if (key === 'polar-orbit') capsule([0, .75, 1.03], .11)
    else {
      box([.16, .2, .14], [0, .75, 1.03], C.gold)
      panel(.14, .28, [-.2, .75, 1.03]); panel(.14, .28, [.2, .75, 1.03])
      for (const [x, y, r] of [[-.25, .3, .12], [.31, -.1, .16]]) ring(r, [x, y, Math.sqrt(.82 ** 2 - x * x - y * y) + .005], 'xy', C.teal)
    }
    label('N', [0, 1.49, 0]); label('S', [0, -1.45, 0])
  } else if (key === 'mmu-spacewalk') {
    box([.72, .97, .38], [0, .08, -.28], C.silver)
    box([.53, .75, .37], [0, .08, .06], C.white)
    sphere(.24, [0, .7, .06], C.white); sphere(.19, [0, .7, .195], C.gold)
    for (const x of [-.36, .36]) {
      rod([x * .6, .32, .06], [x * 1.7, .02, .14], .1, C.white)
      rod([x * .42, -.32, .06], [x * .6, -.93, .12], .11, C.white)
      box([.19, .13, .3], [x * .6, -1.02, .2], C.white)
    }
    for (const x of [-.39, .39]) box([.13, .13, .28], [x, -.28, -.3], C.dark)
  } else if (key === 'earthrise') {
    sphere(.39, [.2, .66, -.25], C.blue)
    sphere(.12, [.09, .8, .095], C.teal)
    polygon([[-2, -.78, .2], [-1.6, -.68, .2], [-1.1, -.75, .2], [-.5, -.62, .2], [.1, -.73, .2], [.8, -.68, .2], [1.4, -.74, .2], [2, -.65, .2], [2, -1.2, .7], [-2, -1.2, .7]], C.silver, 1)
  } else if (key === 'pale-blue-dot') {
    for (const x of [-1.2, .15, .72]) polygon([[x - .18, -1.35, 0], [x + .18, -1.35, 0], [x + .78, 1.35, 0], [x + .42, 1.35, 0]], C.gold, .11)
    sphere(.022, [.43, -.03, .1], C.teal, 'planet')
    line([[.47, .05, .1], [.9, .5, .1], [1.4, .5, .1]], C.teal, .65)
    label('EARTH', [1.18, .7, .1], C.teal)
  } else if (['danuri', 'europa-clipper', 'osiris-rex', 'nisar'].includes(key)) {
    box([.6, .75, .53], [0, 0, 0], C.gold)
    if (key === 'europa-clipper') {
      for (const sign of [-1, 1]) for (let i = 0; i < 5; i++) panel(.42, .85, [sign * (.68 + i * .46), 0, -.08])
      rod([0, -.35, 0], [0, -1.15, 0], .009)
      cylinder(.12, .12, .27, [0, .51, 0], C.dark)
    } else if (key === 'nisar') {
      panel(.45, 1.3, [-.65, -.1, -.05]); panel(.45, 1.3, [.65, -.1, -.05])
      rod([0, .3, 0], [.25, 1.3, .02], .034)
      dish(.94, [.3, 1.54, .04], C.gold)
      for (let i = 0; i < 12; i++) { const a = i * TAU / 12; line([[.3, 1.54, .055], [.3 + Math.cos(a) * .93, 1.54 + Math.sin(a) * .93, .1]], C.dark, .5) }
    } else {
      panel(.68, 1.13, [-.92, 0, -.04]); panel(.68, 1.13, [.92, 0, -.04])
      dish(key === 'danuri' ? .34 : .22, [0, .22, .31], C.silver)
      if (key === 'osiris-rex') {
        rod([.2, -.35, .2], [.66, -.92, .47], .025); rod([.66, -.92, .47], [1.12, -1.03, .68], .025)
        cylinder(.13, .13, .065, [1.12, -1.08, .68], C.silver)
        cylinder(.19, .33, .14, [-.73, -.9, .55], C.orange)
        label('SAMPLE', [-.73, -1.28, .55], C.gold)
      }
    }
  } else if (key === 'gaia') {
    cylinder(1.37, 1.37, .035, [0, -.62, 0], C.gold)
    cylinder(.48, .48, .93, [0, -.12, 0], C.silver)
    for (const x of [-.23, .23]) box([.25, .17, .04], [x, .07, .435], C.ink)
    for (let i = 0; i < 12; i++) { const a = i * TAU / 12; rod([0, -.65, 0], [Math.cos(a) * 1.37, -.65, Math.sin(a) * 1.37], .01, C.silver) }
  } else if (key === 'spherex') {
    box([.62, .47, .57], [0, -.8, 0], C.gold)
    for (let i = 0; i < 3; i++) cylinder(.64 - i * .13, .19 - i * .025, .94, [0, .03 + i * .11, 0], i % 2 ? C.white : C.silver, [0, 0, 0], true)
    cylinder(.12, .12, .65, [0, .1, 0], C.dark)
    panel(.65, .43, [0, -1.03, -.2], [Math.PI / 2, 0, 0])
  } else if (key === 'herschel-reflector' || key === 'rubin') {
    const large = key === 'rubin'
    const r = large ? .48 : .2
    cylinder(r, r, large ? 1.12 : 1.85, [0, .35, 0], large ? C.dark : C.orange, [0, 0, -.6], true)
    cylinder(r * .9, r * .9, .04, [-.37, -.23, 0], C.silver, [0, 0, -.6])
    for (const x of [-.5, .5]) { rod([x, -.5, 0], [x, .4, 0], .04, C.gold); rod([x, -.5, 0], [x * 1.7, -1.2, .6], .04, C.orange) }
    box([1.5, .12, 1.1], [0, -1.24, .1], C.dark)
    if (large) {
      for (const x of [-1, 1]) line(Array.from({ length: 41 }, (_, i) => { const a = Math.PI * i / 40; return [x * .72, Math.sin(a) * 1.4 - .8, Math.cos(a) * 1.4] }), C.silver, .6)
      ring(1.43, [0, -.81, 0])
    }
  } else if (['sojourner', 'curiosity', 'perseverance'].includes(key)) {
    const small = key === 'sojourner', bodyY = small ? .05 : .22
    box([.96, small ? .22 : .36, 1.25], [0, bodyY, 0], small ? C.gold : C.white)
    for (const side of [-1, 1]) for (let n = -1; n <= 1; n++) {
      cylinder(.21, .21, .14, [side * .65, -.3, n * .59], C.dark, [0, 0, Math.PI / 2])
      rod([side * .4, -.04, 0], [side * .65, -.3, n * .59], .036)
      for (let i = 0; i < 8; i++) { const a = i * TAU / 8; rod([side * .73, -.3, n * .59], [side * .73, -.3 + Math.cos(a) * .18, n * .59 + Math.sin(a) * .18], .008) }
    }
    if (small) panel(.92, 1.2, [0, .18, 0], [Math.PI / 2, 0, 0])
    else {
      rod([0, .4, .4], [0, 1.16, .4], .036)
      box([.4, .2, .18], [0, 1.16, .4], C.silver)
      for (const x of [-.12, .12]) cylinder(.053, .053, .08, [x, 1.16, .525], C.ink, [Math.PI / 2, 0, 0])
      cylinder(.19, .19, .5, [0, .43, -.84], C.dark, [Math.PI / 2, 0, 0])
      rod([.38, .2, .55], [.88, -.02, .77], .047); rod([.88, -.02, .77], [.57, -.23, 1.08], .04)
      cylinder(.12, .12, .16, [.57, -.23, 1.1], C.silver, [Math.PI / 2, 0, 0])
      if (key === 'perseverance') for (let i = 0; i < 4; i++) cylinder(.034, .034, .28, [-.36 + i * .14, -.49, 1.05], C.gold, [0, 0, .5])
    }
  } else if (key === 'ingenuity') {
    box([.34, .32, .29], [0, -.23, 0], C.gold)
    rod([0, -.05, 0], [0, .7, 0], .018, C.dark)
    for (const [y, angle] of [[.27, .12], [.45, Math.PI / 2 + .12]]) box([2.35, .025, .1], [0, y, 0], C.dark, [0, angle, 0])
    panel(.48, .33, [0, .71, 0], [Math.PI / 2, 0, 0])
    for (const x of [-1, 1]) for (const z of [-1, 1]) rod([x * .13, -.32, z * .1], [x * .66, -.81, z * .48], .014, C.dark)
  } else if (key === 'satellite-proposal') {
    sphere(.67, [0, 0, 0], C.blue)
    ring(1.3, [0, 0, 0], 'xz', C.gold)
    sphere(.045, [1.18, 0, .55], C.white)
    label('ORBIT', [0, 1.12, 0], C.gold)
  } else if (key === 'luna-escape') {
    sphere(.26, [-1.2, 0, 0], C.gold, 'star')
    sphere(.22, [.9, 0, 0], C.blue, 'planet')
    line(Array.from({ length: 100 }, (_, i) => { const a = -.4 + i * 5.7 / 99; return [-1.2 + 2.1 * Math.cos(a), 0, 2.1 * Math.sin(a)] }), C.teal, .5)
    line([[.9, 0, .12], [1.16, .08, .35], [1.29, .1, .82], [1.17, .1, 1.33], [.92, .1, 1.62]], C.gold)
    sphere(.07, [1.17, .1, 1.33], C.silver)
  } else if (['moon-impact', 'far-side-imaging', 'ranger-imaging', 'mercury-flyby'].includes(key)) {
    sphere(.74, [-.55, 0, 0], C.silver)
    for (const [x, y, r] of [[-.85, .27, .11], [-.36, -.19, .13], [-.65, -.44, .08]]) {
      const z = Math.sqrt(Math.max(0, .74 ** 2 - (x + .55) ** 2 - y ** 2))
      ring(r, [x, y, z + .004], 'xy', C.teal)
    }
    if (key === 'moon-impact') {
      line([[1.6, .9, .2], [1.1, .66, .2], [.62, .42, .2], [.03, .27, .36]], C.gold)
      sphere(.05, [1.1, .66, .2], C.white)
      for (let i = 0; i < 5; i++) { const a = i * TAU / 5; line([[.03, .27, .36], [.03 + Math.cos(a) * .2, .27 + Math.sin(a) * .2, .36]], C.gold) }
    } else {
      if (key === 'far-side-imaging') {
        cylinder(.14, .14, .37, [1.17, .5, .3], C.silver, [0, 0, Math.PI / 2])
        cylinder(.055, .055, .1, [.93, .5, .3], C.ink, [0, 0, Math.PI / 2])
        sphere(.18, [-1.93, .12, 0], C.blue)
        label('EARTH', [-1.93, .51, 0], C.teal)
      } else {
        box([.25, .3, .25], [1.17, .5, .3], C.gold)
        panel(.25, .65, [.9, .5, .3]); panel(.25, .65, [1.44, .5, .3])
      }
      polygon([[1.1, .5, .44], [-.19, .42, .58], [-.01, -.12, .55]], C.teal, .16)
      line([[1.6, -.72, -.2], [1.3, -.2, .05], [1.17, .5, .3], [.94, 1.2, .25]], C.gold)
      if (key === 'ranger-imaging') for (const r of [.22, .15, .08]) line([[-.12 - r, .15 - r, .75], [-.12 + r, .15 - r, .75], [-.12 + r, .15 + r, .75], [-.12 - r, .15 + r, .75], [-.12 - r, .15 - r, .75]], C.gold)
    }
  } else if (key === 'moon-fiction') {
    polygon([[-1.5, -.8, 0], [0, -.97, .08], [0, .1, .08], [-1.5, .24, 0]], C.silver, 1)
    polygon([[0, -.97, .08], [1.5, -.8, 0], [1.5, .24, 0], [0, .1, .08]], C.white, 1)
    for (let y = -.6; y < .1; y += .15) for (const sign of [-1, 1]) line([[sign * .18, y - .04, .12], [sign * 1.3, y + .05, .12]], C.teal, .5)
    sphere(.36, [.7, 1.03, 0], C.silver)
    line([[-.6, .3, 0], [-.35, .74, 0], [.05, 1.03, 0], [.35, 1.06, 0]], C.gold)
  } else if (key === 'lunar-samples') {
    polygon([[-1.8, -.9, 0], [-1.2, -.77, 0], [-.4, -.85, 0], [.35, -.7, 0], [1.8, -.83, 0], [1.8, -1.1, .5], [-1.8, -1.1, .5]], C.silver, 1)
    cylinder(.13, .13, .28, [-.65, -.15, .1], C.gold)
    arrow([-.65, .05, .1], [-.65, 1.05, .1])
    arrow([-.2, .85, .1], [.52, .85, .1])
    capsule([1.0, .48, .1], .3)
  } else if (['giant-planet-encounters', 'saturn-flyby', 'saturn-orbiter', 'cassini-finale'].includes(key)) {
    const pair = key === 'giant-planet-encounters', center = pair ? [.95, 0, 0] : [0, 0, 0], r = pair ? .43 : .67
    bandedPlanet(r, center, C.gold)
    for (const f of [1.3, 1.5, 1.8]) ring(r * f, center, 'xz', C.silver)
    if (pair) {
      bandedPlanet(.64, [-1.05, 0, 0], C.orange)
      line([[-1.5, .85, .2], [-.6, .65, .4], [.2, .45, .5], [.9, .75, .3]], C.teal)
    } else if (key === 'saturn-flyby') {
      sphere(.14, [1.7, 0, -.3], C.orange)
      line([[-1.8, .25, -1.3], [-1.24, .25, -.9], [-.9, .25, -.15], [-1.3, .25, .9]], C.teal)
      box([.11, .12, .12], [-1.24, .25, -.9], C.silver)
      label('TITAN', [1.65, .39, -.3], C.gold)
    } else if (key === 'saturn-orbiter') {
      line(Array.from({ length: 100 }, (_, i) => { const a = i * TAU / 99; return [1.8 * Math.cos(a), .7 * Math.sin(a), 1.38 * Math.sin(a)] }), C.teal)
      box([.15, .2, .13], [-1.8, 0, 0], C.gold)
    } else {
      const path = Array.from({ length: 70 }, (_, i) => { const t = i / 69, a = -1.4 + t * 4.5, radius = 1.85 - t * 1.2; return [Math.cos(a) * radius, Math.sin(a) * .95 * (1 - t), Math.sin(a) * radius * .5] })
      line(path, C.gold)
      box([.12, .16, .12], path[48], C.silver)
    }
  } else {
    throw new Error(`Missing scene builder: ${key}`)
  }
  return items
}
