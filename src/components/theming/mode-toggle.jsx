import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    // setTheme(nextTheme);
        if (!document.startViewTransition) {
      // Fallback for unsupported browsers
      setTheme(nextTheme);
      return;
    }

    // Animate the theme switch
    document.startViewTransition(() => {
      setTheme(nextTheme);
    });
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
