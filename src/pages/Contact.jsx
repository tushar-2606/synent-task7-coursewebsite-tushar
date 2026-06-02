import Navbar from '../components/Navbar'

function Contact() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-main">
        <section className="page-content page-panel">
          <h1>Contact Us</h1>
          <p className="page-text">
            Reach out for support, course advice, or to learn how LearnHub can help you grow your skills.
          </p>
        </section>
      </main>
    </div>
  )
}

export default Contact;