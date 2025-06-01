import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="logo">
        <span className="logo-text">TH</span>
      </a>
      <nav className="header-links">
        <a href="#about" className="header-link">
          <span className="nav-icon">👤</span>
          <span className="nav-text">About</span>
        </a>
        <a href="#projects" className="header-link">
          <span className="nav-icon">🚀</span>
          <span className="nav-text">Projects</span>
        </a>
        <a href="#experience" className="header-link">
          <span className="nav-icon">💼</span>
          <span className="nav-text">Experience</span>
        </a>
        <a href="#certifications" className="header-link">
          <span className="nav-icon">🎓</span>
          <span className="nav-text">Certifications</span>
        </a>
        <a href="#activities" className="header-link">
          <span className="nav-icon">🎯</span>
          <span className="nav-text">Activities</span>
        </a>
        <a href="#contact" className="header-link">
          <span className="nav-icon">📧</span>
          <span className="nav-text">Contact</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;