

import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedInput from "./AnimatedInput";
import { RxCrossCircled } from "react-icons/rx";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";

const Contacts = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/"); // Yahan tum kisi bhi page par redirect kar sakte ho
  };

  const handleInputChange = (e) => {
    console.log("Input value:", e.target.value);
  };

  return (
    <div className="p-20">
      {/* Close Button */}
      <div
        className="flex justify-end text-4xl cursor-pointer"
        onClick={handleClose}
      >
        <RxCrossCircled />
      </div>

      <div className="grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <p className="text-[#5F6368] text-base">Let’s start a discussion</p>
          <p className="text-[40px] font-bold">CONTACT US NOW</p>

          <div className="flex items-center py-4 space-x-2">
            <MdOutlineMarkEmailUnread className="w-8 h-8 text-[#5F6368]" />
            <h2 className="text-[#5F6368] text-[18px]">Email us at</h2>
          </div>
          <h2>
            <u className="text-[18px]">Webrangesolutions@company.com</u>
          </h2>

          <div className="flex items-center space-x-2">
            <FaPhone className="text-[18px] text-[#5F6368]" />
            <h2 className="text-[18px] py-4 text-[#5F6368]">Phone #</h2>
          </div>
          <h2>
            <u className="text-[18px]">+92 34515 1512</u>
          </h2>

          <div className="flex items-center py-4 space-x-1">
            <HiLocationMarker className="text-[14px] text-[#5F6368]" />
            <h2 className="text-[14px] py-4 text-[#5F6368]">
              Business address
            </h2>
          </div>
          <h1>
            <u className="text-[18px]">Address here</u>
          </h1>

          <div className="flex py-10 space-x-5">
            <FaLinkedinIn className="w-8 h-8" />
            <FaInstagram className="w-8 h-8" />
            <MdOutlineFacebook className="w-8 h-8" />
          </div>
        </div>

        <div className="flex mt-10 flex-col">
          <AnimatedInput label="Your Name" onChange={handleInputChange} />
          <AnimatedInput label="Email Address" onChange={handleInputChange} />
          <AnimatedInput label="Phone Number" onChange={handleInputChange} />
          <div className="flex justify-center">
            <button className="border-2 rounded-full bg-black h-16 text-white w-96">
              SUBMIT REQUEST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
