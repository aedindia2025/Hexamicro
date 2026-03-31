// Footer — copyright, policy links, and social buttons.
import './Footer.css'

const footerLinks = [
  { label: 'Privacy',        href: '#' },
  { label: 'Terms',          href: '#' },
  { label: 'Certifications', href: '#' },
  { label: 'Careers',        href: '#' },
]

const socialLinks = [
  { label: 'LinkedIn', symbol: 'in',  title: 'LinkedIn' },
  { label: 'Twitter',  symbol: '𝕏',  title: 'Twitter / X' },
  { label: 'YouTube',  symbol: '▶',  title: 'YouTube' },
]

export default function Footer() {
  return (
    <footer>
      <div className="footer-copy">
        &copy; 2026 Hexamicro Technologies Inc. &nbsp;|&nbsp; All rights reserved.
      </div>

      <div className="footer-links">
        {footerLinks.map(({ label, href }) => (
          <a key={label} href={href}>{label}</a>
        ))}
      </div>

      <div className="footer-social">
        {socialLinks.map(({ label, symbol, title }) => (
          <a key={label} href="#" className="social-btn" title={title}>
            {symbol}
          </a>
        ))}
      </div>
    </footer>
  )
}
