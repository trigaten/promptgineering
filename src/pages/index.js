import "framer-motion";
import "./index.css";
import "./App.css";

import Banner from "../subsections/landingpage/Banner";
import Brand from '../subsections/landingpage/Brand';
import FAQ from "../subsections/landingpage/FAQ";
import Footer from "../components/Footer";
import GetStarted from "../subsections/landingpage/GetStarted";
import Hero from "../subsections/landingpage/Hero";
import Join from "../subsections/landingpage/Join";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Navbar from "../subsections/landingpage/Navbar";
import Newsletter from "../subsections/landingpage/Newsletter";
import React from "react";
import Team from "../subsections/landingpage/Team";
import Testimonials from "../subsections/landingpage/Testimonials";

function Home() {
  return (
    <>
      {/*<Banner />*/}
      <div className="bg-white">
        <Navbar allowSandwich="true"/>
        <Hero />
        <Join />
        {/* <Testimonials /> */}
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
