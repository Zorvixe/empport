import React from 'react';
import { employeeData } from '../data/employeeData';
import './SkillsCertifications.css';

const SkillsCertifications = () => {
  const { skills, certifications } = employeeData;

  const skillCategories = {
    Frontend: skills.filter(skill => skill.category === 'Frontend'),
    Backend: skills.filter(skill => skill.category === 'Backend'),
    Cloud: skills.filter(skill => skill.category === 'Cloud'),
    DevOps: skills.filter(skill => skill.category === 'DevOps')
  };

  return (
    <section className="skills-certifications section">
      <div className="container">
        <h2 className="section-title">Skills & Certifications</h2>
        <div className="grid-2">
          <div className="card">
            <h3>Technical Skills</h3>
            <div className="skills-container">
              {Object.entries(skillCategories).map(([category, categorySkills]) => (
                <div key={category} className="skill-category">
                  <h4>{category}</h4>
                  <div className="skills-list">
                    {categorySkills.map((skill, index) => (
                      <div key={index} className="skill-item">
                        <span className="skill-name">{skill.name}</span>
                        <span className={`skill-level ${skill.level.toLowerCase()}`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="card">
            <h3>Certifications & Training</h3>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <div className="cert-icon">
                    <i className="fas fa-certificate"></i>
                  </div>
                  <div className="cert-details">
                    <h4>{cert.name}</h4>
                    <div className="cert-meta">
                      <span>Issued: {cert.date}</span>
                      {cert.expiry !== 'N/A' && <span>Expires: {cert.expiry}</span>}
                    </div>
                  </div>
                  <div className="cert-status">
                    {cert.expiry === 'N/A' ? 'Permanent' : 'Valid'}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="training-progress">
              <h4>Current Training</h4>
              <div className="training-item">
                <div className="training-info">
                  <span>Advanced Cloud Architecture</span>
                  <span>65% Complete</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '65%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsCertifications;