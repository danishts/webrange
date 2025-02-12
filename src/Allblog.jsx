// import React, { useState, useEffect } from "react";
// import c from "./assets/c.png";
// import m from "./assets/m.png";
// import f from "./assets/f.png";
// import { MdArrowOutward } from "react-icons/md";
// import { IoClose } from "react-icons/io5";
// import Contact from "./Contact";

// const Allblog = () => {
//   const [selectedBlog, setSelectedBlog] = useState(null);

//   const blogs = [
//     {
//       id: 1,
//       title: "Why Choose Firebase with Flutter?",
//       date: "Faiz Hassan • 2021-02-03",
//       author: "",
//       shortDescription:
//         "Flutter, Google's UI toolkit, empowers developers to create fast...",
//       fullDescription:`Flutter, Google's UI toolkit, empowers developers to create fast and natively compiled applications for mobile, web, and desktop from a single codebase.
// It streamlines the development process with an intuitive UI, rich libraries, and high-performance rendering.
// <br /><br />
// Firebase complements Flutter perfectly by providing a robust Backend-as-a-Service (BaaS) offering.
// It includes features like real-time databases, cloud storage, authentication services, and analytics, which are essential for building scalable applications.`,
//       img: f,

//     },
//     {
//       id: 2,
//       title: "Introduction to MERN Stack Authentication",
//       date: "Qasim Ali • 2024-08-04",
//       author: "",
//       shortDescription:
//         "The MERN stack, which includes MongoDB, Express.js, React...",
//       fullDescription:
//         "The MERN stack, which includes MongoDB, Express.js, React, and Node.js, is a popular set of technologies for building full-stack web applications. One crucial aspect of any web application is user authentication, which allows users to securely log in and access protected resources.",
//       img: m,
//     },
//     {
//       id: 3,
//       title: "Why API Security is Crucial for Web Applications",
//       date: "Shayan Zameer • 2025-1-12",
//       author: "Jane Smith",
//       shortDescription: "APIs are the backbone of modern web applications...",
//       fullDescription:
//         "APIs are the backbone of modern web applications, allowing different services to communicate. With the rise of cyber-attacks, securing these APIs is crucial to ensure data privacy, prevent unauthorized access, and protect against malicious activities.",
//       img: c,
//     },
//   ];

//   useEffect(() => {
//     if (selectedBlog) {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   }, [selectedBlog]);

//   return (
//     <div className="w-full flex flex-col">
//       {/* Header Hide when Blog is Open */}
//       {!selectedBlog && (
//         <div className="flex flex-col items-center justify-center mt-12 px-4 text-center">
//           <h1 className="text-2xl sm:text-3xl font-bold">Blog</h1>
//           <h1 className="font-semibold text-lg sm:text-xl">
//             View the most recent blogs about technology
//           </h1>
//         </div>
//       )}

//       {/* Selected Blog Detail View */}
//       {selectedBlog && (
//         <div className="flex flex-col relative ">
//           {/* Close Icon */}
//           <button
//             onClick={() => setSelectedBlog(null)}
//             className="absolute top-3 right-3 text-white text-3xl hover:text-black"
//           >
//             <IoClose />
//           </button>

//           {/* Full-Width Image */}
//           <img
//             src={selectedBlog.img}
//             alt="blog pic"
//             className="w-full object-cover rounded-lg"
//           />

//           <p className=" text-2xl p-8 text-blue-600">
//             {selectedBlog.author} • {selectedBlog.date}
//           </p>
//           <h1 className="text-[24px] p-8 font-bold">{selectedBlog.title}</h1>
//           <p className=" p-8 text-[#646e83]">
//             {selectedBlog.fullDescription}
//           </p>
//         </div>
//       )}

//       {/* Remaining Blogs */}
//       <div className="grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {blogs
//           .filter((blog) => blog.id !== selectedBlog?.id)
//           .map((blog) => (
//             <div
//               key={blog.id}
//               className="flex flex-col bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition"
//             >
//               <img
//                 src={blog.img}
//                 alt="blog pic"
//                 className="w-full h-auto object-cover rounded-lg"
//               />
//               <p className="py-3 text-blue-600">
//                 {blog.author} • {blog.date}
//               </p>
//               <div className="flex justify-between items-center">
//                 <h1 className="text-[24px]">{blog.title}</h1>
//                 <button onClick={() => setSelectedBlog(blog)}>
//                   <MdArrowOutward className="text-3xl text-blue-600 hover:text-blue-800" />
//                 </button>
//               </div>
//               <p className="py-5 text-[#646e83]">{blog.shortDescription}</p>
//             </div>
//           ))}
//       </div>
//       <Contact />
//     </div>
//   );
// };

