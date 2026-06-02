import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__column footer__brand">
          <span className="footer__logo">LearnHub</span>
          <p className="footer__text">
            LearnHub is a premium online learning platform delivering career-focused courses with mentorship and data-driven progress.
          </p>
        </div>
        <div className="footer__column">
          <h3>Quick Links</h3>
          <nav className="footer__nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        <div className="footer__column">
          <h3>Courses</h3>
          <nav className="footer__nav">
            <a href="/courses">Web Development</a>
            <a href="/courses">Data Science</a>
            <a href="/courses">AI & Machine Learning</a>
            <a href="/courses">Cloud Computing</a>
          </nav>
        </div>
        <div className="footer__column">
          <h3>Contact</h3>
          <address className="footer__contact">
            <a href="mailto:support@learnhub.com">support@learnhub.com</a>
            <a href="tel:+919876543210">+91 9876543210</a>
            <span>Ahmedabad, Gujarat, India</span>
          </address>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© 2026 LearnHub. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer;
