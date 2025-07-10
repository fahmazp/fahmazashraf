import { motion } from "framer-motion"

export default function HeroShapeTri() {
  return (

    <motion.div
  animate={{ y: [0, -5, 0] }}
  transition={{ repeat: Infinity, duration: 4 }}
    className="absolute top-[300px] right-[80px] 
               sm:right-[180px]
               md:right-[240px]
               lg:top-[165px] lg:right-[340px] tri-shape">
        
    </motion.div>
  )
}