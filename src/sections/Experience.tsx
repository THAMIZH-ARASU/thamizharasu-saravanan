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
                  title="🤖 Research Project Intern"
                  organization="JIPMER"
                  date="Feb 2025 - Present"
                  description="Working on 3D Segmentation of Liver, Tumor, Hepatic Arteries, Hepatic Veins and Portal Veins from Computed Tomography Scan Images using Segmentation ArchitecturesWorking"
                  tech={["SegFormer", "UNET", "Vision Transformers", "CT Scans", "Slicer 3D"]}
                />
                <ProjectCard
                  title="📊 Intern"
                  organization="Manatec Electronics Pvt. Ltd."
                  date="May 2024 - June 2024"
                  description="During this period, I have demonstrated a high level of proficiency and commitment to the project 'Parameter checking for Wheel Alignment'"
                  tech={["Python-Tkinter", "Microsoft Databases", "Excel"]}
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