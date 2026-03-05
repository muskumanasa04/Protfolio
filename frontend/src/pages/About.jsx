// import React from "react";
// import "../styles/About.css";
// import profile from "../assets/profile.jpeg"; // Reusing your profile picture

// function About() {
//   return (
//     <div className="about-wrapper">
//       <div className="about-header">
//         <h1>About <span>Me</span></h1>
//         <div className="underline"></div>
//       </div>

//       <div className="about-main">
//         {/* Left Side: Photo */}
//         <div className="about-image">
//           <img src={profile} alt="Musku Manasa" />
//           <div className="image-border"></div>
//         </div>

//         {/* Right Side: Text */}
//         <div className="about-text">
//           <h2>I am Musku Manasa</h2>
//           <p className="highlight">Aspiring Data Scientist & Augmented Software Engineer</p>
          
//           <p>
//             I am a passionate technologist based in Bengaluru, dedicated to uncovering 
//             meaningful insights from complex data. My journey in tech is driven by a 
//             curiosity for how **Artificial Intelligence** and **Machine Learning** can 
//             solve real-world challenges.
//           </p>

//           <p>
//             Currently, at <strong>Archelos Intense Technology</strong>, I bridge the gap 
//             between robust software engineering and data-driven intelligence. My 
//             internship at KIT SkillHub sharpened my skills in <strong>Image Classification </strong> 
//             and <strong>Sales Forecasting</strong>, giving me a solid foundation in the 
//             ML lifecycle.
//           </p>

//           <div className="personal-info">
//             <div className="info-item"><strong>Location:</strong> Bengaluru, India</div>
//             <div className="info-item"><strong>Education:</strong> B.Tech (ECE/CSE)</div>
//             <div className="info-item"><strong>Status:</strong> Open to Collaborations</div>
//           </div>
//         </div>
//       </div>

//       {/* "What I Do" Section to fill space */}
//       <div className="services-section">
//         <h3>What I Do</h3>
//         <div className="services-grid">
//           <div className="service-card">
//             <span className="service-icon">📊</span>
//             <h4>Data Analysis</h4>
//             <p>Transforming raw data into actionable business insights using Python.</p>
//           </div>
//           <div className="service-card">
//             <span className="service-icon">🤖</span>
//             <h4>ML Modeling</h4>
//             <p>Building and deploying CNNs and Predictive models for various use cases.</p>
//           </div>
//           <div className="service-card">
//             <span className="service-icon">💻</span>
//             <h4>Full Stack Dev</h4>
//             <p>Developing seamless user experiences with Django and React.js.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;

import React from "react";
import "../styles/About.css";
import profile from "../assets/profile.jpeg"; 

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
          <p className="highlight">Augmented Software Engineer & Aspiring Data Scientist</p>
          
          <p>
            I am a results-driven technologist based in <strong>Telangana</strong>, 
            deeply committed to the field of <strong>Data Science</strong>. My career 
            is built on a foundation of curiosity and a drive to solve complex problems 
            using data-driven methodologies and intelligent software solutions.
          </p>

          <p>
            Currently, I am working as an <strong>Augmented Software Engineer</strong> at 
            <strong> Archelos Intense Technology Pvt. Ltd.</strong> (based in Bengaluru). 
            In this role, I collaborate remotely to integrate <strong>Machine Learning</strong> 
            and <strong>Generative AI</strong> into modern web architectures, ensuring 
            that software isn't just functional, but intelligent.
          </p>

          <div className="personal-info">
            <div className="info-item"><strong>Location:</strong> Telangana, India (Remote)</div>
            <div className="info-item"><strong>Company:</strong> Archelos Intense Tech, Bengaluru</div>
            <div className="info-item"><strong>Focus:</strong> ML, LLMs, & Full Stack Dev</div>
            <div className="info-item"><strong>Goal:</strong> Data Science Excellence</div>
          </div>
        </div>
      </div>

      {/* "What I Do" Section */}
      <div className="services-section">
        <h3>My Expertise</h3>
        <div className="services-grid">
          <div className="service-card">
            <span className="service-icon">📊</span>
            <h4>Data Science</h4>
            <p>Applying statistical models and ML algorithms to extract insights from structured data.</p>
          </div>
          <div className="service-card">
            <span className="service-icon">🧠</span>
            <h4>AI Integration</h4>
            <p>Implementing LLMs, RAG, and CNNs to build next-generation intelligent applications.</p>
          </div>
          <div className="service-card">
            <span className="service-icon">🚀</span>
            <h4>Software Engineering</h4>
            <p>Crafting robust backends with Django/Flask and dynamic frontends with React.js.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;