import React from 'react';
import { employeeData } from '../data/employeeData';
import './ProjectsContributions.css';

const ProjectsContributions = () => {
  const { projects } = employeeData;

  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed': return 'status-completed';
      case 'In Progress': return 'status-progress';
      case 'Planning': return 'status-planning';
      default: return '';
    }
  };

  return (
    <section className="projects-contributions section">
      <div className="container">
        <h2 className="section-title">Projects & Contributions</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card card">
              <div className="project-header">
                <h3>{project.name}</h3>
                <span className={`project-status ${getStatusClass(project.status)}`}>
                  {project.status}
                </span>
              </div>
              
              <div className="project-meta">
                <div className="meta-item">
                  <i className="fas fa-user-tie"></i>
                  <span>{project.role}</span>
                </div>
                <div className="meta-item">
                  <i className="fas fa-calendar"></i>
                  <span>{project.timeline}</span>
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                <span className="tech-tag">React</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">AWS</span>
              </div>
              
              <div className="project-actions">
                <button className="btn btn-outline">
                  <i className="fas fa-eye"></i>
                  View Details
                </button>
                <button className="btn btn-outline">
                  <i className="fas fa-file-alt"></i>
                  Documentation
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="contributions-section">
          <h3>Recent Contributions</h3>
          <div className="contributions-list">
            <div className="contribution-item">
              <i className="fas fa-code-branch"></i>
              <div>
                <strong>Code Repository Updates</strong>
                <span>15 commits in the last 30 days</span>
              </div>
            </div>
            <div className="contribution-item">
              <i className="fas fa-comments"></i>
              <div>
                <strong>Code Reviews</strong>
                <span>28 pull requests reviewed this quarter</span>
              </div>
            </div>
            <div className="contribution-item">
              <i className="fas fa-lightbulb"></i>
              <div>
                <strong>Innovation Proposals</strong>
                <span>3 new process improvement suggestions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsContributions;