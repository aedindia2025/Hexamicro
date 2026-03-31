const animations = {
  industrial: 'anim-industrial',
  retail:     'anim-retail',
  buildings:  'anim-buildings',
  healthcare: 'anim-healthcare',
  banking:    'anim-banking',
  broadcast:  'anim-broadcast',
}

const iconColors = {
  industrial: { bg: '#c5eeaa', color: '#0095d5' },
  retail:     { bg: '#c5eeaa', color: '#0095d5' },
  buildings:  { bg: '#c5eeaa', color: '#0095d5' },
  healthcare: { bg: '#c5eeaa', color: '#0095d5' },
  banking:    { bg: '#c5eeaa', color: '#0095d5' },
  broadcast:  { bg: '#c5eeaa', color: '#0095d5' },
}

const iconMap = {
  industrial: (color) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
    </svg>
  ),
  retail: (color) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l1-5h16l1 5"/>
      <path d="M3 9a2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0 2-2"/>
      <path d="M5 11v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8"/>
      <rect x="9" y="15" width="6" height="5"/>
    </svg>
  ),
  buildings: (color) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>
      </svg>
  ),
  healthcare: (color) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
  banking: (color) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M3 10h18M5 6l7-3 7 3"/>
      <line className="col1" x1="5" y1="10" x2="5" y2="21"/>
      <line className="col2" x1="9" y1="10" x2="9" y2="21"/>
      <line className="col3" x1="15" y1="10" x2="15" y2="21"/>
      <line x1="19" y1="10" x2="19" y2="21"/>
    </svg>
  ),
  broadcast: (color) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path className="w3" d="M1.42 9a16 16 0 0 1 21.16 0"/>
      <path className="w2" d="M5 12.55a11 11 0 0 1 14.08 0"/>
      <path className="w1" d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
      <circle cx="12" cy="20" r="1" fill={color} stroke="none"/>
    </svg>
  ),
}

export default function IndustryCard({ industry }) {
  const { id, name, desc } = industry
  const colors = iconColors[id] || { bg: '#F1EFE8', color: '#5F5E5A' }
  const animClass = animations[id] || ''

  return (
    <div className="industry-item">
      <div
        className={`ind-icon-wrap ${animClass}`}
        style={{ color: colors.color, '--rc': colors.color }}
      >
        {/* Decorative hex — same as Process */}
        <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.8 }} viewBox="0 0 120 120" fill="none">
          <polygon points="60,8 104,32 104,88 60,112 16,88 16,32" stroke="rgba(14,48,46,0.12)" strokeWidth="1.2" fill="none"/>
          
        </svg>
        {iconMap[id]?.(colors.color)}
      </div>
      <div className="ind-text">
        <div className="ind-name">{name}</div>
        <p className="ind-desc">{desc}</p>
      </div>
    </div>
  )
}
