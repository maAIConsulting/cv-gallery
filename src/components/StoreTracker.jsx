import { useState, useEffect, useRef, useCallback } from 'react'

const W = 640
const H = 440

const shelfH = 40
const shelfW = 140
const shelfGap = 30
const shelfX = [30, 30 + shelfW + shelfGap, 30 + 2 * (shelfW + shelfGap)]

const rows = [
  { y: 50, labels: ['Electronics', 'Phones', 'Tablets'] },
  { y: 125, labels: ['Clothing', 'Shoes', 'Bags'] },
  { y: 200, labels: ['Sports', 'Outdoor', 'Fitness'] },
  { y: 275, labels: ['Food', 'Drinks', 'Snacks'] },
]

const shelves = rows.flatMap((row) =>
  row.labels.map((label, ci) => ({
    x: shelfX[ci], y: row.y, w: shelfW, h: shelfH, label,
  }))
)

const checkout = { x: 520, y: 340, w: 90, h: 50, label: 'Checkout' }

const aisleY = { A: 35, B: 107, C: 182, D: 257, E: 332 }
const crossX = {
  left: 15,
  gap1: 30 + shelfW + shelfGap / 2,
  gap2: 30 + 2 * shelfW + 1.5 * shelfGap,
  right: 30 + 3 * shelfW + 2 * shelfGap + 15,
}

// Cameras
const cameras = [
  { id: 'A-R', x: 632, y: aisleY.A, angle: 180, fov: 25, range: 620, label: 'CAM-01' },
  { id: 'B-L', x: 8, y: aisleY.B, angle: 0, fov: 25, range: 620, label: 'CAM-02' },
  { id: 'B-R', x: 632, y: aisleY.B, angle: 180, fov: 25, range: 620, label: 'CAM-03' },
  { id: 'C-L', x: 8, y: aisleY.C, angle: 0, fov: 25, range: 620, label: 'CAM-04' },
  { id: 'C-R', x: 632, y: aisleY.C, angle: 180, fov: 25, range: 620, label: 'CAM-05' },
  { id: 'D-L', x: 8, y: aisleY.D, angle: 0, fov: 25, range: 620, label: 'CAM-06' },
  { id: 'E-R', x: 632, y: aisleY.E, angle: 180, fov: 25, range: 620, label: 'CAM-07' },
  { id: 'T1', x: crossX.gap1, y: 8, angle: 90, fov: 30, range: 420, label: 'CAM-08' },
  { id: 'T2', x: crossX.gap2, y: 8, angle: 90, fov: 30, range: 420, label: 'CAM-09' },
  { id: 'B1', x: 310, y: 432, angle: 270, fov: 60, range: 150, label: 'CAM-10' },
  { id: 'CK', x: 632, y: 432, angle: 225, fov: 40, range: 180, label: 'CAM-11' },
]

// Raycasting
const allObstacles = [...shelves, checkout]
const WALL_MIN_X = 5, WALL_MIN_Y = 5, WALL_MAX_X = W - 5, WALL_MAX_Y = H - 5

function castRay(ox, oy, angle, range) {
  const rad = (angle * Math.PI) / 180
  const dx = Math.cos(rad)
  const dy = Math.sin(rad)
  let closest = range
  if (dx > 0) { const d = (WALL_MAX_X - ox) / dx; if (d > 0 && d < closest) closest = d }
  if (dx < 0) { const d = (WALL_MIN_X - ox) / dx; if (d > 0 && d < closest) closest = d }
  if (dy > 0) { const d = (WALL_MAX_Y - oy) / dy; if (d > 0 && d < closest) closest = d }
  if (dy < 0) { const d = (WALL_MIN_Y - oy) / dy; if (d > 0 && d < closest) closest = d }
  for (const obs of allObstacles) {
    const edges = [
      [obs.x, obs.y, obs.x + obs.w, obs.y],
      [obs.x, obs.y + obs.h, obs.x + obs.w, obs.y + obs.h],
      [obs.x, obs.y, obs.x, obs.y + obs.h],
      [obs.x + obs.w, obs.y, obs.x + obs.w, obs.y + obs.h],
    ]
    for (const [ex1, ey1, ex2, ey2] of edges) {
      const d = raySegIntersect(ox, oy, dx, dy, ex1, ey1, ex2, ey2)
      if (d !== null && d > 0.5 && d < closest) closest = d
    }
  }
  return { x: ox + dx * closest, y: oy + dy * closest }
}

