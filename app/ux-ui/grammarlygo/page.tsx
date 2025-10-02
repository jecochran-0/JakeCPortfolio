"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaChartLine,
  FaUsers,
  FaArrowRight,
  FaEyeDropper,
  FaBrain,
  FaCode,
  FaRocket,
  FaLightbulb,
  FaSearch,
} from "react-icons/fa";
import Link from "next/link";

export default function GrammarlyGOCaseStudy() {
  const [mounted, setMounted] = useState(false);
  const [heroAnimationStarted, setHeroAnimationStarted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    // Start hero animations after page transition (1.5s delay)
    const timer = setTimeout(() => {
      setHeroAnimationStarted(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Enhanced brutalist animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Typewriter animation variants
  const typewriter = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 2,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.05,
      },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Hero section animations
  const badgeAnimation = {
    hidden: { opacity: 0, x: -50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const titleAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const subtitleAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 2.5,
      },
    },
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 3.2,
        type: "spring",
        stiffness: 80,
      },
    },
  };

  // Enhanced hover animations - reduced for mobile
  const cardHover = {
    rest: {
      y: 0,
      boxShadow: "8px 8px 0px rgba(0, 0, 0, 0.9)",
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hover: {
      y: -8,
      x: -8,
      boxShadow: "12px 12px 0px rgba(0, 0, 0, 0.95)",
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const buttonHover = {
    rest: {
      y: 0,
      boxShadow: "4px 4px 0px rgba(0, 0, 0, 0.9)",
      transition: {
        duration: 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hover: {
      y: -4,
      x: -4,
      boxShadow: "6px 6px 0px rgba(0, 0, 0, 0.95)",
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-none animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black relative">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-12 sm:space-y-16"
          >
            {/* Case Study Badge */}
            <motion.div
              className="inline-block bg-black text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 font-black text-xs sm:text-sm tracking-widest uppercase border-4 border-black shadow-brutal"
              variants={badgeAnimation}
              initial="hidden"
              animate={heroAnimationStarted ? "visible" : "hidden"}
              whileHover="hover"
            >
              UX Research Case Study
            </motion.div>

            {/* Main Title */}
            <div className="space-y-8 sm:space-y-12">
              <motion.h1
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black leading-none tracking-tighter"
                variants={titleAnimation}
                initial="hidden"
                animate={heroAnimationStarted ? "visible" : "hidden"}
              >
                {"IMPROVING".split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterAnimation}
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
                <br />
                <span className="block text-orange-500 mt-2 sm:mt-4">
                  {"GRAMMARLY GO".split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={letterAnimation}
                      className="inline-block"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </span>
                <br />
                {"RETENTION".split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterAnimation}
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p
                className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 leading-relaxed max-w-5xl font-medium"
                variants={subtitleAnimation}
                initial="hidden"
                animate={heroAnimationStarted ? "visible" : "hidden"}
              >
                Turning one-time AI users into loyal daily writers through
                strategic UX research and product optimization
              </motion.p>
            </div>

            {/* Background Context */}
            <motion.div
              className="bg-gray-50 border-4 border-black shadow-brutal p-6 sm:p-8 lg:p-12 cursor-pointer"
              variants={cardAnimation}
              initial="hidden"
              animate={heroAnimationStarted ? "visible" : "hidden"}
              whileHover="hover"
            >
              <h3 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-8 text-gray-900 tracking-tight">
                Background Context
              </h3>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed font-medium">
                GrammarlyGO is Grammarly's embedded AI assistant designed to
                speed up content creation and help users write more confidently
                across platforms. It can draft email replies, rewrite sentences
                for tone or clarity, or brainstorm content ideas using preset
                prompts or custom instructions.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed font-medium">
                Despite high brand trust and broad distribution, GrammarlyGO
                suffers from low re-engagement:
              </p>
              <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg text-gray-700 font-medium mb-6 sm:mb-8">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 sm:mt-3 mr-3 sm:mr-4 flex-shrink-0"></span>
                  60% of users try GrammarlyGO once but do not return in the
                  next 7 days
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 sm:mt-3 mr-3 sm:mr-4 flex-shrink-0"></span>
                  Premium users show only slightly higher engagement than free
                  users
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 sm:mt-3 mr-3 sm:mr-4 flex-shrink-0"></span>
                  Feedback suggests confusion about what the AI assistant does
                  differently from standard Grammarly corrections
                </li>
              </ul>

              <h4 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-gray-900 tracking-tight">
                Problem Framing
              </h4>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed font-medium">
                GrammarlyGO is solving a time problem, as well as a quality
                problem. For people that type a lot (emails, docs, etc),
                GrammarlyGO is an embedded assistant that takes care of nuanced
                tasks, or revises completed ones.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed font-medium">
                60% of users disengaging after the first use means that the
                features had too much friction to be worth using, or the
                features were simply never too useful in the first place. A 60%
                disengagement rate means lost money through CAC and LTV.
              </p>
            </motion.div>

            {/* Business Impact Analysis */}
            <motion.div
              className="bg-red-50 border-4 border-black shadow-brutal p-6 sm:p-8 lg:p-12 cursor-pointer"
              whileHover="hover"
              variants={cardHover}
              initial="rest"
            >
              <h3 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-8 text-red-600 tracking-tight">
                Business Impact Analysis
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div>
                  <h4 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-gray-900 tracking-tight">
                    Customer Acquisition Cost (CAC)
                  </h4>
                  <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4 font-medium">
                    Let's assume Grammarly spends:
                  </p>
                  <ul className="space-y-1 sm:space-y-2 text-base sm:text-lg text-gray-700 font-medium mb-3 sm:mb-4">
                    <li>• $2,000,000 on ads (YouTube, Google, Instagram)</li>
                    <li>
                      • $500,000 on referral programs, email campaigns,
                      partnerships
                    </li>
                    <li>
                      • $500,000 on internal growth team salaries and tools
                    </li>
                  </ul>
                  <p className="text-base sm:text-lg text-gray-700 font-medium">
                    Total acquisition cost: $3,000,000
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 font-medium">
                    New Premium users acquired: 250,000
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 font-medium">
                    CAC = $3,000,000 / 250,000 = $12 per user
                  </p>
                </div>

                <div>
                  <h4 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-gray-900 tracking-tight">
                    Lifetime Value (LTV)
                  </h4>
                  <ul className="space-y-1 sm:space-y-2 text-base sm:text-lg text-gray-700 font-medium mb-3 sm:mb-4">
                    <li>
                      • Grammarly Premium subscription: $12/month = $144/year
                    </li>
                    <li>
                      • Average Premium user stays subscribed for 1.5 years
                    </li>
                    <li>• Gross revenue per user: $216</li>
                    <li>
                      • Assuming 80% profit margin after operational costs
                    </li>
                  </ul>
                  <p className="text-base sm:text-lg text-gray-700 font-medium">
                    LTV = $216 × 0.8 = $172.80 per user
                  </p>
                </div>
              </div>

              <h4 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-gray-900 tracking-tight">
                Impact of Disengagement
              </h4>
              <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4 font-medium">
                If a user tries GrammarlyGO once but doesn't engage:
              </p>
              <ul className="space-y-1 sm:space-y-2 text-base sm:text-lg text-gray-700 font-medium mb-4 sm:mb-6">
                <li>• They're less likely to renew</li>
                <li>• Their average lifetime drops to 1 year</li>
                <li>• New revenue = $144 × 0.8 = $115.20 LTV</li>
              </ul>

              <div className="bg-white border-2 border-black p-4 sm:p-6 mb-4 sm:mb-6">
                <h5 className="text-lg sm:text-xl font-black mb-3 sm:mb-4 text-gray-900 tracking-tight">
                  Comparing Engaged vs. Disengaged Users
                </h5>
                <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-gray-600 mb-1 sm:mb-2">
                      Engaged User
                    </div>
                    <div className="text-base sm:text-lg font-black text-green-600">
                      $160.80
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Profit
                    </div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-gray-600 mb-1 sm:mb-2">
                      Disengaged User
                    </div>
                    <div className="text-base sm:text-lg font-black text-red-600">
                      $103.20
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Profit
                    </div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-gray-600 mb-1 sm:mb-2">
                      Difference
                    </div>
                    <div className="text-base sm:text-lg font-black text-red-600">
                      36%
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Less Profit
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-base sm:text-lg text-gray-700 font-medium">
                <strong>Result:</strong> A disengaged user generates 36% less
                profit. At scale, if 100,000 users disengage after first use,
                Grammarly loses over $5.7 million in potential long-term value.
              </p>
            </motion.div>

            {/* Key Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-16 sm:mt-20">
              {[
                {
                  value: "60%",
                  label: "Users disengage after first use",
                  color: "red",
                },
                {
                  value: "$5.7M",
                  label: "Potential value at stake",
                  color: "orange",
                },
                {
                  value: "25%",
                  label: "Retention improvement goal",
                  color: "blue",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white border-4 border-black shadow-brutal p-6 sm:p-8 lg:p-10 cursor-pointer"
                  whileHover="hover"
                  variants={cardHover}
                  initial="rest"
                >
                  <div
                    className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-${stat.color}-500 tracking-tight`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-lg sm:text-xl text-gray-700 font-bold leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Framing Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black mb-16 sm:mb-20 text-center tracking-tighter text-gray-900">
              PROBLEM FRAMING
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
              {/* What is GrammarlyGO */}
              <motion.div
                className="bg-white border-4 border-black shadow-brutal p-6 sm:p-8 lg:p-12 cursor-pointer"
                whileHover="hover"
                variants={cardHover}
                initial="rest"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500 border-4 border-black flex items-center justify-center mb-6 sm:mb-8">
                  <FaCode className="text-white text-2xl sm:text-3xl" />
                </div>
                <h3 className="text-2xl xs:text-3xl sm:text-4xl font-black mb-6 sm:mb-8 text-blue-600 tracking-tight">
                  What is GrammarlyGO?
                </h3>
                <p className="text-base xs:text-lg sm:text-xl text-gray-700 mb-8 sm:mb-10 leading-relaxed font-medium">
                  GrammarlyGO is Grammarly's embedded AI assistant designed to
                  speed up content creation and help users write more
                  confidently across platforms.
                </p>
                <ul className="space-y-4 sm:space-y-5">
                  {[
                    "Draft email replies",
                    "Rewrite sentences for tone or clarity",
                    "Brainstorm content ideas using preset prompts",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 border-2 border-black mt-2 mr-4 sm:mr-5 flex-shrink-0"></div>
                      <span className="text-sm xs:text-base sm:text-lg text-gray-700 font-semibold leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Business Impact */}
              <motion.div
                className="bg-white border-4 border-black shadow-brutal p-6 sm:p-8 lg:p-12 cursor-pointer"
                whileHover="hover"
                variants={cardHover}
                initial="rest"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-500 border-4 border-black flex items-center justify-center mb-6 sm:mb-8">
                  <FaChartLine className="text-white text-2xl sm:text-3xl" />
                </div>
                <h3 className="text-2xl xs:text-3xl sm:text-4xl font-black mb-6 sm:mb-8 text-red-600 tracking-tight">
                  Business Impact
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  {[
                    { label: "CAC per user", value: "$12", color: "gray" },
                    {
                      label: "Engaged User LTV",
                      value: "$172.80",
                      color: "green",
                    },
                    {
                      label: "Disengaged User LTV",
                      value: "$115.20",
                      color: "red",
                    },
                    {
                      label: "Profit Loss",
                      value: "36%",
                      color: "red",
                      highlight: true,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`p-4 sm:p-6 border-2 border-black ${
                        item.highlight ? "bg-red-50" : "bg-gray-50"
                      }`}
                    >
                      <div className="text-xs sm:text-sm text-gray-600 font-bold mb-1 sm:mb-2 tracking-wide uppercase">
                        {item.label}
                      </div>
                      <div
                        className={`text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-${item.color}-600 tracking-tight`}
                      >
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Research Hypotheses */}
            <div className="mt-20 sm:mt-24">
              <h3 className="text-2xl xs:text-3xl sm:text-4xl font-black mb-12 sm:mb-16 text-center tracking-tight text-gray-900">
                RESEARCH HYPOTHESES
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {[
                  {
                    title: "Too Similar to Classic Grammarly",
                    description:
                      "Users don't see a difference between GrammarlyGO and standard Grammarly corrections",
                    icon: FaSearch,
                    color: "orange",
                  },
                  {
                    title: "Too Much User Friction",
                    description:
                      "The process of using features takes too long for seamless integration",
                    icon: FaRocket,
                    color: "blue",
                  },
                  {
                    title: "Features Not Useful Enough",
                    description:
                      "Users prefer to keep their writing as-is or revise it themselves",
                    icon: FaLightbulb,
                    color: "green",
                  },
                ].map((hypothesis, index) => (
                  <motion.div
                    key={index}
                    className="bg-white border-4 border-black shadow-brutal p-6 sm:p-8 lg:p-10 cursor-pointer"
                    whileHover="hover"
                    variants={cardHover}
                    initial="rest"
                  >
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 bg-${hypothesis.color}-500 border-4 border-black flex items-center justify-center mb-6 sm:mb-8`}
                    >
                      <hypothesis.icon className="text-white text-xl sm:text-2xl" />
                    </div>
                    <h4 className="text-lg xs:text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-gray-900 tracking-tight">
                      {hypothesis.title}
                    </h4>
                    <p className="text-sm xs:text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                      {hypothesis.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Methodology Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black mb-16 sm:mb-20 text-center tracking-tighter text-gray-900">
              RESEARCH METHODOLOGY
            </h2>

            {/* Research Objective */}
            <motion.div
              className="bg-orange-50 border-4 border-black shadow-brutal p-6 sm:p-8 lg:p-12 xl:p-16 mb-16 sm:mb-20 cursor-pointer"
              whileHover="hover"
              variants={cardHover}
              initial="rest"
            >
              <h3 className="text-2xl xs:text-3xl sm:text-4xl font-black mb-6 sm:mb-8 text-orange-600 tracking-tight">
                Research Objective
              </h3>
              <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                Understand why new users disengage from GrammarlyGO after first
                use, what friction exists in the user experience, and what
                changes would increase return usage.
              </p>
            </motion.div>

            {/* Research Methods Overview */}
            <motion.div
              className="bg-blue-50 border-4 border-black shadow-brutal p-6 sm:p-8 lg:p-12 xl:p-16 mb-16 sm:mb-20 cursor-pointer"
              whileHover="hover"
              variants={cardHover}
              initial="rest"
            >
              <h3 className="text-2xl xs:text-3xl sm:text-4xl font-black mb-6 sm:mb-8 text-blue-600 tracking-tight">
                Research Methods Overview
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-2 border-black">
                  <thead>
                    <tr className="border-b-2 border-black">
                      <th className="text-left p-3 xs:p-4 sm:p-6 font-black text-gray-900 text-xs xs:text-sm sm:text-base">
                        Method
                      </th>
                      <th className="text-left p-3 xs:p-4 sm:p-6 font-black text-gray-900 text-xs xs:text-sm sm:text-base">
                        Type
                      </th>
                      <th className="text-left p-3 xs:p-4 sm:p-6 font-black text-gray-900 text-xs xs:text-sm sm:text-base">
                        Goal
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b-2 border-black">
                      <td className="p-3 xs:p-4 sm:p-6 font-bold text-xs xs:text-sm sm:text-base">
                        Product Analytics Review
                      </td>
                      <td className="p-3 xs:p-4 sm:p-6 text-xs xs:text-sm sm:text-base">
                        Quantitative
                      </td>
                      <td className="p-3 xs:p-4 sm:p-6 text-xs xs:text-sm sm:text-base">
                        Understand user behavior at scale — identify drop-offs
                        and usage patterns
                      </td>
                    </tr>
                    <tr className="border-b-2 border-black">
                      <td className="p-3 xs:p-4 sm:p-6 font-bold text-xs xs:text-sm sm:text-base">
                        Unmoderated Usability Testing
                      </td>
                      <td className="p-3 xs:p-4 sm:p-6 text-xs xs:text-sm sm:text-base">
                        Qualitative
                      </td>
                      <td className="p-3 xs:p-4 sm:p-6 text-xs xs:text-sm sm:text-base">
                        Observe interaction friction points in key use cases
                      </td>
                    </tr>
                    <tr className="border-b-2 border-black">
                      <td className="p-3 xs:p-4 sm:p-6 font-bold text-xs xs:text-sm sm:text-base">
                        Semi-Structured User Interviews
                      </td>
                      <td className="p-3 xs:p-4 sm:p-6 text-xs xs:text-sm sm:text-base">
                        Qualitative
                      </td>
                      <td className="p-3 xs:p-4 sm:p-6 text-xs xs:text-sm sm:text-base">
                        Explore expectations, mental models, motivations, and
                        trust
                      </td>
                    </tr>
                    <tr className="border-b-2 border-black">
                      <td className="p-3 xs:p-4 sm:p-6 font-bold text-xs xs:text-sm sm:text-base">
                        In-Product Intercept Surveys
                      </td>
                      <td className="p-3 xs:p-4 sm:p-6 text-xs xs:text-sm sm:text-base">
                        Quantitative
                      </td>
                      <td className="p-3 xs:p-4 sm:p-6 text-xs xs:text-sm sm:text-base">
                        Capture user intent and satisfaction at the point of
                        usage
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Recruitment Plan */}
            <motion.div
              className="bg-green-50 border-4 border-black shadow-brutal p-8 sm:p-12 lg:p-16 mb-16 sm:mb-20 cursor-pointer"
              whileHover="hover"
              variants={cardHover}
              initial="rest"
            >
              <h3 className="text-3xl sm:text-4xl font-black mb-6 sm:mb-8 text-green-600 tracking-tight">
                Recruitment Plan
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h4 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-gray-900 tracking-tight">
                    Participant Segments
                  </h4>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-white border-2 border-black p-3 sm:p-4">
                      <div className="flex justify-between items-center mb-1 sm:mb-2">
                        <span className="text-base sm:text-lg font-bold text-gray-900">
                          Disengaged Users
                        </span>
                        <span className="text-base sm:text-lg font-black text-red-600">
                          60%
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 font-medium">
                        Tried GrammarlyGO once, haven't used since
                      </p>
                    </div>
                    <div className="bg-white border-2 border-black p-3 sm:p-4">
                      <div className="flex justify-between items-center mb-1 sm:mb-2">
                        <span className="text-base sm:text-lg font-bold text-gray-900">
                          Power Users
                        </span>
                        <span className="text-base sm:text-lg font-black text-green-600">
                          20%
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 font-medium">
                        Daily GrammarlyGO users, &gt;3 months
                      </p>
                    </div>
                    <div className="bg-white border-2 border-black p-3 sm:p-4">
                      <div className="flex justify-between items-center mb-1 sm:mb-2">
                        <span className="text-base sm:text-lg font-bold text-gray-900">
                          Churned Users
                        </span>
                        <span className="text-base sm:text-lg font-black text-orange-600">
                          20%
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 font-medium">
                        Canceled Grammarly Premium or switched to competitor
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-gray-900 tracking-tight">
                    Sourcing Strategy
                  </h4>
                  <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700 font-medium">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 sm:mt-3 mr-3 sm:mr-4 flex-shrink-0"></span>
                      Internal CRM data (usage tracking via product analytics)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 sm:mt-3 mr-3 sm:mr-4 flex-shrink-0"></span>
                      Email outreach + incentives ($25 gift card)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 sm:mt-3 mr-3 sm:mr-4 flex-shrink-0"></span>
                      For surveys: Random sample triggered in-product after
                      first use
                    </li>
                  </ul>

                  <h4 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 mt-6 sm:mt-8 text-gray-900 tracking-tight">
                    Selection Criteria
                  </h4>
                  <p className="text-base sm:text-lg text-gray-700 font-medium">
                    All users should be familiar with classic Grammarly, and are
                    in an environment where GrammarlyGO is intended to be most
                    useful (the user types a lot through the day). This is so we
                    can isolate the problem to GrammarlyGO, instead of receiving
                    feedback irrelevant to the problem.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Research Methods Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
            >
              {[
                {
                  icon: FaChartLine,
                  title: "Product Analytics Review",
                  type: "Quantitative",
                  goal: "Understand user behavior at scale — identify drop-offs and usage patterns",
                  finding: "Only 12% of users returned within 7 days",
                  participants: "2,847 users analyzed",
                  color: "blue",
                },
                {
                  icon: FaUsers,
                  title: "Semi-Structured User Interviews",
                  type: "Qualitative",
                  goal: "Explore expectations, mental models, motivations, and trust",
                  finding: "7/10 users expected a chatbot experience",
                  participants:
                    "10 participants (6 disengaged, 2 power, 2 churned)",
                  color: "green",
                },
                {
                  icon: FaEyeDropper,
                  title: "Unmoderated Usability Testing",
                  type: "Qualitative",
                  goal: "Observe interaction friction points in key use cases",
                  finding: "9/15 didn't notice GrammarlyGO icon difference",
                  participants: "15 participants via Maze",
                  color: "purple",
                },
                {
                  icon: FaBrain,
                  title: "In-Product Intercept Surveys",
                  type: "Quantitative",
                  goal: "Capture user intent and satisfaction at the point of usage",
                  finding: "Only 19% felt it helped accomplish their goal",
                  participants: "342 responses via Hotjar",
                  color: "orange",
                },
              ].map((method, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white border-4 border-black shadow-brutal p-6 sm:p-8 lg:p-12 cursor-pointer"
                  whileHover="hover"
                  initial="rest"
                >
                  <div className="flex items-center mb-6 sm:mb-8">
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 border-4 border-black flex items-center justify-center mr-6 sm:mr-8 ${
                        method.color === "blue"
                          ? "bg-blue-500"
                          : method.color === "green"
                          ? "bg-green-500"
                          : method.color === "purple"
                          ? "bg-purple-500"
                          : method.color === "orange"
                          ? "bg-orange-500"
                          : "bg-gray-500"
                      }`}
                    >
                      <method.icon className="text-white text-2xl sm:text-3xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl xs:text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                        {method.title}
                      </h3>
                      <div className="text-xs xs:text-sm text-gray-600 font-bold tracking-wide uppercase mt-2">
                        {method.type}
                      </div>
                    </div>
                  </div>
                  <p className="text-base xs:text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed font-medium">
                    {method.goal}
                  </p>
                  <div
                    className={`p-4 sm:p-6 border-2 border-black mb-4 sm:mb-6 ${
                      method.color === "blue"
                        ? "bg-blue-50"
                        : method.color === "green"
                        ? "bg-green-50"
                        : method.color === "purple"
                        ? "bg-purple-50"
                        : method.color === "orange"
                        ? "bg-orange-50"
                        : "bg-gray-50"
                    }`}
                  >
                    <div className="text-xs xs:text-sm font-black text-gray-900 mb-2 sm:mb-3 tracking-wide uppercase">
                      Key Finding:
                    </div>
                    <div className="text-base xs:text-lg sm:text-xl text-gray-700 font-semibold">
                      {method.finding}
                    </div>
                  </div>
                  <div className="text-xs xs:text-sm text-gray-600 font-bold tracking-wide">
                    {method.participants}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Research Findings */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black mb-16 sm:mb-20 text-center tracking-tighter text-gray-900">
              DETAILED RESEARCH FINDINGS
            </h2>

            {/* Product Analytics */}
            <motion.div
              className="bg-white border-4 border-black shadow-brutal p-6 sm:p-8 lg:p-12 xl:p-16 mb-16 sm:mb-20 cursor-pointer"
              whileHover="hover"
              variants={cardHover}
              initial="rest"
            >
              <h3 className="text-2xl xs:text-3xl sm:text-4xl font-black mb-6 sm:mb-8 text-blue-600 tracking-tight">
                1. Product Analytics Review (Amplitude)
              </h3>
              <div className="mb-6 sm:mb-8">
                <h4 className="text-xl xs:text-2xl sm:text-3xl font-black mb-4 sm:mb-6 text-gray-900 tracking-tight">
                  Funnel: GrammarlyGO Usage – First 14 Days
                </h4>

                {/* Interactive Funnel Visualization */}
                <div className="space-y-4 sm:space-y-6">
                  {[
                    {
                      step: 'Clicked "GrammarlyGO" button',
                      rate: "100%",
                      baseline: true,
                      insights: [
                        "All users start here - this is our baseline",
                        "High initial interest shows strong brand recognition",
                        "Users are curious about the AI assistant",
                      ],
                      quotes: [
                        "I saw the GrammarlyGO button and wanted to try it",
                      ],
                      color: "green",
                    },
                    {
                      step: "Select a writing mode (rewrite, shorten, etc.)",
                      rate: "58%",
                      insights: [
                        "42% of users exit before even selecting a mode",
                        "This suggests confusion about what GrammarlyGO does",
                        "Users may not understand the different options",
                      ],
                      quotes: [
                        "I wasn't sure what 'rewrite' would do to my text",
                        "The options seemed overwhelming",
                      ],
                      color: "yellow",
                    },
                    {
                      step: "Generated output",
                      rate: "41%",
                      insights: [
                        "Only 41% of users get to see AI-generated content",
                        "17% drop-off from mode selection to generation",
                        "Users may be hesitant about AI output quality",
                      ],
                      quotes: [
                        "I was worried it would change my writing too much",
                        "I wanted to see what it would do first",
                      ],
                      color: "orange",
                    },
                    {
                      step: "Applied output to document",
                      rate: "24%",
                      insights: [
                        "Only 24% actually use the generated content",
                        "17% drop-off suggests output quality issues",
                        "Users may not trust the AI suggestions",
                      ],
                      quotes: [
                        "The output didn't sound like me",
                        "It was too formal for what I was writing",
                      ],
                      color: "red",
                    },
                    {
                      step: "Returned to use GrammarlyGO again (7-day window)",
                      rate: "12%",
                      insights: [
                        "Only 12% return within a week",
                        "This is the critical retention metric",
                        "88% of users don't find enough value to return",
                      ],
                      quotes: [
                        "I tried it once but didn't see the point",
                        "It didn't solve any real problems for me",
                      ],
                      color: "purple",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="group relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {/* Main Funnel Step */}
                      <motion.div
                        className="bg-white border-4 border-black shadow-brutal p-4 sm:p-6 cursor-pointer relative overflow-hidden"
                        whileHover={{
                          y: -4,
                          x: -4,
                          boxShadow: "12px 12px 0px rgba(0, 0, 0, 0.95)",
                          transition: { duration: 0.2 },
                        }}
                        initial="rest"
                      >
                        {/* Progress Bar Background */}
                        <div className="absolute inset-0 bg-gray-100 opacity-50"></div>

                        {/* Animated Progress Bar */}
                        <motion.div
                          className={`absolute top-0 left-0 h-full bg-${item.color}-500 opacity-20`}
                          initial={{ width: 0 }}
                          whileInView={{ width: item.rate }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        />

                        <div className="relative z-10 flex justify-between items-center">
                          <div className="flex-1">
                            <span className="text-sm xs:text-base sm:text-lg text-gray-700 font-medium">
                              {item.step}
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="font-black text-2xl sm:text-3xl text-gray-900">
                              {item.rate}
                            </span>
                            {!item.baseline && (
                              <motion.div
                                className="text-sm font-bold text-red-600"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: index * 0.2 + 0.5 }}
                                viewport={{ once: true }}
                              >
                                ↓
                                {index === 1
                                  ? "42%"
                                  : index === 2
                                  ? "17%"
                                  : index === 3
                                  ? "17%"
                                  : "76%"}
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </motion.div>

                      {/* Hover/Click Details Panel */}
                      <motion.div
                        className="absolute left-0 right-0 top-full mt-2 bg-white border-4 border-black shadow-brutal p-4 sm:p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto"
                        initial={{ y: -10, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Key Insights */}
                        <div className="mb-4">
                          <h5 className="text-sm xs:text-base font-black text-gray-900 mb-2 tracking-wide uppercase">
                            Key Insights:
                          </h5>
                          <ul className="space-y-1">
                            {item.insights.map((insight, insightIndex) => (
                              <li
                                key={insightIndex}
                                className="text-xs xs:text-sm text-gray-700 font-medium flex items-start"
                              >
                                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                {insight}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* User Quotes */}
                        <div>
                          <h5 className="text-sm xs:text-base font-black text-gray-900 mb-2 tracking-wide uppercase">
                            User Quotes:
                          </h5>
                          <div className="space-y-2">
                            {item.quotes.map((quote, quoteIndex) => (
                              <div
                                key={quoteIndex}
                                className="bg-gray-50 border-2 border-black p-2 sm:p-3"
                              >
                                <p className="text-xs xs:text-sm text-gray-700 font-medium italic">
                                  &ldquo;{quote}&rdquo;
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Drop-off Impact */}
                        {!item.baseline && (
                          <div className="mt-4 p-3 bg-red-50 border-2 border-red-300">
                            <div className="text-xs xs:text-sm font-black text-red-600 tracking-wide uppercase mb-1">
                              Drop-off Impact:
                            </div>
                            <div className="text-xs xs:text-sm text-red-700 font-medium">
                              {index === 1
                                ? "42% of users never select a mode"
                                : index === 2
                                ? "17% don't generate content"
                                : index === 3
                                ? "17% don't apply the output"
                                : "76% don't return within a week"}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Funnel Summary */}
                <motion.div
                  className="mt-8 p-6 sm:p-8 bg-red-50 border-4 border-red-500 shadow-brutal"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-red-500 border-4 border-black flex items-center justify-center flex-shrink-0">
                      <FaChartLine className="text-white text-lg sm:text-xl" />
                    </div>
                    <div>
                      <h5 className="text-lg sm:text-xl font-black text-red-600 mb-2 tracking-wide uppercase">
                        Critical Insight:
                      </h5>
                      <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
                        <strong>
                          88% of users abandon GrammarlyGO after their first
                          use.
                        </strong>{" "}
                        This represents a massive opportunity cost - users are
                        interested enough to try it, but the experience fails to
                        deliver enough value to drive retention. The biggest
                        drop-off occurs at the mode selection stage (42% exit),
                        suggesting fundamental UX issues with discoverability
                        and clarity.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div>
                <h4 className="text-xl xs:text-2xl sm:text-3xl font-black mb-4 sm:mb-6 text-gray-900 tracking-tight">
                  Behavior Segments
                </h4>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="text-sm xs:text-base sm:text-lg text-gray-700 font-medium">
                    • Users using &ldquo;Shorten&rdquo; or &ldquo;Rewrite
                    Tone&rdquo; features: 70% of returners
                  </li>
                  <li className="text-sm xs:text-base sm:text-lg text-gray-700 font-medium">
                    • &ldquo;Professional tone&rdquo; was selected 3× more than
                    other tones
                  </li>
                  <li className="text-sm xs:text-base sm:text-lg text-gray-700 font-medium">
                    • 33% of first-time users exited before selecting a writing
                    mode
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Usability Testing */}
            <motion.div
              className="bg-white border-4 border-black shadow-brutal p-6 sm:p-8 lg:p-12 xl:p-16 mb-16 sm:mb-20 cursor-pointer"
              whileHover="hover"
              variants={cardHover}
              initial="rest"
            >
              <h3 className="text-2xl xs:text-3xl sm:text-4xl font-black mb-6 sm:mb-8 text-purple-600 tracking-tight">
                2. Unmoderated Usability Testing (Maze)
              </h3>
              <div className="mb-6 sm:mb-8">
                <h4 className="text-xl xs:text-2xl sm:text-3xl font-black mb-4 sm:mb-6 text-gray-900 tracking-tight">
                  Scenario Tasks
                </h4>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="text-sm xs:text-base sm:text-lg text-gray-700 font-medium">
                    • Rewrite a Slack message to sound more confident
                  </li>
                  <li className="text-sm xs:text-base sm:text-lg text-gray-700 font-medium">
                    • Summarize a paragraph to be more concise
                  </li>
                  <li className="text-sm xs:text-base sm:text-lg text-gray-700 font-medium">
                    • Brainstorm talking points for an email
                  </li>
                </ul>
              </div>
              <div className="mb-6 sm:mb-8">
                <h4 className="text-xl xs:text-2xl sm:text-3xl font-black mb-4 sm:mb-6 text-gray-900 tracking-tight">
                  Key Observations (15 participants)
                </h4>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="text-sm xs:text-base sm:text-lg text-gray-700 font-medium">
                    • 9/15 didn't notice the GrammarlyGO icon was different from
                    classic Grammarly
                  </li>
                  <li className="text-sm xs:text-base sm:text-lg text-gray-700 font-medium">
                    • 7/15 clicked the standard Grammarly &ldquo;correct&rdquo;
                    button instead of the AI rewrite tool
                  </li>
                  <li className="text-sm xs:text-base sm:text-lg text-gray-700 font-medium">
                    • 10/15 completed the task but took longer than expected
                    (avg. 2.4 minutes/task)
                  </li>
                  <li className="text-sm xs:text-base sm:text-lg text-gray-700 font-medium">
                    • 5/15 expected a full-chat interface like ChatGPT
                  </li>
                  <li className="text-sm xs:text-base sm:text-lg text-gray-700 font-medium">
                    • 4/15 were unsure if their tone setting had any real effect
                  </li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 sm:p-6 border-2 border-black">
                <h4 className="text-base xs:text-lg font-black text-gray-900 mb-3 sm:mb-4 tracking-wide uppercase">
                  Key Quotes:
                </h4>
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-sm xs:text-base sm:text-lg text-gray-700 font-medium">
                    &ldquo;I thought this would be a chatbot like
                    ChatGPT.&rdquo;
                  </p>
                  <p className="text-sm xs:text-base sm:text-lg text-gray-700 font-medium">
                    &ldquo;I wasn't sure if it actually changed the tone or just
                    fixed grammar.&rdquo;
                  </p>
                  <p className="text-sm xs:text-base sm:text-lg text-gray-700 font-medium">
                    &ldquo;Why do I have to re-highlight every time? That's
                    annoying.&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>

            {/* User Interviews */}
            <motion.div
              className="bg-white border-4 border-black shadow-brutal p-6 sm:p-8 lg:p-12 xl:p-16 mb-16 sm:mb-20 cursor-pointer"
              whileHover="hover"
              variants={cardHover}
              initial="rest"
            >
              <h3 className="text-2xl xs:text-3xl sm:text-4xl font-black mb-6 sm:mb-8 text-green-600 tracking-tight">
                3. User Interviews (10 participants: 6 disengaged, 2 power, 2
                churned)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div>
                  <h4 className="text-xl xs:text-2xl sm:text-3xl font-black mb-4 sm:mb-6 text-gray-900 tracking-tight">
                    Research Questions
                  </h4>
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="text-base xs:text-lg sm:text-xl text-gray-700 font-medium">
                      • What were you hoping GrammarlyGO would help with?
                    </li>
                    <li className="text-base xs:text-lg sm:text-xl text-gray-700 font-medium">
                      • What was confusing or frustrating about your last use?
                    </li>
                    <li className="text-base xs:text-lg sm:text-xl text-gray-700 font-medium">
                      • When do you choose to use GrammarlyGO instead of classic
                      Grammarly?
                    </li>
                    <li className="text-base xs:text-lg sm:text-xl text-gray-700 font-medium">
                      • What would make this worth using more often?
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl xs:text-2xl sm:text-3xl font-black mb-4 sm:mb-6 text-gray-900 tracking-tight">
                    Key Findings
                  </h4>
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="text-base xs:text-lg sm:text-xl text-gray-700 font-medium">
                      • Expectation mismatch: 7/10 thought GrammarlyGO was a
                      chatbot experience
                    </li>
                    <li className="text-base xs:text-lg sm:text-xl text-gray-700 font-medium">
                      • Usefulness gap: 5/10 didn't feel the output added much
                      value beyond their own edits
                    </li>
                    <li className="text-base xs:text-lg sm:text-xl text-gray-700 font-medium">
                      • Frustration with UI: 6/10 found the controls
                      non-intuitive
                    </li>
                    <li className="text-base xs:text-lg sm:text-xl text-gray-700 font-medium">
                      • Power users appreciated tone control and speed, but set
                      up their own shortcuts
                    </li>
                    <li className="text-base xs:text-lg sm:text-xl text-gray-700 font-medium">
                      • Churned users switched to ChatGPT for more flexible
                      responses
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-green-50 p-4 sm:p-6 border-2 border-black">
                <h4 className="text-base xs:text-lg font-black text-gray-900 mb-3 sm:mb-4 tracking-wide uppercase">
                  Key Quotes:
                </h4>
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-base xs:text-lg sm:text-xl text-gray-700 font-medium">
                    &ldquo;It felt like Grammarly but slightly smarter, not
                    something I'd pay extra for.&rdquo;
                  </p>
                  <p className="text-base xs:text-lg sm:text-xl text-gray-700 font-medium">
                    &ldquo;I'd use it more if I didn't have to dig around to
                    find it.&rdquo;
                  </p>
                  <p className="text-base xs:text-lg sm:text-xl text-gray-700 font-medium">
                    &ldquo;I wanted suggestions, not full rewrites that sound
                    weirdly robotic.&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>

            {/* In-Product Surveys */}
            <motion.div
              className="bg-white border-4 border-black shadow-brutal p-6 sm:p-8 lg:p-12 xl:p-16 cursor-pointer"
              whileHover="hover"
              variants={cardHover}
              initial="rest"
            >
              <h3 className="text-2xl xs:text-3xl sm:text-4xl font-black mb-6 sm:mb-8 text-orange-600 tracking-tight">
                4. In-Product Intercept Survey (Hotjar | n = 342 responses)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div>
                  <h4 className="text-xl xs:text-2xl sm:text-3xl font-black mb-4 sm:mb-6 text-gray-900 tracking-tight">
                    Q1: What were you trying to do with GrammarlyGO?
                  </h4>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { task: "Speed up writing", percent: "45%" },
                      { task: "Improve tone", percent: "30%" },
                      { task: "Brainstorm", percent: "17%" },
                      { task: "Not sure / exploring", percent: "8%" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-4 sm:p-6 border-2 border-black"
                      >
                        <span className="text-base xs:text-lg sm:text-xl text-gray-700 font-medium">
                          {item.task}
                        </span>
                        <span className="font-black text-orange-600 text-lg sm:text-xl">
                          {item.percent}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl xs:text-2xl sm:text-3xl font-black mb-4 sm:mb-6 text-gray-900 tracking-tight">
                    Q2: Did it help you accomplish your goal?
                  </h4>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { response: "Yes", percent: "19%" },
                      { response: "Partially", percent: "42%" },
                      { response: "No", percent: "39%" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-4 sm:p-6 border-2 border-black"
                      >
                        <span className="text-base xs:text-lg sm:text-xl text-gray-700 font-medium">
                          {item.response}
                        </span>
                        <span className="font-black text-orange-600 text-lg sm:text-xl">
                          {item.percent}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-orange-50 p-4 sm:p-6 border-2 border-black">
                <h4 className="text-base xs:text-lg font-black text-gray-900 mb-3 sm:mb-4 tracking-wide uppercase">
                  Q3 Open-ended (sampled):
                </h4>
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-base xs:text-lg sm:text-xl text-gray-700 font-medium">
                    &ldquo;I couldn't tell the difference between GrammarlyGO
                    and normal Grammarly.&rdquo;
                  </p>
                  <p className="text-base xs:text-lg sm:text-xl text-gray-700 font-medium">
                    &ldquo;It was hard to find tone controls.&rdquo;
                  </p>
                  <p className="text-base xs:text-lg sm:text-xl text-gray-700 font-medium">
                    &ldquo;It rewrote too much. I just wanted small
                    edits.&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Insights & Findings */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black mb-16 sm:mb-20 text-center tracking-tighter text-gray-900">
              KEY INSIGHTS & FINDINGS
            </h2>

            {/* Insight Clusters */}
            <motion.div
              className="bg-white border-4 border-black shadow-brutal p-6 sm:p-8 lg:p-12 xl:p-16 mb-16 sm:mb-20 cursor-pointer"
              whileHover="hover"
              variants={cardHover}
              initial="rest"
            >
              <h3 className="text-2xl xs:text-3xl sm:text-4xl font-black mb-6 sm:mb-8 text-red-600 tracking-tight">
                Insight Clusters
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-2 border-black">
                  <thead>
                    <tr className="border-b-2 border-black">
                      <th className="text-left p-4 sm:p-6 lg:p-8 font-black text-gray-900 text-xs xs:text-sm sm:text-base">
                        Theme
                      </th>
                      <th className="text-left p-4 sm:p-6 lg:p-8 font-black text-gray-900 text-xs xs:text-sm sm:text-base">
                        Supporting Evidence
                      </th>
                      <th className="text-left p-4 sm:p-6 lg:p-8 font-black text-gray-900 text-xs xs:text-sm sm:text-base">
                        What It Means
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b-2 border-black">
                      <td className="p-4 sm:p-6 lg:p-8 font-bold text-sm xs:text-base">
                        Expectations mismatch
                      </td>
                      <td className="p-4 sm:p-6 lg:p-8 text-sm xs:text-base">
                        Interviews, Usability, Survey
                      </td>
                      <td className="p-4 sm:p-6 lg:p-8 text-sm xs:text-base">
                        Users think GrammarlyGO will act like ChatGPT, not a
                        rewrite tool
                      </td>
                    </tr>
                    <tr className="border-b-2 border-black">
                      <td className="p-4 sm:p-6 lg:p-8 font-bold text-sm xs:text-base">
                        Discoverability issues
                      </td>
                      <td className="p-4 sm:p-6 lg:p-8 text-sm xs:text-base">
                        Analytics, Usability Testing
                      </td>
                      <td className="p-4 sm:p-6 lg:p-8 text-sm xs:text-base">
                        Users can't easily find GrammarlyGO or don't know
                        they're using it
                      </td>
                    </tr>
                    <tr className="border-b-2 border-black">
                      <td className="p-4 sm:p-6 lg:p-8 font-bold text-sm xs:text-base">
                        Frustration with tone control & UI
                      </td>
                      <td className="p-4 sm:p-6 lg:p-8 text-sm xs:text-base">
                        Usability, Survey, Interviews
                      </td>
                      <td className="p-4 sm:p-6 lg:p-8 text-sm xs:text-base">
                        Tone options unclear; too many clicks to refine/edit
                        content
                      </td>
                    </tr>
                    <tr className="border-b-2 border-black">
                      <td className="p-4 sm:p-6 lg:p-8 font-bold text-sm xs:text-base">
                        Output felt excessive or impersonal
                      </td>
                      <td className="p-4 sm:p-6 lg:p-8 text-sm xs:text-base">
                        Interviews, Survey
                      </td>
                      <td className="p-4 sm:p-6 lg:p-8 text-sm xs:text-base">
                        Users want tweaks, not full rewrites; don't trust
                        &ldquo;robotic&rdquo; style
                      </td>
                    </tr>
                    <tr className="border-b-2 border-black">
                      <td className="p-4 sm:p-6 lg:p-8 font-bold text-sm xs:text-base">
                        Power users find workarounds
                      </td>
                      <td className="p-4 sm:p-6 lg:p-8 text-sm xs:text-base">
                        Interviews
                      </td>
                      <td className="p-4 sm:p-6 lg:p-8 text-sm xs:text-base">
                        Advanced users manually customize inputs, showing need
                        for presets or macros
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Playback Summary */}
            <motion.div
              className="bg-red-50 border-4 border-black shadow-brutal p-6 sm:p-8 lg:p-12 xl:p-16 mb-16 sm:mb-20 cursor-pointer"
              whileHover="hover"
              variants={cardHover}
              initial="rest"
            >
              <h3 className="text-2xl xs:text-3xl sm:text-4xl font-black mb-6 sm:mb-8 text-red-600 tracking-tight">
                Playback Summary
              </h3>
              <p className="text-lg xs:text-xl sm:text-2xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
                Our research uncovered a core issue: users expect GrammarlyGO to
                act like a conversation-based assistant (like ChatGPT), but
                instead find a rigid tool hidden behind complex UI.
              </p>
              <div className="text-gray-700">
                <strong className="text-base xs:text-lg sm:text-xl">
                  This leads to:
                </strong>
                <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                  <li className="text-base xs:text-lg sm:text-xl font-medium">
                    • Low trust in the tool's usefulness
                  </li>
                  <li className="text-base xs:text-lg sm:text-xl font-medium">
                    • Low visibility and discoverability
                  </li>
                  <li className="text-base xs:text-lg sm:text-xl font-medium">
                    • Output that feels over-edited and impersonal
                  </li>
                </ul>
                <p className="mt-6 sm:mt-8 text-base xs:text-lg sm:text-xl font-medium">
                  Even engaged users work around the friction manually — meaning
                  the product isn't supporting them efficiently either.
                </p>
              </div>
            </motion.div>

            {/* Prioritized Problem Areas */}
            <div>
              <h3 className="text-2xl xs:text-3xl sm:text-4xl font-black mb-16 sm:mb-20 text-center tracking-tight text-gray-900">
                PRIORITIZED PROBLEM AREAS
              </h3>
              <div className="space-y-8 sm:space-y-12">
                {[
                  {
                    title:
                      "Clarify Value Prop of GrammarlyGO vs. Classic Grammarly",
                    priority: "High",
                    rationale: "Prevents expectation mismatch and early churn",
                    impact: [
                      "Reduces churn after first use → protects LTV",
                      "Increases adoption of GrammarlyGO among paying users → drives usage-based retention",
                      "Improves feature ROI → ensures investment in AI is seen as valuable",
                      "Boosts conversion from free to Premium, if GrammarlyGO is perceived as a clear differentiator",
                    ],
                  },
                  {
                    title: "Improve Discoverability in Product UI",
                    priority: "High",
                    rationale:
                      "Makes usage frictionless and increases re-engagement",
                    impact: [
                      "Increases repeat usage → key LTV driver (returning users stay longer)",
                      "Reduces support costs → fewer users get lost or confused",
                      "Drives feature stickiness → improves engagement scores used in renewal models",
                      "Amplifies freemium funnel performance → more value in early days = more upgrades",
                    ],
                  },
                  {
                    title:
                      "Add Lightweight Editing Tools (Undo, Rephrase, Tone Presets)",
                    priority: "Medium",
                    rationale:
                      "Empowers users with control without added complexity",
                    impact: [
                      "Builds trust in AI output → increases usage frequency",
                      "Reduces task abandonment → improves session quality",
                      "Differentiates GrammarlyGO from competitors → improves retention in a crowded AI market",
                    ],
                  },
                  {
                    title: "Personalize Onboarding Based on User Goal",
                    priority: "Medium",
                    rationale: "Aligns tool suggestions to user intent",
                    impact: [
                      "Increases activation rate → users reach their 'aha' moment faster",
                      "Improves first-week retention → strongest predictor of long-term LTV",
                      "Reduces cognitive friction → boosts satisfaction (CSAT), especially among new users",
                    ],
                  },
                ].map((problem, index) => (
                  <motion.div
                    key={index}
                    className="bg-white border-4 border-black shadow-brutal p-6 sm:p-8 lg:p-12 xl:p-16 cursor-pointer"
                    whileHover="hover"
                    variants={cardHover}
                    initial="rest"
                  >
                    <div className="flex flex-col sm:flex-row items-start mb-6 sm:mb-8">
                      <span
                        className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-xs sm:text-sm font-black rounded-full mb-4 sm:mb-0 sm:mr-6 lg:mr-8 ${
                          problem.priority === "High"
                            ? "bg-red-500 text-white"
                            : "bg-yellow-500 text-white"
                        }`}
                      >
                        {problem.priority} Priority
                      </span>
                      <div className="flex-1">
                        <h4 className="text-xl xs:text-2xl sm:text-3xl font-black text-gray-900 mb-4 sm:mb-6 tracking-tight">
                          {problem.title}
                        </h4>
                        <p className="text-base xs:text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
                          <strong>Rationale:</strong> {problem.rationale}
                        </p>
                        <div>
                          <h5 className="font-black text-gray-900 mb-3 sm:mb-4 tracking-wide uppercase text-sm xs:text-base">
                            Bottom Line Impact:
                          </h5>
                          <ul className="space-y-2 sm:space-y-3">
                            {problem.impact.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="flex items-start text-base xs:text-lg sm:text-xl text-gray-600"
                              >
                                <span className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-500 rounded-full mt-2 sm:mt-4 mr-3 sm:mr-5 flex-shrink-0"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-6xl font-black mb-20 text-center tracking-tighter text-gray-900">
              PROPOSED SOLUTIONS
            </h2>

            <div className="space-y-20">
              {[
                {
                  number: "01",
                  title: "Contextual GrammarlyGO Activation",
                  description:
                    "Instead of onboarding screens, trigger GrammarlyGO at moments of struggle.",
                  implementation: [
                    "Use ML to detect hesitation, backspacing, or long idle time",
                    "Offer GrammarlyGO with contextual suggestions based on what the user is writing",
                  ],
                  benefits: [
                    "Activated when it's needed, not before. Respects user flow",
                    "Ties AI to solving an immediate pain point, which builds trust",
                  ],
                  metric:
                    "GrammarlyGO activation rate during 'writer's block' moments",
                  priority: "High Priority | High Impact",
                  color: "blue",
                },
                {
                  number: "02",
                  title: "Live Preview Panel with Transparent Output Logic",
                  description:
                    "Show GrammarlyGO's draft evolving in real time with a 'why we chose this' explanation.",
                  implementation: [
                    "Let users preview multiple tones or structures without rerunning prompts",
                    "Display output as a 'guided draft,' not a black-box result",
                  ],
                  benefits: [
                    "Increases transparency and control",
                    "Mimics how tools like GitHub Copilot and ChatGPT let users feel more involved",
                  ],
                  metric:
                    "Reduction in AI output abandonment, Increase in 'output edited and used' rate",
                  priority: "High Priority | High Impact",
                  color: "green",
                },
                {
                  number: "03",
                  title: "Mini AI Editor Mode",
                  description:
                    "Instead of just rewriting, offer an optional GrammarlyGO side editor.",
                  implementation: [
                    "Users can write a rough draft, toggle a GrammarlyGO editor view",
                    "See enhanced versions or paragraph-level suggestions",
                  ],
                  benefits: [
                    "Gives GrammarlyGO a defined space rather than injecting into main editor",
                    "Helps with long-form content where users want help structuring or revising",
                  ],
                  metric:
                    "Session length with AI Editor open, Feature satisfaction score",
                  priority: "Medium Priority | Medium Impact",
                  color: "purple",
                },
                {
                  number: "04",
                  title: "Start with AI Smart Templates",
                  description:
                    "Offer AI-first document templates for common use cases.",
                  implementation: [
                    "Email, outreach, follow-up, project summary templates",
                    "Prompted with a short form like: Who is this for? What's your message?",
                  ],
                  benefits: [
                    "Helps users generate from a blank page, the hardest moment",
                    "Tailors output based on input, which avoids generic results",
                  ],
                  metric:
                    "Conversion rate from template to completed doc, GrammarlyGO usage rate for new users",
                  priority: "Medium Priority | High Impact",
                  color: "orange",
                },
              ].map((solution, index) => (
                <motion.div
                  key={index}
                  className="bg-white border-4 border-black shadow-brutal p-16 cursor-pointer"
                  whileHover="hover"
                  variants={cardHover}
                  initial="rest"
                >
                  <div className="flex items-start mb-8">
                    <div
                      className={`text-7xl font-black text-${solution.color}-500 mr-10`}
                    >
                      {solution.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
                        {solution.title}
                      </h3>
                      <span
                        className={`px-8 py-4 bg-${solution.color}-500 text-white text-sm font-black rounded-full`}
                      >
                        {solution.priority}
                      </span>
                    </div>
                  </div>

                  <p className="text-2xl text-gray-700 mb-12 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
                    <div>
                      <h4 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">
                        Implementation:
                      </h4>
                      <ul className="space-y-5">
                        {solution.implementation.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start text-xl text-gray-600"
                          >
                            <span
                              className={`w-4 h-4 bg-${solution.color}-500 rounded-full mt-4 mr-5 flex-shrink-0`}
                            ></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">
                        Why it's better:
                      </h4>
                      <ul className="space-y-5">
                        {solution.benefits.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start text-xl text-gray-600"
                          >
                            <span
                              className={`w-4 h-4 bg-${solution.color}-500 rounded-full mt-4 mr-5 flex-shrink-0`}
                            ></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div
                    className={`bg-${solution.color}-50 p-8 border-2 border-black`}
                  >
                    <h4 className="font-black text-gray-900 mb-4 tracking-wide uppercase">
                      Metrics to track:
                    </h4>
                    <p className="text-xl text-gray-700">{solution.metric}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Solution Summary */}
            <motion.div
              className="mt-32 bg-white border-4 border-black shadow-brutal p-20 cursor-pointer"
              whileHover="hover"
              variants={cardHover}
              initial="rest"
            >
              <h3 className="text-4xl font-black mb-10 text-center tracking-tighter">
                REPRIORITIZED SOLUTIONS
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-2 border-black">
                  <thead>
                    <tr className="border-b-2 border-black">
                      <th className="text-left p-8 font-black text-gray-900 text-sm sm:text-base">
                        Opportunity
                      </th>
                      <th className="text-left p-8 font-black text-gray-900 text-sm sm:text-base">
                        Priority
                      </th>
                      <th className="text-left p-8 font-black text-gray-900 text-sm sm:text-base">
                        Impact
                      </th>
                      <th className="text-left p-8 font-black text-gray-900 text-sm sm:text-base">
                        Justification
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b-2 border-black">
                      <td className="p-8 font-bold">
                        Contextual GrammarlyGO Trigger
                      </td>
                      <td className="p-8">
                        <span className="px-6 py-3 bg-red-500 text-white text-sm font-black rounded-full">
                          High
                        </span>
                      </td>
                      <td className="p-8">
                        <span className="px-6 py-3 bg-red-500 text-white text-sm font-black rounded-full">
                          High
                        </span>
                      </td>
                      <td className="p-8">
                        Activated during real need. Minimal friction.
                      </td>
                    </tr>
                    <tr className="border-b-2 border-black">
                      <td className="p-8 font-bold">Live Preview Panel</td>
                      <td className="p-8">
                        <span className="px-6 py-3 bg-red-500 text-white text-sm font-black rounded-full">
                          High
                        </span>
                      </td>
                      <td className="p-8">
                        <span className="px-6 py-3 bg-red-500 text-white text-sm font-black rounded-full">
                          High
                        </span>
                      </td>
                      <td className="p-8">
                        Builds trust, improves perceived quality.
                      </td>
                    </tr>
                    <tr className="border-b-2 border-black">
                      <td className="p-8 font-bold">Mini AI Editor</td>
                      <td className="p-8">
                        <span className="px-6 py-3 bg-yellow-500 text-white text-sm font-black rounded-full">
                          Medium
                        </span>
                      </td>
                      <td className="p-8">
                        <span className="px-6 py-3 bg-yellow-500 text-white text-sm font-black rounded-full">
                          Medium
                        </span>
                      </td>
                      <td className="p-8">
                        Encourages use in complex workflows.
                      </td>
                    </tr>
                    <tr className="border-b-2 border-black">
                      <td className="p-8 font-bold">AI Smart Templates</td>
                      <td className="p-8">
                        <span className="px-6 py-3 bg-yellow-500 text-white text-sm font-black rounded-full">
                          Medium
                        </span>
                      </td>
                      <td className="p-8">
                        <span className="px-6 py-3 bg-red-500 text-white text-sm font-black rounded-full">
                          High
                        </span>
                      </td>
                      <td className="p-8">
                        Solves blank page problem. First-week adoption driver.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black mb-16 sm:mb-20 tracking-tighter text-gray-900">
              EXPECTED OUTCOMES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
              {[
                {
                  value: "25%",
                  label: "Retention Improvement",
                  sublabel: "within 6 months",
                },
                {
                  value: "40%",
                  label: "AI Usage Increase",
                  sublabel: "per active user",
                },
                {
                  value: "60%",
                  label: "User Confusion Reduction",
                  sublabel: "clearer value prop",
                },
              ].map((outcome, index) => (
                <motion.div
                  key={index}
                  className="bg-white border-4 border-black shadow-brutal p-8 sm:p-10 lg:p-12 cursor-pointer min-h-[250px] xs:min-h-[300px] flex flex-col justify-center"
                  whileHover="hover"
                  variants={cardHover}
                  initial="rest"
                >
                  <div className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    {outcome.value}
                  </div>
                  <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-2 sm:mb-3 tracking-tight leading-tight">
                    {outcome.label}
                  </div>
                  <div className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-500 leading-tight">
                    {outcome.sublabel}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-green-50 border-4 border-black shadow-brutal p-8 sm:p-12 lg:p-16 cursor-pointer"
              whileHover="hover"
              variants={cardHover}
              initial="rest"
            >
              <h3 className="text-2xl xs:text-3xl sm:text-4xl font-black mb-4 sm:mb-6 text-green-600 tracking-tight">
                Business Impact
              </h3>
              <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
                At scale, if we can reduce the 60% disengagement rate by even
                half, Grammarly could recover{" "}
                <span className="font-black text-green-600">
                  millions in potential long-term value
                </span>{" "}
                while building a more competitive AI product that users actually
                want to use.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
          >
            <motion.div
              className="bg-white border-4 border-black shadow-brutal p-8 sm:p-12 lg:p-20 cursor-pointer"
              whileHover="hover"
              variants={cardHover}
              initial="rest"
            >
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 sm:mb-10 tracking-tighter">
                READY TO SEE MORE
                <span className="block text-orange-500 mt-2 sm:mt-4">
                  RESEARCH WORK?
                </span>
              </h2>
              <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-12 sm:mb-16 leading-relaxed font-medium">
                Explore my other UX research projects and strategic
                problem-solving approaches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-12 justify-center">
                <Link href="/ux-ui">
                  <motion.button
                    className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 lg:px-12 xl:px-20 py-4 sm:py-6 lg:py-8 xl:py-10 font-black tracking-widest transition-all duration-300 flex items-center justify-center border-4 border-black shadow-brutal text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl"
                    whileHover="hover"
                    variants={buttonHover}
                    initial="rest"
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>VIEW UX/UI PORTFOLIO</span>
                    <FaArrowRight className="ml-3 sm:ml-4 lg:ml-6 xl:ml-10 text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl" />
                  </motion.button>
                </Link>
                <Link href="/dev">
                  <motion.button
                    className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 lg:px-12 xl:px-20 py-4 sm:py-6 lg:py-8 xl:py-10 font-black tracking-widest transition-all duration-300 flex items-center justify-center border-4 border-black shadow-brutal text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl"
                    whileHover="hover"
                    variants={buttonHover}
                    initial="rest"
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>VIEW DEVELOPMENT</span>
                    <FaArrowRight className="ml-3 sm:ml-4 lg:ml-6 xl:ml-10 text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
