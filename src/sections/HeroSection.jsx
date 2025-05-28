import HeroSvg from "@/components/animations/svgIllustration";
import { HeroTextReveal } from "@/components/animations/textReveal";
import { AnimatedShinyTextDemo } from "@/components/animations/shinyText";
import { AvailablePulse } from "@/components/animations/availablePulse";

export function HeroText() {
  return (
    <div className="mt-3 mb-2 md:mb-5 px-4 py-14 md:py-10 max-w-screen-xl mx-auto" id="hero">

      <AnimatedShinyTextDemo/>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <HeroTextReveal/>
        
        <HeroSvg/>
        <AvailablePulse/>
      </div>
    </div>
  )
}