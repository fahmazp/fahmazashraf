import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import { ArrowRight } from "lucide-react";

export function AnimatedShinyTextDemo() {
  return (
    <div className="z-10 absolute top-[4%] md:top-25">
      <div
        className={cn(
          "group rounded-full border border-zinc-400 bg-white text-sm text-white transition-all ease-in hover:cursor-pointer hover:bg-gray-100 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-3 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-200">
          <span className="font-semibold">✨ Welcome to my universe</span>
          <ArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
  );
}
