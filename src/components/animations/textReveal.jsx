import { TextAnimate } from "@/components/magicui/text-animate";
import { TypingLoop } from "./heroTypeAnimation";

export function HeroTextReveal() {
    return (
        <div className="space-y-4 ml-5 md:ml-0">
            <TextAnimate className={"text-black dark:text-white font-[500] tracking-tight text-2xl md:text-3xl "}
                animation="slideLeft" by="word"
                as="h1" duration={2}>
                Hi There !
            </TextAnimate>

            <TextAnimate
                className="text-sky-700 dark:text-sky-400 font-bold tracking-tighter text-5xl md:text-5xl uppercase"
                animation="slideLeft"
                by="word"
                as="h1"
                duration={2}
                delay={0.2}
            >
               I'm Fahmaz Ashraf
            </TextAnimate>

            <div className="pt-6 md:pt-12">

            <TypingLoop/>
            </div>
        </div>
    )
}