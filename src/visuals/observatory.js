import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { exhibitFor } from '../data/exhibits.js'
import { buildStudy, studyIllustration } from './study-renderer.js'

// All exhibits are locally constructed. A single, demand-rendered WebGL canvas
// serves the entire timeline; inactive exhibits retain a vector illustration.
const TYPES = new Set(['voyager', 'webb', 'sputnik', 'rocket', 'moon', 'mars', 'saturn', 'earth', 'telescope', 'orbit', 'blackhole', 'lander', 'station', 'dish'])
const COPY = {
  en: { rotate: 'Drag / two fingers · arrow keys', open: 'Explore in 3D', reset: 'Reset view', closer: 'Zoom in', farther: 'Zoom out', fallback: 'Illustrated reconstruction', model: 'Interactive 3D reconstruction', schematic: 'Schematic reconstruction · not to scale' },
  ko: { rotate: '드래그·두 손가락 회전 · 방향키', open: '3D로 살펴보기', reset: '시점 초기화', closer: '확대', farther: '축소', fallback: '도해로 보는 재구성', model: '상호작용 가능한 3D 재구성', schematic: '도식적 재구성 · 축척 다름' },
  ja: { rotate: 'ドラッグ・2本指で回転 · 矢印キー', open: '3Dで観察', reset: '視点をリセット', closer: '拡大', farther: '縮小', fallback: '図による再現', model: '操作できる3D再現', schematic: '模式的な再現 · 縮尺は異なります' },
}
const PALETTE = { silver: 0xbac6ca, white: 0xe1e4dd, dark: 0x29383e, gold: 0xcfac64, teal: 0x739fa0, blue: 0x3d6177 }
const TAU = Math.PI * 2
const SVG_NS = 'http://www.w3.org/2000/svg'

function svgNode(tag, attributes = {}, children = []) {
  const node = document.createElementNS(SVG_NS, tag)
  for (const [key, value] of Object.entries(attributes)) node.setAttribute(key, String(value))
  for (const child of children) node.append(child)
  return node
}

function variantFor(type, id) {
  const exhibit = exhibitFor(id)
  if (exhibit) return `study:${exhibit.key}`
  if (id === 'artemis2-lunar-flyby') return 'orion'
  if (type === 'rocket') {
    if (id === 'fire-arrows') return 'fireArrow'
    if (/shuttle|columbia-shenzhou/.test(id)) return 'shuttle'
    if (/falcon|crew-dragon|pluto-falcon/.test(id)) return 'falcon'
    if (/r7-/.test(id)) return 'r7'
    if (/a[245]-|v2-|postwar-v2|fruit-flies|albert-ii|r1-/.test(id)) return 'v2'
    if (/goddard|gird|vfr|tsiolkovsky|von-braun|korolev|paperclip|jupiter-c/.test(id)) return 'earlyRocket'
  }
  if (type === 'telescope') {
    if (id === 'galileo-telescope') return 'refractor'
    if (id === 'chandra-launch') return 'chandra'
    if (id === 'kepler-hubble-servicing') return 'kepler'
  }
  if (type === 'sputnik' && /explorer/.test(id)) return 'explorer'
  if (type === 'sputnik' && /vanguard/.test(id)) return 'vanguard'
  if (type === 'station') {
    if (/salyut|uranus-challenger-mir/.test(id)) return 'earlyStation'
    if (/skylab/.test(id)) return 'skylab'
  }
  if (type === 'lander') {
    if (/apollo-lunar-landings/.test(id)) return 'apollo'
    if (/huygens/.test(id)) return 'huygens'
    if (/rosetta-philae/.test(id)) return 'philae'
    if (id) return 'roboticLander'
  }
  if (type === 'dish' && id) return /juno/.test(id) ? 'juno' : /new-horizons/.test(id) ? 'newHorizons' : 'probe'
  return type
}

