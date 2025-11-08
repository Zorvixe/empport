import React from "react";
import { employeeData } from "../data/employeeData";
import "./ProjectsContributions.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

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
    <section className="projects-showcase" data-aos="fade-up">
      <div className="container">

        <h2 className="showcase-title" data-aos="zoom-in">
          Projects & Contributions
        </h2>

        {/* ✅ Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 2800 }}
          className="projects-carousel"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="carousel-card">
              <div className="project-card">
                <div className="project-header">
                  <h4 className="project-name">{project.name}</h4>
                  <span className={`project-status ${getStatusClass(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                <p className="project-role">
                  <i className="fas fa-user-tie me-2"></i> {project.role}
                </p>
                <p className="project-time">
                  <i className="fas fa-calendar me-2"></i> {project.timeline}
                </p>

                <p className="project-desc">{project.description}</p>

                <div className="tech-stack">
                  {project.technologies?.map((tech, i) => (
                    <span key={i} className="tech-pill">{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <button className="action-btn view-btn">
                    <i className="fas fa-eye me-2"></i> View
                  </button>
                  <button className="action-btn docs-btn">
                    <i className="fas fa-file-alt me-2"></i> Docs
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Contributions Section */}
        <h3 className="contrib-title" data-aos="zoom-in">Recent Contributions</h3>

        <div className="contrib-grid">
          <div className="contrib-card" data-aos="flip-left">
            <i className="fas fa-code-branch contrib-icon text-primary"></i>
            <h5>Repository Updates</h5>
            <p>15 commits in last 30 days</p>
          </div>

          <div className="contrib-card" data-aos="flip-up">
            <i className="fas fa-comments contrib-icon text-success"></i>
            <h5>Code Reviews</h5>
            <p>28 PRs reviewed</p>
          </div>

          <div className="contrib-card" data-aos="flip-right">
            <i className="fas fa-lightbulb contrib-icon text-warning"></i>
            <h5>Innovation Ideas</h5>
            <p>3 improvements proposed</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsContributions;
