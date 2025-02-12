// import React from "react";
// import element from "./assets/Element.png"; // Ensure the path to the image is correct
// import Mobile from "./Mobile";
// import Navbar from "./Navbar";
// import Contact from "./Contact";

// const Service = () => {
//   return (
//     <>
//       <div className="  relative">
//         <img
//           src={element}
//           alt="Element"
//           className="w-full sm:w-4/5 h-auto object-contain" // Responsive width
//         />
//         <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center z-10 sm:mt-[-80px] md:mt-[-150px] lg:mt-[-190px]">
//           {/* Text adjusted to sit over the image */}
//           <h3 className="text-black text-2xl sm:text-3xl font-medium">
//             Our services
//           </h3>
//           <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mt-2">
//             We transform business <br />
//             requirements into <br />
//             high-level App.
//           </h1>
//           <button className="mt-4 bg-transparent text-black border-black border-2 h-14 px-6 py-2 rounded-full text-sm sm:text-base md:text-lg">
//             Explore All
//             <br />
//             <p className="text-1xl font-semibold">↓</p>
//           </button>
//         </div>

//         {/* Horizontal line placed above the "Mobile App" section */}
//         <div className="absolute bottom-[10px] sm:bottom-[250px] md:bottom-[280px] w-full flex items-end justify-center">
//           <hr className="border-black border-t-2 w-[80%] sm:w-[90%]" />
//         </div>

//         {/* "Mobile App Development" text below the line */}
//         {/* <div className="absolute bottom-[100px] sm:bottom-[120px] md:bottom-[140px] w-full flex flex-col items-center">
      
//         <div className="w-full flex justify-start px-20">
//           <h2 className="text-black text-6xl font-semibold">Mobile App</h2>
//         </div>

        
//         <div className="w-full flex px-20 mt-2">
//           <h2 className="text-black text-6xl font-semibold">Development</h2>
//         </div>
//       </div> */}

//         {/* Everything aligned vertically using flex-col */}
//         {/* <div className="absolute bottom-[50px] sm:bottom-[70px] md:bottom-[100px] w-full flex flex-col items-center">
//         <button className="bg-transparent flex justify-center items-center text-black border-black border-2 w-[211px] h-14 text-lg font-semibold px-4 py-2 rounded-full">
//           Explore blogs
//           <span className="ml-2 font-bold">&rarr;</span>
         
//         </button>

        
//         <div className="mt-4 text-black text-6xl">0</div>
//       </div> */}
//       </div>
//       <Navbar />
//       <Mobile />
//       <Contact />
//     </>
//   );
// };

// export default Service;





































// import React, { useState } from "react";
// import Elments from "./assets/Elments.png"; // Ensure the path to the image is correct
// import Mobile from "./Mobile";
// import Navbar from "./Navbar";
// import Contact from "./Contact";

// const Service = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <>
//       <div className="relative bg-red-500 w-full">
//         <img
//           src={Elments}
//           alt="Element"
//           className="w-full  object-contain" // Responsive width
//         />
//         <div className="absolute top-0 left-0 w-full  flex flex-col justify-center items-center text-center z-10 sm:mt-[-80px] md:mt-[-150px] lg:mt-[-190px]">
//           <h3 className="text-black text-2xl sm:text-3xl font-medium">
//             Our services
//           </h3>
//           <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mt-2">
//             We transform business <br />
//             requirements into <br />
//             high-level App.
//           </h1>
//           <button className="mt-4 bg-transparent text-black border-black border-2 h-14 px-6 py-2 rounded-full text-sm sm:text-base md:text-lg">
//             Explore All
//             <br />
//             <p className="text-1xl font-semibold">↓</p>
//           </button>
//         </div>
//       </div>

//       {/* Navbar for large screens */}

//       {/* Toggle button for mobile screens */}

//       {/* Mobile menu */}
//       <Navbar />

//       <Mobile />
//       <Contact />
//     </>
//   );
// };

// export default Service;










































import React, { useState } from "react";
import Elmnts from "./assets/Elemnt.png"; // Ensure the path to the image is correct
import Mobile from "./Mobile";
import Navbar from "./Navbar";
import Contact from "./Contact";

const Service = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="relative h-[100%] w-full">
        <img
          src={Elmnts}
          alt="Element"
          className="w-full h-auto object-cover" // Ensure the image is responsive and covers the space
        />
        <div className="absolute top-0 left-0 w-full flex flex-col justify-center items-center text-center z-10 py-12">
          <h3 className="text-black text-2xl sm:text-3xl font-medium">
            Our services
          </h3>
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mt-2">
            We transform business <br />
            requirements into <br />
            high-level App.
          </h1>
          <button className="mt-6 bg-transparent text-black border-black border-2 h-14 px-6 py-2 rounded-full text-sm sm:text-base md:text-lg">
            Explore All
            <br />
            <p className="text-xl font-semibold">↓</p>
          </button>
        </div>
      </div>

      {/* Navbar for large screens */}
      <div className="hidden lg:block">
        <Navbar />
      </div>

      {/* Toggle button for mobile screens */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-4 text-white"
        >
          {isMenuOpen ? "Close Menu" : "Open Menu"}
        </button>
        {isMenuOpen && <Navbar />}
      </div>

      {/* Mobile content */}
      <Mobile />

      {/* Contact section */}
      <Contact />
    </>
  );
};

export default Service;
