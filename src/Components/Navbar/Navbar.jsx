import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('portfolio');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);

    // Navigate to the corresponding route
    navigate(`/${section}`);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text" onClick={(e)=>{e.preventDefault();navigate('/')}}>ShaffinX</span>
        </div>
        
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <span
              className={`nav-link ${activeSection === 'Portfolio' ? 'active' : ''}`}
              onClick={() => handleNavClick('Portfolio')}
            >
              Portfolio
            </span>
          </li>
          <li className="nav-item">
            <span
              className={`nav-link ${activeSection === 'About' ? 'active' : ''}`}
              onClick={() => handleNavClick('About')}
            >
              About
            </span>
          </li>
          <li className="nav-item">
            <span
              className={`nav-link ${activeSection === 'Contact' ? 'active' : ''}`}
              onClick={() => handleNavClick('Contact')}
            >
              Contact
            </span>
          </li>
          <li className="nav-item">
            <span
              className={`nav-link ${activeSection === 'Resume' ? 'active' : ''}`}
              onClick={() => handleNavClick('Resume')}
            >
              Resume
            </span>
          </li>
        </ul>
        
        <div className={`nav-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