function illustration(type, label, copy, variant = type, phase = 0) {
  if (variant.startsWith('study:')) return studyIllustration(variant.slice(6), label, copy, phase)
  const root = svgNode('svg', { viewBox: '0 0 340 240', class: 'observatory__illustration', role: 'img', 'aria-label': `${label} — ${copy.schematic}`, focusable: 'false' })
  Object.assign(root.style, { width: '100%', height: '100%', position: 'absolute', inset: '0', pointerEvents: 'none' })
  const drawing = svgNode('g', { fill: 'none', stroke: '#94aeb0', 'stroke-width': '1.2', 'stroke-linejoin': 'round', 'stroke-linecap': 'round' })
  root.append(svgNode('path', { d: 'M25 120H315M170 23V210', stroke: '#617d81', opacity: '.15', 'stroke-dasharray': '3 6' }))
  root.append(svgNode('ellipse', { cx: 170, cy: 197, rx: 90, ry: 11, fill: '#5b797d', opacity: '.08' }))
  const add = (tag, attrs) => drawing.append(svgNode(tag, attrs))
  const path = (d, attrs = {}) => add('path', { d, ...attrs })
  const circle = (cx, cy, r, attrs = {}) => add('circle', { cx, cy, r, ...attrs })
  const ellipse = (cx, cy, rx, ry, attrs = {}) => add('ellipse', { cx, cy, rx, ry, ...attrs })
  if (variant === 'fireArrow') {
    path('M112 170L217 55M206 70L217 55L211 78', { stroke: '#d8c09a', 'stroke-width': '3' })
    path('M138 143L156 114L163 120L144 149Z', { fill: '#775947', stroke: '#af9776' })
    path('M113 171L88 179L103 157M119 162L94 171', { fill: '#7b6852' })
  } else if (variant === 'refractor') {
    path('M99 150L205 75L214 90L111 163Z', { fill: '#776653', stroke: '#cfba91' })
    path('M203 74L207 68L222 89L215 94M101 149L96 151L107 167L112 163', { fill: '#9e8969' })
    path('M151 130L163 177M163 174L132 209M163 174L194 209M163 179L160 216', { stroke: '#9b8b74', 'stroke-width': '2' })
  } else if (variant === 'shuttle') {
    path('M154 189L151 73Q152 46 170 30Q188 46 189 73L186 189Z', { fill: '#b4b8ab', stroke: '#c9c9b8' })
    path('M157 186L146 139L128 190L137 192M184 186L195 139L211 190L203 192', { fill: '#d0d4ce' })
    path('M162 80L161 167L131 183L153 185L159 199L181 199L187 185L207 183L179 167L177 80Q170 59 162 80Z', { fill: '#d4d8d1', stroke: '#909e9e' })
    path('M161 93L179 93M162 98L178 98M162 185H178', { stroke: '#303f43', 'stroke-width': '4' })
  } else if (variant === 'earlyRocket' || variant === 'v2' || variant === 'falcon' || variant === 'r7') {
    path('M157 189L157 77Q159 51 170 29Q181 51 183 77L183 189Z', { fill: variant === 'v2' ? '#84928d' : '#bdc7c4', stroke: '#d2d8d0' })
    path('M157 173L140 196L157 190M183 173L200 196L183 190', { fill: '#708789' })
    path('M157 112H183M157 147H183M161 190L159 201L181 201L179 190', { stroke: '#536468', 'stroke-width': '3' })
    if (variant === 'r7') path('M154 97L143 134L139 195H155M186 97L197 134L201 195H185', { fill: '#778884' })
    if (variant === 'earlyRocket') path('M133 204H207M143 202L156 148M197 202L184 148', { opacity: '.5' })
  } else if (variant === 'huygens') {
    path('M105 150Q170 178 235 150L223 113Q170 94 117 113Z', { fill: '#967c57', stroke: '#cdb791' })
    ellipse(170, 113, 53, 16, { fill: '#a18b64', stroke: '#cdb791' })
    ellipse(170, 150, 65, 18, { stroke: '#d3be98' })
    path('M143 106L143 95M197 106L197 95M169 98V75', { stroke: '#c9d0c6' })
  } else if (variant === 'philae' || variant === 'roboticLander') {
    path('M143 91L180 84L198 104L191 138L149 143L133 122Z', { fill: '#a39263', stroke: '#c8b686' })
    path('M145 138L129 171L110 193M187 136L213 171L229 194M167 141L169 202', { stroke: '#c5ccc3', 'stroke-width': '2' })
    path('M102 193H124M218 194H239M160 202H179')
    if (variant === 'philae') path('M143 91L180 84L194 103L153 112Z', { fill: '#496577', stroke: '#889fa5' })
    else { ellipse(171, 88, 19, 10, { fill: '#aeb8b0' }); path('M171 77V65M154 123L126 138L143 160L167 146M191 118L216 121L219 142L194 138', { fill: '#405d71' }) }
  } else if (variant === 'explorer') {
    path('M144 150L180 67L194 73L157 157Z', { fill: '#bcc8c6', stroke: '#cdd7cd' })
    path('M178 71L169 69L185 41L191 75M161 128L94 123M162 130L146 197M176 96L224 79M177 94L202 41', { stroke: '#97afb0' })
    path('M170 88L184 94M163 104L177 110M156 120L171 126', { stroke: '#435861', 'stroke-width': '4' })
  } else if (['probe', 'newHorizons', 'juno'].includes(variant)) {
    ellipse(171, 98, 45, 33, { fill: '#8b9388', stroke: '#cdd1bf' })
    path('M129 84L172 65L215 84M172 65V103')
    path('M147 131L181 126L196 153L185 177L149 174L137 148Z', { fill: '#b09562', stroke: '#d4bb85' })
    if (variant === 'newHorizons') path('M143 159L115 177L108 164L133 149', { fill: '#47565b' })
    else { path('M139 147L106 126L64 177L99 198ZM195 147L230 127L273 178L238 198Z', { fill: '#3d5871', stroke: '#729298' }); if (variant === 'juno') path('M164 173L147 213L190 213L178 174Z', { fill: '#3d5871' }) }
  } else if (variant === 'orion') {
    path('M149 79L162 59L181 59L194 79L190 109L151 109Z', { fill: '#d1d4cb', stroke: '#e1e0d2' })
    path('M153 110L188 110L190 144L151 144Z', { fill: '#8b9a9b' })
    path('M152 124L119 107L67 127L103 147L153 132M188 124L221 107L274 127L238 147L188 132M158 142L135 169L163 189L173 150M178 142L202 169L174 189L164 150', { fill: '#3f5c76', stroke: '#8aa2a8' })
    path('M162 145L160 159L180 159L178 145', { fill: '#3e4d50' })
  } else if (variant === 'earlyStation' || variant === 'skylab') {
    path('M119 110L194 87L218 110L204 138L130 161L108 138Z', { fill: '#9daaaa', stroke: '#cad4c8' })
    path('M115 107L106 105L94 134L108 138M204 93L221 88L239 104L222 119L215 116', { fill: '#879b9c' })
    path('M153 104L128 59L161 47L185 93ZM169 147L189 189L224 177L205 136Z', { fill: '#3c5872', stroke: '#75939b' })
    if (variant === 'skylab') path('M106 127L65 105L83 72L125 97M119 145L87 178L65 155L97 121', { fill: '#526471' })
  } else if (type === 'voyager' || type === 'dish') {
    ellipse(173, 89, 57, 42, { fill: '#263238', stroke: '#d0d5ce' })
    path('M119 77Q170 126 224 77M122 100Q170 142 218 100', { opacity: '.4' })
    path('M118 77L175 48L223 77M175 48L174 101', { stroke: '#d0d5ce' })
    if (type === 'voyager') {
      path('M153 129L184 122L208 140L200 163L165 169L143 151Z', { fill: '#475052' })
      circle(178, 148, 10, { fill: '#b3975e', stroke: '#d4b16c' })
      circle(178, 148, 6, { stroke: '#e0c58b', opacity: '.5' })
      path('M153 143L43 159M151 146L43 159M203 145L277 169M203 149L277 169', { stroke: '#98aaa8' })
      path('M43 159L57 154M66 156L77 152M88 153L97 149', { stroke: '#d0d5ce' })
      for (let i = 0; i < 3; i++) {
        const x = 247 + i * 15
        path(`M${x} 154L${x + 9} 157L${x + 6} 177L${x - 3} 174Z`, { fill: '#364144' })
        path(`M${x - 1} 158L${x + 8} 161M${x - 2} 164L${x + 7} 167M${x - 3} 170L${x + 6} 173`)
      }
      path('M177 166L179 192M197 163L223 181')
    } else {
      path('M174 132L174 171M174 147L139 189M174 147L207 189M133 191H215', { stroke: '#d0d5ce' })
    }
  } else if (type === 'webb') {
    path('M71 164L144 127L268 151L244 199L153 208Z', { fill: '#899096', stroke: '#abb7bd' })
    for (let n = 0; n < 4; n++) path(`M74 ${168 + n * 4}L153 ${211 + n * 2}L246 ${203 + n * 3}`, { opacity: '.55' })
    for (let q = -2; q <= 2; q++) for (let r = -2; r <= 2; r++) {
      if (Math.abs(q + r) > 2 || (q === 0 && r === 0)) continue
      const x = 170 + Math.sqrt(3) * 13.8 * (q + r / 2), y = 87 + 20.7 * r
      const points = Array.from({ length: 6 }, (_, i) => `${x + 13.2 * Math.cos(TAU * i / 6 + Math.PI / 6)},${y + 13.2 * Math.sin(TAU * i / 6 + Math.PI / 6)}`).join(' ')
      add('polygon', { points, fill: '#b89958', stroke: '#e0c78b', 'stroke-width': '.7' })
    }
    path('M131 67L169 120L209 67M170 122L168 148', { stroke: '#bbc4c7' })
    ellipse(170, 120, 8, 5, { fill: '#5b6365' })
  } else if (type === 'sputnik') {
    circle(167, 105, 43, { fill: '#6e8084', stroke: '#c8d0cd' })
    path('M137 84Q150 61 179 72M127 108Q163 143 207 101', { stroke: '#dce0d7', opacity: '.7' })
    path('M141 136L86 213M158 144L139 220M185 143L203 220M202 132L259 205', { stroke: '#bdc9c7', 'stroke-width': '1.8' })
    path('M136 92L137 100M192 85L195 95', { opacity: '.5' })
  } else if (['earth', 'moon', 'mars', 'saturn'].includes(type)) {
    const color = type === 'mars' ? '#925f4c' : type === 'moon' ? '#747d7d' : type === 'saturn' ? '#b09a71' : '#3b6171'
    circle(170, 119, 64, { fill: color, stroke: '#c1c9bc' })
    if (type === 'earth') {
      path('M122 84L143 72L157 87L151 109L168 121L156 142L149 172L133 147L130 120L118 107M193 66L209 92L196 105L202 119L220 114L229 139L209 144L197 159L179 137L179 117L188 105L174 91Z', { fill: '#85988a', stroke: '#93a699' })
      path('M111 100Q165 80 229 110M115 146Q182 158 222 135', { stroke: '#d1d8d4', opacity: '.65', 'stroke-width': '4' })
    } else if (type === 'saturn') {
      ellipse(170, 122, 111, 30, { transform: 'rotate(-20 170 122)', stroke: '#c4b28a', 'stroke-width': '13', opacity: '.85' })
      path('M113 98Q170 110 229 102M108 119Q170 130 230 119M116 144Q166 155 225 143', { opacity: '.6' })
    } else {
      const pits = [[140, 91, 11], [196, 115, 18], [151, 141, 14], [193, 159, 7], [121, 124, 6], [180, 80, 9]]
      for (const [x, y, r] of pits) { circle(x, y, r, { stroke: '#ded7c1', opacity: '.32' }); path(`M${x - r * .6} ${y}Q${x} ${y - r} ${x + r * .6} ${y}`, { stroke: '#3c494a', opacity: '.5' }) }
      if (type === 'mars') path('M175 63L188 65L184 74L168 73Z', { fill: '#d7d7be', stroke: 'none' })
    }
  } else if (type === 'rocket') {
    path('M156 184L156 69Q157 48 170 29Q183 48 184 69V184Z', { fill: '#c4ccc8', stroke: '#e6e5d9' })
    path('M156 74H184M156 106H184M156 137H184M157 163H183', { stroke: '#546167', 'stroke-width': '5' })
    path('M156 162L143 191L156 185M184 162L197 191L184 185', { fill: '#758489' })
    path('M161 185L159 196L181 196L179 185', { fill: '#46545b' })
    path('M164 198L170 216L176 198', { stroke: '#c5a66d', opacity: '.8' })
  } else if (type === 'telescope') {
    path('M123 145L170 79L195 95L147 159Z', { fill: '#546b73', stroke: '#b8c8c7' })
    ellipse(183, 87, 15, 8, { transform: 'rotate(34 183 87)', fill: '#233b46', stroke: '#a1b7b9' })
    path('M152 130L161 185M161 169L132 209M161 169L189 209M161 172L161 215', { stroke: '#c2c8bd', 'stroke-width': '2' })
    path('M94 114L133 87L158 101L119 128ZM168 149L207 122L234 137L194 164Z', { fill: '#2f4b61', stroke: '#719098' })
    path('M106 106L132 120M119 97L145 111M180 141L206 155M194 132L219 146', { opacity: '.5' })
  } else if (type === 'orbit') {
    circle(170, 120, 21, { fill: '#baa062', stroke: '#e0c080' })
    for (const [rx, ry] of [[45, 25], [76, 43], [111, 66]]) ellipse(170, 120, rx, ry, { transform: 'rotate(-24 170 120)', opacity: '.65' })
    circle(126, 125, 6, { fill: '#6e999d' }); circle(216, 76, 9, { fill: '#7c8895' }); circle(264, 91, 12, { fill: '#a39179' })
    path('M165 120H175M170 115V125', { stroke: '#edd19b' })
  } else if (type === 'blackhole') {
    ellipse(170, 130, 111, 27, { transform: 'rotate(-14 170 130)', stroke: '#cdb07a', 'stroke-width': '8', opacity: '.75' })
    circle(170, 117, 45, { fill: '#0d171d', stroke: '#b49a70', 'stroke-width': '7' })
    path('M65 150Q160 103 277 111', { stroke: '#ead3a5', 'stroke-width': '4' })
    path('M134 99Q153 67 187 78', { stroke: '#f0deba', 'stroke-width': '2', opacity: '.65' })
  } else if (type === 'lander') {
    path('M144 89L174 74L199 97L188 133L153 139L134 115Z', { fill: '#a99561', stroke: '#d2be8e' })
    path('M143 128L126 164L113 193M185 130L209 166L225 193M158 137L169 177L168 202', { stroke: '#c8cfc7', 'stroke-width': '2' })
    path('M102 193H124M213 193H236M157 202H179M145 111L190 103', { stroke: '#c8cfc7' })
    path('M158 83L158 59L177 49L187 62L174 76', { fill: '#7f9195' })
    path('M152 117L176 121L171 143L154 145Z', { fill: '#4a5559' })
    path('M188 81L199 60M198 58L212 57', { stroke: '#c8cfc7' })
  } else if (type === 'station') {
    path('M72 86L268 129M75 98L268 141M169 94L158 158', { stroke: '#b9c7c8', 'stroke-width': '2' })
    for (let i = 0; i < 4; i++) {
      const x = 81 + i * 49, y = 56 + i * 11
      path(`M${x} ${y}L${x + 27} ${y + 6}L${x + 12} ${y + 73}L${x - 15} ${y + 67}Z`, { fill: '#465d75', stroke: '#8898ab' })
      for (let j = 1; j <= 4; j++) path(`M${x - j * 3} ${y + j * 14}L${x + 27 - j * 3} ${y + 6 + j * 14}`, { opacity: '.4' })
    }
    path('M135 119L191 132L186 155L130 142Z', { fill: '#a2afb0', stroke: '#d0d5cc' })
    path('M165 122L157 158L181 163L189 127Z', { fill: '#a2afb0', stroke: '#d0d5cc' })
    path('M146 145L138 173L157 177L164 149', { fill: '#87999d' })
  }
  root.append(drawing)
  root.append(svgNode('path', { d: 'M28 35V25H38M302 25H312V35M28 205V215H38M302 215H312V205', stroke: '#6f898c', opacity: '.35', fill: 'none' }))
  return root
}

