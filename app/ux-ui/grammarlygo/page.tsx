"use client";

import React from "react";
import { motion } from "framer-motion";
// Link removed - using <a> tags for page transition system

export default function GrammarlyGOCaseStudy() {

  const spring = { type: "spring", stiffness: 220, damping: 24 } as const;

  return (
    <div
      className="min-h-screen text-white"
      style={{ backgroundColor: "#171717" }}
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
          href="/about"
          className="px-4 py-2 border border-white/30 text-white hover:text-gray-300 hover:border-white/50 transition-all duration-300 font-light text-sm tracking-wider rounded-lg"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Go to about page"
        >
          ABOUT
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
      </motion.div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            {/* Case Study Badge */}
            <motion.div
              className="inline-block px-6 py-2 border border-white/20 font-bold text-sm tracking-widest uppercase"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              UX Research Case Study
            </motion.div>

            <div className="space-y-8">
              <h1
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                IMPROVING <br />
                <span style={{ color: "#CD535A" }}>GRAMMARLY GO</span> <br />
                RETENTION
              </h1>

              <p
                className="text-xl text-gray-300 max-w-4xl leading-relaxed"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Turning One-Time AI Users into Loyal Daily Writers
              </p>
            </div>

            {/* Project Image */}
            <div className="pt-8 border-t border-white/20">
              <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/Grammarly-Go.png"
                  alt="Grammarly Go Interface"
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-8 border-t border-white/20">
              {[
                { metric: "30%", label: "faster tasks" },
                { metric: "85%", label: "satisfaction" },
                { metric: "70%", label: "engagement" },
                { metric: "+25%", label: "usage" },
              ].map((item, index) => (
                <motion.div
                    key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div
                    className="text-4xl md:text-5xl font-bold mb-2"
                    style={{
                      color: "#CD535A",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {item.metric}
            </div>
                  <div
                    className="text-sm text-gray-300 uppercase tracking-wider"
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

            {/* Background Context */}
      <section className="py-20 px-6 border-t border-white/20">
        <div className="max-w-6xl mx-auto">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              BACKGROUND CONTEXT
            </h2>

            <div className="space-y-8">
              <p
                className="text-lg text-gray-300 leading-relaxed max-w-4xl"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                GrammarlyGO is Grammarly&apos;s embedded AI assistant designed to
                speed up content creation and help users write more confidently
                across platforms. It can draft email replies, rewrite sentences
                for tone or clarity, or brainstorm content ideas using preset
                prompts or custom instructions.
              </p>

              <p
                className="text-lg text-gray-300 leading-relaxed max-w-4xl"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Despite high brand trust and broad distribution, GrammarlyGO
                suffers from low re-engagement:
              </p>

              <ul className="space-y-4 text-lg text-gray-300 max-w-4xl">
                <li className="flex items-start">
                  <span
                    className="w-2 h-2 mt-3 mr-4 flex-shrink-0"
                    style={{ backgroundColor: "#CD535A" }}
                  ></span>
                  <span style={{ fontFamily: "Montserrat, sans-serif" }}>
                  60% of users try GrammarlyGO once but do not return in the
                  next 7 days
                  </span>
                </li>
                <li className="flex items-start">
                  <span
                    className="w-2 h-2 mt-3 mr-4 flex-shrink-0"
                    style={{ backgroundColor: "#CD535A" }}
                  ></span>
                  <span style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Premium users show only slightly higher engagement than free
                  users
                  </span>
                </li>
                <li className="flex items-start">
                  <span
                    className="w-2 h-2 mt-3 mr-4 flex-shrink-0"
                    style={{ backgroundColor: "#CD535A" }}
                  ></span>
                  <span style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Feedback suggests confusion about what the AI assistant does
                  differently from standard Grammarly corrections
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h3
                className="text-2xl md:text-3xl font-bold mb-6 text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Problem Framing
              </h3>
              <div className="space-y-6 text-lg text-gray-300 max-w-4xl">
                <p style={{ fontFamily: "Montserrat, sans-serif" }}>
                GrammarlyGO is solving a time problem, as well as a quality
                problem. For people that type a lot (emails, docs, etc),
                  GrammarlyGO is an embedded assistant that takes care of
                  nuanced tasks, or revises completed ones.
              </p>
                <p style={{ fontFamily: "Montserrat, sans-serif" }}>
                60% of users disengaging after the first use means that the
                features had too much friction to be worth using, or the
                  features were simply never too useful in the first place. A
                  60% disengagement rate means lost money through CAC and LTV.
              </p>
              </div>
            </div>
            </motion.div>
        </div>
      </section>

            {/* Business Impact Analysis */}
      <section className="py-20 px-6 border-t border-white/20">
        <div className="max-w-6xl mx-auto">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              BUSINESS IMPACT ANALYSIS
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <h3
                  className="text-2xl md:text-3xl font-bold text-white"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                    Customer Acquisition Cost (CAC)
                </h3>
                <div className="space-y-4 text-lg text-gray-300">
                  <p style={{ fontFamily: "Montserrat, sans-serif" }}>
                    Let&apos;s assume Grammarly spends:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li style={{ fontFamily: "Montserrat, sans-serif" }}>
                      • $2,000,000 on ads (YouTube, Google, Instagram)
                    </li>
                    <li style={{ fontFamily: "Montserrat, sans-serif" }}>
                      • $500,000 on referral programs, email campaigns,
                      partnerships
                    </li>
                    <li style={{ fontFamily: "Montserrat, sans-serif" }}>
                      • $500,000 on internal growth team salaries and tools
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-white/10">
                    <p style={{ fontFamily: "Montserrat, sans-serif" }}>
                      <strong>Total acquisition cost:</strong> $3,000,000
                  </p>
                    <p style={{ fontFamily: "Montserrat, sans-serif" }}>
                      <strong>New Premium users acquired:</strong> 250,000
                  </p>
                    <p style={{ fontFamily: "Montserrat, sans-serif" }}>
                      <strong>CAC =</strong> $3,000,000 / 250,000 = $12 per user
                  </p>
                  </div>
                </div>
                </div>

              <div className="space-y-8">
                <h3
                  className="text-2xl md:text-3xl font-bold text-white"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                    Lifetime Value (LTV)
                </h3>
                <div className="space-y-4 text-lg text-gray-300">
                  <ul className="space-y-2 ml-4">
                    <li style={{ fontFamily: "Montserrat, sans-serif" }}>
                      • Grammarly Premium subscription: $12/month = $144/year
                    </li>
                    <li style={{ fontFamily: "Montserrat, sans-serif" }}>
                      • Average Premium user stays subscribed for 1.5 years
                    </li>
                    <li style={{ fontFamily: "Montserrat, sans-serif" }}>
                      • Gross revenue per user: $216
                    </li>
                    <li style={{ fontFamily: "Montserrat, sans-serif" }}>
                      • Assuming 80% profit margin after operational costs
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-white/10">
                    <p style={{ fontFamily: "Montserrat, sans-serif" }}>
                      <strong>LTV =</strong> $216 × 0.8 = $172.80 per user
                  </p>
                  </div>
                </div>
                </div>
              </div>

            <div className="pt-8 border-t border-white/10">
              <h3
                className="text-2xl md:text-3xl font-bold mb-6 text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Impact of Disengagement
              </h3>
              <div className="space-y-6 text-lg text-gray-300 max-w-4xl">
                <p style={{ fontFamily: "Montserrat, sans-serif" }}>
                If a user tries GrammarlyGO once but doesn&apos;t engage:
              </p>
                <ul className="space-y-2 ml-4">
                  <li style={{ fontFamily: "Montserrat, sans-serif" }}>
                    • They&apos;re less likely to renew
                  </li>
                  <li style={{ fontFamily: "Montserrat, sans-serif" }}>
                    • Their average lifetime drops to 1 year
                  </li>
                  <li style={{ fontFamily: "Montserrat, sans-serif" }}>
                    • New revenue = $144 × 0.8 = $115.20 LTV
                  </li>
              </ul>
                <div className="pt-6 border-t border-white/10">
                  <p style={{ fontFamily: "Montserrat, sans-serif" }}>
                    <strong>Result:</strong> A disengaged user generates 36%
                    less profit. At scale, if 100,000 users disengage after
                    first use, Grammarly loses over $5.7 million in potential
                    long-term value.
                  </p>
                    </div>
                </div>
              </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-white/10">
              {[
                {
                  value: "60%",
                  label: "Users disengage after first use",
                  color: "#CD535A",
                },
                {
                  value: "$5.7M",
                  label: "Potential value at stake",
                  color: "#CD535A",
                },
                {
                  value: "25%",
                  label: "Retention improvement goal",
                  color: "#CD535A",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div
                    className="text-5xl lg:text-6xl font-bold mb-4"
                    style={{
                      color: stat.color,
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xl text-gray-300 font-bold leading-tight"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-20 px-6 border-t border-white/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              RESEARCH METHODOLOGY
            </h2>

            <div className="space-y-8">
              <h3
                className="text-3xl md:text-4xl font-bold text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Research Objective
                </h3>
              <p
                className="text-xl text-gray-300 leading-relaxed max-w-4xl"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Understand why new users disengage from GrammarlyGO after first
                use, what friction exists in the user experience, and what
                changes would increase return usage.
              </p>
            </div>

            <div className="space-y-8">
              <h3
                className="text-3xl md:text-4xl font-bold text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Research Methods Overview
                </h3>
              <div className="space-y-6">
                {[
                  {
                    method: "Product Analytics Review",
                    type: "Quantitative",
                    goal: "Understand user behavior at scale — identify drop-offs and usage patterns",
                  },
                  {
                    method: "Unmoderated Usability Testing",
                    type: "Qualitative",
                    goal: "Observe interaction friction points in key use cases",
                  },
                  {
                    method: "Semi-Structured User Interviews",
                    type: "Qualitative",
                    goal: "Explore expectations, mental models, motivations, and trust",
                  },
                  {
                    method: "In-Product Intercept Surveys",
                    type: "Quantitative",
                    goal: "Capture user intent and satisfaction at the point of usage",
                    },
                  ].map((item, index) => (
                  <motion.div
                      key={index}
                    className="py-6 border-b border-white/10 last:border-b-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-1">
                        <h4
                          className="text-xl md:text-2xl font-bold text-white mb-2"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          {item.method}
                        </h4>
                        <p
                          className="text-lg text-gray-300"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          {item.goal}
                        </p>
                      </div>
                      <div
                        className="px-4 py-2 border border-white/20 text-sm font-bold uppercase"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {item.type}
                      </div>
                    </div>
                  </motion.div>
                  ))}
                </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h3
                className="text-3xl md:text-4xl font-bold mb-8 text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Participant Segments
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    segment: "Disengaged Users",
                    percent: "60%",
                    description: "Tried GrammarlyGO once, haven&apos;t used since",
                  },
                  {
                    segment: "Power Users",
                    percent: "20%",
                    description: "Daily GrammarlyGO users, >3 months",
                  },
                  {
                    segment: "Churned Users",
                    percent: "20%",
                    description:
                      "Canceled Grammarly Premium or switched to competitor",
                  },
                ].map((segment, index) => (
                  <motion.div
                    key={index}
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center">
                      <h4
                        className="text-xl font-bold text-white"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {segment.segment}
                    </h4>
                      <span
                        className="text-2xl font-bold"
                        style={{
                          color: "#CD535A",
                          fontFamily: "Montserrat, sans-serif",
                        }}
                      >
                        {segment.percent}
                        </span>
                      </div>
                    <p
                      className="text-lg text-gray-300"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {segment.description}
                    </p>
            </motion.div>
                ))}
                    </div>
                  </div>
          </motion.div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-20 px-6 border-t border-white/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              KEY FINDINGS
            </h2>

            <div className="space-y-12">
              <div className="space-y-6">
                <h3
                  className="text-2xl md:text-3xl font-bold text-white"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                1. Product Analytics Review (Amplitude)
              </h3>
                <div className="space-y-6">
                  <h4
                    className="text-xl md:text-2xl font-bold text-white"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                  Funnel: GrammarlyGO Usage – First 14 Days
                </h4>
                  <div className="space-y-4">
                  {[
                    {
                      step: &apos;Clicked &quot;GrammarlyGO&quot; button&apos;,
                      rate: "100%",
                        dropoff: null,
                    },
                    {
                      step: "Select a writing mode (rewrite, shorten, etc.)",
                      rate: "58%",
                        dropoff: "42%",
                    },
                    {
                      step: "Generated output",
                      rate: "41%",
                        dropoff: "17%",
                    },
                    {
                      step: "Applied output to document",
                      rate: "24%",
                        dropoff: "17%",
                    },
                    {
                      step: "Returned to use GrammarlyGO again (7-day window)",
                      rate: "12%",
                        dropoff: "76%",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                        className="flex justify-between items-center py-4 border-b border-white/10 last:border-b-0"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                          <div className="flex-1">
                          <p
                            className="text-lg text-gray-300"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                          >
                              {item.step}
                          </p>
                          </div>
                        <div className="flex items-center gap-4">
                          <span
                            className="text-2xl font-bold text-white"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                          >
                              {item.rate}
                            </span>
                          {item.dropoff && (
                            <span
                              className="text-lg font-bold"
                              style={{
                                color: "#CD535A",
                                fontFamily: "Montserrat, sans-serif",
                              }}
                            >
                              ↓{item.dropoff}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                        </div>
                  <div className="pt-6 border-t border-white/10">
                    <p
                      className="text-lg text-gray-300"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      <strong>Critical Insight:</strong> 88% of users abandon
                      GrammarlyGO after their first use. This represents a
                      massive opportunity cost - users are interested enough to
                      try it, but the experience fails to deliver enough value
                      to drive retention.
                                </p>
                              </div>
                          </div>
                        </div>

              <div className="pt-8 border-t border-white/10 space-y-6">
                <h3
                  className="text-2xl md:text-3xl font-bold text-white"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  2. User Interviews (10 participants)
              </h3>
                <div className="space-y-6">
                  <h4
                    className="text-xl md:text-2xl font-bold text-white"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Key Findings
                  </h4>
                  <ul className="space-y-4 text-lg text-gray-300">
                    <li className="flex items-start">
                      <span
                        className="w-2 h-2 mt-3 mr-4 flex-shrink-0"
                        style={{ backgroundColor: "#CD535A" }}
                      ></span>
                      <span style={{ fontFamily: "Montserrat, sans-serif" }}>
                        Expectation mismatch: 7/10 thought GrammarlyGO was a
                      chatbot experience
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className="w-2 h-2 mt-3 mr-4 flex-shrink-0"
                        style={{ backgroundColor: "#CD535A" }}
                      ></span>
                      <span style={{ fontFamily: "Montserrat, sans-serif" }}>
                        Usefulness gap: 5/10 didn&apos;t feel the output added much
                      value beyond their own edits
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className="w-2 h-2 mt-3 mr-4 flex-shrink-0"
                        style={{ backgroundColor: "#CD535A" }}
                      ></span>
                      <span style={{ fontFamily: "Montserrat, sans-serif" }}>
                        Frustration with UI: 6/10 found the controls
                      non-intuitive
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 space-y-6">
                <h3
                  className="text-2xl md:text-3xl font-bold text-white"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  3. Usability Testing (15 participants)
              </h3>
                <div className="space-y-6">
                  <h4
                    className="text-xl md:text-2xl font-bold text-white"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Key Observations
                  </h4>
                  <ul className="space-y-4 text-lg text-gray-300">
                    <li className="flex items-start">
                      <span
                        className="w-2 h-2 mt-3 mr-4 flex-shrink-0"
                        style={{ backgroundColor: "#CD535A" }}
                      ></span>
                      <span style={{ fontFamily: "Montserrat, sans-serif" }}>
                        9/15 didn&apos;t notice the GrammarlyGO icon was different
                        from classic Grammarly
                        </span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className="w-2 h-2 mt-3 mr-4 flex-shrink-0"
                        style={{ backgroundColor: "#CD535A" }}
                      ></span>
                      <span style={{ fontFamily: "Montserrat, sans-serif" }}>
                        7/15 clicked the standard Grammarly "correct" button
                        instead of the AI rewrite tool
                        </span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className="w-2 h-2 mt-3 mr-4 flex-shrink-0"
                        style={{ backgroundColor: "#CD535A" }}
                      ></span>
                      <span style={{ fontFamily: "Montserrat, sans-serif" }}>
                        5/15 expected a full-chat interface like ChatGPT
                      </span>
                    </li>
                  </ul>
                      </div>
                </div>
              </div>
          </motion.div>
        </div>
      </section>

      {/* Insight Clusters & Synthesis */}
      <section className="py-20 px-6 border-t border-white/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              INSIGHT CLUSTERS & SYNTHESIS
            </h2>

            <div className="space-y-8">
              <h3
                className="text-2xl md:text-3xl font-bold text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Insight Clusters
              </h3>
              <div className="space-y-6">
                {[
                  {
                    theme: "Expectations mismatch",
                    evidence: "Interviews, Usability, Survey",
                    meaning:
                      "Users think GrammarlyGO will act like ChatGPT, not a rewrite tool",
                  },
                  {
                    theme: "Discoverability issues",
                    evidence: "Analytics, Usability Testing",
                    meaning:
                      &quot;Users can&apos;t easily find GrammarlyGO or don&apos;t know they&apos;re using it&quot;,
                  },
                  {
                    theme: "Frustration with tone control & UI",
                    evidence: "Usability, Survey, Interviews",
                    meaning:
                      "Tone options unclear; too many clicks to refine/edit content",
                  },
                  {
                    theme: "Output felt excessive or impersonal",
                    evidence: "Interviews, Survey",
                    meaning:
                      &quot;Users want tweaks, not full rewrites; don&apos;t trust &apos;robotic&apos; style&quot;,
                  },
                  {
                    theme: "Power users find workarounds",
                    evidence: "Interviews",
                    meaning:
                      "Advanced users manually customize inputs, showing need for presets or macros",
                  },
                ].map((insight, index) => (
                  <motion.div
                    key={index}
                    className="py-6 border-b border-white/10 last:border-b-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4
                          className="text-lg font-bold text-white mb-2"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                        Theme
                        </h4>
                        <p
                          className="text-gray-300"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          {insight.theme}
                        </p>
                      </div>
                      <div>
                        <h4
                          className="text-lg font-bold text-white mb-2"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                        Supporting Evidence
                        </h4>
                        <p
                          className="text-gray-300"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          {insight.evidence}
                        </p>
                      </div>
                      <div>
                        <h4
                          className="text-lg font-bold text-white mb-2"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                        What It Means
                        </h4>
                        <p
                          className="text-gray-300"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          {insight.meaning}
                        </p>
                      </div>
              </div>
            </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 space-y-8">
              <h3
                className="text-2xl md:text-3xl font-bold text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Playback Summary
              </h3>
              <div className="space-y-6">
                <p
                  className="text-xl text-gray-300 leading-relaxed"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Our research uncovered a core issue: users expect GrammarlyGO
                  to act like a conversation-based assistant (like ChatGPT), but
                instead find a rigid tool hidden behind complex UI.
              </p>
                <div className="space-y-4">
                  <p
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                  This leads to:
                  </p>
                  <ul className="space-y-3 text-lg text-gray-300 ml-4">
                    <li className="flex items-start">
                      <span
                        className="w-2 h-2 mt-3 mr-3 flex-shrink-0"
                        style={{ backgroundColor: "#CD535A" }}
                      ></span>
                      <span style={{ fontFamily: "Montserrat, sans-serif" }}>
                        Low trust in the tool&apos;s usefulness
                      </span>
                  </li>
                    <li className="flex items-start">
                      <span
                        className="w-2 h-2 mt-3 mr-3 flex-shrink-0"
                        style={{ backgroundColor: "#CD535A" }}
                      ></span>
                      <span style={{ fontFamily: "Montserrat, sans-serif" }}>
                        Low visibility and discoverability
                      </span>
                  </li>
                    <li className="flex items-start">
                      <span
                        className="w-2 h-2 mt-3 mr-3 flex-shrink-0"
                        style={{ backgroundColor: "#CD535A" }}
                      ></span>
                      <span style={{ fontFamily: "Montserrat, sans-serif" }}>
                        Output that feels over-edited and impersonal
                      </span>
                  </li>
                </ul>
                </div>
                <p
                  className="text-lg text-gray-300 leading-relaxed"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Even engaged users work around the friction manually — meaning
                  the product isn&apos;t supporting them efficiently either.
                </p>
              </div>
              </div>
            </motion.div>
        </div>
      </section>

            {/* Prioritized Problem Areas */}
      <section className="py-20 px-6 border-t border-white/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
                PRIORITIZED PROBLEM AREAS
            </h2>

            <div className="space-y-12">
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
                      &quot;Increases activation rate → users reach their &apos;aha&apos; moment faster&quot;,
                      "Improves first-week retention → strongest predictor of long-term LTV",
                      "Reduces cognitive friction → boosts satisfaction (CSAT), especially among new users",
                    ],
                  },
                ].map((problem, index) => (
                  <motion.div
                    key={index}
                  className="space-y-6 py-8 border-b border-white/10 last:border-b-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <span
                      className={`px-4 py-2 text-sm font-bold uppercase ${
                          problem.priority === "High"
                          ? "border border-red-500 text-red-500"
                          : "border border-yellow-500 text-yellow-500"
                        }`}
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {problem.priority} Priority
                      </span>
                    <div className="flex-1 space-y-4">
                      <h3
                        className="text-xl md:text-2xl font-bold text-white"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                          {problem.title}
                      </h3>
                      <p
                        className="text-lg text-gray-300"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                          <strong>Rationale:</strong> {problem.rationale}
                        </p>
                        <div>
                        <h4
                          className="text-lg font-bold text-white mb-3"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                            Bottom Line Impact:
                        </h4>
                        <ul className="space-y-2">
                            {problem.impact.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                              className="flex items-start text-gray-300"
                              style={{ fontFamily: "Montserrat, sans-serif" }}
                              >
                              <span
                                className="w-2 h-2 mt-3 mr-3 flex-shrink-0"
                                style={{ backgroundColor: "#CD535A" }}
                              ></span>
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
          </motion.div>
        </div>
      </section>

      {/* Proposed Solutions */}
      <section className="py-20 px-6 border-t border-white/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              PROPOSED SOLUTIONS
            </h2>

            <div className="space-y-12">
              {[
                {
                  title: "Contextual GrammarlyGO Activation",
                  description:
                    "Instead of onboarding screens, trigger GrammarlyGO at moments of struggle.",
                  implementation: [
                    "Use ML to detect hesitation, backspacing, or long idle time",
                    "Offer GrammarlyGO with contextual suggestions based on what the user is writing",
                  ],
                  benefits: [
                    &quot;Activated when it&apos;s needed, not before. Respects user flow&quot;,
                    "Ties AI to solving an immediate pain point, which builds trust",
                  ],
                  priority: "High Priority | High Impact",
                  metric:
                    &quot;GrammarlyGO activation rate during &apos;writer&apos;s block&apos; moments&quot;,
                },
                {
                  title: "Live Preview Panel with Transparent Output Logic",
                  description:
                    &quot;Show GrammarlyGO&apos;s draft evolving in real time with a &apos;why we chose this&apos; explanation.&quot;,
                  implementation: [
                    "Let users preview multiple tones or structures without rerunning prompts",
                    &quot;Display output as a &apos;guided draft,&apos; not a black-box result&quot;,
                  ],
                  benefits: [
                    "Increases transparency and control",
                    "Mimics how tools like GitHub Copilot and ChatGPT let users feel more involved",
                  ],
                  priority: "High Priority | High Impact",
                  metrics: [
                    "Reduction in AI output abandonment",
                    &quot;Increase in &apos;output edited and used&apos; rate&quot;,
                  ],
                },
                {
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
                  priority: "Medium Priority | Medium Impact",
                  metrics: [
                    "Session length with AI Editor open",
                    "Feature satisfaction score",
                  ],
                },
                {
                  title: "Start with AI Smart Templates",
                  description:
                    "Offer AI-first document templates for common use cases.",
                  implementation: [
                    "Email, outreach, follow-up, project summary templates",
                    &quot;Prompted with a short form like: Who is this for? What&apos;s your message?&quot;,
                  ],
                  benefits: [
                    "Helps users generate from a blank page, the hardest moment",
                    "Tailors output based on input, which avoids generic results",
                  ],
                  priority: "Medium Priority | High Impact",
                  metrics: [
                    "Conversion rate from template to completed doc",
                    "GrammarlyGO usage rate for new users",
                  ],
                },
              ].map((solution, index) => (
                <motion.div
                  key={index}
                  className="space-y-8 py-8 border-b border-white/10 last:border-b-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div
                      className="text-6xl font-bold"
                      style={{
                        color: "#CD535A",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1 space-y-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <h3
                          className="text-2xl md:text-3xl font-bold text-white"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                        {solution.title}
                      </h3>
                      <span
                          className="px-4 py-2 border border-white/20 text-sm font-bold uppercase"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {solution.priority}
                      </span>
                  </div>

                      <p
                        className="text-lg text-gray-300 leading-relaxed"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                    {solution.description}
                  </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                          <h4
                            className="text-lg font-bold text-white mb-4"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                          >
                        Implementation:
                      </h4>
                          <ul className="space-y-2 text-gray-300">
                        {solution.implementation.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                                className="flex items-start"
                                style={{ fontFamily: "Montserrat, sans-serif" }}
                          >
                            <span
                                  className="w-2 h-2 mt-2 mr-3 flex-shrink-0"
                                  style={{ backgroundColor: "#CD535A" }}
                            ></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                          <h4
                            className="text-lg font-bold text-white mb-4"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                          >
                        Why it&apos;s better:
                      </h4>
                          <ul className="space-y-2 text-gray-300">
                        {solution.benefits.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                                className="flex items-start"
                                style={{ fontFamily: "Montserrat, sans-serif" }}
                          >
                            <span
                                  className="w-2 h-2 mt-2 mr-3 flex-shrink-0"
                                  style={{ backgroundColor: "#CD535A" }}
                            ></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                        <div>
                          <h4
                            className="text-lg font-bold text-white mb-4"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                          >
                            Metrics to Track:
                    </h4>
                          {solution.metric ? (
                            <p
                              className="text-gray-300"
                              style={{ fontFamily: "Montserrat, sans-serif" }}
                            >
                              {solution.metric}
                            </p>
                          ) : solution.metrics ? (
                            <ul className="space-y-2 text-gray-300">
                              {solution.metrics.map((metric, metricIndex) => (
                                <li
                                  key={metricIndex}
                                  className="flex items-start"
                                  style={{
                                    fontFamily: "Montserrat, sans-serif",
                                  }}
                                >
                                  <span
                                    className="w-2 h-2 mt-2 mr-3 flex-shrink-0"
                                    style={{ backgroundColor: "#CD535A" }}
                                  ></span>
                                  {metric}
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10">
              <h3
                className="text-2xl md:text-3xl font-bold mb-8 text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Reprioritized Solutions Summary
              </h3>
              <div className="space-y-4">
                {[
                  {
                    opportunity: "Contextual GrammarlyGO Trigger",
                    priority: "High",
                    impact: "High",
                    justification:
                      "Activated during real need. Minimal friction.",
                  },
                  {
                    opportunity: "Live Preview Panel",
                    priority: "High",
                    impact: "High",
                    justification: "Builds trust, improves perceived quality.",
                  },
                  {
                    opportunity: "Mini AI Editor",
                    priority: "Medium",
                    impact: "Medium",
                    justification: "Encourages use in complex workflows.",
                  },
                  {
                    opportunity: "AI Smart Templates",
                    priority: "Medium",
                    impact: "High",
                    justification:
                      "Solves blank page problem. First-week adoption driver.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4 border-b border-white/10 last:border-b-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div>
                      <h4
                        className="text-lg font-bold text-white mb-2"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Opportunity
                      </h4>
                      <p
                        className="text-gray-300"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {item.opportunity}
                      </p>
                    </div>
                    <div>
                      <h4
                        className="text-lg font-bold text-white mb-2"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Priority
                      </h4>
                      <span
                        className={`px-3 py-1 text-sm font-bold ${
                          item.priority === "High"
                            ? "border border-red-500 text-red-500"
                            : "border border-yellow-500 text-yellow-500"
                        }`}
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {item.priority}
                      </span>
                    </div>
                    <div>
                      <h4
                        className="text-lg font-bold text-white mb-2"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Impact
                      </h4>
                      <span
                        className={`px-3 py-1 text-sm font-bold ${
                          item.impact === "High"
                            ? "border border-red-500 text-red-500"
                            : "border border-yellow-500 text-yellow-500"
                        }`}
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {item.impact}
                        </span>
                    </div>
                    <div>
                      <h4
                        className="text-lg font-bold text-white mb-2"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Justification
                      </h4>
                      <p
                        className="text-gray-300"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {item.justification}
                      </p>
              </div>
            </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-20 px-6 border-t border-white/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              EXPECTED OUTCOMES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
                  className="text-center space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div
                    className="text-5xl md:text-6xl font-bold"
                    style={{
                      color: "#CD535A",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {outcome.value}
                  </div>
                  <div
                    className="text-xl md:text-2xl font-bold text-white"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {outcome.label}
                  </div>
                  <div
                    className="text-base md:text-lg text-gray-400"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {outcome.sublabel}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10">
              <h3
                className="text-2xl md:text-3xl font-bold mb-6 text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Business Impact
              </h3>
              <p
                className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                At scale, if we can reduce the 60% disengagement rate by even
                half, Grammarly could recover{" "}
                <span className="font-bold" style={{ color: "#CD535A" }}>
                  millions in potential long-term value
                </span>{" "}
                while building a more competitive AI product that users actually
                want to use.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="py-20 px-6 border-t border-white/20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Explore more of my work and see how design translates into
              functional applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="/dev?tab=ux">
                <motion.div
                  className="px-8 py-4 border border-white/20 hover:bg-white/10 transition-colors duration-200 font-bold text-white"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                  View UX Projects
                </motion.div>
              </a>

              <a href="/dev?tab=development">
                <motion.div
                  className="px-8 py-4 border border-white/20 hover:bg-white/10 transition-colors duration-200 font-bold text-white"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                  View Development Projects
                </motion.div>
              </a>
              </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
