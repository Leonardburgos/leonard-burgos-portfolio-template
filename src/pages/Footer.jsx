import React from "react";
import Logo from "../assets/LOGO.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaGitlab,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
    id: "social-media-4",
    icon: <FaEnvelope />,
    link: "https://gmail.com",
  },
  {
    id: "social-media-4",
    icon: <FaGitlab />,
    link: "https://gitlab.com",
  },
];

const Footer = () => {
  const navigate = useNavigate();

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
      }
    }, 200); // 200ms delay
  };

  return (
    <footer className="bg-[#eeeeee] dark:bg-[#212121] text-black dark:text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Copy Info */}
        <div className="flex flex-col items-center justify-center  mb-4 mb-0">
          <img
            src={Logo}
            alt="Logo"
            className="h-[200px] w-[200px] ml-12 mr-12"
          />
          <p className="text-sm mt-2 mr-4 text-center">John Leonard Burgos</p>
          <p className="text-sm mt-2 mr-2 text-center">
            Full-Stack Software Developer
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              Navigation
            </h4>
            <ul className="list-none mt-4">
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
                <a
                  href="#home"
                  className="hover:underline transition-opacity duration-300"
                >
                  Home
                </a>
              </li>
              <li
                onClick={() => scrollToSection("#about")}
                className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4"
              >
                About
              </li>
              <li
                onClick={() => scrollToSection("#skills")}
                className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4"
              >
                Skills
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
                <a
                  href="#projects"
                  className="hover:underline transition-opacity duration-300"
                >
                  Projects
                </a>
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
                <a
                  href="#knowledgebase"
                  className="hover:underline transition-opacity duration-300"
                >
                  Blogs
                </a>
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
                <a
                  href="#contact"
                  className="hover:underline transition-opacity duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="w-full flex justify-between items-center flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[12px] leading-[27px] text-white mb-2">
          Copyright Ⓒ 2025 John Leonard Burgos. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <div
              key={index}
              className={`w-[21px] h-[21px] text-white text-2xl cursor-pointer ${
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
