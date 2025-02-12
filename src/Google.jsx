


import React from "react";
import group from "./assets/group.png";

const Google = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col px-4 md:px-8">
        <div className="flex w-full justify-center">
          <h1 className="text-3xl">Our Superpower</h1>
        </div>
        <div className="flex flex-col">
          <h1 className="text-center text-[40px] md:text-[60px] font-bold">
            We just do what
          </h1>
          <h1 className="text-center text-[40px] md:text-[60px] font-bold">
            others don't
          </h1>
        </div>
        <div className="flex flex-col">
          <h1 className="text-center text-[16px] md:text-[20px]">
            We prioritize robust UX structuring before wireframing and
          </h1>
          <h1 className="text-center text-[16px] md:text-[20px]">
            validate our hypotheses with real data.
          </h1>
        </div>
        <div className="mt-6 flex justify-center">
          <button className="bg-[#353535] rounded-l-full text-white rounded-r-full w-80 md:w-96 h-16 md:h-20">
            Explore our services
          </button>
        </div>
        <div className="py-8 flex justify-center">
          <img
            src={group}
            alt="Group pic"
            className="w-full md:w-[500px] lg:w-[600px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Google;
