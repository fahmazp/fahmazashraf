import { motion } from "framer-motion";

export default function HeroShapeHex() {
  return (
     <motion.img
    className="absolute top-[700px] md:top-[400px] md:left-[220px] w-7 h-7 object-contain rotate-45" src="/blob-haikei.svg" 
    animate={{ y: [0, -8, 0] }}
    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
    alt="blob"
      />
  );
}