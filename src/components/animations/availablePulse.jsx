import { motion } from "framer-motion"
import { Code, CodeXml } from "lucide-react";

export function AvailablePulse() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="z-10 flex items-center gap-2 md:absolute md:right-48 md:top-[440px] justify-center"
    >
      <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1.5 shadow-sm border md:text-base text-muted-foreground dark:bg-stone-900/60 dark:text-white ring-1 ring-lime-500/40 dark:ring-lime-300/30 ring-inset">


      <Code className="w-3 h-3 animate-aurora"/>
        <span className="text-sm urbanist-font">Available for work</span>

        {/* Ping Dot */}
        <span className="relative flex h-3 w-3">
          {/* Glowing ring */}
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
          {/* Solid dot */}
          <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-600 shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
        </span>
        
      </div>
    </motion.div>
  );
}
