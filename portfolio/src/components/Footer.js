import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="company-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="company-brand">
              <img
                src="/footer_logo.png"
                alt="TechCorp Logo"
                className="company-logo"
              />
            </div>
            <p>Employee Directory System v2.4</p>
            <p>Confidential - Internal Use Only</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#hr">HR Portal</a>
              </li>
              <li>
                <a href="#directory">Employee Directory</a>
              </li>
              <li>
                <a href="#org">Organization Chart</a>
              </li>
              <li>
                <a href="#policies">Company Policies</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#help">Help Desk</a>
              </li>
              <li>
                <a href="#it">IT Support</a>
              </li>
              <li>
                <a href="#update">Update Profile</a>
              </li>
              <li>
                <a href="#feedback">Feedback</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>System Info</h4>
            <div className="system-info">
              <p>Last Updated: Today, 10:45 AM</p>
              <p>Data Source: HR Management System</p>
              <p>Access Level: Internal</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2025{" "}
            <a
              target="_blank"
              className="company-link"
              href="www.zorvixetechnologies.com"
            >
              Zorvixe Technologies
            </a>
            . All rights reserved. | Confidential Employee Information
          </p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
            <a href="#security">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
