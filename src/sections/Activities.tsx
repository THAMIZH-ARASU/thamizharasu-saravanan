import React from 'react';
import NotebookSection from '../components/NotebookSection';
import Cell from '../components/Cell';
import ProjectCard from '../components/ProjectCard';

const Activities: React.FC = () => {
  return (
    <section id="activities" className="notebook-section">
      <NotebookSection title="extracurricular.ipynb">
        <Cell 
          type="markdown" 
          number={1} 
          content={
            <>
              <h2>Activities</h2>
              <div className="project-grid">
                <ProjectCard
                  title="📚 Data Science Blog"
                  description="Regular contributor to a data science blog, writing about ML algorithms, data visualization, and AI trends."
                  tech={["Technical Writing", "Data Science"]}
                />
                <ProjectCard
                  title="👥 ML Study Group"
                  description="Led a study group focused on machine learning concepts and practical implementations."
                  tech={["Teaching", "Leadership"]}
                />
              </div>
            </>
          } 
        />
      </NotebookSection>
    </section>
  );
};

export default Activities;