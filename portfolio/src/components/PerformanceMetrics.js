import React from "react";
import { employeeData } from "../data/employeeData";
import "./PerformanceMetrics.css";

const PerformanceMetrics = () => {
  const { performance } = employeeData;

  const getRatingColor = (rating) => {
    switch (rating) {
      case "Exceeds Expectations":
        return "#2ecc71";
      case "Meets Expectations":
        return "#f1c40f";
      case "Needs Improvement":
        return "#e74c3c";
      default:
        return "#7f8c8d";
    }
  };

  return (
    <section className="performance-section" data-aos="fade-up">
      <div className="container">
        <h2 className="showcase-title" data-aos="zoom-in">
          Performance Analysis
        </h2>

        <div className="cards-row">
          {/* Performance Review */}
          <div
            className="performance-card"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <h3 className="card-title">
              <i className="fas fa-chart-line"></i> Performance Review
            </h3>

            <div className="rating-box" data-aos="zoom-in" data-aos-delay="200">
              <div
                className="rating-circle"
                style={{ borderColor: getRatingColor(performance.rating) }}
              >
                <span style={{ color: getRatingColor(performance.rating) }}>
                  {performance.rating}
                </span>
              </div>

              <div className="rating-details">
                <p>
                  <strong>Last Review:</strong> {performance.lastReview}
                </p>
                <p>
                  <strong>Next Review:</strong> June 2024
                </p>
                <p>
                  <strong>Reviewer:</strong> Sarah Johnson
                </p>
              </div>
            </div>

            <h4 className="sub-heading">
              <i className="fas fa-bullseye"></i> Current Goals
            </h4>

            <ul className="goals-list">
              {performance.goals.map((goal, index) => (
                <li
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 60}
                >
                  <i className="fas fa-check-circle"></i> {goal}
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div
            className="achievement-card"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h3 className="card-title">
              <i className="fas fa-trophy"></i> Achievements
            </h3>

            <div className="achievements-list">
              {performance.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="achievement-item"
                  data-aos="flip-left"
                  data-aos-delay={300 + index * 60}
                >
                  <i className="fas fa-medal"></i>
                  <div>
                    <strong>{achievement}</strong>
                    <small>Recognized for excellence</small>
                  </div>
                </div>
              ))}
            </div>

            <div className="metrics">
              <div>
                <h4>4.8/5.0</h4>
                <span>Peer Rating</span>
              </div>
              <div>
                <h4>95%</h4>
                <span>Project Success</span>
              </div>
              <div>
                <h4>100%</h4>
                <span>Deadlines Met</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;
