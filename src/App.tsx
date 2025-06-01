import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Activities from './sections/Activities';
import Contact from './sections/Contact';
import './styles/App.css';

function App() {
  useEffect(() => {
    // Add smooth scrolling to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = targetSection?.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
    });

    // Set active link based on scroll position
    const setActiveLink = () => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.header-link');
      const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 50;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          const current = section.getAttribute('id');
          
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', setActiveLink);
    
    return () => {
      window.removeEventListener('scroll', setActiveLink);
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certifications />
        <Activities />
        <Contact />
      </main>
    </div>
  );
}

export default App;