function material(color, metalness = .45, roughness = .42) {
  return new THREE.MeshStandardMaterial({ color, metalness, roughness })
}

function modelBuilder() {
  const group = new THREE.Group()
  const mats = {
    silver: material(PALETTE.silver, .8, .3), white: material(PALETTE.white, .38, .4), dark: material(PALETTE.dark, .6, .48),
    gold: material(PALETTE.gold, .82, .3), teal: material(PALETTE.teal, .6, .4), blue: material(PALETTE.blue, .58, .33),
  }
  const mesh = (geometry, mat, position = [0, 0, 0], rotation = [0, 0, 0], parent = group) => {
    const item = new THREE.Mesh(geometry, typeof mat === 'string' ? mats[mat] : mat)
    item.position.set(...position); item.rotation.set(...rotation); parent.add(item)
    return item
  }
  const box = (size, mat, position, rotation, parent) => mesh(new THREE.BoxGeometry(...size), mat, position, rotation, parent)
  const cylinder = (r1, r2, length, mat, position, rotation, sides = 32, parent) => mesh(new THREE.CylinderGeometry(r1, r2, length, sides), mat, position, rotation, parent)
  const rod = (start, end, radius = .022, mat = 'silver') => {
    const a = new THREE.Vector3(...start), b = new THREE.Vector3(...end), distance = a.distanceTo(b)
    const item = cylinder(radius, radius, distance, mat, a.clone().add(b).multiplyScalar(.5).toArray())
    item.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.sub(a).normalize())
    return item
  }
  const sphere = (radius, mat, position, segments = 48) => mesh(new THREE.SphereGeometry(radius, segments, 32), mat, position)
  const dish = (radius, depth, position, rotation = [Math.PI / 2, 0, 0], mat = 'white') => {
    const profile = Array.from({ length: 24 }, (_, i) => { const r = radius * i / 23; return new THREE.Vector2(r, depth * (r / radius) ** 2) })
    const surface = mats[mat].clone(); surface.side = THREE.DoubleSide
    return mesh(new THREE.LatheGeometry(profile, 64), surface, position, rotation)
  }
  return { group, mats, mesh, box, cylinder, rod, sphere, dish }
}

function solarPanel(b, width, height, position, rotation = [0, 0, 0]) {
  const panel = b.box([width, height, .035], 'blue', position, rotation)
  const vertices = []
  for (let i = 1; i < 5; i++) { const x = -width / 2 + width * i / 5; vertices.push(x, -height / 2, .022, x, height / 2, .022) }
  for (let j = 1; j < 9; j++) { const y = -height / 2 + height * j / 9; vertices.push(-width / 2, y, .022, width / 2, y, .022) }
  const lines = new THREE.LineSegments(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3)), new THREE.LineBasicMaterial({ color: 0xa4b6ba, transparent: true, opacity: .48 }))
  panel.add(lines)
  return panel
}

function voyager(b) {
  // Ten-sided instrument bus, 3.7-m high-gain dish, RTG boom, magnetometer
  // boom and the golden record. Dimensions are fitted to the exhibit frame.
  b.cylinder(.61, .61, .47, 'dark', [0, -.25, -.38], [Math.PI / 2, 0, 0], 10)
  b.cylinder(.62, .62, .03, 'gold', [0, -.25, -.14], [Math.PI / 2, 0, 0], 10)
  b.dish(1.25, .28, [0, .15, -.06])
  b.mesh(new THREE.TorusGeometry(1.25, .025, 8, 64), 'silver', [0, .15, .22])
  for (let i = 0; i < 3; i++) {
    const angle = TAU * i / 3 + Math.PI / 6
    b.rod([Math.cos(angle) * 1.14, .15 + Math.sin(angle) * 1.14, .2], [0, .15, .83], .018)
  }
  b.cylinder(.09, .055, .16, 'white', [0, .15, .82], [Math.PI / 2, 0, 0])
  // The record cover sits on the side of the bus, perpendicular to the dish.
  b.cylinder(.225, .225, .015, 'gold', [.595, -.25, -.37], [0, 0, Math.PI / 2])
  b.mesh(new THREE.TorusGeometry(.174, .004, 6, 40), 'gold', [.608, -.25, -.37], [0, Math.PI / 2, 0])
  b.rod([.61, -.25, -.37], [.611, -.07, -.37], .003, 'dark')
  b.rod([.61, -.25, -.37], [.611, -.25, -.2], .003, 'dark')
  // A long, open truss carries the magnetometer clear of the spacecraft.
  const start = [-.51, -.4, -.35], end = [-3.7, -.15, -.6]
  b.rod(start, end, .012)
  b.rod([-.51, -.3, -.5], [-3.7, -.15, -.6], .012)
  for (let i = 0; i < 11; i++) {
    const t = i / 11, t2 = (i + 1) / 11
    b.rod([-.51 - 3.19 * t, -.4 + .25 * t, -.35 - .25 * t], [-.51 - 3.19 * t2, -.3 + .15 * t2, -.5 - .1 * t2], .006)
  }
  b.box([.12, .09, .09], 'dark', end)
  b.rod([.4, -.48, -.4], [1.6, -.8, -.55], .032)
  for (let i = 0; i < 3; i++) {
    const x = 1.65 + i * .38
    b.cylinder(.14, .14, .32, 'dark', [x, -.8, -.55], [0, 0, Math.PI / 2], 16)
    for (let k = 0; k < 8; k++) {
      const angle = k * TAU / 8
      b.box([.31, .018, .11], 'dark', [x, -.8 + Math.cos(angle) * .17, -.55 + Math.sin(angle) * .17], [angle, 0, 0])
    }
    b.cylinder(.13, .13, .025, 'silver', [x + .16, -.8, -.55], [0, 0, Math.PI / 2])
  }
  b.rod([.12, -.48, -.45], [.6, -1.16, -.6], .045)
  b.box([.34, .2, .32], 'white', [.69, -1.23, -.64], [.1, 0, -.25])
  b.cylinder(.085, .075, .28, 'dark', [.69, -1.23, -.43], [Math.PI / 2, 0, 0])
  b.rod([-.3, -.48, -.4], [-.6, -1.83, -.7], .009)
  b.rod([.31, -.48, -.4], [1.02, -1.7, -.5], .009)
  return b.group
}

function webb(b) {
  for (let layer = 0; layer < 5; layer++) {
    const scale = 1 - layer * .035
    const shape = new THREE.Shape()
    shape.moveTo(-1.7 * scale, -.4 * scale); shape.lineTo(-1.05 * scale, -2.0 * scale)
    shape.lineTo(.95 * scale, -2.0 * scale); shape.lineTo(1.7 * scale, -.45 * scale)
    shape.lineTo(.98 * scale, 1.35 * scale); shape.lineTo(-.97 * scale, 1.35 * scale); shape.closePath()
    const foil = material(layer % 2 ? 0x989faa : 0xbac0ca, .75, .34); foil.side = THREE.DoubleSide
    b.mesh(new THREE.ShapeGeometry(shape), foil, [0, -1.09 + layer * .075, -.16], [-Math.PI / 2, 0, 0])
  }
  b.box([.63, .22, .59], 'gold', [0, -1.31, -.25])
  solarPanel(b, .38, .84, [.28, -1.76, -.45], [-.4, 0, 0])
  const r = .31, spacing = .322
  for (let q = -2; q <= 2; q++) for (let row = -2; row <= 2; row++) {
    if (Math.abs(q + row) > 2 || (q === 0 && row === 0)) continue
    const x = Math.sqrt(3) * spacing * (q + row / 2), y = .5 + spacing * 1.5 * row
    // A cylinder's local axis is Y. Rotate only around X so every hexagonal
    // face stays in the mirror plane; adding Euler Z would tilt the segments.
    const hex = b.cylinder(r, r, .055, 'gold', [x, y, 0], [Math.PI / 2, 0, 0], 6)
    const edge = new THREE.LineSegments(new THREE.EdgesGeometry(hex.geometry), new THREE.LineBasicMaterial({ color: 0xf2d596, transparent: true, opacity: .5 }))
    hex.add(edge)
    b.box([.16, .15, .2], 'dark', [x, y, -.13])
  }
  b.box([.63, .52, .34], 'dark', [0, .38, -.27])
  b.rod([-.93, .9, -.02], [0, .18, 1.17], .014)
  b.rod([.93, .9, -.02], [0, .18, 1.17], .014)
  b.rod([0, -.49, -.02], [0, .18, 1.17], .014)
  b.cylinder(.105, .105, .045, 'silver', [0, .18, 1.17], [Math.PI / 2, 0, 0], 18)
  b.rod([-.67, -1.01, -.55], [-.61, -.38, -.3], .024)
  b.rod([.67, -1.01, -.55], [.61, -.38, -.3], .024)
  return b.group
}

