import Link from "next/link";
import { useState } from "react";

function HeroButtons() {
  // Track which button is being pressed for active state styling
  const [activeButton, setActiveButton] = useState(null);

  // Handle mouse down and up events for press effect
  const handleMouseDown = (buttonId) => {
    setActiveButton(buttonId);
  };

  const handleMouseUp = () => {
    setActiveButton(null);
  };

  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 w-full">
      <Link
        href="/about"
        className={`relative overflow-hidden bg-transparent border border-white text-white py-2 sm:py-3 px-5 sm:px-6 rounded-full font-medium text-sm sm:text-base text-center
                    transition-all duration-300 ease-out
                    hover:shadow-[0_5px_15px_rgba(255,255,255,0.2)] hover:scale-105
                    active:scale-95 active:shadow-inner
                    before:absolute before:inset-0 before:w-full before:h-full before:bg-white/10
                    before:translate-y-[100%] hover:before:translate-y-0 before:transition-transform before:duration-300
                    ${
                      activeButton === "about"
                        ? "transform scale-95 shadow-inner"
                        : "transform translate-y-0 shadow-lg"
                    }`}
        onMouseDown={() => handleMouseDown("about")}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={() => handleMouseDown("about")}
        onTouchEnd={handleMouseUp}
      >
        About Me
      </Link>

      <a
        href="#skills"
        className={`relative overflow-hidden bg-white text-black py-2 sm:py-3 px-5 sm:px-6 rounded-full font-medium text-sm sm:text-base text-center
                   transition-all duration-300 ease-out
                   hover:shadow-[0_5px_15px_rgba(255,255,255,0.2)] hover:scale-105
                   active:scale-95 active:shadow-inner active:bg-gray-100
                   before:absolute before:inset-0 before:w-full before:h-full before:bg-black/5
                   before:translate-y-[100%] hover:before:translate-y-0 before:transition-transform before:duration-300
                   ${
                     activeButton === "skills"
                       ? "transform scale-95 shadow-inner bg-gray-100"
                       : "transform translate-y-0 shadow-lg"
                   }`}
        onMouseDown={() => handleMouseDown("skills")}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={() => handleMouseDown("skills")}
        onTouchEnd={handleMouseUp}
      >
        Skills
      </a>

      <a
        href="#projects"
        className={`relative overflow-hidden bg-white text-black py-2 sm:py-3 px-5 sm:px-6 rounded-full font-medium text-sm sm:text-base text-center
                   transition-all duration-300 ease-out
                   hover:shadow-[0_5px_15px_rgba(255,255,255,0.2)] hover:scale-105 
                   active:scale-95 active:shadow-inner active:bg-gray-100
                   before:absolute before:inset-0 before:w-full before:h-full before:bg-black/5
                   before:translate-y-[100%] hover:before:translate-y-0 before:transition-transform before:duration-300
                   ${
                     activeButton === "projects"
                       ? "transform scale-95 shadow-inner bg-gray-100"
                       : "transform translate-y-0 shadow-lg"
                   }`}
        onMouseDown={() => handleMouseDown("projects")}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={() => handleMouseDown("projects")}
        onTouchEnd={handleMouseUp}
      >
        My Projects
      </a>
    </div>
  );
}

export default HeroButtons;
