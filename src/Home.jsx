


import React, { useState, useEffect } from "react";
import logo1 from "./assets/logo 1.png";
import Phone from "./assets/Phone.png";
import videos from "./assets/videos.mp4";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Facebook from "./assets/Facebook.PNG";
import Youtube from "./assets/Youtube.PNG";
import Pinterest from "./assets/Pinterest.PNG";
import Twitch from "./assets/Twitch.PNG";
import Webflow from "./assets/Webflow.PNG";
import Navbar from "./Navbar";
import Newpage from "./Newpage";
import OurWork from "./OurWork";
import Overview from "./Overview";
import Allblog from "./Allblog";
import Contact from "./Contact";
import Google from "./Google";

const Home = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const day = now.toLocaleString("en-US", { weekday: "long" });
      const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      setCurrentTime(`${day} ${time}`);
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Video as background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videos} type="video/mp4" />
      </video>
      {/* Content */}
      <div className="relative z-10 flex w-full h-screen sm:flex-row justify-between p-6 sm:p-11">
        {/* Left-aligned dynamic time */}
        <div className="flex w-full sm:w-auto justify-start sm:mr-4 mb-4 sm:mb-0">
          <h1 className=" sm:text-[20px] text-[#FFFFFF80]  text-center sm:text-left">
            {currentTime}
          </h1>
        </div>

        {/* Logo */}
        <div className="justify-center sm:pr-24 shadow-lg hidden sm:block mb-4 sm:mb-0">
          <img
            src={logo1}
            alt="Logo"
            className="w-[100px] h-[70px] sm:w-[110px] sm:h-[78px]"
          />
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-5 justify-center sm:justify-end w-full sm:w-auto">
          <FaInstagram className="w-[20.4px] h-[36px] text-[#FFFFFF80]" />
          <CiFacebook className="w-[20.4px] h-[36px] text-[#FFFFFF80]" />
          <FaXTwitter className="w-[20.4px] h-[36px] text-[#FFFFFF80]" />
        </div>
      </div>
      {/* Two Boxes Below */}
      <div className="absolute bottom-48 w-full px-6 sm:px-11 flex flex-col sm:flex-row justify-around">
        <div className="w-full sm:w-[48%] p-6 gap-10 rounded-lg shadow-lg mb-4 sm:mb-0">
          <h2 className="text-5xl sm:text-7xl text-white font-semibold">
            WE REIMAGINE
          </h2>
          <p className="text-white text-5xl sm:text-7xl mt-2">TOMORROW</p>
          <p className="text-white text-[20px] sm:text-[24px]">
            Driving growth and molding the future through transformative
          </p>
          <p className="text-white text-[20px] sm:text-[24px]">change</p>
          <button className="text-lg px-24 py-4 font-semibold mt-4 bg-white rounded-full">
            Let’s Talk
          </button>
        </div>

        {/* Right box with phone image, hidden on small screens */}
        <div className="w-full sm:w-[24%] p rounded-lg shadow-lg hidden sm:block">
          <img src={Phone} alt="Phone Image" className="w-full" />
        </div>
      </div>
      <Newpage />
      <OurWork />
      <Overview />
      <div className="flex   justify-center  w-full">
        <div className=" flex items-center   justify-center flex-col w-[70%] ">
          <h1 className=" mt-9 text-4xl  mb-11 text-center "> blog</h1>
          <marquee behavior="scroll" direction="left">
            <div className="flex space-x-24">
              <img
                src={Facebook}
                alt="Facebook Logo"
                className="w-[138px] h-[38px]"
              />
              <img
                src={Youtube}
                alt="YouTube Logo"
                className="w-[138px] h-[38px]"
              />
              <img
                src={Pinterest}
                alt="Pinterest Logo"
                className="w-[138px] h-[38px]"
              />
              <img
                src={Twitch}
                alt="Twitch Logo"
                className="w-[138px] h-[38px]"
              />
              <img
                src={Webflow}
                alt="Webflow Logo"
                className="w-[138px] h-[38px]"
              />
            </div>
          </marquee>

          
        </div>

      </div>
      <h1 className="font-semibold px-12  mt-24  absolute font-jakarta text-4xl sm:text-2xl md:text-3xl lg:text-4xl w-auto">Blog</h1>
      <Allblog />
      <Google />
      <Contact />
      {/* <Navbar /> */}
    </div>
  );
};

export default Home;
