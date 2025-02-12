

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaInfoCircle, FaClipboardList, FaCog } from "react-icons/fa";
import blog from "./assets/blog.png";

const textData = [
  {
    icon: <FaInfoCircle className="text-4xl" />,
    heading: "Heading 1",
    text: "Text 1: Here is the first piece of information for you.",
    image: blog,
  },
  {
    icon: <FaClipboardList className="text-4xl" />,
    heading: "Heading 2",
    text: "Text 2: Another informative point that adds value to the content.",
    image: blog,
  },
  {
    icon: <FaCog className="text-4xl" />,
    heading: "Heading 3",
    text: "Text 3: Here's some additional detail to support your understanding.",
    image: blog,
  },
  {
    icon: <FaInfoCircle className="text-4xl" />,
    heading: "Heading 4",
    text: "Text 4: Yet another key insight to keep the readers engaged.",
    image: blog,
  },
  {
    icon: <FaInfoCircle className="text-4xl" />,
    heading: "Heading 5",
    text: "Text 5: Continuing with more valuable information for the audience.",
    image: blog,
  },
  {
    icon: <FaCog className="text-4xl" />,
    heading: "Heading 6",
    text: "Text 6: An additional point that complements the overall message.",
    image: blog,
  },
  {
    icon: <FaCog className="text-4xl" />,
    heading: "Heading 7",
    text: "Text 7: An additional point that complements the overall message.",
    image: blog,
  },
];

const Overview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    const scrollPosition = scrollContainerRef.current.scrollTop;
    const containerHeight = scrollContainerRef.current.offsetHeight;
    const newIndex = Math.floor(scrollPosition / containerHeight);
    if (newIndex !== currentIndex && newIndex < textData.length) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="bg-black  min-h-screen rounded-2xl py-8 px-4">
      <motion.div
        className="text-center text-white"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
          Basic Services Overview
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-thin py-4">
          Our approach allows us to deliver exceptional experiences
        </p>
        <p className="text-sm sm:text-base">that drive growth and success.</p>
      </motion.div>

      <div className="max-w-screen-xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          className="text-white px-6 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="flex flex-col items-center lg:items-start">
              {textData[currentIndex].icon}
              <h2 className="text-2xl font-bold mb-2">
                {textData[currentIndex].heading}
              </h2>
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-thin py-4">
              {textData[currentIndex].text}
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div
            ref={scrollContainerRef}
            className="overflow-y-auto flex flex-col space-y-6 px-4 py-4 max-h-[400px] w-full"
            onScroll={handleScroll}
          >
            {textData.map((item, index) => (
              <div
                key={index}
                className="min-w-[250px] sm:min-w-[300px] rounded-xl shadow-lg"
              >
                <img
                  src={item.image}
                  alt={`Image for ${item.heading}`}
                  className="w-full h-auto rounded-xl"
                />
                <div className="mt-4">
                  <div className="flex justify-center lg:justify-start items-center space-x-4">
                    {item.icon}
                    <h2 className="text-lg sm:text-xl font-bold">
                      {item.heading}
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-thin py-2">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Overview;
