import React from "react";
import { employeeData } from "../data/employeeData";
import "./PerformanceMetrics.css";

const PerformanceMetrics = () => {
  const { performance } = employeeData;

  const getRatingColor = (rating) => {
    switch (rating) {
      case "Exceeds Expectations":
        return "#28a745";
      case "Meets Expectations":
        return "#ffc107";
      case "Needs Improvement":
        return "#dc3545";
      default:
        return "#6c757d";
    }
  };

  return (
    <section className="performance-section py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-center mb-5" data-aos="zoom-in">
          Performance & Development
        </h2>

        <div className="row g-4">
          {/* Performance Review Card */}
          <div
            className="col-lg-6 d-flex"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="card performance-card flex-fill shadow-lg border-0 p-4">
              <h3
                className="fw-bold text-primary mb-3"
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                <i className="fas fa-chart-line me-2"></i> Performance Review
              </h3>

              <div
                className="d-flex align-items-center mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div
                  className="rating-circle flex-shrink-0 me-4"
                  style={{ borderColor: getRatingColor(performance.rating) }}
                >
                  <span style={{ color: getRatingColor(performance.rating) }}>
                    {performance.rating}
                  </span>
                </div>

                <div className="text-muted">
                  <p>
                    <strong>Last Review:</strong> {performance.lastReview}
                  </p>
                  <p>
                    <strong>Next Review:</strong> June 2024
                  </p>
                  <p>
                    <strong>Reviewer:</strong> Sarah Johnson (Manager)
                  </p>
                </div>
              </div>

              <div
                className="goals-section"
                data-aos="flip-up"
                data-aos-delay="250"
              >
                <h5 className="fw-bold text-success mb-3">
                  <i className="fas fa-bullseye me-2"></i> Current Goals
                </h5>
                <ul className="list-unstyled ms-3">
                  {performance.goals.map((goal, index) => (
                    <li
                      key={index}
                      className="d-flex align-items-center mb-2"
                      data-aos="fade-up"
                      data-aos-delay={300 + index * 50}
                    >
                      <i className="fas fa-check-circle text-success me-2"></i>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Achievements & Recognition Card */}
          <div
            className="col-lg-6 d-flex"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <div className="card achievement-card flex-fill shadow-lg border-0 p-4">
              <h3
                className="fw-bold text-warning mb-3"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <i className="fas fa-trophy me-2"></i> Achievements &
                Recognition
              </h3>

              <div
                className="achievements-list mb-4"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                {performance.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="achievement-item d-flex align-items-start mb-3 p-3 rounded"
                    data-aos="flip-left"
                    data-aos-delay={300 + index * 50}
                  >
                    <i className="fas fa-medal fa-lg text-warning me-3"></i>
                    <div>
                      <strong className="d-block">{achievement}</strong>
                      <small className="text-muted">
                        Recognized for outstanding contribution
                      </small>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="d-flex justify-content-between text-center metrics-container"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="metric-item border-end flex-fill">
                  <h4 className="fw-bold text-primary">4.8/5.0</h4>
                  <small className="text-muted">Peer Rating</small>
                </div>
                <div className="metric-item border-end flex-fill">
                  <h4 className="fw-bold text-success">95%</h4>
                  <small className="text-muted">Project Completion</small>
                </div>
                <div className="metric-item flex-fill">
                  <h4 className="fw-bold text-info">100%</h4>
                  <small className="text-muted">Deadline Met</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;
