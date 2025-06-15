import React, { useState, useCallback, forwardRef } from "react";
import { StarIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function StarButton({ href = "#", label = "Star", initialStarred = false, className }) {
  const [starred, setStarred] = useState(initialStarred);

  const starVariants = {
    initial: { scale: 1, rotate: 0 },
    starred: {
      scale: [1, 1.3, 1],
      rotate: [0, 15, 0],
      transition: { duration: 0.4 },
    },
    tap: { scale: 0.9 },
  };

  const handleClick = () => {
    setStarred(true); // Just for fun animation
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-sm font-medium transition b hover:bg-gray-100 dark:hover:bg-neutral-800 dark:border-white/10 dark:text-white",
        className
      )}
    >
      <motion.div
        variants={starVariants}
        initial="initial"
        animate={starred ? "starred" : "initial"}
        whileTap="tap"
      >
        <StarIcon
          className={cn(
            "transition-colors duration-300",
            starred ? "text-yellow-400 fill-yellow-400" : "opacity-60"
          )}
          size={16}
          aria-hidden="true"
        />
      </motion.div>
      <span>{label}</span>
    </a>
  );
}