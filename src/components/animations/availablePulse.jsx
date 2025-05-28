export function AvailablePulse() {
  return (
    <div className="z-10 flex items-center gap-2 md:absolute md:right-48 md:top-[440px] justify-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1.5 shadow-sm border md:text-base text-muted-foreground dark:bg-background dark:text-white ring-1 ring-sky-400/30 ring-inset">

        <span className="font-medium animate-pulse urbanist-font">Available for work</span>
        {/* Ping Dot */}
        <span className="relative flex h-3.5 w-3.5">
          {/* Glowing ring */}
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
          {/* Solid dot */}
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-lime-600 shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
        </span>

      </div>
    </div>
  );
}
