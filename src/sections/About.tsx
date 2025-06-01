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
                I am a recent graduate with a passion for Data Science, Machine Learning, 
                and Artificial Intelligence. My journey in the field of data has been driven 
                by curiosity and a desire to solve complex problems using cutting-edge technologies.
              </p>
              <p>
                With a solid foundation in statistical analysis and programming, I specialize 
                in extracting meaningful insights from complex datasets and developing 
                intelligent solutions that make a real impact.
              </p>
              <p>
                My expertise includes machine learning algorithms, data visualization, and 
                predictive modeling. I'm constantly exploring new technologies and methodologies 
                to enhance my skills and contribute to the field of data science.
              </p>
            </>
          } 
        />
      </NotebookSection>
    </section>
  );
};

export default About;