// export default Allblog;

import React, { useState, useEffect } from "react";
import c from "./assets/c.png";
import m from "./assets/m.png";
import f from "./assets/f.png";
import { MdArrowOutward } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Contact from "./Contact";

const Allblog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "Why Choose Firebase with Flutter?",
      date: "Faiz Hassan • 2021-02-03",
      author: "",
      shortDescription:
        "Flutter, Google's UI toolkit, empowers developers to create fast...",
      fullDescription: `Flutter, Google's UI toolkit, empowers developers to create fast and natively compiled applications for mobile, web, and desktop from a single codebase. 
       It streamlines the development process with an intuitive UI, rich libraries, and high-performance rendering.

        Firebase complements Flutter perfectly by providing a robust Backend-as-a-Service (BaaS) offering.  
       It includes features like real-time databases, cloud storage, authentication services, and analytics, which are essential for building scalable applications.`,
      img: f,
    },
    {
      id: 2,
      title: "Introduction to MERN Stack Authentication",
      date: "Qasim Ali • 2024-08-04",
      author: "",
      shortDescription:
        "The MERN stack, which includes MongoDB, Express.js, React...",
      fullDescription:
        "The MERN stack, which includes MongoDB, Express.js, React, and Node.js, is a popular set of technologies for building full-stack web applications. One crucial aspect of any web application is user authentication, which allows users to securely log in and access protected resources.",
      img: m,
    },
    {
      id: 3,
      title: "Why API Security is Crucial for Web Applications",
      date: "Shayan Zameer • 2025-1-12",
      author: "Jane Smith",
      shortDescription: "APIs are the backbone of modern web applications...",
      fullDescription:
        "APIs are the backbone of modern web applications, allowing different services to communicate. With the rise of cyber-attacks, securing these APIs is crucial to ensure data privacy, prevent unauthorized access, and protect against malicious activities.",
      img: c,
    },
  ];

  useEffect(() => {
    if (selectedBlog) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedBlog]);

  return (
    <div className="w-full flex flex-col">
      {/* Header Hide when Blog is Open */}
      {!selectedBlog && (
        <div className="flex flex-col items-center justify-center mt-12 px-4 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold">Blog</h1>
          <h1 className="font-semibold text-lg sm:text-xl">
            View the most recent blogs about technology
          </h1>
        </div>
      )}

      {/* Selected Blog Detail View */}
      {selectedBlog && (
        <div className="flex flex-col relative">
          {/* Close Icon */}
          <button
            onClick={() => setSelectedBlog(null)}
            className="absolute top-3 right-3 text-white text-3xl hover:text-black"
          >
            <IoClose />
          </button>

          {/* Full-Width Image */}
          <img
            src={selectedBlog.img}
            alt="blog pic"
            className="w-full object-cover rounded-lg"
          />

          <p className="text-2xl p-8 text-blue-600">
            {selectedBlog.author} • {selectedBlog.date}
          </p>
          <h1 className="text-[24px] p-8 font-bold">{selectedBlog.title}</h1>
          <p className="p-8 text-[#646e83] leading-relaxed">
            {selectedBlog.fullDescription}
          </p>
        </div>
      )}

      {/* Remaining Blogs */}
      <div className="grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs
          .filter((blog) => blog.id !== selectedBlog?.id)
          .map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition"
            >
              <img
                src={blog.img}
                alt="blog pic"
                className="w-full h-auto object-cover rounded-lg"
              />
              <p className="py-3 text-blue-600">
                {blog.author} • {blog.date}
              </p>
              <div className="flex ">
                <h1 className="text-3xl">{blog.title}</h1>
                <button onClick={() => setSelectedBlog(blog)}>
                  <MdArrowOutward className="text-3xl text-blue-600 hover:text-blue-800" />
                </button>
              </div>
              <p className="py-5  text-[#646e83]">{blog.shortDescription}</p>
            </div>
          ))}
      </div>
      <Contact />
    </div>
  );
};

export default Allblog;
