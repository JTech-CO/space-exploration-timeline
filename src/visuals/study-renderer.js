import * as THREE from 'three'
import { studyScene } from './study-scenes.js'

const NS = 'http://www.w3.org/2000/svg'
let sequence = 0
const node = (tag, attributes = {}) => {
  const el = document.createElementNS(NS, tag)
  for (const [key, value] of Object.entries(attributes)) el.setAttribute(key, String(value))
  return el
}
function verticesOf(item) {
  if (item.points) return item.points
  if (item.kind === 'rod') return [item.a, item.b]
  const r = item.radius || Math.max(item.top || 0, item.bottom || 0)
  const size = item.size || [r * 2, item.height || r * 2, r * 2]
  if (item.kind === 'label') return [[item.position[0] - item.text.length * .045, item.position[1] - .1, item.position[2]], [item.position[0] + item.text.length * .045, item.position[1] + .1, item.position[2]]]
  return [-1, 1].flatMap(x => [-1, 1].flatMap(y => [-1, 1].map(z => transform([x * size[0] / 2, y * size[1] / 2, z * size[2] / 2], item))))
}
function transform(point, item) {
  return new THREE.Vector3(...point).applyEuler(new THREE.Euler(...(item.rotation || [0, 0, 0]))).add(new THREE.Vector3(...item.position)).toArray()
}
const project = ([x, y, z]) => [x - z * .37, -y * .9 - z * .53]

export function studyIllustration(key, label, copy, phase = 0) {
  const scene = studyScene(key, phase)
  const svg = node('svg', { viewBox: '0 0 340 240', class: 'observatory__illustration', role: 'img', 'aria-label': `${label} — ${copy.schematic}`, 'data-study': key, 'data-phase': phase, focusable: 'false' })
  Object.assign(svg.style, { width: '100%', height: '100%', position: 'absolute', inset: '0', pointerEvents: 'none' })
  const points = scene.flatMap(verticesOf).map(project)
  const minX = Math.min(...points.map(p => p[0])), maxX = Math.max(...points.map(p => p[0]))
  const minY = Math.min(...points.map(p => p[1])), maxY = Math.max(...points.map(p => p[1]))
  const scale = Math.min(280 / Math.max(maxX - minX, 1), 163 / Math.max(maxY - minY, 1))
  const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2
  const xy = p => { const q = project(p); return [170 + (q[0] - cx) * scale, 109 + (q[1] - cy) * scale] }
  const xyString = p => xy(p).map(v => v.toFixed(2)).join(',')
  const defs = node('defs'); svg.append(defs)
  svg.append(node('path', { d: 'M20 110H320M170 17V198', stroke: '#617d81', opacity: '.13', 'stroke-dasharray': '3 6' }))
  const group = node('g', { 'stroke-linejoin': 'round', 'stroke-linecap': 'round' })
  const polygon = (points, color, opacity = 1, stroke = '#9caeb4') => group.append(node('polygon', { points: points.map(xyString).join(' '), fill: color, opacity, stroke, 'stroke-width': '.55' }))
  const polyline = (points, color, opacity = 1, width = 1) => group.append(node('polyline', { points: points.map(xyString).join(' '), fill: 'none', stroke: color, opacity, 'stroke-width': width }))
  // Approximate depth sorting keeps solid equipment readable in the vector view.
  const depth = item => { const p = item.position || item.points?.[0] || item.a; return p[0] * .1 + p[1] * .15 + p[2] * .5 }
  const sorted = [...scene].sort((a, b) => (a.kind === 'label' ? 100 : depth(a)) - (b.kind === 'label' ? 100 : depth(b)))
  for (const item of sorted) {
    if (item.kind === 'sphere') {
      const [x, y] = xy(item.position), id = `study-light-${++sequence}`
      const gradient = node('radialGradient', { id, cx: '30%', cy: '24%', r: '80%' })
      gradient.append(node('stop', { offset: '0', 'stop-color': item.color }), node('stop', { offset: '.63', 'stop-color': item.color }), node('stop', { offset: '1', 'stop-color': '#13212a' }))
      defs.append(gradient)
      group.append(node('circle', { cx: x, cy: y, r: Math.max(1, item.radius * scale), fill: `url(#${id})`, stroke: item.color, 'stroke-width': '.6', ...(item.role ? { 'data-role': item.role } : {}) }))
    } else if (item.kind === 'line') polyline(item.points, item.color, item.opacity, .9)
    else if (item.kind === 'polygon') polygon(item.points, item.color, item.opacity, item.color)
    else if (item.kind === 'rod') polyline([item.a, item.b], item.color, 1, Math.max(.7, item.radius * scale * 1.5))
    else if (item.kind === 'box') {
      const [x, y, z] = item.size.map(n => n / 2)
      const corners = [[-x, -y, z], [x, -y, z], [x, y, z], [-x, y, z], [-x, -y, -z], [x, -y, -z], [x, y, -z], [-x, y, -z]].map(p => transform(p, item))
      for (const face of [[4, 5, 6, 7], [0, 4, 7, 3], [3, 7, 6, 2], [0, 1, 2, 3]]) polygon(face.map(i => corners[i]), item.color, 1)
      if (item.panel) {
        for (let i = 1; i < 5; i++) {
          const px = -x + 2 * x * i / 5
          polyline([[px, -y, z + .005], [px, y, z + .005]].map(p => transform(p, item)), '#a9bfcb', .5, .4)
        }
        for (let i = 1; i < 7; i++) {
          const py = -y + 2 * y * i / 7
          polyline([[-x, py, z + .005], [x, py, z + .005]].map(p => transform(p, item)), '#a9bfcb', .5, .4)
        }
      }
    } else if (item.kind === 'cylinder') {
      const loop = (radius, y) => Array.from({ length: 17 }, (_, i) => transform([Math.cos(i * Math.PI / 8) * radius, y, Math.sin(i * Math.PI / 8) * radius], item))
      const top = loop(item.top, item.height / 2), bottom = loop(item.bottom, -item.height / 2)
      for (let i = 0; i < 16; i++) polygon([top[i], bottom[i], bottom[i + 1], top[i + 1]], item.color, 1, item.color)
      if (!item.open) polygon(top, item.color)
      else { polyline(top, '#dbe2dc', 1, .8); polyline(bottom, '#879fa5', .8, .6) }
    } else if (item.kind === 'dish') {
      const [x, y] = xy(item.position)
      group.append(node('ellipse', { cx: x, cy: y, rx: item.radius * scale, ry: item.radius * scale * .87, fill: '#405055', stroke: item.color, 'stroke-width': '1.2' }))
      for (const factor of [.35, .68]) group.append(node('ellipse', { cx: x, cy: y, rx: item.radius * scale * factor, ry: item.radius * scale * .87 * factor, fill: 'none', stroke: item.color, opacity: '.4', 'stroke-width': '.55' }))
    } else if (item.kind === 'label') {
      const [x, y] = xy(item.position)
      const text = node('text', { x, y, fill: item.color, 'font-family': 'system-ui, sans-serif', 'font-size': '9', 'text-anchor': 'middle', 'dominant-baseline': 'middle', stroke: '#0a141b', 'stroke-width': '2', 'paint-order': 'stroke' })
      text.textContent = item.text; group.append(text)
    }
  }
  svg.append(group)
  return svg
}

