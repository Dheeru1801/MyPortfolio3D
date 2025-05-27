import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.linkedin.com/in/dheeraj-chandra-49b8a7248/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-purple-400 transition-colors"
      >
        <FaLinkedin size={24} />
      </a>
      <a 
        href="https://github.com/Dheeru1801" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-purple-400 transition-colors"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.instagram.com/_dhee_ru1801/profilecard/?igsh=MWFycmIzaHNjdTUzMg=="
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-purple-400 transition-colors"
      >
        <FaInstagram size={24} />
      </a>
    </footer>
  );
};

export default Footer;