function sputnik(b) {
  b.sphere(.72, 'silver')
  b.mesh(new THREE.TorusGeometry(.721, .008, 6, 64), 'dark', [0, 0, 0], [Math.PI / 2, 0, 0])
  for (const [x, z, length] of [[-.4, -.4, 2.2], [.4, -.4, 2.2], [-.4, .4, 2.6], [.4, .4, 2.6]]) {
    b.rod([x, -.5, z], [x * 2.2, -length, z * 2.3], .014)
    b.sphere(.04, 'dark', [x, -.5, z], 16)
  }
  return b.group
}

function rocket(b) {
  // Saturn V silhouette: instrument unit, three stages and Apollo spacecraft.
  b.cylinder(.25, .25, 2.28, 'white', [0, -.13, 0])
  for (const [y, height] of [[-.98, .18], [.0, .12], [.84, .14]]) b.cylinder(.253, .253, height, 'dark', [0, y, 0])
  b.cylinder(.17, .25, .45, 'white', [0, 1.23, 0])
  b.cylinder(.11, .17, .39, 'silver', [0, 1.65, 0])
  b.cylinder(.025, .11, .22, 'white', [0, 1.955, 0])
  b.cylinder(.012, .012, .32, 'white', [0, 2.225, 0])
  for (let i = 0; i < 4; i++) {
    const angle = i * Math.PI / 2
    const fin = new THREE.Shape(); fin.moveTo(.24, -1.02); fin.lineTo(.42, -1.4); fin.lineTo(.24, -1.33); fin.closePath()
    b.mesh(new THREE.ShapeGeometry(fin), new THREE.MeshStandardMaterial({ color: PALETTE.silver, side: THREE.DoubleSide }), [0, 0, 0], [0, angle, 0])
    b.cylinder(.075, .11, .19, 'dark', [Math.cos(angle) * .135, -1.365, Math.sin(angle) * .135])
  }
  b.cylinder(.075, .11, .19, 'dark', [0, -1.365, 0])
  for (let i = 0; i < 4; i++) b.box([.064, .56, .012], 'dark', [Math.sin(i * Math.PI / 2) * .245, -.57, Math.cos(i * Math.PI / 2) * .245], [0, i * Math.PI / 2, 0])
  return b.group
}

function seeded(seed) { let value = seed >>> 0; return () => { value = (value * 1664525 + 1013904223) >>> 0; return value / 4294967296 } }

function planetTexture(type) {
  const canvas = document.createElement('canvas'); canvas.width = 1024; canvas.height = 512
  const ctx = canvas.getContext('2d')
  if (!ctx) return null
  const rand = seeded(type === 'earth' ? 721 : type === 'mars' ? 447 : 219)
  ctx.fillStyle = type === 'earth' ? '#294960' : type === 'mars' ? '#a87456' : type === 'saturn' ? '#c6b78e' : '#959b96'
  ctx.fillRect(0, 0, 1024, 512)
  if (type === 'earth') {
    // Hand-drawn equirectangular continental silhouettes, avoiding external maps.
    const continents = [
      [[66, 137], [113, 87], [200, 80], [256, 124], [230, 157], [191, 173], [198, 204], [159, 230], [127, 201], [97, 159]],
      [[215, 231], [263, 235], [282, 273], [265, 309], [259, 354], [231, 411], [215, 368], [197, 329], [194, 286]],
      [[443, 168], [489, 152], [525, 159], [549, 202], [533, 258], [504, 307], [477, 288], [465, 239]],
      [[466, 148], [480, 104], [541, 103], [580, 73], [670, 72], [743, 106], [810, 121], [844, 153], [807, 175], [760, 181], [749, 214], [711, 213], [688, 191], [653, 219], [631, 193], [614, 157], [570, 166], [536, 144]],
      [[749, 311], [804, 285], [848, 300], [867, 337], [831, 357], [778, 350]],
      [[281, 57], [321, 47], [327, 87], [299, 119], [278, 88]],
    ]
    ctx.fillStyle = '#798372'
    for (const points of continents) { ctx.beginPath(); points.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.closePath(); ctx.fill() }
    ctx.fillStyle = '#c6c8ba'; ctx.beginPath(); ctx.moveTo(0, 468); for (let x = 0; x <= 1024; x += 16) ctx.lineTo(x, 461 + rand() * 19); ctx.lineTo(1024, 512); ctx.lineTo(0, 512); ctx.fill()
    ctx.fillStyle = 'rgba(217,223,209,.37)'
    for (let n = 0; n < 140; n++) { ctx.beginPath(); ctx.ellipse(rand() * 1024, rand() * 475, 12 + rand() * 41, 2 + rand() * 5, -.15, 0, TAU); ctx.fill() }
  } else if (type === 'saturn') {
    for (let y = 0; y < 512; y++) { ctx.fillStyle = `rgba(${rand() > .5 ? '128,103,76' : '241,224,179'},${.1 + rand() * .16})`; ctx.fillRect(0, y, 1024, 1 + rand() * 7) }
  } else {
    for (let n = 0; n < 6500; n++) { ctx.fillStyle = `rgba(${rand() > .5 ? '224,213,187' : '47,52,51'},${.025 + rand() * .12})`; ctx.beginPath(); ctx.ellipse(rand() * 1024, rand() * 512, 1 + rand() * 8, 1 + rand() * 5, rand() * TAU, 0, TAU); ctx.fill() }
    for (let n = 0; n < 100; n++) {
      const x = rand() * 1024, y = rand() * 512, radius = 3 + rand() * 23
      const grad = ctx.createRadialGradient(x - radius * .2, y - radius * .2, 0, x, y, radius)
      grad.addColorStop(0, 'rgba(36,37,35,.27)'); grad.addColorStop(.67, 'rgba(39,39,36,.1)'); grad.addColorStop(.84, 'rgba(216,207,184,.2)'); grad.addColorStop(1, 'rgba(216,207,184,0)')
      ctx.fillStyle = grad; ctx.beginPath(); ctx.ellipse(x, y, radius * 1.45, radius, 0, 0, TAU); ctx.fill()
    }
    if (type === 'mars') { ctx.fillStyle = '#d4cfbd'; ctx.fillRect(0, 0, 1024, 17); ctx.fillStyle = 'rgba(85,57,44,.2)'; ctx.beginPath(); ctx.ellipse(630, 276, 115, 24, .07, 0, TAU); ctx.fill() }
  }
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace; texture.anisotropy = 2
  return texture
}

function planet(b, type) {
  const mat = material(type === 'earth' ? 0xced5d0 : 0xffffff, .02, .96); mat.map = planetTexture(type)
  b.sphere(1, mat)
  if (type === 'earth') {
    const atmosphere = new THREE.MeshBasicMaterial({ color: 0x819fae, transparent: true, opacity: .055, side: THREE.BackSide })
    b.sphere(1.038, atmosphere)
    b.group.rotation.z = -.409
  }
  if (type === 'saturn') {
    const ringMat = new THREE.MeshStandardMaterial({ color: 0xc6b692, metalness: .06, roughness: .85, side: THREE.DoubleSide, transparent: true, opacity: .74 })
    b.mesh(new THREE.RingGeometry(1.25, 1.72, 96), ringMat, [0, 0, 0], [Math.PI / 2, 0, 0])
    b.mesh(new THREE.RingGeometry(1.79, 2.08, 96), ringMat.clone(), [0, 0, 0], [Math.PI / 2, 0, 0])
    b.mesh(new THREE.RingGeometry(1.13, 1.23, 96), new THREE.MeshStandardMaterial({ color: 0x867d6a, side: THREE.DoubleSide, transparent: true, opacity: .25 }), [0, 0, 0], [Math.PI / 2, 0, 0])
    b.group.rotation.z = -.47
  }
  return b.group
}

function telescope(b) {
  // Hubble's cylindrical optical tube, aperture, service section and wings.
  b.cylinder(.41, .41, 1.76, 'silver', [0, 0, 0], [Math.PI / 2, 0, 0])
  b.cylinder(.35, .35, .1, 'dark', [0, 0, .91], [Math.PI / 2, 0, 0])
  b.dish(.28, .06, [0, 0, .964], [Math.PI / 2, 0, 0], 'dark')
  b.mesh(new THREE.TorusGeometry(.404, .025, 8, 48), 'white', [0, 0, .91])
  b.cylinder(.53, .41, .6, 'white', [0, 0, -1.14], [Math.PI / 2, 0, 0])
  b.box([.16, .48, .09], 'silver', [0, .27, 1.02], [-.25, 0, 0])
  b.rod([-1.35, 0, -.41], [1.35, 0, -.41], .025)
  solarPanel(b, .64, 1.25, [-1.32, 0, -.42], [0, 0, .15])
  solarPanel(b, .64, 1.25, [1.32, 0, -.42], [0, 0, .15])
  b.rod([0, -.4, -.6], [0, -.72, -.65], .04)
  b.dish(.22, .06, [0, -.72, -.66], [Math.PI / 2 + .5, 0, 0])
  b.group.rotation.set(.12, -.5, -.45)
  return b.group
}

