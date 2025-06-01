import React from 'react';
import '../styles/Notebook.css';

interface NotebookSectionProps {
  title: string;
  children: React.ReactNode;
}

const NotebookSection: React.FC<NotebookSectionProps> = ({ title, children }) => {
  return (
    <div className="notebook-container">
      <div className="notebook-header">
        <div className="notebook-dots">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>
        <div className="notebook-title">{title}</div>
      </div>
      
      <div className="notebook-body">
        {children}
      </div>
    </div>
  );
};

export default NotebookSection;