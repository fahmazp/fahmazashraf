import { useViewportHeight } from "@/hooks/useDynamicHeight";
import { FlickeringGrid } from "../magicui/flickering-grid";

export function FlickeringGridDemo() {

  const height = useViewportHeight();

  return (
    <div className="fixed inset-0 z-0 w-full h-[100vh] overflow-hidden bg-background dark:bg-dar">
      <FlickeringGrid
        className="relative inset-0 z-0 [mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.7}
        flickerChance={0.1}
        height={height}
        // width={800}
      />
    </div>
  );
}

