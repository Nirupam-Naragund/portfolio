// import React from "react";
// import { Timeline } from "./ui/timeline";

// export function TimelineDemo() {
//   const data = [
//     {
//       title: "April 2025 – Present",
//       content: (
//         <div>
//           <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
//             Research Intern at IISc, IMPACT4IMPACT Lab. Worked on Human-Human-Robot Interaction, improving coordination efficiency by 25%. Integrated LLMs, TTS, and STT for sub-1.5s real-time communication.
//           </p>
//           <div className="grid grid-cols-2 gap-4">
//             <img
//               src="/images/iisc-robotics.jpg" // Replace with your actual image path
//               alt="Social Robotics"
//               className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
//             />
//             <img
//               src="/images/hri-lab.jpg" // Replace with your actual image path
//               alt="Human Robot Interaction"
//               className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
//             />
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "August – November 2024",
//       content: (
//         <div>
//           <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
//             Frontend Developer Intern at StarX91. Built landing pages using Next.js and Aceternity UI, improved mobile UX by 40%, and increased conversions by 15%.
//           </p>
//           <div className="grid grid-cols-2 gap-4">
//             <img
//               src="/images/starx91-1.png"
//               alt="Landing Page"
//               className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
//             />
//             <img
//               src="/images/starx91-2.png"
//               alt="SaaS Product Page"
//               className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
//             />
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "March – July 2024",
//       content: (
//         <div>
//           <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
//             Freelance project: Built a finance management platform using Next.js and MongoDB to handle 100+ loan accounts and reduce manual processes by 90%.
//           </p>
//           <div className="grid grid-cols-2 gap-4">
//             <img
//               src="/images/finance-app-1.png"
//               alt="Finance Dashboard"
//               className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
//             />
//             <img
//               src="/images/finance-app-2.png"
//               alt="Loan Tracker"
//               className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
//             />
//           </div>
//         </div>
//       ),
//     }
//   ];

//   return (
//     <div className="relative w-full overflow-clip">
//       <Timeline data={data} />
//     </div>
//   );
// }


import React from "react";
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "April 2025 – Present",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              Research Intern - IISc, IMPACT4IMPACT Lab
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
              Bangalore, India
            </p>
            <p className="text-sm text-neutral-800 dark:text-neutral-200 mb-4 leading-relaxed">
              Conducting cutting-edge research in Human-Human-Robot Interaction, focusing on improving coordination efficiency in collaborative environments. Successfully enhanced team coordination by 25% through innovative interaction protocols.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-md font-medium text-neutral-800 dark:text-neutral-200">Key Achievements:</h4>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Integrated Large Language Models (LLMs) with Text-to-Speech (TTS) and Speech-to-Text (STT) systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Achieved sub-1.5 second real-time communication latency in human-robot interactions</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Designing and testing interaction workflows to improve coordination of multi-agent robotic systems</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">AI/ML</span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">Robotics</span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs">NLP</span>
            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-xs">Python</span>
          </div>
        </div>
      ),
    },
    {
      title: "August – November 2024",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              Frontend Developer Intern - StarX91
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
              Remote
            </p>
            <p className="text-sm text-neutral-800 dark:text-neutral-200 mb-4 leading-relaxed">
              Spearheaded frontend development initiatives, creating high-performance landing pages and user interfaces that significantly improved user experience and business metrics.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-md font-medium text-neutral-800 dark:text-neutral-200">Key Achievements:</h4>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Built responsive landing pages using Next.js and Aceternity UI components</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Improved mobile user experience by 40% through responsive design optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Increased conversion rates by 15% through strategic UX/UI improvements</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Collaborated with design team to implement pixel-perfect interfaces</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Optimized website performance achieving 95+ Lighthouse scores</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">Next.js</span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">React</span>
            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-xs">Tailwind CSS</span>
          </div>
        </div>
      ),
    },
    {
      title: "March – July 2024",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              Full-Stack Developer - Freelance Project
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
              Remote
            </p>
            <p className="text-sm text-neutral-800 dark:text-neutral-200 mb-4 leading-relaxed">
              Developed a comprehensive finance management platform for a lending institution, streamlining loan processing and account management through innovative digital solutions.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-md font-medium text-neutral-800 dark:text-neutral-200">Key Achievements:</h4>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Built scalable finance management platform using Next.js and MongoDB</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Successfully managed 100+ loan accounts with automated tracking systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Reduced manual processing time by 90% through intelligent automation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Implemented secure authentication and role-based access control</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Designed intuitive dashboard for real-time financial analytics</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">Next.js</span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">MongoDB</span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs">Node.js</span>
            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-xs">Authentication</span>
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
