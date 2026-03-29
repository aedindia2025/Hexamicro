// Contact — two-column layout: contact info on the left, ContactForm on the right.
import ContactForm from './ContactForm'
import './Contact.css'

const contactItems = [
  { iconCode: 9993,   label: 'Email',          value: 'sales@hexamicro.com' },
  { iconCode: 128222, label: 'Phone',          value: '+1 (888) 439-2627' },
  {
    iconCode: 127968,
    label: 'Headquarters',
    value: 'Hexamicro Technology Park\nSilicon Valley, CA 94025',
    multiline: true,
  },
  { iconCode: 9202,   label: 'Business Hours', value: 'Mon – Fri, 08:00 – 18:00 PST' },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-layout">

        {/* Left: info */}
        <div className="contact-info">
          <div className="section-label">Reach Out</div>
          <h2 className="section-title" style={{ fontSize: '1.8rem' }}>
            Let's Start a Conversation
          </h2>
          <p className="section-sub" style={{ marginBottom: '2.5rem' }}>
            Whether you need a single unit or a full production run, our team is ready to help
            engineer your solution.
          </p>

          <div className="contact-items">
            {contactItems.map(({ iconCode, label, value, multiline }) => (
              <div className="c-item" key={label}>
                <div
                  className="c-icon"
                  dangerouslySetInnerHTML={{ __html: `&#${iconCode};` }}
                />
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
        <ContactForm />
      </div>
    </section>
  )
}
