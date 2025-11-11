import React from "react";
import { employeeData } from "../data/employeeData";
import "./ProjectsContributions.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProjectsContributions = () => {
  const { projects } = employeeData;

  return (
    <section className="projects-section" id="projects-section">
      <div className="container">
        <h2 className="showcase-title" data-aos="zoom-in">
          Projects & Contributions
        </h2>

        <Swiper
          modules={[Pagination, Navigation]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={40}
          slidesPerView={1}
          className="project-swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="project-card" data-aos="fade-up">
                <h4 className="project-name">{project.name}</h4>

                <span
                  className={`status-badge ${project.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {project.status}
                </span>

                <p className="project-role">{project.role}</p>
                <p className="project-time">{project.timeline}</p>

                <p className="project-desc">{project.description}</p>

                <div className="tech-stack">
                  {project.technologies?.map((tech, i) => (
                    <span className="tech-tag" key={i}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <h3 className="sub-title" data-aos="fade-up">
          Recent Contributions
        </h3>

        <div className="contrib-grid">
          <div className="contrib-item" data-aos="zoom-in">
            <i className="fas fa-code-branch"></i>
            <h5>Repository Updates</h5>
            <p>15 commits last month</p>
          </div>

          <div className="contrib-item" data-aos="zoom-in">
            <i className="fas fa-comments"></i>
            <h5>Code Reviews</h5>
            <p>28 pull requests reviewed</p>
          </div>

          <div className="contrib-item" data-aos="zoom-in">
            <i className="fas fa-lightbulb"></i>
            <h5>Innovations</h5>
            <p>3 new feature proposals</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsContributions;