function orbit(b) {
  b.sphere(.29, material(0xddbc77, .15, .8))
  const radii = [.62, 1.05, 1.5, 2.05]
  for (let i = 0; i < radii.length; i++) {
    const radius = radii[i], points = Array.from({ length: 97 }, (_, n) => new THREE.Vector3(Math.cos(n * TAU / 96) * radius, 0, Math.sin(n * TAU / 96) * radius))
    b.group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), new THREE.LineBasicMaterial({ color: 0x73949b, transparent: true, opacity: .48 })))
    const angle = [.8, 2.1, 4.5, 5.9][i]
    b.sphere([.06, .09, .12, .08][i], material([0xaba494, 0xc6b392, 0x688596, 0xb17a60][i]), [Math.cos(angle) * radius, 0, Math.sin(angle) * radius], 24)
  }
  return b.group
}

function blackhole(b) {
  b.sphere(.58, new THREE.MeshBasicMaterial({ color: 0x020509 }))
  b.mesh(new THREE.TorusGeometry(.65, .065, 12, 96), new THREE.MeshBasicMaterial({ color: 0xc8a373 }))
  for (let i = 0; i < 18; i++) {
    const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(.105, .34, .39 + i * .013), side: THREE.DoubleSide, transparent: true, opacity: .18 + (18 - i) * .015 })
    b.mesh(new THREE.RingGeometry(.76 + i * .034, .79 + i * .034, 96), mat, [0, 0, 0], [Math.PI / 2 + .15, 0, 0])
  }
  b.group.rotation.z = -.2
  return b.group
}

function lander(b) {
  b.cylinder(.59, .59, .35, 'gold', [0, -.36, 0], [0, Math.PI / 8, 0], 8)
  b.box([.7, .53, .57], 'silver', [0, .17, -.05])
  b.box([.29, .23, .025], 'dark', [.19, .29, .252], [0, 0, -.16])
  b.box([.21, .18, .025], 'dark', [-.22, .28, .252], [0, 0, .15])
  b.cylinder(.11, .23, .31, 'dark', [0, -.68, 0])
  for (let i = 0; i < 4; i++) {
    const angle = i * Math.PI / 2 + Math.PI / 4, x = Math.cos(angle), z = Math.sin(angle)
    b.rod([x * .45, -.2, z * .45], [x * 1.12, -1, z * 1.12], .026)
    b.rod([x * .48, -.44, z * .48], [x * .88, -.72, z * .88], .016, 'gold')
    b.cylinder(.2, .2, .025, 'silver', [x * 1.12, -1, z * 1.12])
  }
  b.rod([-.33, .22, -.15], [-.55, .75, -.15], .015)
  b.dish(.21, .055, [-.55, .75, -.15], [.9, -.6, 0])
  b.rod([.2, .45, -.15], [.2, .89, -.15], .013)
  for (let i = 0; i < 5; i++) b.box([.22, .014, .04], 'silver', [0, -.05 - i * .14, .58 + i * .075])
  return b.group
}

function station(b) {
  b.box([3.55, .055, .09], 'silver', [0, .3, 0])
  for (const x of [-1.43, -.88, .88, 1.43]) {
    solarPanel(b, .43, .89, [x, 1.01, 0]); solarPanel(b, .43, .89, [x, -.41, 0])
    b.rod([x, -.89, 0], [x, 1.49, 0], .012)
  }
  b.cylinder(.19, .19, 1.85, 'white', [0, 0, 0], [Math.PI / 2, 0, 0])
  b.cylinder(.19, .19, 1.18, 'silver', [0, 0, -.03], [0, 0, Math.PI / 2])
  b.cylinder(.12, .19, .45, 'silver', [0, 0, 1.15], [Math.PI / 2, 0, 0])
  b.cylinder(.17, .17, .44, 'white', [-.77, 0, -.04], [0, 0, Math.PI / 2])
  b.box([.45, .01, .49], 'silver', [-.52, .44, -.22])
  b.box([.45, .01, .49], 'silver', [.52, .44, -.22])
  b.rod([.14, .1, .37], [.58, .55, .55], .023)
  b.rod([.58, .55, .55], [.91, .66, .92], .023)
  b.box([.2, .33, .25], 'dark', [0, -.25, -.91])
  b.group.rotation.set(.12, -.2, -.15)
  return b.group
}

function radioDish(b) {
  b.dish(1.08, .33, [0, .1, 0], [.86, 0, 0])
  for (let i = 0; i < 3; i++) {
    const angle = TAU * i / 3
    const start = new THREE.Vector3(Math.cos(angle) * 1.03, .33, Math.sin(angle) * 1.03).applyEuler(new THREE.Euler(.86, 0, 0)).add(new THREE.Vector3(0, .1, 0))
    const end = new THREE.Vector3(0, .95, 0).applyEuler(new THREE.Euler(.86, 0, 0)).add(new THREE.Vector3(0, .1, 0))
    b.rod(start.toArray(), end.toArray(), .018)
  }
  b.cylinder(.15, .22, .78, 'silver', [0, -.55, 0])
  for (const [x, z] of [[-.52, -.34], [.52, -.34], [0, .56]]) b.rod([0, -.36, 0], [x, -1.09, z], .04)
  b.cylinder(.65, .65, .05, 'dark', [0, -1.12, 0], undefined, 48)
  return b.group
}

function historicalRocket(b, variant) {
  if (variant === 'fireArrow') {
    const wood = material(0x9b8563, .02, .92)
    b.cylinder(.025, .025, 2.9, wood, [0, 0, 0], undefined, 12)
    b.cylinder(0, .095, .3, 'silver', [0, 1.56, 0], undefined, 3)
    b.cylinder(.09, .09, .57, material(0x765442, .02, .88), [0, -.27, 0])
    for (let i = 0; i < 3; i++) {
      const fin = new THREE.Shape(); fin.moveTo(0, -1.08); fin.lineTo(.2, -1.4); fin.lineTo(.2, -1.57); fin.lineTo(0, -1.45); fin.closePath()
      b.mesh(new THREE.ShapeGeometry(fin), new THREE.MeshStandardMaterial({ color: 0xb3a186, side: THREE.DoubleSide, roughness: 1 }), [0, 0, 0], [0, i * TAU / 3, 0])
    }
    b.group.rotation.z = -.55
    return b.group
  }
  if (variant === 'shuttle') {
    b.cylinder(.3, .3, 2.28, material(0xa2704a, .1, .85), [0, .05, -.23])
    b.cylinder(0, .3, .54, material(0xa2704a, .1, .85), [0, 1.46, -.23])
    for (const x of [-.48, .48]) {
      b.cylinder(.115, .115, 2.62, 'white', [x, -.06, -.23]); b.cylinder(0, .115, .3, 'white', [x, 1.4, -.23])
      b.cylinder(.079, .135, .15, 'dark', [x, -1.45, -.23])
      for (const y of [-.84, .16, .82]) b.cylinder(.117, .117, .042, 'dark', [x, y, -.23])
    }
    b.cylinder(.21, .18, 1.54, 'white', [0, -.3, .32], undefined, 24)
    b.cylinder(.04, .21, .5, 'white', [0, .72, .32], undefined, 24)
    b.box([.24, .12, .09], 'dark', [0, .64, .487], [-.1, 0, 0])
    for (const sign of [-1, 1]) {
      const wing = new THREE.Shape(); wing.moveTo(0, .06); wing.lineTo(sign * .92, -1.14); wing.lineTo(sign * .22, -1.11); wing.closePath()
      b.mesh(new THREE.ExtrudeGeometry(wing, { depth: .055, bevelEnabled: false }), 'white', [0, 0, .22])
      b.cylinder(.07, .1, .17, 'dark', [sign * .105, -1.18, .38])
    }
    b.cylinder(.07, .1, .17, 'dark', [0, -1.15, .21])
    const tail = new THREE.Shape(); tail.moveTo(-1.02, 0); tail.lineTo(-.55, .34); tail.lineTo(-.2, 0); tail.closePath()
    b.mesh(new THREE.ExtrudeGeometry(tail, { depth: .035, bevelEnabled: false }), 'white', [-.017, -.14, .47], [0, 0, Math.PI / 2])
    return b.group
  }
  if (variant === 'r7') {
    b.cylinder(.2, .23, 2.44, 'white', [0, .08, 0]); b.cylinder(0, .2, .5, 'silver', [0, 1.55, 0])
    for (let i = 0; i < 4; i++) {
      const angle = i * Math.PI / 2, x = Math.cos(angle) * .38, z = Math.sin(angle) * .38
      b.cylinder(.08, .24, 1.65, 'teal', [x, -.46, z]); b.cylinder(0, .08, .42, 'silver', [x, .575, z])
      b.cylinder(.09, .14, .17, 'dark', [x, -1.36, z])
    }
    return b.group
  }
  const radius = variant === 'v2' ? .29 : variant === 'falcon' ? .14 : .13
  const length = variant === 'v2' ? 2.45 : 2.7
  b.cylinder(radius, radius, length, variant === 'v2' ? 'teal' : 'white', [0, -.13, 0])
  const profile = [new THREE.Vector2(0, .65), new THREE.Vector2(radius * .45, .47), new THREE.Vector2(radius * .85, .24), new THREE.Vector2(radius, 0)]
  b.mesh(new THREE.LatheGeometry(profile, 32), variant === 'v2' ? 'white' : 'silver', [0, length / 2 - .13, 0])
  b.cylinder(radius * .72, radius, .18, 'dark', [0, -length / 2 - .21, 0])
  if (variant === 'falcon') {
    b.cylinder(.145, .145, .23, 'dark', [0, .65, 0])
    for (let i = 0; i < 4; i++) {
      const angle = i * Math.PI / 2
      b.rod([Math.cos(angle) * .13, -1.29, Math.sin(angle) * .13], [Math.cos(angle) * .3, -.67, Math.sin(angle) * .3], .023, 'silver')
      b.box([.16, .06, .025], 'dark', [Math.cos(angle) * .16, .13, Math.sin(angle) * .16], [0, angle, 0])
    }
  } else {
    for (let i = 0; i < 4; i++) {
      const fin = new THREE.Shape(); fin.moveTo(radius, -.85); fin.lineTo(radius + .31, -1.45); fin.lineTo(radius, -1.35); fin.closePath()
      b.mesh(new THREE.ShapeGeometry(fin), new THREE.MeshStandardMaterial({ color: PALETTE.silver, side: THREE.DoubleSide, metalness: .5, roughness: .55 }), [0, 0, 0], [0, i * Math.PI / 2, 0])
    }
    if (variant === 'earlyRocket') for (const x of [-.29, .29]) b.rod([x, -1.5, -.2], [x, -.35, -.2], .014)
  }
  return b.group
}

