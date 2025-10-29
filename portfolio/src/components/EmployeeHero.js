import React from 'react';
import { employeeData } from '../data/employeeData';
import './EmployeeHero.css';

const EmployeeHero = () => {
  const { personalInfo } = employeeData;

  return (
    <section className="employee-hero">
      <div className="container">
        <div className="hero-content">
          <div className="employee-badge">
            <div className="employee-avatar">
              <div className="avatar-placeholder">
                {personalInfo.profileImage}
              </div>
              <div className="status-indicator active"></div>
            </div>
            
            <div className="employee-main-info">
              <h1>{personalInfo.name}</h1>
              <h2>{personalInfo.position}</h2>
              <div className="employee-meta">
                <span className="employee-id">ID: {personalInfo.employeeId}</span>
                <span className="department">{personalInfo.department}</span>
              </div>
            </div>
          </div>
          
          <div className="employee-quick-stats">
            <div className="stat">
              <div className="stat-value">5+</div>
              <div className="stat-label">Years with Company</div>
            </div>
            <div className="stat">
              <div className="stat-value">12</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat">
              <div className="stat-value">98%</div>
              <div className="stat-label">Attendance</div>
            </div>
          </div>
          
          <div className="employee-actions">
            <button className="btn btn-primary">
              <i className="fas fa-envelope"></i>
              Send Message
            </button>
            <button className="btn btn-outline">
              <i className="fas fa-calendar"></i>
              Schedule Meeting
            </button>
            <button className="btn btn-outline">
              <i className="fas fa-print"></i>
              Print Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeHero;