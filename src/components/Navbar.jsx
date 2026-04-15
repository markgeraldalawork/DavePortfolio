import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* Logo */}
        <h2 className="logo">Sir Dave</h2>

        {/* Desktop Menu */}
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/content-knowledge" onClick={() => setIsOpen(false)}>Content Knowledge</Link>
          <Link to="/learning-environment" onClick={() => setIsOpen(false)}>Learning Environment</Link>
          <Link to="/diversity" onClick={() => setIsOpen(false)}>Diversity of Learners</Link>
          {/* <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link> */}
        </div>

        {/* Hamburger Button */}
        <div 
          className={`hamburger ${isOpen ? "active" : ""}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </nav>
  )
}