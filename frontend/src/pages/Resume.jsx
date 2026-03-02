import React, { useState, useRef } from "react";
import { 
  WhatsappShareButton, WhatsappIcon, 
  EmailShareButton, EmailIcon, 
  LinkedinShareButton, LinkedinIcon,
  TwitterShareButton, TwitterIcon 
} from "react-share";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../styles/Resume.css";
import profile from "../assets/profile.jpeg";

function Resume() {
  const [showShare, setShowShare] = useState(false);
  const resumeRef = useRef();
  const shareUrl = window.location.href;

  const skills = [
    { name: "Python / Machine Learning", level: "90%", color: "#3498db" },
    { name: "Django / Flask Basics", level: "80%", color: "#2ecc71" },
    { name: "HTML & CSS", level: "85%", color: "#e67e22" },
    { name: "Deep Learning (CNN)", level: "75%", color: "#9b59b6" },
    { name: "Basics of NLP", level: "70%", color: "#f1c40f" },
    { name: "Git & GitHub", level: "85%", color: "#e74c3c" },
  ];

  const downloadPDF = () => {
    const input = resumeRef.current;
    html2canvas(input, { scale: 2, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Musku_Manasa_Resume.pdf");
    });
  };

  return (
    <div className="resume-container-main">
      <div className="resume-wrapper" ref={resumeRef}>
        <header className="resume-header">
          <div className="header-left">
            <img src={profile} alt="Musku Manasa" className="profile-img" />
            <div className="header-info">
              <h1>MUSKU MANASA</h1>
              <p className="subtitle">Aspiring Data Scientist & Software Engineer</p>
              <div className="contact-grid">
                <span>📍 Bengaluru, India</span>
                <span>📧 manasamusku122@gmail.com</span>
                <span><a href="https://linkedin.com/in/musku-manasa-10b411327" target="_blank" rel="noreferrer">LinkedIn</a></span>
                <span><a href="https://github.com/muskumanasa04" target="_blank" rel="noreferrer">GitHub</a></span>
              </div>
            </div>
          </div>
          <br></br>
          <div className="header-actions">
            <div style={{ position: "relative" }}>
              <button className="btn-share" onClick={() => setShowShare(!showShare)}>Share</button>
              {showShare && (
                <div style={{ position: "absolute", top: "45px", right: 0, background: "#fff", padding: "10px", border: "1px solid #ddd", display: "flex", gap: "10px", zIndex: 10, borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
                  <WhatsappShareButton url={shareUrl} title="Check out my profile!"><WhatsappIcon size={32} round /></WhatsappShareButton>
                  <EmailShareButton url={shareUrl} subject="Resume - Musku Manasa"><EmailIcon size={32} round /></EmailShareButton>
                  <LinkedinShareButton url={shareUrl}><LinkedinIcon size={32} round /></LinkedinShareButton>
                  <TwitterShareButton url={shareUrl}><TwitterIcon size={32} round /></TwitterShareButton>
                </div>
              )}
            </div>
            <button className="btn-download" onClick={downloadPDF}>Download</button>
          </div>
        </header>


        <div className="resume-body">
          <main className="main-content">
            <section>
              <h3><span className="icon">👤</span> PROFESSIONAL SUMMARY</h3>
              <p>
                Aspiring Data Scientist with hands-on experience in Machine Learning, Deep Learning (CNN), NLP basics, LLM & RAG concepts. 
                Skilled in full-stack development using Django and React. Currently working as an Augmented Software Engineer at Archelos Intense Technology Pvt. Ltd.
              </p>
            </section>

<b></b>
            <section>
              <h3><span className="icon">🚀</span> PROJECTS</h3>
              <div className="project-item" style={{ marginBottom: "20px" }}>
                <strong>Image Classification using DL (CNN)</strong>
                <p style={{ fontSize: "0.95rem", color: "#555", margin: "5px 0" }}>
                  Implemented a Deep Learning model using Convolutional Neural Networks to classify images with high accuracy. 
                  Focused on preprocessing datasets and optimizing model layers to improve predictive performance.
                </p>
              </div>

              <div className="project-item" style={{ marginBottom: "20px" }}>
                <strong>Mobile & Laptop Sales Data Analysis (2025)</strong>
                <p style={{ fontSize: "0.95rem", color: "#555", margin: "5px 0" }}>
                  Conducted comprehensive data analysis using Python to forecast sales trends. 
                  Developed visualizations to identify market demands and pricing strategies for the upcoming electronics market.
                </p>
              </div>

              <div className="project-item" style={{ marginBottom: "20px" }}>
                <strong>Emart Website</strong>
                <p style={{ fontSize: "0.95rem", color: "#555", margin: "5px 0" }}>
                  A Full-Stack e-commerce application developed using **Django** for the backend and **React.js** for a responsive frontend. 
                  Features include product listing and dynamic state management.
                </p>
              </div>

              <div className="project-item" style={{ marginBottom: "20px" }}>
                <strong>Dominos Clone Website</strong>
                <p style={{ fontSize: "0.95rem", color: "#555", margin: "5px 0" }}>
                  Created a high-fidelity frontend clone of the Dominos website using React.js to master UI/UX design and component-based architecture.
                </p>
              </div>
            </section>

            <section>
              <h3><span className="icon">💼</span> EXPERIENCE</h3>
              <div className="experience-item">
                <div className="exp-header">
                  <strong>Augmented Software Engineer</strong>
                  <span className="date">Present</span>
                </div>
                <p className="company">Archelos Intense Technology Pvt. Ltd</p>
                <ul>
                  <li>Developing full-stack applications using React and Django.</li>
                  <li>Integrating ML models into web platforms for real-time analysis.</li>
                </ul>
              </div>
            </section>
          </main>

          <aside className="sidebar">
            <h3><span className="icon">🛠</span> TECHNICAL SKILLS</h3>
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <label>{skill.name}</label>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: skill.level, backgroundColor: skill.color }}></div>
                </div>
              </div>
            ))}

            <div style={{ marginTop: "40px" }}>
              <h3><span className="icon">🎓</span> INTERNSHIP</h3>
              <p><strong>KIT SkillHub</strong></p>
              <p style={{ fontSize: "0.9rem",color: "#3498db", fontWeight:"bold" }}>Data Scientist Intern (2 Months)</p>
              <p style={{ fontSize: "0.85rem", color: "#666" }}>Worked on Image Classification and Sales Data Analysis projects.</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Resume;