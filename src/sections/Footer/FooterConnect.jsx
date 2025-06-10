import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function FooterConnect() {
  const controls = useAnimation();
  const svgRef = useRef(null);
  const isInView = useInView(svgRef, { once: true, margin: "0px 0px -50px 0px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
      filter: "blur(1px)",
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const paths = [
    "M625.324 20.9883V0.103516H708.574V20.9883H625.324ZM650.328 96V25.9746H683.57V96H650.328Z",
    "M545.904 96L526.682 76.8496V19.2539L545.904 0.103516H558.623V96H545.904ZM584.928 38.5488V19.2539H563.682V0.103516H597.719L616.869 19.2539V38.5488H584.928ZM563.682 96V76.8496H584.928V62.8301H616.869V76.8496L597.719 96H563.682Z",
    "M427.244 96V0.103516H459.186V38.1152H489.754V56.6152H459.186V96H427.244ZM484.117 27.8535V18.6758H464.244V0.103516H514.18V27.8535H484.117ZM464.244 96V76.8496H482.238V67.2383H514.18V96H464.244Z",
    "M377.814 96L319.713 0.103516H353.461L411.779 96H377.814ZM411.779 86.8945L383.957 41.0781V0.103516H411.779V86.8945ZM319.713 96V9.20898L347.535 54.8086V96H319.713Z",
    "M270.283 96L212.182 0.103516H245.93L304.248 96H270.283ZM304.248 86.8945L276.426 41.0781V0.103516H304.248V86.8945ZM212.182 96V9.20898L240.004 54.8086V96H212.182Z",
    "M153.213 96V76.4883H165.426V19.543H153.213V0.103516H178L197.367 19.2539V76.8496L178 96H153.213ZM123.584 96L104.145 76.8496V19.2539L123.584 0.103516H148.154V19.543H136.158V76.4883H148.154V96H123.584Z",
    "M19.2324 96L0.00976562 76.8496V19.2539L19.2324 0.103516H31.9512V96H19.2324ZM58.2559 38.5488V19.2539H37.0098V0.103516H71.0469L90.1973 19.2539V38.5488H58.2559ZM37.0098 96V76.8496H58.2559V62.8301H90.1973V76.8496L71.0469 96H37.0098Z",
  ];

  return (
    <div className="relative z-50 max-w-6xl mx-auto px-4 sm:px-6 pt-5 sm:pt-8 pb-3 text-black dark:text-white">
      <svg
        ref={svgRef}
        viewBox="0 0 719 96"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Animated stroke layer */}
        <motion.g
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          {[...paths].reverse().map((d, index) => (
            <motion.path
              key={`stroke-${index}`}
              d={d}
              variants={pathVariants}
            />
          ))}
        </motion.g>

        {/* Fill layer fades in after stroke animation */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ delay: paths.length * 0.15 + 0.3, duration: 0.6 }}
          fill="currentColor"
        >
          {[...paths].reverse().map((d, index) => (
            <path key={`fill-${index}`} d={d} />
          ))}
        </motion.g>
      </svg>
    </div>
  );
}
