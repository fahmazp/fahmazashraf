import { motion } from "framer-motion";

export function AbstractShape() {

  return (

    <motion.img src="/Cs-ellipse.svg" 
    className="w-6 h-6 md:w-7 md:h-7 absolute top-[540px] max-md:left-[266px] md:top-[400px] md:right-[380px]"
    animate={{
    rotate: 360,
    scale: [1, 1.1, 1],
  }}
  transition={{
    rotate: {
      repeat: Infinity,
      duration: 6,
      ease: "linear",
    },
    scale: {
      repeat: Infinity,
      duration: 3,
      ease: "easeInOut",
    },
  }}
    alt="" />
  );
}