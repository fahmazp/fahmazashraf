import { useEffect, useState } from "react";

export function useViewportHeight() {
  const [height, setHeight] = useState(1000); 

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return height;
}
