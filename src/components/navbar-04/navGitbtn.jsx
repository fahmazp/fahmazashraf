import { GithubIcon } from "lucide-react";

const ButtonHover12 = () => {
  return (
    <>
      <button className="group h-8 select-none rounded-full bg-black text-white bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-600 px-3 text-sm leading-8 
       shadow-[0_-1px_0_1px_rgba(0,0,0,0.8)_inset,0_0_0_1px_rgb(9_9_11)_inset,0_0.5px_0_1.5px_#71717a_inset] hover:bg-zinc-50 hover:via-zinc-900 hover:to-zinc-800 
        dark:hover:bg-gradient-to-b dark:hover:from-zinc-900 dark:hover:via-zinc-900 dark:hover:to-zinc-700 active:shadow-[0_3px_0_0_rgba(0,0,0)_inset]">
        <span className="block group-active:[transform:translate3d(0,1px,0)]">
          <GithubIcon className="w-3 h-3 inline mr-1"/>
          Github
        </span>
      </button>
    </>
  );
};
export default ButtonHover12;
