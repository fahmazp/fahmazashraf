import { motion } from "framer-motion"
import { GitHubStarsButton } from "@/components/animate-ui/buttons/github-stars";
import TextSplitGithub from "@/components/animations/Text-split-animate/splitHeadingTxt_3";

const GitHubChart = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
            transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1], 
      }}
      viewport={{ once: true }}
      id="github"
      className="pt-2 sm:pt-8 pb-10 w-full flex flex-col items-center justify-center px-4 sm:px-6"
    >
      <h2 className="text-3xl font-semibold mb-4 text-center">
        <TextSplitGithub/>
      </h2>

      <div className="w-full overflow-x-auto lg:overflow-x-hidden">

        <div className="min-w-[700px] flex justify-center">
        <img
          src="https://ghchart.rshah.org/4a044e/fahmazp"
          alt="Contribution Chart"
          className="h-auto w-full max-w-5xl object-contain rounded-sm border-2 border-purple-600 dark:border-purple-500 shadow-lg p-2"
        />
      </div>

      </div>
      <div className="w-full pt-2 sm:ml-2">
        <p className="text-sm font-medium">250 contributions in the last year</p>
      </div>

      <GitHubStarsButton username="fahmazp"/>

    </motion.section>
  );
};

export default GitHubChart;
