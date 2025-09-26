"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
} from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function UXUIPage() {
  const { scrollY, scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  // Professional scroll tracking with physics
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  // Smooth scroll progress with spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 100,
  });

  // Advanced parallax and scroll effects
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200]);
  const heroParallax = useTransform(scrollY, [0, 800], [0, -100]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.05]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.8]);

  // Professional section scroll effects
  const sectionTwoY = useTransform(scrollY, [400, 1200], [30, -30]);

  // Velocity-based background effect
  const velocityBackground = useTransform(
    smoothVelocity,
    [-1000, 0, 1000],
    [
      "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.01) 0%, transparent 50%)",
      "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 0%, transparent 50%)",
      "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.01) 0%, transparent 50%)",
    ]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      title: "Spotify Redesign",
      description:
        "Redesigned the Spotify mobile app to improve discoverability and user engagement through better visual hierarchy and intuitive navigation.",
      tech: ["Figma", "Prototyping", "User Research", "Wireframing"],
      video: "/HeroScreen.mp4",
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      title: "Grammarly Go",
      description:
        "Designed an AI-powered writing assistant that helps users improve their communication with intelligent suggestions and real-time feedback.",
      tech: ["UI Design", "UX Research", "Figma", "Prototyping"],
      isButton: true,
      buttonText: "View Case Study",
      links: {
        live: "#",
        github: "#",
      },
    },
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-12 h-12 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-light">Loading design...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <main
        className="bg-white text-black relative font-sans"
        role="main"
        aria-label="UX/UI Design Portfolio - Jake Cochran"
        style={{ minHeight: "100vh" }}
      >
        {/* Professional Scroll Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-900 to-gray-600 origin-left z-50"
          style={{ scaleX: smoothProgress }}
        />

        {/* Subtle Scroll Velocity Effect */}
        <motion.div
          className="fixed inset-0 pointer-events-none z-10"
          style={{
            background: velocityBackground,
          }}
        />

        {/* Enhanced Background Elements with Parallax */}
        <motion.div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ y: backgroundY }}
        >
          {/* Subtle geometric accents */}
          <div className="absolute top-20 right-20 text-4xl font-thin opacity-20">
            ×
          </div>
          <div className="absolute bottom-40 left-20 text-6xl font-thin opacity-10">
            ×
          </div>
          <div className="absolute top-1/2 right-10 text-3xl font-thin opacity-15">
            ×
          </div>
        </motion.div>

        {/* Hero Section - Unique Top Section */}
        <motion.section
          className="relative min-h-screen flex items-center px-4 pt-20 overflow-hidden"
          style={{
            y: heroParallax,
            scale: heroScale,
            opacity: heroOpacity,
          }}
        >
          {/* Top Right Navigation */}
          <motion.div
            className="absolute top-8 right-8 z-20 flex items-center space-x-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.a
              href="/"
              className="text-black hover:text-gray-600 transition-colors duration-300 font-light text-sm tracking-wider nav-item-hover"
              whileHover={{ scale: 1.05 }}
              aria-label="Go to homepage"
            >
              HOME
            </motion.a>
            <motion.a
              href="/about"
              className="text-black hover:text-gray-600 transition-colors duration-300 font-light text-sm tracking-wider nav-item-hover"
              whileHover={{ scale: 1.05 }}
              aria-label="Go to about page"
            >
              ABOUT
            </motion.a>
            <motion.a
              href="/dev"
              className="text-black hover:text-gray-600 transition-colors duration-300 font-light text-sm tracking-wider nav-item-hover"
              whileHover={{ scale: 1.05 }}
              aria-label="Go to development page"
            >
              DEV
            </motion.a>
            <motion.a
              href="/contact"
              className="text-black hover:text-gray-600 transition-colors duration-300 font-light text-sm tracking-wider nav-item-hover"
              whileHover={{ scale: 1.05 }}
              aria-label="Go to contact page"
            >
              CONTACT
            </motion.a>
          </motion.div>

          {/* Enhanced Hero Layout */}
          <div className="max-w-7xl mx-auto h-full flex items-center">
            <div className="w-full">
              {/* Typography and Content */}
              <motion.div
                className="space-y-12 max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <div className="text-[8px] text-gray-500 tracking-[0.5em] uppercase mb-6 font-medium">
                    UX/UI DESIGN PORTFOLIO
                  </div>
                  <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-black leading-[0.75] tracking-tighter mb-8">
                    DESIGN
                  </h1>
                  <h1 className="text-[1.8rem] md:text-[2.5rem] lg:text-[3rem] font-light text-gray-700 leading-[0.9] tracking-[0.2em] uppercase">
                    CREATOR
                  </h1>
                </motion.div>

                <motion.div
                  className="space-y-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <div className="max-w-3xl mx-auto">
                    <p className="text-lg text-gray-800 leading-relaxed font-light tracking-wide">
                      Crafting intuitive user experiences through thoughtful
                      design. Every interface tells a story, every interaction
                      has purpose.
                    </p>
                  </div>

                  {/* Design Skills Preview */}
                  <div className="space-y-4">
                    <div className="text-sm text-gray-500 tracking-[0.3em] uppercase font-medium">
                      DESIGN SKILLS
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {[
                        "Figma",
                        "Prototyping",
                        "User Research",
                        "Wireframing",
                        "Visual Design",
                        "Accessibility",
                      ].map((skill, index) => (
                        <motion.span
                          key={skill}
                          className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 0.8 + index * 0.1,
                            duration: 0.4,
                          }}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "#f3f4f6",
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section - Single Column Layout */}
        <motion.section
          className="py-24 px-8 bg-white rounded-t-[60px] relative z-20"
          style={{ y: sectionTwoY }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="max-w-4xl mx-auto text-center">
                <div className="text-[11px] text-gray-500 tracking-[0.3em] uppercase mb-4 font-medium">
                  UX/UI DESIGN PORTFOLIO
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
                  Design projects with real impact
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
                  Each project represents a unique design challenge solved with
                  user-centered thinking and modern design principles.
                </p>
              </div>
            </motion.div>

            {/* Projects Layout */}
            <div className="space-y-24">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className={
                    project.video
                      ? "w-full"
                      : "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  }
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {project.video ? (
                    /* Full-width Video Card with Overlay */
                    <motion.a
                      href={project.links.live}
                      className="relative h-[600px] rounded-2xl overflow-hidden bg-gray-200 group block"
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Video Background */}
                      <video
                        src={project.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                        style={{
                          filter: "brightness(0.8) contrast(1.1)",
                        }}
                        onTimeUpdate={(e) => {
                          const video = e.target as HTMLVideoElement;
                          const duration = video.duration;
                          const currentTime = video.currentTime;

                          // Add fade transition near the end of the video
                          if (duration - currentTime < 0.5) {
                            video.style.opacity = "0.3";
                          } else if (currentTime < 0.5) {
                            video.style.opacity = "1";
                          }
                        }}
                      />

                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-black/40"></div>

                      {/* Content Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center p-12">
                        <div className="text-center text-white max-w-4xl">
                          {/* Project Number */}
                          <div className="flex items-center justify-center space-x-4 mb-8">
                            <div className="text-sm text-white/80 font-medium">
                              {String(index + 1).padStart(2, "0")}
                            </div>
                            <div className="h-px bg-white/30 flex-1 max-w-20"></div>
                          </div>

                          {/* Project Title */}
                          <h3 className="text-4xl md:text-5xl font-medium text-white mb-6">
                            {project.title}
                          </h3>

                          {/* Project Description */}
                          <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
                            {project.description}
                          </p>

                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-3 justify-center mb-10">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full font-medium border border-white/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  ) : (
                    /* Regular Two-Column Layout for Other Projects */
                    <>
                      {/* Project Content */}
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                          <div className="text-sm text-gray-500 font-medium">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <div className="h-px bg-gray-300 flex-1"></div>
                        </div>

                        <div>
                          <h3 className="text-3xl font-medium text-gray-900 mb-4">
                            {project.title}
                          </h3>
                          <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-8">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="flex space-x-4">
                            <motion.a
                              href={project.links.live}
                              className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              View Live
                            </motion.a>
                            <motion.a
                              href={project.links.github}
                              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-gray-400 transition-colors duration-300"
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              GitHub
                            </motion.a>
                          </div>
                        </div>
                      </div>

                      {/* Project Media */}
                      <motion.div
                        className="relative h-[400px] rounded-2xl overflow-hidden bg-gray-200 group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.isButton ? (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                            <motion.button
                              className="px-12 py-6 bg-black text-white text-xl font-medium rounded-full shadow-lg"
                              whileHover={{
                                scale: 1.1,
                                y: -5,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                              }}
                              whileTap={{ scale: 0.95 }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                              }}
                            >
                              {project.buttonText}
                            </motion.button>
                          </div>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                            <div className="text-gray-500 text-lg">No image available</div>
                          </div>
                        )}
                      </motion.div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="bg-black text-white py-20 px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8">
              {/* Brand */}
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Jake Cochran</h3>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  UX/UI Designer crafting exceptional digital experiences with
                  modern design principles.
                </p>
              </div>

              {/* Navigation */}
              <div className="flex flex-wrap justify-center gap-8">
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase"
                >
                  About
                </a>
                <a
                  href="/dev"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase"
                >
                  Development
                </a>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase"
                >
                  Contact
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-6">
                <a
                  href="https://github.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-2xl" />
                </a>
                <a
                  href="mailto:hello@jakecochran.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label="Email"
                >
                  <FaEnvelope className="text-2xl" />
                </a>
              </div>

              {/* Copyright */}
              <div className="pt-8 border-t border-gray-800">
                <p className="text-gray-500 text-sm">
                  © 2024 Jake Cochran. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </motion.footer>
      </main>
    </>
  );
}
