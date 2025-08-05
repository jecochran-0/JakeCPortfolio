"use client";

import { useEffect, useRef, useState } from "react";

export default function Interactive3DElement() {
  const elementRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      element.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(${isHovered ? 1.05 : 1})
      `;
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      element.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
      `;
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isHovered]);

  return (
    <div
      ref={elementRef}
      className="relative w-64 h-64 rounded-2xl glass cursor-pointer transition-all duration-500"
      style={{
        transformStyle: "preserve-3d",
        transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
      }}
    >
      {/* Front face */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-4xl font-bold mb-2">UX</div>
          <div className="text-sm opacity-80">Designer</div>
        </div>
      </div>

      {/* Back face */}
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center"
        style={{ transform: "rotateY(180deg) translateZ(1px)" }}
      >
        <div className="text-white text-center">
          <div className="text-4xl font-bold mb-2">Dev</div>
          <div className="text-sm opacity-80">Engineer</div>
        </div>
      </div>

      {/* Right face */}
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center"
        style={{ transform: "rotateY(90deg) translateZ(128px)" }}
      >
        <div className="text-white text-center">
          <div className="text-4xl font-bold mb-2">UI</div>
          <div className="text-sm opacity-80">Designer</div>
        </div>
      </div>

      {/* Left face */}
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center"
        style={{ transform: "rotateY(-90deg) translateZ(128px)" }}
      >
        <div className="text-white text-center">
          <div className="text-4xl font-bold mb-2">UX</div>
          <div className="text-sm opacity-80">Researcher</div>
        </div>
      </div>

      {/* Top face */}
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400 to-blue-600 flex items-center justify-center"
        style={{ transform: "rotateX(90deg) translateZ(128px)" }}
      >
        <div className="text-white text-center">
          <div className="text-4xl font-bold mb-2">Full</div>
          <div className="text-sm opacity-80">Stack</div>
        </div>
      </div>

      {/* Bottom face */}
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center"
        style={{ transform: "rotateX(-90deg) translateZ(128px)" }}
      >
        <div className="text-white text-center">
          <div className="text-4xl font-bold mb-2">Creative</div>
          <div className="text-sm opacity-80">Thinker</div>
        </div>
      </div>

      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)",
          opacity: isHovered ? 1 : 0,
        }}
      />
    </div>
  );
}
