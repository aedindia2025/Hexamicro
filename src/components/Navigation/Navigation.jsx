// Navigation — fixed top bar with logo, nav links, and CTA button.
import { useEffect, useState } from 'react'
import logoImg from '../../assets/logo-v1.png'
import './Navigation.css'

const navLinks = [
  { label: 'Products',   href: '#products' },
  { label: 'About',      href: '#capabilities' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process',    href: '#process' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const nav = document.querySelector('nav')
    const onScroll = () => {
      nav.style.boxShadow =
        window.scrollY > 60 ? '0 2px 24px rgba(26,28,34,0.09)' : 'none'
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on link click
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav>
      <a href="#" className="logo">
        <img src={logoImg} alt="Hexamicro" className="logo-img" />
      </a>

      <ul className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}>
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <a href={href} onClick={handleLinkClick}>{label}</a>
          </li>
        ))}
      </ul>

      {/* Hamburger button — mobile only */}
      <button
        className={`nav-hamburger${menuOpen ? ' nav-hamburger--open' : ''}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
