import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#f9faff] flex h-[55vh] flex-col justify-between items-center p-6">
      {/* Main Text */}
      <div className="flex-grow flex justify-center items-center px-4 w-full">
        <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold text-gray-800 text-center whitespace-nowrap overflow-hidden">
          <u>Let’s start a discussion</u>
        </h1>
      </div>

      {/* Social Media Icons and Footer */}
      <div className="w-full flex flex-col md:flex-row md:justify-between items-center px-4 space-y-4 md:space-y-0">
        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-3xl md:text-4xl hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#000000] text-3xl md:text-4xl hover:text-red-600 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#000000] text-3xl md:text-4xl hover:text-blue-600 transition"
          >
            <FaFacebook />
          </a>
        </div>
        {/* Footer */}
        <footer className="text-sm md:text-lg text-[black]">
          © Copyright 2024
        </footer>
      </div>
    </div>
  );
};

export default Contact;
