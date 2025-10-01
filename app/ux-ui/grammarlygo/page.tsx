"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GrammarlyGOCaseStudy() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "#171717" }}>
      {/* Hero Section */}
      <motion.section
        className="relative flex items-start justify-start px-4 sm:px-8 md:px-16 pt-32 sm:pt-48 md:pt-60 pb-12 sm:pb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-none mx-auto">
          <motion.div
            className="mb-12 sm:mb-16 lg:mb-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-tight tracking-tight mb-8 sm:mb-12"
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
                style={{ backgroundColor: "#CD535A", fontFamily: "Bungee, Arial Black, sans-serif" }}
              >
                Product Strategy
              </span>
              <span 
                className="px-4 py-2 text-sm font-bold uppercase tracking-wider"
                style={{ backgroundColor: "#CD535A", fontFamily: "Bungee, Arial Black, sans-serif" }}
              >
                B2C SaaS
              </span>
              <span 
                className="px-4 py-2 text-sm font-bold uppercase tracking-wider"
                style={{ backgroundColor: "#CD535A", fontFamily: "Bungee, Arial Black, sans-serif" }}
              >
                AI/ML
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
        className="px-4 sm:px-8 md:px-16 py-24 sm:py-32 lg:py-48"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-none mx-auto">
          <motion.div
            className="space-y-12 sm:space-y-16 lg:space-y-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight"
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
                  <div className="text-4xl sm:text-5xl font-black text-yellow-400 mb-4" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>Minimal</div>
                  <p 
                    className="text-gray-400 leading-relaxed text-lg font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    difference in engagement between premium and free users
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="text-4xl sm:text-5xl font-black text-blue-400 mb-4" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>High</div>
                  <p 
                    className="text-gray-400 leading-relaxed text-lg font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    user confusion between GrammarlyGO and standard corrections
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Business Impact Section */}
      <motion.section
        className="px-4 sm:px-8 md:px-16 py-24 sm:py-32 lg:py-48"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-none mx-auto">
          <motion.div
            className="space-y-12 sm:space-y-16 lg:space-y-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight"
              style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
            >
              BUSINESS IMPACT
            </h2>
            
            <div className="space-y-16 sm:space-y-20">
              <div className="space-y-8">
                <h3 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Financial Impact Analysis
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h4 
                        className="text-xl font-light text-gray-300"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Customer Acquisition Cost (CAC)
                      </h4>
                      <ul className="space-y-3 text-gray-400" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        <li className="text-lg">• $2,000,000 on ads (YouTube, Google, Instagram)</li>
                        <li className="text-lg">• $500,000 on referral programs, email campaigns</li>
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
                        CAC per user
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h4 
                        className="text-xl font-light text-gray-300"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Lifetime Value (LTV)
                      </h4>
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
                        Engaged User LTV
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
                  Impact of Disengagement
                </h3>
                
                <p 
                  className="text-gray-400 leading-relaxed text-xl max-w-5xl font-light"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  If a user tries GrammarlyGO once but doesn't engage, their average lifetime drops to 1 year:
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
                  <div className="text-center space-y-4">
                    <div 
                      className="text-2xl font-light text-white"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Engaged User
                    </div>
                    <div className="text-gray-400 text-lg">CAC: $12</div>
                    <div className="text-green-400 text-xl">LTV: $172.80</div>
                    <div className="text-green-400 text-xl font-bold">Profit: $160.80</div>
                  </div>
                  <div className="text-center space-y-4">
                    <div 
                      className="text-2xl font-light text-white"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Disengaged User
                    </div>
                    <div className="text-gray-400 text-lg">CAC: $12</div>
                    <div className="text-red-400 text-xl">LTV: $115.20</div>
                    <div className="text-red-400 text-xl font-bold">Profit: $103.20</div>
                  </div>
                  <div className="text-center space-y-4">
                    <div 
                      className="text-2xl font-light text-white"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Result
                    </div>
                    <div className="text-6xl font-black text-red-400" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>36%</div>
                    <div className="text-gray-400 text-lg">less profit per user</div>
                  </div>
                </div>
                
                <div className="text-center py-8 px-6 border border-red-400/30 rounded-lg">
                  <div className="text-6xl font-black text-red-400 mb-4" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>$5.7M</div>
                  <p 
                    className="text-gray-400 text-xl max-w-4xl mx-auto font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    At scale, if 100,000 users disengage after first use, Grammarly loses over $5.7 million in potential long-term value.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Findings Section */}
      <motion.section
        className="px-4 sm:px-8 md:px-16 py-24 sm:py-32 lg:py-48"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-none mx-auto">
          <motion.div
            className="space-y-12 sm:space-y-16 lg:space-y-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight"
              style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
            >
              KEY FINDINGS
            </h2>
            
            <div className="space-y-16 sm:space-y-20">
              <div className="space-y-8">
                <h3 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Research Summary
                </h3>
                <p 
                  className="text-gray-400 leading-relaxed text-xl max-w-5xl font-light"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Our research uncovered a core issue: users expect GrammarlyGO to act like a conversation-based assistant (like ChatGPT), but instead find a rigid tool hidden behind complex UI.
                </p>
                <p 
                  className="text-gray-400 leading-relaxed text-xl max-w-5xl font-light"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  This leads to low trust in the tool's usefulness, low visibility and discoverability, and output that feels over-edited and impersonal.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
                <div className="space-y-6">
                  <h4 
                    className="text-xl font-light text-red-400"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Expectation Mismatch
                  </h4>
                  <p 
                    className="text-gray-400 leading-relaxed text-lg font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Users expected GrammarlyGO to act like ChatGPT (conversational AI), but found a rigid rewrite tool.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <p 
                      className="text-gray-300 italic text-lg"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      "I thought this would be a chatbot like ChatGPT."
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 
                    className="text-xl font-light text-yellow-400"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Discoverability Issues
                  </h4>
                  <p 
                    className="text-gray-400 leading-relaxed text-lg font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    33% of users exited before selecting a writing mode. Users couldn't easily find or distinguish GrammarlyGO from standard features.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <p 
                      className="text-gray-300 italic text-lg"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      "I'd use it more if I didn't have to dig around to find it."
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 
                    className="text-xl font-light text-blue-400"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Output Quality Concerns
                  </h4>
                  <p 
                    className="text-gray-400 leading-relaxed text-lg font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Users wanted tweaks, not full rewrites. Output felt "robotic" and impersonal.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <p 
                      className="text-gray-300 italic text-lg"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      "It rewrote too much. I just wanted small edits."
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 
                    className="text-xl font-light text-purple-400"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Power Users Find Workarounds
                  </h4>
                  <p 
                    className="text-gray-400 leading-relaxed text-lg font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Advanced users manually customize inputs, showing need for presets or macros.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <p 
                      className="text-gray-300 italic text-lg"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      "I wanted suggestions, not full rewrites that sound weirdly robotic."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Solutions Section */}
      <motion.section
        className="px-4 sm:px-8 md:px-16 py-24 sm:py-32 lg:py-48"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-none mx-auto">
          <motion.div
            className="space-y-12 sm:space-y-16 lg:space-y-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight"
              style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
            >
              SOLUTIONS
            </h2>
            
            <div className="space-y-16 sm:space-y-20">
              <div className="space-y-8">
                <h3 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Contextual GrammarlyGO Activation
                </h3>
                <p 
                  className="text-gray-400 leading-relaxed text-xl max-w-5xl font-light"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Instead of onboarding screens, trigger GrammarlyGO at moments of struggle using ML to detect hesitation, backspacing, or long idle time. Offer GrammarlyGO with contextual suggestions based on what the user is writing.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 
                    className="text-lg font-light text-green-400 mb-3"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Why it's better:
                  </h4>
                  <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    <li>• Activated when it's needed, not before. Respects user flow.</li>
                    <li>• Ties AI to solving an immediate pain point, which builds trust.</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <h3 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Live Preview Panel with Transparent Logic
                </h3>
                <p 
                  className="text-gray-400 leading-relaxed text-xl max-w-5xl font-light"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Show GrammarlyGO's draft evolving in real time with a "why we chose this" explanation. Let users preview multiple tones or structures without rerunning prompts. Display output as a "guided draft," not a black-box result.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 
                    className="text-lg font-light text-blue-400 mb-3"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Why it's better:
                  </h4>
                  <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    <li>• Increases transparency and control.</li>
                    <li>• Mimics how tools like GitHub Copilot and ChatGPT let users feel more involved.</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <h3 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  "Start with AI" Smart Templates
                </h3>
                <p 
                  className="text-gray-400 leading-relaxed text-xl max-w-5xl font-light"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Offer AI-first document templates for common use cases (Email, outreach, follow-up, project summary). Prompted with a short form like: Who is this for? What's your message?
                </p>
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 
                    className="text-lg font-light text-purple-400 mb-3"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Why it's better:
                  </h4>
                  <ul className="space-y-2 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    <li>• Helps users generate from a blank page, the hardest moment</li>
                    <li>• Tailors output based on input, which avoids generic results</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Expected Impact Section */}
      <motion.section
        className="px-4 sm:px-8 md:px-16 py-24 sm:py-32 lg:py-48"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-none mx-auto">
          <motion.div
            className="space-y-12 sm:space-y-16 lg:space-y-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight"
              style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
            >
              EXPECTED IMPACT
            </h2>
            
            <div className="space-y-16 sm:space-y-20">
              <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
                <div className="text-center space-y-6">
                  <div className="text-6xl sm:text-7xl font-black text-green-400" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>25%</div>
                  <h3 
                    className="text-2xl font-light text-white"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Retention Improvement
                  </h3>
                  <p 
                    className="text-gray-400 text-lg font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Target improvement in GrammarlyGO retention within 6 months
                  </p>
                </div>
                <div className="text-center space-y-6">
                  <div className="text-6xl sm:text-7xl font-black text-blue-400" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>$5.7M+</div>
                  <h3 
                    className="text-2xl font-light text-white"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Revenue Recovery
                  </h3>
                  <p 
                    className="text-gray-400 text-lg font-light"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Potential value recovery from improved user engagement
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                <h3 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Business Goals
                </h3>
                <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
                  <div className="text-center space-y-4">
                    <div className="text-3xl font-black text-green-400" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>25%</div>
                    <p 
                      className="text-gray-400 text-lg font-light"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Improve GrammarlyGO retention within 6 months
                    </p>
                  </div>
                  <div className="text-center space-y-4">
                    <div className="text-3xl font-black text-blue-400" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>+</div>
                    <p 
                      className="text-gray-400 text-lg font-light"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Increase AI prompt usage per active user
                    </p>
                  </div>
                  <div className="text-center space-y-4">
                    <div className="text-3xl font-black text-purple-400" style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}>-</div>
                    <p 
                      className="text-gray-400 text-lg font-light"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Reduce user confusion between GrammarlyGO and core grammar features
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="px-4 sm:px-8 md:px-16 py-12 sm:py-16 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p 
            className="text-gray-400 text-xl font-light max-w-4xl mx-auto"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            This case study demonstrates comprehensive UX research methodology and strategic problem-solving for AI product adoption challenges.
          </p>
        </motion.div>
      </footer>
    </div>
  );
}
