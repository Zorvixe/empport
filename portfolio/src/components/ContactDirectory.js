import React from "react";
import { employeeData } from "../data/employeeData";
import "./ContactDirectory.css";

const ContactDirectory = () => {
  const { contact } = employeeData;

  return (
    <section className="contact-directory section py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-center mb-4" data-aos="zoom-in">
          Contact & Availability
        </h2>

        <div className="contact-grid">
      
          <div
            className="contact-card"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div
              className="card-header"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <i className="fas fa-address-card"></i>
              <h3>Contact Information</h3>
            </div>

            <div
              className="contact-body"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                className="contact-item"
                data-aos="fade-left"
                data-aos-delay="250"
              >
                <i className="fas fa-envelope"></i>
                <div>
                  <label>Email</label>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              </div>

              <div
                className="contact-item"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <i className="fas fa-phone"></i>
                <div>
                  <label>Work Phone</label>
                  <span>{contact.workPhone}</span>
                </div>
              </div>

              <div
                className="contact-item"
                data-aos="fade-left"
                data-aos-delay="350"
              >
                <i className="fas fa-mobile-alt"></i>
                <div>
                  <label>Mobile</label>
                  <span>{contact.mobile}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Internal Communication */}
          <div className="contact-card" data-aos="fade-up" data-aos-delay="150">
            <div
              className="card-header"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <i className="fas fa-comments"></i>
              <h3>Internal Communication</h3>
            </div>

            <div
              className="contact-body"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div
                className="contact-item"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <i className="fab fa-slack"></i>
                <div>
                  <label>Slack</label>
                  <span>{contact.slack}</span>
                </div>
              </div>

              <div
                className="contact-item"
                data-aos="fade-right"
                data-aos-delay="350"
              >
                <i className="fas fa-video"></i>
                <div>
                  <label>Microsoft Teams</label>
                  <span>{contact.teams}</span>
                </div>
              </div>

              <div
                className="contact-item"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <i className="fas fa-id-card"></i>
                <div>
                  <label>Employee Directory</label>
                  <span>Profile #8472</span>
                </div>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div
            className="contact-card"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div
              className="card-header"
              data-aos="zoom-in"
              data-aos-delay="250"
            >
              <i className="fas fa-calendar-check"></i>
              <h3>Availability</h3>
            </div>

            <div
              className="contact-body"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div
                className="availability-status mb-3"
                data-aos="flip-up"
                data-aos-delay="350"
              >
                <div className="status-indicator available"></div>
                <span>Currently Available</span>
              </div>

              <div
                className="availability-detail"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h4>Working Hours</h4>
                <p>Mon - Fri: 9:00 AM - 6:00 PM PST</p>
                <p>Flexible hours arrangement approved</p>
              </div>

              <div
                className="availability-detail"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                <h4>Upcoming Time Off</h4>
                <p>No upcoming time off scheduled</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDirectory;
