// ContactForm — controlled form with submit confirmation state.
// On submit the button label changes to a success message (no page reload).
import { useState } from 'react'

const productOptions = [
  'Self-Service Kiosks',
  'Industrial PCs',
  'Mini PCs',
  'All-In-One PCs',
  'Rack Servers',
  'Networking Products',
  'Active LED Displays',
  'Display Screens',
  'Custom / OEM / ODM',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label>First Name</label>
          <input type="text" placeholder="John" />
        </div>
        <div className="form-field">
          <label>Last Name</label>
          <input type="text" placeholder="Smith" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label>Email</label>
          <input type="email" placeholder="john@company.com" />
        </div>
        <div className="form-field">
          <label>Phone</label>
          <input type="tel" placeholder="+1 (555) 000-0000" />
        </div>
      </div>

      <div className="form-field">
        <label>Company</label>
        <input type="text" placeholder="Your company name" />
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
