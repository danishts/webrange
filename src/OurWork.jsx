




// import React, { useState, useEffect } from "react";
// import Tilt from "react-parallax-tilt"; // Import the Tilt component
// import { FaReact, FaJs, FaPhp, FaHtml5 } from "react-icons/fa";
// import Animation1 from "./assets/Animation1.png";
// import Animation2 from "./assets/Animation2.png";
// import Animation3 from "./assets/Animation3.png";
// import Animation4 from "./assets/Animation4.png";
// const OurWork = () => {
//   const data = [
//     {
//       leftText: "E-Shop",
//       leftDesc: "Upgrade",
//       rightText: "",
//       rightDesc:
//         "We accelerated the client’s product development timeline, cutting delivery from six months to just three weeks. A data-driven and agile approach ensured cost optimization and market readiness.",
//       heading: "Technologies Used",
//       icons: [
//         <FaReact size={70} />,
//         <FaJs size={70} />,
//         <FaPhp size={70} />,
//         <FaHtml5 size={70} />,
//       ],
//       images: [Animation1, Animation2, Animation3, Animation4],
//     },
//     {
//       leftText: "FinTech",
//       leftDesc: "Redefined",
//       rightText: "",
//       rightDesc:
//         "Our innovative approach helped modernize the client's business processes, reducing operational costs by 40 percent and improving efficiency across all departments within weeks",
//       heading: "Technologies Used",
//       icons: [
//         <FaReact size={70} />,
//         <FaJs size={70} />,
//         <FaPhp size={70} />,
//         <FaHtml5 size={70} />,
//       ],
//       images: [Animation1, Animation2, Animation3, Animation4],
//     },
//     {
//       leftText: "HIPAA-",
//       leftDesc: "Health",
//       rightText: "",
//       rightDesc:
//         "We empowered the client with cutting-edge technology, transforming an underperforming system into a scalable and customer-centric solution in record time.",
//       heading: "Technologies Used",
//       icons: [
//         <FaReact size={70} />,
//         <FaJs size={70} />,
//         <FaPhp size={70} />,
//         <FaHtml5 size={70} />,
//       ],
//       images: [Animation1, Animation2, Animation3, Animation4],
//     },
//     {
//       leftText: "Smart",
//       leftDesc: "Learning",
//       rightText: "",
//       rightDesc:
//         "By adopting future-proof strategies, we elevated the client’s platform, ensuring reliability and performance that exceeded market standards.",
//       heading: "Technologies Used",
//       icons: [
//         <FaReact size={70} />,
//         <FaJs size={70} />,
//         <FaPhp size={70} />,
//         <FaHtml5 size={70} />,
//       ],
//       images: [Animation1, Animation2, Animation3, Animation4],
//     },
//     {
//       leftText: "Faster",
//       leftDesc: "Insights",
//       rightText: "",
//       rightDesc:
//         "We streamlined the client’s data processing workflow, cutting analysis time by 60 percent and enabling smarter decision-making capabilities.",
//       heading: "Technologies Used",
//       icons: [
//         <FaReact size={70} />,
//         <FaJs size={70} />,
//         <FaPhp size={70} />,
//         <FaHtml5 size={70} />,
//       ],
//       images: [Animation1, Animation2, Animation3, Animation4],
//     },
//     {
//       leftText: "Retail",
//       leftDesc: "Redesign",
//       rightText: "",
//       rightDesc:
//         "We revolutionized the client's digital presence by designing a user-first platform that achieved 300 percent growth in customer retention within six months.",
//       heading: "Technologies Used",
//       icons: [
//         <FaReact size={70} />,
//         <FaJs size={70} />,
//         <FaPhp size={70} />,
//         <FaHtml5 size={70} />,
//       ],
//       images: [Animation1, Animation2, Animation3, Animation4],
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0); // Track current section index
//   const [currentImage, setCurrentImage] = useState(0); // Track current image index
//   const [scrolling, setScrolling] = useState(false); // Prevent rapid scrolling

//   useEffect(() => {
//     window.addEventListener("wheel", handleScroll);
//     return () => {
//       window.removeEventListener("wheel", handleScroll);
//     };
//   }, [scrolling]);

//   const handleScroll = (event) => {
//     if (!scrolling) {
//       setScrolling(true);
//       setCurrentIndex((prev) => (prev + 1) % data.length);

