"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import Link from "next/link";

export default function GrammarlyGOCaseStudy() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                UX Research Case Study
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Improving <span className="text-blue-500">GrammarlyGO</span>{" "}
                Retention
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Turning one-time AI users into loyal daily writers through
                strategic UX research and product optimization
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-500 mb-2">60%</div>
                <div className="text-gray-600">
                  Users disengage after first use
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-green-500 mb-2">
                  25%
                </div>
                <div className="text-gray-600">Retention improvement goal</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-purple-500 mb-2">
                  $5.7M
                </div>
                <div className="text-gray-600">Potential value at stake</div>
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button
                onClick={() => scrollToSection("context")}
                className="flex items-center px-6 py-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors"
              >
                <FaSearch className="mr-2" />
                Context
              </button>
              <button
                onClick={() => scrollToSection("problem")}
                className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              >
                <FaSearch className="mr-2" />
                Problem
              </button>
              <button
                onClick={() => scrollToSection("research")}
                className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
              >
                <FaChartLine className="mr-2" />
                Research
              </button>
              <button
                onClick={() => scrollToSection("insights")}
                className="flex items-center px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
              >
                <FaLightbulb className="mr-2" />
                Insights
              </button>
              <button
                onClick={() => scrollToSection("solutions")}
                className="flex items-center px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
              >
                <FaRocket className="mr-2" />
                Solutions
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Context & Background Section */}
      <section id="context" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Context & Background
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                This project simulates a real-world B2C SaaS research challenge
                and demonstrates the ability to lead a study that bridges AI,
                usability, and product adoption.
              </p>
            </motion.div>

            <div className="space-y-8">
              {/* What is GrammarlyGO */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-400"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-700">
                  What is GrammarlyGO?
                </h3>
                <p className="text-gray-700 mb-4">
                  GrammarlyGO is Grammarly&apos;s embedded AI assistant designed
                  to speed up content creation and help users write more
                  confidently across platforms. It can:
                </p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>• Draft email replies</li>
                  <li>• Rewrite sentences for tone or clarity</li>
                  <li>
                    • Brainstorm content ideas using preset prompts or custom
                    instructions
                  </li>
                </ul>
              </motion.div>

              {/* Current State */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-red-50 p-8 rounded-xl border-l-4 border-red-400"
              >
                <h3 className="text-2xl font-bold mb-4 text-red-700">
                  Current State & Challenges
                </h3>
                <p className="text-gray-700 mb-4">
                  Despite high brand trust and broad distribution, GrammarlyGO
                  suffers from low re-engagement:
                </p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>
                    •{" "}
                    <strong>
                      60% of users try GrammarlyGO once but do not return in the
                      next 7 days
                    </strong>
                  </li>
                  <li>
                    • Premium users show only slightly higher engagement than
                    free users
                  </li>
                  <li>
                    • Feedback suggests confusion about what the AI assistant
                    does differently from standard Grammarly corrections
                  </li>
                </ul>
              </motion.div>

              {/* My Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-green-50 p-8 rounded-xl border-l-4 border-green-400"
              >
                <h3 className="text-2xl font-bold mb-4 text-green-700">
                  My Role as UX Designer
                </h3>
                <p className="text-gray-700 mb-4">
                  Working directly with the GrammarlyGO product team, I was
                  tasked with understanding:
                </p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>• Why new users disengage after first use</li>
                  <li>
                    • What&apos;s missing in the current onboarding or
                    interaction model
                  </li>
                  <li>• What keeps some users returning and others not</li>
                  <li>
                    • What changes could make GrammarlyGO feel essential rather
                    than optional
                  </li>
                </ul>
              </motion.div>

              {/* Business Goals */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-purple-50 p-8 rounded-xl border-l-4 border-purple-400"
              >
                <h3 className="text-2xl font-bold mb-4 text-purple-700">
                  Business Goals
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Retention</h4>
                    <p className="text-sm text-gray-700">
                      Improve GrammarlyGO retention by 25% within 6 months
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Usage</h4>
                    <p className="text-sm text-gray-700">
                      Increase AI prompt usage per active user
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Clarity</h4>
                    <p className="text-sm text-gray-700">
                      Reduce user confusion between GrammarlyGO and core grammar
                      features
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Research Approach Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold mb-4">
                  Research Approach Overview
                </h3>
                <p className="text-gray-700 mb-4">
                  This case study follows the <strong>Double Diamond</strong>{" "}
                  methodology:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 text-blue-600">
                      Discover Phase
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>
                        • Frame the Problem: What is GrammarlyGO solving and for
                        whom?
                      </li>
                      <li>
                        • Identify Priority Segments: Who should this research
                        focus on?
                      </li>
                      <li>
                        • Define Hypotheses: What do we suspect is happening and
                        why?
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-green-600">
                      Define Phase
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>
                        • Research Objective: Understand disengagement and
                        friction points
                      </li>
                      <li>
                        • Methods Selection: Analytics, usability testing,
                        interviews, surveys
                      </li>
                      <li>
                        • Recruitment Plan: 60% disengaged, 20% power users, 20%
                        churned
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Problem
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                GrammarlyGO, Grammarly&apos;s AI assistant, suffers from low
                re-engagement despite high brand trust and broad distribution.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-red-50 p-8 rounded-xl border-l-4 border-red-400"
              >
                <h3 className="text-xl font-bold mb-4 text-red-700">
                  Low User Retention
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• 60% of users try once but don&apos;t return</li>
                  <li>• Premium users show only slightly higher engagement</li>
                  <li>
                    • High customer acquisition cost with low lifetime value
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-400"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-700">
                  User Confusion
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    • Users can&apos;t differentiate from standard Grammarly
                  </li>
                  <li>• Unclear value proposition</li>
                  <li>
                    • Confusion about AI capabilities vs. grammar features
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Business Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-16 bg-gray-50 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">
                Business Impact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-3">
                    Engaged vs. Disengaged Users
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Engaged User LTV:</span>
                      <span className="font-bold text-green-600">$172.80</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Disengaged User LTV:</span>
                      <span className="font-bold text-red-600">$115.20</span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between font-bold">
                        <span>Profit Loss:</span>
                        <span className="text-red-600">36%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-3">Scale Impact</h4>
                  <p className="text-gray-700">
                    At scale, if 100,000 users disengage after first use,
                    Grammarly loses over{" "}
                    <span className="font-bold text-red-600">$5.7 million</span>{" "}
                    in potential long-term value.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Research Approach
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive research using multiple methods to understand user
                behavior, expectations, and pain points.
              </p>
            </motion.div>

            {/* Research Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <FaChartLine className="text-blue-500 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold">Product Analytics</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Analyzed user behavior patterns and funnel drop-offs using
                  Amplitude data.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Key Finding:</strong> Only 12% of users returned
                  within 7 days
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <FaUsers className="text-green-500 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold">User Interviews</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Conducted 10 semi-structured interviews with different user
                  segments.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Key Finding:</strong> 7/10 users expected a chatbot
                  experience
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <FaSearch className="text-purple-500 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold">Usability Testing</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Unmoderated testing with 15 participants using Maze platform.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Key Finding:</strong> 9/15 didn&apos;t notice
                  GrammarlyGO icon difference
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <FaChartLine className="text-orange-500 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold">In-Product Surveys</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Captured 342 responses from users immediately after usage.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Key Finding:</strong> Only 19% felt it helped
                  accomplish their goal
                </div>
              </motion.div>
            </div>

            {/* Detailed Research Findings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Product Analytics Details */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">
                  1. Product Analytics Review (Amplitude)
                </h3>
                <div className="mb-6">
                  <h4 className="font-bold mb-3">
                    Funnel: GrammarlyGO Usage – First 14 Days
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Clicked &quot;GrammarlyGO&quot; button</span>
                        <span className="font-bold">100% (Baseline)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>
                          Select a writing mode (rewrite, shorten, etc.)
                        </span>
                        <span className="font-bold">58%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Generated output</span>
                        <span className="font-bold">41%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Applied output to document</span>
                        <span className="font-bold">24%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>
                          Returned to use GrammarlyGO again (7-day window)
                        </span>
                        <span className="font-bold">12%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-3">Behavior Segments:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Users using &quot;Shorten&quot; or &quot;Rewrite
                      Tone&quot; features: 70% of returners
                    </li>
                    <li>
                      • &quot;Professional tone&quot; was selected 3× more than
                      other tones
                    </li>
                    <li>
                      • 33% of first-time users exited before selecting a
                      writing mode
                    </li>
                  </ul>
                </div>
              </div>

              {/* Usability Testing Details */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">
                  2. Unmoderated Usability Testing (Maze)
                </h3>
                <div className="mb-6">
                  <h4 className="font-bold mb-3">Scenario Tasks:</h4>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• Rewrite a Slack message to sound more confident</li>
                    <li>• Summarize a paragraph to be more concise</li>
                    <li>• Brainstorm talking points for an email</li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold mb-3">
                    Key Observations (15 participants):
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • 9/15 didn&apos;t notice the GrammarlyGO icon was
                      different from classic Grammarly
                    </li>
                    <li>
                      • 7/15 clicked the standard Grammarly &quot;correct&quot;
                      button instead of the AI rewrite tool
                    </li>
                    <li>
                      • 10/15 completed the task but took longer than expected
                      (avg. 2.4 minutes/task)
                    </li>
                    <li>• 5/15 expected a full-chat interface like ChatGPT</li>
                    <li>
                      • 4/15 were unsure if their tone setting had any real
                      effect
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3">User Quotes:</h4>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <p className="italic text-gray-700">
                      &quot;I thought this would be a chatbot like
                      ChatGPT.&quot;
                    </p>
                    <p className="italic text-gray-700">
                      &quot;I wasn&apos;t sure if it actually changed the tone
                      or just fixed grammar.&quot;
                    </p>
                    <p className="italic text-gray-700">
                      &quot;Why do I have to re-highlight every time?
                      That&apos;s annoying.&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* User Interviews Details */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">
                  3. User Interviews (10 participants: 6 disengaged, 2 power, 2
                  churned)
                </h3>
                <div className="mb-6">
                  <h4 className="font-bold mb-3">
                    Themes from Semi-Structured Questions:
                  </h4>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• What were you hoping GrammarlyGO would help with?</li>
                    <li>
                      • What was confusing or frustrating about your last use?
                    </li>
                    <li>
                      • When do you choose to use GrammarlyGO instead of classic
                      Grammarly?
                    </li>
                    <li>• What would make this worth using more often?</li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold mb-3">Highlights:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Expectation mismatch: 7/10 thought GrammarlyGO was a
                      chatbot experience
                    </li>
                    <li>
                      • Usefulness gap: 5/10 didn&apos;t feel the output added
                      much value beyond their own edits
                    </li>
                    <li>
                      • Frustration with UI: 6/10 found the controls
                      non-intuitive
                    </li>
                    <li>
                      • Power users appreciated tone control and speed, but set
                      up their own shortcuts
                    </li>
                    <li>
                      • Churned users switched to ChatGPT for more flexible
                      responses
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3">User Quotes:</h4>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <p className="italic text-gray-700">
                      &quot;It felt like Grammarly but slightly smarter, not
                      something I&apos;d pay extra for.&quot;
                    </p>
                    <p className="italic text-gray-700">
                      &quot;I&apos;d use it more if I didn&apos;t have to dig
                      around to find it.&quot;
                    </p>
                    <p className="italic text-gray-700">
                      &quot;I wanted suggestions, not full rewrites that sound
                      weirdly robotic.&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Survey Details */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">
                  4. In-Product Intercept Survey (Hotjar | n = 342 responses)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3">
                      Q1: What were you trying to do with GrammarlyGO?
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Speed up writing:</span>
                        <span className="font-bold">45%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Improve tone:</span>
                        <span className="font-bold">30%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Brainstorm:</span>
                        <span className="font-bold">17%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Not sure / exploring:</span>
                        <span className="font-bold">8%</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">
                      Q2: Did it help you accomplish your goal?
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Yes:</span>
                        <span className="font-bold text-green-600">19%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Partially:</span>
                        <span className="font-bold text-yellow-600">42%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>No:</span>
                        <span className="font-bold text-red-600">39%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-bold mb-3">Q3 (Open-ended, sampled):</h4>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <p className="italic text-gray-700">
                      &quot;I couldn&apos;t tell the difference between
                      GrammarlyGO and normal Grammarly.&quot;
                    </p>
                    <p className="italic text-gray-700">
                      &quot;It was hard to find tone controls.&quot;
                    </p>
                    <p className="italic text-gray-700">
                      &quot;It rewrote too much. I just wanted small
                      edits.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Key Insights
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our research uncovered the core issue: users expect GrammarlyGO
                to act like a conversation-based assistant, but find a rigid
                tool hidden behind complex UI.
              </p>
            </motion.div>

            {/* Insight Clusters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg mb-12"
            >
              <h3 className="text-2xl font-bold mb-6">Insight Clusters</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3 text-left font-bold">
                        Theme
                      </th>
                      <th className="border border-gray-300 p-3 text-left font-bold">
                        Supporting Evidence
                      </th>
                      <th className="border border-gray-300 p-3 text-left font-bold">
                        What It Means
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold text-red-600">
                        Expectations mismatch
                      </td>
                      <td className="border border-gray-300 p-3">
                        Interviews, Usability, Survey
                      </td>
                      <td className="border border-gray-300 p-3">
                        Users think GrammarlyGO will act like ChatGPT, not a
                        rewrite tool
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold text-blue-600">
                        Discoverability issues
                      </td>
                      <td className="border border-gray-300 p-3">
                        Analytics, Usability Testing
                      </td>
                      <td className="border border-gray-300 p-3">
                        Users can&apos;t easily find GrammarlyGO or don&apos;t
                        know they&apos;re using it
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold text-purple-600">
                        Frustration with tone control & UI
                      </td>
                      <td className="border border-gray-300 p-3">
                        Usability, Survey, Interviews
                      </td>
                      <td className="border border-gray-300 p-3">
                        Tone options unclear; too many clicks to refine/edit
                        content
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold text-green-600">
                        Output felt excessive or impersonal
                      </td>
                      <td className="border border-gray-300 p-3">
                        Interviews, Survey
                      </td>
                      <td className="border border-gray-300 p-3">
                        Users want tweaks, not full rewrites; don&apos;t trust
                        &quot;robotic&quot; style
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold text-orange-600">
                        Power users find workarounds
                      </td>
                      <td className="border border-gray-300 p-3">Interviews</td>
                      <td className="border border-gray-300 p-3">
                        Advanced users manually customize inputs, showing need
                        for presets or macros
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Shared Findings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-400 mb-12"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-700">
                Shared Findings
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                <strong>
                  Playback Summary (as presented to Product & Design teams):
                </strong>
              </p>
              <p className="text-gray-700 mb-4">
                Our research uncovered a core issue: users expect GrammarlyGO to
                act like a conversation-based assistant (like ChatGPT), but
                instead find a rigid tool hidden behind complex UI.
              </p>
              <p className="text-gray-700 mb-4">This leads to:</p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li>• Low trust in the tool&apos;s usefulness</li>
                <li>• Low visibility and discoverability</li>
                <li>• Output that feels over-edited and impersonal</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Even engaged users work around the friction manually — meaning
                the product isn&apos;t supporting them efficiently either.
              </p>
            </motion.div>

            {/* Prioritized Problem Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-6">
                Prioritized Problem Areas
              </h3>

              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-400">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-red-700">
                      Clarify Value Proposition of GrammarlyGO vs. Classic
                      Grammarly
                    </h4>
                    <p className="text-gray-700 mb-3">
                      <strong>Priority:</strong> High
                    </p>
                    <p className="text-gray-700 mb-3">
                      <strong>Rationale:</strong> Prevents expectation mismatch
                      and early churn
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-bold mb-2">Bottom Line Impact:</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Reduces churn after first use → protects LTV</li>
                        <li>
                          • Increases adoption of GrammarlyGO among paying users
                          → drives usage-based retention
                        </li>
                        <li>
                          • Improves feature ROI → ensures investment in AI is
                          seen as valuable
                        </li>
                        <li>
                          • Boosts conversion from free to Premium, if
                          GrammarlyGO is perceived as a clear differentiator
                        </li>
                      </ul>
                      <p className="text-sm text-gray-700 mt-3">
                        If 60% of first-time users don&apos;t understand the
                        difference, they see no reason to stay or upgrade, this
                        tanks ROI on AI investments and inflates CAC per
                        retained user.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-blue-700">
                      Improve Discoverability in Product UI
                    </h4>
                    <p className="text-gray-700 mb-3">
                      <strong>Priority:</strong> High
                    </p>
                    <p className="text-gray-700 mb-3">
                      <strong>Rationale:</strong> Makes usage frictionless and
                      increases re-engagement
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-bold mb-2">Bottom Line Impact:</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>
                          • Increases repeat usage → key LTV driver (returning
                          users stay longer)
                        </li>
                        <li>
                          • Reduces support costs → fewer users get lost or
                          confused
                        </li>
                        <li>
                          • Drives feature stickiness → improves engagement
                          scores used in renewal models
                        </li>
                        <li>
                          • Amplifies freemium funnel performance → more value
                          in early days = more upgrades
                        </li>
                      </ul>
                      <p className="text-sm text-gray-700 mt-3">
                        If users don&apos;t know where GrammarlyGO lives or how
                        to trigger it, they won&apos;t use it again — and every
                        dollar spent acquiring them becomes less efficient.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-400">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-purple-700">
                      Add Lightweight Editing Tools (Undo, Rephrase, Tone
                      Presets)
                    </h4>
                    <p className="text-gray-700 mb-3">
                      <strong>Priority:</strong> Medium
                    </p>
                    <p className="text-gray-700 mb-3">
                      <strong>Rationale:</strong> Empowers users with control
                      without added complexity
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-bold mb-2">Bottom Line Impact:</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>
                          • Builds trust in AI output → increases usage
                          frequency
                        </li>
                        <li>
                          • Reduces task abandonment → improves session quality
                        </li>
                        <li>
                          • Differentiates GrammarlyGO from competitors →
                          improves retention in a crowded AI market
                        </li>
                      </ul>
                      <p className="text-sm text-gray-700 mt-3">
                        Lack of user control breaks trust. When users don&apos;t
                        feel they can shape the output, they stop relying on the
                        tool, which shrinks active user base and weakens LTV.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                    4
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-green-700">
                      Personalize Onboarding Based on User Goal (speed, tone,
                      brainstorm)
                    </h4>
                    <p className="text-gray-700 mb-3">
                      <strong>Priority:</strong> Medium
                    </p>
                    <p className="text-gray-700 mb-3">
                      <strong>Rationale:</strong> Aligns tool suggestions to
                      user intent
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-bold mb-2">Bottom Line Impact:</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>
                          • Increases activation rate → users reach their
                          &quot;aha&quot; moment faster
                        </li>
                        <li>
                          • Improves first-week retention → strongest predictor
                          of long-term LTV
                        </li>
                        <li>
                          • Reduces cognitive friction → boosts satisfaction
                          (CSAT), especially among new users
                        </li>
                      </ul>
                      <p className="text-sm text-gray-700 mt-3">
                        Users who get immediate value are more likely to return
                        and upgrade, increasing organic growth and decreasing
                        CAC per active user.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Proposed Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Four strategic solutions designed to address the core issues and
                improve user retention.
              </p>
            </motion.div>

            {/* Solutions Grid */}
            <div className="space-y-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                    <FaRocket className="text-blue-500 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      1. Contextual GrammarlyGO Activation
                    </h3>
                    <span className="text-sm text-blue-600 font-medium">
                      High Priority | High Impact
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 text-lg">
                  Instead of onboarding screens, trigger GrammarlyGO at moments
                  of struggle.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold mb-3">Implementation:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • Use ML to detect hesitation, backspacing, or long idle
                        time
                      </li>
                      <li>
                        • Offer GrammarlyGO with contextual suggestions based on
                        what the user is writing
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Why it&apos;s better:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • Activated when it&apos;s needed, not before. Respects
                        user flow
                      </li>
                      <li>
                        • Ties AI to solving an immediate pain point, which
                        builds trust
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Metric to track:</h4>
                  <p className="text-gray-700">
                    GrammarlyGO activation rate during &quot;writer&apos;s
                    block&quot; moments
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-6">
                    <FaLightbulb className="text-green-500 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      2. Live Preview Panel with Transparent Output Logic
                    </h3>
                    <span className="text-sm text-green-600 font-medium">
                      High Priority | High Impact
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 text-lg">
                  Show GrammarlyGO&apos;s draft evolving in real time with a
                  &quot;why we chose this&quot; explanation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold mb-3">Implementation:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • Let users preview multiple tones or structures without
                        rerunning prompts
                      </li>
                      <li>
                        • Display output as a &quot;guided draft,&quot; not a
                        black-box result
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Why it&apos;s better:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Increases transparency and control</li>
                      <li>
                        • Mimics how tools like GitHub Copilot and ChatGPT let
                        users feel more involved
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Metrics to track:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Reduction in AI output abandonment</li>
                    <li>
                      • Increase in &quot;output edited and used&quot; rate
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-6">
                    <FaUsers className="text-purple-500 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      3. Mini AI Editor Mode
                    </h3>
                    <span className="text-sm text-purple-600 font-medium">
                      Medium Priority | Medium Impact
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 text-lg">
                  Instead of just rewriting, offer an optional GrammarlyGO side
                  editor.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold mb-3">Implementation:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • Users can write a rough draft, toggle a GrammarlyGO
                        editor view
                      </li>
                      <li>
                        • See enhanced versions or paragraph-level suggestions
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Why it&apos;s better:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • Gives GrammarlyGO a defined space rather than
                        injecting into main editor
                      </li>
                      <li>
                        • Helps with long-form content where users want help
                        structuring or revising
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Metrics to track:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Session length with AI Editor open</li>
                    <li>• Feature satisfaction score</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-6">
                    <FaSearch className="text-orange-500 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      4. &quot;Start with AI&quot; Smart Templates
                    </h3>
                    <span className="text-sm text-orange-600 font-medium">
                      Medium Priority | High Impact
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 text-lg">
                  Offer AI-first document templates for common use cases.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold mb-3">Implementation:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • Email, outreach, follow-up, project summary templates
                      </li>
                      <li>
                        • Prompted with a short form like: Who is this for?
                        What&apos;s your message?
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Why it&apos;s better:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • Helps users generate from a blank page, the hardest
                        moment
                      </li>
                      <li>
                        • Tailors output based on input, which avoids generic
                        results
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Metrics to track:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Conversion rate from template to completed doc</li>
                    <li>• GrammarlyGO usage rate for new users</li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Solution Prioritization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg mb-12"
            >
              <h3 className="text-2xl font-bold mb-6">
                Solution Prioritization Summary
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3 text-left font-bold">
                        Opportunity
                      </th>
                      <th className="border border-gray-300 p-3 text-left font-bold">
                        Priority
                      </th>
                      <th className="border border-gray-300 p-3 text-left font-bold">
                        Impact
                      </th>
                      <th className="border border-gray-300 p-3 text-left font-bold">
                        Justification
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">
                        Contextual GrammarlyGO Trigger
                      </td>
                      <td className="border border-gray-300 p-3">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                          High
                        </span>
                      </td>
                      <td className="border border-gray-300 p-3">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                          High
                        </span>
                      </td>
                      <td className="border border-gray-300 p-3">
                        Activated during real need. Minimal friction.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">
                        Live Preview Panel
                      </td>
                      <td className="border border-gray-300 p-3">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                          High
                        </span>
                      </td>
                      <td className="border border-gray-300 p-3">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                          High
                        </span>
                      </td>
                      <td className="border border-gray-300 p-3">
                        Builds trust, improves perceived quality.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">
                        Mini AI Editor
                      </td>
                      <td className="border border-gray-300 p-3">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                          Medium
                        </span>
                      </td>
                      <td className="border border-gray-300 p-3">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                          Medium
                        </span>
                      </td>
                      <td className="border border-gray-300 p-3">
                        Encourages use in complex workflows.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">
                        AI Smart Templates
                      </td>
                      <td className="border border-gray-300 p-3">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                          Medium
                        </span>
                      </td>
                      <td className="border border-gray-300 p-3">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                          High
                        </span>
                      </td>
                      <td className="border border-gray-300 p-3">
                        Solves blank page problem. First-week adoption driver.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Expected Outcomes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">
                Expected Outcomes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">25%</div>
                  <div className="text-blue-100">Retention Improvement</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">40%</div>
                  <div className="text-blue-100">
                    Increase in AI Prompt Usage
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">60%</div>
                  <div className="text-blue-100">
                    Reduction in User Confusion
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to see more of my work?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Explore my other UX/UI projects and development work to see how
                I approach different challenges.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/ux-ui"
                  className="px-8 py-3 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition-colors duration-300"
                >
                  View UX/UI Work
                </Link>
                <Link
                  href="/dev"
                  className="px-8 py-3 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-700 transition-colors duration-300"
                >
                  View Development Projects
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
