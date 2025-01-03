import React, { useState, useEffect } from "react";
import Logo from "../assets/LOGO.png";
import Logo2 from "../assets/LOGO2.png";
import Cloud1 from "../assets/cloud_1.svg";
import Cloud2 from "../assets/cloud_2.svg";
import Cloud3 from "../assets/cloud_3.svg";
import Cloud4 from "../assets/cloud_4.svg";
import Stars from "../assets/stars.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/header.css"; // Ensure the CSS for animations is imported

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu visibility
  };

  // Use effect to set darkMode to true after 0.8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setDarkMode(true); // Set dark mode to true after 0.8 seconds
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }, 1300); // 800ms delay

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []); // This effect runs only once on mount

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

      {/* Center: Navigation (Desktop only) */}
      <nav className="hidden md:flex grow justify-center space-x-4 text-[18px] text-black dark:text-white transition-all duration-300">
        <a
          href="#home"
          className="hover:underline transition-opacity duration-300"
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:underline transition-opacity duration-300"
        >
          About
        </a>
        <a
          href="#skills"
          className="hover:underline transition-opacity duration-300"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="hover:underline transition-opacity duration-300"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="hover:underline transition-opacity duration-300"
        >
          Contact
        </a>
      </nav>

      {/* Hamburger Icon for Small Screens */}
      <div className="md:hidden flex items-center mr-12">
        <button
          className={`text-[30px] ${
            menuOpen ? "text-red-500" : "text-black dark:text-white"
          }`}
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
          {/* Show X if menu is open, else show bars */}
        </button>
      </div>

      <div className="hidden md:flex items-center relative">
        {/* Dark Mode Toggle only visible on medium screens and above */}
        <label className="switch relative inline-flex items-center cursor-pointer mr-14 hidden md:block">
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

      {/* Menu Container for Small Screens */}
      {menuOpen && (
        <div className="md:hidden  absolute top-[90px] right-0 w-[150px] bg-[#eeeeee] dark:bg-[#212121] z-50 py-4">
          <nav className="flex flex-col items-center space-y-4 text-black dark:text-white">
            <a href="#home" className="hover:underline">
              Home
            </a>
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>

            {/* Dark Mode Toggle inside the Mobile Menu */}
            <label className="switch relative inline-flex items-center cursor-pointer mt-4">
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
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
