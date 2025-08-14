import { useEffect, useState } from "react";
import { FlickeringGrid } from "../magicui/flickering-grid";
import { useViewportHeight } from "@/hooks/useDynamicHeight";

export function FlickeringGridDemo() {

  const height = useViewportHeight();
  const [color, setColor] = useState("#003153");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateThemeColor = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setColor(isDark ? "#003153" : "#93c5fd");
    };

    updateThemeColor();

    const observer = new MutationObserver(updateThemeColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // Handle responsive logic
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="fixed inset-0 z-0 w-full h-[100vh] overflow-hidden bg-background dark:bg-dar">
      <FlickeringGrid
        className="relative inset-0 z-0 [mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={3}
        color={color}
        maxOpacity={0.8}
        flickerChance={0.2}
        // height={height}
         {...(!isMobile && { height })}
      />
    </div>
  );
}

