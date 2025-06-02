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
                  title="🎓 Data Science using Python"
                  date="FITA - 2024"
                  description="Comprehensive certification program focused on core and advanced concepts in Data Science using Python. Gained hands-on experience in Data Manipulation, Visualization, Model Training."
                  tech={["Data Science", "Machine Learning"]}
                />
                <ProjectCard
                  title="📈 Diploma in Full Stack Java Developer"
                  date="CSEC - 2024"
                  description="Completed an in-depth training program covering both front-end and back-end development. Acquired hands-on experience in Spring Boot and ReactJS."
                  tech={["Core JAVA", "Spring Boot", "React JS", "MySQL"]}
                />
                <ProjectCard
                  title="🔍 Diploma in Computer Application"
                  date="CSEC - 2019"
                  description="Completed foundational training in computer applications, focusing on productivity tools and basic programming. Gained practical skills in C, C++ and Web Development."
                  tech={["C", "C++", "Microsoft Office Suite"]}
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