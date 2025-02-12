import React, { useState } from "react";
import pic11 from "./assets/pic11.png";
import { IoIosCloseCircle } from "react-icons/io";
import Frame from "./assets/Frame.png";
import Frame1 from "./assets/Frame1.png";
import pic1 from "./assets/pic1.png";
import pic2 from "./assets/pic2.png";
import pic3 from "./assets/pic3.png";
import { useLocation } from "react-router-dom";
import Contact from "./Contact";
import Navbar from "./Navbar";

const Casestudiesdetials = () => {
  const [isVisible, setIsVisible] = useState(true);

    const { state } = useLocation()
    console.log(state);
    
  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="flex flex-col w-full max-w-full overflow-hidden">
      <div className="flex w-full relative overflow-hidden">
        <div className="flex flex-col w-full mt-28 justify-center items-center">
          <h2
            className="mt-2 text-[16px] sm:text-[20px] md:text-[25px] font-[500] leading-[30px] text-center text-gray-700"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            Wokiam
          </h2>
          <h1 className="text-[18px] sm:text-[30px] md:text-[40px] font-bold leading-[55px] text-center decoration-black font-[Plus Jakarta Sans] mb-4">
            Telemedicine Web <br /> Application
          </h1>
          <div className="w-full flex justify-center mt-5 px-4">
            <img
              src={pic11}
              alt="casestudies"
              className="w-full max-w-[1480px] h-[auto] object-cover"
            />
          </div>
        </div>

        <div className="absolute top-20 right-5 md:right-10 mt-2">
          <IoIosCloseCircle
            onClick={handleClose}
            className="text-4xl md:text-5xl text-gray-500 hover:text-black transition-all duration-300 cursor-pointer"
          />
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between mt-10 px-4">
        <div className="flex flex-col px-6 max-w-[680px]">
          <div className="p-4 mt-24 m-2">
            <h3 className="font-bold text-xl sm:text-2xl md:text-5xl">
              About project
            </h3>
            <p className="mt-5 text-sm sm:text-base">
              We transformed months of design into a matter of weeks, saving the
              client's budget significantly. Our approach involved upfront
              design validation and the selection.
            </p>
          </div>

          <div className="flex px-3 space-x-1 space-y-0 md:space-y-2 flex-wrap gap-2 md:gap-0 mt-6">
            <button className="px-4 py-2 text-black text-xs sm:text-sm font-semibold rounded-full border-2 border-black transition">
              Business
            </button>
            <button className="px-4 py-2 text-black text-xs sm:text-sm font-semibold rounded-full border-2 border-black transition">
              SaaS
            </button>
            <button className="px-4 py-2 text-black text-xs sm:text-sm font-semibold rounded-full border-2 border-black transition">
              Cloud Platform
            </button>
            <button className="px-4 py-2 text-black text-xs sm:text-sm font-semibold rounded-full border-2 border-black transition">
              Cloud Platform
            </button>

            <div className="flex space-x-1  w-full">
              <button className="px-4 py-2 text-black text-xs sm:text-sm font-semibold rounded-full border-2 border-black transition">
                Cloud Platform
              </button>
              <button className="px-4 py-2 text-black text-xs sm:text-sm font-semibold rounded-full border-2 border-black transition">
                Cloud Platform
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 mt-10  border-b border-r-0  md:border-r  border-black ">
          <div className="flex justify-between">
            <h3 className="font-bold text-xl sm:text-2xl md:text-3xl text-center">
              Problem Statement
            </h3>
            <img src={Frame} alt="Frame icon" className="w-6 h-6" />
          </div>
          <p className="mt-5 text-sm sm:text-base">
            We transformed months of design into a matter of weeks, saving the
            client's budget significantly. Our approach involved upfront design
            validation and the selection.
          </p>
        </div>

        <div className="flex-1 p-4 mt-10  border-b border-black  ">
          <div className="flex justify-between">
            <h3 className="font-bold text-xl sm:text-2xl md:text-3xl text-center">
              What we solved
            </h3>
            <img src={Frame1} alt="Frame icon" className="w-6 h-6" />
          </div>
          <p className="mt-5 text-sm sm:text-base">
            We transformed months of design into a matter of weeks, saving the
            client's budget significantly. Our approach involved upfront design
            validation and the selection.
          </p>
        </div>
      </div>

      {/* Adjusted div starts here */}
      <div className="flex flex-col items-center justify-center px-4 mt-10">
        <h1 className="text-center text-xl sm:text-2xl font-bold">
          Technologies Used
        </h1>
        <div className="flex space-x-4 px-11 mt-5">
          <div className="flex space-x-1 overflow-auto">
            <img src={pic1} alt="icon" className="w-14 h-14" />
            <img src={pic2} alt="icon" className="w-14 h-14" />
            <img src={pic3} alt="icon" className="w-14 h-14" />
            <img src={pic1} alt="icon" className="w-14 h-14" />
            <img src={pic2} alt="icon" className="w-14 h-14" />
            <img src={pic3} alt="icon" className="w-14 h-14" />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-16 px-4">
        <img
          src={pic11}
          alt="casestudies"
          className="w-full max-w-[1480px] h-[auto] object-cover"
        />
      </div>
      <div className="w-full flex    justify-center mt-16 px-4">
        <img
          src={pic11}
          alt="casestudies"
          className="w-full max-w-[1480px] h-[auto] object-cover"
        />
      </div>
      <div className="w-full pt-16 justify-center flex">
        <span className="w-[93.5%] h-0.5 opacity-50 bg-black"></span>
      </div>
      <div className="flex  wax-w-screen">
        <hr />
      </div>

      <div className=" flex flex-col">
        <div className="flex flex-wrap mt-10 px-6 md:px-11 justify-between items-center space-y-4 md:space-y-0">
          <h1 className="text-4xl md:text-6xl font-semibold">Discover More</h1>
          <button className="w-full md:w-56 h-14 border-2 font-bold text-sm md:text-base opacity-55 border-black bg-white text-black rounded-full">
            View All Case Studies
          </button>
        </div>

        <div className="w-full flex justify-center mt-16 px-4">
          <img
            src={pic11}
            alt="casestudies"
            className="w-full max-w-[1480px] h-[auto] object-cover"
          />
        </div>

        <div className="flex flex-wrap py-9 space-y-10 md:space-y-0 md:space-x-10 px-6 md:px-12">
          {/* Left Section */}
          <div className="flex flex-col w-full md:w-[30%] h-auto md:h-60">
            <h1 className="text-4xl md:text-5xl mt-3">wokiam</h1>
            <div className="flex flex-wrap space-x-2 space-y-2 md:space-y-0 mt-7">
              <button className="px-6 py-3 opacity-50 text-black w-auto text-sm md:text-base font-semibold rounded-full border-2 border-black transition">
                Business
              </button>
              <button className="px-6 py-3 opacity-50 text-black w-auto text-sm md:text-base font-semibold rounded-full border-2 border-black transition">
                SaaS
              </button>
              <button className="px-4 py-2 opacity-50 text-black w-auto text-sm md:text-base font-semibold rounded-full border-2 border-black transition">
                Cloud Platform
              </button>
            </div>
          </div>

          {/* Center Section */}
          <div className="flex flex-col w-full md:w-[33%] h-auto md:h-60">
            <h1 className="text-xl md:text-2xl">About Wokiam</h1>
            <p className="mt-6 text-sm md:text-base">
              We transformed months of design into a matter of weeks, saving the
              client's budget significantly. Our approach involved upfront
              design validation and the selection.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col w-full md:w-96 h-auto md:h-60">
            <div className="flex">
              <h1 className="text-xl md:text-2xl">Technologies Used</h1>
            </div>
            <div className="flex flex-wrap justify-start md:space-x-5 mt-5">
              <img
                src={pic1}
                alt="icon"
                className="w-12 h-12 md:w-14 md:h-14"
              />
              <img
                src={pic2}
                alt="icon"
                className="w-12 h-12 md:w-14 md:h-14"
              />
              <img
                src={pic3}
                alt="icon"
                className="w-12 h-12 md:w-14 md:h-14"
              />
            </div>
          </div>
        </div>
      </div>
<Navbar/>
      <Contact />
    </div>
  );
};

export default Casestudiesdetials;
