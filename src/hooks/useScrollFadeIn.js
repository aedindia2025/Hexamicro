import { useEffect } from 'react'

const SELECTOR = '.fade-in, .fade-in-left, .fade-in-right, .scale-in'

export function useScrollFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target

          // Auto-stagger siblings when no explicit --delay is set
          if (!el.style.getPropertyValue('--delay')) {
            const siblings = [...el.parentElement.children].filter((c) =>
              c.matches(SELECTOR)
            )
            const idx = siblings.indexOf(el)
            if (idx > 0) el.style.setProperty('--delay', `${idx * 0.09}s`)
          }

          el.classList.add('visible')
          observer.unobserve(el)
        })
      },
      { threshold: 0.08 }
    )

    document.querySelectorAll(SELECTOR).forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
