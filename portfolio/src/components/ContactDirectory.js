import React from 'react';
import { employeeData } from '../data/employeeData';
import './ContactDirectory.css';

const ContactDirectory = () => {
  const { contact } = employeeData;

  return (
    <section className="contact-directory section">
      <div className="container">
        <h2 className="section-title">Contact & Availability</h2>
        <div className="grid-3">
          <div className="card">
            <div className="card-header">
              <i className="fas fa-address-card"></i>
              <h3>Contact Information</h3>
            </div>
            <div className="contact-methods">
              <div className="contact-method">
                <i className="fas fa-envelope"></i>
                <div>
                  <label>Email</label>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              </div>
              <div className="contact-method">
                <i className="fas fa-phone"></i>
                <div>
                  <label>Work Phone</label>
                  <span>{contact.workPhone}</span>
                </div>
              </div>
              <div className="contact-method">
                <i className="fas fa-mobile-alt"></i>
                <div>
                  <label>Mobile</label>
                  <span>{contact.mobile}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="card-header">
              <i className="fas fa-comments"></i>
              <h3>Internal Communication</h3>
            </div>
            <div className="communication-methods">
              <div className="comm-method">
                <i className="fab fa-slack"></i>
                <div>
                  <label>Slack</label>
                  <span>{contact.slack}</span>
                </div>
              </div>
              <div className="comm-method">
                <i className="fas fa-video"></i>
                <div>
                  <label>Microsoft Teams</label>
                  <span>{contact.teams}</span>
                </div>
              </div>
              <div className="comm-method">
                <i className="fas fa-id-card"></i>
                <div>
                  <label>Employee Directory</label>
                  <span>Profile #8472</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="card-header">
              <i className="fas fa-calendar-check"></i>
              <h3>Availability</h3>
            </div>
            <div className="availability-info">
              <div className="availability-status">
                <div className="status-indicator available"></div>
                <span>Currently Available</span>
              </div>
              <div className="working-hours">
                <h4>Working Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                <p>Flexible hours arrangement approved</p>
              </div>
              <div className="upcoming-timeoff">
                <h4>Upcoming Time Off</h4>
                <p>No upcoming time off scheduled</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="quick-actions">
          <button className="btn btn-primary">
            <i className="fas fa-envelope"></i>
            Send Email
          </button>
          <button className="btn btn-outline">
            <i className="fas fa-phone"></i>
            Call Work Number
          </button>
          <button className="btn btn-outline">
            <i className="fab fa-slack"></i>
            Message on Slack
          </button>
          <button className="btn btn-outline">
            <i className="fas fa-calendar-plus"></i>
            Schedule Meeting
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactDirectory;