import { useEffect } from 'react'

export function useCustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('cursorRing')
    if (!cursor || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let animId

    const onMouseMove = (e) => {
      mx = e.clientX
      my = e.clientY
    }
    document.addEventListener('mousemove', onMouseMove)

    const animCursor = () => {
      cursor.style.left = mx + 'px'
      cursor.style.top = my + 'px'
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      animId = requestAnimationFrame(animCursor)
    }
    animId = requestAnimationFrame(animCursor)

    const onEnter = () => {
      cursor.style.width = '20px'
      cursor.style.height = '20px'
      ring.style.width = '52px'
      ring.style.height = '52px'
    }
    const onLeave = () => {
      cursor.style.width = '12px'
      cursor.style.height = '12px'
      ring.style.width = '36px'
      ring.style.height = '36px'
    }

    // Attach after a short delay so all DOM elements are ready
    const timeout = setTimeout(() => {
      document.querySelectorAll('a, button, .product-card, .industry-card').forEach((el) => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }, 100)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animId)
      clearTimeout(timeout)
      document.querySelectorAll('a, button, .product-card, .industry-card').forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])
}
