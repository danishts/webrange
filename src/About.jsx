import React from "react";
import element from "./assets/Element.png";
import { IoArrowDown } from "react-icons/io5";
import Saim from "./assets/Saim.png";
import group from "./assets/group.png";
import Facebook from "./assets/Facebook.png";
import Youtube from "./assets/Youtube.png";
import Pinterest from "./assets/Pinterest.png";
import Twitch from "./assets/Twitch.png";
import Webflow from "./assets/Webflow.png";
import Contact from "./Contact";
import {
  FaHourglassStart,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import Contacts from "./Contacts";



const About = () => {
  return (
    <>
      <div className="w-full flex flex-col">
        <div
          className="flex bg-cover bg-top w-full h-screen"
          style={{
            backgroundImage: `url(${element})`,
          }}
        >
          <div className="w-full p-10">
            {/* Upper Content */}
            <div className="flex flex-col items-center py-36 space-y-8">
              <p className="text-3xl">WHO WE ARE</p>
              <div className="text-4xl text-center leading-relaxed">
                We are a remote design team
                <br /> with strong experience in
                <br /> creating UX/UI solutions
              </div>

              <div className="flex justify-center items-center">
                <button className="w-64 h-16 border-2 border-black rounded-full flex flex-col justify-center items-center space-y-1">
                  <span>Leadership Team</span>
                  <IoArrowDown className="text-center" />
                </button>
              </div>
            </div>

            {/* Left and Right Content */}
            <div className="flex flex-col md:flex-row mt-36  space-y-10 md:space-y-0">
              {/* Left Half */}
              <div className="flex-1 border-b-2 border-r-2 border-t-2 border-black p-6">
                <div className="flex space-x-4">
                  <img src={Saim} alt="Saim Image" className="w-32 h-48" />
                  <p className="py-6">10 +</p>
                </div>

                <div className="text-3xl font-bold">Saim Rehdari</div>
                <div className="text-2xl">CEO</div>
                <div className="mt-10">
                  <p>
                    Founder and lead designer at UXIS, specializes in deep UX/UI
                    design for complex product interfaces. Achieving an 88%
                    success rate in planned KPIs after redesigns.
                    <br />
                    <br />
                    The author of the course "UX Thinking and Structuring Before
                    Creating UI" and the winner of the Telegram competition for
                    redesigning the Android app.
                  </p>
                </div>

                <div className="text-3xl mt-6">Expertise:</div>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-5">
                  {[
                    "Finance",
                    "Graphics",
                    "Design",
                    "Cloud Platform",
                    "Testing",
                  ].map((skill) => (
                    <button
                      key={skill}
                      className="border-2 border-black rounded-full px-4 py-2 text-xs md:text-sm"
                    >
                      {skill}
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap mt-5 space-x-2">
                  <button className="border-2 border-black rounded-full px-6 py-2 text-xs">
                    AI Chats
                  </button>
                  <button className="border-2 border-black rounded-full px-6 py-2 text-xs">
                    Big Data
                  </button>
                </div>

                <div className="flex mt-8 space-x-5 mb-10">
                  <div>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-blue-600 w-11 h-11" />
                    </a>
                  </div>

                  <div>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className="text-blue-600 w-11 h-11" />
                    </a>
                  </div>

                  <div>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="text-pink-500 w-11 h-11" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Half */}
              <div className="flex-1 border-b-2 border-r-2 border-t-2 border-black p-6">
                <div className="flex space-x-4">
                  <img src={Saim} alt="Saim Image" className="w-32 h-48" />
                  <p className="py-6">10 +</p>
                </div>

                <div className="text-3xl font-bold">Saim Rehdari</div>
                <div className="text-2xl">CEO</div>
                <div className="mt-10">
                  <p>
                    Founder and lead designer at UXIS, specializes in deep UX/UI
                    design for complex product interfaces. Achieving an 88%
                    success rate in planned KPIs after redesigns.
                    <br />
                    <br />
                    The author of the course "UX Thinking and Structuring Before
                    Creating UI" and the winner of the Telegram competition for
                    redesigning the Android app.
                  </p>
                </div>

                <div className="text-3xl mt-6">Expertise:</div>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-5">
                  {[
                    "Finance",
                    "Graphics",
                    "Design",
                    "Cloud Platform",
                    "Testing",
                  ].map((skill) => (
                    <button
                      key={skill}
                      className="border-2 border-black rounded-full px-4 py-2 text-xs md:text-sm"
                    >
                      {skill}
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap mt-5 space-x-2">
                  <button className="border-2 border-black rounded-full px-6 py-2 text-xs">
                    AI Chats
                  </button>
                  <button className="border-2 border-black rounded-full px-6 py-2 text-xs">
                    Big Data
                  </button>
                </div>

                <div className="flex mt-8 space-x-5 mb-10">
                  <div>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-blue-600 w-11 h-11" />
                    </a>
                  </div>

                  <div>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className="text-blue-600 w-11 h-11" />
                    </a>
                  </div>

                  <div>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="text-pink-500 w-11 h-11" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Think */}
            <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 justify-between mt-20">
              {/* Left Section */}
              <div className="flex-1 flex justify-center px-6 md:px-20 flex-col space-y-5 md:space-y-7 text-center md:text-left">
                <p className="text-xl md:text-2xl font-semibold">
                  HOW WE THINK
                </p>
                <h1 className="text-4xl md:text-5xl font-bold">Our Focus</h1>
                <p className="text-sm md:text-base">
                  Take a moment to explore the principles that guide our
                  <br className="hidden md:block" /> approach. These pillars
                  represent our unwavering
                  <br className="hidden md:block" /> commitment to excellence
                  and innovation.
                </p>
              </div>

              {/* Right Section */}
              <div className="flex-1 py-10 md:py-28 flex flex-col space-y-6">
                {/* Top Row */}
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2 border-b-2 md:border-r-2 border-black p-6">
                    <div className="flex items-center space-x-3">
                      <p className="text-lg font-bold">
                        We help our clients generate revenue
                      </p>
                      <FaHourglassStart className="text-2xl" />
                    </div>
                    <p className="text-sm py-6 md:py-9">
                      We stay at the forefront of design innovations and trends.
                      Constantly integrating the latest practices in UX and UI,
                      we explore emerging niches such as VR/AR to ensure our
                      approach remains modern and impactful.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 border-b-2 border-black p-6">
                    <div className="flex items-center space-x-3">
                      <p className="text-lg font-bold">
                        We help our clients generate revenue
                      </p>
                      <FaHourglassStart className="text-2xl" />
                    </div>
                    <p className="text-sm py-6 md:py-9">
                      We stay at the forefront of design innovations and trends.
                      Constantly integrating the latest practices in UX and UI,
                      we explore emerging niches such as VR/AR to ensure our
                      approach remains modern and impactful.
                    </p>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2 border-r-0 md:border-r-2 border-black p-6">
                    <div className="flex items-center space-x-3">
                      <p className="text-lg font-bold">
                        We help our clients generate revenue
                      </p>
                      <FaHourglassStart className="text-2xl" />
                    </div>
                    <p className="text-sm py-6 md:py-9">
                      We stay at the forefront of design innovations and trends.
                      Constantly integrating the latest practices in UX and UI,
                      we explore emerging niches such as VR/AR to ensure our
                      approach remains modern and impactful.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 border-black p-6">
                    <div className="flex items-center space-x-3">
                      <p className="text-lg font-bold">
                        We help our clients generate revenue
                      </p>
                      <FaHourglassStart className="text-2xl" />
                    </div>
                    <p className="text-sm py-6 md:py-9">
                      We stay at the forefront of design innovations and trends.
                      Constantly integrating the latest practices in UX and UI,
                      we explore emerging niches such as VR/AR to ensure our
                      approach remains modern and impactful.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4 px-4 md:px-0">
              {/* Heading */}
              <div className="flex w-full justify-center">
                <h1 className="text-xl md:text-3xl font-medium">
                  Our Superpower
                </h1>
              </div>

              {/* Main Bold Heading */}
              <div className="flex flex-col">
                <h1 className="text-center text-4xl md:text-[60px] font-bold leading-tight">
                  We just doing what
                </h1>
                <h1 className="text-center text-4xl md:text-[60px] font-bold leading-tight">
                  others don't
                </h1>
              </div>

              {/* Description */}
              <div className="flex flex-col">
                <h1 className="text-center text-sm md:text-[20px]">
                  We prioritize robust UX structuring before wireframing and
                </h1>
                <h1 className="text-center text-sm md:text-[20px]">
                  validate our hypotheses with real.
                </h1>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <button className="bg-[#353535] text-white rounded-full w-full max-w-[380px] py-4 text-lg md:text-xl">
                Explore our services
              </button>
            </div>

            <div className="py-8">
              <img src={group} alt="grouppic" />
            </div>

            <div className="flex justify-center">
              <p className="text-[40px] py-8">Our Partners</p>
            </div>

            <div className="w-full  mb-24">
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

              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
