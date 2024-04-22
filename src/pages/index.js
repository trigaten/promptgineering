import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "framer-motion";
import "./index.css";
import "./App.css";
import Navbar from "../subsections/landingpage/Navbar";
import Hero from "../subsections/landingpage/Hero";
import Join from "../subsections/landingpage/Join";
import FAQ from "../subsections/landingpage/FAQ";
import Newsletter from "../subsections/landingpage/Newsletter";
import GetStarted from "../subsections/landingpage/GetStarted";
import Footer from "../components/Footer";
import Banner from "../subsections/landingpage/Banner";

import Brand from '../subsections/landingpage/Brand';
import Testimonials from "../subsections/landingpage/Testimonials";
import Team from "../subsections/landingpage/Team";

function Home() {
  return (
    <>
      {/*<Banner />*/}
      <div className="bg-white">
        <Navbar allowSandwich="true"/>
        <Hero />
        <Join />
        <Testimonials />
        <FAQ />
        <Team />
        <Newsletter />
        <Brand />
        <GetStarted />
        <Footer />
      </div>
    </>
  );
}

export default Home;
