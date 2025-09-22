"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Users, Search, Music, Smartphone } from "lucide-react";

export default function SpotifyCaseStudy() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const spring = { type: "spring", stiffness: 220, damping: 24 } as const;

  const showcaseImages = {
    desktop: {
      before: "/Spotify_Project/Desktop-Home.jpg",
      after: "/Spotify_Project/Desktop-Home-Revamped.jpg",
      breakdownBefore: "/Spotify_Project/Desktop-Breakdown.jpg",
      breakdownAfter: "/Spotify_Project/Desktop-Breakdown-New.jpg",
    },
    mobile: {
      before: "/Spotify_Project/Mobile-Home.jpg",
      after: "/Spotify_Project/Mobile-Home-Revamped.jpg",
      breakdownBefore: "/Spotify_Project/Mobile-Breakdown-Old.jpg",
      breakdownAfter: "/Spotify_Project/Mobile-Breakdown-New.jpg",
    },
    planning: "/Spotify_Project/Planning.jpg",
    mockup: "/Spotify_Project/Iphone-Mockup.jpg",
  } as const;

  return (
    <div
      className="min-h-screen text-white cursor-none"
      style={{ backgroundColor: "#171717" }}
    >
      {/* Custom Cursor */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.8,
        }}
      >
        <div
          className="w-8 h-8 rounded-full"
          style={{ backgroundColor: "#F5F5DC" }}
        />
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/dev?tab=ux">
            <motion.div
              className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors duration-200"
              whileHover={{ x: -5 }}
              transition={spring}
            >
              <ArrowLeft size={20} />
              <span style={{ fontFamily: "Montserrat, sans-serif" }}>
                Back to Projects
              </span>
            </motion.div>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#22C55E" }}
              >
                <Music size={24} className="text-white" />
              </div>
              <h1
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                SPOTIFY
                <br />
                <span style={{ color: "#22C55E" }}>REDESIGN</span>
              </h1>
            </div>

            <p
              className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-12"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              A comprehensive UX redesign focusing on improving navigation,
              content discovery, and user engagement across desktop and mobile
              platforms.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  metric: "30%",
                  label: "faster tasks",
                  icon: <Search size={20} />,
                },
                {
                  metric: "85%",
                  label: "satisfaction",
                  icon: <Users size={20} />,
                },
                {
                  metric: "70%",
                  label: "engagement",
                  icon: <Music size={20} />,
                },
                {
                  metric: "+25%",
                  label: "usage",
                  icon: <Smartphone size={20} />,
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div style={{ color: "#22C55E" }}>{item.icon}</div>
                    <div
                      className="text-3xl md:text-4xl font-bold"
                      style={{
                        color: "#22C55E",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {item.metric}
                    </div>
                  </div>
                  <div
                    className="text-sm text-gray-400"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#EF4444" }}
                >
                  <span className="text-white font-bold text-sm">!</span>
                </div>
                <h2
                  className="text-3xl font-bold text-white"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  PROBLEM
                </h2>
              </div>
              <p
                className="text-lg text-gray-300 leading-relaxed"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Despite Spotify&apos;s popularity, users reported difficulties
                with navigation, content discovery, and playlist management. The
                challenge was to redesign the interface to address these pain
                points while maintaining the platform&apos;s familiar feel and
                brand identity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#22C55E" }}
                >
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <h2
                  className="text-3xl font-bold text-white"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  SOLUTION
                </h2>
              </div>
              <p
                className="text-lg text-gray-300 leading-relaxed"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Redesigned the interface with simplified navigation, enhanced
                search functionality, and improved content discovery. The new
                design reduces clicks for common tasks and creates a more
                intuitive user experience across all platforms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research & Planning */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              RESEARCH & PLANNING
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Comprehensive user research and planning phase to understand pain
              points and design opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <Image
                  src={showcaseImages.planning}
                  alt="User research and planning documentation"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <h3
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                User Research & Planning
              </h3>
              <p
                className="text-gray-300 leading-relaxed"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Conducted user interviews, competitive analysis, and usability
                testing to identify key pain points and design opportunities for
                improvement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <Image
                  src={showcaseImages.mockup}
                  alt="iPhone mockup showing mobile design"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <h3
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Mobile Mockup Testing
              </h3>
              <p
                className="text-gray-300 leading-relaxed"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Physical mockup testing to validate mobile design decisions and
                ensure optimal user experience across different device sizes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Desktop Transformation */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              DESKTOP TRANSFORMATION
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Complete redesign of the desktop interface with improved
              navigation and content discovery.
            </p>
          </motion.div>

          {/* Before/After Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#EF4444" }}
                >
                  <span className="text-white font-bold text-xs">×</span>
                </div>
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  BEFORE
                </h3>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={showcaseImages.desktop.before}
                  alt="Original desktop interface"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <p
                className="text-gray-400 text-sm mt-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Original interface with navigation and content organization
                issues.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#22C55E" }}
                >
                  <span className="text-white font-bold text-xs">✓</span>
                </div>
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  AFTER
                </h3>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={showcaseImages.desktop.after}
                  alt="Redesigned desktop interface"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <p
                className="text-gray-400 text-sm mt-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Redesigned interface with improved navigation and content
                discovery.
              </p>
            </motion.div>
          </div>

          {/* Detailed Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#EF4444" }}
                >
                  <span className="text-white font-bold text-xs">!</span>
                </div>
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  ISSUES IDENTIFIED
                </h3>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={showcaseImages.desktop.breakdownBefore}
                  alt="Original desktop breakdown analysis"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <p
                className="text-gray-400 text-sm mt-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Detailed analysis of original desktop interface pain points.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#22C55E" }}
                >
                  <span className="text-white font-bold text-xs">✓</span>
                </div>
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  IMPROVEMENTS MADE
                </h3>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={showcaseImages.desktop.breakdownAfter}
                  alt="Redesigned desktop breakdown analysis"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <p
                className="text-gray-400 text-sm mt-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Comprehensive breakdown of redesigned desktop interface
                improvements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile Transformation */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              MOBILE TRANSFORMATION
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Mobile-first redesign with enhanced user experience and intuitive
              navigation.
            </p>
          </motion.div>

          {/* Before/After Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#EF4444" }}
                >
                  <span className="text-white font-bold text-xs">×</span>
                </div>
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  BEFORE
                </h3>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={showcaseImages.mobile.before}
                  alt="Original mobile interface"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <p
                className="text-gray-400 text-sm mt-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Original mobile interface with usability and navigation
                challenges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#22C55E" }}
                >
                  <span className="text-white font-bold text-xs">✓</span>
                </div>
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  AFTER
                </h3>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={showcaseImages.mobile.after}
                  alt="Redesigned mobile interface"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <p
                className="text-gray-400 text-sm mt-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Redesigned mobile interface with enhanced user experience.
              </p>
            </motion.div>
          </div>

          {/* Detailed Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#EF4444" }}
                >
                  <span className="text-white font-bold text-xs">!</span>
                </div>
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  MOBILE ISSUES
                </h3>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={showcaseImages.mobile.breakdownBefore}
                  alt="Original mobile breakdown analysis"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <p
                className="text-gray-400 text-sm mt-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Detailed analysis of original mobile interface issues.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#22C55E" }}
                >
                  <span className="text-white font-bold text-xs">✓</span>
                </div>
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  MOBILE IMPROVEMENTS
                </h3>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={showcaseImages.mobile.breakdownAfter}
                  alt="Redesigned mobile breakdown analysis"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <p
                className="text-gray-400 text-sm mt-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Comprehensive breakdown of redesigned mobile interface
                improvements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Improvements */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              KEY IMPROVEMENTS
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Strategic design changes that significantly improved user
              experience and efficiency.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: "Simplified Navigation",
                description:
                  "Redesigned the main navigation to reduce clicks for common tasks like searching and browsing new music.",
                impact: "30% faster task completion",
              },
              {
                title: "Enhanced Search",
                description:
                  "Moved search to the home screen with recent searches easily accessible, eliminating unnecessary navigation steps.",
                impact: "Hundreds of millions of clicks saved daily",
              },
              {
                title: "Improved Content Discovery",
                description:
                  "Better organization of recommended content and new releases with more prominent placement on the home screen.",
                impact: "70% increase in discovery engagement",
              },
              {
                title: "Cross-Platform Consistency",
                description:
                  "Unified design language across desktop and mobile platforms for a seamless user experience.",
                impact: "85% user satisfaction rating",
              },
            ].map((improvement, index) => (
              <motion.div
                key={improvement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-start gap-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#22C55E" }}
                  >
                    <span className="text-white font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-2xl font-bold text-white mb-3"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {improvement.title}
                    </h3>
                    <p
                      className="text-gray-300 leading-relaxed mb-4"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {improvement.description}
                    </p>
                    <div
                      className="text-lg font-semibold"
                      style={{
                        color: "#22C55E",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      Impact: {improvement.impact}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl font-bold text-white mb-8"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              READY FOR MORE?
            </h2>
            <p
              className="text-xl text-gray-300 mb-12"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Explore more of my work and see how design translates into
              functional applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/dev?tab=ux">
                <motion.div
                  className="px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-colors duration-200"
                  style={{
                    backgroundColor: "#22C55E",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={spring}
                >
                  VIEW MORE UX PROJECTS
                </motion.div>
              </Link>

              <Link href="/dev?tab=development">
                <motion.div
                  className="px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-colors duration-200"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={spring}
                >
                  VIEW DEVELOPMENT WORK
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
