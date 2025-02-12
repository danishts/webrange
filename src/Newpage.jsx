



import React from "react";
import { GoGraph } from "react-icons/go";
import { BsStars } from "react-icons/bs";

const Newpage = () => {
  return (
    <div className="p-6 md:p-10">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10">
        {/* Left Section */}
        <div className="md:w-2/5 text-center md:text-left space-y-5">
          <p className="text-lg md:text-2xl font-semibold">HOW WE THINK</p>
          <h1 className="text-4xl md:text-7xl font-bold">Our Focus</h1>
          <p className="text-sm md:text-lg">
            Take a moment to familiarize yourself with our mindset. These are
            the guiding principles and insights about us that provide a deeper
            understanding of our identity.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="border-2 border-gray-300 p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <p className="text-base md:text-lg font-bold">
                We help our clients generate revenue
              </p>
              <GoGraph className="text-xl" />
            </div>
            <p className="text-sm md:text-lg py-4">
              We stay at the forefront of design innovations and trends.
              Constantly integrating the latest practices in UX and UI, we
              explore emerging niches such as VR/AR to ensure our approach
              remains modern and impactful.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border-2 border-gray-300 p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <p className="text-base md:text-lg font-bold">
                We bring innovative solutions
              </p>
              <BsStars className="text-xl" />
            </div>
            <p className="text-sm md:text-lg py-4">
              Our team embraces forward-thinking strategies to deliver creative,
              effective, and transformative digital experiences tailored to
              industry needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border-2 border-gray-300 p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <p className="text-base md:text-lg font-bold">
                We drive user engagement
              </p>
              <GoGraph className="text-xl" />
            </div>
            <p className="text-sm md:text-lg py-4">
              Our designs ensure optimal usability, seamless interaction, and
              impactful experiences, keeping users engaged and invested.
            </p>
          </div>

          {/* Card 4 */}
          <div className="border-2 border-gray-300 p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <p className="text-base md:text-lg font-bold">
                We build future-ready solutions
              </p>
              <BsStars className="text-xl" />
            </div>
            <p className="text-sm md:text-lg py-4">
              Staying ahead of trends, we design scalable and adaptive
              solutions, ensuring long-term digital success for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newpage;
