
// import { AnimatedTestimonialsDemo } from "@/components/Achievements"
// import { TimelineDemo } from "@/components/experience"

// import { SpotlightPreview } from "@/components/hero-section"
// import { CardHoverEffectDemo } from "@/components/projects"
// import { InfiniteMovingCardsDemo } from "@/components/skills"
// import { NavbarDemo } from "../components/floatingNavbar"


// export default function Home() {
//   return (
//     <>
//   <NavbarDemo />
//    <SpotlightPreview />
//    {/* <FloatingDockDemo /> */}
//    <TimelineDemo />
//    <CardHoverEffectDemo />
//    <InfiniteMovingCardsDemo />
//    <AnimatedTestimonialsDemo />
   
//      </>
//   )
// }


import { AnimatedTestimonialsDemo } from "@/components/Achievements";
import { TimelineDemo } from "@/components/experience";
import { SpotlightPreview } from "@/components/hero-section";
import { CardHoverEffectDemo } from "@/components/projects";
import { InfiniteMovingCardsDemo } from "@/components/skills";
import { NavbarDemo } from "../components/floatingNavbar";
import { ContactSection } from "@/components/contact";

export default function Home() {
  return (
    <>
      <NavbarDemo />
      <section id="home">
        <SpotlightPreview />
      </section>
      <section id="experience">
        <TimelineDemo />
      </section>
      <section id="projects">
        <CardHoverEffectDemo />
      </section>
      <section id="skills">
        <InfiniteMovingCardsDemo />
      </section>
      <section id="achievements">
        <AnimatedTestimonialsDemo />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
