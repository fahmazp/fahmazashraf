export default function SpinnerSquare() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      
      <svg
        width="80"
        height="80"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-live="polite"
        aria-busy="true"
      >
        <path
          d="M7 10H3V14H7V10Z"
          className="animate animate-bounce fill-sky-500 "
        />
        <path
          d="M14 10H10V14H14V10Z"
          className="animate animate-bounce fill-sky-500 [animation-delay:.1s]"
        />
        <path
          d="M21 10H17V14H21V10Z"
          className="animate animate-bounce fill-sky-500 [animation-delay:.2s]"
        />
      </svg>
      {/*<!-- End Square horizontal sm sized spinner  --> */}
    </div>
  )
}
