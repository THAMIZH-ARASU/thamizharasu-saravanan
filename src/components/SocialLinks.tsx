import React from 'react';
import '../styles/Contact.css';

const SocialLinks: React.FC = () => {
  const links = [
    {
      name: 'GitHub',
      url: 'https://github.com/THAMIZH-ARASU',
      icon: '💻'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/amizharasu/',
      icon: '🔗'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/thamizh.me/',
      icon: '📱'
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@amizharasu',
      icon: '📝'
    },
    {
      name: 'Kaggle',
      url: 'https://www.kaggle.com/amizharasu',
      icon: '📊'
    }
  ];

  return (
    <div className="social-links">
      {links.map((link, index) => (
        <a 
          key={index}
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-link"
        >
          <span className="social-icon">{link.icon}</span>
          <span className="social-name">{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;