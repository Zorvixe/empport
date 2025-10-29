import React from 'react';
import { employeeData } from '../data/employeeData';
import './EmployeeInfo.css';

const EmployeeInfo = () => {
  const { personalInfo } = employeeData;

  return (
    <section className="employee-info section">
      <div className="container">
        <h2 className="section-title">Employee Information</h2>
        <div className="grid-2">
          <div className="card">
            <h3>Basic Information</h3>
            <div className="info-grid">
              <div className="info-item">
                <label>Employee ID</label>
                <span>{personalInfo.employeeId}</span>
              </div>
              <div className="info-item">
                <label>Position</label>
                <span>{personalInfo.position}</span>
              </div>
              <div className="info-item">
                <label>Department</label>
                <span>{personalInfo.department}</span>
              </div>
              <div className="info-item">
                <label>Location</label>
                <span>{personalInfo.location}</span>
              </div>
              <div className="info-item">
                <label>Join Date</label>
                <span>{personalInfo.joinDate}</span>
              </div>
              <div className="info-item">
                <label>Status</label>
                <span className="status-badge active">{personalInfo.status}</span>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h3>Contact Details</h3>
            <div className="contact-list">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <label>Email</label>
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <label>Work Phone</label>
                  <span>{personalInfo.phone} ext. {personalInfo.extension}</span>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <label>Office Location</label>
                  <span>Floor 3, Desk W3-47</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeInfo;