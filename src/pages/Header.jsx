import React, { useState, useEffect } from "react";
import Logo from "../assets/LOGO.png";
import Logo2 from "../assets/LOGO2.png";
import Cloud1 from "../assets/cloud_1.svg";
import Cloud2 from "../assets/cloud_2.svg";
import Cloud3 from "../assets/cloud_3.svg";
import Cloud4 from "../assets/cloud_4.svg";
import Stars from "../assets/stars.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/header.css";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);

  const toggleDarkMode = () => {
    const isDarkMode = !darkMode;
    setDarkMode(isDarkMode);

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  };

  const scrollToSection = (hash) => {
    // First, navigate to /home
    navigate("/home");
  
    // Set a small delay before adding the hash to the URL and scrolling
    setTimeout(() => {
      const sectionId = hash.replace("#", "");
      const section = document.getElementById(sectionId); 
      
      // Navigate to /home with the section hash
      navigate(`/home#${sectionId}`);
  
      // Scroll to the section
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }
    }, 200); // 200ms delay
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector("#about"); // Match `#about` directly
      if (aboutSection) {
        const aboutTop = aboutSection.offsetTop;
        const windowScrollTop = window.scrollY;

        // Hide the header when the About section starts appearing
        setHeaderVisible(windowScrollTop < aboutTop - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update header visibility based on route
  useEffect(() => {
    if (location.pathname !== "/home") {
      setHeaderVisible(true); // Make header visible when not on /home
    }
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between bg-[#eeeeee] dark:bg-[#212121] h-[90px] px-4 pt-6 pb-5 transition-transform duration-500 ${
        headerVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center">
        <img
          src={darkMode ? Logo2 : Logo}
          alt="Logo"
          className="h-[70px] w-[70px] ml-12 transition-opacity duration-300"
        />
      </div>

      <nav className="hidden md:flex grow justify-center space-x-4 text-[18px] text-black dark:text-white transition-all duration-300">
        <a
          href="#home"
          className="hover:underline transition-opacity duration-300"
        >
          Home
        </a>
        <span
          onClick={() => scrollToSection("#about")}
          className="hover:underline cursor-pointer transition-opacity duration-300"
        >
          About
        </span>
        <span
          onClick={() => scrollToSection("#skills")}
          className="hover:underline cursor-pointer transition-opacity duration-300"
        >
          Skills
        </span>
        <a
          href="#projects"
          className="hover:underline transition-opacity duration-300"
        >
          Projects
        </a>
        <a
          href="#knowledgebase"
          className="hover:underline transition-opacity duration-300"
        >
          Blogs
        </a>
        <a
          href="#contact"
          className="hover:underline transition-opacity duration-300"
        >
          Contact
        </a>
      </nav>

      <div className="md:hidden flex items-center mr-12">
        <button
          className={`text-[30px] ${
            menuOpen ? "text-red-500" : "text-black dark:text-white"
          }`}
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className="hidden md:flex items-center relative">
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

      {menuOpen && (
        <div className="md:hidden absolute top-[90px] right-0 w-[150px] bg-[#eeeeee] dark:bg-[#212121] z-50 py-4">
          <nav className="flex flex-col items-center space-y-4 text-black dark:text-white">
            <a
              href="#home"
              className="hover:underline transition-opacity duration-300"
            >
              Home
            </a>
            <span
              onClick={() => scrollToSection("#about")}
              className="hover:underline cursor-pointer transition-opacity duration-300"
            >
              About
            </span>
            <span
              onClick={() => scrollToSection("#skills")}
              className="hover:underline cursor-pointer transition-opacity duration-300"
            >
              Skills
            </span>
            <a
              href="#projects"
              className="hover:underline transition-opacity duration-300"
            >
              Projects
            </a>
            <a
              href="#knowledgebase"
              className="hover:underline transition-opacity duration-300"
            >
              Blogs
            </a>
            <a
              href="#contact"
              className="hover:underline transition-opacity duration-300"
            >
              Contact
            </a>

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
