

import React from "react";
import { Casestudy } from "./utils/Casestudydata";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const CaseStudies = () => {
  const navigate = useNavigate();

  const handleNavigate = (item) => {
    navigate("/casestudiesdetails", { state: { item } });
  };

  return (
    <div className="w-full">
      {/* Container with padding */}
      <div className="w-full px-4 md:px-8 lg:px-16">
        {/* Title Section */}
        <div className="text-center mt-16">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#0d2247] font-sans font-semibold">
            CASE STUDIES
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 font-sans text-gray-700">
            Examples of client success, powered by us
          </h2>
        </div>

        {/* Case Study Cards */}
        {Casestudy.map((item) => (
          <div
            key={item.id}
            className="relative group max-w-full rounded-2xl mt-8 h-[433px] overflow-hidden"
          >
            {/* Read More Button */}
            <button
              onClick={() => handleNavigate(item)}
              className="absolute z-10 bottom-4 right-4 border border-black rounded-full px-4 py-2 flex items-center gap-2 bg-white hover:bg-black hover:text-white transition-all duration-500 ease-in-out opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100"
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <img
              src={item.coverImage}
              alt="Case Study"
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-105"
            />

            {/* Content Section */}
            <div className="mt-8 flex flex-wrap lg:flex-nowrap gap-8">
              {/* Left Section */}
              <div className="flex flex-col flex-1">
                <h1 className="text-4xl lg:text-6xl font-semibold">
                  {item.title}
                </h1>
                <div className="flex space-x-2 mt-6">
                  <button className="px-6 py-3 text-black text-sm md:text-base font-semibold rounded-full border-2 border-black transition">
                    Business
                  </button>
                  <button className="px-6 py-3 text-black text-sm md:text-base font-semibold rounded-full border-2 border-black transition">
                    SaaS
                  </button>
                  <button className="px-6 py-3 text-black text-sm md:text-base font-semibold rounded-full border-2 border-black transition">
                    Cloud Platform
                  </button>
                </div>
              </div>

              {/* Middle Section */}
              <div className="flex-1">
                <h1 className="text-3xl lg:text-4xl font-semibold">
                  About {item.title}
                </h1>
                <p className="mt-4 text-gray-700">{item.about}</p>
              </div>

              {/* Right Section */}
              <div className="flex-1">
                <h1 className="text-3xl lg:text-4xl font-semibold">
                  Technologies Used
                </h1>
                <div className="flex space-x-4 mt-4">
                  {item.tech.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt="Technology"
                      className="w-14 h-14 md:w-16 md:h-16 object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Navbar/>
      <Contact />
    </div>
  );
};

export default CaseStudies;
