// ContactForm — controlled form with submit confirmation state.
// On submit the button label changes to a success message (no page reload).
import { useState } from 'react'

const productOptions = [
  'Self-Service Kiosks',
  'Industrial PCs',
  'Mini PCs',
  'Active LED Displays',
  'Display Screens',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [verified, setVerified] = useState(false)
  const [captchaError, setCaptchaError] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!verified) {
      setCaptchaError(true)
      return
    }
    setSubmitted(true)
  }

  function handleCheck(e) {
    setVerified(e.target.checked)
    setCaptchaError(false)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label>First Name</label>
          <input type="text" placeholder="" />
        </div>
        <div className="form-field">
          <label>Last Name</label>
          <input type="text" placeholder="" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label>Email</label>
          <input type="email" placeholder="" />
        </div>
        <div className="form-field">
          <label>Phone</label>
          <input type="tel" placeholder="" />
        </div>
      </div>

      <div className="form-field">
        <label>Company</label>
        <input type="text" placeholder="" />
      </div>

      <div className="form-field">
        <label>Product Interest</label>
        <select defaultValue="">
          <option value="" disabled>Select a product category…</option>
          {productOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label>Message</label>
        <textarea placeholder="Describe your requirements — quantity, environment, special certifications needed…" />
      </div>

      {/* I'm not a robot checkbox */}
      <div className={`captcha-wrap${captchaError ? ' captcha-wrap--error' : ''}`}>
        <label className="captcha-checkbox-label">
          <div className="captcha-checkbox-box">
            <input
              type="checkbox"
              checked={verified}
              onChange={handleCheck}
            />
            <span className="captcha-checkmark">
              {verified && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              )}
            </span>
            <span className="captcha-text">I'm not a robot</span>
          </div>
          <div className="captcha-branding">
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
              <rect width="64" height="64" rx="4" fill="#f1f3f4"/>
              <path d="M32 12a20 20 0 1 0 0 40 20 20 0 0 0 0-40z" fill="#4285f4" opacity=".15"/>
              <path d="M32 18a14 14 0 1 1 0 28 14 14 0 0 1 0-28z" fill="none" stroke="#4285f4" strokeWidth="2.5"/>
              <circle cx="32" cy="32" r="5" fill="#34a853"/>
              <path d="M32 18v6M32 40v6M18 32h6M40 32h6" stroke="#4285f4" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="captcha-brand-text">reCAPTCHA</span>
            <span className="captcha-brand-sub">Privacy · Terms</span>
          </div>
        </label>
        {captchaError && (
          <p className="captcha-msg">Please confirm you're not a robot.</p>
        )}
      </div>

      <button
        type="submit"
        className="btn-primary"
        style={{ width: '100%', justifyContent: 'center' }}
        disabled={submitted}
      >
        {submitted
          ? 'Message Sent — We\'ll be in touch!'
          : 'Send Enquiry'}
      </button>
    </form>
  )
}
