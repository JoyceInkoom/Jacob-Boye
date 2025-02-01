import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import Prophecies from "../components/PropheciesPage";
import Gallery from "../components/Gallery";
import Prayer from "../components/Projects";

const LandingPage = () => {
  useEffect(() => {
    // Remove margin/padding from body and html
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Prayer />
      <Gallery />
      <Prophecies />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
