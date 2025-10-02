"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
// Link removed - using <a> tags for page transition system
import Lenis from "lenis";

// Lenis Smooth Scrolling with Momentum
const SmoothScroll = () => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling with momentum
    const lenis = new Lenis({
      duration: 1.2, // Duration of smooth scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      touchMultiplier: 2, // Touch sensitivity
    });

    // Animation loop for Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
};

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("professional");

  useEffect(() => {
    setMounted(true);
    setIsMobileMenuOpen(false);
  }, []);

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/jecochran-0", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/jake-cochran/",
      label: "LinkedIn",
    },
    { icon: FaEnvelope, href: "mailto:jake.e.cochran@gmail.com", label: "Email" },
  ];

  if (!mounted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#171717" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-12 h-12 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p
            className="text-white/60 font-light"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Loading experience...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <SmoothScroll />
      <main
        className="min-h-screen text-white relative"
        style={{ backgroundColor: "#171717" }}
        role="main"
        aria-label="About Jake Cochran - Portfolio Page"
      >
        {/* Top Left Branding */}
        <motion.div
          className="fixed top-8 left-8 z-20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/">
            <motion.div
              className="px-4 py-2 rounded-lg cursor-pointer"
              style={{ backgroundColor: "#B4323B" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span
                className="text-white font-black text-lg tracking-wider uppercase"
                style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
              >
                Jake Cochran
              </span>
            </motion.div>
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div
          className="fixed top-4 right-4 sm:top-8 sm:right-8 z-30"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden w-12 h-12 rounded-full border border-white/30 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle mobile menu"
          >
            <motion.div
              className="w-6 h-6 flex flex-col justify-center items-center"
              animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
            >
              <motion.div
                className="w-4 h-0.5 bg-white mb-1"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 6 : 0,
                }}
              />
              <motion.div
                className="w-4 h-0.5 bg-white"
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
              />
              <motion.div
                className="w-4 h-0.5 bg-white mt-1"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -6 : 0,
                }}
              />
            </motion.div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.a
              href="/"
              className="px-4 py-2 border border-white/30 text-white hover:text-gray-300 hover:border-white/50 transition-all duration-300 font-light text-sm tracking-wider rounded-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Go to homepage"
            >
              HOME
            </motion.a>
            <motion.a
              href="/skills"
              className="px-4 py-2 border border-white/30 text-white hover:text-gray-300 hover:border-white/50 transition-all duration-300 font-light text-sm tracking-wider rounded-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Go to skills page"
            >
              SKILLS
            </motion.a>
            <motion.a
              href="/dev"
              className="px-4 py-2 border border-white/30 text-white hover:text-gray-300 hover:border-white/50 transition-all duration-300 font-light text-sm tracking-wider rounded-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Go to development page"
            >
              WORK
            </motion.a>
            <motion.a
              href="/contact"
              className="px-4 py-2 border border-white/30 text-white hover:text-gray-300 hover:border-white/50 transition-all duration-300 font-light text-sm tracking-wider rounded-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Go to contact page"
            >
              CONTACT
            </motion.a>
          </div>
        </motion.div>

        {/* Mobile Menu Overlay */}
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
          style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu Slide-out Panel */}
        <motion.div
          className="fixed top-0 right-0 h-full w-80 bg-gray-900 border-l border-white/20 z-50 md:hidden"
          initial={{ x: "100%" }}
          animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
        >
          <div className="p-8 pt-20">
            <div className="flex flex-col space-y-8">
              <motion.a
                href="/"
                className="text-white text-4xl font-black tracking-wider uppercase"
                style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                HOME
              </motion.a>
              <motion.a
                href="/skills"
                className="text-white text-4xl font-black tracking-wider uppercase"
                style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                SKILLS
              </motion.a>
              <motion.a
                href="/dev"
                className="text-white text-4xl font-black tracking-wider uppercase"
                style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                WORK
              </motion.a>
              <motion.a
                href="/contact"
                className="text-white text-4xl font-black tracking-wider uppercase"
                style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CONTACT
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Hero Section */}
        <section className="pt-32 sm:pt-40 md:pt-48 pb-20 sm:pb-32 px-4 sm:px-8 md:px-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="space-y-12 sm:space-y-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Profile Badge */}
              <motion.div
                className="inline-block bg-red-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 font-black text-xs sm:text-sm tracking-widest uppercase border border-red-500 rounded-lg"
                initial={{ opacity: 0, x: -50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About Me
              </motion.div>

              {/* Main Title */}
              <div className="space-y-8 sm:space-y-12">
                <motion.h1
                  className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight text-white"
                  style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 1.0 }}
                >
                  <span className="text-white">
                    {"HEY, I'M".split("").map((letter, index) => (
                      <motion.span
                        key={index}
                        className="inline-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.08, duration: 0.3 }}
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.span>
                    ))}
                  </span>
                  <br />
                  <span className="block text-red-500 mt-2 sm:mt-4">
                    {"JAKE".split("").map((letter, index) => (
                      <motion.span
                        key={index}
                        className="inline-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.08, duration: 0.3 }}
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.span>
                    ))}
                  </span>
                </motion.h1>

                <motion.p
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed max-w-5xl font-medium"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                >
                  I'm from both the worlds of UX/UI design and software development. 
                  I can lead the development of an app start to finish or be the bridge to connect two teams.
                </motion.p>
              </div>

              {/* Social Links */}
              <motion.div
                className="flex justify-center items-center"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 2.0, duration: 0.8, type: "spring", stiffness: 80 }}
              >
                <div className="flex space-x-8">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.label === "Email" ? "_self" : "_blank"}
                      rel={link.label === "Email" ? "" : "noopener noreferrer"}
                      className="text-white hover:text-red-400 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 2.2 + index * 0.1, duration: 0.3 }}
                      aria-label={`Visit my ${link.label} profile`}
                    >
                      <link.icon className="text-4xl" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What I Bring Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-16 border-t border-white/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black mb-16 sm:mb-20 text-center tracking-tight text-white" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>
                WHAT I BRING
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
                {[
                  {
                    icon: "🎨",
                    title: "Design Sensibility",
                    description: "I approach problems with a designer's eye, focusing on user needs and creating intuitive interfaces.",
                  },
                  {
                    icon: "💻",
                    title: "Developer Mindset",
                    description: "I can communicate in the technical world, making my UX process more efficient from the start, and I can also be the one to develop my designs.",
                  },
                  {
                    icon: "🚀",
                    title: "Problem Solver",
                    description: "I thrive on challenges and finding elegant solutions to complex problems.",
                  },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 sm:p-8 lg:p-12 hover:border-red-500/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 text-2xl sm:text-3xl">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-white tracking-tight" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>
                      {skill.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* My Story Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-16 border-t border-white/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black mb-16 sm:mb-20 text-center tracking-tight text-white" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>
                MY STORY
              </h2>

              <motion.div
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 sm:p-8 lg:p-12 xl:p-16 hover:border-red-500/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="max-w-4xl mx-auto">
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed font-medium" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    I'm a new grad from the University of Wisconsin Madison with a unique perspective that bridges design and development. My journey began when I wanted to build a computer and have a sketchbook as a kid. I have an itch to logically solve problems and the urge to create.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed font-medium" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    What drives me is the reaction of user's enjoying an end product.
                  </p>

                  <div className="pt-6 sm:pt-8 border-t border-gray-600/50">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-4 sm:mb-6 text-white tracking-tight" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>
                      When I'm not coding...
                    </h3>
                    <div className="flex flex-wrap gap-3 sm:gap-4">
                      <span className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 text-sm sm:text-base font-bold rounded-lg">
                        Music Production
                      </span>
                      <span className="inline-flex items-center px-3 sm:px-4 py-2 bg-red-500/20 text-red-300 border border-red-500/30 text-sm sm:text-base font-bold rounded-lg">
                        Flag Football
                      </span>
                      <span className="inline-flex items-center px-3 sm:px-4 py-2 bg-green-500/20 text-green-300 border border-green-500/30 text-sm sm:text-base font-bold rounded-lg">
                        Chess
                      </span>
                      <span className="inline-flex items-center px-3 sm:px-4 py-2 bg-purple-500/20 text-purple-300 border border-purple-500/30 text-sm sm:text-base font-bold rounded-lg">
                        Gaming
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Experience Tabs Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-16 border-t border-white/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black mb-16 sm:mb-20 text-center tracking-tight text-white" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>
                EXPERIENCE
              </h2>

              {/* Tab Buttons */}
              <div className="flex flex-wrap justify-center mb-12 sm:mb-16">
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-2">
                  <button
                    onClick={() => setActiveTab("professional")}
                    className={`px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-black transition-all duration-300 border-2 rounded-lg ${
                      activeTab === "professional"
                        ? "bg-red-600 text-white border-red-500"
                        : "bg-transparent text-gray-300 border-gray-600 hover:bg-gray-700/50"
                    }`}
                  >
                    💼 PROFESSIONAL
                  </button>
                  <button
                    onClick={() => setActiveTab("education")}
                    className={`px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-black transition-all duration-300 border-2 rounded-lg ${
                      activeTab === "education"
                        ? "bg-red-600 text-white border-red-500"
                        : "bg-transparent text-gray-300 border-gray-600 hover:bg-gray-700/50"
                    }`}
                  >
                    🎓 EDUCATION
                  </button>
                  <button
                    onClick={() => setActiveTab("personal")}
                    className={`px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-black transition-all duration-300 border-2 rounded-lg ${
                      activeTab === "personal"
                        ? "bg-red-600 text-white border-red-500"
                        : "bg-transparent text-gray-300 border-gray-600 hover:bg-gray-700/50"
                    }`}
                  >
                    👤 PERSONAL
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
                    className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 sm:p-8 lg:p-12"
                  >
                    <div className="text-center">
                      <h3 className="text-2xl sm:text-3xl font-black text-white mb-6" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>
                        Professional Journey
                      </h3>
                      <p className="text-lg text-gray-300 mb-8" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        Currently focused on creating comprehensive digital experiences that combine thoughtful design with robust development.
                      </p>
                      <div className="space-y-4">
                        <div className="bg-gray-700/50 rounded-lg p-4">
                          <h4 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>Full-Stack Development</h4>
                          <p className="text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>React, Next.js, TypeScript, Node.js</p>
                        </div>
                        <div className="bg-gray-700/50 rounded-lg p-4">
                          <h4 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>UX/UI Design</h4>
                          <p className="text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>User Research, Wireframing, Prototyping, Design Systems</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Education Journey */}
                {activeTab === "education" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 sm:p-8 lg:p-12"
                  >
                    <div className="flex items-center justify-center mb-8 sm:mb-12">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-2xl flex items-center justify-center mr-6 sm:mr-8 text-2xl sm:text-3xl">
                        🎓
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>
                          University of Wisconsin Madison
                        </h3>
                        <p className="text-base sm:text-lg text-gray-300 font-medium" style={{ fontFamily: "Montserrat, sans-serif" }}>
                          Bachelor's in Consumer Behavior and Marketplace Studies. Minors in Computer Science and Entrepreneurship
                        </p>
                        <p className="text-red-400 font-black text-base sm:text-lg">
                          Expected Graduation: May 2025
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6 sm:space-y-8">
                      <div className="border-l-4 border-red-500 pl-6 sm:pl-8 py-4 sm:py-6">
                        <h4 className="font-black text-lg sm:text-xl text-white mb-3 sm:mb-4 tracking-tight" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>
                          Relevant Coursework
                        </h4>
                        <p className="text-base sm:text-lg text-gray-300 font-medium" style={{ fontFamily: "Montserrat, sans-serif" }}>
                          Mobile Applications, User Interface Design, Data Structures & Algorithms, Software Engineering, Consumer Insights
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
                        className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 sm:p-8 hover:border-red-500/50 transition-all duration-300"
                        whileHover={{ y: -5 }}
                      >
                        <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-white tracking-tight" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>
                          🏈 Flag Football
                        </h3>
                        <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 font-medium" style={{ fontFamily: "Montserrat, sans-serif" }}>
                          I'm a big football fan (go pats), and I also like to play flag football and tennis.
                        </p>
                      </motion.div>

                      <motion.div
                        className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 sm:p-8 hover:border-red-500/50 transition-all duration-300"
                        whileHover={{ y: -5 }}
                      >
                        <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-white tracking-tight" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>
                          ♟️ Chess
                        </h3>
                        <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 font-medium" style={{ fontFamily: "Montserrat, sans-serif" }}>
                          I pass the time with a chess match on chess.com
                        </p>
                      </motion.div>

                      <motion.div
                        className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 sm:p-8 hover:border-red-500/50 transition-all duration-300 md:col-span-2"
                        whileHover={{ y: -5 }}
                      >
                        <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-white tracking-tight" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>
                          🎮 Gaming & Game Design
                        </h3>
                        <p className="text-base sm:text-lg text-gray-300 font-medium" style={{ fontFamily: "Montserrat, sans-serif" }}>
                          I've played video games since I was a kid, I've become familiar with game design interfaces and principles. Maybe you've seen me in the top ranks of a game you've played.
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
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-16 border-t border-white/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 sm:p-12 lg:p-20 hover:border-red-500/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 sm:mb-10 tracking-tight text-white" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>
                  LET'S BUILD
                  <span className="block text-red-500 mt-2 sm:mt-4">
                    SOMETHING AMAZING
                  </span>
                </h2>
                <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 sm:mb-16 leading-relaxed font-medium" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  I'm always open to new opportunities and collaborations.
                </p>
                <motion.a
                  href="mailto:jake.e.cochran@gmail.com"
                  className="inline-flex bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 lg:px-12 xl:px-20 py-4 sm:py-6 lg:py-8 xl:py-10 font-black tracking-widest transition-all duration-300 items-center justify-center border border-red-500 rounded-xl text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope className="mr-3 sm:mr-4 lg:mr-6 xl:mr-10 text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl" />
                  <span>GET IN TOUCH</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
}
