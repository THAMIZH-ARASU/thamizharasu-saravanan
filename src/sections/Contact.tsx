import React from 'react';
import NotebookSection from '../components/NotebookSection';
import Cell from '../components/Cell';
import SocialLinks from '../components/SocialLinks';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="notebook-section">
      <NotebookSection title="contact.ipynb">
        <Cell 
          type="markdown" 
          number={1} 
          content={
            <>
              <h2>Get in Touch</h2>
              <SocialLinks />
            </>
          } 
        />
      </NotebookSection>
    </section>
  );
};

export default Contact;