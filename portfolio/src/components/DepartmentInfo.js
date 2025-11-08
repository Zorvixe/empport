import React, { useState, useEffect, useRef } from "react";
import { employeeData } from "../data/employeeData";
import "./DepartmentInfo.css";

const DepartmentInfo = () => {
  const { department } = employeeData;
  const [activeIndex, setActiveIndex] = useState(0);
  const autoRef = useRef(null);
  const startX = useRef(null);

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  const startAuto = () => {
    stopAuto();
    autoRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 3000);
  };

  const stopAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
  };

  const dragStart = (e) => {
    stopAuto();
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const dragMove = (e) => {
    if (!startX.current) return;
    const curX = e.touches ? e.touches[0].clientX : e.clientX;
    const diff = curX - startX.current;

    if (diff > 60) {
      setActiveIndex((prev) => (prev === 0 ? 2 : prev - 1));
      startX.current = null;
    } else if (diff < -60) {
      setActiveIndex((prev) => (prev + 1) % 3);
      startX.current = null;
    }
  };

  const dragEnd = () => {
    startX.current = null;
    startAuto();
  };

  return (
    <section className="department-info-3d">
      <h2 className="dept-title" data-aos="zoom-in">
        Department & Team
      </h2>

      <div
        className="carousel-3d"
        style={{ transform: `rotateY(${-activeIndex * 120}deg)` }}
        onMouseDown={dragStart}
        onMouseMove={dragMove}
        onMouseUp={dragEnd}
        onMouseLeave={dragEnd}
        onTouchStart={dragStart}
        onTouchMove={dragMove}
        onTouchEnd={dragEnd}
      >
        <div
          className={`dept-card ${
            activeIndex === 0 ? "active-card bounce" : ""
          }`}
        >
          <div className="dept-icon">
            <i className="bi bi-buildings"></i>
          </div>
          <h4>Department</h4>
          <p className="sub">Technology & Product Development</p>
          <p className="label">Manager</p>
          <p className="value">{department.manager}</p>
        </div>

        <div
          className={`dept-card ${
            activeIndex === 1 ? "active-card bounce" : ""
          }`}
        >
          <div className="dept-icon">
            <i className="bi bi-microsoft-teams"></i>
          </div>
          <h4>Team</h4>
          <p className="sub">Frontend Development & UX</p>
          <div className="team">
            <div>
              <h5>8</h5>
              <span>Members</span>
            </div>
            <div>
              <h5>4</h5>
              <span>Projects</span>
            </div>
          </div>
        </div>

        <div
          className={`dept-card ${
            activeIndex === 2 ? "active-card bounce" : ""
          }`}
        >
          <div className="dept-icon">
            <i className="bi bi-geo-alt"></i>
          </div>
          <h4>Work Setup</h4>
          <p className="setup">📍 {department.floor}</p>
          <p className="setup">💺 {department.desk}</p>
          <p className="setup">💻 MacBook Pro 16” + Dual Monitor</p>
        </div>
      </div>

      <div className="indicator-dots">
        <span className={activeIndex === 0 ? "dot active-dot" : "dot"}></span>
        <span className={activeIndex === 1 ? "dot active-dot" : "dot"}></span>
        <span className={activeIndex === 2 ? "dot active-dot" : "dot"}></span>
      </div>
    </section>
  );
};

export default DepartmentInfo;
