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
          <img src="/src/assets/images/horn & hooves logo.png" alt="Logo" />
        </Link>
      </div>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            CONTACT
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link">
            PROJECTS
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            ABOUT
          </Link>
        </li>
      </ul>
      <ul className="social-icons">
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
      </ul>
    </nav>
  );
}

export default Navbar;
