import ClassicPadding from "./layouts/ClassicPadding";
import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

function Footer() {
  const rightLinks = [
    {
      name: "Discord",
      link: "https://discord.gg/w6ZjEc2g",
    },
    {
      name: "GitHub",
      link: "https://github.com/LearnPrompt/LearnPrompt",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/aiwarts",
    },
    {
      name: "Multimedia",
      link: "/multimedia",
    },
    {
      name: "Contact",
      link: "mailto:learnprompt2023@gmail.com",
    },
  ];

  return (
    <ClassicPadding className="bg-gray-100 py-12 sm:py-16 border-t-[gray/200] border flex flex-col sm:flex-row justify-between font-vietnam tracking-tight text-default">
      <div className="hidden sm:flex">© 2023 Learn Prompt. Built with aiwarts.</div>
      <div className="flex gap-4">
        {rightLinks.map((link, idx) => (
          <div
            className="flex items-center text-default hover:text-dark/500"
            key={idx}
          >
            <a
              href={link.link}
              className="transition-all mr-1 font-vietnam tracking-tight"
              style={{ color: "black" }}
            >
              {link.name}
            </a>
            <RxArrowTopRight className="inline-block" />
          </div>
        ))}
      </div>
      <div className="flex sm:hidden mt-4 sm:mt-0">© 2023 Learn Prompt. Built with aiwarts.</div>
    </ClassicPadding>
  );
}

export default Footer;
