"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GrammarlyGOCaseStudy() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "#171717" }}>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black mb-6"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            GrammarlyGO
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold mb-8 text-gray-300"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Improving AI Retention: Turning One-Time Users into Loyal Daily Writers
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 text-sm md:text-base mb-8"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <span className="bg-gray-800 px-4 py-2 rounded-full">UX Research</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full">Product Strategy</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full">B2C SaaS</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full">AI/ML</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
              This project simulates a real-world B2C SaaS research challenge and demonstrates the ability to lead a study that bridges AI, usability, and product adoption.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Background Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-black mb-8"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            Background
          </h2>
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
            <p className="text-lg md:text-xl mb-8 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
              GrammarlyGO is Grammarly's embedded AI assistant designed to speed up content creation and help users write more confidently across platforms. It can draft email replies, rewrite sentences for tone or clarity, or brainstorm content ideas using preset prompts or custom instructions.
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Despite high brand trust and broad distribution, GrammarlyGO suffers from low re-engagement:
            </p>
            <ul className="space-y-4 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
              <li className="flex items-start">
                <span className="text-red-400 mr-3">•</span>
                <span>60% of users try GrammarlyGO once but do not return in the next 7 days</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3">•</span>
                <span>Premium users show only slightly higher engagement than free users</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3">•</span>
                <span>Feedback suggests confusion about what the AI assistant does differently from standard Grammarly corrections</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Problem Framing Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-black mb-8"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            Problem Framing
          </h2>
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-blue-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
              What is GrammarlyGO solving and for whom?
            </h3>
            <p className="text-lg text-gray-300 mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
              GrammarlyGO is solving a time problem, as well as a quality problem. For people that type a lot (emails, docs, etc), GrammarlyGO is an embedded assistant that takes care of nuanced tasks, or revises completed ones.
            </p>
            <p className="text-lg text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
              60% of users disengaging after the first use means that the features had too much friction to be worth using, or the features were simply never too useful in the first place.
            </p>
          </div>

          {/* Hypotheses */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6 text-green-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Hypotheses
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-green-400 pl-6">
                <p className="text-lg text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <span className="font-bold text-green-400">Hypothesis 1:</span> GrammarlyGO is too similar to Grammarly, users do not see a difference between the two and do not see a reason to engage with GrammarlyGO
                </p>
              </div>
              <div className="border-l-4 border-yellow-400 pl-6">
                <p className="text-lg text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <span className="font-bold text-yellow-400">Hypothesis 2:</span> GrammarlyGO has too much user friction, the process of using the features takes too long for the user to use it seamlessly
                </p>
              </div>
              <div className="border-l-4 border-red-400 pl-6">
                <p className="text-lg text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <span className="font-bold text-red-400">Hypothesis 3:</span> GrammarlyGO's features are not useful enough, the user would rather opt to keep their writing as is, or take the time to revise it themselves
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Business Impact Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-black mb-8"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            Business Impact Analysis
          </h2>
          
          {/* CAC Calculation */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-blue-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Customer Acquisition Cost (CAC)
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Grammarly Spending Breakdown:
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li>• $2,000,000 on ads (YouTube, Google, Instagram)</li>
                  <li>• $500,000 on referral programs, email campaigns, partnerships</li>
                  <li>• $500,000 on internal growth team salaries and tools</li>
                  <li className="font-bold text-white">Total acquisition cost: $3,000,000</li>
                  <li>• New Premium users acquired: 250,000</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-blue-400 mb-2">$12</div>
                <p className="text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  CAC = Total Spend / New Users<br/>
                  CAC = $3,000,000 / 250,000
                </p>
              </div>
            </div>
          </div>

          {/* LTV Calculation */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-green-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Lifetime Value (LTV)
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li>• Grammarly Premium subscription: $12/month = $144/year</li>
                  <li>• Average Premium user stays subscribed for 1.5 years</li>
                  <li>• Gross revenue per user: $216</li>
                  <li>• Assuming 80% profit margin after operational costs</li>
                  <li className="font-bold text-white">LTV = $216 × 0.8 = $172.80 per user</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-green-400 mb-2">$172.80</div>
                <p className="text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Engaged User LTV
                </p>
              </div>
            </div>
          </div>

          {/* Impact of Disengagement */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6 text-red-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Impact of Disengagement
            </h3>
            <p className="text-lg text-gray-300 mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
              If a user tries GrammarlyGO once but doesn't engage, their average lifetime drops to 1 year:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Engaged User</div>
                <div className="text-lg text-gray-300">CAC: $12</div>
                <div className="text-lg text-green-400">LTV: $172.80</div>
                <div className="text-lg text-green-400 font-bold">Profit: $160.80</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Disengaged User</div>
                <div className="text-lg text-gray-300">CAC: $12</div>
                <div className="text-lg text-red-400">LTV: $115.20</div>
                <div className="text-lg text-red-400 font-bold">Profit: $103.20</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Result</div>
                <div className="text-4xl font-black text-red-400">36%</div>
                <div className="text-lg text-gray-300">less profit per user</div>
              </div>
            </div>
            <div className="bg-red-900/30 rounded-lg p-6 text-center">
              <div className="text-3xl font-black text-red-400 mb-2">$5.7M</div>
              <p className="text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                At scale, if 100,000 users disengage after first use, Grammarly loses over $5.7 million in potential long-term value.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Research Methodology Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-black mb-8"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            Research Methodology
          </h2>
          
          {/* Research Objective */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-blue-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Research Objective
            </h3>
            <p className="text-lg text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Understand why new users disengage from GrammarlyGO after first use, what friction exists in the user experience, and what changes would increase return usage.
            </p>
          </div>

          {/* Methods Selected */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-green-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Methods Selected
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-3 text-blue-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Product Analytics Review
                </h4>
                <p className="text-sm text-gray-300 mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Type: Quantitative
                </p>
                <p className="text-sm text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Goal: Understand user behavior at scale — identify drop-offs and usage patterns
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-3 text-green-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Unmoderated Usability Testing
                </h4>
                <p className="text-sm text-gray-300 mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Type: Qualitative
                </p>
                <p className="text-sm text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Goal: Observe interaction friction points in key use cases
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-3 text-purple-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Semi-Structured User Interviews
                </h4>
                <p className="text-sm text-gray-300 mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Type: Qualitative
                </p>
                <p className="text-sm text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Goal: Explore expectations, mental models, motivations, and trust
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-3 text-yellow-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  In-Product Intercept Surveys
                </h4>
                <p className="text-sm text-gray-300 mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Type: Quantitative
                </p>
                <p className="text-sm text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Goal: Capture user intent and satisfaction at the point of usage
                </p>
              </div>
            </div>
          </div>

          {/* Recruitment Plan */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6 text-purple-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Recruitment Plan
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-3xl font-black text-red-400 mb-2">60%</div>
                <h4 className="text-lg font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Disengaged Users
                </h4>
                <p className="text-sm text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Tried GrammarlyGO once, haven't used since
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-3xl font-black text-green-400 mb-2">20%</div>
                <h4 className="text-lg font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Power Users
                </h4>
                <p className="text-sm text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Daily GrammarlyGO users, >3 months
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-3xl font-black text-yellow-400 mb-2">20%</div>
                <h4 className="text-lg font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Churned Users
                </h4>
                <p className="text-sm text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Canceled Grammarly Premium or switched to competitor
                </p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-bold mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Sourcing:
              </h4>
              <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                <li>• Internal CRM data (usage tracking via product analytics)</li>
                <li>• Email outreach + incentives ($25 gift card)</li>
                <li>• For surveys: Random sample triggered in-product after first use</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Research Results Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-black mb-8"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            Research Results
          </h2>

          {/* 1. Product Analytics Review */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-blue-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
              1. Product Analytics Review (Amplitude)
            </h3>
            <h4 className="text-lg font-bold mb-4 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Funnel: GrammarlyGO Usage – First 14 Days
            </h4>
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
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
                  <span className="font-bold text-red-400">12%</span>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-bold mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Behavior Segments:
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li>• Users using "Shorten" or "Rewrite Tone" features: 70% of returners</li>
                  <li>• "Professional tone" was selected 3× more than other tones</li>
                  <li>• 33% of first-time users exited before selecting a writing mode</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. Usability Testing */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-green-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
              2. Unmoderated Usability Testing (Maze)
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Scenario Tasks:
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li>• Rewrite a Slack message to sound more confident</li>
                  <li>• Summarize a paragraph to be more concise</li>
                  <li>• Brainstorm talking points for an email</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Key Observations (15 participants):
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li>• 9/15 didn't notice the GrammarlyGO icon was different from classic Grammarly</li>
                  <li>• 7/15 clicked the standard Grammarly "correct" button instead of the AI rewrite tool</li>
                  <li>• 10/15 completed the task but took longer than expected (avg. 2.4 minutes/task)</li>
                  <li>• 5/15 expected a full-chat interface like ChatGPT</li>
                  <li>• 4/15 were unsure if their tone setting had any real effect</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 mt-6">
              <h4 className="text-lg font-bold mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Key Quotes:
              </h4>
              <div className="space-y-3">
                <p className="text-gray-300 italic" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  "I thought this would be a chatbot like ChatGPT."
                </p>
                <p className="text-gray-300 italic" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  "I wasn't sure if it actually changed the tone or just fixed grammar."
                </p>
                <p className="text-gray-300 italic" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  "Why do I have to re-highlight every time? That's annoying."
                </p>
              </div>
            </div>
          </div>

          {/* 3. User Interviews */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-purple-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
              3. User Interviews (10 participants: 6 disengaged, 2 power, 2 churned)
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Themes from Semi-Structured Questions:
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li>• What were you hoping GrammarlyGO would help with?</li>
                  <li>• What was confusing or frustrating about your last use?</li>
                  <li>• When do you choose to use GrammarlyGO instead of classic Grammarly?</li>
                  <li>• What would make this worth using more often?</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Highlights:
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li>• Expectation mismatch: 7/10 thought GrammarlyGO was a chatbot experience</li>
                  <li>• Usefulness gap: 5/10 didn't feel the output added much value beyond their own edits</li>
                  <li>• Frustration with UI: 6/10 found the controls non-intuitive</li>
                  <li>• Power users appreciated tone control and speed, but set up their own shortcuts</li>
                  <li>• Churned users switched to ChatGPT for more flexible responses</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 mt-6">
              <h4 className="text-lg font-bold mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Key Quotes:
              </h4>
              <div className="space-y-3">
                <p className="text-gray-300 italic" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  "It felt like Grammarly but slightly smarter, not something I'd pay extra for."
                </p>
                <p className="text-gray-300 italic" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  "I'd use it more if I didn't have to dig around to find it."
                </p>
                <p className="text-gray-300 italic" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  "I wanted suggestions, not full rewrites that sound weirdly robotic."
                </p>
              </div>
            </div>
          </div>

          {/* 4. In-Product Survey */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6 text-yellow-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
              4. In-Product Intercept Survey (Hotjar | n = 342 responses)
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Q1: What were you trying to do with GrammarlyGO?
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li>Speed up writing: 45%</li>
                  <li>Improve tone: 30%</li>
                  <li>Brainstorm: 17%</li>
                  <li>Not sure / exploring: 8%</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Q2: Did it help you accomplish your goal?
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li>Yes: 19%</li>
                  <li>Partially: 42%</li>
                  <li>No: 39%</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Q3 (Open-ended, sampled):
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li>"I couldn't tell the difference between GrammarlyGO and normal Grammarly."</li>
                  <li>"It was hard to find tone controls."</li>
                  <li>"It rewrote too much. I just wanted small edits."</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Key Insights Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-black mb-8"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            Key Insights
          </h2>
          
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-blue-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Playback Summary
            </h3>
            <p className="text-lg text-gray-300 mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Our research uncovered a core issue: users expect GrammarlyGO to act like a conversation-based assistant (like ChatGPT), but instead find a rigid tool hidden behind complex UI.
            </p>
            <p className="text-lg text-gray-300 mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
              This leads to:
            </p>
            <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
              <li>• Low trust in the tool's usefulness</li>
              <li>• Low visibility and discoverability</li>
              <li>• Output that feels over-edited and impersonal</li>
            </ul>
            <p className="text-lg text-gray-300 mt-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Even engaged users work around the friction manually — meaning the product isn't supporting them efficiently either.
            </p>
          </div>

          {/* Insight Clusters Table */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6 text-green-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Insight Clusters
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 font-bold text-blue-400">Theme</th>
                    <th className="text-left py-3 px-4 font-bold text-green-400">Supporting Evidence</th>
                    <th className="text-left py-3 px-4 font-bold text-purple-400">What It Means</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Expectations mismatch</td>
                    <td className="py-3 px-4">Interviews, Usability, Survey</td>
                    <td className="py-3 px-4">Users think GrammarlyGO will act like ChatGPT, not a rewrite tool</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Discoverability issues</td>
                    <td className="py-3 px-4">Analytics, Usability Testing</td>
                    <td className="py-3 px-4">Users can't easily find GrammarlyGO or don't know they're using it</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Frustration with tone control & UI</td>
                    <td className="py-3 px-4">Usability, Survey, Interviews</td>
                    <td className="py-3 px-4">Tone options unclear; too many clicks to refine/edit content</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Output felt excessive or impersonal</td>
                    <td className="py-3 px-4">Interviews, Survey</td>
                    <td className="py-3 px-4">Users want tweaks, not full rewrites; don't trust "robotic" style</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Power users find workarounds</td>
                    <td className="py-3 px-4">Interviews</td>
                    <td className="py-3 px-4">Advanced users manually customize inputs, showing need for presets or macros</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Prioritized Problem Areas */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-black mb-8"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            Prioritized Problem Areas
          </h2>
          
          <div className="space-y-8">
            {/* Problem 1 */}
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
              <div className="flex items-center mb-6">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-4">High Priority</span>
                <h3 className="text-2xl font-bold text-red-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  1. Clarify Value Prop of GrammarlyGO vs. Classic Grammarly
                </h3>
              </div>
              <p className="text-lg text-gray-300 mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                <span className="font-bold text-red-400">Rationale:</span> Prevents expectation mismatch and early churn
              </p>
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Bottom Line Impact:
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li>• Reduces churn after first use → protects LTV</li>
                  <li>• Increases adoption of GrammarlyGO among paying users → drives usage-based retention</li>
                  <li>• Improves feature ROI → ensures investment in AI is seen as valuable</li>
                  <li>• Boosts conversion from free to Premium, if GrammarlyGO is perceived as a clear differentiator</li>
                </ul>
                <p className="text-gray-300 mt-4 italic" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  If 60% of first-time users don't understand the difference, they see no reason to stay or upgrade, this tanks ROI on AI investments and inflates CAC per retained user.
                </p>
              </div>
            </div>

            {/* Problem 2 */}
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
              <div className="flex items-center mb-6">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-4">High Priority</span>
                <h3 className="text-2xl font-bold text-red-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  2. Improve Discoverability in Product UI
                </h3>
              </div>
              <p className="text-lg text-gray-300 mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                <span className="font-bold text-red-400">Rationale:</span> Makes usage frictionless and increases re-engagement
              </p>
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Bottom Line Impact:
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li>• Increases repeat usage → key LTV driver (returning users stay longer)</li>
                  <li>• Reduces support costs → fewer users get lost or confused</li>
                  <li>• Drives feature stickiness → improves engagement scores used in renewal models</li>
                  <li>• Amplifies freemium funnel performance → more value in early days = more upgrades</li>
                </ul>
                <p className="text-gray-300 mt-4 italic" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  If users don't know where GrammarlyGO lives or how to trigger it, they won't use it again — and every dollar spent acquiring them becomes less efficient.
                </p>
              </div>
            </div>

            {/* Problem 3 */}
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
              <div className="flex items-center mb-6">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-4">Medium Priority</span>
                <h3 className="text-2xl font-bold text-yellow-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  3. Add Lightweight Editing Tools (Undo, Rephrase, Tone Presets)
                </h3>
              </div>
              <p className="text-lg text-gray-300 mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                <span className="font-bold text-yellow-400">Rationale:</span> Empowers users with control without added complexity
              </p>
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Bottom Line Impact:
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li>• Builds trust in AI output → increases usage frequency</li>
                  <li>• Reduces task abandonment → improves session quality</li>
                  <li>• Differentiates GrammarlyGO from competitors → improves retention in a crowded AI market</li>
                </ul>
                <p className="text-gray-300 mt-4 italic" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Lack of user control breaks trust. When users don't feel they can shape the output, they stop relying on the tool, which shrinks active user base and weakens LTV.
                </p>
              </div>
            </div>

            {/* Problem 4 */}
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
              <div className="flex items-center mb-6">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-4">Medium Priority</span>
                <h3 className="text-2xl font-bold text-yellow-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  4. Personalize Onboarding Based on User Goal (speed, tone, brainstorm)
                </h3>
              </div>
              <p className="text-lg text-gray-300 mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                <span className="font-bold text-yellow-400">Rationale:</span> Aligns tool suggestions to user intent
              </p>
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Bottom Line Impact:
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li>• Increases activation rate → users reach their "aha" moment faster</li>
                  <li>• Improves first-week retention → strongest predictor of long-term LTV</li>
                  <li>• Reduces cognitive friction → boosts satisfaction (CSAT), especially among new users</li>
                </ul>
                <p className="text-gray-300 mt-4 italic" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Users who get immediate value are more likely to return and upgrade, increasing organic growth and decreasing CAC per active user.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-4xl md:text-5xl font-black mb-8"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            Solutions
          </h2>
          
          <div className="space-y-12">
            {/* Solution 1 */}
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-green-400" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>
                1. Contextual GrammarlyGO Activation
              </h3>
              <p className="text-lg text-gray-300 mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Instead of onboarding screens, trigger GrammarlyGO at moments of struggle. Use ML to detect hesitation, backspacing, or long idle time. Offer GrammarlyGO with contextual suggestions based on what the user is writing.
              </p>
              <div className="bg-gray-800 rounded-lg p-6 mb-6">
                <h4 className="font-bold mb-3 text-green-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Why it's better:
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li>• Activated when it's needed, not before. Respects user flow.</li>
                  <li>• Ties AI to solving an immediate pain point, which builds trust.</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="font-bold mb-3 text-blue-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Metric to track:
                </h4>
                <p className="text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  GrammarlyGO activation rate during "writer's block" moments
                </p>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>
                2. Live Preview Panel with Transparent Output Logic
              </h3>
              <p className="text-lg text-gray-300 mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Show GrammarlyGO's draft evolving in real time with a "why we chose this" explanation. Let users preview multiple tones or structures without rerunning prompts. Display output as a "guided draft," not a black-box result.
              </p>
              <div className="bg-gray-800 rounded-lg p-6 mb-6">
                <h4 className="font-bold mb-3 text-blue-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Why it's better:
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li>• Increases transparency and control.</li>
                  <li>• Mimics how tools like GitHub Copilot and ChatGPT let users feel more involved.</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="font-bold mb-3 text-blue-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Metrics to track:
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li>• Reduction in AI output abandonment</li>
                  <li>• Increase in "output edited and used" rate</li>
                </ul>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-purple-400" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>
                3. "Start with AI" Smart Templates
              </h3>
              <p className="text-lg text-gray-300 mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Offer AI-first document templates for common use cases (Email, outreach, follow-up, project summary). Prompted with a short form like: Who is this for? What's your message?
              </p>
              <div className="bg-gray-800 rounded-lg p-6 mb-6">
                <h4 className="font-bold mb-3 text-purple-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Why it's better:
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li>• Helps users generate from a blank page, the hardest moment</li>
                  <li>• Tailors output based on input, which avoids generic results</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="font-bold mb-3 text-blue-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Metrics to track:
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li>• Conversion rate from template to completed doc</li>
                  <li>• GrammarlyGO usage rate for new users</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Summary & Impact */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-4xl md:text-5xl font-black mb-8 text-center"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            Expected Impact
          </h2>
          
          {/* Business Goals */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-blue-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Business Goals
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-black text-green-400 mb-2">25%</div>
                <p className="text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Improve GrammarlyGO retention within 6 months
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-blue-400 mb-2">+</div>
                <p className="text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Increase AI prompt usage per active user
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-purple-400 mb-2">-</div>
                <p className="text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Reduce user confusion between GrammarlyGO and core grammar features
                </p>
              </div>
            </div>
          </div>

          {/* Solution Prioritization */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6 text-green-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Solution Prioritization
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 font-bold text-blue-400">Opportunity</th>
                    <th className="text-left py-3 px-4 font-bold text-green-400">Priority</th>
                    <th className="text-left py-3 px-4 font-bold text-purple-400">Impact</th>
                    <th className="text-left py-3 px-4 font-bold text-yellow-400">Justification</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Contextual GrammarlyGO Trigger</td>
                    <td className="py-3 px-4"><span className="bg-red-500 text-white px-2 py-1 rounded text-xs">High</span></td>
                    <td className="py-3 px-4"><span className="bg-red-500 text-white px-2 py-1 rounded text-xs">High</span></td>
                    <td className="py-3 px-4">Activated during real need. Minimal friction.</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Live Preview Panel</td>
                    <td className="py-3 px-4"><span className="bg-red-500 text-white px-2 py-1 rounded text-xs">High</span></td>
                    <td className="py-3 px-4"><span className="bg-red-500 text-white px-2 py-1 rounded text-xs">High</span></td>
                    <td className="py-3 px-4">Builds trust, improves perceived quality.</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Mini AI Editor</td>
                    <td className="py-3 px-4"><span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">Medium</span></td>
                    <td className="py-3 px-4"><span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">Medium</span></td>
                    <td className="py-3 px-4">Encourages use in complex workflows.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">AI Smart Templates</td>
                    <td className="py-3 px-4"><span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">Medium</span></td>
                    <td className="py-3 px-4"><span className="bg-red-500 text-white px-2 py-1 rounded text-xs">High</span></td>
                    <td className="py-3 px-4">Solves blank page problem. First-week adoption driver.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
            This case study demonstrates comprehensive UX research methodology and strategic problem-solving for AI product adoption challenges.
          </p>
        </motion.div>
      </footer>
    </div>
  );
}
