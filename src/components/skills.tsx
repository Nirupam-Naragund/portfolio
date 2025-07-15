"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  const skills = [
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      alt: "Python",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      alt: "C++",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      alt: "React.js",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
      alt: "Next.js",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      alt: "Node.js",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      alt: "Express.js",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      alt: "MongoDB",
    },
    
    {
      image:
        "https://avatars.githubusercontent.com/u/115092149?s=200&v=4",
      alt: "LangChain",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
      alt: "GitHub",
    },
    {
  image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  alt: "HTML",
}
,
{
  image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  alt: "CSS",
}

  ];

  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h2 className="text-5xl font-bold mb-8 text-center">
            Skills
        </h2>
      <InfiniteMovingCards items={skills} direction="right" speed="slow" />
    </div>
  );
}
