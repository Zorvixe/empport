import React from 'react';
import './Header.css';

const Header = ({ currentView, setCurrentView }) => {
  return (
    <header className="company-header">
      <div className="container">
        <div className="header-content">
          <div className="company-logo">
            <div className="logo-icon">🏢</div>
            <div className="company-info">
              <h1>TechCorp International</h1>
              <p>Employee Directory</p>
            </div>
          </div>
          
          <nav className="header-nav">
            <button 
              className={`nav-btn ${currentView === 'profile' ? 'active' : ''}`}
              onClick={() => setCurrentView('profile')}
            >
              <i className="fas fa-user"></i>
              Employee Profile
            </button>
            <button 
              className={`nav-btn ${currentView === 'team' ? 'active' : ''}`}
              onClick={() => setCurrentView('team')}
            >
              <i className="fas fa-users"></i>
              Team View
            </button>
            <button 
              className={`nav-btn ${currentView === 'directory' ? 'active' : ''}`}
              onClick={() => setCurrentView('directory')}
            >
              <i className="fas fa-address-book"></i>
              Directory
            </button>
          </nav>
          
          <div className="header-actions">
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
            <div className="user-menu">
              <span>HR Portal</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;