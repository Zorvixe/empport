import React from "react";
import { employeeData } from "../data/employeeData";
import "./ProjectsContributions.css";

const ProjectsContributions = () => {
  const { projects } = employeeData;

  const getStatusClass = (status) => {
    switch (status) {
      case "Completed":
        return "status-completed";
      case "In Progress":
        return "status-progress";
      case "Planning":
        return "status-planning";
      default:
        return "";
    }
  };

  return (
    <section className="projects-contributions section py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-center mb-5" data-aos="zoom-in">
          Projects & Contributions
        </h2>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card project-card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div
                    className="d-flex justify-content-between align-items-center mb-3"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  >
                    <h5 className="fw-bold text-primary">{project.name}</h5>
                    <span className={`badge ${getStatusClass(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  <div
                    className="mb-3 text-muted small"
                    data-aos="fade-left"
                    data-aos-delay="150"
                  >
                    <div>
                      <i className="fas fa-user-tie me-2 text-secondary"></i>
                      {project.role}
                    </div>
                    <div>
                      <i className="fas fa-calendar me-2 text-secondary"></i>
                      {project.timeline}
                    </div>
                  </div>

                  <p
                    className="project-description mb-3"
                    data-aos="zoom-in-up"
                    data-aos-delay="200"
                  >
                    {project.description}
                  </p>

                  <div className="mb-3" data-aos="flip-up" data-aos-delay="250">
                    {project.technologies?.map((tech, i) => (
                      <span
                        key={i}
                        className="badge bg-light text-dark me-2 mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div
                    className="d-flex justify-content-between"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <button className="btn btn-outline-primary btn-sm">
                      <i className="fas fa-eye me-2"></i>View
                    </button>
                    <button className="btn btn-outline-success btn-sm">
                      <i className="fas fa-file-alt me-2"></i>Docs
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="contributions-section mt-5"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3
            className="text-center mb-4 text-dark fw-semibold"
            data-aos="zoom-in"
          >
            Recent Contributions
          </h3>

          <div className="row g-4 justify-content-center">
            <div
              className="col-md-4 col-sm-6"
              data-aos="flip-left"
              data-aos-delay="100"
            >
              <div className="contribution-item shadow-sm p-3 rounded-3 h-100 text-center bg-white">
                <i className="fas fa-code-branch fa-2x text-primary mb-2"></i>
                <h5 className="fw-bold">Code Repository Updates</h5>
                <p className="text-muted small mb-0">
                  15 commits in the last 30 days
                </p>
              </div>
            </div>

            <div
              className="col-md-4 col-sm-6"
              data-aos="flip-up"
              data-aos-delay="200"
            >
              <div className="contribution-item shadow-sm p-3 rounded-3 h-100 text-center bg-white">
                <i className="fas fa-comments fa-2x text-success mb-2"></i>
                <h5 className="fw-bold">Code Reviews</h5>
                <p className="text-muted small mb-0">
                  28 pull requests reviewed this quarter
                </p>
              </div>
            </div>

            <div
              className="col-md-4 col-sm-6"
              data-aos="flip-right"
              data-aos-delay="300"
            >
              <div className="contribution-item shadow-sm p-3 rounded-3 h-100 text-center bg-white">
                <i className="fas fa-lightbulb fa-2x text-warning mb-2"></i>
                <h5 className="fw-bold">Innovation Proposals</h5>
                <p className="text-muted small mb-0">
                  3 new process improvement suggestions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsContributions;
