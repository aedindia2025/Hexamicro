// CTABanner — centred call-to-action strip between Process and Contact.
import './CTABanner.css'

export default function CTABanner() {
  return (
    <section id="cta">
      <div className="section-label" style={{ justifyContent: 'center' }}><span className="industries-badge-dot">✦</span> Get Started</div>
      <h2 className="section-title">Ready to Build Something Extraordinary?</h2>
      <p className="cta-sub">
        Tell us your requirements and our engineering team will design a hardware solution that
        exceeds your expectations.
      </p>
      <div className="cta-actions">
        <a href="#contact" className="btn-primary">Contact Sales</a>
        <a href="#products" className="btn-secondary">Browse Products</a>
      </div>
    </section>
  )
}
