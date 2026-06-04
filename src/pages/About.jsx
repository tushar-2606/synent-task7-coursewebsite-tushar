import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-main">
        <section className="page-content">
          <div className="page-hero about-hero">
            <h1>About LearnHub</h1>
            <p className="hero-text">
              LearnHub is a premium online learning platform dedicated to transforming careers through accessible, industry-aligned education. We bridge the gap between traditional learning and real-world application, empowering students worldwide to master in-demand skills from expert instructors.
            </p>
          </div>

          <div className="page-section about-section">
            <h2>Our Mission</h2>
            <p>
              Our mission is to democratize quality education by providing comprehensive, hands-on learning experiences that equip students with industry-ready skills. We believe everyone deserves access to expert knowledge and practical training, regardless of their background or location. Through structured learning paths, mentorship, and real-world projects, we help learners build confidence and competence in their chosen fields.
            </p>
          </div>

          <div className="page-section about-section">
            <h2>Our Vision</h2>
            <p>
              We envision a world where quality education is accessible to everyone, everywhere. LearnHub aspires to become a global learning community where learners from diverse backgrounds can upskill and reskill, enabling them to thrive in an ever-evolving digital economy. Our long-term goal is to create sustainable pathways for career transformation and personal growth, fostering innovation and excellence across industries.
            </p>
          </div>

          <div className="page-section">
            <h2>Why Choose LearnHub</h2>
            <div className="about-features">
              <div className="about-feature-card">
                <h3>Industry Experts</h3>
                <p>
                  Learn directly from professionals with years of real-world experience. Our instructors are active practitioners in their fields, bringing current insights and best practices to every course.
                </p>
              </div>
              <div className="about-feature-card">
                <h3>Practical Projects</h3>
                <p>
                  Every course includes hands-on projects that mirror real-world scenarios. Build a portfolio of actual work that showcases your skills to potential employers.
                </p>
              </div>
              <div className="about-feature-card">
                <h3>Flexible Learning</h3>
                <p>
                  Learn at your own pace with lifetime access to course materials. Balance education with work and personal commitments while maintaining your progress.
                </p>
              </div>
              <div className="about-feature-card">
                <h3>Career Support</h3>
                <p>
                  Receive personalized guidance on career planning, resume building, and interview preparation. Our mentors help you navigate your professional journey every step of the way.
                </p>
              </div>
            </div>
          </div>

          <div className="page-section">
            <h2>By The Numbers</h2>
            <div className="about-stats">
              <div className="about-stat-card">
                <strong>82K+</strong>
                <span>Learners Worldwide</span>
              </div>
              <div className="about-stat-card">
                <strong>120+</strong>
                <span>Courses Available</span>
              </div>
              <div className="about-stat-card">
                <strong>210+</strong>
                <span>Expert Mentors</span>
              </div>
              <div className="about-stat-card">
                <strong>95%</strong>
                <span>Satisfaction Rate</span>
              </div>
            </div>
          </div>

          <div className="page-section about-cta-section">
            <h2>Ready to Transform Your Career?</h2>
            <p>
              Join thousands of learners who have already taken the first step toward their dream careers. Explore our comprehensive course catalog and start your learning journey today with expert guidance and support.
            </p>
            <div className="about-cta-actions">
              <Link to="/courses" className="button button--primary">
                Explore Courses
              </Link>
              <Link to="/contact" className="button button--ghost">
                Get In Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default About;