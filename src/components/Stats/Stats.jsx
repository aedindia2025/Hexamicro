// Stats — animated counter + scroll reveal.
import { useState, useEffect, useRef } from 'react'
import './Stats.css'

const stats = [
  { num: 50,   suffix: '+',  label: 'Enterprise Products' },
  { num: 100,  suffix: '+',  label: 'Clients' },
  { num: 15,   suffix: '+',  label: 'Years in Business' },
  { num: 99.9, suffix: '%',  label: 'Guaranteed Uptime SLA', decimal: true },
]

function CountUp({ target, suffix, decimal, run }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!run) return
    const duration = 1600
    let startTime = null

    const animate = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(decimal ? (eased * target).toFixed(1) : Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [run, target, decimal])

  return <>{count}{suffix}</>
}

export default function Stats() {
  const [run, setRun] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setRun(true); observer.disconnect() }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats-section" ref={ref}>
      {stats.map(({ num, suffix, label, decimal }, i) => (
        <div className="stat-item fade-in" key={label} style={{ '--delay': `${i * 0.1}s` }}>
          <div className="stat-value">
            <CountUp target={num} suffix={suffix} decimal={decimal} run={run} />
          </div>
          <div className="stat-label">{label}</div>
        </div>
      ))}
    </section>
  )
}
