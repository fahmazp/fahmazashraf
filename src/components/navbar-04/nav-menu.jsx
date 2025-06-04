import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "#contact" },
];

export const NavMenu = ({ orientation = "horizontal", className }) => {
  const navigate = useNavigate();
  const location = useLocation();

 const handleHashLink = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1); 

  if (location.pathname !== "/") {
    navigate("/", { state: { scrollToId: targetId } });
  } else {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
};

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
        {navItems.map((item) => {
          const isHashLink = item.href.startsWith("#");

          return (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink asChild>
                {isHashLink ? (
                  <a
                    href={item.href}
                    onClick={(e) => handleHashLink(e, item.href)}
                    className={linkStyles}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className={linkStyles}
                  >
                    {item.label}
                  </Link>
                )}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const linkStyles = cn(
  "relative group inline-flex h-9 w-max items-center justify-center px-1 py-2 text-sm lg:text-lg font-medium transition-colors",
  "hover:text-accent-foreground hover:bg-transparent",
  "before:absolute before:bottom-0 before:inset-x-0 before:h-[4px] before:bg-primary before:scale-x-0 before:transition-transform before:duration-200 before:rounded-4xl",
  "hover:before:scale-x-100 focus:before:scale-x-100 hover:font-semibold",
  "data-[active]:before:scale-x-100 data-[state=open]:before:scale-x-100"
);
