import React, { useState } from 'react';
import '../styles/Publications.css';

const Publications: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const publications = [
    { id: 1, title: 'Applying IOTM to Establish Safety Analysis', year: 2023, type: 'conference' },
    { id: 2, title: 'A Framework for Integrating Software Safety', year: 2022, type: 'journal' },
    { id: 3, title: 'Safety Analysis Through FMEA', year: 2022, type: 'conference' },
    { id: 4, title: 'Development and QA Classification of AI Systems', year: 2021, type: 'journal' },
    { id: 5, title: 'Process Model Design Through CMMI', year: 2020, type: 'conference' },
    { id: 6, title: 'Quality Metrics for Industrial Convergence', year: 2019, type: 'journal' },
  ];

  const stats = {
    total: publications.length,
    conference: publications.filter(p => p.type === 'conference').length,
    journal: publications.filter(p => p.type === 'journal').length,
    patent: 0
  };

  const filtered = filter === 'all' ? publications : publications.filter(p => p.type === filter);

  return (
    <div className="publications-page">
      <header className="page-header">
        <h1>Publications</h1>
        <p>A comprehensive collection of peer-reviewed publications and research papers.</p>
      </header>

      <section className="stats-section">
        <div className="stat"><div className="num">{stats.total}</div><div>Total</div></div>
        <div className="stat"><div className="num">{stats.conference}</div><div>Conference</div></div>
        <div className="stat"><div className="num">{stats.journal}</div><div>Journal</div></div>
        <div className="stat"><div className="num">{stats.patent}</div><div>Patent</div></div>
      </section>

      <section className="filter-section">
        {['all', 'conference', 'journal', 'patent'].map(t => (
          <button
            key={t}
            className={`btn ${filter === t ? 'active' : ''}`}
            onClick={() => setFilter(t)}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </section>

      <section className="list-section">
        {filtered.map((pub, i) => (
          <article key={pub.id} className="item">
            <div className="num">{i + 1}</div>
            <div>
              <h3>{pub.title}</h3>
              <p>{pub.year} <span className={`tag tag-${pub.type}`}>{pub.type}</span></p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Publications;