function refractor(b) {
  const brass = material(0xb39662, .7, .43), wood = material(0x76624a, .05, .88)
  const tube = b.cylinder(.1, .145, 2.15, wood, [0, .53, 0], [0, 0, -.67])
  for (const y of [-1.09, .83, 1.09]) b.cylinder(y < 0 ? .102 : .15, y < 0 ? .102 : .15, .12, brass, [Math.sin(.67) * y, .53 + Math.cos(.67) * y, 0], [0, 0, -.67])
  b.cylinder(.105, .105, .03, material(0x3f6070, .9, .1), [.67, 1.375, 0], [0, 0, -.67])
  b.rod([0, .38, 0], [0, -.73, 0], .045, 'dark')
  for (let i = 0; i < 3; i++) {
    const angle = i * TAU / 3
    const foot = [Math.cos(angle) * .74, -1.4, Math.sin(angle) * .74]
    const leg = b.rod([0, -.39, 0], foot, .035); leg.material = wood
    b.rod([0, -.91, 0], [foot[0] * .63, -1.1, foot[2] * .63], .012, 'dark')
  }
  tube.userData.historicalInstrument = true
  return b.group
}

function scienceTelescope(b, variant) {
  const r = variant === 'kepler' ? .48 : .31
  b.cylinder(r, r, 1.76, 'gold', [0, 0, 0], [Math.PI / 2, 0, 0], 12)
  b.cylinder(r * .85, r * .85, .03, 'dark', [0, 0, .9], [Math.PI / 2, 0, 0])
  b.mesh(new THREE.TorusGeometry(r, .026, 8, 48), 'silver', [0, 0, .92])
  b.box([r * 1.8, r * 1.7, .43], 'dark', [0, 0, -1.01])
  if (variant === 'kepler') solarPanel(b, 1.25, 1.32, [0, .57, -.36], [-1.03, 0, 0])
  else { solarPanel(b, .83, 1.2, [-1.02, 0, -.65]); solarPanel(b, .83, 1.2, [1.02, 0, -.65]); b.rod([-1.3, 0, -.65], [1.3, 0, -.65], .025) }
  b.group.rotation.set(.2, -.34, -.35)
  return b.group
}

function smallSatellite(b, variant) {
  if (variant === 'vanguard') {
    b.sphere(.57, 'silver')
    for (let i = 0; i < 6; i++) {
      const angle = TAU * i / 6
      b.rod([Math.cos(angle) * .5, -.15, Math.sin(angle) * .5], [Math.cos(angle) * 1.35, -.35, Math.sin(angle) * 1.35], .011)
      b.box([.13, .13, .035], 'blue', [Math.cos(angle) * .51, .19, Math.sin(angle) * .51], [0, angle, 0])
    }
  } else {
    b.cylinder(.1, .1, 1.95, 'white', [0, -.15, 0]); b.cylinder(0, .1, .33, 'silver', [0, .99, 0])
    for (const y of [-.67, -.14, .39]) b.cylinder(.102, .102, .22, 'dark', [0, y, 0])
    for (let i = 0; i < 4; i++) { const angle = i * Math.PI / 2; b.rod([0, .05, 0], [Math.cos(angle) * 1.21, -.25, Math.sin(angle) * 1.21], .007) }
    b.group.rotation.z = -.46
  }
  return b.group
}

function roboticLander(b, variant) {
  if (variant === 'huygens') {
    b.cylinder(.68, .9, .35, 'gold', [0, -.13, 0], undefined, 48)
    b.cylinder(.68, .68, .04, 'silver', [0, .064, 0], undefined, 48)
    b.cylinder(.23, .4, .18, 'gold', [0, .15, 0])
    for (const x of [-.36, .36]) b.rod([x, .08, 0], [x, .32, 0], .014)
    return b.group
  }
  const isPhilae = variant === 'philae'
  b.box([.72, .51, .67], 'gold', [0, .13, 0])
  if (isPhilae) {
    solarPanel(b, .68, .5, [0, .39, 0], [Math.PI / 2, 0, 0])
    for (const x of [-.37, .37]) b.box([.012, .39, .56], 'blue', [x, .13, 0])
    b.rod([.17, .4, .15], [.17, .7, .15], .007)
  } else {
    b.dish(.28, .07, [0, .52, 0], [.9, 0, 0])
    solarPanel(b, .55, .57, [-.79, .17, 0], [Math.PI / 2 - .3, 0, 0])
    solarPanel(b, .55, .57, [.79, .17, 0], [Math.PI / 2 + .3, 0, 0])
    b.rod([-.36, .14, 0], [.36, .14, 0], .015)
  }
  for (let i = 0; i < 3; i++) {
    const angle = TAU * i / 3, x = Math.cos(angle), z = Math.sin(angle)
    b.rod([x * .3, -.1, z * .3], [x * .72, -.48, z * .72], .025)
    b.rod([x * .72, -.48, z * .72], [x * 1.1, -.8, z * 1.1], .02)
    b.cylinder(.12, .12, .02, 'silver', [x * 1.1, -.8, z * 1.1])
  }
  return b.group
}

function earlyStation(b, variant) {
  b.cylinder(.32, .32, 1.63, 'white', [0, 0, 0], [Math.PI / 2, 0, 0])
  b.cylinder(.24, .32, .48, 'silver', [0, 0, .98], [Math.PI / 2, 0, 0])
  b.cylinder(.14, .24, .39, 'dark', [0, 0, 1.4], [Math.PI / 2, 0, 0])
  b.cylinder(.22, .22, .29, 'silver', [0, 0, -1], [Math.PI / 2, 0, 0])
  for (const x of [-1.01, 1.01]) solarPanel(b, .97, .85, [x, 0, -.3])
  b.rod([-1.5, 0, -.3], [1.5, 0, -.3], .025)
  if (variant === 'skylab') {
    b.box([.41, .41, .41], 'dark', [0, .56, .64])
    for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2; solarPanel(b, .45, .76, [Math.cos(a) * .55, .56 + Math.sin(a) * .55, .65], [0, 0, a - Math.PI / 2]) }
  }
  b.group.rotation.z = -.3
  return b.group
}

function probe(b, variant) {
  b.cylinder(.39, .39, .44, 'gold', [0, 0, -.19], [Math.PI / 2, 0, 0], 6)
  b.dish(.66, .13, [0, .22, .14])
  b.rod([0, .22, .14], [0, .22, .7], .014)
  b.sphere(.045, 'white', [0, .22, .7], 16)
  if (variant === 'newHorizons') {
    b.box([.61, .32, .45], 'gold', [.29, -.23, -.27])
    b.cylinder(.15, .15, .51, 'dark', [-.62, -.19, -.29], [0, 0, Math.PI / 2])
    for (let i = 0; i < 8; i++) { const a = i * TAU / 8; b.box([.49, .018, .1], 'dark', [-.62, -.19 + Math.cos(a) * .18, -.29 + Math.sin(a) * .18], [a, 0, 0]) }
    b.cylinder(.1, .1, .28, 'dark', [.32, -.23, .1], [Math.PI / 2, 0, 0])
  } else if (variant === 'juno') {
    for (let i = 0; i < 3; i++) {
      const angle = i * TAU / 3 + Math.PI / 2
      solarPanel(b, .56, 1.52, [Math.cos(angle) * 1.25, Math.sin(angle) * 1.25, -.24], [0, 0, angle - Math.PI / 2])
      b.rod([0, 0, -.24], [Math.cos(angle) * 1.9, Math.sin(angle) * 1.9, -.24], .018)
    }
  } else {
    solarPanel(b, .74, 1.17, [-1.02, 0, -.26]); solarPanel(b, .74, 1.17, [1.02, 0, -.26])
    b.rod([-1.35, 0, -.26], [1.35, 0, -.26], .02)
    b.box([.15, .22, .17], 'dark', [0, -.41, -.21]); b.rod([.21, -.2, -.1], [.7, -.8, -.1], .01)
  }
  return b.group
}

