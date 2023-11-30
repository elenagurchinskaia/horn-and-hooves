import "../styles/Navbar.css";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [activeTab, setActiveTab] = useState("");
  const currentPage = useLocation().pathname;

  // function to handle tab click and set the active tab
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // define styles for the active and inactive links
  const linkStyle = {
    color: "black",
  };

  const activeLinkStyle = {
    color: "grey", // text color when the tab is active
  };

  return (
    <nav className="navbar">
      <div className="logo">
        {/* Your logo image or element goes here */}
        <Link to="/">
          <img
            src="/src/assets/images/horn & hooves logo.png"
            alt="Logo"
            style={activeTab === "home" ? activeLinkStyle : linkStyle}
            onClick={() => handleTabClick("home")}
          />
        </Link>
      </div>
      <div className="nav">
        <div className="nav-item">
          <Link
            to="/contact"
            className={`nav-link ${currentPage === "/contact" ? "active" : ""}`}
            style={activeTab === "contact" ? activeLinkStyle : linkStyle}
            onClick={() => handleTabClick("contact")}
          >
            <span>CONTACT</span>
          </Link>
        </div>
        <span className="slash">/</span>
        <div className="nav-item">
          <Link
            to="/projects"
            className={`nav-link ${
              currentPage === "/projects" ? "active" : ""
            }`}
            style={activeTab === "projects" ? activeLinkStyle : linkStyle}
            onClick={() => handleTabClick("projects")}
          >
            <span>PROJECTS</span>
          </Link>
        </div>
        <span className="slash">/</span>
        <div className="nav-item">
          <Link
            to="/about"
            className={`nav-link ${currentPage === "/about" ? "active" : ""}`}
            style={activeTab === "about" ? activeLinkStyle : linkStyle}
            onClick={() => handleTabClick("about")}
          >
            <span>ABOUT</span>
          </Link>
        </div>
      </div>
      <div className="social-icons">
        <div>
          <a
            href="https://instagram.com/hornandhooves?igshid=NzZlODBkYWE4Ng=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/company/hornandhooves/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
