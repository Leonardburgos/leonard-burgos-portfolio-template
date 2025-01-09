import React, { useEffect, useState } from "react";
import Logo from "../assets/LOGO.png";
import Logo2 from "../assets/LOGO2.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaGitlab,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const socialMedia = [
  {
    id: "social-media-1",
    icon: <FaGithub />,
    link: "https://github.com",
  },
  {
    id: "social-media-2",
    icon: <FaFacebookF />,
    link: "https://facebook.com",
  },
  {
    id: "social-media-3",
    icon: <FaTwitter />,
    link: "https://twitter.com",
  },
  {
    id: "social-media-4",
    icon: <FaLinkedinIn />,
    link: "https://linkedin.com",
  },
  {
    id: "social-media-5",
    icon: <FaEnvelope />,
    link: "https://gmail.com",
  },
  {
    id: "social-media-6",
    icon: <FaGitlab />,
    link: "https://gitlab.com",
  },
];

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false); // State to handle dark mode
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // State for current year
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const scrollToSection = (hash) => {
    navigate("/home");
    setTimeout(() => {
      const sectionId = hash.replace("#", "");
      const section = document.getElementById(sectionId);
      navigate(`/home#${sectionId}`);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  useEffect(() => {
    if (location.pathname !== "/home") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <footer className="bg-[#eeeeee] dark:bg-[#212121] text-black dark:text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Copy Info */}
        <div className="flex flex-col items-center justify-center mb-4 mb-0">
          <img
            src={darkMode ? Logo2 : Logo}
            alt="Logo"
            className="h-[200px] w-[200px] ml-12 mr-12"
          />
          <p className="text-sm mt-2 mr-4 text-center">John Leonard Burgos</p>
          <p className="text-sm mt-2 mr-2 text-center">
            Full-Stack Software Developer
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex-[1.5] w-full flex flex-col md:flex-row justify-between flex-wrap mt-10 ml-12 mr-12">
          {/* Row 1: Home, About Me, Skills */}
          <div className="flex flex-col min-w-[150px]">
            <a
              href="#home"
              className="font-poppins font-normal text-[24px] leading-[24px] text-dimWhite hover:text-secondary"
            >
              Home
            </a>
            <ul className="list-none mt-4">
              <li
                onClick={() => scrollToSection("#about")}
                className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4"
              >
                About Me
              </li>
              <li
                onClick={() => scrollToSection("#skills")}
                className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4"
              >
                Skills
              </li>
            </ul>
          </div>

          {/* Row 2: Projects */}
          <div className="flex flex-col min-w-[150px] sm:pl-8 mb-6">
            <a
              href="#projects"
              className="font-poppins font-normal text-[24px] leading-[24px] text-dimWhite hover:text-secondary"
            >
              Personal Projects
            </a>
            <ul className="list-none mt-4">
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
                Project 1
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
                Project 2
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
                Project 3
              </li>
            </ul>
          </div>

          {/* Row 3: Blogs */}
          <div className="flex flex-col min-w-[150px] sm:pl-8">
            <a
              href="#knowledgebase"
              className="font-poppins font-normal text-[24px] leading-[24px] text-dimWhite hover:text-secondary"
            >
              Knowledge Bases
            </a>
            <ul className="list-none mt-4">
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
                How to create a Flask API?
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
                Setting up MySQL and Redis on Docker
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
                Deploying Docker Container on Google Cloud Platform
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="w-full flex justify-between items-center flex-col md:flex-row pt-6 border-t-[1px] border-t-[#3F3E45] pl-6 pr-6">
        <p className="font-poppins font-normal text-center text-[12px] leading-[27px] text-black dark:text-white mb-2">
          Copyright Ⓒ {currentYear} John Leonard Burgos. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <div
              key={index}
              className={`w-[24px] h-[24px] text-black dark:text-white text-2xl cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            >
              {social.icon}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