function raySegIntersect(ox, oy, dx, dy, x1, y1, x2, y2) {
  const sx = x2 - x1, sy = y2 - y1
  const denom = dx * sy - dy * sx
  if (Math.abs(denom) < 1e-8) return null
  const t = ((x1 - ox) * sy - (y1 - oy) * sx) / denom
  const u = ((x1 - ox) * dy - (y1 - oy) * dx) / denom
  if (t > 0 && u >= 0 && u <= 1) return t
  return null
}

const NUM_RAYS = 120
function computeVisibilityPolygon(cam) {
  const halfFov = cam.fov / 2
  const points = [{ x: cam.x, y: cam.y }]
  for (let i = 0; i <= NUM_RAYS; i++) {
    const angle = cam.angle - halfFov + (cam.fov * i) / NUM_RAYS
    points.push(castRay(cam.x, cam.y, angle, cam.range))
  }
  return points.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
}

// LOS checking for point detection
function lineHitsRect(x1, y1, x2, y2, rx, ry, rw, rh) {
  const edges = [
    [rx, ry, rx + rw, ry],
    [rx, ry + rh, rx + rw, ry + rh],
    [rx, ry, rx, ry + rh],
    [rx + rw, ry, rx + rw, ry + rh],
  ]
  for (const [ex1, ey1, ex2, ey2] of edges) {
    if (segsInt(x1, y1, x2, y2, ex1, ey1, ex2, ey2)) return true
  }
  return false
}

function segsInt(ax, ay, bx, by, cx, cy, dx, dy) {
  const d1 = (dx - cx) * (ay - cy) - (dy - cy) * (ax - cx)
  const d2 = (dx - cx) * (by - cy) - (dy - cy) * (bx - cx)
  const d3 = (bx - ax) * (cy - ay) - (by - ay) * (cx - ax)
  const d4 = (bx - ax) * (dy - ay) - (by - ay) * (dx - ax)
  return ((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) &&
         ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0))
}

function hasLOS(cx, cy, px, py) {
  const m = 3
  for (const s of shelves) {
    if (lineHitsRect(cx, cy, px, py, s.x + m, s.y + m, s.w - m * 2, s.h - m * 2)) return false
  }
  if (lineHitsRect(cx, cy, px, py, checkout.x + m, checkout.y + m, checkout.w - m * 2, checkout.h - m * 2)) return false
  return true
}

function inFov(cam, px, py) {
  const dx = px - cam.x, dy = py - cam.y
  if (Math.sqrt(dx * dx + dy * dy) > cam.range) return false
  const a = ((Math.atan2(dy, dx) * 180 / Math.PI) + 360) % 360
  let d = Math.abs(a - ((cam.angle + 360) % 360))
  if (d > 180) d = 360 - d
  if (d > cam.fov / 2) return false
  return hasLOS(cam.x, cam.y, px, py)
}

function lerp(a, b, t) { return a + (b - a) * t }

// --- PATHS ---

