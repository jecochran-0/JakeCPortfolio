"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import {
  FaArrowRight,
  FaSearch,
  FaPalette,
  FaCode,
  FaLightbulb,
  FaRocket,
  FaUsers,
  FaChartLine,
  FaPlay,
  FaPause,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function UXUIPage() {
  const { scrollY } = useScroll();
  const [activePhilosophy, setActivePhilosophy] = useState(0);
  const [isProcessPlaying, setIsProcessPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Highly optimized parallax effects
  const heroY = useTransform(
    scrollY,
    [0, 1000],
    [0, shouldReduceMotion ? -50 : -100]
  );
  const heroRotate = useTransform(
    scrollY,
    [0, 1000],
    [0, shouldReduceMotion ? 0 : 1]
  );
  const philosophyY = useTransform(
    scrollY,
    [400, 1400],
    [0, shouldReduceMotion ? -20 : -40]
  );
  const processX = useTransform(
    scrollY,
    [800, 1800],
    [0, shouldReduceMotion ? 0 : 25]
  );
  const projectsScale = useTransform(
    scrollY,
    [1200, 2200],
    [1, shouldReduceMotion ? 1 : 0.99]
  );

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden">
      {/* Optimized background with minimal elements */}
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  background: [
                    "radial-gradient(circle at 20% 20%, rgba(255, 107, 53, 0.08) 0%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.06) 0%, transparent 60%), linear-gradient(135deg, #fef3e2 0%, #ffffff 50%, #eff6ff 100%)",
                    "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.06) 0%, transparent 60%), linear-gradient(135deg, #eff6ff 0%, #fef3e2 50%, #ffffff 100%)",
                  ],
                }
          }
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Minimal floating elements for performance */}
        {!shouldReduceMotion && (
          <div className="absolute inset-0">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full opacity-40"
                style={{
                  left: `${20 + ((i * 20) % 60)}%`,
                  top: `${15 + ((i * 25) % 70)}%`,
                  width: `${50 + ((i * 15) % 60)}px`,
                  height: `${50 + ((i * 15) % 60)}px`,
                  background:
                    i % 2 === 0
                      ? "linear-gradient(45deg, rgba(255, 107, 53, 0.3), rgba(255, 165, 0, 0.2))"
                      : "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.15))",
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 25 + i * 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 3,
                }}
                whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Hero Section - Enhanced */}
      <section className="relative min-h-screen flex items-center z-10 pt-20">
        <motion.div
          style={{ y: heroY, rotate: heroRotate }}
          className="container mx-auto px-4 lg:px-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column - Main Title */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <h1 className="text-7xl sm:text-8xl lg:text-9xl xl:text-[10rem] font-black leading-none tracking-wider mb-8">
                  <motion.span
                    className="inline-block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: 1.05,
                          }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    UX
                  </motion.span>
                  <motion.span
                    className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent ml-4 inline-block"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: 1.05,
                            rotate: 3,
                          }
                    }
                  >
                    UI
                  </motion.span>
                </h1>

                {/* Enhanced subtitle cards */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 50, rotate: -10 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: 1.05,
                            rotate: 2,
                            y: -5,
                          }
                    }
                    className="card-brutal bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 cursor-pointer shadow-lg"
                  >
                    <span className="text-lg font-black tracking-wide">
                      DESIGN
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50, rotate: -10 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: 1.05,
                            rotate: 2,
                            y: -5,
                          }
                    }
                    className="card-brutal bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 cursor-pointer shadow-lg"
                  >
                    <span className="text-lg font-black tracking-wide">
                      RESEARCH
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50, rotate: -10 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: 1.05,
                            rotate: 2,
                            y: -5,
                          }
                    }
                    className="card-brutal bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 cursor-pointer shadow-lg"
                  >
                    <span className="text-lg font-black tracking-wide">
                      INNOVATION
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Enhanced glassmorphism */}
            <div className="lg:col-span-4 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-orange-100/40 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl">
                  <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse"></div>
                  <p className="text-xl text-gray-800 leading-relaxed tracking-wide font-medium">
                    I blend aesthetic sensibility with technical expertise to
                    create interfaces that are both beautiful and functional.
                  </p>
                </div>
              </motion.div>

              {/* Enhanced stats cards */}
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          scale: 1.05,
                          y: -5,
                        }
                  }
                  className="card-brutal bg-gradient-to-br from-blue-50 to-blue-100 cursor-pointer border border-white/40 shadow-lg p-6 text-center"
                >
                  <div className="text-3xl font-black bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mb-2">
                    2
                  </div>
                  <div className="text-gray-700 font-bold tracking-wide text-sm leading-tight">
                    Case Studies
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.7 }}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          scale: 1.05,
                          y: -5,
                        }
                  }
                  className="card-brutal bg-gradient-to-br from-orange-50 to-orange-100 cursor-pointer border border-white/40 shadow-lg p-6 text-center"
                >
                  <div className="text-3xl font-black bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2">
                    2+
                  </div>
                  <div className="text-gray-700 font-bold tracking-wide text-sm leading-tight">
                    Years Experience
                  </div>
                </motion.div>
              </div>

              {/* Enhanced CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.8 }}
              >
                <Link href="#philosophy">
                  <motion.button
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: 1.05,
                            y: -8,
                          }
                    }
                    whileTap={{ scale: 0.98 }}
                    className="btn-brutal btn-brutal-large bg-gradient-to-r from-orange-500 to-red-500 text-white w-full shadow-2xl border-0"
                  >
                    <span className="tracking-wide font-bold">
                      Explore Journey
                    </span>
                    <motion.div
                      className="inline-block ml-4"
                      animate={shouldReduceMotion ? {} : { x: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FaArrowRight />
                    </motion.div>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Philosophy Section - Enhanced tabs */}
      <section id="philosophy" className="relative py-32 lg:py-48 z-10">
        <motion.div
          style={{ y: philosophyY }}
          className="container mx-auto px-4 lg:px-6"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-8 tracking-wide">
              Design Philosophy
            </h2>
          </motion.div>

          {/* Enhanced Philosophy Tabs */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              {/* User-Centered Tab */}
              <motion.button
                onClick={() => setActivePhilosophy(0)}
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className={`card-brutal p-8 cursor-pointer transition-all duration-300 shadow-lg border ${
                  activePhilosophy === 0
                    ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-2xl border-white/20"
                    : "bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 hover:shadow-xl border-white/40"
                }`}
              >
                <FaUsers
                  className={`text-3xl mb-4 ${
                    activePhilosophy === 0 ? "text-white" : "text-blue-600"
                  }`}
                />
                <div className="font-black tracking-wide text-lg">
                  User-Centered
                </div>
              </motion.button>

              {/* Aesthetic Tab */}
              <motion.button
                onClick={() => setActivePhilosophy(1)}
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className={`card-brutal p-8 cursor-pointer transition-all duration-300 shadow-lg border ${
                  activePhilosophy === 1
                    ? "bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-2xl border-white/20"
                    : "bg-gradient-to-br from-purple-50 to-purple-100 text-gray-800 hover:shadow-xl border-white/40"
                }`}
              >
                <FaPalette
                  className={`text-3xl mb-4 ${
                    activePhilosophy === 1 ? "text-white" : "text-purple-600"
                  }`}
                />
                <div className="font-black tracking-wide text-lg">
                  Aesthetic
                </div>
              </motion.button>

              {/* Technical Tab */}
              <motion.button
                onClick={() => setActivePhilosophy(2)}
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className={`card-brutal p-8 cursor-pointer transition-all duration-300 shadow-lg border ${
                  activePhilosophy === 2
                    ? "bg-gradient-to-br from-green-500 to-green-600 text-white shadow-2xl border-white/20"
                    : "bg-gradient-to-br from-green-50 to-green-100 text-gray-800 hover:shadow-xl border-white/40"
                }`}
              >
                <FaCode
                  className={`text-3xl mb-4 ${
                    activePhilosophy === 2 ? "text-white" : "text-green-600"
                  }`}
                />
                <div className="font-black tracking-wide text-lg">
                  Technical
                </div>
              </motion.button>

              {/* Innovation Tab */}
              <motion.button
                onClick={() => setActivePhilosophy(3)}
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className={`card-brutal p-8 cursor-pointer transition-all duration-300 shadow-lg border ${
                  activePhilosophy === 3
                    ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-2xl border-white/20"
                    : "bg-gradient-to-br from-orange-50 to-orange-100 text-gray-800 hover:shadow-xl border-white/40"
                }`}
              >
                <FaLightbulb
                  className={`text-3xl mb-4 ${
                    activePhilosophy === 3 ? "text-white" : "text-orange-600"
                  }`}
                />
                <div className="font-black tracking-wide text-lg">
                  Innovation
                </div>
              </motion.button>
            </div>

            {/* Enhanced Philosophy Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhilosophy}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/50 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/80 backdrop-blur-xl border border-white/30 rounded-3xl p-16 shadow-2xl">
                  <div className="text-center">
                    {activePhilosophy === 0 && (
                      <>
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-8">
                          <FaUsers className="text-3xl" />
                        </div>
                        <h3 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-8 tracking-wide">
                          User-Centered Design
                        </h3>
                        <p className="text-xl text-gray-700 leading-relaxed tracking-wide max-w-3xl mx-auto font-medium">
                          Every design decision is made with the end user in
                          mind. I conduct thorough user research, create
                          detailed personas, and validate designs through
                          testing to ensure intuitive and meaningful experiences
                          that solve real problems.
                        </p>
                      </>
                    )}
                    {activePhilosophy === 1 && (
                      <>
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-8">
                          <FaPalette className="text-3xl" />
                        </div>
                        <h3 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-8 tracking-wide">
                          Aesthetic Excellence
                        </h3>
                        <p className="text-xl text-gray-700 leading-relaxed tracking-wide max-w-3xl mx-auto font-medium">
                          Beautiful interfaces that captivate users while
                          maintaining functionality. I believe in the power of
                          visual hierarchy, color psychology, and thoughtful
                          typography to create designs that are both stunning
                          and purposeful.
                        </p>
                      </>
                    )}
                    {activePhilosophy === 2 && (
                      <>
                        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white mx-auto mb-8">
                          <FaCode className="text-3xl" />
                        </div>
                        <h3 className="text-4xl font-black bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-8 tracking-wide">
                          Technical Feasibility
                        </h3>
                        <p className="text-xl text-gray-700 leading-relaxed tracking-wide max-w-3xl mx-auto font-medium">
                          Designs that developers love to implement. With my
                          development background, I create practical solutions
                          with clean handoffs, consistent design systems, and
                          realistic technical requirements that ensure smooth
                          implementation.
                        </p>
                      </>
                    )}
                    {activePhilosophy === 3 && (
                      <>
                        <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white mx-auto mb-8">
                          <FaLightbulb className="text-3xl" />
                        </div>
                        <h3 className="text-4xl font-black bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent mb-8 tracking-wide">
                          Innovation Driven
                        </h3>
                        <p className="text-xl text-gray-700 leading-relaxed tracking-wide max-w-3xl mx-auto font-medium">
                          Pushing boundaries while maintaining usability. I
                          explore emerging design trends, experiment with new
                          interaction patterns, and challenge conventional
                          approaches to create forward-thinking solutions that
                          delight users.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      {/* Process Section - Enhanced */}
      <section
        id="process"
        className="relative py-32 lg:py-48 z-10 bg-gradient-to-br from-orange-50/50 to-blue-50/50"
      >
        <motion.div
          style={{ x: processX }}
          className="container mx-auto px-4 lg:px-6"
        >
          {/* Enhanced Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-24"
          >
            <div className="flex items-center justify-center gap-8 mb-8">
              <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent tracking-wide">
                My Process
              </h2>
              <motion.button
                onClick={() => setIsProcessPlaying(!isProcessPlaying)}
                whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl shadow-2xl border-4 border-white/50"
              >
                {isProcessPlaying ? <FaPause /> : <FaPlay className="ml-1" />}
              </motion.button>
            </div>
          </motion.div>

          {/* Enhanced Process Steps */}
          <div className="relative">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-24 ml-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="card-brutal p-12 relative overflow-hidden bg-gradient-to-br from-blue-50/80 to-blue-100/80 shadow-2xl border border-white/30">
                    <motion.div
                      className="absolute -top-6 -right-6 w-24 h-24 rounded-full flex items-center justify-center text-white font-black text-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-2xl"
                      animate={
                        isProcessPlaying && !shouldReduceMotion
                          ? {
                              rotate: [0, 360],
                              scale: [1, 1.1, 1],
                            }
                          : {}
                      }
                      transition={{
                        duration: 3,
                        repeat: isProcessPlaying ? Infinity : 0,
                      }}
                    >
                      01
                    </motion.div>
                    <div className="mt-8">
                      <div className="flex items-center mb-8">
                        <motion.div
                          className="text-4xl mr-6 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent"
                          whileHover={
                            shouldReduceMotion ? {} : { scale: 1.2, rotate: 15 }
                          }
                          transition={{ duration: 0.3 }}
                        >
                          <FaSearch />
                        </motion.div>
                        <h3 className="text-3xl lg:text-4xl font-black text-gray-900 tracking-wide">
                          Research & Discovery
                        </h3>
                      </div>
                      <p className="text-lg lg:text-xl text-gray-700 leading-relaxed tracking-wide font-medium">
                        I begin by asking the right questions. You cannot
                        identify the problem if you are not asking the right
                        questions. This includes user interviews and competitive
                        analysis.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={
                    shouldReduceMotion ? {} : { scale: 1.05, rotate: 2 }
                  }
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-100/50 rounded-3xl blur-xl transform rotate-3"></div>
                    <div className="relative card-brutal overflow-hidden shadow-2xl border border-white/30">
                      <div className="relative overflow-hidden">
                        <Image
                          src="/UserResearch.png"
                          alt="Research & Discovery"
                          width={600}
                          height={400}
                          className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-24 ml-32"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="lg:order-2"
                >
                  <div className="card-brutal p-12 relative overflow-hidden bg-gradient-to-br from-purple-50/80 to-purple-100/80 shadow-2xl border border-white/30">
                    <motion.div
                      className="absolute -top-6 -right-6 w-24 h-24 rounded-full flex items-center justify-center text-white font-black text-2xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-2xl"
                      animate={
                        isProcessPlaying && !shouldReduceMotion
                          ? {
                              rotate: [0, 360],
                              scale: [1, 1.1, 1],
                            }
                          : {}
                      }
                      transition={{
                        duration: 3,
                        repeat: isProcessPlaying ? Infinity : 0,
                        delay: 0.5,
                      }}
                    >
                      02
                    </motion.div>
                    <div className="mt-8">
                      <div className="flex items-center mb-8">
                        <motion.div
                          className="text-4xl mr-6 bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent"
                          whileHover={
                            shouldReduceMotion ? {} : { scale: 1.2, rotate: 15 }
                          }
                          transition={{ duration: 0.3 }}
                        >
                          <FaPalette />
                        </motion.div>
                        <h3 className="text-3xl lg:text-4xl font-black text-gray-900 tracking-wide">
                          Design & Prototyping
                        </h3>
                      </div>
                      <p className="text-lg lg:text-xl text-gray-700 leading-relaxed tracking-wide font-medium">
                        From wireframes to high-fidelity mockups, I create
                        solutions that solve real problems. Interactive
                        prototypes help validate ideas before implementation.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="lg:order-1"
                  whileHover={
                    shouldReduceMotion ? {} : { scale: 1.05, rotate: -2 }
                  }
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-100/50 rounded-3xl blur-xl transform rotate-3"></div>
                    <div className="relative card-brutal overflow-hidden shadow-2xl border border-white/30">
                      <div className="relative overflow-hidden">
                        <Image
                          src="/Prototyping.png"
                          alt="Design & Prototyping"
                          width={600}
                          height={400}
                          className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-24 ml-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="card-brutal p-12 relative overflow-hidden bg-gradient-to-br from-green-50/80 to-green-100/80 shadow-2xl border border-white/30">
                    <motion.div
                      className="absolute -top-6 -right-6 w-24 h-24 rounded-full flex items-center justify-center text-white font-black text-2xl bg-gradient-to-br from-green-500 to-green-600 shadow-2xl"
                      animate={
                        isProcessPlaying && !shouldReduceMotion
                          ? {
                              rotate: [0, 360],
                              scale: [1, 1.1, 1],
                            }
                          : {}
                      }
                      transition={{
                        duration: 3,
                        repeat: isProcessPlaying ? Infinity : 0,
                        delay: 1.0,
                      }}
                    >
                      03
                    </motion.div>
                    <div className="mt-8">
                      <div className="flex items-center mb-8">
                        <motion.div
                          className="text-4xl mr-6 bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent"
                          whileHover={
                            shouldReduceMotion ? {} : { scale: 1.2, rotate: 15 }
                          }
                          transition={{ duration: 0.3 }}
                        >
                          <FaChartLine />
                        </motion.div>
                        <h3 className="text-3xl lg:text-4xl font-black text-gray-900 tracking-wide">
                          Testing & Implementation
                        </h3>
                      </div>
                      <p className="text-lg lg:text-xl text-gray-700 leading-relaxed tracking-wide font-medium">
                        User testing validates designs, while close
                        collaboration with developers ensures successful
                        implementation. I remain involved through launch and
                        beyond.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={
                    shouldReduceMotion ? {} : { scale: 1.05, rotate: 2 }
                  }
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-100/50 rounded-3xl blur-xl transform rotate-3"></div>
                    <div className="relative card-brutal overflow-hidden shadow-2xl border border-white/30">
                      <div className="relative overflow-hidden">
                        <Image
                          src="/Testing.png"
                          alt="Testing & Implementation"
                          width={600}
                          height={400}
                          className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section - Enhanced */}
      <section className="relative py-32 lg:py-48 z-10">
        <motion.div
          style={{ scale: projectsScale }}
          className="container mx-auto px-4 lg:px-6"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-24"
          >
            <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-8 tracking-wide">
              Featured Work
            </h2>
          </motion.div>

          {/* Enhanced Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Enhanced GrammarlyGO */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={
                shouldReduceMotion ? {} : { scale: 1.03, y: -15, rotateY: 5 }
              }
              className="group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-cyan-200/50 rounded-3xl blur-xl"></div>
                <div className="relative card-brutal p-10 bg-gradient-to-br from-blue-50/90 to-cyan-50/90 backdrop-blur-xl h-full shadow-2xl border border-white/40">
                  <div className="h-full flex flex-col">
                    <div className="flex items-center mb-8">
                      <motion.div
                        className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mr-6 shadow-lg"
                        whileHover={
                          shouldReduceMotion ? {} : { scale: 1.2, rotate: 15 }
                        }
                        transition={{ duration: 0.3 }}
                      >
                        <FaLightbulb className="text-3xl" />
                      </motion.div>
                      <h3 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent tracking-wide">
                        GrammarlyGO
                      </h3>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed tracking-wide mb-8 flex-grow font-medium">
                      Turning one-time AI users into loyal daily writers through
                      strategic UX improvements and user-centered design.
                    </p>

                    {/* Enhanced preview */}
                    <motion.div
                      className="mb-8 p-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-xl"
                      whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                    >
                      <div className="text-white text-center">
                        <div className="text-2xl font-black mb-2">
                          AI Writing Assistant
                        </div>
                        <div className="text-blue-100 text-sm">
                          Case Study Preview
                        </div>
                      </div>
                    </motion.div>

                    <Link href="/ux-ui/grammarlygo">
                      <motion.button
                        whileHover={
                          shouldReduceMotion
                            ? {}
                            : {
                                scale: 1.05,
                                y: -5,
                              }
                        }
                        whileTap={{ scale: 0.98 }}
                        className="btn-brutal w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-xl border-0"
                      >
                        <span className="tracking-wide font-bold">
                          View Case Study
                        </span>
                        <FaArrowRight className="ml-3" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Spotify */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={
                shouldReduceMotion ? {} : { scale: 1.03, y: -15, rotateY: -5 }
              }
              className="group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-200/50 to-emerald-200/50 rounded-3xl blur-xl"></div>
                <div className="relative card-brutal p-10 bg-gradient-to-br from-green-50/90 to-emerald-50/90 backdrop-blur-xl h-full shadow-2xl border border-white/40">
                  <div className="h-full flex flex-col">
                    <div className="flex items-center mb-8">
                      <motion.div
                        className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white mr-6 shadow-lg"
                        whileHover={
                          shouldReduceMotion ? {} : { scale: 1.2, rotate: 15 }
                        }
                        transition={{ duration: 0.3 }}
                      >
                        <FaRocket className="text-3xl" />
                      </motion.div>
                      <h3 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent tracking-wide">
                        Spotify Redesign
                      </h3>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed tracking-wide mb-8 flex-grow font-medium">
                      Millions of clicks saved a day through intuitive
                      navigation improvements and enhanced user experience.
                    </p>

                    {/* Enhanced project preview */}
                    <motion.div
                      className="mb-8 relative"
                      whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                    >
                      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 relative overflow-hidden shadow-xl">
                        <Image
                          src="/Spotify_Project/Desktop-Home-Revamped.jpg"
                          alt="Spotify Desktop"
                          width={400}
                          height={250}
                          className="w-full h-40 object-cover rounded-xl"
                        />
                        <motion.div
                          className="absolute -top-4 -right-4 w-12 h-24 shadow-2xl"
                          whileHover={
                            shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }
                          }
                        >
                          <Image
                            src="/Iphone-Mockup.png"
                            alt="Mobile"
                            width={60}
                            height={120}
                            className="w-full h-auto drop-shadow-2xl"
                          />
                        </motion.div>
                        <div className="absolute bottom-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          Live Project
                        </div>
                      </div>
                    </motion.div>

                    <div className="flex gap-4">
                      <Link href="/ux-ui/spotify" className="flex-1">
                        <motion.button
                          whileHover={
                            shouldReduceMotion
                              ? {}
                              : {
                                  scale: 1.05,
                                  y: -5,
                                }
                          }
                          whileTap={{ scale: 0.98 }}
                          className="btn-brutal w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-xl border-0"
                        >
                          <span className="tracking-wide font-bold">
                            View Project
                          </span>
                        </motion.button>
                      </Link>

                      <Link
                        href="https://www.figma.com/design/HROuWDR5pEsbKCKsZqNSyW/Personal?node-id=112-2&t=SqzgTnrOjo0heMmc-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <motion.button
                          whileHover={
                            shouldReduceMotion
                              ? {}
                              : {
                                  scale: 1.05,
                                  y: -5,
                                }
                          }
                          whileTap={{ scale: 0.98 }}
                          className="btn-brutal w-full bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-xl border-0"
                        >
                          <span className="tracking-wide font-bold">Figma</span>
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-32 lg:py-48 z-10 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-6xl mx-auto"
          >
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-20 border border-white/20 shadow-2xl">
                <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-12 leading-tight tracking-wide">
                  Ready to See My
                  <br />
                  <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                    Development Skills?
                  </span>
                </h2>

                <p className="text-xl lg:text-2xl text-white/90 mb-16 leading-relaxed max-w-4xl mx-auto tracking-wide font-medium">
                  Discover how I bridge design and code to create exceptional
                  digital experiences from concept to deployment.
                </p>

                <Link href="/dev">
                  <motion.button
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: 1.05,
                            y: -8,
                          }
                    }
                    whileTap={{ scale: 0.98 }}
                    className="btn-brutal btn-brutal-large bg-white text-gray-900 hover:bg-gray-50 shadow-2xl border-0"
                  >
                    <span className="tracking-wide font-black text-xl">
                      View Development Work
                    </span>
                    <motion.div
                      className="inline-block ml-6"
                      animate={shouldReduceMotion ? {} : { x: [0, 8, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      <FaArrowRight className="text-xl" />
                    </motion.div>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
