import { AuroraTextDemo } from "@/components/navbar-04/navbarLogo"
import FooterConnect from "./FooterConnect"
import FooterChatBubble from "./FooterChatBubble"

export default function FooterComponent() {
  return (
<div id="contact">
<footer className="relative z-50 bg-gradient-to-r from-[#dfe2fe] via-[#b1cbfa] to-[#8e98f5] dark:bg-gradient-to-r dark:from-[#0f172a] dark:via-[#1e1a78] dark:to-[#0f172a] rounded-lg shadow-sm m-2">


  
    <FooterChatBubble/>
  
    <FooterConnect/>
    <div className="w-full max-w-6xl mx-auto px-2 py-1">
        
        <hr className="my-2 md:border rounded-full border-gray-700 sm:mx-auto dark:border-gray-100" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <AuroraTextDemo className="text-2xl"/>
            </a>
        <span className="block text-sm text-black sm:text-center dark:text-zinc-100">© 2025 <a href="https://github.com/fahmazp/" className="hover:underline font-semibold" target="_blank">Fahmaz Ashraf</a>.</span>
        </div>
    </div>
</footer>
</div>


  )
}
