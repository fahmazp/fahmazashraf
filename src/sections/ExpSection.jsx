import { ChevronRight } from "@/components/icon-animate/arrowIcon";
import { motion } from "framer-motion"
import React, { lazy, Suspense } from "react";

const IconCloudDemo = lazy(() =>
  import("@/components/animations/expIconCloud").then((mod) => ({
    default: mod.IconCloudDemo,
  }))
);

export function ExperienceSection() {
  return (

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-10 items-center ">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center sm:text-left">
            My <span className="bg-gradient-to-r from-sky-600 via-blue-700 to-lime-500 dark:from-sky-400 dark:via-cyan-600 dark:to-lime-400 bg-clip-text text-transparent">
              Experience
              </span>
          </h2>

          <div className="space-y-2 text-muted-foreground text-base">
            <p className="font-semibold text-black dark:text-white">
              Junior PHP Developer – Tapclone, Kochi
            </p>
            <p className="text-sm text-muted-foreground">Mar 2023 - Feb 2024</p>
            <ul className="list-none list-inside space-y-1 pt-2">
              <li className="flex items-center"><ChevronRight/> Built and maintained web apps using Core PHP, HTML, CSS, JS</li>
              <li className="flex items-center"><ChevronRight/> Worked with teams to bring client ideas to life</li>
              <li className="flex items-center"><ChevronRight/> Improved UX with responsive, mobile-friendly layouts</li>
            </ul>
          </div>
        </motion.div>

        <div className="flex justify-center">
        <Suspense fallback={<div className="text-sm text-muted-foreground">Loading icons...</div>}>
            <IconCloudDemo/>
        </Suspense>

        </div>
      </div>
   
  );
}
