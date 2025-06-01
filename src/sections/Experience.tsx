import React from 'react';
import NotebookSection from '../components/NotebookSection';
import Cell from '../components/Cell';
import ProjectCard from '../components/ProjectCard';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="notebook-section">
      <NotebookSection title="experience.ipynb">
        <Cell 
          type="markdown" 
          number={1} 
          content={
            <>
              <h2>Experience</h2>
              <div className="project-grid">
                <ProjectCard
                  title="📊 Data Science Intern"
                  date="June 2023 - August 2023"
                  description="Worked on developing and implementing machine learning models for customer behavior analysis. Collaborated with cross-functional teams to deliver insights and recommendations."
                  tech={["Python", "Scikit-learn", "Data Analysis"]}
                />
                <ProjectCard
                  title="🤖 Research Assistant"
                  date="January 2023 - May 2023"
                  description="Assisted in AI research projects, focusing on natural language processing and computer vision applications. Contributed to paper writing and experimental design."
                  tech={["Research", "NLP", "Computer Vision"]}
                />
              </div>
            </>
          } 
        />
      </NotebookSection>
    </section>
  );
};

export default Experience;