"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaUserFriends,
  FaPaintBrush,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function UXUIPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="pt-20">
      {/* UX/UI Hero Section */}
      <div className="bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Creating Intuitive Digital{" "}
              <span className="text-blue-500">Experiences</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-700 mb-8 leading-relaxed"
            >
              I blend aesthetic sensibility with technical expertise to create
              interfaces that are both beautiful and functional. With a
              developer&apos;s mindset, I design systems that are intuitive for
              users and practical to implement.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="#process"
                className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300 shadow-md"
              >
                My Process
                <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* UX/UI Approach */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              My Design Philosophy
            </h2>
            <p className="text-lg text-gray-700">
              Great design happens at the intersection of aesthetics,
              functionality, and technical feasibility. Here&apos;s how I
              approach the UX/UI design process:
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto text-white">
                  <FaUserFriends className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">
                  User-Centered Design
                </h3>
                <p className="text-gray-600 text-center">
                  I start with deep user research to understand needs,
                  behaviors, and pain points. Every design decision is made with
                  the end user in mind.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto text-white">
                  <FaPaintBrush className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">
                  Aesthetic & Functional
                </h3>
                <p className="text-gray-600 text-center">
                  Beautiful interfaces should also be highly usable. I create
                  designs that delight users while helping them achieve their
                  goals efficiently.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto text-white">
                  <FaRocket className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">
                  Developer-Friendly
                </h3>
                <p className="text-gray-600 text-center">
                  My background in development ensures designs are practical to
                  implement, with clean handoffs and sensible component
                  architecture.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* UX/UI Process section */}
      <section id="process" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              My UX/UI Process
            </h2>
            <p className="text-lg text-gray-700">
              A methodical approach that starts with understanding the user and
              ends with a solution that&apos;s both beautiful and functional.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 -translate-x-1/2 z-0"></div>

            <div className="relative z-10">
              {/* Process Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col md:flex-row items-center mb-16"
              >
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-bold mb-4 text-blue-500">
                    Research & Discovery
                  </h3>
                  <p className="text-gray-700">
                    I begin by asking the right questions. You cannot identify
                    the problem if you are not asking the right questions. This
                    includes user interviews and competitive analysis.
                  </p>
                </div>
                <div className="md:w-16 flex justify-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-white shadow-lg">
                    1
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/UserResearch.png"
                      alt="Research Phase"
                      width={400}
                      height={225}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Process Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col md:flex-row-reverse items-center mb-16"
              >
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 md:text-left">
                  <h3 className="text-2xl font-bold mb-4 text-blue-500">
                    Design & Prototyping
                  </h3>
                  <p className="text-gray-700">
                    From wireframes to high-fidelity mockups, I create solutions
                    that solve real problems. Interactive prototypes help
                    validate ideas before implementation.
                  </p>
                </div>
                <div className="md:w-16 flex justify-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-white shadow-lg">
                    2
                  </div>
                </div>
                <div className="md:w-1/2 md:pr-12 hidden md:block">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/Prototyping.png"
                      alt="Design Phase"
                      width={400}
                      height={225}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Process Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-bold mb-4 text-blue-500">
                    Testing & Implementation
                  </h3>
                  <p className="text-gray-700">
                    User testing validates designs, while close collaboration
                    with developers ensures successful implementation. I remain
                    involved through launch and beyond.
                  </p>
                </div>
                <div className="md:w-16 flex justify-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-white shadow-lg">
                    3
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/Testing.png"
                      alt="Testing Phase"
                      width={400}
                      height={225}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Spotify Project Showcase Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                GrammarlyGO Retention Study
              </h2>
              <p className="text-2xl text-gray-700 mb-6">
                turning one-time AI users into loyal daily writers
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/ux-ui/grammarlygo"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full hover:border-gray-400 transition-all duration-300"
                >
                  View Case Study
                </Link>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                Spotify Redesign
              </h2>
              <p className="text-2xl text-gray-700 mb-6">
                millions of clicks saved a day
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/ux-ui/spotify"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full hover:border-gray-400 transition-all duration-300"
                >
                  View Project
                </Link>
                <Link
                  href="https://www.figma.com/design/HROuWDR5pEsbKCKsZqNSyW/Personal?node-id=112-2&t=SqzgTnrOjo0heMmc-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full hover:border-gray-400 transition-all duration-300"
                >
                  View in Figma
                </Link>
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                {/* Main layout container */}
                <div className="flex flex-col md:flex-row items-start justify-between relative">
                  {/* Desktop mockup - positioned on the left */}
                  <div className="w-full md:w-[80%] z-10">
                    <Image
                      src="/Spotify_Project/Desktop-Home-Revamped.jpg"
                      alt="Spotify Desktop Redesign"
                      width={960}
                      height={540}
                      className="w-full h-auto rounded-lg"
                      style={{
                        filter: "drop-shadow(0px 5px 15px rgba(0,0,0,0.1))",
                      }}
                    />
                  </div>

                  {/* Mobile mockup - positioned on the right, with proper overlap */}
                  <div className="w-[40%] md:w-[28%] ml-auto -mt-10 md:mt-0 md:absolute md:right-0 md:top-16 z-20">
                    <Image
                      src="/Iphone-Mockup.png"
                      alt="Spotify Mobile App"
                      width={300}
                      height={600}
                      className="w-full h-auto"
                      style={{
                        filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.15))",
                      }}
                      priority
                    />
                  </div>
                </div>
              </motion.div>

              {/* Project details */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-32 max-w-3xl mx-auto"
              >
                <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
                <p className="text-gray-700 mb-6">
                  This Spotify redesign focuses on enahcning the home page on
                  mobile and desktop. Through user research, I identified pain
                  points in the current interface and created a solution that
                  reduces clicks and boosts user satisfaction while maintaining
                  the familiar Spotify experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-bold mb-2">Challenge</h4>
                    <p className="text-gray-700 text-sm">
                      Improve navigation efficiency while maintaining
                      familiarity
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-bold mb-2">My Role</h4>
                    <p className="text-gray-700 text-sm">
                      UX Research, UI Design, Prototyping
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-bold mb-2">Outcome</h4>
                    <p className="text-gray-700 text-sm">
                      Millions of clicks saved a day, Top use cases accessible
                      from home page, 100% increase in user satisfaction
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* UX/UI Portfolio CTA section */}
      <section className="py-20 bg-blue-500 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              View my Development Work
            </h2>
            <p className="text-xl mb-10 text-blue-100">
              Check out my software development projects to see how I bridge
              design and code to be in both worlds
            </p>
            <Link
              href="/dev"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-500 font-medium rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              View Development Projects
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
