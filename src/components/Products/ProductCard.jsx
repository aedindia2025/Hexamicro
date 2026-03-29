const iconMap = {
  hxk: ( // Self-Service Kiosks
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2"/>
      <line x1="12" y1="18" x2="12" y2="18.01"/>
      <rect x="8" y="5" width="8" height="8" rx="1"/>
    </svg>
  ),
  hxi: ( // Industrial PCs
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2"/>
      <path d="M8 6V4M12 6V4M16 6V4"/>
      <path d="M8 18v2M12 18v2M16 18v2"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  hxm: ( // Mini PCs
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="12" rx="2"/>
      <path d="M8 20h8M12 16v4"/>
      <circle cx="12" cy="10" r="2"/>
    </svg>
  ),
  hxa: ( // AIO Computers
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
      <path d="M6 7h12M6 11h8"/>
    </svg>
  ),
  hxs: ( // Rack Servers
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="5" rx="1"/>
      <rect x="2" y="10" width="20" height="5" rx="1"/>
      <rect x="2" y="17" width="20" height="5" rx="1"/>
      <circle cx="18" cy="5.5" r="0.75" fill="currentColor" stroke="none"/>
      <circle cx="18" cy="12.5" r="0.75" fill="currentColor" stroke="none"/>
      <circle cx="18" cy="19.5" r="0.75" fill="currentColor" stroke="none"/>
    </svg>
  ),
  hxn: ( // Networking
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
      <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
      <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none"/>
    </svg>
  ),
  hxl: ( // Active LED Displays
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
      <path d="M7 8l2 2 4-4 2 2"/>
    </svg>
  ),
  hxd: ( // Display Screens
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
      <rect x="6" y="7" width="12" height="6" rx="1"/>
    </svg>
  ),
}

export default function ProductCard({ product }) {
  const { id, name, desc } = product

  return (
    <div className="product-card fade-in">
      <div className="product-icon-wrap">
        {iconMap[id]}
      </div>
      <h3 className="product-name">{name}</h3>
      <p className="product-desc">{desc}</p>
      <a href="#contact" className="product-link">Discover now →</a>
    </div>
  )
}
