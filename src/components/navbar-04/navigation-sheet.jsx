import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import ButtonHover12 from "./navGitbtn";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useRef } from "react";

export function NavigationSheet() {
  const location = useLocation();
  const navigate = useNavigate();
  const closeRef = useRef(null);

  const handleHashLink = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);

    const scrollAndClose = () => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth" });

      if (closeRef.current) {
        closeRef.current.click();
      }
    };

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToId: targetId } });
    } else {
      scrollAndClose();
    }
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Works", href: "/works" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full" aria-label="Open menu">
          <AlignJustify />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="p-6 w-[80%] sm:w-64">
        <nav className="flex flex-col gap-8 text-lg mt-12 font-semibold">
          {navItems.map((item) => {
            const isHashLink = item.href.startsWith("#");

            return isHashLink ? (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleHashLink(e, item.href)}
                className="hover:text-lime-600"
              >
                {item.label}
              </a>
            ) : (
              <SheetClose asChild key={item.label}>
                <Link to={item.href} className="hover:text-lime-600">
                  {item.label}
                </Link>
              </SheetClose>
            );
          })}
        </nav>

        <div className="mt-4 sm:hidden block">
          <ButtonHover12 />
        </div>

        {/* Hidden SheetClose trigger to call manually */}
        <SheetClose asChild>
          <button ref={closeRef} className="hidden" aria-hidden="true" />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
