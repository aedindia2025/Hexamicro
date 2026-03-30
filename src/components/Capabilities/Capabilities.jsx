// Capabilities — centred header, 2×2 capability card grid, certification banner.
import './Capabilities.css'

const capabilities = [
  {
    num: '01',
    title: 'Full-Cycle Design & Engineering',
    desc: 'Schematic capture, PCB layout, thermal simulation, and mechanical CAD — all under one roof.',
  },
  {
    num: '02',
    title: 'SMT & Through-Hole Assembly',
    desc: 'Automated SMT lines with AOI inspection. IPC-A-610 Class 2 and Class 3 certified processes.',
  },
  {
    num: '03',
    title: 'Compliance & Certification',
    desc: 'CE, FCC, RoHS, MIL-STD-810, and ISO 9001 compliant across the product portfolio.',
  },
]

const certifications = [
  { label: 'ISO 9001',     sub: 'Quality Management'   },
  { label: 'CE / FCC',    sub: 'Electromagnetic'       },
  { label: 'RoHS',         sub: 'Environmental'         },
  { label: 'MIL-STD-810', sub: 'Rugged Standard'       },
]

export default function Capabilities() {
  return (
    <section id="capabilities">

      {/* Centred header */}
      <div className="capabilities-header">
        <div className="section-label"><span className="industries-badge-dot">✦</span> About Hexamicro</div>
        <h2 className="section-title">Designed Here. Built to Last.</h2>
        <p className="section-sub">
          We combine in-house hardware design with precision electronics manufacturing to deliver
          products that meet the most demanding standards — from concept to certification.
        </p>
      </div>

      {/* 2×2 capability cards */}
      <div className="cap-grid">
        {capabilities.map(({ num, title, desc }) => (
          <div className="cap-card fade-in" key={num}>
            <div className="cap-card-num">{num}</div>
            <div className="cap-card-body">
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Certification banner */}
      <div className="cert-banner">
        <div className="cert-banner-icon">
          <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="30,4 54,17 54,43 30,56 6,43 6,17" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="rgba(255,255,255,0.06)" />
            <polygon points="30,14 46,23 46,37 30,46 14,37 14,23" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" />
            <circle cx="30" cy="30" r="6" fill="#C8552A" opacity="0.9" />
            <circle cx="30" cy="30" r="10" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="cert-banner-text">
          <div className="cert-banner-title">Certified for Quality &amp; Compliance</div>
          <div className="cert-banner-sub">
            All products meet international standards — ready for regulated industries worldwide.
          </div>
        </div>

        <div className="cert-badges">
          {certifications.map(({ label, sub }) => (
            <div className="cert-badge" key={label}>
              <div className="cert-badge-label">{label}</div>
              <div className="cert-badge-sub">{sub}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