// Thief: enters, browses aisles, steals at Phones (aisle A), skips checkout, exits
const THEFT_STEP = 14
const thiefPath = [
  { x: 310, y: 410 },
  { x: 313, y: aisleY.E },
  { x: crossX.gap1 + 3, y: aisleY.E + 3 },
  { x: crossX.gap1 + 2, y: aisleY.D - 2 },
  { x: crossX.left + 4, y: aisleY.D + 3 },
  { x: crossX.gap2 - 3, y: aisleY.D - 1 },
  { x: crossX.gap2 + 2, y: aisleY.C + 3 },
  { x: crossX.gap1 - 3, y: aisleY.C - 2 },
  { x: crossX.gap1 + 4, y: aisleY.B + 2 },
  { x: crossX.gap2 - 2, y: aisleY.B - 3 },
  { x: crossX.gap2 + 3, y: aisleY.B + 1 },
  { x: crossX.right - 5, y: aisleY.B + 2 },
  { x: crossX.right - 3, y: aisleY.A - 1 },
  { x: crossX.gap2 + 4, y: aisleY.A + 2 },
  { x: crossX.gap1 - 2, y: aisleY.A + 3 },  // THEFT here (step 14)
  // After theft — rushes to exit, NO checkout
  { x: crossX.gap1 + 5, y: aisleY.B - 2 },
  { x: crossX.gap1 - 1, y: aisleY.C + 4 },
  { x: crossX.gap1 + 3, y: aisleY.D - 3 },
  { x: crossX.gap1 - 2, y: aisleY.E + 2 },
  { x: 308, y: aisleY.E + 1 },
  { x: 312, y: 410 },
]

// Shopper 1: enters, browses Food/Drinks, goes to checkout, exits (slower, starts after a delay)
const shopper1Path = [
  { x: 290, y: 410 },
  { x: 288, y: aisleY.E - 1 },
  { x: crossX.left + 2, y: aisleY.E + 2 },
  { x: crossX.left + 3, y: aisleY.D + 1 },
  { x: crossX.gap1 - 2, y: aisleY.D - 2 },
  { x: crossX.gap1 + 1, y: aisleY.D + 3 },
  { x: crossX.gap2 + 3, y: aisleY.D - 1 },
  { x: crossX.gap2 - 1, y: aisleY.D + 2 },  // linger at Snacks
  { x: crossX.gap2 + 2, y: aisleY.E + 1 },
  { x: crossX.right - 3, y: aisleY.E - 2 },
  // Go to checkout
  { x: 538, y: aisleY.E + 2 },
  { x: 562, y: 367 },
  { x: 562, y: 367 },  // wait at checkout
  { x: 543, y: aisleY.E - 1 },
  { x: 292, y: aisleY.E + 2 },
  { x: 290, y: 410 },
]

// Shopper 2: enters, browses Clothing/Sports, goes to checkout, exits (different timing)
const shopper2Path = [
  { x: 330, y: 410 },
  { x: 332, y: aisleY.E + 2 },
  { x: crossX.gap2 - 2, y: aisleY.E - 1 },
  { x: crossX.gap2 + 3, y: aisleY.C + 2 },
  { x: crossX.gap1 + 1, y: aisleY.C - 3 },
  { x: crossX.left + 3, y: aisleY.C + 1 },
  { x: crossX.left + 2, y: aisleY.B - 2 },
  { x: crossX.gap1 - 1, y: aisleY.B + 3 },
  { x: crossX.gap1 + 4, y: aisleY.B - 1 },  // linger at Clothing
  { x: crossX.gap2 + 2, y: aisleY.B + 2 },
  { x: crossX.gap2 - 3, y: aisleY.C - 1 },
  { x: crossX.gap2 + 1, y: aisleY.D + 3 },
  { x: crossX.right - 2, y: aisleY.D - 2 },
  { x: crossX.right - 4, y: aisleY.E + 1 },
  // Go to checkout
  { x: 540, y: aisleY.E - 1 },
  { x: 560, y: 365 },
  { x: 560, y: 365 },  // wait at checkout
  { x: 541, y: aisleY.E + 2 },
  { x: 328, y: aisleY.E - 1 },
  { x: 330, y: 410 },
]

// Person definitions
const people = [
  { id: 'thief', path: thiefPath, color: '#4f6ef7', alertColor: '#e54545', label: 'Suspect', theftStep: THEFT_STEP, speed: 7, delay: 0 },
  { id: 'shopper1', path: shopper1Path, color: '#34a853', alertColor: null, label: 'Shopper A', theftStep: null, speed: 10, delay: 40 },
  { id: 'shopper2', path: shopper2Path, color: '#f5a623', alertColor: null, label: 'Shopper B', theftStep: null, speed: 9, delay: 80 },
]

