"use client";

import { useState, useEffect } from "react";

export default function DynamicTextAnimation() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "UX Designer",
    "UI Designer",
    "Full Stack Developer",
    "Creative Thinker",
    "Problem Solver",
  ];

  useEffect(() => {
    const currentTextToType = texts[currentIndex];

    if (!isDeleting) {
      if (currentText.length < currentTextToType.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentTextToType.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, currentText.length - 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <div className="text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Jake Cochran
      </h1>
      <div className="text-2xl md:text-3xl text-gray-600 mb-8 h-12 flex items-center justify-center">
        <span className="mr-2">I&apos;m a</span>
        <span className="text-blue-600 font-semibold min-w-[200px] text-left">
          {currentText}
          <span className="animate-pulse">|</span>
        </span>
      </div>
      <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
        Crafting exceptional digital experiences through thoughtful design and
        innovative development
      </p>
    </div>
  );
}
