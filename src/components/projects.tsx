import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">
            Project Highlights
        </h2>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "LexiFIR",
    description:
      "An AI-powered legal assistant built using CrewAI and Flask. Reduced FIR drafting time by 60% and improved IPC section accuracy by 70%.",
    link: "https://github.com/imksprateek/LexiFIR",
  },
  {
    title: "DevDeck",
    description:
      "A personalized developer dashboard built with Next.js, Tailwind CSS, and LangChain. Tracks GitHub issues, PRs, todos, and includes an AI assistant.",
    link: "https://github.com/Nirupam-Naragund", // You can change this to a specific repo if hosted
  },
  {
    title: "Finance Management System (Freelanced)",
    description:
      "A full-stack platform for managing 100+ loans with real-time tracking using MongoDB, Next.js, and secured user access control.",
    link: "https://github.com/Nirupam-Naragund", // Replace with exact project repo link
  },
  {
    title: "StarX91 SaaS UI",
    description:
      "Built responsive landing and product pages for a SaaS platform using Next.js, Tailwind, and Aceternity UI. Improved mobile UX by 40%.",
    link: "#", // Private project or internship-based — add link if available
  },
  {
    title: "IISc Social Robotics",
    description:
      "Worked on human-human-robot interaction at IISc using LLMs, TTS/STT, and real-time communication systems under PhD mentorship.",
    link: "#", // Research, no public repo — add link if available
  },
];
