// Stats — key metrics bar displayed after the Hero section.
import './Stats.css'

const stats = [
  { value: '50+',   label: 'Enterprise Products' },
  { value: '100+',  label: 'Clients' },
  { value: '15+',   label: 'Years in Business' },
  { value: '99.9%', label: 'Guaranteed Uptime SLA' },
]

export default function Stats() {
  return (
    <section className="stats-section">
      {stats.map(({ value, label }) => (
        <div className="stat-item" key={label}>
          <div className="stat-value">{value}</div>
          <div className="stat-label">{label}</div>
        </div>
      ))}
    </section>
  )
}
