import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export function TypingLoop() {
  const [textColor, setTextColor] = useState("text-sky-700 dark:text-sky-500");

  return (
    <div
      className={`text-2xl md:text-4xl font-semibold tracking-tight transition-colors duration-300 ${textColor}`}
    >
      <TypeAnimation
        sequence={[
          () => setTextColor("text-sky-700 dark:text-sky-500"),
          "MERN Stack Developer", 2500,
          () => setTextColor("text-lime-600 dark:text-lime-500"),
          "Frontend Developer", 2500,
          () => setTextColor("text-violet-700 dark:text-violet-500"),
          "React Enthusiast", 2500,
          () => setTextColor("text-emerald-600 dark:text-emerald-400"),
          "Backend Wizard", 2500,
        ]}
        wrapper="span"
        speed={20}
        deletionSpeed={50}
        repeat={Infinity}
        cursor={true}
      />
    </div>
  );
}
