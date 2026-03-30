const iconMap = {
  industrial: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      <line x1="12" y1="12" x2="12" y2="16"/>
      <line x1="10" y1="14" x2="14" y2="14"/>
    </svg>
  ),
  retail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l1-5h16l1 5"/>
      <path d="M3 9a2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0 2-2"/>
      <path d="M5 11v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8"/>
      <rect x="9" y="15" width="6" height="5"/>
    </svg>
  ),
  buildings: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>
    </svg>
  ),
  healthcare: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
  banking: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M3 10h18M5 6l7-3 7 3M5 10v11M19 10v11M9 10v11M15 10v11"/>
    </svg>
  ),
  broadcast: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
      <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
      <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none"/>
    </svg>
  ),
}

const iconColors = {
  industrial: { bg: '#E6F1FB', color: '#185FA5' },
  retail:     { bg: '#E1F5EE', color: '#0F6E56' },
  buildings:  { bg: '#FAEEDA', color: '#854F0B' },
  healthcare: { bg: '#EEEDFE', color: '#534AB7' },
  banking:    { bg: '#FAECE7', color: '#993C1D' },
  broadcast:  { bg: '#FBEAF0', color: '#993556' },
}

export default function IndustryCard({ industry }) {
  const { id, name, desc } = industry
  const colors = iconColors[id] || { bg: '#F1EFE8', color: '#5F5E5A' }

  return (
    <div className="ind-pill">
      <div
        className="ind-icon-wrap"
        style={{ background: colors.bg, color: colors.color }}
      >
        {iconMap[id]}
      </div>
      <div className="pill-text">
        <span className="pill-name">{name}</span>
        <span className="pill-tag">{desc}</span>
      </div>
    </div>
  )
}