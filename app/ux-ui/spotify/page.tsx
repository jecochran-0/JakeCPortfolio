"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Monitor, Smartphone, ArrowLeft, ExternalLink } from "lucide-react";

export default function SpotifyCaseStudy() {
  const [selectedView, setSelectedView] = useState("overview");
  const [deviceType, setDeviceType] = useState("desktop");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const spring = { type: "spring", stiffness: 220, damping: 24 } as const;
  const heroSpring = { type: "spring", stiffness: 140, damping: 20 } as const;

  const caseStudyFiles = {
    desktop: {
      old: {
        home: "/Spotify_CaseStudy/Desktop_Old_Home.pdf",
        breakdown: "/Spotify_CaseStudy/Desktop_Old_Breakdown.pdf",
      },
      new: {
        home: "/Spotify_CaseStudy/Desktop_Home_New.pdf",
        breakdown: "/Spotify_CaseStudy/Desktop_New_Breakdown.pdf",
      },
    },
    mobile: {
      old: {
        home: "/Spotify_CaseStudy/Mobile_Home_Old.pdf",
        breakdown: "/Spotify_CaseStudy/Mobile_Old_Breakdown.pdf",
      },
      new: {
        home: "/Spotify_CaseStudy/Mobile_Home_New.pdf",
        breakdown: "/Spotify_CaseStudy/New_Mobile_Breakdown.pdf",
      },
    },
    flow: "/Spotify_CaseStudy/Flow_Breakdown.pdf",
  } as const;

  // Image showcase using existing paths
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
    userFlow: "/Spotify_Project/Planning.jpg", // Use planning image which contains flow information
  } as const;

  return (
    <div className="min-h-screen bg-white text-black cursor-none">
      {/* Hero */}
      <header className="relative w-full min-h-[90vh] overflow-hidden">
        {/* Dynamic background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating geometric shapes */}
          <motion.div
            animate={{
              x: mousePosition.x * 0.02,
              y: mousePosition.y * 0.02,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="absolute top-20 right-20 w-32 h-32 bg-green-100 border-4 border-green-600 rotate-12 opacity-60"
          />
          <motion.div
            animate={{
              x: mousePosition.x * -0.015,
              y: mousePosition.y * -0.015,
            }}
            transition={{ type: "spring", stiffness: 60, damping: 25 }}
            className="absolute bottom-32 left-16 w-24 h-24 bg-orange-200 border-4 border-black rotate-45 opacity-50"
          />
          <motion.div
            animate={{
              x: mousePosition.x * 0.025,
              y: mousePosition.y * -0.02,
            }}
            transition={{ type: "spring", stiffness: 40, damping: 15 }}
            className="absolute top-1/2 right-1/4 w-16 h-16 bg-green-600 rotate-12"
          />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="grid grid-cols-12 h-full">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="border-r border-black h-full" />
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pt-20 pb-16 relative z-10 flex items-center min-h-[90vh]">
          <div className="max-w-6xl mx-auto">
            {/* Large display typography */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="text-[6rem] md:text-[8rem] lg:text-[12rem] xl:text-[14rem] font-black tracking-[-0.05em] leading-[0.7] select-none"
              >
                <motion.span
                  whileHover={{
                    scale: 1.05,
                    textShadow: "8px 8px 0 rgba(34, 197, 94, 0.3)",
                  }}
                  transition={heroSpring}
                  className="text-green-600 block will-change-transform cursor-default"
                >
                  SPOTIFY
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  whileHover={{
                    scale: 1.02,
                    textShadow: "6px 6px 0 rgba(0, 0, 0, 0.1)",
                  }}
                  className="block text-black will-change-transform cursor-default"
                >
                  REDESIGN
                </motion.span>
              </motion.div>

              {/* Decorative accent */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "12rem" }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="h-2 bg-green-600 mt-4 md:mt-8"
              />
            </div>

            {/* Content overlay */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-0 right-0 max-w-md bg-white/95 backdrop-blur-sm border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,0.9)] p-6"
            >
              <motion.p
                className="text-lg text-gray-800 mb-4 leading-relaxed"
                whileHover={{ scale: 1.01 }}
                transition={spring}
              >
                A comprehensive redesign focusing on improving navigation,
                content discovery, and user engagement
              </motion.p>
              <Link href="/#ux-projects-section">
                <motion.span
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                    boxShadow: "6px 6px 0 rgba(0,0,0,0.9)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={heroSpring}
                  className="btn-brutal btn-card btn-no-shift bg-green-600 text-white inline-flex items-center gap-2 shadow-[4px_4px_0_rgba(0,0,0,0.9)] will-change-transform"
                >
                  <ArrowLeft size={18} /> Back to projects
                </motion.span>
              </Link>
            </motion.div>

            {/* Floating metrics */}
            <div className="absolute top-1/4 left-8 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "8px 8px 0 rgba(34, 197, 94, 0.3)",
                }}
                className="bg-white border-4 border-black p-4 rotate-[-8deg] shadow-[6px_6px_0_rgba(0,0,0,0.9)] will-change-transform cursor-pointer"
              >
                <div className="text-3xl font-black text-green-600">30%</div>
                <div className="text-xs text-gray-800">faster tasks</div>
              </motion.div>
            </div>

            <div className="absolute bottom-1/3 right-16 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                whileHover={{
                  scale: 1.1,
                  rotate: -5,
                  boxShadow: "8px 8px 0 rgba(34, 197, 94, 0.3)",
                }}
                className="bg-white border-4 border-black p-4 rotate-[12deg] shadow-[6px_6px_0_rgba(0,0,0,0.9)] will-change-transform cursor-pointer"
              >
                <div className="text-3xl font-black text-green-600">85%</div>
                <div className="text-xs text-gray-800">satisfaction</div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-32">
        {/* Highlights (re-uses Results & Impact metrics) */}
        <section className="mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: "30%", label: "faster task completion" },
                { value: "85%", label: "users happier w/ navigation" },
                { value: "70%", label: "lift in discovery engagement" },
                { value: "+25%", label: "cross‑platform usage" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    boxShadow: "12px 12px 0 rgba(0,0,0,0.9)",
                    borderColor: "rgb(34 197 94)",
                  }}
                  whileTap={{ scale: 0.995 }}
                  transition={spring}
                  className="card-brutal card-brutal-green card-no-shift p-6 text-center will-change-transform"
                >
                  <div className="text-4xl md:text-5xl font-black text-green-600 mb-2">
                    {item.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-800">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Showcase Section */}
        <section className="mb-24">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-black mb-8 tracking-tight text-center"
            >
              Project Demo
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card-brutal card-no-shift p-8 bg-white border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,0.9)]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 bg-green-600 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.9)]"></div>
                <h3 className="text-3xl font-black text-black tracking-tight">
                  INTERACTIVE WALKTHROUGH
                </h3>
              </div>

              <p className="text-lg text-gray-800 leading-relaxed mb-8">
                Watch this interactive demonstration showcasing the key
                improvements and user experience enhancements in the Spotify
                redesign.
              </p>

              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative overflow-hidden border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,0.9)] will-change-transform"
              >
                <video
                  className="w-full h-auto"
                  controls
                  poster="/Spotify_Project/Desktop-Home-Revamped.jpg"
                  preload="metadata"
                >
                  <source src="/HeroScreen.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Video overlay with play indicator */}
                <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 bg-green-600 border-4 border-white rounded-full flex items-center justify-center shadow-[4px_4px_0_rgba(0,0,0,0.9)]">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                </div>
              </motion.div>

              <div className="mt-6 p-4 bg-green-50 border-2 border-black">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Note:</strong> This video demonstrates key features of
                  the redesigned interface, highlighting improvements in
                  navigation, content discovery, and overall user experience
                  flow.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project overview */}
        <section className="mb-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
              Project Overview
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  This case study explores a redesign of Spotify&apos;s
                  interface to address user pain points around navigation,
                  content discovery, and playlist management. The project
                  included extensive user research, wireframing, prototyping,
                  and visual design phases.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The redesign aims to improve the overall user experience while
                  maintaining Spotify&apos;s brand identity and aesthetics. Key
                  improvements focus on streamlining the navigation structure,
                  enhancing content discovery features, and making playlist
                  management more intuitive.
                </p>
                <div className="mt-8">
                  <h3 className="text-2xl font-black mb-4 tracking-tight">
                    Key Improvements
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-800">
                    <li>
                      {" "}
                      Simplified navigation structure for easier access to key
                      features
                    </li>
                    <li>
                      {" "}
                      Enhanced content discovery through improved recommendation
                      algorithms
                    </li>
                    <li>
                      {" "}
                      Redesigned player interface for better usability across
                      devices
                    </li>
                    <li>
                      {" "}
                      Streamlined playlist management with intuitive controls
                    </li>
                    <li>
                      {" "}
                      Consistent design language across desktop and mobile
                      platforms
                    </li>
                  </ul>
                </div>
              </div>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.995 }}
                transition={spring}
                className="card-brutal card-no-shift p-5 h-fit will-change-transform"
              >
                <h3 className="text-2xl font-black mb-4 tracking-tight">
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-green-600 font-black">Timeline</h4>
                    <p className="text-gray-800">
                      8 weeks (Research, Design, Prototyping, Testing)
                    </p>
                  </div>
                  <div>
                    <h4 className="text-green-600 font-black">My Role</h4>
                    <p className="text-gray-800">
                      UX/UI Designer, User Researcher
                    </p>
                  </div>
                  <div>
                    <h4 className="text-green-600 font-black">Tools Used</h4>
                    <p className="text-gray-800">
                      Figma, Adobe XD, Usability Hub
                    </p>
                  </div>
                  <div>
                    <h4 className="text-green-600 font-black">Deliverables</h4>
                    <p className="text-gray-800">
                      User Research, Wireframes, Hi-Fi Mockups, Interactive
                      Prototypes
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case study content viewer - minimal tabs centered */}
        <section className="mb-24">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-black mb-8 tracking-tight text-center"
            >
              Case Study
            </motion.h2>

            {/* Enhanced tab system */}
            <div className="relative mb-12">
              <div className="flex justify-center">
                <div className="relative bg-gradient-to-r from-white to-gray-50 border-4 border-black shadow-[12px_12px_0_rgba(0,0,0,0.9)] p-3 flex gap-3 rounded-none">
                  {/* Morphing background indicator */}
                  <motion.div
                    className="absolute bg-gradient-to-r from-green-500 to-green-600 shadow-[6px_6px_0_rgba(0,0,0,0.7)] rounded-sm"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    style={{
                      top: "12px",
                      bottom: "12px",
                      left:
                        selectedView === "overview"
                          ? "8px"
                          : selectedView === "before-after"
                          ? "calc(33.333% + 6px)"
                          : "calc(66.666% + 4px)",
                      width: "calc(33.333% - 6px)",
                    }}
                  />

                  {[
                    { id: "overview", label: "Overview" },
                    { id: "before-after", label: "Before & After" },
                    { id: "user-flow", label: "User Flow" },
                  ].map((tab) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setSelectedView(tab.id)}
                      whileHover={{
                        scale: 1.05,
                        y: -3,
                        textShadow:
                          selectedView === tab.id
                            ? "none"
                            : "2px 2px 0 rgba(34, 197, 94, 0.3)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={spring}
                      className={`relative z-10 px-8 py-4 font-black text-sm tracking-wider transition-all duration-300 uppercase focus:outline-none focus:ring-0 ${
                        selectedView === tab.id
                          ? "text-white transform scale-105"
                          : "text-black hover:text-green-600 hover:scale-102"
                      }`}
                    >
                      {tab.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {selectedView === "before-after" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center mb-8"
              >
                <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,0.9)] p-2 flex gap-2">
                  {/* Device selector morphing background */}
                  <motion.div
                    className="absolute bg-gradient-to-r from-green-500 to-green-600 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.5)] rounded-sm"
                    layoutId="activeDevice"
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    style={{
                      top: "8px",
                      bottom: "8px",
                      left:
                        deviceType === "desktop" ? "8px" : "calc(50% + 4px)",
                      width: "calc(50% - 6px)",
                    }}
                  />

                  {[
                    { id: "desktop", label: "Desktop", icon: Monitor },
                    { id: "mobile", label: "Mobile", icon: Smartphone },
                  ].map((device) => {
                    const Icon = device.icon;
                    return (
                      <motion.button
                        key={device.id}
                        onClick={() => setDeviceType(device.id)}
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                          textShadow:
                            deviceType === device.id
                              ? "none"
                              : "1px 1px 0 rgba(34, 197, 94, 0.3)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={spring}
                        className={`relative z-10 px-6 py-3 font-bold text-sm flex items-center gap-2 transition-all duration-300 uppercase tracking-wide focus:outline-none focus:ring-0 ${
                          deviceType === device.id
                            ? "text-white transform scale-105"
                            : "text-gray-700 hover:text-green-600"
                        }`}
                      >
                        <Icon size={16} /> {device.label}
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Enhanced content viewer with smooth transitions */}
            <div className="relative overflow-hidden">
              <motion.div
                key={selectedView}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="bg-white will-change-transform"
              >
                {/* Content sections with improved transitions */}
                <motion.div
                  key={`${selectedView}-${deviceType}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  {selectedView === "overview" && (
                    <div className="space-y-8">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="card-brutal card-no-shift p-8 bg-white border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,0.9)]"
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-8 h-8 bg-green-600 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.9)]"></div>
                          <h3 className="text-3xl font-black text-black tracking-tight">
                            PROBLEM STATEMENT
                          </h3>
                        </div>
                        <p className="text-lg text-gray-800 leading-relaxed">
                          Despite Spotify&apos;s popularity, users reported
                          difficulties with navigation, content discovery, and
                          playlist management. The challenge was to redesign the
                          interface to address these pain points while
                          maintaining the platform&apos;s familiar feel and
                          brand identity.
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="card-brutal card-no-shift p-8 bg-white border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,0.9)]"
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-8 h-8 bg-orange-500 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.9)]"></div>
                          <h3 className="text-3xl font-black text-black tracking-tight">
                            RESEARCH METHODOLOGY
                          </h3>
                        </div>
                        <p className="text-lg text-gray-800 leading-relaxed mb-6">
                          The research phase involved user interviews,
                          competitive analysis, and usability testing of the
                          existing interface. Key findings revealed that users
                          struggled with:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            "Finding specific content in large libraries",
                            "Navigating between different sections of the app",
                            "Managing playlists efficiently",
                            "Discovering new music beyond algorithmic recommendations",
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 p-4 bg-gray-50 border-2 border-black"
                            >
                              <div className="w-2 h-2 bg-green-600 border border-black"></div>
                              <span className="font-medium text-gray-800">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="card-brutal card-no-shift p-8 bg-white border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,0.9)]"
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-8 h-8 bg-blue-500 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.9)]"></div>
                          <h3 className="text-3xl font-black text-black tracking-tight">
                            DESIGN PROCESS
                          </h3>
                        </div>
                        <p className="text-lg text-gray-800 leading-relaxed mb-6">
                          The design process followed a user-centered approach
                          with the following steps:
                        </p>
                        <div className="space-y-3">
                          {[
                            "User research and persona development",
                            "Information architecture restructuring",
                            "Wireframing key screens and user flows",
                            "Creating high-fidelity mockups",
                            "Prototyping and usability testing",
                            "Iterating based on user feedback",
                          ].map((step, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-4 p-4 bg-gray-50 border-2 border-black"
                            >
                              <div className="w-8 h-8 bg-blue-500 border-2 border-black flex items-center justify-center">
                                <span className="text-white font-black text-sm">
                                  {index + 1}
                                </span>
                              </div>
                              <span className="font-medium text-gray-800">
                                {step}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="card-brutal card-no-shift p-8 bg-white border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,0.9)]"
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-8 h-8 bg-purple-500 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.9)]"></div>
                          <h3 className="text-3xl font-black text-black tracking-tight">
                            KEY SOLUTIONS
                          </h3>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          {[
                            {
                              title: "Simplified Navigation",
                              desc: "Reduced the number of primary navigation items and reorganized the information architecture",
                            },
                            {
                              title: "Enhanced Search",
                              desc: "Improved search functionality with filters and contextual results",
                            },
                            {
                              title: "Content Discovery",
                              desc: "Added curated content sections and personalized recommendations",
                            },
                            {
                              title: "Playlist Management",
                              desc: "Redesigned playlist creation and editing workflows",
                            },
                            {
                              title: "Cross-Platform Consistency",
                              desc: "Ensured design consistency across desktop and mobile platforms",
                            },
                          ].map((solution, index) => (
                            <motion.div
                              key={index}
                              whileHover={{ y: -4, scale: 1.02 }}
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                              }}
                              className="card-brutal card-no-shift p-6 bg-gray-50 border-4 border-black will-change-transform"
                            >
                              <h4 className="text-xl font-black text-green-600 mb-3 tracking-tight">
                                {solution.title.toUpperCase()}
                              </h4>
                              <p className="text-gray-800 leading-relaxed">
                                {solution.desc}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="card-brutal card-no-shift p-8 bg-white border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,0.9)]"
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-8 h-8 bg-green-600 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.9)]"></div>
                          <h3 className="text-3xl font-black text-black tracking-tight">
                            RESULTS & IMPACT
                          </h3>
                        </div>
                        <p className="text-lg text-gray-800 leading-relaxed mb-6">
                          Usability testing with the new design showed
                          significant improvements:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            {
                              metric: "30%",
                              desc: "reduction in time to complete common tasks",
                            },
                            {
                              metric: "85%",
                              desc: "of users reported improved satisfaction with navigation",
                            },
                            {
                              metric: "70%",
                              desc: "increase in engagement with discovery features",
                            },
                            {
                              metric: "25%",
                              desc: "more cross-platform usage",
                            },
                          ].map((result, index) => (
                            <motion.div
                              key={index}
                              whileHover={{ y: -4, scale: 1.02 }}
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                              }}
                              className="card-brutal card-no-shift p-6 bg-green-50 border-4 border-black text-center will-change-transform"
                            >
                              <div className="text-4xl font-black text-green-600 mb-2">
                                {result.metric}
                              </div>
                              <div className="text-gray-800 font-medium">
                                {result.desc}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {selectedView === "before-after" && (
                    <div className="space-y-8">
                      {/* Home comparison */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="card-brutal card-no-shift p-8 bg-white border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,0.9)]"
                      >
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-8 h-8 bg-green-600 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.9)]"></div>
                          <h3 className="text-3xl font-black text-black tracking-tight">
                            HOME SCREEN COMPARISON
                          </h3>
                        </div>
                        <div className="grid grid-cols-1 gap-8">
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-6 h-6 bg-red-500 border-2 border-black"></div>
                              <h4 className="text-2xl font-black text-gray-700 tracking-tight">
                                BEFORE
                              </h4>
                            </div>
                            <motion.div
                              whileHover={{ y: -6, scale: 1.005 }}
                              whileTap={{ scale: 0.998 }}
                              transition={spring}
                              className="card-brutal card-no-shift p-0 overflow-hidden border-4 border-black shadow-[6px_6px_0_rgba(0,0,0,0.9)] will-change-transform h-[92vh] md:h-[95vh] lg:h-[97vh] xl:h-[98vh]"
                            >
                              <Image
                                src={
                                  deviceType === "desktop"
                                    ? showcaseImages.desktop.before
                                    : showcaseImages.mobile.before
                                }
                                alt={`Before ${deviceType} home`}
                                width={deviceType === "desktop" ? 1600 : 900}
                                height={deviceType === "desktop" ? 900 : 1600}
                                className="w-full h-full object-contain"
                              />
                            </motion.div>
                            <p className="text-base text-gray-700 leading-relaxed mt-3 p-4 bg-gray-50 border-2 border-black">
                              The original {deviceType} home screen had issues
                              with content organization and visual hierarchy.
                            </p>
                          </div>

                          <div className="my-8 border-t-4 border-black"></div>

                          <div className="space-y-3">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-6 h-6 bg-green-600 border-2 border-black"></div>
                              <h4 className="text-2xl font-black text-green-600 tracking-tight">
                                AFTER
                              </h4>
                            </div>
                            <motion.div
                              whileHover={{ y: -6, scale: 1.005 }}
                              whileTap={{ scale: 0.998 }}
                              transition={spring}
                              className="card-brutal card-no-shift p-0 overflow-hidden border-4 border-black shadow-[6px_6px_0_rgba(0,0,0,0.9)] will-change-transform h-[92vh] md:h-[95vh] lg:h-[97vh] xl:h-[98vh]"
                            >
                              <Image
                                src={
                                  deviceType === "desktop"
                                    ? showcaseImages.desktop.after
                                    : showcaseImages.mobile.after
                                }
                                alt={`After ${deviceType} home`}
                                width={deviceType === "desktop" ? 1600 : 900}
                                height={deviceType === "desktop" ? 900 : 1600}
                                className="w-full h-full object-contain"
                              />
                            </motion.div>
                            <p className="text-base text-gray-700 leading-relaxed mt-3 p-4 bg-green-50 border-2 border-black">
                              The redesigned {deviceType} home screen improves
                              content discovery and visual hierarchy.
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Breakdown comparison */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="card-brutal card-no-shift p-8 bg-white border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,0.9)]"
                      >
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-8 h-8 bg-purple-500 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.9)]"></div>
                          <h3 className="text-3xl font-black text-black tracking-tight">
                            DETAILED BREAKDOWN
                          </h3>
                        </div>
                        <div className="grid grid-cols-1 gap-8">
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-6 h-6 bg-red-500 border-2 border-black"></div>
                              <h4 className="text-2xl font-black text-gray-700 tracking-tight">
                                BEFORE
                              </h4>
                            </div>
                            <motion.div
                              whileHover={{ y: -6, scale: 1.005 }}
                              whileTap={{ scale: 0.998 }}
                              transition={spring}
                              className="card-brutal card-no-shift p-0 overflow-hidden border-4 border-black shadow-[6px_6px_0_rgba(0,0,0,0.9)] will-change-transform h-[92vh] md:h-[95vh] lg:h-[97vh] xl:h-[98vh]"
                            >
                              <Image
                                src={
                                  deviceType === "desktop"
                                    ? showcaseImages.desktop.breakdownBefore
                                    : showcaseImages.mobile.breakdownBefore
                                }
                                alt={`Before ${deviceType} breakdown`}
                                width={deviceType === "desktop" ? 1600 : 900}
                                height={deviceType === "desktop" ? 900 : 1600}
                                className="w-full h-full object-contain"
                              />
                            </motion.div>
                            <p className="text-base text-gray-700 leading-relaxed mt-3 p-4 bg-gray-50 border-2 border-black">
                              Detailed analysis of the original {deviceType}{" "}
                              interface&apos;s pain points and usability issues.
                            </p>
                          </div>

                          <div className="my-8 border-t-4 border-black"></div>

                          <div className="space-y-3">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-6 h-6 bg-green-600 border-2 border-black"></div>
                              <h4 className="text-2xl font-black text-green-600 tracking-tight">
                                AFTER
                              </h4>
                            </div>
                            <motion.div
                              whileHover={{ y: -6, scale: 1.005 }}
                              whileTap={{ scale: 0.998 }}
                              transition={spring}
                              className="card-brutal card-no-shift p-0 overflow-hidden border-4 border-black shadow-[6px_6px_0_rgba(0,0,0,0.9)] will-change-transform h-[92vh] md:h-[95vh] lg:h-[97vh] xl:h-[98vh]"
                            >
                              <Image
                                src={
                                  deviceType === "desktop"
                                    ? showcaseImages.desktop.breakdownAfter
                                    : showcaseImages.mobile.breakdownAfter
                                }
                                alt={`After ${deviceType} breakdown`}
                                width={deviceType === "desktop" ? 1600 : 900}
                                height={deviceType === "desktop" ? 900 : 1600}
                                className="w-full h-full object-contain"
                              />
                            </motion.div>
                            <p className="text-base text-gray-700 leading-relaxed mt-3 p-4 bg-green-50 border-2 border-black">
                              Comprehensive breakdown of the redesigned{" "}
                              {deviceType} interface with key improvements
                              highlighted.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {selectedView === "user-flow" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="card-brutal card-no-shift p-8 bg-white border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,0.9)]"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-8 h-8 bg-blue-500 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.9)]"></div>
                        <h3 className="text-3xl font-black text-black tracking-tight">
                          USER FLOW ANALYSIS
                        </h3>
                      </div>
                      <p className="text-lg text-gray-800 leading-relaxed mb-8">
                        This analysis shows the planning and flow considerations
                        for the redesigned user experience, focusing on common
                        tasks and how the new interface improves the user
                        journey.
                      </p>

                      {/* User Flow Image Display */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ y: -6, scale: 1.01 }}
                        whileTap={{ scale: 0.995 }}
                        className="card-brutal card-no-shift p-0 overflow-hidden border-4 border-black shadow-[6px_6px_0_rgba(0,0,0,0.9)] will-change-transform h-[80vh] md:h-[85vh] lg:h-[90vh] xl:h-[95vh] mb-6"
                      >
                        <Image
                          src={showcaseImages.userFlow}
                          alt="User Flow Planning and Analysis"
                          width={1600}
                          height={900}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>

                      <a
                        href={caseStudyFiles.flow}
                        target="_blank"
                        className="btn-brutal btn-card btn-no-shift bg-blue-100 text-black inline-flex items-center gap-2 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.9)]"
                      >
                        <ExternalLink size={16} /> Open User Flow PDF
                      </a>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Design principles chips (re-uses Key Solutions) */}
        <section className="mb-28">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
              Design Principles
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Simplified Navigation",
                "Enhanced Search",
                "Content Discovery",
                "Playlist Management",
                "Cross‑Platform Consistency",
              ].map((label) => (
                <span
                  key={label}
                  className="px-6 py-3 bg-white text-black border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,0.9)] font-black text-sm tracking-wide uppercase"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
              Conclusion
            </h2>
            <motion.div
              whileHover={{ y: -4 }}
              transition={spring}
              className="card-brutal card-brutal-green card-no-shift p-6 will-change-transform"
            >
              <p className="text-gray-800 mb-4">
                The Spotify redesign project successfully addressed key user
                pain points while maintaining the platform&apos;s core identity.
                Through careful research, iterative design, and user testing,
                the new interface provides a more intuitive and enjoyable
                experience.
              </p>
              <p className="text-gray-800 mb-4">
                Key achievements include a simplified navigation structure,
                enhanced content discovery features, and improved cross-platform
                consistency. User testing validated these improvements with
                significant gains in task completion times and overall
                satisfaction.
              </p>
              <p className="text-gray-800">
                This case study demonstrates how thoughtful UX design can
                enhance an already successful product by focusing on user needs
                and pain points, ultimately leading to a more engaging and
                satisfying experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Expert UX Footer Navigation */}
        <footer className="relative bg-black text-white py-20 overflow-hidden">
          {/* Dynamic background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-10 right-20 w-24 h-24 bg-green-600 border-4 border-white opacity-20"
            />
            <motion.div
              animate={{
                x: [0, -25, 0],
                y: [0, 15, 0],
                rotate: [0, -3, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-16 left-16 w-16 h-16 bg-orange-500 border-4 border-white opacity-15"
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Main CTA Section */}
              <div className="text-center mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-none"
                >
                  READY FOR MORE?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
                >
                  Explore more design solutions that solve real problems and
                  create meaningful user experiences.
                </motion.p>
              </div>

              {/* Navigation Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {/* View All UX Projects */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Link href="/#ux-projects-section">
                    <motion.div
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                        boxShadow: "12px 12px 0 rgba(34, 197, 94, 0.3)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={spring}
                      className="card-brutal card-no-shift bg-white text-black p-8 border-4 border-white shadow-[8px_8px_0_rgba(255,255,255,0.9)] will-change-transform h-full flex flex-col justify-between min-h-[280px]"
                    >
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-green-600 border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,0.9)] flex items-center justify-center">
                            <span className="text-white font-black text-lg">
                              UX
                            </span>
                          </div>
                          <h3 className="text-3xl font-black tracking-tight">
                            MORE UX PROJECTS
                          </h3>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                          Discover additional case studies showcasing
                          user-centered design solutions across various
                          industries and platforms.
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-green-600 font-black text-sm tracking-wide uppercase">
                        <span>EXPLORE PORTFOLIO</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>

                {/* Development Projects */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Link href="/dev">
                    <motion.div
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                        boxShadow: "12px 12px 0 rgba(255, 107, 53, 0.3)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={spring}
                      className="card-brutal card-no-shift bg-white text-black p-8 border-4 border-white shadow-[8px_8px_0_rgba(255,255,255,0.9)] will-change-transform h-full flex flex-col justify-between min-h-[280px]"
                    >
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-orange-500 border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,0.9)] flex items-center justify-center">
                            <span className="text-white font-black text-lg">
                              {"</>"}
                            </span>
                          </div>
                          <h3 className="text-3xl font-black tracking-tight">
                            DEVELOPMENT
                          </h3>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                          See how design translates into functional,
                          high-performance applications with modern development
                          practices.
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-orange-500 font-black text-sm tracking-wide uppercase">
                        <span>VIEW CODE</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              </div>

              {/* Secondary Actions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <Link href="/">
                  <motion.span
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      boxShadow: "6px 6px 0 rgba(255,255,255,0.9)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={spring}
                    className="btn-brutal btn-no-shift bg-white text-black border-4 border-white shadow-[4px_4px_0_rgba(255,255,255,0.9)] px-8 py-4 font-black text-sm tracking-wide uppercase will-change-transform"
                  >
                    ← HOME
                  </motion.span>
                </Link>

                <div className="text-gray-400 text-sm">OR</div>

                <Link href="/about">
                  <motion.span
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={spring}
                    className="px-6 py-3 border-2 border-gray-400 text-gray-300 hover:text-white hover:border-white font-medium tracking-wide uppercase transition-colors duration-200 will-change-transform"
                  >
                    ABOUT ME
                  </motion.span>
                </Link>
              </motion.div>

              {/* Bottom Attribution */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-center mt-16 pt-8 border-t border-gray-700"
              >
                <p className="text-gray-500 text-sm">
                  Designed & Developed with attention to detail
                </p>
              </motion.div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
