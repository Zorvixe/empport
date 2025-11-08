import React, { useState } from "react";
import { employeeData } from "../data/employeeData";
import "./SkillsCertifications.css";

const SkillsCertifications = () => {
  const { skills, certifications } = employeeData;

  const skillCategories = {
    Frontend: skills.filter((s) => s.category === "Frontend"),
    Backend: skills.filter((s) => s.category === "Backend"),
    Cloud: skills.filter((s) => s.category === "Cloud"),
    DevOps: skills.filter((s) => s.category === "DevOps"),
  };

  return (
    <section className="open-book-section" data-aos="fade-up">
      <h2 className="open-book-title" data-aos="zoom-in">
        Skills & Certifications
      </h2>

      <div className="open-book" data-aos="flip-up">

        {/* LEFT PAGE */}
        <div className="page left-page" data-aos="fade-right">
          <h3 className="page-heading">Technical Skills</h3>

          {Object.entries(skillCategories).map(([category, items], index) => (
            <div className="skill-category-block" key={index}>
              <h5 className="page-subtitle">{category}</h5>

              <div className="skill-tag-wrap">
                {items.map((skill, i) => (
                  <span className="skill-pill ink-ripple" key={i}>
                    {skill.name}
                    <small className={`level-tag ${skill.level.toLowerCase()}`}>
                      {skill.level}
                    </small>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT PAGE */}
        <div className="page right-page" data-aos="fade-left">
          <h3 className="page-heading">Certifications</h3>

          <ul className="cert-list">
            {certifications.map((cert, index) => (
              <li className="cert-item ink-ripple" key={index}>
                <div>
                  <strong>{cert.name}</strong>
                  <small className="text-muted d-block">
                    Issued: {cert.date}
                    {cert.expiry !== "N/A" && ` • Expires: ${cert.expiry}`}
                  </small>
                </div>
                <span
                  className={`cert-status ${
                    cert.expiry === "N/A" ? "perm" : "valid"
                  }`}
                >
                  {cert.expiry === "N/A" ? "Permanent" : "Valid"}
                </span>
              </li>
            ))}
          </ul>

          <h5 className="page-subtitle mt-4">Current Training</h5>

          <div className="training-progress ink-ripple">
            <div className="tp-label">
              <span>Advanced Cloud Architecture</span>
              <span>95%</span>
            </div>
            <div className="tp-bar">
              <div className="tp-fill"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsCertifications;
