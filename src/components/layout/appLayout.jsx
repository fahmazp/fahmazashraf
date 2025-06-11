import Navbar04Page from "../navbar-04/navbar-04";
import { FlickeringGridDemo } from "../animations/flickerGrid";
import { ScrollProgress } from "../magicui/scroll-progress";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import SpinnerSquare from "../animations/loaderDemo";
import FooterComponent from "@/sections/Footer/FooterSection";
import { ScrollToTop } from "@/sections/ScrollToTop";


const AppLayout = () => {

const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SpinnerSquare />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden scroll-smooth antialiased">
    
    <ScrollToTop/>
    <FlickeringGridDemo/>
      <ScrollProgress className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-gradient-to-r from-sky-400 to-lime-500" />
      <Navbar04Page/>

      <main className="relative z-10 w-full px-4 sm:px-6 pt-[110px] max-w-6xl mx-auto">
      <Outlet/>
      </main>
      
      
      <FooterComponent/>
      
    </div>
  );
};

export default AppLayout;