export default function StoreTracker() {
  const [playing, setPlaying] = useState(false)
  const [alerted, setAlerted] = useState(false)
  const [personStates, setPersonStates] = useState(
    people.map(() => ({ step: 0, t: 0, trail: [], started: false, finished: false }))
  )
  const ref = useRef(null)
  const startTsRef = useRef(null)
  const prevTsRef = useRef(null)

  // Compute positions
  const positions = people.map((p, i) => {
    const st = personStates[i]
    if (!st.started || st.finished) {
      return st.finished ? p.path[p.path.length - 1] : p.path[0]
    }
    if (st.step >= p.path.length - 1) return p.path[p.path.length - 1]
    return {
      x: lerp(p.path[st.step].x, p.path[st.step + 1].x, st.t),
      y: lerp(p.path[st.step].y, p.path[st.step + 1].y, st.t),
    }
  })

  const thiefPos = positions[0]
  const isAlerted = alerted

  // Which cameras see which people (all people activate cameras)
  const camSeesPersons = cameras.map(cam => {
    const seen = []
    people.forEach((_, i) => {
      if (personStates[i].started && !personStates[i].finished) {
        if (inFov(cam, positions[i].x, positions[i].y)) seen.push(i)
      }
    })
    return seen
  })
  // A camera is "on" if it sees anyone
  const activeCamIds = new Set(cameras.filter((_, ci) => camSeesPersons[ci].length > 0).map(c => c.id))
  // Cameras that see the thief specifically (for red highlight after alert)
  const thiefCamIds = new Set(cameras.filter((_, ci) => camSeesPersons[ci].includes(0)).map(c => c.id))

  const nearestShelf = shelves.reduce((best, s) => {
    const cx = s.x + s.w / 2, cy = s.y + s.h / 2
    const d = Math.abs(thiefPos.x - cx) + Math.abs(thiefPos.y - cy)
    return d < best.d ? { d, label: s.label } : best
  }, { d: Infinity, label: 'Aisle' })
  const currentLabel = nearestShelf.d < 120 ? nearestShelf.label : 'Aisle'

  const animate = useCallback((ts) => {
    if (!startTsRef.current) startTsRef.current = ts
    if (!prevTsRef.current) prevTsRef.current = ts
    const dt = ts - prevTsRef.current
    prevTsRef.current = ts
    const elapsed = ts - startTsRef.current

    setPersonStates(prev => {
      const next = prev.map((st, i) => {
        const p = people[i]

        // Delay before starting
        if (!st.started) {
          if (elapsed < p.delay * 16) return st // ~16ms per frame unit
          return { ...st, started: true, trail: [p.path[0]] }
        }

        if (st.finished) return st
        if (st.step >= p.path.length - 1) return { ...st, finished: true }

        const idx = st.step
        const dx = p.path[idx + 1].x - p.path[idx].x
        const dy = p.path[idx + 1].y - p.path[idx].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const isTheftMoment = p.theftStep !== null && idx === p.theftStep
        const spd = isTheftMoment ? 15 : p.speed
        const dur = dist * spd + (isTheftMoment ? 1200 : 100)

        const newT = st.t + dt / dur
        if (newT >= 1) {
          const nextStep = idx + 1
          return {
            ...st,
            step: nextStep,
            t: 0,
            trail: [...st.trail, p.path[nextStep]],
            finished: nextStep >= p.path.length - 1,
          }
        }
        return { ...st, t: newT }
      })
      return next
    })

    // Check theft trigger
    setPersonStates(prev => {
      const thiefSt = prev[0]
      if (people[0].theftStep !== null && thiefSt.step >= people[0].theftStep && !alerted) {
        setAlerted(true)
      }
      return prev
    })

    // Check if all finished
    ref.current = requestAnimationFrame(animate)
  }, [alerted])

  useEffect(() => {
    if (playing) ref.current = requestAnimationFrame(animate)
    return () => { if (ref.current) cancelAnimationFrame(ref.current) }
  }, [playing, animate])

  // Check if all finished
  useEffect(() => {
    if (playing && personStates.every(s => s.finished)) {
      setPlaying(false)
    }
  }, [playing, personStates])

  const start = () => {
    setPersonStates(people.map(() => ({ step: 0, t: 0, trail: [], started: false, finished: false })))
    setAlerted(false)
    startTsRef.current = null
    prevTsRef.current = null
    setPlaying(true)
  }

  const trailColor = isAlerted ? 'rgba(229,69,69,0.3)' : 'rgba(79,110,247,0.2)'

  return (
    <div className="store-tracker">
      <div className="tracker-simple">
        <svg viewBox={`0 0 ${W} ${H}`} className="store-map">
          <defs>
            <clipPath id="store-clip">
              <rect x="5" y="5" width={W - 10} height={H - 10} rx="4" />
            </clipPath>
            <filter id="glow-red">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Store walls */}
          <rect x="5" y="5" width={W - 10} height={H - 10} rx="4" fill="#fafbfd" stroke="#c8ccd8" strokeWidth="1.5" />

          {/* Camera visibility polygons */}
          <g clipPath="url(#store-clip)">
            {cameras.map(cam => {
              const on = activeCamIds.has(cam.id)
              const seesThief = isAlerted && thiefCamIds.has(cam.id)
              return (
                <polygon key={cam.id} points={computeVisibilityPolygon(cam)}
                  fill={on ? (seesThief ? 'rgba(229,69,69,0.06)' : 'rgba(79,110,247,0.06)') : 'rgba(0,0,0,0.012)'}
                  stroke={on ? (seesThief ? 'rgba(229,69,69,0.15)' : 'rgba(79,110,247,0.12)') : 'rgba(0,0,0,0.03)'}
                  strokeWidth="0.5"
                  style={{ transition: 'fill 0.3s, stroke 0.3s' }}
                />
              )
            })}
          </g>

          {/* Entrance */}
          <line x1="260" y1={H - 5} x2="360" y2={H - 5} stroke="#4f6ef7" strokeWidth="3" />
          <text x="310" y={H - 12} textAnchor="middle" fontSize="9" fill="#4f6ef7" fontWeight="600" fontFamily="Inter, sans-serif">ENTRANCE</text>

          {/* Shelves */}
          {shelves.map((s, i) => (
            <g key={i}>
              <rect x={s.x} y={s.y} width={s.w} height={s.h} rx="2" fill="#e4e7f2" stroke="#d0d4e6" strokeWidth="1" />
              <text x={s.x + s.w / 2} y={s.y + s.h / 2 + 1} textAnchor="middle" dominantBaseline="middle" fontSize="9" fontWeight="500" fill="#5a6178" fontFamily="Inter, sans-serif">{s.label}</text>
            </g>
          ))}

          {/* Checkout */}
          <rect x={checkout.x} y={checkout.y} width={checkout.w} height={checkout.h} rx="2" fill="#fff3e0" stroke="#f5d9a8" strokeWidth="1" />
          <text x={checkout.x + checkout.w / 2} y={checkout.y + checkout.h / 2 + 1} textAnchor="middle" dominantBaseline="middle" fontSize="9" fontWeight="500" fill="#8b5a00" fontFamily="Inter, sans-serif">{checkout.label}</text>

          {/* Trails for all people */}
          {people.map((p, i) => {
            const st = personStates[i]
            if (st.trail.length < 2) return null
            const c = p.id === 'thief' ? trailColor : `${p.color}33`
            return (
              <polyline key={`trail-${p.id}`} points={st.trail.map(pt => `${pt.x},${pt.y}`).join(' ')}
                fill="none" stroke={c} strokeWidth="1.5" strokeDasharray="4 3" />
            )
          })}

          {/* Tracking lines from cameras to all visible people */}
          {playing && cameras.map((cam, ci) =>
            camSeesPersons[ci].map(pi => {
              const pos = positions[pi]
              const seesThief = isAlerted && pi === 0
              const lc = seesThief ? 'rgba(229,69,69,0.2)' : `${people[pi].color}30`
              return (
                <line key={`t-${cam.id}-${pi}`} x1={cam.x} y1={cam.y} x2={pos.x} y2={pos.y}
                  stroke={lc} strokeWidth="1" strokeDasharray="3 3" />
              )
            })
          )}

          {/* Camera dots + labels */}
          {cameras.map(cam => {
            const on = activeCamIds.has(cam.id)
            const seesThief = isAlerted && thiefCamIds.has(cam.id)
            const camColor = on ? (seesThief ? '#e54545' : '#4f6ef7') : '#b8bcd0'
            const lx = cam.x < 20 ? cam.x + 14 : cam.x > 620 ? cam.x - 14 : cam.x
            const ly = cam.y < 20 ? cam.y + 16 : cam.y > 420 ? cam.y - 10 : cam.y - 12
            const anchor = cam.x < 20 ? 'start' : cam.x > 620 ? 'end' : 'middle'
            return (
              <g key={cam.id}>
                <circle cx={cam.x} cy={cam.y} r={on ? 5 : 4}
                  fill={camColor} stroke="#fff" strokeWidth="1.5"
                  style={{ transition: 'fill 0.3s' }}
                />
                {on && <circle cx={cam.x} cy={cam.y} r="9" fill="none" stroke={camColor} strokeWidth="0.8" opacity="0.5" />}
                {on && (
                  <text x={lx} y={ly} textAnchor={anchor} fontSize="7" fontWeight="700" fill={camColor} fontFamily="Inter, sans-serif" style={{ transition: 'fill 0.3s' }}>
                    {cam.label}
                  </text>
                )}
              </g>
            )
          })}

          {/* All people dots */}
          {people.map((p, i) => {
            const st = personStates[i]
            if (!st.started && !playing) return null
            if (!st.started) return null
            const pos = positions[i]
            const isThief = p.id === 'thief'
            const color = isThief && isAlerted ? p.alertColor : p.color
            const glow = isThief && isAlerted ? 'rgba(229,69,69,0.12)' : `${p.color}14`
            return (
              <g key={p.id}>
                <circle cx={pos.x} cy={pos.y} r="10" fill={glow} />
                <circle cx={pos.x} cy={pos.y} r="4.5" fill={color} stroke="#fff" strokeWidth="1.5"
                  filter={isThief && isAlerted ? 'url(#glow-red)' : undefined}
                  style={{ transition: 'fill 0.4s' }}
                />
              </g>
            )
          })}

          {/* ALERT — corner banner (top-right) */}
          {isAlerted && playing && (
            <g className="alert-flash">
              <rect x={W - 215} y="12" width="200" height="32" rx="5" fill="rgba(229,69,69,0.95)" />
              <text x={W - 115} y="33" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="Inter, sans-serif">
                ALERT — Concealment Detected
              </text>
            </g>
          )}
        </svg>

        {/* Legend */}
        <div className="tracker-legend">
          {people.map(p => (
            <span key={p.id} className="tracker-legend-item">
              <span className="tracker-legend-dot" style={{ background: p.id === 'thief' && isAlerted ? p.alertColor : p.color }} />
              {p.label}
            </span>
          ))}
        </div>

        <div className={`tracker-bottom ${isAlerted && playing ? 'tracker-alert' : ''}`}>
          <div className="tracker-zone">{currentLabel}</div>
          <button className="tracker-btn" onClick={playing ? () => { setPlaying(false) } : start}>
            {playing ? 'Stop' : 'Start Simulation'}
          </button>
          <div className="tracker-cams">
            {cameras.filter(c => activeCamIds.has(c.id)).map(c => c.label).join(', ') || 'No cameras'}
          </div>
        </div>
      </div>
    </div>
  )
}
