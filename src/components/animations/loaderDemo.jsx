import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function SpinnerSquare () {
  const [text, setText] = useState("");
  const fullText = "Loading...";
  const speed = 150;

useEffect(() => {
  let i = 0;
  let timeoutId;

  const type = () => {
    setText(fullText.slice(0, i));
    i++;

    // If finished typing, pause longer before resetting
    if (i > fullText.length) {
      timeoutId = setTimeout(() => {
        i = 0;
        type(); 
      }, 1200); 
    } else {
      timeoutId = setTimeout(type, speed);
    }
  };

  type();
  return () => clearTimeout(timeoutId);
}, []);


  return (
    <div className="flex justify-center items-center h-screen ">
      <motion.div
        className="relative text-3xl sm:text-4xl font-bold tracking-widest text-sky-400 glitch-text font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {text}
        <span className="animate-blink ml-1">|</span>
      </motion.div>
    </div>
  );
};

