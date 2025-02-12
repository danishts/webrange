import React from "react";
import pic11 from "./assets/pic11.png"; // Extension include karo
import blog from './assets/blog.png'
import c from "./assets/c.png";
import m from "./assets/m.png";
import f from "./assets/f.png";
import ima from "./assets/ima.png";

import { MdArrowOutward } from "react-icons/md";
import Contact from "./Contact";

const Blog = () => {
  return (
    <div className="w-full">
      <div
        className="bg-cover flex justify-center items-end bg-center h-[96vh] w-full px-4 sm:px-8 md:px-16"
        style={{ backgroundImage: `url(${pic11})` }}
      >
        <div className="flex mb-8 flex-col w-full max-w-screen-lg">
          <h1 className="text-white ml-6 sm:ml-10 md:ml-20 lg:ml-36 mb-6 sm:mb-10 text-4xl sm:text-5xl">
            Blog
          </h1>
          <h1 className="text-5xl sm:text-6xl text-white ml-6 sm:ml-10 md:ml-20 lg:ml-36">
            Blog Heading
          </h1>
        </div>
      </div>

      <div className="p-10 space-y-5">
        <h1 className="text-4xl">Heading</h1>

        <h1>
          A grid system is a design tool used to arrange content on a webpage.
          It is a series of vertical and horizontal lines that create a matrix
          of intersecting points, which can be used to align and organize page
          elements. Grid systems are used to create a consistent look and feel
          across a website, and can help to make the layout more visually
          appealing and easier to navigate.A grid system is a design tool used
          to arrange content on a webpage. It is a series of vertical and
          horizontal lines that create a matrix of intersecting points, which
          can be used to align and organize page elements. Grid systems are used
          to create a consistent look and feel across a website, and can help to
          make the layout more visually appealing and easier to navigate.A grid
          system is a design tool used to arrange content on a webpage. It is a
          series of vertical and horizontal lines that create a matrix of
          intersecting points, which can be used to align and organize page
          elements. Grid systems are used to create a consistent look and feel
          across a website, and can help to make the layout more visually
          appealing and easier to navigate.
        </h1>
      </div>

      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Blog Card 1 */}
        <div className="border-2 bg-slate-700">
          <img
            src={blog}
            alt="blog pic"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Blog Card 2 */}
        <div className=" bg-slate-700">
          <img
            src={blog}
            alt="blog pic"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Blog Card 3 */}
        <div className=" bg-slate-700">
          <img
            src={blog}
            alt="blog pic"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="p-10  space-y-5">
        <h1 className="text-4xl">Heading</h1>

        <h1>
          Regardless of the type of grid you are using, the grid is made up of
          three elements: columns, gutters, and margins.
          <br />
          <b>Columns :</b>
          take up most of the real estate in a grid. Elements and content are
          placed in columns. To adapt to any screen size, column widths are
          generally defined with percentages rather than fixed values and the
          number of columns will vary. For example, a grid on a mobile device
          might have 4 columns and a grid on a desktop might have 12 columns.
        </h1>
      </div>
      <div className="p-10 space-y-5">
        <h1 className="text-4xl">Benefits of the Grid</h1>

        <p>Using a grid benefits both end users and the designers alike:</p>
        <ul className="list-disc pl-5">
          <li>Designers can quickly put together well-aligned interfaces.</li>
        </ul>
        <ul className="list-disc pl-5">
          <li>Users can easily scan predictable grid-based interfaces</li>
        </ul>
        <ul className="list-disc pl-5">
          <li>
            A good grid is easy to adapt to various screen sizes and
            orientations. In fact, grid layouts are an essential component of
            responsive web design. Responsive design uses breakpoints to
            determine the screen size threshold at which the layout should
            change. For example, a desktop screen may have 12 grid columns,
            which may be stacked on mobile so that the resulting layout has only
            4 columns.
          </li>
        </ul>

        <div className="">
          <img
            src={ima}
            alt="blog pic"
            className="w-full h-auto object-cover"
          />
          <p className="py-10 text-2xl">
            Even more importantly, the grid is not a throw-away concept. It is
            used by both designers and developers alike. Be sure to communicate
            with your developers the grid structure used when creating the
            design, so they can implement it accordingly.
          </p>
        </div>
        <div className="">
          <h1 className=" text-2xl">
            <b>Choosing and Setting Up Your Grid</b>
          </h1>
          <p className="py-10 text-2xl">
            How you use and set up a grid is fundamental to creating well
            thought out layouts and experiences for your user.
          </p>
        </div>
      </div>

      <div className="px-5 md:px-10 flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
        <h1 className="text-4xl md:text-7xl text-center md:text-left">
          Related Blogs
        </h1>
        <button className="h-12 w-auto px-8  py-5 border-2 border-black rounded-full text-sm md:text-base inline-flex items-center gap-2">
          View All Blogs
          <span className="text-2xl font-bold ">→</span>
        </button>
      </div>

      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Blog Card 1 */}
        <div className="">
          <img src={c} alt="blog pic" className="w-full h-auto object-cover" />
          <p className="py-3 text-blue-600">Olivia Rhye • 1 Jan 2023</p>{" "}
          <div className="flex justify-between ">
            <h1 className=" text-[24px]">
              Understanding the Importance
              <br /> of CMAs in Real Estate
            </h1>
            <MdArrowOutward className="text-3xl" />
          </div>
          <p className="py-5 text-[#646e83]">
            How do you create compelling presentations that wow <br />
            your colleagues and impress your managers?
          </p>
        </div>

        {/* Blog Card 2 */}
        <div className=" ">
          <img src={m} alt="blog pic" className="w-full h-auto object-cover" />
          <p className="py-3 text-blue-600">Olivia Rhye • 1 Jan 2023</p>{" "}
          <div className="flex justify-between ">
            <h1 className=" text-[24px]">
              Understanding the Importance
              <br /> of CMAs in Real Estate
            </h1>
            <MdArrowOutward className="text-3xl" />
          </div>
          <p className="py-5 text-[#646e83]">
            How do you create compelling presentations that wow <br />
            your colleagues and impress your managers?
          </p>
        </div>

        {/* Blog Card 3 */}
        <div className="">
          <img src={f} alt="blog pic" className="w-full h-auto object-cover" />
          <p className="py-3 text-blue-600">Olivia Rhye • 1 Jan 2023</p>{" "}
          <div className="flex justify-between ">
            <h1 className=" text-[24px]">
              Understanding the Importance
              <br /> of CMAs in Real Estate
            </h1>
            <MdArrowOutward className="text-3xl" />
          </div>
          <p className="py-5 text-[#646e83]">
            How do you create compelling presentations that wow <br />
            your colleagues and impress your managers?
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Blog;
