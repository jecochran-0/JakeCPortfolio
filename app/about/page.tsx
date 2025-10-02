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

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/jecochran-0", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/jakecochran",
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

        {/* Top Navigation */}
        <motion.div
          className="fixed top-8 right-8 z-20 flex items-center space-x-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
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
        </motion.div>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Side - Image */}
              <motion.div
                className="lg:col-span-5"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative h-[70vh] overflow-hidden rounded-lg">
                  <Image
                    src="/Headshot3.jpg"
                    alt="Jake Cochran - Full Stack Developer and UX/UI Designer"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  />
                </div>
              </motion.div>

              {/* Right Side - Typography */}
              <motion.div
                className="lg:col-span-7 space-y-12"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="space-y-8">
                  <div
                    className="inline-block px-6 py-2 border border-white/20 font-bold text-sm tracking-widest uppercase"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    About Me
                  </div>

                  <h1
                    className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    JAKE <br />
                    <span style={{ color: "#CD535A" }}>COCHRAN</span>
                  </h1>

                  <p
                    className="text-xl text-gray-300 leading-relaxed max-w-2xl"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Full-stack developer and UX/UI designer crafting digital
                    experiences where innovation meets intention. Every pixel
                    has purpose, every interaction tells a story.
                  </p>
                </div>

                <div className="flex items-center gap-8">
                  <a href="/contact">
                    <motion.div
                      className="px-8 py-4 border border-white/20 hover:bg-white/10 transition-colors duration-200 font-bold text-white"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get in touch
                    </motion.div>
                  </a>

                  <div className="flex space-x-6">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target={link.label === "Email" ? "_self" : "_blank"}
                        rel={link.label === "Email" ? "" : "noopener noreferrer"}
                        className="text-white hover:text-gray-300 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                        aria-label={`Visit my ${link.label} profile`}
                      >
                        <link.icon className="text-2xl" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 px-6 border-t border-white/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-16"
            >
              <div className="lg:col-span-3">
                <h2
                  className="text-3xl md:text-4xl font-bold text-white leading-tight"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  PHILOSOPHY
                </h2>
              </div>

              <div className="lg:col-span-9 space-y-8">
                <p
                  className="text-xl text-gray-300 leading-relaxed"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  I believe in building digital experiences that solve real
                  problems. My approach combines strategic thinking with
                  creative execution, ensuring every solution is both beautiful
                  and functional.
                </p>
                <p
                  className="text-lg text-gray-400 leading-relaxed"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  From competitive sports to software development, I&apos;ve
                  learned that success comes from preparation, adaptability, and
                  continuous improvement. These principles guide every project I
                  undertake.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 px-6 border-t border-white/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-3">
                  <h2
                    className="text-3xl md:text-4xl font-bold text-white leading-tight"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    EXPERIENCE
                  </h2>
                </div>

                <div className="lg:col-span-9 space-y-16">
                  {/* Current Focus */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-1"
                        style={{ backgroundColor: "#CD535A" }}
                      />
                      <span
                        className="text-sm text-gray-400 font-bold uppercase tracking-wider"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        2024 - Present
                      </span>
                    </div>
                    <h3
                      className="text-2xl md:text-3xl font-bold text-white"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Full-Stack Development & UX/UI Design
                    </h3>
                    <p
                      className="text-lg text-gray-300 leading-relaxed max-w-3xl"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Currently focused on creating comprehensive digital
                      experiences that combine thoughtful design with robust
                      development. Specializing in React, Next.js, TypeScript,
                      and modern design systems.
                    </p>
                  </div>

                  {/* Education */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-1"
                        style={{ backgroundColor: "#CD535A" }}
                      />
                      <span
                        className="text-sm text-gray-400 font-bold uppercase tracking-wider"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        2020 - 2024
                      </span>
                    </div>
                    <h3
                      className="text-2xl md:text-3xl font-bold text-white"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Computer Science Education
                    </h3>
                    <p
                      className="text-lg text-gray-300 leading-relaxed max-w-3xl"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Developed a strong foundation in computer science
                      principles, algorithms, and software engineering
                      practices. Combined technical coursework with hands-on
                      projects emphasizing code quality and user-centered
                      design.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="py-20 px-6 border-t border-white/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-3">
                  <h2
                    className="text-3xl md:text-4xl font-bold text-white leading-tight"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    BEYOND THE CODE
                  </h2>
                </div>

                <div className="lg:col-span-9 space-y-16">
                  <div className="space-y-8">
                    <h3
                      className="text-2xl md:text-3xl font-bold text-white"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      TENNIS
                    </h3>
                    <p
                      className="text-lg text-gray-300 leading-relaxed max-w-3xl"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Competing in tournaments taught me resilience and
                      strategic thinking—skills that directly translate to
                      solving complex development challenges.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <h3
                      className="text-2xl md:text-3xl font-bold text-white"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      FLAG FOOTBALL
                    </h3>
                    <p
                      className="text-lg text-gray-300 leading-relaxed max-w-3xl"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Team sports honed my collaboration skills and quick
                      decision-making abilities—the same principles apply to
                      software development and project management.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <h3
                      className="text-2xl md:text-3xl font-bold text-white"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      CHESS
                    </h3>
                    <p
                      className="text-lg text-gray-300 leading-relaxed max-w-3xl"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Chess developed my analytical thinking and long-term
                      planning skills—every move requires considering multiple
                      possibilities, much like architecting software solutions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-6 border-t border-white/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-3">
                  <h2
                    className="text-3xl md:text-4xl font-bold text-white leading-tight"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    WHAT I OFFER
                  </h2>
                </div>

                <div className="lg:col-span-9 space-y-16">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-12 h-1"
                          style={{ backgroundColor: "#CD535A" }}
                        />
                        <span
                          className="text-sm text-gray-400 font-bold"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          01
                        </span>
                      </div>
                      <h3
                        className="text-xl md:text-2xl font-bold text-white"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        DESIGN
                      </h3>
                      <p
                        className="text-lg text-gray-300 leading-relaxed"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        User-centered design that prioritizes both aesthetics
                        and functionality through research, wireframing, and
                        prototyping.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-12 h-1"
                          style={{ backgroundColor: "#CD535A" }}
                        />
                        <span
                          className="text-sm text-gray-400 font-bold"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          02
                        </span>
                      </div>
                      <h3
                        className="text-xl md:text-2xl font-bold text-white"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        DEVELOPMENT
                      </h3>
                      <p
                        className="text-lg text-gray-300 leading-relaxed"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Modern, scalable web applications built with React,
                        Next.js, and TypeScript, creating performant solutions
                        with smooth interactions.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-12 h-1"
                          style={{ backgroundColor: "#CD535A" }}
                        />
                        <span
                          className="text-sm text-gray-400 font-bold"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          03
                        </span>
                      </div>
                      <h3
                        className="text-xl md:text-2xl font-bold text-white"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        FULL PACKAGE
                      </h3>
                      <p
                        className="text-lg text-gray-300 leading-relaxed"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        End-to-end digital solutions that seamlessly integrate
                        design and development, from strategy to deployment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 border-t border-white/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-12"
            >
              <div className="space-y-8">
                <h2
                  className="text-4xl md:text-5xl font-bold text-white leading-tight"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  LET&apos;S COLLABORATE
                </h2>
                <p
                  className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Ready to transform your vision into an exceptional digital
                  experience? Let&apos;s discuss how we can bring your ideas to
                  life.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="/contact">
                  <motion.div
                    className="px-8 py-4 border border-white/20 hover:bg-white/10 transition-colors duration-200 font-bold text-white"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get in touch
                  </motion.div>
                </a>

                <div className="flex space-x-6">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.label === "Email" ? "_self" : "_blank"}
                      rel={link.label === "Email" ? "" : "noopener noreferrer"}
                      className="text-white hover:text-gray-300 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                      aria-label={`Connect with me on ${link.label}`}
                    >
                      <link.icon className="text-2xl" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
