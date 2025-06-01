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
          codeContent={`data = pd.read_csv('customer_churn.csv')
X = data.drop(['customer_id', 'churn'], axis=1)
y = data['churn']

model = RandomForestClassifier()
model.fit(X, y)
print(f"Accuracy: {model.score(X, y):.2f}")`}
          output={
            <ProjectCard
              title="🤖 Customer Churn Prediction"
              image="https://images.pexels.com/photos/7947451/pexels-photo-7947451.jpeg?auto=compress&cs=tinysrgb&w=800"
              description="Developed a machine learning model to predict customer churn using Random Forest Classifier. Achieved 85% accuracy in identifying potential churners."
              tech={["Python", "Scikit-learn", "Pandas", "NumPy"]}
              link="#"
            />
          }
        />

        <Cell 
          type="code" 
          number={2} 
          runnable={true}
          codeContent={`data = pd.read_csv('covid_data.csv')
data['date'] = pd.to_datetime(data['date'])

plt.plot(data['date'], data['cases'])
plt.title('COVID-19 Cases')
plt.show()

print(f"Total Cases: {data['cases'].max():,}")`}
          output={
            <ProjectCard
              title="📊 COVID-19 Data Analysis"
              image="https://images.pexels.com/photos/4197563/pexels-photo-4197563.jpeg?auto=compress&cs=tinysrgb&w=800"
              description="Conducted comprehensive analysis of COVID-19 data using Python. Created interactive visualizations and identified key trends in the pandemic's spread."
              tech={["Python", "Pandas", "Seaborn", "Matplotlib"]}
              link="#"
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
                  title="🎓 Natural Language Processing"
                  description="Developed a sentiment analysis model for social media data using BERT and achieved 92% accuracy in emotion classification."
                  tech={["Python", "BERT", "NLP"]}
                  link="#"
                />
                <ProjectCard
                  title="📈 Time Series Analysis"
                  description="Built a forecasting model for stock market prediction using LSTM networks and achieved 78% prediction accuracy."
                  tech={["Python", "TensorFlow", "LSTM"]}
                  link="#"
                />
              </div>
            </>
          } 
        />
      </NotebookSection>
    </section>
  );
};

export default Projects;