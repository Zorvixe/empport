import React from "react";
import { employeeData } from "../data/employeeData";
import "./SkillsCertifications.css";

const SkillsCertifications = () => {
  const { skills, certifications } = employeeData;

  const skillCategories = {
    Frontend: skills.filter((skill) => skill.category === "Frontend"),
    Backend: skills.filter((skill) => skill.category === "Backend"),
    Cloud: skills.filter((skill) => skill.category === "Cloud"),
    DevOps: skills.filter((skill) => skill.category === "DevOps"),
  };

  return (
    <section className="skills-section py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <h2
          className="text-center fw-bold mb-5 text-primary"
          data-aos="zoom-in"
        >
          Skills & Certifications
        </h2>

        <div className="row g-4">
          {/* Skills Section */}
          <div
            className="col-lg-6 col-md-12"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="card shadow-lg border-0 rounded-4 p-4 h-100 skill-card">
              <h3 className="text-secondary fw-bold mb-4 d-flex align-items-center">
                <i className="fas fa-code me-2 text-primary"></i>
                Technical Skills
              </h3>

              <div className="row">
                {Object.entries(skillCategories).map(
                  ([category, categorySkills], index) => (
                    <div
                      key={category}
                      className="col-12 mb-4"
                      data-aos="zoom-in-up"
                      data-aos-delay={index * 100}
                    >
                      <h5 className="fw-semibold text-dark mb-3 border-bottom pb-1">
                        {category}
                      </h5>

                      <div className="d-flex flex-wrap gap-2">
                        {categorySkills.map((skill, idx) => (
                          <div
                            key={idx}
                            className="badge bg-white text-dark border border-primary px-3 py-2 rounded-pill shadow-sm"
                            data-aos="flip-up"
                            data-aos-delay={idx * 80}
                          >
                            <span className="fw-semibold">{skill.name}</span>{" "}
                            <span
                              className={`ms-2 text-${skill.level.toLowerCase()}`}
                            >
                              {skill.level}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div
            className="col-lg-6 col-md-12"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="card shadow-lg border-0 rounded-4 p-4 h-100 cert-card">
              <h3 className="text-secondary fw-bold mb-4 d-flex align-items-center">
                <i className="fas fa-certificate me-2 text-warning"></i>
                Certifications & Training
              </h3>

              <div className="certifications-list mb-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-center justify-content-between border-bottom py-3"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="d-flex align-items-center">
                      <div className="cert-icon bg-primary text-white rounded-circle p-2 me-3">
                        <i className="fas fa-award"></i>
                      </div>
                      <div>
                        <h6 className="mb-1 fw-bold">{cert.name}</h6>
                        <small className="text-muted">
                          Issued: {cert.date}
                          {cert.expiry !== "N/A" &&
                            ` • Expires: ${cert.expiry}`}
                        </small>
                      </div>
                    </div>
                    <span
                      className={`badge ${
                        cert.expiry === "N/A"
                          ? "bg-success"
                          : "bg-info text-dark"
                      }`}
                    >
                      {cert.expiry === "N/A" ? "Permanent" : "Valid"}
                    </span>
                  </div>
                ))}
              </div>

              <h5
                className="fw-bold mb-3 d-flex align-items-center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="fas fa-graduation-cap me-2 text-success"></i>
                Current Training
              </h5>

              <div
                className="training-item"
                data-aos="zoom-in-up"
                data-aos-delay="500"
              >
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-semibold text-dark">
                    Advanced Cloud Architecture
                  </span>
                  <span className="text-muted">95% Complete</span>
                </div>
                <div className="progress rounded-pill" style={{ height: 10 }}>
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "95%" }}
                  ></div>
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
