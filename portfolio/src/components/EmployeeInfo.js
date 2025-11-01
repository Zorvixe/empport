import React from "react";
import { employeeData } from "../data/employeeData";
import "./EmployeeInfo.css";

const EmployeeInfo = () => {
  const { personalInfo } = employeeData;

  return (
    <section className="employee-info py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-center mb-5" data-aos="zoom-in">
          Employee Information
        </h2>

        <div className="row g-4">
          <div className="col-md-6" data-aos="fade-right" data-aos-delay="200">
            <div className="card shadow-lg border-0 info-card">
              <div className="card-body">
                <h3 className="card-title text-primary mb-4">
                  Basic Information
                </h3>
                <div className="row gy-3">
                  <div className="col-6">
                    <label className="fw-bold text-muted d-block">
                      Employee ID
                    </label>
                    <span>{personalInfo.employeeId}</span>
                  </div>
                  <div className="col-6">
                    <label className="fw-bold text-muted d-block">
                      Position
                    </label>
                    <span>{personalInfo.position}</span>
                  </div>
                  <div className="col-6">
                    <label className="fw-bold text-muted d-block">
                      Department
                    </label>
                    <span>{personalInfo.department}</span>
                  </div>
                  <div className="col-6">
                    <label className="fw-bold text-muted d-block">
                      Location
                    </label>
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="col-6">
                    <label className="fw-bold text-muted d-block">
                      Join Date
                    </label>
                    <span>{personalInfo.joinDate}</span>
                  </div>
                  <div className="col-6">
                    <label className="fw-bold text-muted d-block">Status</label>
                    <span className="badge bg-success fs-6 px-3 py-2">
                      {personalInfo.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6" data-aos="fade-left" data-aos-delay="300">
            <div className="card shadow-lg border-0 info-card">
              <div className="card-body">
                <h3 className="card-title text-primary mb-4">
                  Contact Details
                </h3>

                <div className="contact-item mb-3 d-flex align-items-start">
                  <i className="fas fa-envelope text-primary fs-4 me-3 mt-1"></i>
                  <div>
                    <label className="fw-bold text-muted d-block">Email</label>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-decoration-none"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="contact-item mb-3 d-flex align-items-start">
                  <i className="fas fa-phone text-primary fs-4 me-3 mt-1"></i>
                  <div>
                    <label className="fw-bold text-muted d-block">
                      Work Phone
                    </label>
                    <span>
                      {personalInfo.phone} ext. {personalInfo.extension}
                    </span>
                  </div>
                </div>

                <div className="contact-item d-flex align-items-start">
                  <i className="fas fa-map-marker-alt text-primary fs-4 me-3 mt-1"></i>
                  <div>
                    <label className="fw-bold text-muted d-block">
                      Office Location
                    </label>
                    <span>Floor 3, Desk W3-47</span>
                  </div>
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
