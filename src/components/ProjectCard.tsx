import React from 'react';
import '../styles/Projects.css';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string;
  date?: string;
  organization?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  tech, 
  link, 
  image,
  date,
  organization
}) => {
  return (
    <div className="project-card">
      {image && (
        <div className="project-image-container">
          <img src={image} alt={title} className="project-image" />
        </div>
      )}
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        {organization && <p className="project-organization">{organization}</p>}
        {date && <p className="project-date">{date}</p>}
        <p className="project-description">{description}</p>
        <div className="project-tech">
          {tech.map((item, index) => (
            <span key={index} className="tech-tag">{item}</span>
          ))}
        </div>
        {link && (
          <a href={link} className="project-link">
            <span>View Project</span>
            <span className="link-arrow">→</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;