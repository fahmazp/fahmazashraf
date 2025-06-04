import { useRef } from "react";

export function AvatarTilt() {
  const avatarRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = avatarRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15; 
    const rotateY = ((x - centerX) / centerX) * 15;  

    card.children[0].style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const card = avatarRef.current;
    card.children[0].style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      className="group perspective w-full h-52 relative "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={avatarRef}
    >
      
      <div className="relative w-full h-full">
        <div className="absolute -inset-1 rounded-lg blur-3xl opacity-35 bg-gradient-to-br from-sky-400 via-blue-400 to-purple-400 dark:from-purple-600 dark:via-blue-600 dark:to-sky-600"></div>
        <img
          src="/undraw-avatar.svg"
          alt="Developer Illustration"
          className="relative w-full h-full transition-transform duration-300 ease-[cubic-bezier(0.03,0.98,0.52,0.99)] active:scale-110 rounded-lg"
        />
      </div>
    </div>
  );
}
