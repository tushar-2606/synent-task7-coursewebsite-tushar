import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Courses() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-main">
        <section className="page-content page-hero courses-hero">
          <div className="hero-copy">
            <span className="hero-badge">Premium learning experience</span>
            <h1>Advance your skills with career-focused courses</h1>
            <p className="hero-text">
              Explore programs designed for professionals who want practical outcomes, mentor guidance, and the confidence to launch the next level of their career.
            </p>
          </div>
        </section>
        <section className="page-content page-panel course-catalog">
          <div className="courses-header">
            <div>
              <p className="section-label">Featured Courses</p>
              <h2>Specialized programs for every ambition</h2>
            </div>
            <p className="page-text">
              Choose from six high-impact courses built to blend modern practice, real-world projects, and expert-led instruction.
            </p>
          </div>
          <div className="courses-grid">
            <article className="course-card">
              <h3>Full-Stack Web Engineering</h3>
              <p>
                Build production-ready web applications using React, Node.js, and modern deployment workflows.
              </p>
              <div className="course-meta">
                <span>10 weeks</span>
                <span>Advanced</span>
              </div>
              <button type="button" className="button button--primary">
                Enroll Now
              </button>
            </article>
            <article className="course-card">
              <h3>AI Foundations</h3>
              <p>
                Learn practical machine learning workflows, model evaluation, and production-ready AI integration.
              </p>
              <div className="course-meta">
                <span>8 weeks</span>
                <span>Intermediate</span>
              </div>
              <button type="button" className="button button--primary">
                Enroll Now
              </button>
            </article>
            <article className="course-card">
              <h3>Product Design Sprint</h3>
              <p>
                Master rapid product design, user research, and polished interface systems for modern digital products.
              </p>
              <div className="course-meta">
                <span>7 weeks</span>
                <span>Intermediate</span>
              </div>
              <button type="button" className="button button--primary">
                Enroll Now
              </button>
            </article>
            <article className="course-card">
              <h3>Data Analytics Accelerator</h3>
              <p>
                Turn data into insight with analytics pipelines, visualization, and decision-ready reporting techniques.
              </p>
              <div className="course-meta">
                <span>7 weeks</span>
                <span>Intermediate</span>
              </div>
              <button type="button" className="button button--primary">
                Enroll Now
              </button>
            </article>
            <article className="course-card">
              <h3>Cloud Platform Specialist</h3>
              <p>
                Deploy scalable systems, manage infrastructure as code, and drive cloud-native operations with confidence.
              </p>
              <div className="course-meta">
                <span>9 weeks</span>
                <span>Advanced</span>
              </div>
              <button type="button" className="button button--primary">
                Enroll Now
              </button>
            </article>
            <article className="course-card">
              <h3>Growth Marketing Lab</h3>
              <p>
                Develop campaign strategy, analytics, and conversion techniques to grow engagement and revenue.
              </p>
              <div className="course-meta">
                <span>6 weeks</span>
                <span>Beginner</span>
              </div>
              <button type="button" className="button button--primary">
                Enroll Now
              </button>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Courses;