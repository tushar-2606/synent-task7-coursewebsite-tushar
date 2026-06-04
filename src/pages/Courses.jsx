import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Courses() {
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [selectedDuration, setSelectedDuration] = useState('all')

  const coursesData = [
    {
      id: 1,
      title: 'Full-Stack Web Engineering',
      description: 'Build production-ready web applications using React, Node.js, and modern deployment workflows.',
      duration: 10,
      level: 'Advanced'
    },
    {
      id: 2,
      title: 'AI Foundations',
      description: 'Learn practical machine learning workflows, model evaluation, and production-ready AI integration.',
      duration: 8,
      level: 'Intermediate'
    },
    {
      id: 3,
      title: 'Product Design Sprint',
      description: 'Master rapid product design, user research, and polished interface systems for modern digital products.',
      duration: 7,
      level: 'Intermediate'
    },
    {
      id: 4,
      title: 'Data Analytics Accelerator',
      description: 'Turn data into insight with analytics pipelines, visualization, and decision-ready reporting techniques.',
      duration: 7,
      level: 'Intermediate'
    },
    {
      id: 5,
      title: 'Cloud Platform Specialist',
      description: 'Deploy scalable systems, manage infrastructure as code, and drive cloud-native operations with confidence.',
      duration: 9,
      level: 'Advanced'
    },
    {
      id: 6,
      title: 'Growth Marketing Lab',
      description: 'Develop campaign strategy, analytics, and conversion techniques to grow engagement and revenue.',
      duration: 6,
      level: 'Beginner'
    }
  ]

  const filteredCourses = coursesData.filter((course) => {
    const levelMatch = selectedLevel === 'all' || course.level === selectedLevel
    const durationMatch = selectedDuration === 'all' || 
      (selectedDuration === 'short' && course.duration <= 7) ||
      (selectedDuration === 'medium' && course.duration > 7 && course.duration <= 8) ||
      (selectedDuration === 'long' && course.duration > 8)
    return levelMatch && durationMatch
  })

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

          <div className="course-filters">
            <div className="filter-group">
              <label htmlFor="level-filter">Difficulty Level:</label>
              <select 
                id="level-filter"
                className="filter-select" 
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                <option value="all">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="duration-filter">Duration:</label>
              <select 
                id="duration-filter"
                className="filter-select" 
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
              >
                <option value="all">All Durations</option>
                <option value="short">Up to 7 weeks</option>
                <option value="medium">8 weeks</option>
                <option value="long">9+ weeks</option>
              </select>
            </div>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="courses-grid">
              {filteredCourses.map((course) => (
                <article key={course.id} className="course-card">
                  <h3>{course.title}</h3>
                  <p>
                    {course.description}
                  </p>
                  <div className="course-meta">
                    <span>{course.duration} weeks</span>
                    <span>{course.level}</span>
                  </div>
                  <button type="button" className="button button--primary">
                    Enroll Now
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '3rem 1.5rem',
              color: 'var(--text-muted)'
            }}>
              <p style={{ fontSize: '1.05rem', margin: '0' }}>
                No courses match your filters. Try adjusting your selection.
              </p>
            </div>
          )}

          <div style={{
            marginTop: '3rem',
            padding: '2rem',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(106, 129, 255, 0.08), rgba(74, 213, 255, 0.05))',
            border: '1px solid rgba(106, 129, 255, 0.2)',
            textAlign: 'center'
          }}>
            <h3 style={{ marginTop: '0', color: 'var(--text)', fontSize: '1.3rem' }}>
              Can't find what you're looking for?
            </h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: '60ch', margin: '0.8rem auto 0' }}>
              Contact our team to learn about custom training programs and corporate learning solutions tailored to your organization's needs.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Courses;