function orion(b) {
  b.cylinder(.21, .48, .55, 'white', [0, .64, 0], undefined, 48)
  b.cylinder(.48, .48, .045, 'dark', [0, .34, 0], undefined, 48)
  b.cylinder(.31, .31, .59, 'silver', [0, -.01, 0], undefined, 32)
  b.cylinder(.13, .2, .22, 'dark', [0, -.42, 0])
  for (let i = 0; i < 4; i++) {
    const angle = i * Math.PI / 2 + Math.PI / 4
    solarPanel(b, .55, 1.13, [Math.cos(angle) * 1.16, -.13, Math.sin(angle) * 1.16], [Math.PI / 2, 0, angle - Math.PI / 2])
    b.rod([Math.cos(angle) * .3, -.13, Math.sin(angle) * .3], [Math.cos(angle) * 1.75, -.13, Math.sin(angle) * 1.75], .018)
  }
  b.box([.1, .08, .018], 'dark', [.11, .77, .28], [-.47, 0, 0])
  b.box([.1, .08, .018], 'dark', [-.11, .77, .28], [-.47, 0, 0])
  return b.group
}

function makeModel(type, variant = type, phase = 0) {
  const b = modelBuilder()
  const builders = { voyager, webb, sputnik, rocket, telescope, orbit, blackhole, lander, station, dish: radioDish }
  let group
  if (variant.startsWith('study:')) group = buildStudy(b, variant.slice(6), phase)
  else if (['fireArrow', 'earlyRocket', 'v2', 'r7', 'shuttle', 'falcon'].includes(variant)) group = historicalRocket(b, variant)
  else if (variant === 'refractor') group = refractor(b)
  else if (['chandra', 'kepler'].includes(variant)) group = scienceTelescope(b, variant)
  else if (['explorer', 'vanguard'].includes(variant)) group = smallSatellite(b, variant)
  else if (['huygens', 'philae', 'roboticLander'].includes(variant)) group = roboticLander(b, variant)
  else if (['earlyStation', 'skylab'].includes(variant)) group = earlyStation(b, variant)
  else if (['probe', 'newHorizons', 'juno'].includes(variant)) group = probe(b, variant)
  else if (variant === 'orion') group = orion(b)
  else group = ['earth', 'moon', 'mars', 'saturn'].includes(type) ? planet(b, type) : (builders[type] || builders.orbit)(b)
  // Dispose palette entries not referenced by a mesh as well.
  group.userData.palette = Object.values(b.mats)
  const bounds = new THREE.Box3().setFromObject(group)
  if (variant === 'study:kepler-laws') {
    // Keep framing fixed as the two planets move along their orbits.
    bounds.min.set(-3.55, -.3, -2.6); bounds.max.set(2.2, .5, 2.6)
  }
  const size = bounds.getSize(new THREE.Vector3())
  const center = bounds.getCenter(new THREE.Vector3())
  const fit = 4.1 / Math.max(size.x, size.y, size.z, 1)
  const root = new THREE.Group(); root.add(group)
  group.position.sub(center); root.scale.setScalar(fit)
  root.rotation.y = variant.startsWith('study:') ? 0 : type === 'voyager' ? -.3 : .18
  return root
}

function disposeModel(root) {
  if (!root) return
  const geometries = new Set(), materials = new Set(), textures = new Set()
  root.traverse((node) => {
    if (node.geometry) geometries.add(node.geometry)
    for (const mat of Array.isArray(node.material) ? node.material : node.material ? [node.material] : []) materials.add(mat)
    for (const mat of node.userData.palette || []) materials.add(mat)
  })
  for (const mat of materials) for (const value of Object.values(mat)) if (value?.isTexture) textures.add(value)
  for (const item of textures) item.dispose()
  for (const item of materials) item.dispose()
  for (const item of geometries) item.dispose()
}

