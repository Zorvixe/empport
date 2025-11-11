import React from "react";
import { employeeData } from "../data/employeeData";
import "./ContactDirectory.css";

const ContactDirectory = () => {
  const { contact } = employeeData;
  const isAvailable = contact.available;

  return (
    <section className="contact-directory" data-aos="fade-up">
      <div className="container">
        <h2 className="showcase-title" data-aos="zoom-in">
          Contact & Availability
        </h2>

        <div className="cd-grid">
          {/* Contact Information */}
          <div
            className="cd-flip-card"
            data-aos="flip-left"
            data-aos-delay="100"
          >
            <div className="cd-flip-inner">
              {/* FRONT */}
              <div className="cd-card-wrapper front">
                <div className="cd-card">
                  <div className="cd-card-header">
                    <i className="bi bi-person-vcard icon-glow"></i>
                    <h3>Contact Information</h3>
                  </div>
                  <p className="cd-hover-hint">Hover to View Details</p>
                </div>
              </div>

              {/* BACK */}
              <div className="cd-card-wrapper back">
                <div className="cd-card">
                  <div className="cd-card-body">
                    <div className="cd-item">
                      <i className="bi bi-envelope-fill"></i>
                      <a
                        href={`mailto:${contact.email}`}
                        className="cd-link"
                        target="_blank"
                      >
                        {contact.email}
                      </a>
                    </div>

                    <div className="cd-item">
                      <i className="bi bi-telephone-fill"></i>
                      <a href={`tel:${contact.mobile}`} className="cd-link">
                        {contact.mobile}
                      </a>
                    </div>

                    <div className="cd-item">
                      <i className="bi bi-github"></i>
                      <a
                        href={contact.github}
                        className="cd-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub Profile
                      </a>
                    </div>

                    <div className="cd-item">
                      <i className="bi bi-linkedin"></i>
                      <a
                        href={contact.linkedin}
                        className="cd-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Internal Communication */}
          <div className="cd-flip-card" data-aos="flip-up" data-aos-delay="200">
            <div className="cd-flip-inner">
              <div className="cd-card-wrapper front">
                <div className="cd-card">
                  <div className="cd-card-header">
                    <i className="bi bi-chat-dots-fill icon-glow"></i>
                    <h3>Internal Communication</h3>
                  </div>
                  <p className="cd-hover-hint">Hover to View Details</p>
                </div>
              </div>

              <div className="cd-card-wrapper back">
                <div className="cd-card">
                  <div className="cd-card-body">
                    <div className="cd-item">
                      <i className="bi bi-slack"></i>
                      <span className="value">{contact.slack}</span>
                    </div>

                    <div className="cd-item">
                      <i className="bi bi-camera-video-fill"></i>
                      <span className="value">{contact.teams}</span>
                    </div>

                    <div className="cd-item">
                      <i className="bi bi-person-badge-fill"></i>
                      <span className="value">Profile #8472</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div
            className="cd-flip-card"
            data-aos="flip-right"
            data-aos-delay="300"
          >
            <div className="cd-flip-inner">
              <div className="cd-card-wrapper front">
                <div className="cd-card">
                  <div className="cd-card-header">
                    <i className="bi bi-calendar-check-fill icon-glow"></i>
                    <h3>Availability</h3>
                  </div>
                  <p className="cd-hover-hint">Hover to View Details</p>
                </div>
              </div>

              <div className="cd-card-wrapper back">
                <div className="cd-card">
                  <div className="cd-card-body">
                    <div className="cd-status">
                      <span
                        className={`status-dot ${
                          isAvailable ? "online" : "offline"
                        }`}
                      ></span>
                      <p className="value">
                        {isAvailable
                          ? "Currently Available"
                          : "Currently Offline / Busy"}
                      </p>
                    </div>

                    <div className="cd-info">
                      <h4>Working Hours</h4>
                      <p className="value">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    </div>

                    <div className="cd-info">
                      <h4>Upcoming Time Off</h4>
                      <p className="value">No scheduled leave</p>
                    </div>
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

export default ContactDirectory;
