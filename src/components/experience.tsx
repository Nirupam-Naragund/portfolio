import React from "react";
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "April 2025 – Present",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Research Intern at IISc, IMPACT4IMPACT Lab. Worked on Human-Human-Robot Interaction, improving coordination efficiency by 25%. Integrated LLMs, TTS, and STT for sub-1.5s real-time communication.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/iisc-robotics.jpg" // Replace with your actual image path
              alt="Social Robotics"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/images/hri-lab.jpg" // Replace with your actual image path
              alt="Human Robot Interaction"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "August – November 2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Frontend Developer Intern at StarX91. Built landing pages using Next.js and Aceternity UI, improved mobile UX by 40%, and increased conversions by 15%.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/starx91-1.png"
              alt="Landing Page"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/images/starx91-2.png"
              alt="SaaS Product Page"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "March – July 2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Freelance project: Built a finance management platform using Next.js and MongoDB to handle 100+ loan accounts and reduce manual processes by 90%.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/finance-app-1.png"
              alt="Finance Dashboard"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="/images/finance-app-2.png"
              alt="Loan Tracker"
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    }
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
