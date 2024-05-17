import "../../pages/index.css";

import React, { useEffect, useMemo } from "react";

import AgentMobile from "@site/static/img/agentmobile.webp";
import AgentWeb from "@site/static/img/agentweb.webp";
import AudioMobile from "@site/static/img/audiomobile.webp";
import AudioWeb from "@site/static/img/audioweb.webp";
import Button from "@site/src/components/Button";
import ButtonField from "@site/src/components/ButtonField";
import GptMobile from "@site/static/img/gptmobile.webp";
import GptWeb from "@site/static/img/gptweb.webp";
import HeygenMobile from "@site/static/img/heygenmobile.webp";
import HeygenWeb from "@site/static/img/heygenweb.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LlmMobile from "@site/static/img/llmmobile.webp";
import LlmWeb from "@site/static/img/llmweb.webp";
import MjMobile from "@site/static/img/mjmobile.webp";
import MjWeb from "@site/static/img/mjweb.webp";
import RunwayMobile from "@site/static/img/runwaymobile.webp";
import RunwayWeb from "@site/static/img/runwayweb.webp";
import { RxArrowTopRight } from "react-icons/rx";
import SdMobile from "@site/static/img/sdmobile.webp";
import SdWeb from "@site/static/img/sdweb.webp";

// import BeginnerWeb from "@site/static/img/beginnerweb.webp";
// import IntermediateWeb from "@site/static/img/intermediateweb.webp";
// import AdvancedWeb from "@site/static/img/advancedweb.webp";
// import ApplicationsWeb from "@site/static/img/applicationsweb.webp";

// import BeginnerMobile from "@site/static/img/beginnermobile.webp";
// import IntermediateMobile from "@site/static/img/intermediatemobile.webp";
// import AdvancedMobile from "@site/static/img/advancedmobile.webp";
// import ApplicationsMobile from "@site/static/img/applicationsmobile.webp";

function Hero() {
  const categories = ["ChatGPT", "Midjourney", "Runway", "Agents"];
  const categories2 = [
    "OpenLLM",
    "StableDiffusion",
    "DigitalHuman",
    "AI Audio",
  ];

  const [activeCategory, setActiveCategory] = React.useState("ChatGPT");

  const x_pos = React.useMemo(() => {
    switch (activeCategory) {
      case "ChatGPT":
        return "left-1";
      case "Midjourney":
        return "left-2";
      case "Runway":
        return "left-3";
      case "Agents":
        return "left-4";
      case "OpenLLM":
        return "left-5";
      case "StableDiffusion":
        return "left-6";
      case "DigitalHuman":
        return "left-7";
      case "AI Audio":
        return "left-8";
    }
  }, [activeCategory]);

  const x_pos_mob = React.useMemo(() => {
    switch (activeCategory) {
      case "ChatGPT":
        return "left-1-mobile";
      case "Midjourney":
        return "left-2-mobile";
      case "Runway":
        return "left-3-mobile";
      case "Agents":
        return "left-4-mobile";
      case "OpenLLM":
        return "left-5-mobile";
      case "StableDiffusion":
        return "left-6-mobile";
      case "DigitalHuman":
        return "left-7-mobile";
      case "AI Audio":
        return "left-8-mobile";
    }
  }, [activeCategory]);

  return (
    <div style={{ maxWidth: "100vw", overflow: "hidden", marginTop: "70px" }}>
      <div className={"pb-10 px-4 md:px-20 lg:px-56 2xl:px-96"}>
        <div
          className="text-center text-3xl md:text-7xl font-vietnam md:font-medium font-semibold tracking-tighter lg:px-8 2xl:px-32 pt-8"
          style={{ color: "black" }}
        >
          <span
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 md:text-6xl text-5xl"
            style={{
              backgroundImage:
                "linear-gradient(to bottom right, rgb(36,5,80), rgb(108,75,150), rgb(213,189,237))",
            }}
          >
            Your CookBook to Communicating with AI
          </span>
        </div>
        <div className="text-center text-default text-sm font-vietnam font-light tracking-wide px-4 md:px-10 lg:px-20 xl:px-60 pt-8">
          Be a pro at ChatGPT and other AI tools with our open-source
          curriculum! Kickstart your free learning journey today! 🥳🎉
        </div>
        <div className="flex items-center justify-center pt-6">
          <a href="https://learnprompt.pro/docs/intro">
            {/* <a href="https://learn-prompting.webflow.io"> */}
            <Button
              onClick={() =>
                React.useEffect(() => {
                  window.location.replace("/docs/intro");
                }, [])
              }
              text={"Start Learning"}
              // text={"See our Latest Offerings"}
              icon={
                <RxArrowTopRight
                  className="inline-block text-white"
                  style={{ verticalAlign: "middle" }}
                />
              }
            />
          </a>
        </div>
        <div className="flex flex-col items-center pt-16 z-10 overflow-hidden md:overflow-visible">
          <div
            className="flex flex-row flex-wrap gap-4 md:gap-4 justify-center z-[2]"
            style={{ color: "black" }}
          >
            {categories.map((category, i) => (
              <ButtonField
                key={i}
                text={category}
                isActive={category == activeCategory}
                onClick={() => setActiveCategory(category)}
                customStyle={
                  category === "StableDiffusion"
                    ? "bg-yellow-500"
                    : category === "Runway"
                    ? "bg-red-500"
                    : category === "Agents"
                    ? "bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500"
                    : ""
                }
              />
            ))}
          </div>
          <div
            className="flex flex-row flex-wrap gap-4 md:gap-4 justify-center z-[2] mt-5"
            style={{ color: "black" }}
          >
            {categories2.map((category, i) => (
              <ButtonField
                key={i}
                text={category}
                isActive={category == activeCategory}
                onClick={() => setActiveCategory(category)}
                customStyle={
                  category === "OpenLLM"
                    ? "bg-yellow-500"
                    : category === "DigitalHuman"
                    ? "bg-red-500"
                    : category === "AI Audio"
                    ? "bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500"
                    : ""
                }
              />
            ))}
          </div>
          <div className="relative hidden md:flex web_lazy">
            <div
              className={`mt-[-25px] top-0 hidden md:flex border-black transition-all ${x_pos}`}
            >
              <img src={GptWeb} alt="Beginner Web" />
              <img src={MjWeb} alt="Intermediate Web" />
              <img src={RunwayWeb} alt="Advanced Web" />
              <LazyLoadImage src={AgentWeb} alt="Applications Web" />
              <img src={LlmWeb} alt="Beginner Web" />
              <img src={SdWeb} alt="Intermediate Web" />
              <img src={HeygenWeb} alt="Advanced Web" />
              <LazyLoadImage src={AudioWeb} alt="Applications Web" />
            </div>
          </div>

          <div className="relative  md:hidden flex mobile_lazy">
            <div
              className={
                "left-0 top-0 h-full flex flex-row transition-all " + x_pos_mob
              }
            >
              <img src={GptMobile} alt="Beginner Mobile" width={"100%"} />
              <img src={MjMobile} alt="Intermediate Mobile" />
              <img src={RunwayMobile} alt="Advanced Mobile" />
              <LazyLoadImage src={AgentMobile} alt="Applications Mobile" />
              <img src={LlmMobile} alt="Beginner Mobile" width={"100%"} />
              <img src={SdMobile} alt="Intermediate Mobile" />
              <img src={HeygenMobile} alt="Advanced Mobile" />
              <LazyLoadImage src={AudioMobile} alt="Applications Mobile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
