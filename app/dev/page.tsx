"use client";

import React, { lazy, Suspense, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import Link from "next/link";

// Lazy load components
const Projects = lazy(() => import("../components/Projects"));

export default function DevPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
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

  // Animation variants - simplified for mobile
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.08 : 0.12,
        delayChildren: isMobile ? 0.06 : 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 8 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.28 : 0.4,
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
    <div className="pt-20">
      {/* Hero Section - brutalist white block */}
      <div
        className="relative bg-white text-black overflow-hidden"
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
      >
        {/* subtle interactive background matching theme */}
        <div className="interactive-bg absolute inset-0 opacity-30 pointer-events-none"></div>

        {/* Oversized ghost typography */}
        <motion.div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={heroReady ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            className="text-black/5 font-black tracking-[-0.1em] leading-none select-none text-[15vw] sm:text-[12vw] md:text-[10vw]"
            animate={{ x: heroReady ? [0, 8, -8, 0] : 0 }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          >
            BUILD • SHIP • SCALE
          </motion.div>
        </motion.div>

        <div className="relative container mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-28">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto z-10">
            <motion.h1
              initial="hidden"
              animate={heroReady ? "show" : "hidden"}
              variants={itemVariants}
              className="mb-4 leading-none tracking-tighter text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-black"
              style={{ willChange: "transform, opacity" }}
            >
              SOFTWARE <span className="text-orange-500">DEVELOPMENT</span>
            </motion.h1>

            {/* Mini interactive chips */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={heroReady ? "show" : "hidden"}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-4 mb-6"
            >
              {["Frontend", "Clean Code", "Performance"].map((chip) => (
                <motion.span
                  key={chip}
                  variants={itemVariants}
                  whileHover={{ y: -3, rotate: -1 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  className="px-3 py-2 bg-orange-100 text-orange-800 border-2 border-black font-black text-xs sm:text-sm tracking-wide"
                >
                  {chip}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              initial="hidden"
              animate={heroReady ? "show" : "hidden"}
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-[1.35rem] text-gray-800 mb-10 leading-relaxed max-w-3xl"
              style={{ willChange: "transform, opacity" }}
            >
              I build clean, efficient, and maintainable applications with a
              focus on user experience. My engineering approach prioritizes
              modular code, performance, and accessibility.
            </motion.p>

            {/* Moderate interactive: magnetic badge following cursor */}
            <motion.div
              animate={heroReady ? { x: badgePos.x, y: badgePos.y } : {}}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 14,
                mass: 0.6,
              }}
              className="card-brutal p-4 sm:p-5 bg-white text-black inline-flex items-center gap-3 select-none"
              style={{ willChange: "transform" }}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 bg-orange-500 text-black border-4 border-black">
                <FaCode />
              </span>
              <span className="font-black tracking-wider text-sm sm:text-base">
                MAGNETIC INTERFACE
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Development Approach section with brutalist cards */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: isMobile ? 0.3 : 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-title text-center mb-16 tracking-tight text-black"
            style={{ willChange: "transform, opacity" }}
          >
            MY DEVELOPMENT APPROACH
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="max-w-6xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="card-brutal p-8 rounded-none"
                style={{ willChange: "transform" }}
              >
                <div className="w-16 h-16 bg-orange-500 border-4 border-black flex items-center justify-center mb-6 mx-auto text-black">
                  <FaLaptopCode className="text-2xl" />
                </div>
                <h3 className="text-xl font-black text-center mb-4 tracking-wide text-black">
                  Frontend Excellence
                </h3>
                <p className="text-lg text-gray-800 text-center">
                  Creating responsive, accessible interfaces with modern
                  frameworks and performance optimization techniques.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="card-brutal p-8 rounded-none"
                style={{ willChange: "transform" }}
              >
                <div className="w-16 h-16 bg-orange-500 border-4 border-black flex items-center justify-center mb-6 mx-auto text-black">
                  <FaCode className="text-2xl" />
                </div>
                <h3 className="text-xl font-black text-center mb-4 tracking-wide text-black">
                  Clean Code Philosophy
                </h3>
                <p className="text-lg text-gray-800 text-center">
                  Writing maintainable, tested code that scales with consistent
                  patterns and thorough documentation.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="card-brutal p-8 rounded-none"
                style={{ willChange: "transform" }}
              >
                <div className="w-16 h-16 bg-orange-500 border-4 border-black flex items-center justify-center mb-6 mx-auto text-black">
                  <FaRocket className="text-2xl" />
                </div>
                <h3 className="text-xl font-black text-center mb-4 tracking-wide text-black">
                  Performance Optimization
                </h3>
                <p className="text-lg text-gray-800 text-center">
                  Optimizing for speed, accessibility, and resource efficiency
                  through measured improvements and best practices.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section with enhanced styling */}
      <div className="relative bg-white text-black">
        {/* Background pattern for visual interest - shifted to orange/neutral */}
        <div className="absolute inset-0 opacity-40 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -left-24 w-80 h-80 bg-gray-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-orange-100 rounded-full blur-3xl"></div>
        </div>

        {/* Projects content with enhanced container */}
        <div className="relative z-10">
          <div className="container mx-auto px-4 py-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-title text-center mb-8 text-black"
              style={{ willChange: "transform, opacity" }}
            >
              MY PROJECTS
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="text-lg text-gray-900 max-w-2xl mx-auto mb-16 text-center"
              style={{ willChange: "transform, opacity" }}
            >
              A showcase of applications built with modern technologies and best
              practices in web development.
            </motion.p>
          </div>

          {/* Projects component with brutalist-friendly wrapper */}
          <div className="bg-white py-8">
            <Suspense
              fallback={
                <div className="h-[500px] flex items-center justify-center">
                  <div className="card-brutal p-6 text-center">
                    <div className="skeleton w-24 h-24 rounded-none mx-auto mb-4"></div>
                    <div className="skeleton h-6 w-48 rounded-none mx-auto"></div>
                  </div>
                </div>
              }
            >
              <Projects />
            </Suspense>
          </div>
        </div>
      </div>

      {/* CTA Section - match About CTA style */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-4xl mx-auto text-center"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="card-brutal p-10 md:p-14">
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tighter text-black">
                SEE MY <span className="text-orange-500">DESIGN WORK</span>
              </h2>
              <p className="text-subtitle mb-10 text-gray-800">
                Explore UX/UI projects to see how I bridge design and code.
              </p>
              <Link href="/ux-ui">
                <motion.button
                  whileHover={{ scale: 1.03, y: -4 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="btn-brutal btn-brutal-interactive bg-orange-500 text-black border-4 border-black"
                >
                  View UX/UI Projects
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
