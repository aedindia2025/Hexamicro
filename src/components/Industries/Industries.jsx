import { useEffect, useRef } from 'react'
import IndustryCard from './IndustryCard'
import { industries } from '../../data/industries'
import './Industries.css'

export default function Industries() {
  const row1 = industries
  const row2 = [...industries].reverse()
  const doubled = (arr) => [...arr, ...arr]

  return (
    <section id="industries">
      <div className="industries-header">
        <div className="industries-badge"><span className="industries-badge-dot">✦</span> Markets Served</div>
        <h2 className="section-title">Built for Critical Sectors</h2>
        <p className="section-sub">
          From factory floor to hospital corridor, Hexamicro hardware operates where reliability is non-negotiable.
        </p>
      </div>

      <div className="track-wrap">
        <div className="track track1">
          {doubled(row1).map((ind, i) => <IndustryCard key={i} industry={ind} />)}
        </div>
      </div>

      <div className="track-wrap">
        <div className="track track2">
          {doubled(row2).map((ind, i) => <IndustryCard key={i} industry={ind} />)}
        </div>
      </div>
    </section>
  )
}
