




import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "./assets/logo.png";
import Mobilebar from "./Mobilebar";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname); // Default active link

  const handleNavigate = () => {
    navigate("/contacts");
  };

  return (
    <>
      <nav className="bg-[#222222BF] hidden md:flex shadow-md w-[90%] md:w-[780px] h-16 md:h-20 justify-center items-center fixed bottom-2 left-1/2 transform -translate-x-1/2 z-50 rounded-full">
        <div className="w-full px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex w-auto justify-center items-center">
            <img src={logo} alt="Logo" className="h-8 w-auto md:h-10" />
          </div>

          {/* Navbar Links */}
          <div className="hidden md:flex space-x-4 lg:space-x-6 items-center">
            {[
              { name: "HOME", path: "/" },
              { name: "Service", path: "/Service" },
              { name: "Case Studies", path: "/case-studies" },
              { name: "Blog", path: "/Allblog" },
              { name: "About", path: "/about" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setActiveLink(link.path)}
                className={`text-white px-3 py-1 md:py-2 transition text-xs md:text-sm rounded-full ${
                  activeLink === link.path
                    ? "bg-[#656566] text-black"
                    : "hover:bg-[#D9D9D91A]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Let's Talk Button */}
          <div className="hidden md:block">
            <button
              onClick={handleNavigate}
              className="bg-white text-black px-4 py-2 h-10 flex items-center space-x-2 rounded-full hover:bg-[#656566] transition"
            >
              <span className="text-sm">Let’s talk</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className="md:hidden">
        <Mobilebar />
      </div>
    </>
  );
};

export default Navbar;
