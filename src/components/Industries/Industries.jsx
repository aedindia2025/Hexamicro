// Industries — centred pill-badge header + 3-column card grid.
import IndustryCard from './IndustryCard'
import { industries } from '../../data/industries'
import './Industries.css'

export default function Industries() {
  return (
    <section id="industries">

      {/* Centred header */}
      <div className="industries-header">
        <div className="industries-badge"><span className="industries-badge-dot">✦</span> Markets Served</div>
        <h2 className="section-title">Built for Critical Sectors</h2>
        <p className="section-sub">
          From factory floor to hospital corridor, Hexamicro hardware operates where reliability is
          non-negotiable.
        </p>
      </div>

      {/* Card grid — first card is featured */}
      <div className="industries-grid">
        {industries.map((industry) => (
          <IndustryCard
            key={industry.id}
            industry={industry}
          />
        ))}
      </div>

    </section>
  )
}
