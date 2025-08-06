"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";

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
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white relative"
        style={{
          background:
            "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
          backgroundSize: "200% 200%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: "gradientShift 3s ease infinite",
          textShadow: "0 0 30px rgba(102, 126, 234, 0.3)",
        }}
      >
        Jake Cochran
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 relative"
      >
        <span className="inline-block min-w-[200px] md:min-w-[300px] lg:min-w-[400px] relative">
          {currentText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-white ml-1"
            style={{
              textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
            }}
          >
            |
          </motion.span>
        </span>
      </motion.div>
    </div>
  );
}
