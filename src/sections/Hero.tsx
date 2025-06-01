import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const animateElements = () => {
      const profile = profileRef.current;
      if (profile) {
        profile.classList.add('animate-in');
      }
    };
    
    // Add animation classes after a small delay
    setTimeout(animateElements, 100);
  }, []);
  
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-profile" ref={profileRef}>
          <div className="hero-image-container">
            <img 
              src="/src/assets/photo.PNG"
              alt="Thamizharasu Saravanan" 
              className="hero-image"
            />
          </div>
          <h1 className="hero-name" data-text="THAMIZHARASU SARAVANAN">
            THAMIZHARASU SARAVANAN
          </h1>
          <h2 className="hero-title">
            <span className="typing-text">Data Science & ML Enthusiast</span>
          </h2>
        </div>
        <p className="hero-intro">
          I'm a passionate Data Science graduate with expertise in Machine Learning and 
          Artificial Intelligence. My journey in data science is driven by curiosity and 
          a desire to solve complex problems using cutting-edge technologies.
        </p>
        <div className="tech-stack">
          <span className="tech-item">Python</span>
          <span className="tech-item">Machine Learning</span>
          <span className="tech-item">Deep Learning</span>
          <span className="tech-item">Data Analysis</span>
        </div>
        <a href="#about" className="hero-cta">
          <span>Explore My Work</span>
          <span className="cta-arrow">→</span>
        </a>
      </div>
      
      <div className="hero-doodles">
        <div className="doodle doodle-1"></div>
        <div className="doodle doodle-2"></div>
        <div className="doodle doodle-3"></div>
        <div className="doodle doodle-4"></div>
      </div>
    </section>
  );
};

export default Hero;