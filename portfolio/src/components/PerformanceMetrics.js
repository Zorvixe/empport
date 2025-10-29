import React from 'react';
import { employeeData } from '../data/employeeData';
import './PerformanceMetrics.css';

const PerformanceMetrics = () => {
  const { performance } = employeeData;

  const getRatingColor = (rating) => {
    switch (rating) {
      case 'Exceeds Expectations': return '#28a745';
      case 'Meets Expectations': return '#ffc107';
      case 'Needs Improvement': return '#dc3545';
      default: return '#6c757d';
    }
  };

  return (
    <section className="performance-metrics section">
      <div className="container">
        <h2 className="section-title">Performance & Development</h2>
        <div className="grid-2">
          <div className="card">
            <h3>Performance Review</h3>
            <div className="review-summary">
              <div className="rating-display">
                <div 
                  className="rating-circle"
                  style={{borderColor: getRatingColor(performance.rating)}}
                >
                  <span style={{color: getRatingColor(performance.rating)}}>
                    {performance.rating}
                  </span>
                </div>
                <div className="rating-details">
                  <p><strong>Last Review:</strong> {performance.lastReview}</p>
                  <p><strong>Next Review:</strong> June 2024</p>
                  <p><strong>Reviewer:</strong> Sarah Johnson (Manager)</p>
                </div>
              </div>
            </div>
            
            <div className="goals-section">
              <h4>Current Goals</h4>
              <ul className="goals-list">
                {performance.goals.map((goal, index) => (
                  <li key={index}>
                    <i className="fas fa-target"></i>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="card">
            <h3>Achievements & Recognition</h3>
            <div className="achievements-list">
              {performance.achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <i className="fas fa-trophy"></i>
                  <div>
                    <strong>{achievement}</strong>
                    <span>Recognized for outstanding contribution</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="metrics-grid">
              <div className="metric">
                <div className="metric-value">4.8/5.0</div>
                <div className="metric-label">Peer Rating</div>
              </div>
              <div className="metric">
                <div className="metric-value">95%</div>
                <div className="metric-label">Project Completion</div>
              </div>
              <div className="metric">
                <div className="metric-value">100%</div>
                <div className="metric-label">Deadline Met</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;