import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-main">
        <section className="page-content">
          <div className="page-hero contact-hero">
            <h1>Contact Us</h1>
            <p className="hero-text">
              Have questions about our courses, need technical support, or want to explore partnership opportunities? We're here to help. Reach out to our dedicated team and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-info-card">
                <h3>Email Support</h3>
                <p>
                  For general inquiries and support requests:
                </p>
                <a href="mailto:support@learnhub.com">support@learnhub.com</a>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Response time: Within 24 hours
                </p>
              </div>

              <div className="contact-info-card">
                <h3>Phone Support</h3>
                <p>
                  Call us directly for immediate assistance:
                </p>
                <a href="tel:+919876543210">+91 9876543210</a>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Available Mon-Fri, 9 AM - 6 PM IST
                </p>
              </div>

              <div className="contact-info-card">
                <h3>Office Location</h3>
                <p>
                  Visit our headquarters:
                </p>
                <p>
                  LearnHub Inc.<br />
                  Technology Park, Building A<br />
                  Ahmedabad, Gujarat 380001<br />
                  India
                </p>
              </div>

              <div className="contact-info-card">
                <h3>Business Hours</h3>
                <p>
                  Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                  Saturday: 10:00 AM - 4:00 PM IST<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              {isSubmitted && (
                <div style={{
                  padding: '1rem',
                  borderRadius: '12px',
                  background: 'rgba(75, 213, 255, 0.12)',
                  border: '1px solid rgba(75, 213, 255, 0.3)',
                  color: 'var(--accent-strong)',
                  fontSize: '0.95rem',
                  fontWeight: '500'
                }}>
                  Thank you for reaching out! We'll get back to you soon.
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit">
                Send Message
              </button>

              <p style={{
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
                textAlign: 'center',
                margin: '0'
              }}>
                We'll respond to your message as soon as possible.
              </p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Contact;