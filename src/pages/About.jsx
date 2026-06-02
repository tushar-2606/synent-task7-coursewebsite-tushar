import Navbar from '../components/Navbar'

function About() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-main">
        <section className="page-content page-panel">
          <h1>About Us</h1>
          <p className="page-text">
            LearnHub brings expert-led curriculum and practical learning paths together to help you build in-demand skills.
          </p>
        </section>
      </main>
    </div>
  )
}

export default About;