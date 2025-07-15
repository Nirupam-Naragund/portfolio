import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Finalist in Smart India Hackathon 2024 for developing LexiFIR, an AI-powered legal assistant that improved FIR accuracy and reduced drafting time by 60%.",
      name: "Smart India Hackathon",
      designation: "National-Level Finalist (Top 5 of 500 teams)",
      src: "/images/sih.jpg",
    },
    {
      quote:
        "Secured 2nd place at NMIT Hacks 2024 by building a real-time collaborative AI tool, optimizing interaction between users and systems.",
      name: "NMIT Hacks",
      designation: "2nd Place Winner",
      src: "/images/nmit-hacks.jpg",
    }
    , {
    quote:
      "Built CodeSprint website for Aanadyanta, the flagship college fest. Scaled to 100+ concurrent users with efficient APIs, built using Next.js and MongoDB.",
    name: "Aanadyanta CodeSprint",
    designation: "Full Stack Developer – Next.js, MongoDB",
    src: "/images/codesprint.png", // Place in public/images/codesprint.jpg
  }
  ];

  return (
        <div className="px-4 py-12 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6">
        Achievements
      </h2>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
)
}
