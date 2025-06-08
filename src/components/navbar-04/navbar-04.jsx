import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { AuroraTextDemo } from "./navbarLogo";
import ModeToggle from "../theming/mode-toggle";
import ButtonHover12 from "./navGitbtn";

const Navbar04Page = () => {
  return (
    
      <nav
        className="fixed top-2 inset-x-4 h-14 bg-background border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full z-50" >
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <AuroraTextDemo className="text-3xl"/>
          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            
            <div className="hidden sm:block">
            <ButtonHover12/>
            </div>

            <ModeToggle/>
            {/* Mobile Menu */}
            <div className="md:hidden overflow-hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    
  )
};

export default Navbar04Page;
