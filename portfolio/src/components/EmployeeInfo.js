import React, { useState, useEffect } from "react";
import { employeeData } from "../data/employeeData";
import "./EmployeeInfo.css";

const EmployeeInfo = () => {
  const { personalInfo } = employeeData;
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setFlip((prev) => !prev), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="employee-info-section">
      <h2 className="info-heading" data-aos="zoom-in">
        Employee Information{" "}
      </h2>

      <div className={`flip-book ${flip ? "flip" : ""}`}>
        <div className="info-card front">
          <h3 className="card-title">Basic Information</h3>
          <div className="info-row">
            <i className="bi bi-person-badge"></i>
            <span>ID</span>
            <p>{personalInfo.employeeId}</p>
          </div>
          <div className="info-row">
            <i className="bi bi-briefcase"></i>
            <span>Position</span>
            <p>{personalInfo.position}</p>
          </div>
          <div className="info-row">
            <i className="bi bi-building"></i>
            <span>Department</span>
            <p>{personalInfo.department}</p>
          </div>
          <div className="info-row">
            <i className="bi bi-geo-alt"></i>
            <span>Location</span>
            <p>{personalInfo.location}</p>
          </div>
          <div className="info-row">
            <i className="bi bi-calendar-check"></i>
            <span>Join Date</span>
            <p>{personalInfo.joinDate}</p>
          </div>
          <div className="info-row">
            <i className="bi bi-circle-fill"></i>
            <span>Status</span>
            <p className="status-badge">{personalInfo.status}</p>
          </div>
        </div>

        <div className="info-card back">
          <h3 className="card-title">Contact Details</h3>
          <div className="info-row">
            <i className="bi bi-envelope"></i>
            <span>Email</span>
            <a href={`mailto:${personalInfo.email}`} className="info-link">
              {personalInfo.email}
            </a>
          </div>
          <div className="info-row">
            <i className="bi bi-telephone"></i>
            <span>Phone</span>
            <p>{personalInfo.phone}</p>
          </div>
          <div className="info-row">
            <i className="bi bi-pin-map"></i>
            <span>Desk</span>
            <p>Floor 3, W3-47</p>
          </div>
        </div>
      </div>

      <button className="flip-btn" onClick={() => setFlip(!flip)}>
        Flip
      </button>
    </section>
  );
};

export default EmployeeInfo;
