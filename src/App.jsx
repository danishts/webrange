import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Service from "./Service";
import CaseStudies from "./CaseStudies";
import Blog from "./Blog";

import About from "./About";
import Casestudiesdetials from './Casestudiesdetials';
import Allblog from "./Allblog";
import Contacts from "./Contacts";
import Home from "./Home";
import Mobilebar from "./Mobilebar";



const App = () => {
  return (
    
    <Router>
      <Navbar />
      <Mobilebar/>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/casestudiesdetails" element={<Casestudiesdetials />} />
          <Route path="allblog" element={<Allblog />} />
          <Route path="/contacts" element={<Contacts />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;












// import React from 'react'
// import Newpage from './Newpage';
// import OurWork from './OurWork';
// import Overview from './Overview';

// const App = () => {
//   return (
//     <div>
//       <Newpage />
//       {/* <OurWork />
//       <Overview /> */}
//     </div>
//   );
// }

// export default App
