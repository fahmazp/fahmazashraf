import React from "react";
import { ThumbsUpIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const thumbVariants = {
  initial: { scale: 1 },
  liked: { scale: [1, 1.4, 1], transition: { duration: 0.4 } },
  tap: { scale: 0.8 },
};

const countVariants = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0 },
};

const LikeButton = React.forwardRef((props, ref) => {
  const {
    className,
    initialCount = 32,
    initialLiked = false,
    label = "Like",
    onLikeChange,
    ...restProps
  } = props;

  const [liked, setLiked] = React.useState(initialLiked);
  const [count, setCount] = React.useState(initialCount);

  const handleLike = () => {
    const newLiked = !liked;
    const newCount = count + (newLiked ? 1 : -1);

    setLiked(newLiked);
    setCount(newCount);

    if (onLikeChange) {
      onLikeChange(newLiked, newCount);
    }
  };

  return (
    <Button
      ref={ref}
      className={cn("py-0 pe-0 overflow-hidden rounded gap-1", className)}
      variant="outline"
      onClick={handleLike}
      type="button"
      {...restProps}
    >
      <motion.div
        variants={thumbVariants}
        initial="initial"
        animate={liked ? "liked" : "initial"}
        whileTap="tap"
      >
        <ThumbsUpIcon
          className={cn(
            "transition-all duration-300",
            liked ? "text-blue-500 fill-blue-500" : "opacity-60"
          )}
          size={16}
          aria-hidden="true"
        />
      </motion.div>
      <span className="ml-1.5">{label}</span>
      <span className="relative inline-flex items-center justify-center h-full px-2 text-xs font-medium rounded-full text-muted-foreground before:absolute before:inset-0 before:w-px before:bg-border ms-1">
        <AnimatePresence mode="wait">
          <motion.span
            key={count}
            variants={countVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.2 }}
          >
            {count}
          </motion.span>
        </AnimatePresence>
      </span>
    </Button>
  );
});

LikeButton.displayName = "LikeButton";

export { LikeButton };