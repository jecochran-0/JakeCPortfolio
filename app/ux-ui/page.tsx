"use client";

import React, { useState, useEffect, useRef } from "react";
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
  const spotifyVideoRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Intersection Observer for video autoplay
  useEffect(() => {
    const videoElement = spotifyVideoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play().catch(() => {
              // Autoplay failed, which is expected for some browsers
            });
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.5 } // Play when 50% of video is visible
    );

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, [mounted]);

  // Optimized parallax effects with mobile considerations
  const heroY = useTransform(
    scrollY,
    [0, 1200],
    [0, shouldReduceMotion ? 0 : -80]
  );
  const heroRotate = useTransform(
    scrollY,
    [0, 1200],
    [0, shouldReduceMotion ? 0 : 0.5]
  );
  const philosophyY = useTransform(
    scrollY,
    [600, 1800],
    [0, shouldReduceMotion ? 0 : -40]
  );
  const processX = useTransform(
    scrollY,
    [1000, 2200],
    [0, shouldReduceMotion ? 0 : 20]
  );
  const projectsScale = useTransform(
    scrollY,
    [1400, 2800],
    [1, shouldReduceMotion ? 1 : 0.99]
  );

  // Optimized animation variants
  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const slideInVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen bg-white text-black overflow-hidden">
      {/* Background removed for brutalist theme */}
      <div className="hidden" />

      {/* Hero Section - Mobile Optimized */}
      <section className="relative min-h-screen flex items-center z-10 pt-16 sm:pt-20 pb-8 sm:pb-16">
        <motion.div
          style={{ y: heroY, rotate: heroRotate }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Left Column - Main Title - Mobile First */}
            <div className="lg:col-span-8 text-center lg:text-left">
              <motion.div
                variants={slideInVariant}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {/* Mobile optimized typography */}
                <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black leading-none tracking-tight mb-6 sm:mb-8">
                  <motion.span
                    className="inline-block text-black"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    UX
                  </motion.span>
                  <motion.span
                    className="text-orange-400 ml-2 sm:ml-4 inline-block"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  >
                    UI
                  </motion.span>
                </h1>

                {/* Subtitle cards converted to brutalist chips */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {[
                    { word: "DISCOVER", delay: 0.4 },
                    { word: "DEFINE", delay: 0.5 },
                    { word: "DELIVER", delay: 0.6 },
                  ].map((item) => (
                    <motion.div
                      key={item.word}
                      variants={fadeInVariant}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.6, delay: item.delay }}
                      whileHover={
                        shouldReduceMotion ? {} : { scale: 1.03, y: -3 }
                      }
                      className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-white text-black border-4 border-black shadow-brutal cursor-pointer transition-all duration-300 hover:translate-x-[-6px] hover:translate-y-[-6px]"
                    >
                      <span className="text-sm sm:text-base md:text-lg font-black tracking-wide">
                        {item.word}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Mobile Optimized Layout */}
            <div className="lg:col-span-4 space-y-6 sm:space-y-8 w-full max-w-md mx-auto lg:max-w-none">
              {/* Description Card - Brutalist */}
              <motion.div
                variants={fadeInVariant}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={shouldReduceMotion ? {} : { scale: 1.01, y: -3 }}
                className="card-brutal p-6 sm:p-8"
              >
                <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed tracking-wide font-medium">
                  I blend aesthetic sensibility with technical expertise to
                  create interfaces that are both beautiful and functional.
                </p>
              </motion.div>

              {/* Stats cards - Brutalist */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  variants={fadeInVariant}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -3 }}
                  className="card-brutal p-4 sm:p-6 text-center"
                >
                  <div className="text-2xl sm:text-3xl font-black text-black mb-1 sm:mb-2">
                    2
                  </div>
                  <div className="text-gray-700 font-bold tracking-wide text-xs sm:text-sm leading-tight">
                    Case Studies
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeInVariant}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.6, delay: 0.9 }}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -3 }}
                  className="card-brutal p-4 sm:p-6 text-center"
                >
                  <div className="text-2xl sm:text-3xl font-black text-orange-400 mb-1 sm:mb-2">
                    2+
                  </div>
                  <div className="text-gray-700 font-bold tracking-wide text-xs sm:text-sm leading-tight">
                    Years Experience
                  </div>
                </motion.div>
              </div>

              {/* CTA Button - Brutalist */}
              <motion.div
                variants={fadeInVariant}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <Link href="#philosophy">
                  <motion.button
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: 1.02,
                            y: -3,
                            transition: {
                              type: "spring",
                              stiffness: 260,
                              damping: 22,
                            },
                          }
                    }
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-brutal btn-card btn-no-shift bg-orange-400 text-black"
                  >
                    <span className="tracking-wide font-bold">
                      Explore Journey
                    </span>
                    <motion.div
                      className="inline-block ml-3 sm:ml-4"
                      animate={shouldReduceMotion ? {} : { x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FaArrowRight className="text-sm sm:text-base" />
                    </motion.div>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Philosophy Section - Mobile Optimized */}
      <section
        id="philosophy"
        className="relative py-16 sm:py-24 md:py-32 lg:py-48 z-10"
      >
        <motion.div
          style={{ y: philosophyY }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-black mb-6 sm:mb-8 tracking-tight">
              Design Philosophy
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Philosophy tabs - Brutalist */}
            <div className="grid grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16">
              {[
                { id: 0, icon: FaUsers, title: "User-Centered" },
                { id: 1, icon: FaPalette, title: "Aesthetic" },
                { id: 2, icon: FaCode, title: "Technical" },
                { id: 3, icon: FaLightbulb, title: "Innovation" },
              ].map((item) => {
                const Icon = item.icon;
                const isActive = activePhilosophy === item.id;
                return (
                  <motion.button
                    key={item.title}
                    onClick={() => setActivePhilosophy(item.id)}
                    whileHover={
                      shouldReduceMotion ? {} : { scale: 1.03, y: -3 }
                    }
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 sm:p-6 md:p-8 cursor-pointer transition-all duration-200 border-4 border-black shadow-brutal ${
                      isActive
                        ? "bg-orange-400 text-black"
                        : "bg-white text-black"
                    }`}
                  >
                    <Icon className="text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-4" />
                    <div className="font-black tracking-wide text-xs sm:text-sm md:text-base lg:text-lg">
                      {item.title}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Philosophy Content - Converted to brutalist card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhilosophy}
                variants={fadeInVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.3 }}
                className="card-brutal p-8 sm:p-12 md:p-16"
              >
                <div className="text-center">
                  {activePhilosophy === 0 && (
                    <>
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-400 border-4 border-black flex items-center justify-center text-black mx-auto mb-6 sm:mb-8">
                        <FaUsers className="text-2xl sm:text-3xl" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-6 sm:mb-8 tracking-tight">
                        User-Centered Design
                      </h3>
                      <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed tracking-wide max-w-3xl mx-auto font-medium">
                        Every design decision is made with the end user in mind.
                        I conduct thorough user research, create detailed
                        personas, and validate designs through testing to ensure
                        intuitive and meaningful experiences that solve real
                        problems.
                      </p>
                    </>
                  )}
                  {activePhilosophy === 1 && (
                    <>
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-400 border-4 border-black flex items-center justify-center text-black mx-auto mb-6 sm:mb-8">
                        <FaPalette className="text-2xl sm:text-3xl" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-6 sm:mb-8 tracking-tight">
                        Aesthetic Excellence
                      </h3>
                      <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed tracking-wide max-w-3xl mx-auto font-medium">
                        Visual clarity, hierarchy, and rhythm guide my design
                        decisions. I favor bold typography, strong grids, and
                        purposeful color to create memorable interfaces.
                      </p>
                    </>
                  )}
                  {activePhilosophy === 2 && (
                    <>
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-400 border-4 border-black flex items-center justify-center text-black mx-auto mb-6 sm:mb-8">
                        <FaCode className="text-2xl sm:text-3xl" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-6 sm:mb-8 tracking-tight">
                        Technical Integrity
                      </h3>
                      <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed tracking-wide max-w-3xl mx-auto font-medium">
                        I bridge design and engineering. My solutions are
                        feasible, scalable, and considerate of performance and
                        accessibility from day one.
                      </p>
                    </>
                  )}
                  {activePhilosophy === 3 && (
                    <>
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-400 border-4 border-black flex items-center justify-center text-black mx-auto mb-6 sm:mb-8">
                        <FaLightbulb className="text-2xl sm:text-3xl" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-6 sm:mb-8 tracking-tight">
                        Innovation Mindset
                      </h3>
                      <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed tracking-wide max-w-3xl mx-auto font-medium">
                        I prototype quickly and iterate on feedback. The focus
                        is on delivering measurable impact, not novelty for its
                        own sake.
                      </p>
                    </>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      {/* Process Section - Mobile Optimized */}
      <section
        id="process"
        className="relative py-16 sm:py-24 md:py-32 lg:py-48 z-10 bg-white"
      >
        <motion.div
          style={{ x: processX }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-black tracking-wide">
                My Process
              </h2>
              <motion.button
                onClick={() => setIsProcessPlaying(!isProcessPlaying)}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 1.04,
                        transition: {
                          type: "spring",
                          stiffness: 240,
                          damping: 20,
                        },
                      }
                }
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-400 border-4 border-black rounded-none flex items-center justify-center text-black text-lg sm:text-xl md:text-2xl shadow-brutal shrink-0"
              >
                {isProcessPlaying ? <FaPause /> : <FaPlay className="ml-1" />}
              </motion.button>
            </div>
          </motion.div>

          {/* Process Steps - Mobile Optimized */}
          <div className="relative space-y-16 sm:space-y-20 md:space-y-24">
            {[
              {
                step: "01",
                title: "Research & Discovery",
                description:
                  "I begin by asking the right questions. You cannot identify the problem if you are not asking the right questions. This includes user interviews and competitive analysis.",
                image: "/UserResearch.png",
                icon: FaSearch,
                gradient: "",
                bg: "",
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description:
                  "From wireframes to high-fidelity mockups, I create solutions that solve real problems. Interactive prototypes help validate ideas before implementation.",
                image: "/Prototyping.png",
                icon: FaPalette,
                gradient: "",
                bg: "",
              },
              {
                step: "03",
                title: "Testing & Implementation",
                description:
                  "User testing validates designs, while close collaboration with developers ensures successful implementation. I remain involved through launch and beyond.",
                image: "/Testing.png",
                icon: FaChartLine,
                gradient: "",
                bg: "",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.step}
                  variants={slideInVariant}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`${
                    index === 1
                      ? "md:ml-16 lg:ml-32"
                      : index === 2
                      ? "md:ml-8 lg:ml-16"
                      : "ml-0"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                    {/* Content Card */}
                    <motion.div
                      whileHover={
                        shouldReduceMotion
                          ? {}
                          : {
                              scale: 1.01,
                              y: -4,
                              transition: {
                                type: "spring",
                                stiffness: 260,
                                damping: 22,
                              },
                            }
                      }
                      transition={{ duration: 0.2 }}
                      className={index === 1 ? "lg:order-2" : ""}
                    >
                      <div className="card-brutal p-8 sm:p-10 md:p-12 relative overflow-hidden">
                        <motion.div
                          className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-orange-400 border-4 border-black rounded-none flex items-center justify-center text-black font-black text-lg sm:text-xl md:text-2xl shadow-brutal"
                          animate={
                            isProcessPlaying && !shouldReduceMotion
                              ? {
                                  rotate: [0, 360],
                                  scale: [1, 1.05, 1],
                                }
                              : {}
                          }
                          transition={{
                            duration: 4,
                            repeat: isProcessPlaying ? Infinity : 0,
                            delay: index * 0.5,
                          }}
                        >
                          {item.step}
                        </motion.div>
                        <div className="mt-6 sm:mt-8">
                          <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
                            <motion.div
                              className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-400 border-4 border-black flex items-center justify-center text-black mb-4 sm:mb-0 sm:mr-6"
                              whileHover={
                                shouldReduceMotion ? {} : { scale: 1.1 }
                              }
                              transition={{ duration: 0.2 }}
                            >
                              <Icon />
                            </motion.div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-black tracking-wide">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed tracking-wide font-medium">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                      className={index === 1 ? "lg:order-1" : ""}
                      whileHover={
                        shouldReduceMotion
                          ? {}
                          : {
                              scale: 1.01,
                              transition: {
                                type: "spring",
                                stiffness: 250,
                                damping: 20,
                              },
                            }
                      }
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative">
                        <div className="card-brutal p-0 overflow-hidden">
                          <div className="relative overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.title}
                              width={600}
                              height={400}
                              className="w-full h-auto transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Projects Section - Mobile Optimized */}
      <section className="relative py-16 sm:py-24 md:py-32 lg:py-48 z-10">
        <motion.div
          style={{ scale: projectsScale }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-black mb-6 sm:mb-8 tracking-wide">
              Featured Work
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 md:gap-16 max-w-7xl mx-auto">
            {/* GrammarlyGO - Brutalist */}
            <motion.div
              variants={slideInVariant}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: 1.01,
                      y: -6,
                      transition: {
                        type: "spring",
                        stiffness: 240,
                        damping: 20,
                      },
                    }
              }
              className="group"
            >
              <div className="relative">
                <div className="card-brutal p-6 sm:p-8 md:p-10 h-full">
                  <div className="h-full flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-400 border-4 border-black flex items-center justify-center text-black mb-4 sm:mb-0 sm:mr-6">
                        <FaLightbulb className="text-2xl sm:text-3xl" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-wide">
                        GrammarlyGO
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed tracking-wide mb-6 sm:mb-8 flex-grow font-medium">
                      A comprehensive user research project that transformed
                      one-time AI users into loyal daily writers through
                      strategic UX improvements and user-centered design.
                    </p>

                    {/* User Research Focus */}
                    <div className="mb-6 sm:mb-8">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 border-2 border-black text-xs px-3 py-1 font-bold">
                          USER RESEARCH
                        </span>
                        <span className="bg-purple-100 text-purple-800 border-2 border-black text-xs px-3 py-1 font-bold">
                          UX STRATEGY
                        </span>
                        <span className="bg-green-100 text-green-800 border-2 border-black text-xs px-3 py-1 font-bold">
                          BEHAVIORAL ANALYSIS
                        </span>
                      </div>

                      {/* Project Image */}
                      <div className="relative aspect-[16/9] border-4 border-black overflow-hidden">
                        <Image
                          src="/Grammarly-Go.png"
                          alt="GrammarlyGO User Research Project"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          priority={true}
                        />
                      </div>
                    </div>

                    <Link href="/ux-ui/grammarlygo">
                      <motion.button
                        whileHover={
                          shouldReduceMotion
                            ? {}
                            : {
                                scale: 1.02,
                                y: -2,
                                transition: {
                                  type: "spring",
                                  stiffness: 260,
                                  damping: 22,
                                },
                              }
                        }
                        whileTap={{ scale: 0.98 }}
                        className="w-full btn-brutal btn-card btn-no-shift bg-orange-400 text-black"
                      >
                        <span className="tracking-wide font-bold">
                          View Case Study
                        </span>
                        <FaArrowRight className="ml-2 sm:ml-3 inline" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Spotify - Brutalist */}
            <motion.div
              variants={slideInVariant}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: 1.01,
                      y: -6,
                      transition: {
                        type: "spring",
                        stiffness: 240,
                        damping: 20,
                      },
                    }
              }
              className="group"
            >
              <div className="relative">
                <div className="card-brutal p-6 sm:p-8 md:p-10 h-full">
                  <div className="h-full flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-400 border-4 border-black flex items-center justify-center text-black mb-4 sm:mb-0 sm:mr-6">
                        <FaRocket className="text-2xl sm:text-3xl" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-wide">
                        Spotify Redesign
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed tracking-wide mb-6 sm:mb-8 flex-grow font-medium">
                      Millions of clicks saved a day through intuitive
                      navigation improvements and enhanced user experience.
                    </p>

                    <div className="mb-6 sm:mb-8 card-brutal p-4 sm:p-6 relative overflow-hidden h-48 sm:h-64 md:h-80 lg:h-96">
                      <video
                        ref={spotifyVideoRef}
                        className="w-full h-full object-cover rounded-sm"
                        controls
                        poster="/Spotify_Project/Desktop-Home-Revamped.jpg"
                        preload="metadata"
                        muted
                      >
                        <source src="/HeroScreen.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <Link href="/ux-ui/spotify" className="flex-1">
                        <motion.button
                          whileHover={
                            shouldReduceMotion
                              ? {}
                              : {
                                  scale: 1.02,
                                  y: -2,
                                  transition: {
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 22,
                                  },
                                }
                          }
                          whileTap={{ scale: 0.98 }}
                          className="w-full btn-brutal btn-card btn-no-shift bg-orange-400 text-black"
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
                                  scale: 1.02,
                                  y: -2,
                                  transition: {
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 22,
                                  },
                                }
                          }
                          whileTap={{ scale: 0.98 }}
                          className="w-full btn-brutal btn-card btn-no-shift bg-white text-black"
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

      {/* CTA Section - Brutalist */}
      <section className="relative py-16 sm:py-24 md:py-32 lg:py-48 z-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-6xl mx-auto"
          >
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.01, y: -5 }}
              transition={{ duration: 0.3 }}
              className="card-brutal p-8 sm:p-12 md:p-16 lg:p-20"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-black mb-8 sm:mb-10 md:mb-12 leading-tight tracking-tight">
                Ready to See My
                <br />
                <span className="text-orange-400">Development Skills?</span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mb-12 sm:mb-14 md:mb-16 leading-relaxed max-w-4xl mx-auto tracking-wide font-medium">
                Discover how I bridge design and code to create exceptional
                digital experiences from concept to deployment.
              </p>

              <Link href="/dev">
                <motion.button
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          scale: 1.02,
                          y: -3,
                          transition: {
                            type: "spring",
                            stiffness: 260,
                            damping: 22,
                          },
                        }
                  }
                  whileTap={{ scale: 0.98 }}
                  className="btn-brutal btn-brutal-interactive btn-no-shift bg-orange-400 text-black"
                >
                  <span className="tracking-wide font-black">
                    View Development Work
                  </span>
                  <motion.div
                    className="inline-block ml-4 sm:ml-6"
                    animate={shouldReduceMotion ? {} : { x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaArrowRight className="text-sm sm:text-base md:text-lg lg:text-xl" />
                  </motion.div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
