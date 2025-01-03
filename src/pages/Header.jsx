import React, { useState } from "react";
import Logo from "../assets/LOGO.png";
import Logo2 from "../assets/LOGO2.png";
import Cloud1 from "../assets/cloud_1.svg";
import Cloud2 from "../assets/cloud_2.svg";
import Cloud3 from "../assets/cloud_3.svg";
import Cloud4 from "../assets/cloud_4.svg";
import Stars from "../assets/stars.svg";
import "../styles/header.css"; // Ensure the CSS for animations is imported

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const isDarkMode = !darkMode;
    setDarkMode(isDarkMode);

    // Apply dark or light class to the document body
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="flex items-center justify-between bg-[#eeeeee] dark:bg-[#212121] h-[90px] px-4 pt-6 pb-5 transition-all duration-300">
      {/* Left: Logo */}
      <div className="flex items-center">
        <img
          src={darkMode ? Logo2 : Logo} // Conditionally render the logo
          alt="Logo"
          className={`h-[70px] w-[70px] ml-12 transition-opacity duration-300 ${
            darkMode ? "fade-in" : "fade-out"
          }`}
        />
      </div>

      {/* Center: Navigation */}
      <nav className="flex-grow flex justify-center space-x-4 text-[18px] text-black dark:text-white transition-all duration-300">
        <a href="#home" className="hover:underline transition-opacity duration-300">
          Home
        </a>
        <a href="#about" className="hover:underline transition-opacity duration-300">
          About
        </a>
        <a href="#skills" className="hover:underline transition-opacity duration-300">
          Skills
        </a>
        <a href="#projects" className="hover:underline transition-opacity duration-300">
          Projects
        </a>
        <a href="#contact" className="hover:underline transition-opacity duration-300">
          Contact
        </a>
      </nav>

      {/* Right: Dark Mode Toggle */}
      <div className="flex items-center relative">
        <label className="switch relative inline-flex items-center cursor-pointer mr-14">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleDarkMode}
            className="sr-only peer"
          />
          <div className="sunmoon">
            <div className="darkside"></div>
          </div>
          <div className="border"></div>
          <div className="clouds">
            <img src={Cloud1} alt="Cloud 1" className="cloud cloud-1" />
            <img src={Cloud2} alt="Cloud 2" className="cloud cloud-2" />
            <img src={Cloud3} alt="Cloud 3" className="cloud cloud-3" />
            <img src={Cloud4} alt="Cloud 4" className="cloud cloud-4" />
            <img src={Stars} alt="Stars" className="stars" />
          </div>
        </label>
      </div>
    </header>
  );
};

export default Header;
