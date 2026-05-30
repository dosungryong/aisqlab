import React from 'react';
import '../styles/Professor.css';

const Professor: React.FC = () => (
  <div className="professor-page">
    <header className="page-header">
      <h1>Professor Profile</h1>
      <p>Leading research in AI and software quality with a commitment to advancing trustworthy systems through rigorous engineering practices.</p>
    </header>

    <section className="professor-section">
      <div className="professor-image">
        <div className="image-placeholder">Photo</div>
      </div>
      <div className="professor-info">
        <h2>Sung Iyoong Do</h2>
        <p className="title">Director, AI & Software Quality Research Lab</p>
        <p>Professor, Division of Computer Engineering</p>
        <p>Kangwon National University</p>
        
        <div className="contact">
          <p><strong>Email:</strong> sidoby@kangwon.ac.kr</p>
          <p><strong>Phone:</strong> +82-2-6361-3357</p>
        </div>
      </div>
    </section>

    <section className="bio-section">
      <h3>Biography</h3>
      <p>Professor is a researcher in artificial intelligence and software quality assurance with over 15 years of experience in academia and industry. Their research focuses on developing trustworthy AI systems through software engineering practices, quality assurance methodologies, and systematic safety engineering.</p>
    </section>

    <section className="details-grid">
      <div className="detail-column">
        <h3>📚 Education</h3>
        <ul>
          <li><strong>Ph.D. in Computer Science</strong><br/>KAIST (2005)</li>
          <li><strong>M.S. in Engineering</strong><br/>KAIST (2003)</li>
          <li><strong>B.S. in Software</strong><br/>Kangwon National University (2001)</li>
        </ul>
      </div>

      <div className="detail-column">
        <h3>🎯 Research Interests</h3>
        <ul>
          <li>AI & Software Engineering</li>
          <li>Process Model</li>
          <li>Project Management</li>
          <li>Data Quality</li>
          <li>Safety Critical Systems</li>
        </ul>
      </div>
    </section>
  </div>
);

export default Professor;