// Hero — centred layout, two-tone headline, globe visual with arc rings.
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero">

      {/* ── Centred text content ── */}
      <div className="hero-content">
        <h1 className="hero-title">
          Engineering<br />
          <span className="hero-title-muted">Tomorrow's Technology.</span>
        </h1>

        <p className="hero-sub">
          Hexamicro delivers cutting-edge IT hardware solutions — from Industrial PCs and Kiosks
          to AI-ready servers and LED display systems — engineered for reliability, built for scale.
        </p>

        <div className="hero-actions">
          <a href="#products" className="hero-cta">Explore Products</a>
          <a href="#contact" className="btn-secondary">Request a Demo</a>
        </div>


      </div>


    </section>
  )
}
