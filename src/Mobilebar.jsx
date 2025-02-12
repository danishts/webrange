




import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Mobilebar = () => {
  const [isOpen, setIsOpen] = useState(false); // For toggling the mobile menu
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggles the mobile menu
  };

  const handleLetstalk = () => {
    navigate("/contacts");
    setIsOpen(false); // Close the menu after navigating
  };

  return (
    <>
      {/* Navigation bar with button */}
      <nav className="shadow-md h-16 max-w-[350px] fixed top-2 left-5 z-50 md:hidden bg-black rounded-full">
        <div className="flex items-center justify-between px-6 h-full">
          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none z-60"
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-[70px] mt-2 w-[90%] max-w-[350px] bg-[white] shadow-lg rounded-lg z-50">
          <ul className="flex flex-col items-center py-4 space-y-3">
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                to="/"
                className="text-black hover:text-gray-500 transition"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                to="/Service"
                className="text-black hover:text-gray-500 transition"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                to="/case-studies"
                className="text-black hover:text-gray-500 transition"
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                to="/Allblog"
                className="text-black hover:text-gray-500 transition"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                to="/about"
                className="text-black hover:text-gray-500 transition"
              >
                About
              </Link>
            </li>
            <li>
              <button
                onClick={handleLetstalk}
                className="text-black px-6 py-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition"
              >
                Let’s talk
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Mobilebar;





















































// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Mobilebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const handleLetstalk = () => {
//     navigate("/contacts");
//     setIsOpen(false);
//   };

//   return (
//     <nav className="shadow-md h-20  max-w-[350px] fixed top-2 left-5 z-50 md:hidden bg-black rounded-lg">
//       <div className="flex items-center justify-between px-6 h-full">
//         {/* Hamburger Icon */}
//         <button onClick={toggleMenu} className="text-white focus:outline-none">
//           {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         <div className="absolute top-20 mt-2 w-full h-screen bg-[hover:bg-gray-200 transition duration-150] shadow-lg rounded-lg">
//           <ul className="flex flex-col items-center py-4 space-y-3">
//             <li>
//               <Link
//                 onClick={() => setIsOpen(false)}
//                 to="/"
//                 className="text-black hover:text-gray-500 transition"
//               >
//                 HOME
//               </Link>
//             </li>
//             <li>
//               <Link
//                 onClick={() => setIsOpen(false)}
//                 to="/Service"
//                 className="text-black hover:text-gray-500 transition"
//               >
//                 Service
//               </Link>
//             </li>
//             <li>
//               <Link
//                 onClick={() => setIsOpen(false)}
//                 to="/case-studies"
//                 className="text-black hover:text-gray-500 transition"
//               >
//                 Case Studies
//               </Link>
//             </li>
//             <li>
//               <Link
//                 onClick={() => setIsOpen(false)}
//                 to="/Allblog"
//                 className="text-black hover:text-gray-500 transition"
//               >
//                 Blog
//               </Link>
//             </li>
//             <li>
//               <Link
//                 onClick={() => setIsOpen(false)}
//                 to="/about"
//                 className="text-black hover:text-gray-500 transition"
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <button
//                 onClick={handleLetstalk}
//                 className="text-black px-6 py-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition"
//               >
//                 Let’s talk
//               </button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Mobilebar;
