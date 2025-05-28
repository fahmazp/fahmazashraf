import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify } from "lucide-react"

export function NavigationSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full" aria-label="Open menu">
        <AlignJustify/>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className=" p-6 w-[80%] sm:w-64">
      
{/* <div className="absolute inset-0 z-[1] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] pointer-events-none" /> */}  
        <nav className="flex flex-col gap-8 text-lg mt-12 font-semibold">
        <SheetClose asChild>
          <a href="#home" className="hover:text-lime-600">Home</a>
        </SheetClose>
        <SheetClose asChild>
          <a href="#projects" className="hover:text-lime-600">Projects</a>
        </SheetClose>
        <SheetClose asChild>
          <a href="#about" className="hover:text-lime-600">About</a>
        </SheetClose>
        <SheetClose asChild>
          <a href="#contact" className="hover:text-lime-600">Contact</a>
        </SheetClose>
        </nav>

      </SheetContent>
    </Sheet>
  )
}
