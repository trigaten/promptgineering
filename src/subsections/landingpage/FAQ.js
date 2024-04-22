import React from "react";
import ClassicPadding from "@site/src/components/layouts/ClassicPadding";
import { RxArrowTopRight } from "react-icons/rx";
import { FaBookOpen } from "react-icons/fa";
import { RiBracesFill, RiSuitcaseFill } from "react-icons/ri";
import { FiLayers } from "react-icons/fi";
import { TbCertificate } from "react-icons/tb";
import { BsPencilFill } from "react-icons/bs";
import BulletPoint from "@site/src/components/BulletPoint";

function FAQ() {
  const leftFaq = [
    {
      icon: (
        <FaBookOpen className="align-middle inline-block text-dark/500 text-xl" />
      ),
      header: "Is this course free?",
      subtitle:
        "Yes, it is completely free and open source. Everyone can access all the resources on our website for free.",
    },
    {
      icon: (
        <RiBracesFill className="align-middle inline-block text-dark/500 text-xl mt-1" />
      ),
      header: "Do I need to know how to code?",
      subtitle:
        "Not at all! The course is designed to be inclusive, catering to participants with or without a programming background.",
    },
    {
      icon: (
        <TbCertificate className="align-middle inline-block text-dark/500 text-2xl mt-1" />
      ),
      header: "Is learning AI genuinely beneficial? ",
      subtitle:
        "Absolutely. AI is a rapidly evolving field, and having this skill set will open doors for you in various industries.",
    },
  ];
  const rightFaq = [
    {
      icon: (
        <FiLayers className="align-middle inline-block text-dark/500 text-xl mt-1" />
      ),
      header: "Is experience in AI required?",
      subtitle:
        "No, it is not required! Our program will take you through the basics and advanced topics of Artificial Intelligence.",
    },
    {
      icon: (
        <RiSuitcaseFill className="align-middle inline-block text-dark/500 text-2xl mt-1" />
      ),
      header: "Will the course offer certificates?",
      subtitle:
        "We plan to release tutorials to teach you how to get AI certificates from Google, Microsoft and others.",
    },
    {
      icon: (
        <BsPencilFill className="align-middle inline-block text-dark/500 text-xl mt-1" />
      ),
      header: "Can I contribute to this project?",
      subtitle:
        "Yes, we are continually seeking contributors. For more details, Navigate to our website's bottom and click 'Contribute'",
    },
  ];
  return (
    <ClassicPadding className={"pb-24"}>
      <div
        id={"faq"}
        className="text-left md:text-center text-3xl md:text-5xl font-vietnam font-medium tracking-tighter  md:px-0 pt-6 md:pt-20"
      >
        <span style={{ color: "black" }}>Frequently Asked Questions</span>
      </div>
      <div className="text-left md:text-center text-default text-sm pt-2 font-vietnam font-light tracking-tight md:px-28 md:pt-4 md:text-md mb-4 md:mb-0 ">
        Can't find what you are looking for?{" "}
        <span className={"underline"}>
          <a
            href={"mailto:learnprompt2023@gmail.com"}
            className="underline"
            style={{ color: "grey" }}
          >
            {" "}
            Contact Us
            <span className="ml-1">
              <RxArrowTopRight
                className="inline-block text-default text-md mt-1"
                style={{ transform: "translateY(3px)" }}
              />
            </span>
          </a>
        </span>
      </div>

      <div className="flex flex-col md:flex-row justify-around pt-4 md:pt-20 gap-8 md:gap-24">
        <div
          className="gap-8 md:gap-12 flex-col flex"
          style={{ color: "black" }}
        >
          {leftFaq.map((faq, i) => (
            <BulletPoint
              key={i}
              icon={faq.icon}
              header={faq.header}
              subtitle={faq.subtitle}
            />
          ))}
        </div>
        <div
          className="gap-8 md:gap-12 flex-col flex"
          style={{ color: "black" }}
        >
          {rightFaq.map((faq, i) => (
            <BulletPoint
              key={i}
              icon={faq.icon}
              header={faq.header}
              subtitle={faq.subtitle}
            />
          ))}
        </div>
      </div>
    </ClassicPadding>
  );
}

export default FAQ;
