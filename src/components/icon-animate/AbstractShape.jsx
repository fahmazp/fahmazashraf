import { motion } from "framer-motion";

export function AbstractShape() {

  return (

    <motion.img src="/Cs-ellipse.svg" 
    className="w-6 h-6 md:w-8 md:h-8 absolute top-[700px] left-10 md:top-[460px] md:left-[100px] rounded-full object-contain"
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