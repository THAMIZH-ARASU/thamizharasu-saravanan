import React from 'react';
import NotebookSection from '../components/NotebookSection';
import Cell from '../components/Cell';
import ProjectCard from '../components/ProjectCard';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="notebook-section">
      <NotebookSection title="certifications.ipynb">
        <Cell 
          type="markdown" 
          number={1} 
          content={
            <>
              <h2>Certifications</h2>
              <div className="project-grid">
                <ProjectCard
                  title="🎓 Deep Learning Specialization"
                  date="Coursera - 2023"
                  description="Comprehensive deep learning certification covering neural networks, CNN, RNN, and transformer architectures."
                  tech={["Deep Learning", "Neural Networks"]}
                />
                <ProjectCard
                  title="📈 Data Science Professional"
                  date="IBM - 2023"
                  description="Professional certification in data science, covering data analysis, visualization, and machine learning."
                  tech={["Data Science", "Machine Learning"]}
                />
                <ProjectCard
                  title="🔍 AWS Machine Learning"
                  date="Amazon - 2023"
                  description="Specialized certification in cloud-based machine learning solutions and AWS ML services."
                  tech={["AWS", "Cloud ML"]}
                />
              </div>
            </>
          } 
        />
      </NotebookSection>
    </section>
  );
};

export default Certifications;