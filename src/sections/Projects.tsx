import React from 'react';
import NotebookSection from '../components/NotebookSection';
import Cell from '../components/Cell';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="notebook-section">
      <NotebookSection title="projects.ipynb">
        <Cell 
          type="code" 
          number={1} 
          runnable={true}
          codeContent={`# SRCNN
model = nn.Sequential(
    nn.Conv2d(1, 64, 9, padding=4),
    nn.ReLU(),
    nn.Conv2d(64, 32, 5, padding=2),
    nn.ReLU(),
    nn.Conv2d(32, 1, 5, padding=2)
)
output = model(input_img)`}
          output={
            <ProjectCard
              title="🤖 Pixel Perfect"
              image="https://raw.githubusercontent.com/THAMIZH-ARASU/PixelPerfect-SRCNN/main/output/Odie256B.png"
              description="Enhance low-resolution images with AI-powered Super-Resolution Convolutional Neural Network (SRCNN)."
              tech={["Python", "OpenCV", "CNNs", "Matplotlib"]}
              link="https://github.com/THAMIZH-ARASU/PixelPerfect-SRCNN"
            />
          }
        />

        <Cell 
          type="code" 
          number={2} 
          runnable={true}
          codeContent={`# Style Transfer
vgg = models.vgg19(pretrained=True)
content = vgg(content_img)
style = vgg(style_img)
result = transfer_style(content, style)`}
          output={
            <ProjectCard
              title="🎨 Neural Style Transfer"
              image="https://github.com/THAMIZH-ARASU/Neural-Style-Transfer-Using-VGG19/raw/main/notebooks/images/Concept.png"
              description="The approach leverages the representational power of the VGG-19 network. Neural style transfer aims to combine the content of one image with the artistic style of another, producing a new, stylized image."
              tech={["VGG-19", "Flask", "FastAPI", "TorchVision"]}
              link="https://github.com/THAMIZH-ARASU/Neural-Style-Transfer-Using-VGG19"
            />
          }
        />

        <Cell 
          type="markdown" 
          number={3} 
          content={
            <>
              <h2>Academic Projects</h2>
              <div className="project-grid">
                <ProjectCard
                  title="🎓 Multi-Environment PaaS Simulation"
                  description="A sophisticated Python-based platform for managing and monitoring cloud resources across multiple environments with advanced features like dynamic scaling, serverless functions, and real-time visualization."
                  tech={["Python", "TKinter", "Logging"]}
                  link="https://github.com/THAMIZH-ARASU/Multi-Environment-PaaS-Simulation"
                />
                <ProjectCard
                  title="📈 Simple Product Management System"
                  description="The project, 'Product Management System', demonstrates practical applications of database management principles using Java Swing for the user interface, Eclipse IDE for development, and robust database connectivity."
                  tech={["Java Swing", "Eclipse IDE", "Oracle Database"]}
                  link="https://github.com/THAMIZH-ARASU/DBMS_LAB"
                />
              </div>
            </>
          } 
        />

        <Cell 
          type="markdown" 
          number={4} 
          content={
            <div className="github-link-container">
              <h2>View More Projects</h2>
              <p>Check out more of my projects on GitHub:</p>
              <a 
                href="https://github.com/THAMIZH-ARASU" 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
              >
                <span className="github-icon">📦</span>
                THAMIZH-ARASU
              </a>
            </div>
          } 
        />
      </NotebookSection>
    </section>
  );
};

export default Projects;