import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocity() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
      <VelocityScroll>Creativity First – Code Follows.</VelocityScroll>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background/60 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background/60 to-transparent"></div>
    </div>
  );
}
