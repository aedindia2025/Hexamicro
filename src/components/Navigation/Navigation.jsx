// Navigation — fixed top bar with logo, nav links, and CTA button.
// Nav border brightens on scroll via useEffect.
import { useEffect } from 'react'
import logoImg from '../../assets/logo.jpeg'
import './Navigation.css'

const navLinks = [
  { label: 'Products',   href: '#products' },
  { label: 'About',      href: '#capabilities' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process',    href: '#process' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navigation() {
  useEffect(() => {
    const nav = document.querySelector('nav')
    const onScroll = () => {
      nav.style.boxShadow =
        window.scrollY > 60 ? '0 2px 24px rgba(26,28,34,0.09)' : 'none'
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav>
      <a href="#" className="logo">
        <img src={logoImg} alt="Hexamicro" className="logo-img" />
      </a>

      <ul className="nav-links">
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>

      {/* <button className="nav-cta">Get a Quote</button> */}
    </nav>
  )
}
