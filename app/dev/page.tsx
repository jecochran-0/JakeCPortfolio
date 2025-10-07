"use client";

import React, { lazy, Suspense, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Lazy load components
const Projects = lazy(() => import("../components/Projects"));

export default function DevPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const animationRef = useRef(null);

  // Fonts to cycle through for typing effect - varied and distinct
  const fonts = [
    "Bungee, Arial Black, sans-serif", // Bold, brutalist
    "Georgia, serif", // Classic serif
    "Fredoka, cursive", // Bubble/rounded
    "Roboto Mono, monospace", // Monospace
    "Playfair Display, serif", // Elegant serif
    "Nunito, sans-serif", // Friendly sans-serif
    "Courier New, monospace", // Classic monospace
    "Merriweather, serif", // Readable serif
    "Source Sans Pro, sans-serif", // Clean sans-serif
    "Oswald, sans-serif", // Condensed sans-serif
  ];

  const texts = ["DEVELOPMENT"];
  const fullText = texts[currentText] || "DEVELOPMENT";
  const typingSpeed = 80;
  const deletingSpeed = 40;
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [badgePos, setBadgePos] = useState({ x: 0, y: 0 });

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Start hero animation after page load transition
  useEffect(() => {
    const timer = setTimeout(() => setHeroReady(true), 1100);
    return () => clearTimeout(timer);
  }, []);

  // Typing effect for DEVELOPMENT word (copied from Hero.js with font cycling)
  useEffect(() => {
    if (!heroReady || !fullText) return;

    if (isTyping) {
      if (displayText.length < fullText.length) {
        animationRef.current = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        animationRef.current = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
      }
    } else {
      if (displayText.length > 0) {
        animationRef.current = setTimeout(() => {
          setDisplayText(displayText.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        animationRef.current = setTimeout(() => {
          setCurrentText((prev) => (prev + 1) % fonts.length);
          setIsTyping(true);
        }, 300);
      }
    }

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [
    displayText,
    isTyping,
    fullText,
    fonts.length,
    heroReady,
    typingSpeed,
    deletingSpeed,
  ]);

  // Animation variants - rising transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    const nx = (relX / rect.width) * 2 - 1; // -1..1
    const ny = (relY / rect.height) * 2 - 1; // -1..1
    const maxOffset = 40; // px
    setBadgePos({ x: nx * maxOffset, y: ny * maxOffset });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section - Professional Brutalist Layout */}
      <section className="relative py-20 sm:py-28 lg:py-36 xl:py-44 bg-white">
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <motion.div
            initial="hidden"
            animate={heroReady ? "show" : "hidden"}
            variants={containerVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12 sm:space-y-16 lg:space-y-20"
          >
            {/* Main Title Section */}
            <div className="space-y-4 sm:space-y-6">
              <motion.h1
                className="font-black leading-tight tracking-tight"
                style={{
                  fontWeight: 900,
                  fontFamily: "Bungee, Arial Black, sans-serif",
                }}
                variants={itemVariants}
              >
                <span className="block text-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-2">
                  SOFTWARE
                </span>
                <span
                  className="block text-blue-600 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                  style={{ fontFamily: fonts[currentText % fonts.length] }}
                >
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </motion.h1>
            </div>

            {/* Technology Stack Section */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={heroReady ? "show" : "hidden"}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h3
                className="text-sm font-bold text-gray-600 uppercase tracking-wider"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                TECH STACK
              </h3>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {[
                  { word: "REACT", delay: 0.4 },
                  { word: "NODE.JS", delay: 0.5 },
                  { word: "TYPESCRIPT", delay: 0.6 },
                  { word: "NEXT.JS", delay: 0.7 },
                ].map((item) => (
                  <motion.div
                    key={item.word}
                    variants={itemVariants}
                    initial="hidden"
                    animate={heroReady ? "show" : "hidden"}
                    transition={{ duration: 0.4, delay: item.delay }}
                    className="px-6 py-4 bg-white text-black border-4 border-black font-black text-sm tracking-wide shadow-brutal hover:bg-gray-50 transition-colors duration-200"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {item.word}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={heroReady ? "show" : "hidden"}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                href="#projects"
                className="inline-flex items-center px-10 py-5 bg-blue-600 text-white border-4 border-black shadow-brutal font-black text-base tracking-wide hover:bg-blue-500 transition-colors duration-200"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                VIEW PROJECTS
                <FaArrowRight className="ml-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 sm:py-24 lg:py-32 bg-gray-50">
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-4xl mx-auto"
            >
              A collection of applications built with modern technologies and
              best practices
            </motion.p>
          </div>

          {/* Projects Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Suspense
              fallback={
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl shadow-lg p-8 animate-pulse"
                    >
                      <div className="h-64 bg-gray-200 rounded-lg mb-6"></div>
                      <div className="h-6 bg-gray-200 rounded mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  ))}
                </div>
              }
            >
              <Projects />
            </Suspense>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 sm:py-20">
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3
                className="text-2xl font-black tracking-wide"
                style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
              >
                JAKE COCHRAN
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                Full-stack developer and UX/UI designer creating exceptional
                digital experiences.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-black tracking-wide uppercase">
                Navigation
              </h4>
              <div className="space-y-3">
                <Link
                  href="/"
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  About
                </Link>
                <Link
                  href="/ux-ui"
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  UX/UI Work
                </Link>
                <Link
                  href="/dev"
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Development
                </Link>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h4 className="text-lg font-black tracking-wide uppercase">
                Get In Touch
              </h4>
              <div className="space-y-3">
                <a
                  href="mailto:jake.e.cochran@gmail.com"
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  jake.e.cochran@gmail.com
                </a>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/jecochran-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jake-cochran/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
