import { useRef } from "react";
import { motion, useInView } from "motion/react"
import { AvatarTilt } from "@/components/animations/TiltAnimation";

export function HeroAbout() {

 const ref = useRef(null);
 const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (

    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="mt-2 md:mt-5 text-foreground"
      >

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-center">
        
        <div className="lg:col-span-7 space-y-5">
          <h1 className="font-semibold text-[38px] mb-3 leading-10 text-center">
            LET ME <span className="text-sky-700 dark:text-sky-400">INTRODUCE MYSELF</span>
          </h1>

            <div className="pt-8">
            <p className="text-lg leading-relaxed text-muted-foreground  mb-3.5">
              My journey into programming started out of pure curiosity — and somehow, I never looked back.  
              I've definitely learned something, I think...
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5 inline">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                </svg>
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-3.5">
              I've worked with languages like <span className="text-blue-800 dark:text-indigo-300 font-semibold italic">JavaScript</span> and <span className="text-blue-800 dark:text-indigo-300 font-semibold italic">Core PHP</span>.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-3.5">
              My tech stack is mainly the <span className="text-blue-800 dark:text-indigo-300 font-semibold italic">MERN (MongoDB, Express.js, React.js, Node.js)</span> — and I focus on creating scalable, full-stack web applications with solid architecture and clean UI.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-3.5">
                Whether it's frontend magic or backend logic, I'm all about crafting experiences that actually make sense for users.
              {/* I aim to build solutions that are not just functional, but also intuitive and efficient. */}
            </p>
            </div>

        </div>

        <div className="lg:col-span-3 order-2 flex justify-center">
          <div className="w-[200px] sm:w-[250px] lg:w-full">
            <AvatarTilt/>
          </div>
        </div>

      </div>


    </motion.section>
  )
}