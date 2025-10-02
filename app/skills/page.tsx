"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaFigma, FaMobile, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
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

export default function SkillsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const skillCategories = [
    {
      category: "Frontend Development",
      icon: FaReact,
      skills: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "TypeScript",
        "Redux",
        "Next.js",
      ],
    },
    {
      category: "Backend & APIs",
      icon: FaNodeJs,
      skills: [
        "Node.js",
        "RESTful APIs",
        "API Integration",
      ],
    },
    {
      category: "Design & Prototyping",
      icon: FaFigma,
      skills: [
        "Figma",
        "UI Design",
        "UX Design",
        "Wireframing",
        "Prototyping",
        "User Research",
        "Design Systems",
      ],
    },
    {
      category: "Styling & Frameworks",
      icon: SiTailwindcss,
      skills: [
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design",
        "CSS Grid",
        "Flexbox",
      ],
    },
    {
      category: "Version Control & Tools",
      icon: FaGitAlt,
      skills: ["Git", "GitHub", "Agile", "Jira"],
    },
    {
      category: "Additional Skills",
      icon: FaMobile,
      skills: [
        "Mobile-First Design",
        "Performance Optimization",
        "Cross-browser Testing",
        "Accessibility",
        "SEO",
      ],
    },
  ];

  return (
    <>
      <SmoothScroll />

      {/* Top Left Branding */}
      <motion.div
        className="fixed top-4 left-4 sm:top-8 sm:left-8 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/">
          <motion.div
            className="px-3 py-2 sm:px-4 sm:py-2 rounded-lg cursor-pointer"
            style={{ backgroundColor: "#B4323B" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span
              className="text-white font-black text-sm sm:text-lg tracking-wider uppercase"
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
            href="/about"
            className="px-4 py-2 border border-white/30 text-white hover:text-gray-300 hover:border-white/50 transition-all duration-300 font-light text-sm tracking-wider rounded-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Go to about page"
          >
            ABOUT
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
        className="fixed inset-0 z-20 md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Slide-out */}
      <motion.div
        className="fixed top-0 right-0 h-full w-80 max-w-[85vw] z-30 md:hidden"
        style={{ backgroundColor: "#171717" }}
        initial={{ x: "100%" }}
        animate={{ x: isMobileMenuOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex flex-col h-full p-8">
          {/* Close button */}
          <div className="flex justify-end mb-12">
            <motion.button
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Close mobile menu"
            >
              <div className="w-4 h-4 flex flex-col justify-center items-center">
                <div className="w-4 h-0.5 bg-white rotate-45" />
                <div className="w-4 h-0.5 bg-white -rotate-45 -mt-0.5" />
              </div>
            </motion.button>
          </div>

          {/* Navigation Links */}
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
              href="/about"
              className="text-white text-4xl font-black tracking-wider uppercase"
              style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ABOUT
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

      {/* Main Content */}
      <div
        className="min-h-screen py-20 px-6"
        style={{ backgroundColor: "#171717" }}
      >
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h1
              className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-none"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              SKILLS
            </h1>
            <p
              className="text-2xl text-gray-300 leading-relaxed max-w-4xl"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              A comprehensive overview of my technical capabilities across
              development and design disciplines.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="space-y-32">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
              >
                {/* Category Header - Left Column */}
                <div className="lg:col-span-3 space-y-6">
                  <div
                    className="w-20 h-20 rounded-lg flex items-center justify-center mb-6"
                    style={{
                      backgroundColor: "#CD535A",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    <category.icon className="text-white text-3xl" />
                  </div>
                  <h2
                    className="text-3xl md:text-4xl font-bold text-white leading-tight"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {category.category}
                  </h2>
                </div>

                {/* Skills List - Right Column */}
                <div className="lg:col-span-9">
                  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-8">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + skillIndex * 0.03,
                        }}
                        className="flex items-center gap-4"
                      >
                        <div
                          className="w-3 h-3 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "#CD535A" }}
                        />
                        <span
                          className="text-xl text-gray-300 font-medium"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Separator */}
                {index < skillCategories.length - 1 && (
                  <div className="col-span-full pt-16 border-b border-white/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
