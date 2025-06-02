import React from 'react';
import NotebookSection from '../components/NotebookSection';
import Cell from '../components/Cell';
import '../styles/Notebook.css';

const About: React.FC = () => {
  return (
    <section id="about" className="notebook-section">
      <NotebookSection title="about.ipynb">
        <Cell 
          type="markdown" 
          number={1} 
          content={
            <>
              <h2>About Me</h2>
              <p>
                Passionate about Full Stack Development and Machine Learning, 
                I build scalable, intelligent software solutions.
                With a strong grasp of Java and Python, and some front-end experience, 
                I deliver end-to-end systems—from intuitive interfaces to ML-powered back ends.
              </p>
              <p>
                My expertise includes machine learning algorithms, data visualization, and 
                predictive modeling. I'm constantly exploring new technologies and methodologies 
                to enhance my skills and contribute to the field of data science.
              </p>
              <p>
                With a solid foundation in statistical analysis and programming, I specialize 
                in extracting meaningful insights from complex datasets and developing 
                intelligent solutions that make a real impact.
              </p>
            </>
          } 
        />
      </NotebookSection>
    </section>
  );
};

export default About;