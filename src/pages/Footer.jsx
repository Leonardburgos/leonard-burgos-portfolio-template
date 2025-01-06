import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Your Brand</h1>
          <p className="text-sm mt-2">&copy; 2025 Your Brand. All Rights Reserved.</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-[#eeeeee] dark:bg-[#212121] border border-black dark:border-white rounded-full text-black dark:text-white hover:text-primary hover:border-primary transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-[#eeeeee] dark:bg-[#212121] border border-black dark:border-white rounded-full text-black dark:text-white hover:text-primary hover:border-primary transition"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-[#eeeeee] dark:bg-[#212121] border border-black dark:border-white rounded-full text-black dark:text-white hover:text-primary hover:border-primary transition"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="mailto:yourmail@example.com"
            className="w-10 h-10 flex items-center justify-center bg-[#eeeeee] dark:bg-[#212121] border border-black dark:border-white rounded-full text-black dark:text-white hover:text-primary hover:border-primary transition"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-[#eeeeee] dark:bg-[#212121] border border-black dark:border-white rounded-full text-black dark:text-white hover:text-primary hover:border-primary transition"
          >
            <FaTwitter size={20} />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-4 text-[18px] text-black dark:text-white mt-4 md:mt-0">
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
      </div>
    </footer>
  );
};

export default Footer;
