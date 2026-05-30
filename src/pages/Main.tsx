import React from 'react';
import '../styles/Main.css';

const Main: React.FC = () => {
  const researchAreas = [
    {
      icon: '⚙️',
      title: 'AI & Software Engineering',
      description: 'Advancing AI and software systems through lifecycle-based engineering, systematic methodologies, and international standards for quality, safety, and reliability.'
    },
    {
      icon: '📊',
      title: 'Process Model',
      description: 'Advancing AI and software engineering practices through process models such as CMMI and Automotive SPICE, with a focus on quality, safety, verification, and continuous process improvement.'
    },
    {
      icon: '🔒',
      title: 'Safety Critical System',
      description: 'Enhancing AI and software safety through systematic risk analysis, safety engineering practices, and compliance with international safety standards.'
    },
    {
      icon: '🏭',
      title: 'Industrial Convergence Applications',
      description: 'Applying AI governance, project management, data analytics, data quality, and AI-driven software engineering to advance interdisciplinary industrial research and practical innovation.'
    }
  ];

  return (
    <div className="main-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-label">ADVANCED RESEARCH INITIATIVE</p>
            <h1 className="hero-title">Advancing AI and Software with Quality</h1>
            <p className="hero-description">
              We pioneer research in artificial intelligence, software engineering excellence, and reliable systems. Our research bridges quality assurance and safety standards for artificial intelligence and software.
            </p>
          </div>
          <div className="hero-image">
            <div className="hero-graphic"></div>
          </div>
        </div>
      </section>

      <section className="research-section">
        <h2>Core Research Areas</h2>
        <p className="section-subtitle">
          Our multidisciplinary approach combines artificial intelligence, software engineering, and quality assurance to create reliable, trustworthy systems.
        </p>
        <div className="research-grid">
          {researchAreas.map((area, index) => (
            <div key={index} className="research-card">
              <div className="research-icon">{area.icon}</div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Main;