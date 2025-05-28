import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { useRef } from "react";
import { motion, useInView } from "motion/react"

const skills = [
  { image: <img src="/skillicons/jssvg-1.svg" className="size-18 md:size-16 dark:invert" alt="JavaScript"  /> },
  { image: <img src="/skillicons/react-svgrepo-com.svg" className="size-18 md:size-16 dark:invert" alt="Reactjs" /> },
  { image: <img src="/skillicons/mongo-svgrepo-com.svg" className="size-18 md:size-16" alt="MongoDB"  />  },
  { image: <img src="/skillicons/nodejs-1-logo-svgrepo-com.svg" className="size-18 md:size-16 dark:invert-10" alt="Node" /> },
  { image: <img src="/skillicons/express-svgrepo-com.svg" className="size-18 md:size-16 dark:invert" alt="express"  /> },
  { image: <img src="/skillicons/html5-01-svgrepo-com.svg" className="size-18 md:size-16 dark:invert" alt="Html5"  /> },
  { image: <img src="/skillicons/tailwind-css-svgrepo-com.svg" className="size-18 md:size-16 dark:invert" alt="Tailwind"  /> },
  { image: <img src="/skillicons/icons8-git.svg" className="size-18 md:size-16 dark:invert" alt="Git"  /> },
  { image: <img src="/skillicons/icons8-php-logo.svg" className="size-18 md:size-16 dark:invert" alt="Php"  /> },
  { image: <img src="/skillicons/icons8-mysql-logo.svg" className="size-18 md:size-16 dark:invert" alt="Mysql"  /> },
  { image: <img src="/skillicons/icons8-css3.svg" className="size-18 md:size-16 dark:invert" alt="Css3"  /> },
  { image: <img src="/skillicons/icons8-bootstrap.svg" className="size-18 md:size-16 dark:invert" alt="Bootstrap"  /> },
  { image: <img src="/skillicons/shadcn-ui.svg" className="size-18 md:size-16 dark:invert" alt="Shadcn"  /> },
];

const tools = [
    { image: <img src="/skillicons/vscode.svg" className="size-18 md:size-16 " /> },
    { image: <img src="/skillicons/postman.svg" className="size-18 md:size-16 " /> },
    { image: <img src="/skillicons/icons8-figma.svg" className="size-18 md:size-16 " /> },
    { image: <img src="/skillicons/vercel_wordmark.svg" className="size-18 md:size-16 dark:invert" /> },  
];

export default function SkillsGrid() {

  const skillsRef = useRef(null);
  const toolsRef = useRef(null);

  const isSkillsInView = useInView(skillsRef, {
    once: true,
    amount: 0.3,
  });

  const isToolsInView = useInView(toolsRef, {
    once: true,
    amount: 0.3,
  });

  return (

  <section className="py-12">

    <motion.div
      ref={skillsRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
      transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1], 
      }}
    >

      <h2 className="text-3xl font-bold text-center mb-4 md:mb-8">
        Professional <span className="text-sky-600 dark:text-sky-400">Skillset</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-7 max-w-6xl mx-auto px-4 pb-10 md:pb-14">
      {skills.map((skill, idx) => (
     <Card
      key={idx}
      className={cn(
      "relative flex items-center justify-center md:h-28 bg-transparent border-[1.5px] border-sky-500 text-white",
      "rounded-sm bg-white/50 dark:bg-zinc-950/50",
      "shadow-md transition-transform duration-300 ease-in-out",
      "hover:scale-105 hover:shadow-[0_0_12px_2px_rgba(14,165,233,0.4)] hover:border-sky-300",
      "sm:shadow-none"
      )}
      >
    <CardContent className="flex items-center justify-center w-28 h-full">
      {skill.image}

    </CardContent>
    <BorderBeam 
      duration={6} 
      size={120} 
      className="from-transparent via-red-500 to-transparent"
    />
    <BorderBeam
        duration={6}
        delay={4}
        size={120}
        className="from-transparent via-green-500 to-transparent"
      />
      </Card>
        ))}
      </div>
    </motion.div>


      <motion.div
        ref={toolsRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isToolsInView ? { opacity: 1, scale: 1 } : {}}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.1,
        }}
      >
      <h2 className="text-3xl font-bold text-center mb-4 md:mb-8">
        <span className="text-purple-600 dark:text-fuchsia-400">Tools</span> I use
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-7 max-w-6xl mx-auto px-4">
        {tools.map((tool, idx) => (
          <Card
            key={idx}
            className={cn(
              "relative flex items-center justify-center md:h-28 bg-transparent border-[1.5px] border-purple-600 text-white",
               "rounded-sm bg-white/50 dark:bg-zinc-950/50",
               "shadow-md transition-transform duration-300 ease-in-out",
               "hover:scale-105 hover:shadow-[0_0_12px_2px_rgba(168,85,247,0.5)] hover:border-purple-400",
               "sm:shadow-none"
            )}
          >
            <CardContent className="flex items-center justify-center w-28 h-full">
            {tool.image}
            </CardContent>

          <BorderBeam 
            duration={6} 
            size={120} 
            className="from-transparent via-blue-400 to-transparent"
          />
          <BorderBeam
              duration={6}
              delay={4}
              size={120}
              className="from-transparent via-orange-500 to-transparent"
          />            
            
          </Card>
        ))}
      </div>
      </motion.div>

    </section>

  );
}
