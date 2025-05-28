import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const NavMenu = ({ orientation = "horizontal", className }) => {
  return (
    <NavigationMenu orientation={orientation} className={className}>
      <NavigationMenuList
        className={cn(
          "gap-4",
          orientation === "vertical"
            ? "flex-col items-start space-y-2 space-x-0"
            : "flex-row items-center space-x-6"
        )}
      >
        {navItems.map((item) => (
          <NavigationMenuItem key={item.label}>
            <NavigationMenuLink asChild>
              <a
                href={item.href}
                className={cn(
                  "relative group inline-flex h-9 w-max items-center justify-center px-1 py-2 text-sm lg:text-lg font-medium transition-colors",
                  "hover:text-accent-foreground hover:bg-transparent",
                  "before:absolute before:bottom-0 before:inset-x-0 before:h-[4px] before:bg-primary before:scale-x-0 before:transition-transform before:duration-200 before:rounded-4xl",
                  "hover:before:scale-x-100 focus:before:scale-x-100 hover:font-semibold",
                  "data-[active]:before:scale-x-100 data-[state=open]:before:scale-x-100"
                )}
              >
                {item.label}
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
