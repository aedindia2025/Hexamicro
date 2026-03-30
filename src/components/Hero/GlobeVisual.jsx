// GlobeVisual — canvas-based 3D rotating globe with orthographic projection
import { useRef, useEffect } from 'react'
import './GlobeVisual.css'

/* ── Simplified land detection ── */
function isLand(lat, lon) {
  // Africa
  if (lat >= -35 && lat <= 37 && lon >= -18 && lon <= 52) {
    if (lat >= 5)  return lon >= -18 && lon <= 51
    if (lat >= -20) return lon >= 10 && lon <= 51
    return lon >= 16 && lon <= 40
  }
  // Europe
  if (lat >= 36 && lat <= 72 && lon >= -11 && lon <= 42) return true
  // UK / Ireland
  if (lat >= 50 && lat <= 61 && lon >= -11 && lon <= 2) return true
  // Iceland
  if (lat >= 63 && lat <= 67 && lon >= -24 && lon <= -13) return true
  // Greenland
  if (lat >= 60 && lat <= 84 && lon >= -57 && lon <= -18) return true
  // Asia mainland (broad)
  if (lat >= 0 && lat <= 78 && lon >= 26 && lon <= 145) {
    if (lat < 5 && lon > 100) return false // SE Asia seas
    return true
  }
  // SE Asia islands
  if (lat >= -8 && lat <= 20 && lon >= 95 && lon <= 142) return true
  // Japan
  if (lat >= 31 && lat <= 46 && lon >= 130 && lon <= 146) return true
  // North America
  if (lat >= 15 && lat <= 73 && lon >= -168 && lon <= -52) {
    if (lat < 25 && lon < -90) return false
    return true
  }
  // Central America
  if (lat >= 7 && lat <= 21 && lon >= -92 && lon <= -77) return true
  // South America
  if (lat >= -57 && lat <= 12 && lon >= -82 && lon <= -34) return true
  // Australia
  if (lat >= -44 && lat <= -10 && lon >= 114 && lon <= 154) return true
  // New Zealand
  if (lat >= -47 && lat <= -34 && lon >= 167 && lon <= 178) return true
  // Antarctica
  if (lat <= -65) return true
  // Madagascar
  if (lat >= -26 && lat <= -12 && lon >= 44 && lon <= 51) return true
  // Cuba
  if (lat >= 20 && lat <= 23 && lon >= -85 && lon <= -74) return true
  // Sri Lanka
  if (lat >= 6 && lat <= 10 && lon >= 80 && lon <= 82) return true
  return false
}

/* ── Pre-generate dot grid with uniform surface density ── */
function buildDots(spacing = 4) {
  const dots = []
  for (let lat = -90; lat <= 90; lat += spacing) {
    const cosLat = Math.cos((lat * Math.PI) / 180)
    const lonStep = cosLat < 0.05 ? 360 : spacing / cosLat
    for (let lon = -180; lon < 180; lon += lonStep) {
      dots.push({
        lat: (lat * Math.PI) / 180,
        lon: (lon * Math.PI) / 180,
        land: isLand(lat, lon),
      })
    }
  }
  return dots
}

export default function GlobeVisual() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const W = 800, H = 420
    const dpr = window.devicePixelRatio || 1
    canvas.width  = W * dpr
    canvas.height = H * dpr
    canvas.style.width  = W + 'px'
    canvas.style.height = H + 'px'

    const ctx = canvas.getContext('2d')
    ctx.scale(dpr, dpr)

    // Globe center sits below the canvas bottom so only top portion is visible
    const cx = W / 2, cy = H + 30, r = 440
    const arcRs = [r * 0.47, r * 0.61, r * 0.76]
    const dots = buildDots(4)

    let rotation = 0.4 // start showing Europe/Africa
    let animId

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      /* ── Globe sphere ── */
      ctx.save()
      ctx.beginPath()
      ctx.arc(cx, cy, r, 0, Math.PI * 2)
      const sphGrad = ctx.createRadialGradient(cx - r * 0.28, cy - r * 0.32, 0, cx, cy, r)
      sphGrad.addColorStop(0, '#ffffff')
      sphGrad.addColorStop(1, '#edf0ec')
      ctx.fillStyle = sphGrad
      ctx.fill()
      ctx.strokeStyle = '#dde2de'
      ctx.lineWidth = 0.75
      ctx.stroke()
      ctx.restore()

      /* ── Project and sort dots ── */
      const seaBuf = [], landBuf = []

      for (const { lat, lon, land } of dots) {
        const adjLon  = lon + rotation
        const cosLat  = Math.cos(lat)
        const sinLat  = Math.sin(lat)
        const cosLon  = Math.cos(adjLon)
        const sinLon  = Math.sin(adjLon)

        const z = cosLat * cosLon          // depth: >0 = front face
        if (z < 0) continue               // skip back hemisphere

        const x = cx + r * cosLat * sinLon
        const y = cy - r * sinLat

        // Skip points outside canvas (with margin)
        if (x < -8 || x > W + 8 || y < -8 || y > H + 8) continue

        const depth = z                   // 0..1
        if (land) landBuf.push({ x, y, depth })
        else       seaBuf.push({ x, y, depth })
      }

      /* ── Draw ocean dots ── */
      for (const { x, y, depth } of seaBuf) {
        ctx.beginPath()
        ctx.arc(x, y, 0.72 * (0.45 + 0.55 * depth), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(26,28,34,${(0.07 + 0.10 * depth).toFixed(2)})`
        ctx.fill()
      }

      /* ── Draw land dots on top ── */
      for (const { x, y, depth } of landBuf) {
        ctx.beginPath()
        ctx.arc(x, y, 1.6 * (0.45 + 0.55 * depth), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(26,28,34,${(0.38 + 0.52 * depth).toFixed(2)})`
        ctx.fill()
      }

      /* ── Arc rings (static, drawn over globe) ── */
      arcRs.forEach((arcR) => {
        // Upper semicircle in canvas coords: arc from π to 0 anticlockwise
        ctx.beginPath()
        ctx.arc(cx, cy, arcR, Math.PI, 0, true)
        ctx.strokeStyle = '#bec5c9'
        ctx.lineWidth = 1
        ctx.stroke()

        // Tick marks along the arc
        for (let j = 0; j <= 8; j++) {
          const angle = Math.PI + (j / 8) * Math.PI // π → 2π (upper region)
          const px  = cx + arcR       * Math.cos(angle)
          const py  = cy + arcR       * Math.sin(angle)
          const px2 = cx + (arcR + 8) * Math.cos(angle)
          const py2 = cy + (arcR + 8) * Math.sin(angle)
          ctx.beginPath()
          ctx.moveTo(px, py)
          ctx.lineTo(px2, py2)
          ctx.strokeStyle = '#bec5c9'
          ctx.lineWidth = 1
          ctx.stroke()
        }
      })

      rotation += 0.0022          // slow, smooth rotation
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animId)
  }, [])

  return 
}
