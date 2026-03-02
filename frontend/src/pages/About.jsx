import React from "react";
import "../styles/About.css";
import profile from "../assets/profile.jpeg"; // Reusing your profile picture

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-header">
        <h1>About <span>Me</span></h1>
        <div className="underline"></div>
      </div>

      <div className="about-main">
        {/* Left Side: Photo */}
        <div className="about-image">
          <img src={profile} alt="Musku Manasa" />
          <div className="image-border"></div>
        </div>

        {/* Right Side: Text */}
        <div className="about-text">
          <h2>I am Musku Manasa</h2>
          <p className="highlight">Aspiring Data Scientist & Augmented Software Engineer</p>
          
          <p>
            I am a passionate technologist based in Bengaluru, dedicated to uncovering 
            meaningful insights from complex data. My journey in tech is driven by a 
            curiosity for how **Artificial Intelligence** and **Machine Learning** can 
            solve real-world challenges.
          </p>

          <p>
            Currently, at <strong>Archelos Intense Technology</strong>, I bridge the gap 
            between robust software engineering and data-driven intelligence. My 
            internship at KIT SkillHub sharpened my skills in <strong>Image Classification </strong> 
            and <strong>Sales Forecasting</strong>, giving me a solid foundation in the 
            ML lifecycle.
          </p>

          <div className="personal-info">
            <div className="info-item"><strong>Location:</strong> Bengaluru, India</div>
            <div className="info-item"><strong>Education:</strong> B.Tech (ECE/CSE)</div>
            <div className="info-item"><strong>Status:</strong> Open to Collaborations</div>
          </div>
        </div>
      </div>

      {/* "What I Do" Section to fill space */}
      <div className="services-section">
        <h3>What I Do</h3>
        <div className="services-grid">
          <div className="service-card">
            <span className="service-icon">📊</span>
            <h4>Data Analysis</h4>
            <p>Transforming raw data into actionable business insights using Python.</p>
          </div>
          <div className="service-card">
            <span className="service-icon">🤖</span>
            <h4>ML Modeling</h4>
            <p>Building and deploying CNNs and Predictive models for various use cases.</p>
          </div>
          <div className="service-card">
            <span className="service-icon">💻</span>
            <h4>Full Stack Dev</h4>
            <p>Developing seamless user experiences with Django and React.js.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;