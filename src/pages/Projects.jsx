import { ScrollBasedVelocity } from "@/components/animations/marqueeText";
import TextSplitProj from "@/components/animations/Text-split-animate/splitHeadingTxt_4";
import { ProjectGrid } from "@/sections/ProjectGrid";

export default function Projects() {
  return (
    <div>
      <ScrollBasedVelocity/>
            {/* <h1 className="text-4xl font-bold mb-10 text-center">My<span className="bg-gradient-conic"> Projects</span></h1> */}
            <h1 className="text-4xl font-bold mb-10 text-center"><TextSplitProj/> </h1>
      <ProjectGrid />

    </div>
  )
}