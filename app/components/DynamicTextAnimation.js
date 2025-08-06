"use client";

import { useState, useEffect, useCallback, useMemo } from "react";

export default function DynamicTextAnimation() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = useMemo(
    () => [
      "UX Designer",
      "UI Designer",
      "Full Stack Developer",
      "Creative Thinker",
      "Problem Solver",
    ],
    []
  );

  const typeSpeed = useMemo(() => 100, []);
  const deleteSpeed = useMemo(() => 50, []);
  const pauseTime = useMemo(() => 2000, []);

  const typeText = useCallback(() => {
    const currentTextToType = texts[currentIndex];

    if (!isDeleting) {
      if (currentText.length < currentTextToType.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentTextToType.slice(0, currentText.length + 1));
        }, typeSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, currentText.length - 1));
        }, deleteSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }
  }, [
    currentText,
    currentIndex,
    isDeleting,
    texts,
    typeSpeed,
    deleteSpeed,
    pauseTime,
  ]);

  useEffect(() => {
    const cleanup = typeText();
    return cleanup;
  }, [typeText]);

  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
        Jake Cochran
      </h1>
      <div className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8">
        <span className="inline-block min-w-[200px] md:min-w-[300px] lg:min-w-[400px]">
          {currentText}
          <span className="animate-pulse">|</span>
        </span>
      </div>
    </div>
  );
}
