"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function GrammarlyGOCaseStudy() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
      {/* Hero Section */}
      <motion.section
        className="relative flex items-start justify-start px-4 sm:px-8 md:px-16 pt-32 sm:pt-48 md:pt-60 pb-12 sm:pb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-none mx-auto">
          {/* Main Hero Text */}
          <motion.div
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-tight tracking-tight mb-6 sm:mb-8"
              style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
            >
              GRAMMARLYGO
            </h1>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 sm:mb-12 tracking-wide"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Improving AI Retention: Turning One-Time Users into Loyal Daily Writers
            </h2>
            <div className="flex flex-wrap gap-4 mb-8">
              <span
                className="px-4 py-2 text-sm font-bold uppercase tracking-wider"
                style={{ backgroundColor: "#CD535A", fontFamily: "Bungee, Arial Black, sans-serif" }}
              >
                UX Research
              </span>
              <span
                className="px-4 py-2 text-sm font-bold uppercase tracking-wider"
                style={{ backgroundColor: "#4A90E2", fontFamily: "Bungee, Arial Black, sans-serif" }}
              >
                Product Strategy
              </span>
              <span
                className="px-4 py-2 text-sm font-bold uppercase tracking-wider"
                style={{ backgroundColor: "#7ED321", fontFamily: "Bungee, Arial Black, sans-serif" }}
              >
                Business Impact
              </span>
              <span
                className="px-4 py-2 text-sm font-bold uppercase tracking-wider"
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
        className="px-4 sm:px-8 md:px-16 py-12 sm:py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-none">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-8 sm:mb-12"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            BACKGROUND
          </h2>
          <div className="space-y-8 sm:space-y-12">
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
            <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
              <div className="space-y-4">
                <div className="text-4xl sm:text-5xl font-black text-red-400 mb-4" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>60%</div>
                <p
                  className="text-gray-400 leading-relaxed text-lg font-light"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  of users try GrammarlyGO once but do not return in the next 7 days
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl sm:text-5xl font-black text-yellow-400 mb-4" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>25%</div>
                <p
                  className="text-gray-400 leading-relaxed text-lg font-light"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  premium users show only slightly higher engagement than free users
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl sm:text-5xl font-black text-blue-400 mb-4" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>High</div>
                <p
                  className="text-gray-400 leading-relaxed text-lg font-light"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  confusion about what GrammarlyGO does differently from standard Grammarly
                </p>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 sm:p-8">
              <h3
                className="text-xl sm:text-2xl font-light text-white mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Your Role
              </h3>
              <p
                className="text-gray-400 leading-relaxed text-lg font-light"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                As a UX Designer working directly with the GrammarlyGO product team, you are tasked with understanding:
              </p>
              <ul className="mt-4 space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
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
        className="px-4 sm:px-8 md:px-16 py-12 sm:py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-none">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-8 sm:mb-12"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            PROBLEM FRAMING
          </h2>
          <div className="space-y-16 sm:space-y-20">
            <div className="space-y-8">
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

            <div className="space-y-8">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Identify Priority Segments: Who should this research focus on?
              </h3>
              <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
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

            <div className="space-y-8">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Define Hypotheses: What do you suspect is happening and why?
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-6">
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
                <div className="bg-gray-800/50 rounded-lg p-6">
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
                <div className="bg-gray-800/50 rounded-lg p-6">
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

            <div className="space-y-8">
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
        className="px-4 sm:px-8 md:px-16 py-12 sm:py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-none">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-8 sm:mb-12"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            BUSINESS IMPACT
          </h2>
          <div className="space-y-16 sm:space-y-20">
            {/* CAC Calculation */}
            <div className="space-y-8">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Customer Acquisition Cost (CAC)
              </h3>
              <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
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
            <div className="space-y-8">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Lifetime Value (LTV)
              </h3>
              <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
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
            <div className="space-y-8">
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
              
              <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
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
        className="px-4 sm:px-8 md:px-16 py-12 sm:py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-none">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-8 sm:mb-12"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            RESEARCH METHODOLOGY
          </h2>
          <div className="space-y-16 sm:space-y-20">
            <div className="space-y-8">
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

            <div className="space-y-8">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Methods Selected
              </h3>
              <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg p-6">
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
                  <div className="bg-gray-800/50 rounded-lg p-6">
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
                  <div className="bg-gray-800/50 rounded-lg p-6">
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
                  <div className="bg-gray-800/50 rounded-lg p-6">
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

            <div className="space-y-8">
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
              <div className="bg-gray-800/50 rounded-lg p-6">
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
        className="px-4 sm:px-8 md:px-16 py-12 sm:py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-none">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-8 sm:mb-12"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            RESEARCH RESULTS
          </h2>
          <div className="space-y-16 sm:space-y-20">
            {/* Product Analytics */}
            <div className="space-y-8">
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
              <div className="bg-gray-800/50 rounded-lg p-6">
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
              <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
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
            <div className="space-y-8">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                2. Unmoderated Usability Testing (Maze)
              </h3>
              <div className="bg-gray-800/50 rounded-lg p-6">
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
              <div className="bg-gray-800/50 rounded-lg p-6">
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
            <div className="space-y-8">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                3. User Interviews (10 participants: 6 disengaged, 2 power, 2 churned)
              </h3>
              <div className="bg-gray-800/50 rounded-lg p-6">
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
              <div className="bg-gray-800/50 rounded-lg p-6">
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
            <div className="space-y-8">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                4. In-Product Intercept Survey (Hotjar | n = 342 responses)
              </h3>
              <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg p-6">
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
                  <div className="bg-gray-800/50 rounded-lg p-6">
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
                <div className="bg-gray-800/50 rounded-lg p-6">
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
    </div>
  );
}