export function buildStudy(b, key, phase = 0) {
  const materials = new Map()
  const material = color => {
    if (!materials.has(color)) materials.set(color, new THREE.MeshStandardMaterial({ color, roughness: .58, metalness: .35, side: THREE.DoubleSide }))
    return materials.get(color)
  }
  const line = (points, color, opacity = 1) => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points.map(p => new THREE.Vector3(...p)))
    const mesh = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color, transparent: opacity < 1, opacity }))
    b.group.add(mesh); return mesh
  }
  for (const item of studyScene(key, phase)) {
    let mesh
    if (item.kind === 'sphere') mesh = b.sphere(item.radius, material(item.color), item.position, 28)
    else if (item.kind === 'box') {
      mesh = b.box(item.size, material(item.color), item.position, item.rotation)
      if (item.panel) {
        const [w, h, z] = item.size
        for (let i = 1; i < 6; i++) {
          const x = -w / 2 + w * i / 6
          line([[x, -h / 2, z / 2 + .005], [x, h / 2, z / 2 + .005]].map(p => transform(p, item)), '#a3bac7', .38)
        }
        for (let i = 1; i < 8; i++) {
          const y = -h / 2 + h * i / 8
          line([[-w / 2, y, z / 2 + .005], [w / 2, y, z / 2 + .005]].map(p => transform(p, item)), '#a3bac7', .38)
        }
      }
    } else if (item.kind === 'cylinder') mesh = b.mesh(new THREE.CylinderGeometry(item.top, item.bottom, item.height, 32, 1, item.open), material(item.color), item.position, item.rotation)
    else if (item.kind === 'rod') mesh = b.rod(item.a, item.b, item.radius, material(item.color))
    else if (item.kind === 'line') mesh = line(item.points, item.color, item.opacity)
    else if (item.kind === 'polygon') {
      const vertices = []
      for (let i = 1; i < item.points.length - 1; i++) vertices.push(...item.points[0], ...item.points[i], ...item.points[i + 1])
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3)); geometry.computeVertexNormals()
      mesh = b.mesh(geometry, new THREE.MeshBasicMaterial({ color: item.color, opacity: item.opacity, transparent: item.opacity < 1, depthWrite: item.opacity === 1, side: THREE.DoubleSide }))
    } else if (item.kind === 'dish') {
      const points = Array.from({ length: 20 }, (_, i) => { const r = item.radius * i / 19; return new THREE.Vector2(r, .15 * (r / item.radius) ** 2) })
      mesh = b.mesh(new THREE.LatheGeometry(points, 48), material(item.color), item.position, [Math.PI / 2, 0, 0])
    } else if (item.kind === 'label') {
      const canvas = document.createElement('canvas'); canvas.height = 80
      const context = canvas.getContext('2d')
      if (context) {
        context.font = '40px system-ui, sans-serif'
        canvas.width = Math.ceil(context.measureText(item.text).width + 24)
        context.font = '40px system-ui, sans-serif'; context.textAlign = 'center'; context.textBaseline = 'middle'
        context.lineWidth = 5; context.strokeStyle = '#0b151c'; context.strokeText(item.text, canvas.width / 2, 40)
        context.fillStyle = item.color; context.fillText(item.text, canvas.width / 2, 40)
        const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace
        mesh = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false }))
        mesh.position.set(...item.position); mesh.scale.set(canvas.width / 80 * .4, .4, 1)
        b.group.add(mesh)
      }
    }
    if (mesh && item.role) mesh.userData.role = item.role
  }
  b.group.userData.studyKey = key
  return b.group
}
