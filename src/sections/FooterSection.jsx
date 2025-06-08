import { AuroraTextDemo } from "@/components/navbar-04/navbarLogo"
import { Link } from "react-router-dom"

export default function FooterComponent() {
  return (
    <footer className="relative bg-zinc-100 dark:bg-gray-950 flex z-50 w-full shrink-0 flex-col md:flex-row items-start md:items-center justify-start gap-2 p-4 md:p-6 border-t">
      <Link to="#" className="order-1 md:order-none" prefetch={false}>
        <AuroraTextDemo className="text-2xl"/>
      </Link>
      <nav className="order-3 md:order-none flex-1 justify-center grid md:flex">
        <Link
          to="/"
          className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:hover:text-gray-50 dark:focus:ring-gray-300"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          to="#"
          className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:hover:text-gray-50 dark:focus:ring-gray-300"
          prefetch={false}
        >
          Works
        </Link>
        <Link
          to="#"
          className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:hover:text-gray-50 dark:focus:ring-gray-300"
          prefetch={false}
        >
          About
        </Link>
        <Link
          to="#"
          className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:hover:text-gray-50 dark:focus:ring-gray-300"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
      <div className="order-2 md:order-none flex w-full max-w-xs items-center justify-end gap-4">
        <Link
          to="#"
          className="inline-flex h-8 items-center rounded-full border border-gray-200 dark:border-gray-800 shadow-sm w-8 hover:scale-125 hover:rotate-12 transition-transform p-2"
          prefetch={false}
        >
          <span className="sr-only">Twitter</span>
          <TwitterIcon className="w-4 h-4 fill-twitter" />
        </Link>
        <Link
          to="#"
          className="inline-flex h-8 items-center rounded-full border border-gray-200 dark:border-gray-800 shadow-sm w-8 hover:scale-125 hover:rotate-12 transition-transform p-2"
          prefetch={false}
        >
          <span className="sr-only">GitHub</span>
          <GithubIcon className="w-4 h-4 fill-github" />
        </Link>
        <Link
          to="#"
          className="inline-flex h-8 items-center rounded-full border border-gray-200 dark:border-gray-800 shadow-sm w-8 hover:scale-125 hover:rotate-12 transition-transform p-2"
          prefetch={false}
        >
          <span className="sr-only">YouTube</span>
          <PlayIcon className="w-4 h-4 fill-youtube" />
        </Link>
      </div>
    </footer>
  )
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2"/>
  </svg>
  )
}