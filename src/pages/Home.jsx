import { HeroText } from "@/sections/HeroSection";
import { HeroAbout } from "@/sections/HeroAbout";
import SkillsGrid from "@/sections/TechSkills";
import { ExperienceSection } from "@/sections/ExpSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GitHubChart from "@/sections/GithubCode";

export default function Home() {

  const location = useLocation();

  useEffect(() => {
    const scrollToId = location.state?.scrollToId;

    if (scrollToId) {
      const el = document.getElementById(scrollToId);
      if (el) {
        // Delay slightly to make sure DOM is ready
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.state]);


  return (
    <>
        <HeroText/>
    
        <div className="container mx-auto px-1.5 sm:px-6 pt-12" id="about">
          <HeroAbout/>
          <SkillsGrid/>
          <ExperienceSection/>
        </div>

            <GitHubChart/>
            <div id="contact">
              <p>Contact</p>
            </div>
          
    </>
  )
}