import { HeroText } from "@/sections/HeroSection";
import Navbar04Page from "../navbar-04/navbar-04";
import { FlickeringGridDemo } from "../animations/flickerGrid";
import { HeroAbout } from "@/sections/HeroAbout";
import SkillsGrid from "@/sections/TechSkills";
import { ScrollProgress } from "../magicui/scroll-progress";
import { ExperienceSection } from "@/sections/ExpSection";

const AppLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden scroll-smooth antialiased">

    <FlickeringGridDemo/>
      <ScrollProgress className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-gradient-to-r from-sky-400 to-lime-500" />
      <Navbar04Page/>

      <main className="relative z-10 w-full px-4 sm:px-6 md:px-8 pt-[110px] max-w-6xl mx-auto">{children}  
      
      <HeroText/>
    {/* main section without hero */}
      <div className="container mx-auto px-1.5 sm:px-6 pt-12" id="about">
        <HeroAbout/>
        <SkillsGrid/>
        <ExperienceSection/>
      </div>

      </main>
    </div>
  );
};

export default AppLayout;
