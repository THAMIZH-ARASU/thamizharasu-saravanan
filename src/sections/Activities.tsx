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
                  title="📚 AWS ML Ascend Challenge - 2nd Edition"
                  description="Took part in a global machine learning hackathon focused on accelerating solar energy innovation. Applied data science and machine learning to real-world renewable energy challenges. A meaningful opportunity to innovate with purpose in the field of green technology and sustainability."
                  tech={["Design Patterns", "Data Science"]}
                />
                <ProjectCard
                  title="👥 Intel GenAI Hackathon"
                  description="Participated in the 24-hour Intel Gen AI Hackathon at KPR Institute of Engineering and Technology, hosted by Intel. Out of 300+ talented teams, we secured a spot in the top 25!"
                  tech={["VGG-16", "Data Collection", "Leadership"]}
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