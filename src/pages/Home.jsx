import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import "../styles/Home.css";
import Background from "../components/Background";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Implement logic for dark mode here
  };

  const toggleLightMode = () => {
    // Implement logic for light mode here
  };

  const handleScrollDown = () => {
    // Implement logic to scroll down to the content section
    // Example: Use refs or window.scrollTo()
  };

  return (
    <div className="home-container">
      <Background backgroundColor={0x333333} />
      {/* <Background backgroundColor={darkMode ? 0x000000 : 0xffffff} /> */}

      <div className="content">
        <h1 className="company-name">horn & hooves</h1>
        <h3 className="company-type">VISUALIZATION STUDIO</h3>
        <h5 className="company-slogan">
          We specialize in quality architectural visualizations.
        </h5>
        <button onClick={handleScrollDown} className="scroll-button">
          <FaArrowDown />
        </button>
        <div className="mode-toggles">
          <label className="dark-mode-toggle">
            <input
              type="checkbox"
              onChange={toggleDarkMode}
              className="dark-mode-checkbox"
            />
            Dark Mode
          </label>
          <label className="light-mode-toggle">
            <input
              type="checkbox"
              onChange={toggleLightMode}
              className="light-mode-checkbox"
            />
            Light Mode
          </label>
        </div>
      </div>
    </div>
  );
}

export default Home;
