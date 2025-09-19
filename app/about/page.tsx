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
import Image from "next/image";

export default function AboutPage() {
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
  const sectionOneY = useTransform(scrollY, [200, 800], [50, -50]);
  const sectionTwoY = useTransform(scrollY, [400, 1200], [30, -30]);
  const sectionThreeY = useTransform(scrollY, [600, 1400], [20, -20]);

  // Velocity-based background effect (moved from JSX to fix hook order)
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

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaEnvelope, href: "mailto:hello@jakecochran.com", label: "Email" },
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
          <p className="text-gray-600 font-light">Loading experience...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <main
      className="bg-white text-black relative font-sans"
      role="main"
      aria-label="About Jake Cochran - Portfolio Page"
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
        {/* Subtle geometric accents - inspired by the X marks in the reference */}
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

      {/* Forest Background Element - Professional Visual Layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ y: backgroundY }}
      >
        <div className="absolute -right-16 -top-16 w-[600px] h-[600px] opacity-15">
          <Image
            src="/images/Forest-Image.jpg"
            alt="Forest background element"
            fill
            className="object-cover rounded-full"
            sizes="600px"
          />
        </div>
        <div className="absolute -left-24 -bottom-24 w-64 h-64 opacity-8">
          <Image
            src="/images/Forest-Image.jpg"
            alt="Forest background element"
            fill
            className="object-cover rounded-full"
            sizes="300px"
          />
        </div>
      </motion.div>

      {/* Hero Section - Enhanced with Professional Scroll Effects */}
      <motion.section
        className="relative h-[120vh] flex items-center px-4 pt-20 overflow-hidden"
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
            href="/ux-ui"
            className="text-black hover:text-gray-600 transition-colors duration-300 font-light text-sm tracking-wider nav-item-hover"
            whileHover={{ scale: 1.05 }}
            aria-label="Go to UX/UI page"
          >
            UX/UI
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

        {/* Conventional Grid Layout with Typography Focus */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
          {/* Left Side - Headshot */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative h-[70vh] overflow-hidden rounded-2xl">
              <Image
                src="/Headshot3.png"
                alt="Jake Cochran - Full Stack Developer and UX/UI Designer"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
              {/* Small Typography Overlay */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="text-xs text-white/60 tracking-[0.3em] uppercase mb-1">
                  DEVELOPER
                </div>
                <div className="text-4xl font-black text-white tracking-tight">
                  JAKE COCHRAN
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Unconventional Typography */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center space-y-16"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Massive Typography - Breaking Scale */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="text-[10px] text-gray-500 tracking-[0.4em] uppercase mb-3 font-medium">
                CREATIVE PROFESSIONAL
              </div>
              <h1 className="text-[3.5rem] md:text-[7rem] lg:text-[10rem] font-black text-black leading-[0.85] tracking-tighter mb-6">
                JAKE
              </h1>
              <h1 className="text-[1.8rem] md:text-[2.8rem] lg:text-[3.5rem] font-light text-gray-700 leading-[0.9] tracking-[0.15em] uppercase">
                COCHRAN
              </h1>
            </motion.div>

            {/* Tiny Description with Huge Impact */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="max-w-lg">
                <div className="text-[11px] text-gray-500 tracking-[0.3em] uppercase mb-4 font-medium">
                  PHILOSOPHY
                </div>
                <p className="text-xl text-gray-800 leading-relaxed font-light tracking-wide">
                  Crafting digital experiences where innovation meets intention.
                  Every pixel has purpose, every interaction tells a story, and
                  every solution is built with both user needs and business
                  goals in mind.
                </p>
              </div>

              <div className="flex items-center space-x-8">
                <div className="text-[10px] text-gray-500 tracking-[0.3em] uppercase">
                  DESIGNER
                </div>
                <div className="w-16 h-px bg-gray-300"></div>
                <div className="text-[10px] text-gray-500 tracking-[0.3em] uppercase">
                  DEVELOPER
                </div>
              </div>
            </motion.div>

            {/* Tiny Button with Big Presence */}
            <motion.div
              className="flex items-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <motion.a
                href="/contact"
                className="bg-black text-white px-8 py-4 font-bold text-xs tracking-[0.2em] uppercase hover:bg-gray-800 transition-colors duration-300 inline-block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in touch
              </motion.a>

              {/* Tiny Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="text-black hover:text-gray-600 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.3 }}
                    aria-label={`Visit my ${link.label} profile`}
                  >
                    <link.icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Sports & Hobbies Section - Enhanced with Scroll Effects */}
      <motion.section
        className="py-32 px-8 bg-gray-50 rounded-t-[60px] relative z-20 -mt-[20vh] min-h-screen"
        style={{ y: sectionOneY }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="max-w-5xl">
              <div className="text-[11px] text-gray-500 tracking-[0.3em] uppercase mb-8 font-medium">
                BEYOND THE CODE
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12 leading-relaxed max-w-4xl">
                When I&apos;m not coding, I&apos;m competing. Strategic thinking
                and competitive drive shape both my athletic pursuits and
                professional approach.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light max-w-4xl">
                The same principles that make me successful in
                sports—preparation, adaptability, and continuous
                improvement—directly translate to building exceptional digital
                experiences.
              </p>
            </div>
          </motion.div>

          {/* High-End Sports Layout with Liquid Effects */}
          <div className="space-y-32">
            {/* Tennis */}
            <motion.div
              className="text-center relative"
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  staggerChildren: 0.3,
                },
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h3
                className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 relative"
                initial={{ opacity: 0, y: 60, rotateX: -15 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: {
                    duration: 1.0,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              >
                Tennis
              </motion.h3>
              <motion.p
                className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.2,
                  },
                }}
              >
                Competing in tournaments taught me resilience and strategic
                thinking—skills that directly translate to solving complex
                development challenges.
              </motion.p>
            </motion.div>

            {/* Flag Football */}
            <motion.div
              className="text-center relative"
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  staggerChildren: 0.3,
                },
              }}
              viewport={{ once: true, margin: "-100px" }}
              data-scroll
              data-scroll-speed="0.4"
              data-scroll-direction="vertical"
            >
              <motion.h3
                className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 relative"
                initial={{ opacity: 0, y: 60, rotateX: -15 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: {
                    duration: 1.0,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              >
                Flag Football
              </motion.h3>
              <motion.p
                className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.2,
                  },
                }}
              >
                Team sports honed my collaboration skills and quick
                decision-making abilities—the same principles apply to software
                development.
              </motion.p>
            </motion.div>

            {/* Chess */}
            <motion.div
              className="text-center relative"
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  staggerChildren: 0.3,
                },
              }}
              viewport={{ once: true, margin: "-100px" }}
              data-scroll
              data-scroll-speed="0.3"
              data-scroll-direction="vertical"
            >
              <motion.h3
                className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 relative"
                initial={{ opacity: 0, y: 60, rotateX: -15 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: {
                    duration: 1.0,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              >
                Chess
              </motion.h3>
              <motion.p
                className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.2,
                  },
                }}
              >
                Chess developed my analytical thinking and long-term planning
                skills—every move requires considering multiple possibilities,
                much like architecting software solutions.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section - Enhanced with Professional Scroll Effects */}
      <motion.section
        className="py-24 px-8 bg-white rounded-t-[60px] relative z-20"
        style={{ y: sectionTwoY }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl">
              <div className="text-[11px] text-gray-500 tracking-[0.3em] uppercase mb-4 font-medium">
                WHAT I OFFER
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
                Comprehensive digital solutions tailored to your unique needs
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light max-w-3xl mb-16">
                From initial concept to final deployment, I provide end-to-end
                services that combine strategic thinking with technical
                excellence and beautiful design.
              </p>
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Design */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-sm text-gray-500 font-medium">01</div>
              <div className="h-px bg-gray-200 w-full"></div>
              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">
                  Design
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  User-centered design that prioritizes both aesthetics and
                  functionality. I create intuitive interfaces through research,
                  wireframing, prototyping, and iterative design that delivers
                  exceptional user experiences.
                </p>
              </div>
            </motion.div>

            {/* Development */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-sm text-gray-500 font-medium">02</div>
              <div className="h-px bg-gray-200 w-full"></div>
              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">
                  Development
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Modern, scalable web applications built with cutting-edge
                  technologies. I specialize in React, Next.js, and TypeScript,
                  creating performant solutions with smooth animations and
                  seamless user interactions.
                </p>
              </div>
            </motion.div>

            {/* Full Package */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-sm text-gray-500 font-medium">03</div>
              <div className="h-px bg-gray-200 w-full"></div>
              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">♦</span> The full package
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  End-to-end digital solutions that seamlessly integrate design
                  and development. From strategy and concept to deployment and
                  optimization, I deliver cohesive experiences that drive
                  results and exceed expectations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section - Enhanced with Final Scroll Effects */}
      <motion.section
        className="py-24 px-8 bg-gray-50 rounded-t-[60px] relative z-20"
        style={{ y: sectionThreeY }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-[11px] text-gray-500 tracking-[0.3em] uppercase mb-4 font-medium">
                LET&apos;S COLLABORATE
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
                Ready to transform your vision into an exceptional digital
                experience?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light max-w-3xl mx-auto mb-8">
                I&apos;m always excited to take on new challenges and
                collaborate with passionate people. Let&apos;s discuss how we
                can bring your ideas to life with thoughtful design and powerful
                technology.
              </p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/contact"
                className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 inline-block"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                viewport={{ once: true }}
              >
                Get in touch
              </motion.a>

              <div className="flex space-x-4 mt-4 sm:mt-0">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-black transition-colors duration-300 shadow-sm"
                    whileHover={{
                      scale: 1.15,
                      y: -3,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    aria-label={`Connect with me on ${link.label}`}
                  >
                    <link.icon className="text-sm" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