export function createObservatory() {
  const registrations = new Map()
  let renderer = null, controls = null, active = null, model = null, renderFrame = 0, chooseFrame = 0
  let unavailable = false, disposed = false, dragging = false, pinnedUntil = 0
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(34, 1, .1, 50)
  const cameraStart = new THREE.Vector3(4, 2.6, 6.9)
  scene.add(new THREE.HemisphereLight(0xe2efed, 0x243544, 2.2))
  const key = new THREE.DirectionalLight(0xfff0d4, 3.6); key.position.set(-4, 6, 5); scene.add(key)
  const fill = new THREE.DirectionalLight(0xb0cbd7, 2.0); fill.position.set(5, 1, -3); scene.add(fill)
  const rim = new THREE.DirectionalLight(0xc4ded8, 1.9); rim.position.set(0, 4, -5); scene.add(rim)

  function initialCamera(record) {
    if (record.variant === 'study:kepler-laws') return new THREE.Vector3(0, 3.8, 3.8)
    if (['kepler-laws', 'star-catalogue', 'neptune-perturbation', 'curved-spacetime', 'galaxy-expansion', 'pulsar-planets', 'hot-jupiter', 'interstellar-comet', 'dart-impact', 'ligo-interferometer'].some(key => record.variant === `study:${key}`)) return new THREE.Vector3(0, 6.3, 6.3)
    const aspect = record.host.clientWidth / Math.max(record.host.clientHeight, 1)
    // Voyager's magnetometer boom makes the model unusually wide. A closer
    // camera reveals the dish and bus while accounting for narrow viewports.
    const factor = record.type === 'voyager' ? Math.min(1, Math.max(.62, .86 / Math.max(aspect, .5))) : 1
    return cameraStart.clone().multiplyScalar(factor)
  }

  function render() {
    renderFrame = 0
    if (disposed || !renderer || !active || document.hidden || active.ratio <= 0) return
    controls.update()
    renderer.render(scene, camera)
    // The controls' change event schedules the short damping tail. Exhibits
    // have no idle spin, so they stop rendering as soon as the camera settles.
  }
  function invalidate() {
    if (!renderFrame && !disposed) renderFrame = requestAnimationFrame(render)
  }
  function resize() {
    if (!renderer || !active) return
    const width = Math.max(1, active.host.clientWidth), height = Math.max(1, active.host.clientHeight)
    renderer.setSize(width, height, false); camera.aspect = width / height; camera.updateProjectionMatrix(); invalidate()
  }
  function initialize() {
    if (renderer || unavailable || disposed) return Boolean(renderer)
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7))
      renderer.outputColorSpace = THREE.SRGBColorSpace
      renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.17
      Object.assign(renderer.domElement.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', zIndex: '2', touchAction: 'pan-y', cursor: 'grab', outline: 'none' })
      renderer.domElement.className = 'observatory__canvas'
      renderer.domElement.setAttribute('aria-hidden', 'true')
      renderer.domElement.addEventListener('webglcontextlost', onContextLost)
      controls = new OrbitControls(camera, renderer.domElement)
      controls.enableZoom = false; controls.enablePan = false; controls.enableDamping = !reducedMotion.matches
      controls.dampingFactor = .14; controls.rotateSpeed = .7
      // OrbitControls otherwise consumes one-finger vertical scrolling on touch.
      // A single finger scrolls the timeline; two fingers rotate the exhibit.
      controls.touches.ONE = null; controls.touches.TWO = THREE.TOUCH.DOLLY_ROTATE
      renderer.domElement.style.touchAction = 'pan-y'
      controls.addEventListener('start', () => { dragging = true; pinnedUntil = performance.now() + 2500; renderer.domElement.style.cursor = 'grabbing'; invalidate() })
      controls.addEventListener('end', () => { dragging = false; if (active) active.animateUntil = performance.now() + 800; renderer.domElement.style.cursor = 'grab'; invalidate() })
      controls.addEventListener('change', () => {
        if (active) {
          active.animateUntil = performance.now() + (dragging ? 800 : 0)
          active.host.dataset.viewRevision = String((Number(active.host.dataset.viewRevision) || 0) + 1)
        }
        invalidate()
      })
      return true
    } catch {
      unavailable = true
      renderer?.dispose(); renderer = null
      for (const record of registrations.values()) updateStatus(record, false)
      return false
    }
  }
  function onContextLost(event) {
    event.preventDefault(); unavailable = true
    cancelAnimationFrame(renderFrame); renderFrame = 0
    if (active) { active.host.classList.remove('is-3d-active'); active.svg.style.opacity = '1'; updateStatus(active, false) }
    controls?.dispose(); controls = null
    renderer?.domElement.remove(); renderer?.dispose(); renderer = null
    if (model) { scene.remove(model); disposeModel(model); model = null }
    active = null
    for (const record of registrations.values()) updateStatus(record, false)
  }
  function updateStatus(record, interactive) {
    record.hint.textContent = unavailable ? record.copy.fallback : interactive ? record.copy.rotate : record.copy.open
    record.hint.setAttribute('aria-label', unavailable ? record.copy.fallback : interactive ? record.copy.rotate : record.copy.open)
    record.hint.disabled = unavailable
    record.toolbar.hidden = !interactive
    record.toolbar.style.display = interactive ? 'flex' : 'none'
    record.host.dataset.observatoryState = unavailable ? 'unavailable' : interactive ? 'interactive' : 'illustrated'
    record.host.setAttribute('aria-label', `${record.label} — ${interactive ? record.copy.model : record.copy.fallback}`)
  }
  function activate(host, deliberate = true) {
    const record = registrations.get(host)
    if (!record || disposed || unavailable) return false
    if (record.ratio <= 0) {
      const rect = host.getBoundingClientRect()
      record.ratio = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)) / Math.max(rect.height, 1)
    }
    if (deliberate) pinnedUntil = performance.now() + 4000
    if (active === record) { invalidate(); return true }
    if (!initialize()) return false
    // Flush residual drag inertia before reusing the camera for another model.
    const damping = controls.enableDamping
    controls.enableDamping = false; controls.update(); controls.enableDamping = damping
    if (active) {
      active.host.classList.remove('is-3d-active'); active.svg.style.opacity = '1'; updateStatus(active, false)
      active.view = { position: camera.position.clone(), target: controls.target.clone() }
    }
    if (model) { scene.remove(model); disposeModel(model) }
    active = record; model = makeModel(record.type, record.variant, record.phase); scene.add(model)
    record.host.append(renderer.domElement)
    camera.position.copy(record.view?.position || initialCamera(record)); controls.target.copy(record.view?.target || new THREE.Vector3())
    controls.update(); controls.saveState()
    record.svg.style.opacity = '0'; record.host.classList.add('is-3d-active'); updateStatus(record, true)
    resize(); invalidate()
    return true
  }
  function choose() {
    chooseFrame = 0
    if (disposed || document.hidden || dragging) return
    if (active && active.ratio > .12 && performance.now() < pinnedUntil) return
    let best = null, score = -1
    const center = window.innerHeight / 2
    for (const record of registrations.values()) {
      if (!record.host.isConnected || record.ratio <= .08) continue
      const rect = record.host.getBoundingClientRect()
      const next = record.ratio * 2 - Math.abs(rect.top + rect.height / 2 - center) / Math.max(window.innerHeight, 1)
      if (next > score) { best = record; score = next }
    }
    if (best) activate(best.host, false)
    else if (active && active.ratio <= 0) { cancelAnimationFrame(renderFrame); renderFrame = 0 }
  }
  function scheduleChoose() { if (!chooseFrame && !disposed) chooseFrame = requestAnimationFrame(choose) }
  const intersection = typeof IntersectionObserver !== 'undefined' ? new IntersectionObserver((entries) => {
    for (const entry of entries) { const record = registrations.get(entry.target); if (record) record.ratio = entry.intersectionRatio }
    scheduleChoose()
  }, { threshold: [0, .08, .2, .4, .6, .8, 1] }) : null
  const sizes = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => resize()) : null
  const scrollListener = () => {
    if (!intersection) for (const record of registrations.values()) { const rect = record.host.getBoundingClientRect(); record.ratio = Math.max(0, Math.min(rect.bottom, innerHeight) - Math.max(rect.top, 0)) / Math.max(rect.height, 1) }
    scheduleChoose()
  }
  window.addEventListener('scroll', scrollListener, { passive: true })
  window.addEventListener('resize', resize, { passive: true })
  const visibilityListener = () => { if (document.hidden) { cancelAnimationFrame(renderFrame); renderFrame = 0 } else { scheduleChoose(); invalidate() } }
  document.addEventListener('visibilitychange', visibilityListener)
  const motionListener = () => { if (controls) { controls.enableDamping = !reducedMotion.matches; invalidate() } }
  reducedMotion.addEventListener?.('change', motionListener)

  function reset(host = active?.host) {
    if (!activate(host)) return
    const damping = controls.enableDamping
    controls.enableDamping = false; controls.update()
    camera.position.copy(initialCamera(active)); controls.target.set(0, 0, 0); controls.update()
    controls.enableDamping = damping; invalidate()
  }
  function rotate(host, amount = .18, vertical = 0) {
    if (!activate(host)) return
    const offset = camera.position.clone().sub(controls.target), spherical = new THREE.Spherical().setFromVector3(offset)
    spherical.theta += amount; spherical.phi = THREE.MathUtils.clamp(spherical.phi + vertical, .12, Math.PI - .12)
    camera.position.copy(new THREE.Vector3().setFromSpherical(spherical).add(controls.target)); controls.update(); invalidate()
  }
  function zoom(host, factor = .84) {
    if (!activate(host)) return
    const offset = camera.position.clone().sub(controls.target)
    offset.setLength(THREE.MathUtils.clamp(offset.length() * factor, 3.1, 14))
    camera.position.copy(controls.target).add(offset); controls.update(); invalidate()
  }
  function observe(host, { type = 'orbit', label = '', lang = 'en', entryId = host?.dataset.entryId || '' } = {}) {
    if (disposed || !(host instanceof HTMLElement)) return
    if (registrations.has(host)) return
    type = TYPES.has(type) ? type : 'orbit'
    const copy = COPY[lang] || COPY.en
    const variant = variantFor(type, entryId)
    const phaseControl = host.closest('.artifact')?.querySelector('.experiment__phase')
    const phase = phaseControl ? Math.max(0, Math.min(100, Number(phaseControl.value) || 0)) / 100 : 0
    const svg = illustration(type, label, copy, variant, phase)
    const record = { host, type, variant, phase, label: String(label), copy, svg, ratio: 0, animateUntil: 0, view: null, listeners: [] }
    Object.assign(host.style, { position: 'relative', overflow: 'hidden', isolation: 'isolate' })
    host.tabIndex = 0; host.setAttribute('role', 'group'); host.dataset.modelType = type; host.dataset.modelVariant = variant; host.dataset.viewRevision = '0'
    host.append(svg)
    const hint = document.createElement('button'); hint.type = 'button'; hint.className = 'observatory__hint'
    Object.assign(hint.style, { position: 'absolute', left: '10px', bottom: '9px', zIndex: '3', border: '0', borderRadius: '3px', padding: '5px 7px', font: 'inherit', fontSize: '10px', letterSpacing: '.01em', lineHeight: '1.4', color: '#a9babe', background: 'rgba(12,24,30,.82)', cursor: 'pointer' })
    const toolbar = document.createElement('div'); toolbar.className = 'observatory__controls'
    Object.assign(toolbar.style, { position: 'absolute', display: 'flex', gap: '3px', right: '9px', top: '9px', zIndex: '3' })
    const listen = (node, name, fn) => { node.addEventListener(name, fn); record.listeners.push([node, name, fn]) }
    if (phaseControl) {
      listen(phaseControl, 'input', () => {
        record.phase = Math.max(0, Math.min(100, Number(phaseControl.value) || 0)) / 100
        host.dataset.orbitPhase = String(record.phase)
        const next = illustration(type, label, copy, variant, record.phase)
        next.style.opacity = active === record ? '0' : '1'
        record.svg.replaceWith(next); record.svg = next
        if (active === record && renderer) {
          scene.remove(model); disposeModel(model)
          model = makeModel(type, variant, record.phase); scene.add(model); invalidate()
        } else if (!unavailable) activate(host)
      })
    }
    for (const [text, accessible, callback] of [['+', copy.closer, () => zoom(host)], ['−', copy.farther, () => zoom(host, 1.19)], ['↺', copy.reset, () => reset(host)]]) {
      const button = document.createElement('button'); button.type = 'button'; button.textContent = text; button.setAttribute('aria-label', accessible); button.title = accessible
      Object.assign(button.style, { height: '27px', width: '27px', padding: '0', border: '1px solid rgba(140,169,173,.2)', borderRadius: '3px', color: '#afc3c4', background: 'rgba(12,24,30,.85)', font: 'inherit', lineHeight: '1', cursor: 'pointer' })
      listen(button, 'click', callback); toolbar.append(button)
    }
    record.hint = hint; record.toolbar = toolbar
    listen(hint, 'click', () => activate(host))
    listen(host, 'pointerdown', (event) => { if (event.pointerType === 'mouse' && event.target === host) activate(host) })
    listen(host, 'focus', () => activate(host))
    listen(host, 'keydown', (event) => {
      if (event.target !== host) return
      const actions = { ArrowLeft: () => rotate(host, -.18), ArrowRight: () => rotate(host, .18), ArrowUp: () => rotate(host, 0, -.15), ArrowDown: () => rotate(host, 0, .15), '+': () => zoom(host), '=': () => zoom(host), '-': () => zoom(host, 1.19), Home: () => reset(host), Enter: () => activate(host) }
      if (actions[event.key]) { event.preventDefault(); actions[event.key]() }
    })
    host.append(hint, toolbar); registrations.set(host, record); updateStatus(record, false)
    intersection?.observe(host); sizes?.observe(host)
    if (!intersection) scrollListener()
  }
  function dispose() {
    if (disposed) return
    disposed = true
    cancelAnimationFrame(renderFrame); cancelAnimationFrame(chooseFrame)
    intersection?.disconnect(); sizes?.disconnect()
    window.removeEventListener('scroll', scrollListener); window.removeEventListener('resize', resize)
    document.removeEventListener('visibilitychange', visibilityListener); reducedMotion.removeEventListener?.('change', motionListener)
    controls?.dispose()
    if (model) { scene.remove(model); disposeModel(model) }
    if (renderer) { renderer.domElement.removeEventListener('webglcontextlost', onContextLost); renderer.domElement.remove(); renderer.dispose(); renderer.forceContextLoss() }
    for (const record of registrations.values()) {
      for (const [node, name, listener] of record.listeners) node.removeEventListener(name, listener)
      record.svg.remove(); record.hint.remove(); record.toolbar.remove(); record.host.classList.remove('is-3d-active')
    }
    registrations.clear(); renderer = null; controls = null; model = null; active = null
  }
  return { observe, activate, reset, rotate, zoom, dispose }
}
