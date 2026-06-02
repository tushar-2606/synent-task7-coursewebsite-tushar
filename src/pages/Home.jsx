import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-main">
        <section className="hero-grid">
          <div className="hero-copy">
            <span className="hero-badge">Career-focused online learning platform</span>
            <h1>Learn In-Demand Skills From Industry Experts</h1>
            <p className="hero-text">
              Build in-demand skills with curated pathways, live learning insights, and expert support for every step of your journey.
            </p>
            <div className="hero-actions">
              <Link to="/courses" className="button button--primary">
                Start Learning
              </Link>
              <Link to="/about" className="button button--ghost">
                Explore Programs
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <strong>82K+</strong>
                <span>Students</span>
              </div>
              <div className="hero-stat">
                <strong>120+</strong>
                <span>Courses</span>
              </div>
              <div className="hero-stat">
                <strong>210</strong>
                <span>Mentors</span>
              </div>
            </div>
          </div>
          <div className="hero-panel">
            <div className="dashboard-card">
              <div className="dashboard-header">
                <div>
                  <p>Design Career Track</p>
                  <h2>Learning Analytics</h2>
                </div>
                <span className="status-pill">On track</span>
              </div>
              <div className="dashboard-meta">
                <div>
                  <p>Lessons Completed</p>
                  <strong>18 / 24</strong>
                </div>
                <div>
                  <p>Course Score</p>
                  <strong>92%</strong>
                </div>
              </div>
              <div className="progress-list">
                <div className="progress-item">
                  <div>
                    <span>UI Foundations</span>
                    <strong>85%</strong>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill progress-fill--high" />
                  </div>
                </div>
                <div className="progress-item">
                  <div>
                    <span>Interaction Design</span>
                    <strong>60%</strong>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill progress-fill--mid" />
                  </div>
                </div>
              </div>
              <div className="analytics-grid">
                <div className="analytics-card">
                  <p>Weekly Growth</p>
                  <strong>+18%</strong>
                </div>
                <div className="analytics-card">
                  <p>Active Projects</p>
                  <strong>6</strong>
                </div>
                <div className="analytics-card">
                  <p>Mentor Sessions</p>
                  <strong>4</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home;