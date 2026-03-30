// Hero — centred layout, animated entrance + ambient glow.
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero">

      {/* Ambient background glows */}
      <div className="hero-glow" />
      <div className="hero-glow hero-glow--2" />

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
        </div>
      </div>

    </section>
  )
}
