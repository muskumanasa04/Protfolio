import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>

      <div className="project-card">
        <h2>House Price Prediction</h2>
        <p>
          Built a Machine Learning model using Linear Regression to predict
          house prices based on features like area, location, and number of bedrooms.
          Implemented using Python, Pandas, Scikit-learn and deployed with Flask.
        </p>
      </div>

      <div className="project-card">
        <h2>Image Classification using CNN</h2>
        <p>
          Developed a Deep Learning model using Convolutional Neural Networks (CNN)
          to classify images into different categories. Achieved high accuracy
          using TensorFlow and Keras.
        </p>
      </div>

      <div className="project-card">
        <h2>Sales Data Analysis</h2>
        <p>
          Performed Exploratory Data Analysis (EDA) on sales dataset to identify
          trends and business insights. Used Python, Pandas, Matplotlib, and Seaborn
          for visualization and reporting.
        </p>
      </div>

      <div className="project-card">
        <h2>Django-React E-commerce Website</h2>
        <p>
          Full-stack web application built using Django REST Framework for backend
          and React for frontend. Implemented authentication, cart functionality,
          and payment integration.
        </p>
      </div>
    </div>
  );
}

export default Projects;

