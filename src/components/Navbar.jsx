import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__brand" onClick={() => setIsOpen(false)}>
          LearnHub
        </Link>
        <button
          className={`navbar__toggle ${isOpen ? 'navbar__toggle--open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`navbar__menu ${isOpen ? 'navbar__menu--open' : ''}`} aria-label="Primary navigation">
          <Link to="/" className="navbar__link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="navbar__link" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/courses" className="navbar__link" onClick={() => setIsOpen(false)}>
            Courses
          </Link>
          <Link to="/contact" className="navbar__link" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link to="/courses" className="navbar__cta" onClick={() => setIsOpen(false)}>
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;