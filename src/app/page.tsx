
import { AnimatedTestimonialsDemo } from "@/components/Achievements"
import { TimelineDemo } from "@/components/experience"

import { SpotlightPreview } from "@/components/hero-section"
import { CardHoverEffectDemo } from "@/components/projects"
import { InfiniteMovingCardsDemo } from "@/components/skills"
import { NavbarDemo } from "../components/floatingNavbar"


export default function Home() {
  return (
    <>
  <NavbarDemo />
   <SpotlightPreview />
   {/* <FloatingDockDemo /> */}
   <TimelineDemo />
   <CardHoverEffectDemo />
   <InfiniteMovingCardsDemo />
   <AnimatedTestimonialsDemo />
   
     </>
  )
}