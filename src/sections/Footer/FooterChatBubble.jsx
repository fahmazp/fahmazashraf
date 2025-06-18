import { CheckCheck, MailIcon } from "lucide-react";
import { LikeButton } from "./LikeProfile";


export default function FooterChatLinks() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between gap-4 max-w-6xl mx-auto pt-8 px-2">
      {/* Chat Bubble Section */}
      <div className="flex items-start gap-2 w-full sm:w-auto">
        <span className="relative inline-flex size-10 items-center justify-center rounded-full bg-gray-500 ring-2 ring-gray-500/75 dark:ring-gray-200/75">
          <span className="text-base font-medium text-gray-200">FA</span>
          <span className="absolute right-0 top-0 block size-2.5 rounded-full bg-emerald-400 ring ring-white" />
        </span>

        <div className="flex flex-col gap-1.5 w-full max-w-[320px] leading-1.5">
          <p className="border bg-gray-50 dark:bg-zinc-950 px-2 py-1.5 text-sm rounded-bl-xs rounded-sm border-gray-400 max-sm:max-w-[90%]">
            Thanks for checking out my featured work 🔥
          </p>
          <div className="border bg-gray-50 dark:bg-zinc-950 px-2 py-1.5 text-sm rounded-tl-xs rounded-sm border-gray-400 max-sm:max-w-[90%]">
            Got a role that might be a good fit? Hit me up — I'm ready to dive in.
            <div>Reach out via any of the links! ➡️</div>
          </div>
          <span className="text-xs font-normal">
            11:46
            <CheckCheck className="size-4 inline ml-1.5" />
          </span>
        </div>
      </div>

    <div className="flex flex-col items-center gap-3">  
      <div className="flex flex-wrap items-center justify-center gap-2">
        {/* Email */}
        <div className="border-2 bg-gray-50 border-red-500 rounded-md">

        <a
          href="mailto:fahmazashraf7@gmail.com"
          className="h-10 w-24 rounded-md flex items-center justify-center bg-red-500 text-white border border-red-200 hover:bg-red-600 transition"
          >
          <MailIcon/>
        </a>
        </div>

        <a
          href="https://www.linkedin.com/in/fahmaz-ashraf"
          target="_blank"
          rel="noopener noreferrer"
          className="size-11 rounded-sm flex items-center justify-center bg-white text-[#0A66C2] border hover:text-black transition p-0.5"
        >
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" className="rounded-xs">
        <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="currentColor"/>
        </svg>
        </a>

        <a
          href="https://wa.me/9895268260"
          target="_blank"
          rel="noopener noreferrer"
          className="size-11 rounded-sm flex items-center justify-center bg-green-500 text-white hover:bg-gray-100 hover:text-black transition p-0.5"
        >
          {/* <svg viewBox="0 0 256 259" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
          <path d="m67.663 221.823 4.185 2.093c17.44 10.463 36.971 15.346 56.503 15.346 61.385 0 111.609-50.224 111.609-111.609 0-29.297-11.859-57.897-32.785-78.824-20.927-20.927-48.83-32.785-78.824-32.785-61.385 0-111.61 50.224-110.912 112.307 0 20.926 6.278 41.156 16.741 58.594l2.79 4.186-11.16 41.156 41.853-10.464Z" fill="#00E676"/><path d="M219.033 37.668C195.316 13.254 162.531 0 129.048 0 57.898 0 .698 57.897 1.395 128.35c0 22.322 6.278 43.947 16.742 63.478L0 258.096l67.663-17.439c18.834 10.464 39.76 15.347 60.688 15.347 70.453 0 127.653-57.898 127.653-128.35 0-34.181-13.254-66.269-36.97-89.986ZM129.048 234.38c-18.834 0-37.668-4.882-53.712-14.648l-4.185-2.093-40.458 10.463 10.463-39.76-2.79-4.186C7.673 134.63 22.322 69.058 72.546 38.365c50.224-30.692 115.097-16.043 145.79 34.181 30.692 50.224 16.043 115.097-34.18 145.79-16.045 10.463-35.576 16.043-55.108 16.043Zm61.385-77.428-7.673-3.488s-11.16-4.883-18.136-8.371c-.698 0-1.395-.698-2.093-.698-2.093 0-3.488.698-4.883 1.396 0 0-.697.697-10.463 11.858-.698 1.395-2.093 2.093-3.488 2.093h-.698c-.697 0-2.092-.698-2.79-1.395l-3.488-1.395c-7.673-3.488-14.648-7.674-20.229-13.254-1.395-1.395-3.488-2.79-4.883-4.185-4.883-4.883-9.766-10.464-13.253-16.742l-.698-1.395c-.697-.698-.697-1.395-1.395-2.79 0-1.395 0-2.79.698-3.488 0 0 2.79-3.488 4.882-5.58 1.396-1.396 2.093-3.488 3.488-4.883 1.395-2.093 2.093-4.883 1.395-6.976-.697-3.488-9.068-22.322-11.16-26.507-1.396-2.093-2.79-2.79-4.883-3.488H83.01c-1.396 0-2.79.698-4.186.698l-.698.697c-1.395.698-2.79 2.093-4.185 2.79-1.395 1.396-2.093 2.79-3.488 4.186-4.883 6.278-7.673 13.951-7.673 21.624 0 5.58 1.395 11.161 3.488 16.044l.698 2.093c6.278 13.253 14.648 25.112 25.81 35.575l2.79 2.79c2.092 2.093 4.185 3.488 5.58 5.58 14.649 12.557 31.39 21.625 50.224 26.508 2.093.697 4.883.697 6.976 1.395h6.975c3.488 0 7.673-1.395 10.464-2.79 2.092-1.395 3.487-1.395 4.882-2.79l1.396-1.396c1.395-1.395 2.79-2.092 4.185-3.487 1.395-1.395 2.79-2.79 3.488-4.186 1.395-2.79 2.092-6.278 2.79-9.765v-4.883s-.698-.698-2.093-1.395Z" fill="currentColor"/>
          </svg> */}
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clipRule="evenodd"/>
            <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
          </svg>

        </a>

        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="size-11 rounded-sm flex items-center justify-center bg-zinc-950 text-white hover:bg-gray-50 hover:text-zinc-950 transition p-1.5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1200 1227">
          <path fill="currentColor" d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"/>
          </svg>
        </a>

      </div>
            <div className="flex flex-col items-center">
            <p className="text-xs text-center pb-1 font-medium">Support the grind? Drop a like</p>
            <LikeButton/> 
            </div>
    </div>

    </div>
  );
}
