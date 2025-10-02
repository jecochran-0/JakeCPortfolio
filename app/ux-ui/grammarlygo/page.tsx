"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Magnetic Link Component for Navigation
const MagneticLink = ({
  children,
  href,
  className = "",
  ariaLabel,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  ariaLabel?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.a
      href={href}
      className={className}
      aria-label={ariaLabel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.a>
  );
};

export default function GrammarlyGOCaseStudy() {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  if (!mounted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#171717" }}
      >
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#171717" }}
    >
      {/* Top Left Branding */}
      <motion.div
        className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/">
          <motion.div
            className="px-3 py-2 sm:px-6 sm:py-3 rounded-lg cursor-pointer"
            style={{ backgroundColor: "#B4323B" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span
              className="text-white font-black text-sm sm:text-xl tracking-wider uppercase"
              style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
            >
              Jake Cochran
            </span>
          </motion.div>
        </a>
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.div
        className="absolute top-4 right-4 sm:top-8 sm:right-8 z-30"
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
          <MagneticLink
            href="/about"
            className="px-4 py-2 border border-white/30 text-white hover:text-gray-300 hover:border-white/50 transition-all duration-300 font-light text-sm tracking-wider rounded-lg"
            ariaLabel="Go to about page"
          >
            ABOUT
          </MagneticLink>
          <MagneticLink
            href="/skills"
            className="px-4 py-2 border border-white/30 text-white hover:text-gray-300 hover:border-white/50 transition-all duration-300 font-light text-sm tracking-wider rounded-lg"
            ariaLabel="Go to skills page"
          >
            SKILLS
          </MagneticLink>
          <MagneticLink
            href="/contact"
            className="px-4 py-2 border border-white/30 text-white hover:text-gray-300 hover:border-white/50 transition-all duration-300 font-light text-sm tracking-wider rounded-lg"
            ariaLabel="Go to contact page"
          >
            WORK
          </MagneticLink>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="fixed inset-0 z-20 md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
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
              href="/skills"
              className="text-white text-4xl font-black tracking-wider uppercase"
              style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SKILLS
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        className="relative flex items-start justify-start px-4 sm:px-8 md:px-16 pt-32 sm:pt-48 md:pt-60 pb-20 sm:pb-32 md:pb-40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-none mx-auto">
          {/* Main Hero Text */}
            <motion.div
            className="mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-tight tracking-tight mb-12 sm:mb-16 md:mb-20"
              style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
            >
              GRAMMARLYGO
            </h1>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-12 sm:mb-16 md:mb-20 tracking-wide"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Improving AI Retention: Turning One-Time Users into Loyal Daily Writers
            </h2>
            <div className="flex flex-wrap gap-6 mb-12 sm:mb-16 md:mb-20">
              <span
                className="px-6 py-3 text-sm font-bold uppercase tracking-wider"
                style={{ backgroundColor: "#CD535A", fontFamily: "Bungee, Arial Black, sans-serif" }}
              >
                UX Research
                </span>
              <span
                className="px-6 py-3 text-sm font-bold uppercase tracking-wider"
                style={{ backgroundColor: "#4A90E2", fontFamily: "Bungee, Arial Black, sans-serif" }}
              >
                Product Strategy
              </span>
              <span
                className="px-6 py-3 text-sm font-bold uppercase tracking-wider"
                style={{ backgroundColor: "#7ED321", fontFamily: "Bungee, Arial Black, sans-serif" }}
              >
                Business Impact
              </span>
              <span
                className="px-6 py-3 text-sm font-bold uppercase tracking-wider"
                style={{ backgroundColor: "#F5A623", fontFamily: "Bungee, Arial Black, sans-serif" }}
              >
                Case Study
              </span>
            </div>
            <p
              className="text-gray-400 leading-relaxed text-xl max-w-4xl font-light"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              This project simulates a real-world B2C SaaS research challenge and demonstrates the ability to lead a study that bridges AI, usability, and product adoption.
              </p>
            </motion.div>
        </div>
      </motion.section>

      {/* Background Section */}
      <motion.section
        className="px-4 sm:px-8 md:px-16 py-20 sm:py-32 md:py-40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-none">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-16 sm:mb-20 md:mb-24"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            BACKGROUND
          </h2>
          <div className="space-y-16 sm:space-y-20 md:space-y-24">
            <p
              className="text-gray-400 leading-relaxed text-xl max-w-5xl font-light"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              GrammarlyGO is Grammarly's embedded AI assistant designed to speed up content creation and help users write more confidently across platforms. It can draft email replies, rewrite sentences for tone or clarity, or brainstorm content ideas using preset prompts or custom instructions.
            </p>
            <p
              className="text-gray-400 leading-relaxed text-xl max-w-5xl font-light"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Despite high brand trust and broad distribution, GrammarlyGO suffers from low re-engagement:
            </p>
            <div className="grid md:grid-cols-3 gap-12 sm:gap-16 md:gap-20">
              <div className="space-y-6">
                <div className="text-4xl sm:text-5xl font-black text-red-400 mb-6" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>60%</div>
                <p
                  className="text-gray-400 leading-relaxed text-lg font-light"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  of users try GrammarlyGO once but do not return in the next 7 days
                </p>
              </div>
              <div className="space-y-6">
                <div className="text-4xl sm:text-5xl font-black text-yellow-400 mb-6" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>25%</div>
                <p
                  className="text-gray-400 leading-relaxed text-lg font-light"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  premium users show only slightly higher engagement than free users
                  </p>
                </div>
              <div className="space-y-6">
                <div className="text-4xl sm:text-5xl font-black text-blue-400 mb-6" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>High</div>
                <p
                  className="text-gray-400 leading-relaxed text-lg font-light"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  confusion about what GrammarlyGO does differently from standard Grammarly
                  </p>
                </div>
              </div>
            <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
              <h3
                className="text-xl sm:text-2xl font-light text-white mb-8"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Your Role
              </h3>
              <p
                className="text-gray-400 leading-relaxed text-lg font-light mb-8"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                As a UX Designer working directly with the GrammarlyGO product team, you are tasked with understanding:
              </p>
              <ul className="space-y-4 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                <li className="text-lg">• Why new users disengage after first use</li>
                <li className="text-lg">• What's missing in the current onboarding or interaction model</li>
                <li className="text-lg">• What keeps some users returning and others not</li>
                <li className="text-lg">• What changes could make GrammarlyGO feel essential rather than optional</li>
              </ul>
                    </div>
                    </div>
                    </div>
      </motion.section>

      {/* Problem Framing Section */}
      <motion.section
        className="px-4 sm:px-8 md:px-16 py-20 sm:py-32 md:py-40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-none">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-16 sm:mb-20 md:mb-24"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            PROBLEM FRAMING
          </h2>
          <div className="space-y-20 sm:space-y-24 md:space-y-32">
            <div className="space-y-12">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                What is GrammarlyGO solving and for whom?
              </h3>
              <p
                className="text-gray-400 leading-relaxed text-xl max-w-5xl font-light"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                GrammarlyGO is solving a time problem, as well as a quality problem. For people that type a lot (emails, docs, etc), GrammarlyGO is an embedded assistant that takes care of nuanced tasks, or revises completed ones.
              </p>
              <p
                className="text-gray-400 leading-relaxed text-xl max-w-5xl font-light"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                60% of users disengaging after the first use means that the features had too much friction to be worth using, or the features were simply never too useful in the first place. A 60% disengagement rate means lost money through CAC and LTV.
              </p>
                  </div>

            <div className="space-y-12">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Identify Priority Segments: Who should this research focus on?
              </h3>
              <div className="grid md:grid-cols-3 gap-12 sm:gap-16 md:gap-20">
                <div className="space-y-4">
                  <div className="text-4xl sm:text-5xl font-black text-red-400 mb-4" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>60%</div>
                  <p
                    className="text-gray-400 leading-relaxed text-lg font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Users that have used GrammarlyGO once and then disengaged
                  </p>
                    </div>
                <div className="space-y-4">
                  <div className="text-4xl sm:text-5xl font-black text-green-400 mb-4" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>20%</div>
                  <p
                    className="text-gray-400 leading-relaxed text-lg font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Power users that have used GrammarlyGO for 3 months minimum, and use it daily
                  </p>
                    </div>
                <div className="space-y-4">
                  <div className="text-4xl sm:text-5xl font-black text-yellow-400 mb-4" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>20%</div>
                  <p
                    className="text-gray-400 leading-relaxed text-lg font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Users that have unsubscribed from GrammarlyGO, and ideally have switched to another competitor
                  </p>
                    </div>
                  </div>
                    </div>

            <div className="space-y-12">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Define Hypotheses: What do you suspect is happening and why?
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                  <h4
                    className="text-lg font-light text-white mb-3"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Hypothesis 1
                  </h4>
                  <p
                    className="text-gray-400 leading-relaxed text-lg font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    I suspect GrammarlyGO is too similar to Grammarly, users do not see a difference between the two and do not see a reason to engage with GrammarlyGO
                  </p>
                    </div>
                <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                  <h4
                    className="text-lg font-light text-white mb-3"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Hypothesis 2
                  </h4>
                  <p
                    className="text-gray-400 leading-relaxed text-lg font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    I suspect that GrammarlyGO has too much user friction, the process of using the features takes too long for the user to use it seamlessly
                  </p>
                    </div>
                <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                  <h4
                    className="text-lg font-light text-white mb-3"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Hypothesis 3
                  </h4>
                  <p
                    className="text-gray-400 leading-relaxed text-lg font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    I suspect that GrammarlyGO's features are not useful enough, the user would rather opt to keep their writing as is, or take the time to revise it themselves
                  </p>
                  </div>
                </div>
              </div>

            <div className="space-y-12">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Define Research Objective
              </h3>
              <p
                className="text-gray-400 leading-relaxed text-xl max-w-5xl font-light"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Understand why new users disengage from GrammarlyGO after first use, what friction exists in the user experience, and what changes would increase return usage.
              </p>
                  </div>
                  </div>
            </div>
      </motion.section>

      {/* Business Impact Analysis Section */}
      <motion.section
        className="px-4 sm:px-8 md:px-16 py-20 sm:py-32 md:py-40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-none">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-16 sm:mb-20 md:mb-24"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            BUSINESS IMPACT
            </h2>
          <div className="space-y-20 sm:space-y-24 md:space-y-32">
            {/* CAC Calculation */}
            <div className="space-y-12">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Customer Acquisition Cost (CAC)
                </h3>
              <div className="grid md:grid-cols-2 gap-12 sm:gap-16 md:gap-20">
                <div className="space-y-4">
                  <h4
                    className="text-xl font-light text-gray-300"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Grammarly Spending Breakdown:
                  </h4>
                  <ul className="space-y-3 text-gray-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    <li className="text-lg">• $2,000,000 on ads (YouTube, Google, Instagram)</li>
                    <li className="text-lg">• $500,000 on referral programs, email campaigns, partnerships</li>
                    <li className="text-lg">• $500,000 on internal growth team salaries and tools</li>
                    <li className="font-bold text-white text-xl">Total acquisition cost: $3,000,000</li>
                    <li className="text-lg">• New Premium users acquired: 250,000</li>
                </ul>
                </div>
                <div className="text-center">
                  <div className="text-6xl sm:text-7xl font-black text-blue-400 mb-4" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>$12</div>
                  <p
                    className="text-gray-400 text-lg"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    CAC = Total Spend / New Users<br/>
                    CAC = $3,000,000 / 250,000
                  </p>
                </div>
              </div>
            </div>

            {/* LTV Calculation */}
            <div className="space-y-12">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Lifetime Value (LTV)
              </h3>
              <div className="grid md:grid-cols-2 gap-12 sm:gap-16 md:gap-20">
                <div className="space-y-4">
                  <ul className="space-y-3 text-gray-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    <li className="text-lg">• Grammarly Premium subscription: $12/month = $144/year</li>
                    <li className="text-lg">• Average Premium user stays subscribed for 1.5 years</li>
                    <li className="text-lg">• Gross revenue per user: $216</li>
                    <li className="text-lg">• Assuming 80% profit margin after operational costs</li>
                    <li className="font-bold text-white text-xl">LTV = $216 × 0.8 = $172.80 per user</li>
                  </ul>
                      </div>
                <div className="text-center">
                  <div className="text-6xl sm:text-7xl font-black text-green-400 mb-4" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>$172.80</div>
                  <p
                    className="text-gray-400 text-lg"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    LTV per engaged user
                  </p>
                      </div>
                    </div>
            </div>

            {/* Impact of Disengagement */}
            <div className="space-y-12">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Impact of Disengagement
              </h3>
              <div className="bg-gray-800/50 rounded-lg p-6 sm:p-8">
                <p
                  className="text-gray-400 leading-relaxed text-xl font-light mb-6"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  If a user tries GrammarlyGO once but doesn't engage:
                </p>
                <ul className="space-y-3 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li className="text-lg">• They're less likely to renew</li>
                  <li className="text-lg">• Their average lifetime drops to 1 year</li>
                  <li className="text-lg">• New revenue = $144 × 0.8 = $115.20</li>
                </ul>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 sm:gap-16 md:gap-20">
                <div className="space-y-4">
                  <h4
                    className="text-xl font-light text-green-400"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Engaged User
                  </h4>
                  <ul className="space-y-2 text-gray-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    <li className="text-lg">CAC: $12</li>
                    <li className="text-lg">LTV: $172.80</li>
                    <li className="text-xl font-bold text-green-400">Profit: $160.80</li>
                  </ul>
                    </div>
                <div className="space-y-4">
                  <h4
                    className="text-xl font-light text-red-400"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Disengaged User
                    </h4>
                  <ul className="space-y-2 text-gray-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    <li className="text-lg">CAC: $12</li>
                    <li className="text-lg">LTV: $115.20</li>
                    <li className="text-xl font-bold text-red-400">Profit: $103.20</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                <p
                  className="text-red-300 leading-relaxed text-xl font-light"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <span className="font-bold">Result:</span> A disengaged user generates 36% less profit. At scale, if 100,000 users disengage after first use, Grammarly loses over $5.7 million in potential long-term value.
                </p>
              </div>
            </div>
        </div>
        </div>
      </motion.section>

      {/* Research Methodology Section */}
      <motion.section
        className="px-4 sm:px-8 md:px-16 py-20 sm:py-32 md:py-40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-none">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-16 sm:mb-20 md:mb-24"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
              RESEARCH METHODOLOGY
            </h2>
          <div className="space-y-20 sm:space-y-24 md:space-y-32">
            <div className="space-y-12">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Research Objective
              </h3>
              <p
                className="text-gray-400 leading-relaxed text-xl max-w-5xl font-light"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Understand why new users disengage from GrammarlyGO after first use, what friction exists in the user experience, and what changes would increase return usage.
              </p>
            </div>

            <div className="space-y-12">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Methods Selected
              </h3>
              <div className="grid md:grid-cols-2 gap-12 sm:gap-16 md:gap-20">
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                    <h4
                      className="text-lg font-light text-white mb-3"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                        Product Analytics Review
                    </h4>
                    <p
                      className="text-gray-400 leading-relaxed text-lg font-light"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      <span className="font-bold text-blue-400">Type:</span> Quantitative<br/>
                      <span className="font-bold text-blue-400">Goal:</span> Understand user behavior at scale — identify drop-offs and usage patterns
                    </p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                    <h4
                      className="text-lg font-light text-white mb-3"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                        Unmoderated Usability Testing
                    </h4>
                    <p
                      className="text-gray-400 leading-relaxed text-lg font-light"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      <span className="font-bold text-green-400">Type:</span> Qualitative<br/>
                      <span className="font-bold text-green-400">Goal:</span> Observe interaction friction points in key use cases
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                    <h4
                      className="text-lg font-light text-white mb-3"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                        Semi-Structured User Interviews
                    </h4>
                    <p
                      className="text-gray-400 leading-relaxed text-lg font-light"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      <span className="font-bold text-purple-400">Type:</span> Qualitative<br/>
                      <span className="font-bold text-purple-400">Goal:</span> Explore expectations, mental models, motivations, and trust
                    </p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                    <h4
                      className="text-lg font-light text-white mb-3"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                        In-Product Intercept Surveys
                    </h4>
                    <p
                      className="text-gray-400 leading-relaxed text-lg font-light"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      <span className="font-bold text-yellow-400">Type:</span> Quantitative<br/>
                      <span className="font-bold text-yellow-400">Goal:</span> Capture user intent and satisfaction at the point of usage
                    </p>
              </div>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Recruitment Plan
              </h3>
              <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
                <div className="space-y-4">
                  <div className="text-4xl sm:text-5xl font-black text-red-400 mb-4" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>60%</div>
                  <h4
                    className="text-xl font-light text-white"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                          Disengaged Users
                  </h4>
                  <p
                    className="text-gray-400 leading-relaxed text-lg font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                        Tried GrammarlyGO once, haven't used since
                      </p>
                    </div>
                <div className="space-y-4">
                  <div className="text-4xl sm:text-5xl font-black text-green-400 mb-4" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>20%</div>
                  <h4
                    className="text-xl font-light text-white"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                          Power Users
                  </h4>
                  <p
                    className="text-gray-400 leading-relaxed text-lg font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Daily GrammarlyGO users, >3 months
                      </p>
                    </div>
                <div className="space-y-4">
                  <div className="text-4xl sm:text-5xl font-black text-yellow-400 mb-4" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>20%</div>
                  <h4
                    className="text-xl font-light text-white"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                          Churned Users
                  </h4>
                  <p
                    className="text-gray-400 leading-relaxed text-lg font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                        Canceled Grammarly Premium or switched to competitor
                      </p>
                    </div>
                  </div>
              <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                <h4
                  className="text-lg font-light text-white mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Sourcing
                  </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li className="text-lg">• Internal CRM data (usage tracking via product analytics)</li>
                  <li className="text-lg">• Email outreach + incentives ($25 gift card)</li>
                  <li className="text-lg">• For surveys: Random sample triggered in-product after first use</li>
                  </ul>
                </div>
              </div>
                    </div>
                      </div>
      </motion.section>

      {/* Research Results Section */}
      <motion.section
        className="px-4 sm:px-8 md:px-16 py-20 sm:py-32 md:py-40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-none">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-16 sm:mb-20 md:mb-24"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            RESEARCH RESULTS
            </h2>
          <div className="space-y-20 sm:space-y-24 md:space-y-32">
            {/* Product Analytics */}
            <div className="space-y-12">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                1. Product Analytics Review (Amplitude)
              </h3>
              <h4
                className="text-xl font-light text-gray-300"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                  Funnel: GrammarlyGO Usage – First 14 Days
                </h4>
              <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Clicked "GrammarlyGO" button</span>
                    <span className="font-bold text-white">100% (Baseline)</span>
                          </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Select a writing mode (rewrite, shorten, etc.)</span>
                    <span className="font-bold text-yellow-400">58%</span>
                          </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Generated output</span>
                    <span className="font-bold text-orange-400">41%</span>
                        </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Applied output to document</span>
                    <span className="font-bold text-red-400">24%</span>
                        </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Returned to use GrammarlyGO again (7-day window)</span>
                    <span className="font-bold text-red-500">12%</span>
                              </div>
                          </div>
                        </div>
              <div className="grid md:grid-cols-2 gap-12 sm:gap-16 md:gap-20">
                <div className="space-y-4">
                  <h4
                    className="text-lg font-light text-white"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Behavior Segments:
                </h4>
                  <ul className="space-y-2 text-gray-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    <li className="text-lg">• Users using "Shorten" or "Rewrite Tone" features: 70% of returners</li>
                    <li className="text-lg">• "Professional tone" was selected 3× more than other tones</li>
                    <li className="text-lg">• 33% of first-time users exited before selecting a writing mode</li>
                </ul>
              </div>
              </div>
            </div>

            {/* Usability Testing */}
            <div className="space-y-12">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                2. Unmoderated Usability Testing (Maze)
              </h3>
              <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                <h4
                  className="text-lg font-light text-white mb-4"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Scenario Tasks:
                </h4>
                <ul className="space-y-2 text-gray-300 mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li className="text-lg">• Rewrite a Slack message to sound more confident</li>
                  <li className="text-lg">• Summarize a paragraph to be more concise</li>
                  <li className="text-lg">• Brainstorm talking points for an email</li>
                </ul>
                <h4
                  className="text-lg font-light text-white mb-4"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Key Observations (15 participants):
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li className="text-lg">• 9/15 didn't notice the GrammarlyGO icon was different from classic Grammarly</li>
                  <li className="text-lg">• 7/15 clicked the standard Grammarly "correct" button instead of the AI rewrite tool</li>
                  <li className="text-lg">• 10/15 completed the task but took longer than expected (avg. 2.4 minutes/task)</li>
                  <li className="text-lg">• 5/15 expected a full-chat interface like ChatGPT</li>
                  <li className="text-lg">• 4/15 were unsure if their tone setting had any real effect</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                <h4
                  className="text-lg font-light text-white mb-4"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Quotes:
                </h4>
                <ul className="space-y-3 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li className="text-lg italic">"I thought this would be a chatbot like ChatGPT."</li>
                  <li className="text-lg italic">"I wasn't sure if it actually changed the tone or just fixed grammar."</li>
                  <li className="text-lg italic">"Why do I have to re-highlight every time? That's annoying."</li>
                </ul>
                </div>
              </div>

            {/* User Interviews */}
            <div className="space-y-12">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                3. User Interviews (10 participants: 6 disengaged, 2 power, 2 churned)
              </h3>
              <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                <h4
                  className="text-lg font-light text-white mb-4"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Themes from Semi-Structured Questions:
                  </h4>
                <ul className="space-y-2 text-gray-300 mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li className="text-lg">• What were you hoping GrammarlyGO would help with?</li>
                  <li className="text-lg">• What was confusing or frustrating about your last use?</li>
                  <li className="text-lg">• When do you choose to use GrammarlyGO instead of classic Grammarly?</li>
                  <li className="text-lg">• What would make this worth using more often?</li>
                  </ul>
                <h4
                  className="text-lg font-light text-white mb-4"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Highlights:
                  </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li className="text-lg">• Expectation mismatch: 7/10 thought GrammarlyGO was a chatbot experience</li>
                  <li className="text-lg">• Usefulness gap: 5/10 didn't feel the output added much value beyond their own edits</li>
                  <li className="text-lg">• Frustration with UI: 6/10 found the controls non-intuitive</li>
                  <li className="text-lg">• Power users appreciated tone control and speed, but set up their own shortcuts</li>
                  <li className="text-lg">• Churned users switched to ChatGPT for more flexible responses</li>
                  </ul>
                </div>
              <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                <h4
                  className="text-lg font-light text-white mb-4"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Quotes:
                </h4>
                <ul className="space-y-3 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li className="text-lg italic">"It felt like Grammarly but slightly smarter, not something I'd pay extra for."</li>
                  <li className="text-lg italic">"I'd use it more if I didn't have to dig around to find it."</li>
                  <li className="text-lg italic">"I wanted suggestions, not full rewrites that sound weirdly robotic."</li>
                </ul>
                </div>
              </div>

            {/* In-Product Surveys */}
            <div className="space-y-12">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                4. In-Product Intercept Survey (Hotjar | n = 342 responses)
              </h3>
              <div className="grid md:grid-cols-2 gap-12 sm:gap-16 md:gap-20">
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                    <h4
                      className="text-lg font-light text-white mb-3"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                    Q1: What were you trying to do with GrammarlyGO?
                  </h4>
                    <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      <li className="text-lg">• Speed up writing: 45%</li>
                      <li className="text-lg">• Improve tone: 30%</li>
                      <li className="text-lg">• Brainstorm: 17%</li>
                      <li className="text-lg">• Not sure / exploring: 8%</li>
                    </ul>
                      </div>
                  <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                    <h4
                      className="text-lg font-light text-white mb-3"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                    Q2: Did it help you accomplish your goal?
                  </h4>
                    <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      <li className="text-lg">• Yes: 19%</li>
                      <li className="text-lg">• Partially: 42%</li>
                      <li className="text-lg">• No: 39%</li>
                    </ul>
                      </div>
                  </div>
                <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                  <h4
                    className="text-lg font-light text-white mb-3"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Q3 (Open-ended, sampled):
                  </h4>
                  <ul className="space-y-3 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    <li className="text-lg italic">"I couldn't tell the difference between GrammarlyGO and normal Grammarly."</li>
                    <li className="text-lg italic">"It was hard to find tone controls."</li>
                    <li className="text-lg italic">"It rewrote too much. I just wanted small edits."</li>
                  </ul>
                </div>
              </div>
                </div>
              </div>
        </div>
      </motion.section>

      {/* Key Insights Section */}
      <motion.section
        className="px-4 sm:px-8 md:px-16 py-20 sm:py-32 md:py-40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-none">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-16 sm:mb-20 md:mb-24"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            KEY INSIGHTS
            </h2>
          <div className="space-y-20 sm:space-y-24 md:space-y-32">
            <div className="space-y-12">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Playback Summary
              </h3>
              <p
                className="text-gray-400 leading-relaxed text-xl max-w-5xl font-light"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Our research uncovered a core issue: users expect GrammarlyGO to act like a conversation-based assistant (like ChatGPT), but instead find a rigid tool hidden behind complex UI. This leads to:
              </p>
              <ul className="space-y-3 text-gray-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                <li className="text-lg">• Low trust in the tool's usefulness</li>
                <li className="text-lg">• Low visibility and discoverability</li>
                <li className="text-lg">• Output that feels over-edited and impersonal</li>
                <li className="text-lg">• Even engaged users work around the friction manually — meaning the product isn't supporting them efficiently either</li>
              </ul>
            </div>

            <div className="space-y-12">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Insight Clusters
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 font-bold text-blue-400" style={{ fontFamily: "Montserrat, sans-serif" }}>Theme</th>
                      <th className="text-left py-3 px-4 font-bold text-green-400" style={{ fontFamily: "Montserrat, sans-serif" }}>Supporting Evidence</th>
                      <th className="text-left py-3 px-4 font-bold text-purple-400" style={{ fontFamily: "Montserrat, sans-serif" }}>What It Means</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Expectations mismatch</td>
                      <td className="py-3 px-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Interviews, Usability, Survey</td>
                      <td className="py-3 px-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Users think GrammarlyGO will act like ChatGPT, not a rewrite tool</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Discoverability issues</td>
                      <td className="py-3 px-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Analytics, Usability Testing</td>
                      <td className="py-3 px-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Users can't easily find GrammarlyGO or don't know they're using it</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Frustration with tone control & UI</td>
                      <td className="py-3 px-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Usability, Survey, Interviews</td>
                      <td className="py-3 px-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Tone options unclear; too many clicks to refine/edit content</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Output felt excessive or impersonal</td>
                      <td className="py-3 px-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Interviews, Survey</td>
                      <td className="py-3 px-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Users want tweaks, not full rewrites; don't trust "robotic" style</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Power users find workarounds</td>
                      <td className="py-3 px-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Interviews</td>
                      <td className="py-3 px-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Advanced users manually customize inputs, showing need for presets or macros</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Prioritized Problem Areas Section */}
      <motion.section
        className="px-4 sm:px-8 md:px-16 py-20 sm:py-32 md:py-40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-none">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-16 sm:mb-20 md:mb-24"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            PRIORITIZED PROBLEM AREAS
          </h2>
          <div className="space-y-20 sm:space-y-24 md:space-y-32">
            {/* Problem 1 */}
            <div className="space-y-12">
              <div className="flex items-center mb-6">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-4" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>High Priority</span>
                <h3
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  1. Clarify Value Prop of GrammarlyGO vs. Classic Grammarly
              </h3>
              </div>
              <p
                className="text-gray-400 leading-relaxed text-xl max-w-5xl font-light"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                <span className="font-bold text-red-400">Rationale:</span> Prevents expectation mismatch and early churn
              </p>
              <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                <h4
                  className="text-lg font-light text-white mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Bottom Line Impact:
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li className="text-lg">• Reduces churn after first use → protects LTV</li>
                  <li className="text-lg">• Increases adoption of GrammarlyGO among paying users → drives usage-based retention</li>
                  <li className="text-lg">• Improves feature ROI → ensures investment in AI is seen as valuable</li>
                  <li className="text-lg">• Boosts conversion from free to Premium, if GrammarlyGO is perceived as a clear differentiator</li>
                </ul>
              </div>
            </div>

            {/* Problem 2 */}
            <div className="space-y-12">
              <div className="flex items-center mb-6">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-4" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>High Priority</span>
                <h3
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  2. Improve Discoverability in Product UI
              </h3>
              </div>
              <p
                className="text-gray-400 leading-relaxed text-xl max-w-5xl font-light"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                <span className="font-bold text-red-400">Rationale:</span> Makes usage frictionless and increases re-engagement
              </p>
              <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                <h4
                  className="text-lg font-light text-white mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Bottom Line Impact:
                        </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li className="text-lg">• Increases repeat usage → key LTV driver (returning users stay longer)</li>
                  <li className="text-lg">• Reduces support costs → fewer users get lost or confused</li>
                  <li className="text-lg">• Drives feature stickiness → improves engagement scores used in renewal models</li>
                  <li className="text-lg">• Amplifies freemium funnel performance → more value in early days = more upgrades</li>
                </ul>
              </div>
            </div>

            {/* Problem 3 */}
            <div className="space-y-12">
              <div className="flex items-center mb-6">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-4" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>Medium Priority</span>
                <h3
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  3. Add Lightweight Editing Tools (Undo, Rephrase, Tone Presets)
                </h3>
              </div>
              <p
                className="text-gray-400 leading-relaxed text-xl max-w-5xl font-light"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                <span className="font-bold text-yellow-400">Rationale:</span> Empowers users with control without added complexity
              </p>
              <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                <h4
                  className="text-lg font-light text-white mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Bottom Line Impact:
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li className="text-lg">• Builds trust in AI output → increases usage frequency</li>
                  <li className="text-lg">• Reduces task abandonment → improves session quality</li>
                  <li className="text-lg">• Differentiates GrammarlyGO from competitors → improves retention in a crowded AI market</li>
                          </ul>
                        </div>
                      </div>

            {/* Problem 4 */}
            <div className="space-y-12">
              <div className="flex items-center mb-6">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-4" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>Medium Priority</span>
                <h3
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  4. Personalize Onboarding Based on User Goal (speed, tone, brainstorm)
                </h3>
                    </div>
              <p
                className="text-gray-400 leading-relaxed text-xl max-w-5xl font-light"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                <span className="font-bold text-yellow-400">Rationale:</span> Aligns tool suggestions to user intent
              </p>
              <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                <h4
                  className="text-lg font-light text-white mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Bottom Line Impact:
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li className="text-lg">• Increases activation rate → users reach their "aha" moment faster</li>
                  <li className="text-lg">• Improves first-week retention → strongest predictor of long-term LTV</li>
                  <li className="text-lg">• Reduces cognitive friction → boosts satisfaction (CSAT), especially among new users</li>
                </ul>
              </div>
            </div>
        </div>
        </div>
      </motion.section>

      {/* Solutions Section */}
      <motion.section
        className="px-4 sm:px-8 md:px-16 py-20 sm:py-32 md:py-40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-none">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-16 sm:mb-20 md:mb-24"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            SOLUTIONS
            </h2>
          <div className="space-y-20 sm:space-y-24 md:space-y-32">
            {/* Solution 1 */}
            <div className="space-y-12">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                1. Contextual GrammarlyGO Activation
              </h3>
              <p
                className="text-gray-400 leading-relaxed text-xl max-w-5xl font-light"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Instead of onboarding screens, trigger GrammarlyGO at moments of struggle. Use ML to detect hesitation, backspacing, or long idle time. Offer GrammarlyGO with contextual suggestions based on what the user is writing.
              </p>
              <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                <h4
                  className="text-lg font-light text-white mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Why it's better:
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li className="text-lg">• Activated when it's needed, not before. Respects user flow.</li>
                  <li className="text-lg">• Ties AI to solving an immediate pain point, which builds trust.</li>
                </ul>
                    </div>
              <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                <h4
                  className="text-lg font-light text-white mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Metric to track:
                </h4>
                <p className="text-gray-300 text-lg" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  GrammarlyGO activation rate during "writer's block" moments
                </p>
                    </div>
                  </div>

            {/* Solution 2 */}
            <div className="space-y-12">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                2. Live Preview Panel with Transparent Output Logic
              </h3>
              <p
                className="text-gray-400 leading-relaxed text-xl max-w-5xl font-light"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Show GrammarlyGO's draft evolving in real time with a "why we chose this" explanation. Let users preview multiple tones or structures without rerunning prompts. Display output as a "guided draft," not a black-box result.
              </p>
              <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                <h4
                  className="text-lg font-light text-white mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Why it's better:
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li className="text-lg">• Increases transparency and control.</li>
                  <li className="text-lg">• Mimics how tools like GitHub Copilot and ChatGPT let users feel more involved.</li>
                      </ul>
                    </div>
              <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                <h4
                  className="text-lg font-light text-white mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Metric to track:
                      </h4>
                <p className="text-gray-300 text-lg" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Reduction in AI output abandonment<br/>
                  Increase in "output edited and used" rate
                </p>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="space-y-12">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                3. Mini AI Editor Mode
              </h3>
              <p
                className="text-gray-400 leading-relaxed text-xl max-w-5xl font-light"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Instead of just rewriting, offer an optional GrammarlyGO side editor. Users can write a rough draft, toggle a GrammarlyGO editor view, and see enhanced versions or paragraph-level suggestions.
              </p>
              <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                <h4
                  className="text-lg font-light text-white mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Why it's better:
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li className="text-lg">• Gives GrammarlyGO a defined space rather than injecting into main editor.</li>
                  <li className="text-lg">• Helps with long-form content where users want help structuring or revising.</li>
                      </ul>
                    </div>
              <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                <h4
                  className="text-lg font-light text-white mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Metric to track:
                </h4>
                <p className="text-gray-300 text-lg" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Session length with AI Editor open<br/>
                  Feature satisfaction score
                </p>
              </div>
                  </div>

            {/* Solution 4 */}
            <div className="space-y-12">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                4. "Start with AI" Smart Templates
              </h3>
              <p
                className="text-gray-400 leading-relaxed text-xl max-w-5xl font-light"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Offer AI-first document templates for common use cases. Email, outreach, follow-up, project summary. Prompted with a short form like: Who is this for? What's your message?
              </p>
              <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                <h4
                  className="text-lg font-light text-white mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Why it's better:
                    </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li className="text-lg">• Helps users generate from a blank page, the hardest moment</li>
                  <li className="text-lg">• Tailors output based on input, which avoids generic results</li>
                </ul>
                  </div>
              <div className="bg-gray-800/50 rounded-lg p-8 sm:p-12">
                <h4
                  className="text-lg font-light text-white mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Metric to track:
                </h4>
                <p className="text-gray-300 text-lg" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Conversion rate from template to completed doc<br/>
                  GrammarlyGO usage rate for new users
                </p>
            </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Expected Impact Section */}
      <motion.section
        className="px-4 sm:px-8 md:px-16 py-20 sm:py-32 md:py-40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-none">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-16 sm:mb-20 md:mb-24"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            EXPECTED IMPACT
          </h2>
          <div className="space-y-20 sm:space-y-24 md:space-y-32">
            <div className="space-y-12">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Business Goals
              </h3>
              <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
                <div className="space-y-4">
                  <div className="text-4xl sm:text-5xl font-black text-blue-400 mb-4" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>25%</div>
                  <p
                    className="text-gray-400 leading-relaxed text-lg font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Improve GrammarlyGO retention within 6 months
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="text-4xl sm:text-5xl font-black text-green-400 mb-4" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>↑</div>
                  <p
                    className="text-gray-400 leading-relaxed text-lg font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Increase AI prompt usage per active user
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="text-4xl sm:text-5xl font-black text-purple-400 mb-4" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>↓</div>
                  <p
                    className="text-gray-400 leading-relaxed text-lg font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Reduce user confusion between GrammarlyGO and core grammar features
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Solution Prioritization
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 font-bold text-blue-400" style={{ fontFamily: "Montserrat, sans-serif" }}>Opportunity</th>
                      <th className="text-left py-3 px-4 font-bold text-green-400" style={{ fontFamily: "Montserrat, sans-serif" }}>Priority</th>
                      <th className="text-left py-3 px-4 font-bold text-purple-400" style={{ fontFamily: "Montserrat, sans-serif" }}>Impact</th>
                      <th className="text-left py-3 px-4 font-bold text-yellow-400" style={{ fontFamily: "Montserrat, sans-serif" }}>Justification</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Contextual GrammarlyGO Trigger</td>
                      <td className="py-3 px-4"><span className="bg-red-500 text-white px-2 py-1 rounded text-xs" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>High</span></td>
                      <td className="py-3 px-4"><span className="bg-red-500 text-white px-2 py-1 rounded text-xs" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>High</span></td>
                      <td className="py-3 px-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Activated during real need. Minimal friction.</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Live Preview Panel</td>
                      <td className="py-3 px-4"><span className="bg-red-500 text-white px-2 py-1 rounded text-xs" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>High</span></td>
                      <td className="py-3 px-4"><span className="bg-red-500 text-white px-2 py-1 rounded text-xs" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>High</span></td>
                      <td className="py-3 px-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Builds trust, improves perceived quality.</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Mini AI Editor Mode</td>
                      <td className="py-3 px-4"><span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>Medium</span></td>
                      <td className="py-3 px-4"><span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>Medium</span></td>
                      <td className="py-3 px-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Encourages use in complex workflows.</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4" style={{ fontFamily: "Montserrat, sans-serif" }}>AI Smart Templates</td>
                      <td className="py-3 px-4"><span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>Medium</span></td>
                      <td className="py-3 px-4"><span className="bg-red-500 text-white px-2 py-1 rounded text-xs" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>High</span></td>
                      <td className="py-3 px-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Solves blank page problem. First-week adoption driver.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
        </div>

            <div className="bg-gray-800/50 rounded-lg p-6 sm:p-8">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide mb-6"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Summary
              </h3>
              <p
                className="text-gray-400 leading-relaxed text-xl max-w-5xl font-light mb-6"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Our research uncovered a core issue: users expect GrammarlyGO to act like a conversation-based assistant (like ChatGPT), but instead find a rigid tool hidden behind complex UI. This leads to low trust, low visibility, and output that feels over-edited and impersonal.
              </p>
              <p
                className="text-gray-400 leading-relaxed text-xl max-w-5xl font-light"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                The proposed solutions focus on contextual activation, transparent output logic, dedicated editing space, and AI-first templates to address these core issues and improve user engagement with GrammarlyGO.
              </p>
              </div>
        </div>
        </div>
      </motion.section>
    </div>
  );
}
