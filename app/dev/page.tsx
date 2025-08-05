"use client";

import React, { lazy, Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import Link from "next/link";

// Lazy load components
const Projects = lazy(() => import("../components/Projects"));

export default function DevPage() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animation variants - simplified for mobile
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.15,
        delayChildren: isMobile ? 0.1 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.3 : 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="pt-20">
      {/* Hero Section with gradient background */}
      <div className="bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: isMobile ? -10 : -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.3 : 0.5 }}
              className="text-headline mb-6 leading-tight"
            >
              Software <span className="text-blue-500">Development</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: isMobile ? 0.3 : 0.5,
                delay: isMobile ? 0.05 : 0.1,
              }}
              className="text-subtitle text-gray-700 mb-8 leading-relaxed"
            >
              I build clean, efficient, and maintainable applications with a
              focus on user experience. My engineering approach prioritizes
              modular code, performance, and accessibility.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Development Approach section with card design */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.3 : 0.5 }}
            className="text-title text-center mb-16"
          >
            My Development Approach
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
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto text-white">
                  <FaLaptopCode className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4 tracking-wide">
                  Frontend Excellence
                </h3>
                <p className="text-body text-gray-600 text-center">
                  Creating responsive, accessible interfaces with modern
                  frameworks and performance optimization techniques.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto text-white">
                  <FaCode className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4 tracking-wide">
                  Clean Code Philosophy
                </h3>
                <p className="text-body text-gray-600 text-center">
                  Writing maintainable, tested code that scales with consistent
                  patterns and thorough documentation.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto text-white">
                  <FaRocket className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4 tracking-wide">
                  Performance Optimization
                </h3>
                <p className="text-body text-gray-600 text-center">
                  Optimizing for speed, accessibility, and resource efficiency
                  through measured improvements and best practices.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section with enhanced styling */}
      <div className="relative">
        {/* Background pattern for visual interest */}
        <div className="absolute inset-0 bg-white opacity-50 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -left-24 w-80 h-80 bg-gray-50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-blue-50 rounded-full blur-3xl"></div>
        </div>

        {/* Projects content with enhanced container */}
        <div className="relative z-10">
          <div className="container mx-auto px-4 py-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-title text-center mb-8"
            >
              My Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-subtitle text-gray-700 max-w-2xl mx-auto mb-16 text-center"
            >
              A showcase of applications built with modern technologies and best
              practices in web development.
            </motion.p>
          </div>

          {/* Projects component with custom wrapper for contrast */}
          <div className="bg-gradient-to-b from-gray-50 to-white py-8">
            <Suspense
              fallback={
                <div className="h-[500px] flex items-center justify-center">
                  <div className="animate-pulse text-gray-400">
                    Loading projects...
                  </div>
                </div>
              }
            >
              <Projects />
            </Suspense>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-blue-500 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-title mb-6">See My Design Work</h2>
            <p className="text-subtitle mb-10 text-blue-100">
              Check out my UX/UI design projects to see how I approach digital
              experiences from the design side.
            </p>
            <Link
              href="/ux-ui"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-500 font-medium rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg tracking-wide"
            >
              View UX/UI Projects
              <FaRocket className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
