import React from 'react';
import { employeeData } from '../data/employeeData';
import './DepartmentInfo.css';

const DepartmentInfo = () => {
  const { department } = employeeData;

  return (
    <section className="department-info section">
      <div className="container">
        <h2 className="section-title">Department & Team</h2>
        <div className="grid-3">
          <div className="card">
            <div className="card-header">
              <i className="fas fa-building"></i>
              <h3>Department</h3>
            </div>
            <div className="department-details">
              <h4>{department.name}</h4>
              <p>Technology and Product Development Division</p>
              <div className="manager-info">
                <label>Department Manager</label>
                <div className="manager">
                  <i className="fas fa-user-tie"></i>
                  <span>{department.manager}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="card-header">
              <i className="fas fa-users"></i>
              <h3>Team</h3>
            </div>
            <div className="team-details">
              <h4>{department.team}</h4>
              <p>Frontend Development & User Experience</p>
              <div className="team-stats">
                <div className="team-stat">
                  <span className="stat-number">8</span>
                  <span className="stat-label">Team Members</span>
                </div>
                <div className="team-stat">
                  <span className="stat-number">4</span>
                  <span className="stat-label">Active Projects</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="card-header">
              <i className="fas fa-desktop"></i>
              <h3>Work Setup</h3>
            </div>
            <div className="workspace-details">
              <div className="workspace-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <label>Office Location</label>
                  <span>{department.floor}</span>
                </div>
              </div>
              <div className="workspace-item">
                <i className="fas fa-chair"></i>
                <div>
                  <label>Desk Number</label>
                  <span>{department.desk}</span>
                </div>
              </div>
              <div className="workspace-item">
                <i className="fas fa-laptop"></i>
                <div>
                  <label>Equipment</label>
                  <span>MacBook Pro 16", Dual Monitor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentInfo;