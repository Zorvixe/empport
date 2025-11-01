import React from "react";
import "./Header.css";

const Header = ({ currentView, setCurrentView }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent  px-4 py-2 fixed-top">
        <div className="d-flex align-items-center me-auto">
          <img
            src="/zorvixe_logo.png"
            alt="TechCorp Logo"
            className="company-logo-img me-3"
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
