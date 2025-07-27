import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { AuroraTextDemo } from "./navbarLogo";
import ButtonHover12 from "./navGitbtn";
import ThemeToggleButton from "../ui/theme-toggle-button";

const Navbar04Page = () => {
  return (
    
      <nav
        className="fixed top-2 inset-x-4 h-14 bg-background/10 backdrop-blur-md border border-white/90 dark:border-slate-900/20 max-w-screen-xl mx-auto rounded-full z-50 shadow-md">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <AuroraTextDemo className="text-3xl"/>
          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            
            <div className="hidden sm:block">
            <ButtonHover12/>
            </div>

            {/* <ModeToggle/> */}
            <ThemeToggleButton variant="circle-blur" start="bottom-left" />
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
