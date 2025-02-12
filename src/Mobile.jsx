





import React, { useState, useEffect, useRef } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const categories = [
  {
    name: "Mobile App Development",
    files: Array.from({ length: 10 }, (_, i) => `File ${i + 1}`),
  },
  {
    name: "Web Development",
    files: Array.from({ length: 10 }, (_, i) => `File ${i + 1}`),
  },
  {
    name: "Cloud Solutions",
    files: Array.from({ length: 10 }, (_, i) => `File ${i + 1}`),
  },
  {
    name: "Data Analytics",
    files: Array.from({ length: 10 }, (_, i) => `File ${i + 1}`),
  },
  {
    name: "AI & Machine Learning",
    files: Array.from({ length: 10 }, (_, i) => `File ${i + 1}`),
  },
];

const Mobile = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const scrollRef = useRef(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [currentCategoryIndex]);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setCurrentCategoryIndex((prevIndex) =>
        prevIndex < categories.length - 1 ? prevIndex + 1 : prevIndex
      );
    }

    if (scrollTop <= 10) {
      setCurrentCategoryIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    }
  };

  return (
    <div className="flex flex-col mt-20 md:flex-row">
      <div className="w-full md:w-1/2 p-6 flex flex-col">
        <h3 className="text-xl text-center">
          {categories[currentCategoryIndex].name}
        </h3>
        <h2 className="text-7xl text-center text-[#d1d1d1] font-bold">
          {String(currentCategoryIndex + 1).padStart(2, "0")}
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="w-full md:w-1/2 p-6 max-h-[400px] overflow-y-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        onScroll={handleScroll}
      >
        {categories[currentCategoryIndex].files.map((file, index) => (
          <div key={index} className="border-b py-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-xl sm:text-lg md:text-xl">{file}</h3>
              {openIndex === index ? (
                <FaMinus className="text-lg sm:text-xl" />
              ) : (
                <FaPlus className="text-lg sm:text-xl" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">Details about {file}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobile;
