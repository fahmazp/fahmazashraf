import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import { Send } from "lucide-react";
import { motion } from "motion/react"

export function AnimatedShinyTextDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}      
      whileInView={{ opacity: 1, y: 0 }}   
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="hidden sm:block z-10 absolute top-28 md:top-104"
    >
      <div
        className={cn(
          "group rounded-full border-2 border-zinc-400 bg-white text-sm text-white transition-all ease-in hover:cursor-pointer hover:bg-gray-100 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >

        <a href="mailto:fahmazashraf7@gmail.com">
        <AnimatedShinyText className="inline-flex items-center justify-center px-3.5 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-200">
          <span className="font-semibold urbanist-font capitalize">Get in touch</span>
          <Send color="#385db2" className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
        </a>


      </div>
    </motion.div>
  );
}
