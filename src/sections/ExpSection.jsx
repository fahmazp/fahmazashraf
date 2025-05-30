// import { IconCloudDemo } from "@/components/animations/expIconCloud";
import { motion } from "motion/react"
import React, { lazy, Suspense } from "react";

const IconCloudDemo = lazy(() =>
  import("@/components/animations/expIconCloud").then((mod) => ({
    default: mod.IconCloudDemo,
  }))
);


export function ExperienceSection() {
  return (

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-10 items-center ">

        {/* Experience Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center sm:text-left">
            My <span className="text-sky-600 dark:text-sky-400">Experience</span>
          </h2>


          <div className="space-y-2 text-muted-foreground text-base">
            <p className="font-semibold text-black dark:text-white">
              Junior PHP Developer – Tapclone, Kochi
            </p>
            <p className="text-sm text-muted-foreground">Mar 2023 - Feb 2024</p>
            <ul className="list-disc list-inside space-y-1 pt-2">
              <li>Built and maintained web apps using Core PHP, HTML, CSS, JS</li>
              <li>Worked with teams to bring client ideas to life</li>
              <li>Improved UX with responsive, mobile-friendly layouts</li>
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
