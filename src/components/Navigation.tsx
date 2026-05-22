import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-badge">AI</span>
          <div>
            <div className="logo-title">AI & Software Quality</div>
            <div className="logo-subtitle">Research Lab</div>
          </div>
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/" className={isActive('/') ? 'active' : ''}>Main</Link>
          </li>
          <li>
            <Link to="/professor" className={isActive('/professor') ? 'active' : ''}>Professor</Link>
          </li>
          <li>
            <Link to="/researcher" className={isActive('/researcher') ? 'active' : ''}>Researcher</Link>
          </li>
          <li>
            <Link to="/publications" className={isActive('/publications') ? 'active' : ''}>Publications</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;