"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaUserCircle,
  FaBriefcase,
  FaGraduationCap,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaCode,
  FaPalette,
  FaRocket,
} from "react-icons/fa";
import SafeHydrate from "../components/SafeHydrate";

// Lazy load components
const Experience = React.lazy(() => import("../components/Experience"));

function AboutContent() {
  const [mounted, setMounted] = useState(false);
  const [heroAnimationStarted, setHeroAnimationStarted] = useState(false);
  const [activeTab, setActiveTab] = useState("professional");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    // Start hero animations after page transition (1.5s delay)
    const timer = setTimeout(() => {
      setHeroAnimationStarted(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const titleAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const cardHover = {
    rest: {
      y: 0,
      boxShadow: "8px 8px 0px rgba(0, 0, 0, 0.9)",
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hover: {
      y: -8,
      x: -8,
      boxShadow: "12px 12px 0px rgba(0, 0, 0, 0.95)",
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const buttonHover = {
    rest: {
      y: 0,
      boxShadow: "4px 4px 0px rgba(0, 0, 0, 0.9)",
      transition: {
        duration: 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hover: {
      y: -4,
      x: -4,
      boxShadow: "6px 6px 0px rgba(0, 0, 0, 0.95)",
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-none animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black relative">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Enhanced Liquid Metal Orb - Maximum Impact */}
        <div className="absolute top-16 right-12 sm:top-20 sm:right-16 pointer-events-none z-10">
          {/* ParticleField component was removed as per edit hint */}
        </div>

        <div className="max-w-7xl mx-auto relative z-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-12 sm:space-y-16"
          >
            {/* Profile Badge */}
            <motion.div
              className="inline-block bg-black text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 font-black text-xs sm:text-sm tracking-widest uppercase border-4 border-black shadow-brutal"
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              animate={
                heroAnimationStarted
                  ? { opacity: 1, x: 0, scale: 1 }
                  : { opacity: 0, x: -50, scale: 0.8 }
              }
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 100,
              }}
              whileHover="hover"
              variants={buttonHover}
            >
              About Me
            </motion.div>

            {/* Main Title */}
            <div className="space-y-8 sm:space-y-12">
              <motion.h1
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black leading-none tracking-tighter"
                variants={titleAnimation}
                initial="hidden"
                animate={heroAnimationStarted ? "visible" : "hidden"}
              >
                <span className="text-black">
                  {"HEY, I'M".split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={letterAnimation}
                      className="inline-block"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </span>
                <br />
                <span className="block text-orange-500 mt-2 sm:mt-4">
                  {"JAKE".split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={letterAnimation}
                      className="inline-block"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>

              <motion.p
                className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 leading-relaxed max-w-5xl font-medium"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  heroAnimationStarted
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 2.5,
                }}
              >
                I'm from both the worlds of UX/UI design and software
                development. I can lead the development of an app start to
                finish or be the bridge to connect two teams.
              </motion.p>
            </div>

            {/* Social Links */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={
                heroAnimationStarted
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 50, scale: 0.95 }
              }
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 3.2,
                type: "spring",
                stiffness: 80,
              }}
            >
              <motion.a
                href="https://linkedin.com/in/jake-cochran"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 font-black tracking-widest transition-all duration-300 flex items-center justify-center border-4 border-black shadow-brutal text-sm sm:text-base"
                whileHover="hover"
                variants={buttonHover}
                initial="rest"
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="mr-2 sm:mr-3 text-sm sm:text-base" />
                <span>LINKEDIN</span>
              </motion.a>
              <motion.a
                href="https://github.com/jecochran-0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 font-black tracking-widest transition-all duration-300 flex items-center justify-center border-4 border-black shadow-brutal text-sm sm:text-base"
                whileHover="hover"
                variants={buttonHover}
                initial="rest"
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="mr-2 sm:mr-3 text-sm sm:text-base" />
                <span>GITHUB</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black mb-16 sm:mb-20 text-center tracking-tighter text-gray-900">
              WHAT I BRING
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              {[
                {
                  icon: FaPalette,
                  title: "Design Sensibility",
                  description:
                    "I approach problems with a designer's eye, focusing on user needs and creating intuitive interfaces.",
                  color: "blue",
                },
                {
                  icon: FaCode,
                  title: "Developer Mindset",
                  description:
                    "I can communicate in the technical world, making my UX process more efficient from the start, and I can also be the one to develop my designs.",
                  color: "purple",
                },
                {
                  icon: FaRocket,
                  title: "Problem Solver",
                  description:
                    "I thrive on challenges and finding elegant solutions to complex problems.",
                  color: "green",
                },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-white border-4 border-black shadow-brutal p-6 sm:p-8 lg:p-12 cursor-pointer"
                  whileHover="hover"
                  variants={cardHover}
                  initial="rest"
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-${skill.color}-500 border-4 border-black flex items-center justify-center mb-6 sm:mb-8`}
                  >
                    <skill.icon className="text-white text-2xl sm:text-3xl" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-gray-900 tracking-tight">
                    {skill.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Background Story */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black mb-16 sm:mb-20 text-center tracking-tighter text-gray-900">
              MY STORY
            </h2>

            <motion.div
              className="bg-white border-4 border-black shadow-brutal p-6 sm:p-8 lg:p-12 xl:p-16 cursor-pointer"
              whileHover="hover"
              variants={cardHover}
              initial="rest"
            >
              <div className="max-w-4xl mx-auto">
                <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed font-medium">
                  I'm a new grad from the University of Wisconsin Madison with a
                  unique perspective that bridges design and development. My
                  journey began when I wanted to build a computer and have a
                  sketchbook as a kid. I have an itch to logically solve
                  problems and the urge to create.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-12 leading-relaxed font-medium">
                  What drives me is the reaction of user's enjoying an end
                  product.
                </p>

                <div className="pt-6 sm:pt-8 border-t-4 border-black">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-4 sm:mb-6 text-gray-900 tracking-tight">
                    When I'm not coding...
                  </h3>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    <span className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-50 text-blue-700 border-2 border-black text-sm sm:text-base font-bold">
                      Music Production
                    </span>
                    <span className="inline-flex items-center px-3 sm:px-4 py-2 bg-red-50 text-red-700 border-2 border-black text-sm sm:text-base font-bold">
                      Flag Football
                    </span>
                    <span className="inline-flex items-center px-3 sm:px-4 py-2 bg-green-50 text-green-700 border-2 border-black text-sm sm:text-base font-bold">
                      Chess
                    </span>
                    <span className="inline-flex items-center px-3 sm:px-4 py-2 bg-purple-50 text-purple-700 border-2 border-black text-sm sm:text-base font-bold">
                      Gaming
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Tabs */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black mb-16 sm:mb-20 text-center tracking-tighter text-gray-900">
              EXPERIENCE
            </h2>

            {/* Tab Buttons */}
            <div className="flex flex-wrap justify-center mb-12 sm:mb-16">
              <div className="bg-white border-4 border-black shadow-brutal p-2">
                <button
                  onClick={() => setActiveTab("professional")}
                  className={`px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-black transition-all duration-300 border-2 ${
                    activeTab === "professional"
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-black hover:bg-gray-100"
                  }`}
                >
                  <FaBriefcase className="inline mr-2 mb-1" /> PROFESSIONAL
                </button>
                <button
                  onClick={() => setActiveTab("education")}
                  className={`px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-black transition-all duration-300 border-2 ${
                    activeTab === "education"
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-black hover:bg-gray-100"
                  }`}
                >
                  <FaGraduationCap className="inline mr-2 mb-1" /> EDUCATION
                </button>
                <button
                  onClick={() => setActiveTab("personal")}
                  className={`px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-black transition-all duration-300 border-2 ${
                    activeTab === "personal"
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-black hover:bg-gray-100"
                  }`}
                >
                  <FaUserCircle className="inline mr-2 mb-1" /> PERSONAL
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {/* Professional Journey */}
              {activeTab === "professional" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white border-4 border-black shadow-brutal p-6 sm:p-8 lg:p-12"
                >
                  <React.Suspense
                    fallback={
                      <div className="animate-pulse space-y-8">
                        <div className="h-48 bg-gray-200 border-4 border-black"></div>
                        <div className="h-48 bg-gray-200 border-4 border-black"></div>
                      </div>
                    }
                  >
                    <Experience />
                  </React.Suspense>
                </motion.div>
              )}

              {/* Education Journey */}
              {activeTab === "education" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white border-4 border-black shadow-brutal p-6 sm:p-8 lg:p-12"
                >
                  <div className="flex items-center justify-center mb-8 sm:mb-12">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500 border-4 border-black flex items-center justify-center mr-6 sm:mr-8">
                      <FaGraduationCap className="text-white text-2xl sm:text-3xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                        University of Wisconsin
                      </h3>
                      <p className="text-base sm:text-lg text-gray-700 font-medium">
                        Bachelor&apos;s in Consumer Behavior and Marketplace
                        Studies. Minors in Computer Science and Entrepreneurship
                      </p>
                      <p className="text-blue-600 font-black text-base sm:text-lg">
                        Expected Graduation: May 2025
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 sm:space-y-8">
                    <div className="border-l-4 border-blue-500 pl-6 sm:pl-8 py-4 sm:py-6">
                      <h4 className="font-black text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4 tracking-tight">
                        Relevant Coursework
                      </h4>
                      <p className="text-base sm:text-lg text-gray-700 font-medium">
                        Mobile Applications, User Interface Design, Data
                        Structures & Algorithms, Software Engineering, Consumer
                        Insights
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Personal Journey */}
              {activeTab === "personal" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-4xl mx-auto"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                    <motion.div
                      className="bg-white border-4 border-black shadow-brutal p-6 sm:p-8 cursor-pointer"
                      whileHover="hover"
                      variants={cardHover}
                      initial="rest"
                    >
                      <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-gray-900 tracking-tight">
                        Flag Football
                      </h3>
                      <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 font-medium">
                        I'm a big football fan (go pats), and I also like to
                        play flag football and tennis.
                      </p>
                      <div className="relative overflow-hidden border-4 border-black">
                        <img
                          src="/Tennis.jpg"
                          alt="Tennis Photo"
                          className="w-full h-48 object-cover"
                          loading="lazy"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-3 sm:p-4">
                          <p className="text-sm sm:text-base font-bold">
                            Tennis at University of Wisconsin
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="bg-white border-4 border-black shadow-brutal p-6 sm:p-8 cursor-pointer"
                      whileHover="hover"
                      variants={cardHover}
                      initial="rest"
                    >
                      <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-gray-900 tracking-tight">
                        Chess
                      </h3>
                      <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 font-medium">
                        I pass the time with a chess match on chess.com
                      </p>
                      <div className="relative overflow-hidden border-4 border-black">
                        <img
                          src="/Chess.jpg"
                          alt="Chess Game"
                          className="w-full h-48 object-cover"
                          loading="lazy"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-3 sm:p-4">
                          <p className="text-sm sm:text-base font-bold">
                            Chess matches are my favorite way to relax
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="bg-white border-4 border-black shadow-brutal p-6 sm:p-8 cursor-pointer md:col-span-2"
                      whileHover="hover"
                      variants={cardHover}
                      initial="rest"
                    >
                      <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-gray-900 tracking-tight">
                        Gaming & Game Design
                      </h3>
                      <p className="text-base sm:text-lg text-gray-700 font-medium">
                        I've played video games since I was a kid, I've become
                        familiar with game design interfaces and principles.
                        Maybe you've seen me in the top ranks of a game you've
                        played.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
          >
            <motion.div
              className="bg-white border-4 border-black shadow-brutal p-8 sm:p-12 lg:p-20 cursor-pointer"
              whileHover="hover"
              variants={cardHover}
              initial="rest"
            >
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 sm:mb-10 tracking-tighter">
                LET&apos;S BUILD
                <span className="block text-orange-500 mt-2 sm:mt-4">
                  SOMETHING AMAZING
                </span>
              </h2>
              <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-12 sm:mb-16 leading-relaxed font-medium">
                I'm always open to new opportunities and collaborations.
              </p>
              <motion.a
                href="mailto:jake.e.cochran@gmail.com"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 lg:px-12 xl:px-20 py-4 sm:py-6 lg:py-8 xl:py-10 font-black tracking-widest transition-all duration-300 flex items-center justify-center border-4 border-black shadow-brutal text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl"
                whileHover="hover"
                variants={buttonHover}
                initial="rest"
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="mr-3 sm:mr-4 lg:mr-6 xl:mr-10 text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl" />
                <span>GET IN TOUCH</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Export a wrapper component that uses SafeHydrate
export default function About() {
  return (
    <SafeHydrate
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-none animate-spin" />
        </div>
      }
    >
      <AboutContent />
    </SafeHydrate>
  );
}
