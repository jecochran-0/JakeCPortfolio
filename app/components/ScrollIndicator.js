"use client";

import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const calculateScrollPercentage = () => {
      if (typeof document !== "undefined" && typeof window !== "undefined") {
        const percentage = Math.min(
          (scrollY /
            (document.documentElement.scrollHeight - window.innerHeight)) *
            100,
          100
        );
        setScrollPercentage(percentage);
      }
    };

    // Calculate initial scroll percentage
    calculateScrollPercentage();

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", calculateScrollPercentage);
    window.addEventListener("resize", calculateScrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", calculateScrollPercentage);
      window.removeEventListener("resize", calculateScrollPercentage);
    };
  }, [scrollY]);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative w-16 h-16">
        {/* Circular progress indicator */}
        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
          <path
            className="text-gray-200"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="text-gray-400 transition-all duration-300 ease-out"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray={`${scrollPercentage}, 100`}
            fill="none"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>

        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
        </div>

        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-gray-500">
            {Math.round(scrollPercentage)}%
          </span>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="mt-2 text-center">
        <div className="text-xs text-gray-500 mb-1">Scroll</div>
        <div className="w-0.5 h-4 bg-gray-300 mx-auto animate-pulse"></div>
      </div>
    </div>
  );
}
