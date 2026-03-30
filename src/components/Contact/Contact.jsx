// Contact — two-column layout: contact info on the left, ContactForm on the right.
import ContactForm from './ContactForm'
import './Contact.css'

const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)
const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)
const IconMapPin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)

const contactItems = [
  { Icon: IconMail,   label: 'Email',          value: 'info@hexamicro.com' },
  { Icon: IconPhone,  label: 'Phone',          value: '+91 44 42348081' },
  {
    Icon: IconMapPin,
    label: 'Headquarters',
    value: '119, 1st floor, Haritha Towers, St Marys Rd, Abiramapuram,\nChennai, Tamil Nadu - 600 018.',
    multiline: true,
  },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-layout">

        {/* Left: info */}
        <div className="contact-info fade-in-left">
          <div className="section-label"><span className="industries-badge-dot">✦</span> Reach Out</div>
          <h2 className="section-title" style={{ fontSize: '1.8rem' }}>
            Let's Start a Conversation
          </h2>
          <p className="section-sub" style={{ marginBottom: '2.5rem' }}>
            Whether you need a single unit or a full production run, our team is ready to help
            engineer your solution.
          </p>

          <div className="contact-items">
            {contactItems.map(({ Icon, label, value, multiline }) => (
              <div className="c-item" key={label}>
                <div className="c-icon">
                  <Icon />
                </div>
                <div>
                  <div className="c-label">{label}</div>
                  {multiline
                    ? value.split('\n').map((line, i) => (
                        <div className="c-val" key={i}>{line}</div>
                      ))
                    : <div className="c-val">{value}</div>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="fade-in-right" style={{ '--delay': '0.15s' }}>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
