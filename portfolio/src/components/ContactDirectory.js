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
                    <i className="fas fa-address-card icon-glow"></i>
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
                      <span className="icon-badge">
                        <i className="fas fa-envelope"></i>
                      </span>
                      <div className="cd-line">
                        <label>Email</label>
                        <a href={`mailto:${contact.email}`} className="value">
                          {contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="cd-item">
                      <span className="icon-badge">
                        <i className="fas fa-phone"></i>
                      </span>
                      <div className="cd-line">
                        <label>Work Phone</label>
                        <span className="value">{contact.workPhone}</span>
                      </div>
                    </div>

                    <div className="cd-item">
                      <span className="icon-badge">
                        <i className="fas fa-mobile-alt"></i>
                      </span>
                      <div className="cd-line">
                        <label>Mobile</label>
                        <span className="value">{contact.mobile}</span>
                      </div>
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
                    <i className="fas fa-comments icon-glow"></i>
                    <h3>Internal Communication</h3>
                  </div>
                  <p className="cd-hover-hint">Hover to View Details</p>
                </div>
              </div>

              <div className="cd-card-wrapper back">
                <div className="cd-card">
                  <div className="cd-card-body">
                    <div className="cd-item">
                      <span className="icon-badge">
                        <i className="fab fa-slack"></i>
                      </span>
                      <div className="cd-line">
                        <label>Slack</label>
                        <span className="value">{contact.slack}</span>
                      </div>
                    </div>

                    <div className="cd-item">
                      <span className="icon-badge">
                        <i className="fas fa-video"></i>
                      </span>
                      <div className="cd-line">
                        <label>Microsoft Teams</label>
                        <span className="value">{contact.teams}</span>
                      </div>
                    </div>

                    <div className="cd-item">
                      <span className="icon-badge">
                        <i className="fas fa-id-card"></i>
                      </span>
                      <div className="cd-line">
                        <label>Employee Directory</label>
                        <span className="value">Profile #8472</span>
                      </div>
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
                    <i className="fas fa-calendar-check icon-glow"></i>
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
