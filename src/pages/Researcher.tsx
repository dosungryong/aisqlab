import React from 'react';
import '../styles/Researcher.css';

const Researcher: React.FC = () => (
  <div className="researcher-page">
    <header className="page-header">
      <h1>Our Team</h1>
      <p>Meet the talented researchers and engineers driving innovation in AI & software engineering, process model, safety critical system, and industrial convergence applications.</p>
    </header>

    <section className="team-section">
      <h2>Current Researchers</h2>
      <p className="section-desc">Active members of our research group</p>
      <div className="team-grid">
        {[
          { init: 'YES', name: 'Yeo Eun Soo', exp: 'AI Governance, Digital Transformation' },
          { init: 'PGH', name: 'Park Sang Hyeon', exp: 'Data Analysis, AI Engineering' },
          { init: 'PJC', name: 'Park Joon Cheol', exp: 'Automation DevOps, Software Architecture' },
          { init: 'SCH', name: 'Seong Choong Hun', exp: 'AI Governance, AI Law' },
          { init: 'HJH', name: 'Hong Jin Hyeok', exp: 'Software Engineering, DevOps' },
          { init: 'JMK', name: 'Jang Mi Kyung', exp: 'Software Engineering, Process Model' },
        ].map((member) => (
          <div key={member.init} className="member">
            <div className="badge">{member.init}</div>
            <h3>{member.name}</h3>
            <p>{member.exp}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="team-section">
      <h2>Alumni</h2>
      <p className="section-desc">Former members who have contributed to our research</p>
      <div className="team-grid">
        {[
          { init: 'YUA', name: 'Yun UI Am', exp: 'Cloud System, Data Analysis' },
          { init: 'CJW', name: 'Choi Joung Wook', exp: 'Military System, Safety Engineering' },
          { init: 'BWS', name: 'Baek Woon Silk', exp: 'Information System, Data Analysis' },
        ].map((member) => (
          <div key={member.init} className="member">
            <div className="badge">{member.init}</div>
            <h3>{member.name}</h3>
            <p>{member.exp}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="cta-section">
      <h2>Get in Touch</h2>
      <p>Interested in joining our research group or collaborating with us?</p>
      <button>Contact Us</button>
    </section>
  </div>
);

export default Researcher;