import React from "react";
import { employeeData } from "../data/employeeData";
import "./DepartmentInfo.css";

const DepartmentInfo = () => {
  const { department } = employeeData;

  return (
    <section className="department-info py-5" data-aos="fade-up">
      <div className="container">
        <h2
          className="section-title text-center mb-5 text-primary fw-bold"
          data-aos="zoom-in"
        >
          Department & Team
        </h2>

        <div className="row g-4 justify-content-center">
          <div
            className="col-md-4 col-sm-6"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="dept-box shadow-lg p-4 text-center border-0">
              <div className="dept-icon  text-black mx-auto mb-3">
                <i
                  className="bi bi-buildings"
                  style={{ fontSize: "10rem" }}
                ></i>
              </div>
              <h4 className="fw-bold text-dark mb-2">Department</h4>
              <p className="text-muted small mb-3">
                Technology & Product Development
              </p>
              <div className="dept-details">
                <label className="fw-semibold d-block text-secondary mb-1">
                  Manager
                </label>
                <span className="text-dark">{department.manager}</span>
              </div>
            </div>
          </div>

          <div
            className="col-md-4 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="dept-box shadow-lg p-4 text-center border-0">
              <div className="dept-icon  text-black mx-auto mb-3">
                <i
                  class="bi bi-microsoft-teams"
                  style={{ fontSize: "10rem" }}
                ></i>
              </div>
              <h4 className="fw-bold text-dark mb-2">Team</h4>
              <p className="text-muted small mb-3">Frontend Development & UX</p>
              <div className="d-flex justify-content-around">
                <div>
                  <h5 className="fw-bold text-success mb-0">8</h5>
                  <small className="text-muted">Members</small>
                </div>
                <div>
                  <h5 className="fw-bold text-success mb-0">4</h5>
                  <small className="text-muted">Projects</small>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-4 col-sm-6"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="dept-box shadow-lg p-4 text-center border-0">
              <div className="dept-icon bg-warning text-white mx-auto mb-3">
                <i
                  class="bi bi-person-workspace"
                  style={{ fontSize: "10rem" }}
                ></i>
              </div>
              <h4 className="fw-bold text-dark mb-2">Work Setup</h4>
              <div className="text-start mt-3">
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-map-marker-alt text-danger me-2"></i>
                  <span>{department.floor}</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-chair text-secondary me-2"></i>
                  <span>{department.desk}</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-laptop text-info me-2"></i>
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
