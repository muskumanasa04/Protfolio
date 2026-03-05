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

      <div className="project-card">
            <h2>AI Email Generator using LangChain</h2>
            <p>
              Developed an AI-powered Email Generator that automatically creates
              professional emails based on user input. Built using LangChain with
              Groq LLM integration for intelligent text generation. Used ChromaDB
              for vector storage and Sentence Transformers for embeddings. 
              Implemented data processing using Pandas and web scraping using 
              BeautifulSoup. The application interface was developed using Streamlit 
              for an interactive user experience.
            </p>
        </div>

        <div className="project-card">
            <h2>AI Chatbot using LLaMA</h2>
            <p>
              Developed an AI-powered chatbot using LLaMA models with the 
              llama-cpp-python library for local inference. The chatbot can 
              understand user queries and generate intelligent responses in 
              real time. Built an interactive user interface using Streamlit 
              to allow users to communicate with the chatbot easily and 
              efficiently.
            </p>
          </div>

          <div className="project-card">
              <h2>Rossmann Store Sales Prediction</h2>
              <p>
                Built a Machine Learning model to predict daily sales for Rossmann stores
                using historical sales data. Performed data preprocessing, feature
                engineering, and handled missing values using Pandas and NumPy.
                Implemented a Random Forest Regressor to improve prediction accuracy and
                applied log transformation on sales data to handle skewness. The trained
                model was saved using Pickle for future predictions.
              </p>
            </div>

          <div className="project-card">
              <h2>Diabetes Prediction System</h2>
              <p>
                Built a Machine Learning model to predict whether a person has diabetes
                using health data like glucose level, BMI, blood pressure, insulin, and age.
                Used Python, Pandas, and Scikit-learn to train a Random Forest model.
                Applied StandardScaler for feature scaling and saved the model using Pickle.
                Deployed the model using a Flask web application to provide real-time predictions.
              </p>
            </div>
    </div>
  );
}

export default Projects;