//       setCurrentImage((prev) => (prev + 1) % data[currentIndex].images.length);

//       setTimeout(() => {
//         setScrolling(false);
//       }, 500); // Timeout to prevent rapid multiple scroll events
//     }
//   };

//   return (
//     <div className="flex flex-col  justify-between">
//       <h1 className="text-5xl text-center font-bold text-black">Our Work</h1>
//      <div className="flex justify-center items-center flex-grow px-4">
//         <div className="flex flex-col md:flex-row space-x-8 w-full">
//           <div className="w-full md:w-1/3 h-96 flex-col flex items-center justify-center text-center">
//             <h1 className="text-4xl md:text-7xl font-bold">
//               {data[currentIndex].leftText}
//             </h1>
//             <p className="mt-2 text-4xl md:text-7xl font-bold">
//               {data[currentIndex].leftDesc}
//             </p>
//             <p>{data[currentIndex].rightText}</p>
//           </div>
//      <div className="p-12 w-full md:w-1/3 h-128 flex items-center justify-center overflow-hidden relative">
//             <Tilt
//               glareEnable={true}
//               glareMaxOpacity={0.8}
//               glareColor="#ffffff"
//               glarePosition="bottom"
//               glareBorderRadius="20px"
//             >
//               <img
//                 src={data[currentIndex].images[currentImage]}
//                 alt={`Work showcase ${currentImage + 1}`}
//                 className="w-[250px] md:w-[300px] h-[350px] md:h-[400px] object-cover rounded-3xl transition-transform duration-500 ease-in-out"
            
//               />
//             </Tilt>
//           </div>
//           <div
//             className="w-full md:w-1/4 h-96 flex flex-col items-start justify-center animate-fadeInSlide"
//             style={{
//               transform: `translateY(${
//                 currentImage % 2 === 0 ? "-30px" : "30px"
//               })`, // Move text up or down based on currentImage index
//             }}
//           >
//             <h1 className="text-xl">{data[currentIndex].rightText}</h1>
//             <p className="mt-16">{data[currentIndex].rightDesc}</p>
//             <h2 className="mt-8 text-2xl font-semibold">
//               {data[currentIndex].heading}
//             </h2>
//             <div className="flex space-x-5 mt-8 text-blue-700">
//               {data[currentIndex].icons}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Pagination Dots */}
//       <div className="flex justify-center mb-4">
//         {data.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-4 h-4 mx-2 rounded-full cursor-pointer ${
//               index === currentIndex ? "bg-black" : "bg-gray-400"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurWork;










































































































// ya code sai ha just responsive karna hya 

import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt"; // Import the Tilt component
import { FaReact, FaJs, FaPhp, FaHtml5 } from "react-icons/fa";
import Animation1 from "./assets/Animation1.png";
import Animation2 from "./assets/Animation2.png";
import Animation3 from "./assets/Animation3.png";
import Animation4 from "./assets/Animation4.png";

