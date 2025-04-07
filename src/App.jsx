import React from "react";
import NavBar from "./components/Navbar/NavBar.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Services from "./components/Services/Services.jsx";
import WorkProcess from "./components/WorkProcess/WorkProcess.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return(
  <>
  <div className="app">
     <NavBar />
     <AboutUs />
     <Services />
     <WorkProcess />
     <Testimonials />
     <Footer />
  </div>
  </>
  );
}

export default App;
