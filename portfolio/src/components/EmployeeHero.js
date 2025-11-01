import React from "react";
import "./EmployeeHero.css";

const EmployeeHero = () => {
  return (
    <section className="employee-hero">
      <div className="container hero-container">
        <div className="hero-left" data-aos="fade-right">
       

          <h1 className="hero-title">
            Hello, my name’s <span>Ganesh.</span>
          </h1>

          <p className="hero-description">
            I’m a full-stack developer from India. Currently working on MERN
            projects and exploring innovative web solutions.
          </p>

          <div className="hero-buttons">
           
            <button className="btn-outline">See my work →</button>
          </div>
        </div>

        <div className="hero-right" data-aos="fade-left">
          <div className="image-frame">
            <img src="/gani copy.jpg" alt="Ganesh" className="hero-img" />
          </div>

          <div className="shape triangle"></div>
          <div className="shape spiral"></div>

   
          <div className="follow-text">FOLLOW ME ON —</div>
          <div className="social-links">
          
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeHero;