const OurWork = () => {
  const data = [
    {
      leftText: "E-Shop",
      leftDesc: "Upgrade",
      rightText: "",
      rightDesc:
        "We accelerated the client’s product development timeline, cutting delivery from six months to just three weeks. A data-driven and agile approach ensured cost optimization and market readiness.",
      heading: "Technologies Used",
      icons: [
        <FaReact size={70} />,
        <FaJs size={70} />,
        <FaPhp size={70} />,
        <FaHtml5 size={70} />,
      ],
      images: [Animation1, Animation2, Animation3, Animation4],
    },
    {
      leftText: "FinTech",
      leftDesc: "Redefined",
      rightText: "",
      rightDesc:
        "Our innovative approach helped modernize the client's business processes, reducing operational costs by 40 percent and improving efficiency across all departments within weeks",
      heading: "Technologies Used",
      icons: [
        <FaReact size={70} />,
        <FaJs size={70} />,
        <FaPhp size={70} />,
        <FaHtml5 size={70} />,
      ],
      images: [Animation1, Animation2, Animation3, Animation4],
    },
    {
      leftText: "HIPAA-",
      leftDesc: "Health",
      rightText: "",
      rightDesc:
        "We empowered the client with cutting-edge technology, transforming an underperforming system into a scalable and customer-centric solution in record time.",
      heading: "Technologies Used",
      icons: [
        <FaReact size={70} />,
        <FaJs size={70} />,
        <FaPhp size={70} />,
        <FaHtml5 size={70} />,
      ],
      images: [Animation1, Animation2, Animation3, Animation4],
    },
    {
      leftText: "Smart",
      leftDesc: "Learning",
      rightText: "",
      rightDesc:
        "By adopting future-proof strategies, we elevated the client’s platform, ensuring reliability and performance that exceeded market standards.",
      heading: "Technologies Used",
      icons: [
        <FaReact size={70} />,
        <FaJs size={70} />,
        <FaPhp size={70} />,
        <FaHtml5 size={70} />,
      ],
      images: [Animation1, Animation2, Animation3, Animation4],
    },
    {
      leftText: "Faster",
      leftDesc: "Insights",
      rightText: "",
      rightDesc:
        "We streamlined the client’s data processing workflow, cutting analysis time by 60 percent and enabling smarter decision-making capabilities.",
      heading: "Technologies Used",
      icons: [
        <FaReact size={70} />,
        <FaJs size={70} />,
        <FaPhp size={70} />,
        <FaHtml5 size={70} />,
      ],
      images: [Animation1, Animation2, Animation3, Animation4],
    },
    {
      leftText: "Retail",
      leftDesc: "Redesign",
      rightText: "",
      rightDesc:
        "We revolutionized the client's digital presence by designing a user-first platform that achieved 300 percent growth in customer retention within six months.",
      heading: "Technologies Used",
      icons: [
        <FaReact size={70} />,
        <FaJs size={70} />,
        <FaPhp size={70} />,
        <FaHtml5 size={70} />,
      ],
      images: [Animation1, Animation2, Animation3, Animation4],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Track current section index
  const [currentImage, setCurrentImage] = useState(0); // Track current image index
  const [scrolling, setScrolling] = useState(false); // Prevent rapid scrolling

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [scrolling]);

  const handleScroll = (event) => {
    if (!scrolling) {
      setScrolling(true);
      setCurrentIndex((prev) => (prev + 1) % data.length);
      setCurrentImage((prev) => (prev + 1) % data[currentIndex].images.length);
      setTimeout(() => {
        setScrolling(false);
      }, 500); // Timeout to prevent rapid multiple scroll events
    }
  };

  return (
    <div className="flex flex-col  justify-between p-4">
      <h1 className="text-3xl sm:text-5xl text-center font-bold text-black mb-8">
        Our Work
      </h1>
      <div className="flex justify-center items-center flex-grow px-4">
        <div className="flex flex-col md:flex-row space-x-8 w-full">
          {/* Left Column */}
          <div className="w-full md:w-1/3 h-96 flex-col flex items-center justify-center text-center">
            <h1 className="text-4xl md:text-7xl font-bold">
              {data[currentIndex].leftText}
            </h1>
            <p className="mt-2 text-xl md:text-4xl font-bold">
              {data[currentIndex].leftDesc}
            </p>
            <p className="mt-2 text-lg">{data[currentIndex].rightText}</p>
          </div>

          {/* Image Section */}
          <div className="p-6 md:p-12 w-full md:w-1/3 h-128 flex items-center justify-center overflow-hidden relative">
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.8}
              glareColor="#ffffff"
              glarePosition="bottom"
              glareBorderRadius="20px"
            >
              <img
                src={data[currentIndex].images[currentImage]}
                alt={`Work showcase ${currentImage + 1}`}
                className="w-[250px] md:w-[300px] h-[350px] md:h-[400px] object-cover rounded-3xl transition-transform duration-500 ease-in-out"
              />
            </Tilt>
          </div>

          {/* Right Column */}
          <div
            className="w-full md:w-1/4 h-96 flex flex-col items-start justify-center mt-8 md:mt-0 animate-fadeInSlide"
            style={{
              transform: `translateY(${
                currentImage % 2 === 0 ? "-30px" : "30px"
              })`, // Move text up or down based on currentImage index
            }}
          >
            <h1 className="text-xl md:text-2xl">
              {data[currentIndex].rightText}
            </h1>
            <p className="mt-8 text-sm md:text-lg">
              {data[currentIndex].rightDesc}
            </p>
            <h2 className="mt-8 text-xl md:text-2xl font-semibold">
              {data[currentIndex].heading}
            </h2>
            <div className="flex space-x-5 mt-8 text-blue-700">
              {data[currentIndex].icons}
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mb-4">
        {data.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 mx-2 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
