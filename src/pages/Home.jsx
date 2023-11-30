import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

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
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="home-container">
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
            <input type="checkbox" onChange={toggleDarkMode} />
            Dark Mode
          </label>
          <label className="light-mode-toggle">
            <input type="checkbox" onChange={toggleLightMode} />
            Light Mode
          </label>
        </div>
      </div>
    </div>
  );
}

export default Home;
