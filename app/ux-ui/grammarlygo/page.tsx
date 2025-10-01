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
            Improving AI Retention: Turning One-Time Users into Daily Writers
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 text-sm md:text-base"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <span className="bg-gray-800 px-4 py-2 rounded-full">UX Research</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full">Product Strategy</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full">B2C SaaS</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full">AI/ML</span>
          </motion.div>
        </div>
      </div>

      {/* Problem Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-black mb-8 text-center"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            The Challenge
          </h2>
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
            <p className="text-lg md:text-xl mb-8 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
              GrammarlyGO is Grammarly's embedded AI assistant designed to speed up content creation. 
              Despite high brand trust and broad distribution, it suffers from critical retention issues:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-red-400 mb-4">60%</div>
                <p className="text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  of users try GrammarlyGO once but don't return in 7 days
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-4">Minimal</div>
                <p className="text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  difference in engagement between premium and free users
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-blue-400 mb-4">High</div>
                <p className="text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  user confusion between GrammarlyGO and standard corrections
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Business Impact */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 
            className="text-3xl md:text-4xl font-black mb-8"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            Business Impact
          </h3>
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-bold mb-4 text-green-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Financial Impact of Disengagement
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <span className="text-gray-300">Customer Acquisition Cost (CAC)</span>
                    <span className="font-bold">$12/user</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <span className="text-gray-300">Engaged User LTV</span>
                    <span className="font-bold text-green-400">$172.80</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <span className="text-gray-300">Disengaged User LTV</span>
                    <span className="font-bold text-red-400">$115.20</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Profit Loss per User</span>
                    <span className="font-bold text-red-400">36%</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 text-blue-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Scale Impact
                </h4>
                <p className="text-gray-300 mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  If 100,000 users disengage after first use:
                </p>
                <div className="text-3xl font-black text-red-400 mb-2">$5.7M</div>
                <p className="text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  in lost potential long-term value
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Research Approach */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-black mb-8 text-center"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            Research Strategy
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3 text-blue-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Product Analytics
              </h3>
              <p className="text-sm text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Understand user behavior at scale and identify drop-off points
              </p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3 text-green-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Usability Testing
              </h3>
              <p className="text-sm text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Observe interaction friction points in key use cases
              </p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3 text-purple-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                User Interviews
              </h3>
              <p className="text-sm text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Explore expectations, mental models, and motivations
              </p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3 text-yellow-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                In-Product Surveys
              </h3>
              <p className="text-sm text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Capture user intent and satisfaction at point of usage
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Key Findings */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 
            className="text-3xl md:text-4xl font-black mb-8"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            Key Findings
          </h3>
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-xl p-8">
              <h4 className="text-xl font-bold mb-4 text-red-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Expectation Mismatch
              </h4>
              <p className="text-gray-300 mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Users expected GrammarlyGO to act like ChatGPT (conversational AI), but found a rigid rewrite tool.
              </p>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-gray-300 italic" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  "I thought this would be a chatbot like ChatGPT."
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-8">
              <h4 className="text-xl font-bold mb-4 text-yellow-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Discoverability Issues
              </h4>
              <p className="text-gray-300 mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                33% of users exited before selecting a writing mode. Users couldn't easily find or distinguish GrammarlyGO from standard features.
              </p>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-gray-300 italic" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  "I'd use it more if I didn't have to dig around to find it."
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-8">
              <h4 className="text-xl font-bold mb-4 text-blue-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Output Quality Concerns
              </h4>
              <p className="text-gray-300 mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Users wanted tweaks, not full rewrites. Output felt "robotic" and impersonal.
              </p>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-gray-300 italic" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  "It rewrote too much. I just wanted small edits."
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
            className="text-4xl md:text-5xl font-black mb-8 text-center"
            style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
          >
            Solutions
          </h2>
          <div className="space-y-12">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-green-400" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>
                1. Contextual GrammarlyGO Activation
              </h3>
              <p className="text-gray-300 mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Instead of onboarding screens, trigger GrammarlyGO at moments of struggle using ML to detect hesitation, backspacing, or long idle time.
              </p>
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="font-bold mb-3 text-green-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Why it's better:
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li>• Activated when needed, not before</li>
                  <li>• Ties AI to solving immediate pain points</li>
                  <li>• Builds trust through contextual relevance</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>
                2. Live Preview Panel with Transparent Logic
              </h3>
              <p className="text-gray-300 mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Show GrammarlyGO's draft evolving in real time with "why we chose this" explanations. Let users preview multiple tones without rerunning prompts.
              </p>
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="font-bold mb-3 text-blue-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Why it's better:
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li>• Increases transparency and user control</li>
                  <li>• Mimics successful tools like GitHub Copilot</li>
                  <li>• Reduces AI output abandonment</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-purple-400" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>
                3. "Start with AI" Smart Templates
              </h3>
              <p className="text-gray-300 mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Offer AI-first document templates for common use cases (email, outreach, follow-up) prompted with simple forms: Who is this for? What's your message?
              </p>
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="font-bold mb-3 text-purple-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Why it's better:
                </h4>
                <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <li>• Solves the blank page problem</li>
                  <li>• Tailors output based on input context</li>
                  <li>• Drives first-week adoption</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Results Section */}
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
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-2xl p-8 text-center">
              <div className="text-4xl md:text-5xl font-black text-green-400 mb-4">25%</div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Retention Improvement
              </h3>
              <p className="text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Target improvement in GrammarlyGO retention within 6 months
              </p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 text-center">
              <div className="text-4xl md:text-5xl font-black text-blue-400 mb-4">$5.7M+</div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Revenue Recovery
              </h3>
              <p className="text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Potential value recovery from improved user engagement
              </p>
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
