"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaGithub, FaFigma } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function SpotifyProjectPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <Link
              href="/ux-ui"
              className="inline-flex items-center text-green-400 mb-8 hover:text-green-300 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Back to UX/UI Projects
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
              Spotify Redesign
            </h1>
            <p className="text-2xl text-gray-300 mb-8">
              millions of clicks saved a day
            </p>
          </motion.div>
        </div>
      </div>

      {/* Project Showcase */}
      <div className="bg-gradient-to-b from-black to-gray-900 text-white pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative max-w-5xl mx-auto -mt-4"
          >
            {/* Main layout container */}
            <div className="flex flex-col md:flex-row items-start justify-between relative">
              {/* Desktop mockup - positioned on the left */}
              <div className="w-full md:w-[75%] z-10 md:pr-4">
                <Image
                  src="/Spotify_Project/Desktop-Home-Revamped.png"
                  alt="Spotify Desktop Redesign"
                  width={960}
                  height={540}
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Mobile mockup - positioned on the right */}
              <div className="w-[35%] md:w-[25%] ml-auto -mt-10 md:mt-0 md:absolute md:right-0 md:top-20 z-20">
                <Image
                  src="/Spotify_Project/Iphone-Mockup.png"
                  alt="Spotify Mobile App"
                  width={300}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="https://www.figma.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300"
              >
                <FaFigma className="mr-2" /> View in Figma
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full hover:border-gray-400 transition-all duration-300"
              >
                <FaGithub className="mr-2" /> View Code
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                This Spotify redesign focuses on simplifying navigation and
                enhancing discovery. Through user research, I identified pain
                points in the current interface and created a solution that
                reduces clicks while maintaining the familiar Spotify
                experience.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h4 className="font-bold mb-2">Timeline</h4>
                  <p className="text-gray-700">6 weeks</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h4 className="font-bold mb-2">My Role</h4>
                  <p className="text-gray-700">
                    UX Research, UI Design, Prototyping
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h4 className="font-bold mb-2">Tools Used</h4>
                  <p className="text-gray-700">
                    Figma, Sketch, Principle, UsabilityHub
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Spotify&apos;s interface, while iconic, presented several user
                experience challenges:
              </p>
              <ul className="list-disc pl-6 text-gray-700 text-lg mb-12 space-y-2">
                <li>
                  Navigation required too many clicks to access frequently used
                  features
                </li>
                <li>
                  Music discovery was hindered by an overly complex interface
                </li>
                <li>Mobile and desktop experiences felt disconnected</li>
                <li>
                  Users struggled to find their recent searches and quickly
                  access content
                </li>
              </ul>

              {/* Planning Image */}
              <div className="mb-20">
                <h3 className="text-xl font-bold mb-4">Planning Process</h3>
                <div className="overflow-hidden border border-gray-200 rounded-lg max-w-4xl mx-auto">
                  <Image
                    src="/Spotify_Project/Planning.png"
                    alt="Spotify Redesign Planning Process"
                    width={1200}
                    height={700}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">The Process</h2>
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-xl font-bold mb-3">1. Research</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I conducted user interviews with 12 active Spotify users,
                    ranging from casual to power users. Through competitive
                    analysis of other music streaming platforms and heatmap
                    studies, I identified key areas where users experienced
                    friction.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">
                    2. Information Architecture
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    I restructured the navigation and content hierarchy to
                    prioritize frequently used features and reduce the cognitive
                    load. This involved card sorting exercises with users to
                    ensure the new organization matched their mental models.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">
                    3. Wireframing & Design
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Starting with low-fidelity wireframes, I explored multiple
                    navigation patterns before settling on a streamlined
                    approach that maintained Spotify&apos;s iconic look while
                    improving usability. The high-fidelity designs preserved the
                    dark theme but enhanced readability and touch targets.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">
                    4. Testing & Iteration
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Prototype testing with 8 users revealed an 87% completion
                    rate for common tasks (up from 72% with the original design)
                    and significantly higher satisfaction scores. I made final
                    refinements based on user feedback before delivering the
                    final design.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before and After Desktop Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Desktop Comparison</h2>

            <div className="space-y-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-4">
                  Original Desktop Interface
                </h3>
                <p className="text-gray-700 mb-8 max-w-3xl">
                  The original Spotify interface had several usability issues
                  that needed addressing.
                </p>
                <div className="mb-16 overflow-hidden border border-gray-200 rounded-lg w-full">
                  <Image
                    src="/Spotify_Project/Desktop-Home.png"
                    alt="Original Spotify Desktop Interface"
                    width={1600}
                    height={900}
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-6">Issue Breakdown:</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="overflow-hidden border border-gray-200 rounded-lg">
                      <Image
                        src="/Spotify_Project/Desktop-Breakdown.png"
                        alt="Original Spotify Desktop Interface Breakdown"
                        width={1200}
                        height={700}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="space-y-6">
                      <div className="border-l-4 border-red-500 pl-4 py-2">
                        <h5 className="font-bold text-lg">
                          Navigation Overhead
                        </h5>
                        <p className="text-gray-700">
                          Users needed 3+ clicks to navigate to frequently used
                          sections like search, requiring unnecessary steps and
                          causing friction.
                        </p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4 py-2">
                        <h5 className="font-bold text-lg">
                          Content Discoverability
                        </h5>
                        <p className="text-gray-700">
                          Recommendations were hidden below the fold, making
                          content discovery difficult for users seeking new
                          music.
                        </p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4 py-2">
                        <h5 className="font-bold text-lg">Visual Hierarchy</h5>
                        <p className="text-gray-700">
                          Poor contrast and visual hierarchy made it difficult
                          to scan the interface quickly and locate important
                          elements.
                        </p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4 py-2">
                        <h5 className="font-bold text-lg">
                          Interaction Feedback
                        </h5>
                        <p className="text-gray-700">
                          Limited visual feedback for interactive elements
                          created uncertainty during user interactions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-4">
                  Redesigned Desktop Interface
                </h3>
                <p className="text-gray-700 mb-8 max-w-3xl">
                  My redesigned interface addresses these issues while
                  maintaining Spotify&apos;s visual identity.
                </p>
                <div className="mb-16 overflow-hidden border border-gray-200 rounded-lg w-full">
                  <Image
                    src="/Spotify_Project/Desktop-Home-Revamped.png"
                    alt="Redesigned Spotify Desktop Interface"
                    width={1600}
                    height={900}
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-6">
                    Improvements Breakdown:
                  </h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="overflow-hidden border border-gray-200 rounded-lg">
                      <Image
                        src="/Spotify_Project/Desktop-Breakdown-New.png"
                        alt="Redesigned Spotify Desktop Interface Breakdown"
                        width={1200}
                        height={700}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="space-y-6">
                      <div className="border-l-4 border-green-500 pl-4 py-2">
                        <h5 className="font-bold text-lg">
                          Streamlined Navigation
                        </h5>
                        <p className="text-gray-700">
                          Reduced clicks needed for common tasks from 3 to just
                          1 or 2, with search directly accessible from any
                          screen.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4 py-2">
                        <h5 className="font-bold text-lg">
                          Enhanced Discovery
                        </h5>
                        <p className="text-gray-700">
                          Prominent placement of recommended content and a
                          redesigned &quot;Trending With Friends&quot; section
                          to facilitate music discovery.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4 py-2">
                        <h5 className="font-bold text-lg">
                          Improved Readability
                        </h5>
                        <p className="text-gray-700">
                          Enhanced contrast and spacing for better content
                          scanning, with clearer visual hierarchy to guide users
                          through the interface.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4 py-2">
                        <h5 className="font-bold text-lg">
                          Contextual Actions
                        </h5>
                        <p className="text-gray-700">
                          More intuitive interaction design with clearer
                          feedback states and contextual actions based on
                          current content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Before and After Mobile Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Mobile Comparison</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col h-full"
              >
                <h3 className="text-2xl font-bold mb-4">
                  Original Mobile Interface
                </h3>
                <p className="text-gray-700 mb-8">
                  The mobile interface suffered from similar navigation issues
                  as the desktop version.
                </p>
                <div className="mb-auto">
                  <div className="flex justify-center mb-16">
                    <div className="overflow-hidden border border-gray-200 rounded-lg w-[280px]">
                      <Image
                        src="/Spotify_Project/Mobile-Home.png"
                        alt="Original Spotify Mobile Interface"
                        width={300}
                        height={600}
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-6">Issue Breakdown:</h4>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="overflow-hidden border border-gray-200 rounded-lg">
                      <Image
                        src="/Spotify_Project/Mobile_Breakdown_Old.png"
                        alt="Original Spotify Mobile Interface Breakdown"
                        width={800}
                        height={500}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-500 pl-4 py-2">
                        <h5 className="font-bold text-lg">
                          Inefficient Search
                        </h5>
                        <p className="text-gray-700">
                          Search required multiple taps and was difficult to
                          access quickly.
                        </p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4 py-2">
                        <h5 className="font-bold text-lg">
                          Limited Content Visibility
                        </h5>
                        <p className="text-gray-700">
                          Users couldn&apos;t easily see their recent searches
                          or trending content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col h-full"
              >
                <h3 className="text-2xl font-bold mb-4">
                  Redesigned Mobile Interface
                </h3>
                <p className="text-gray-700 mb-8">
                  The redesigned mobile interface provides a more intuitive and
                  streamlined experience.
                </p>
                <div className="mb-auto">
                  <div className="flex justify-center mb-16">
                    <div className="overflow-hidden border border-gray-200 rounded-lg w-[280px]">
                      <Image
                        src="/Spotify_Project/Mobile-Home-Revamped.png"
                        alt="Redesigned Spotify Mobile Interface"
                        width={300}
                        height={600}
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-6">
                    Improvements Breakdown:
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="overflow-hidden border border-gray-200 rounded-lg">
                      <Image
                        src="/Spotify_Project/Mobile-Breakdown-New.png"
                        alt="Redesigned Spotify Mobile Interface Breakdown"
                        width={800}
                        height={500}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4 py-2">
                        <h5 className="font-bold text-lg">One-Tap Search</h5>
                        <p className="text-gray-700">
                          Prominent search bar accessible from the homepage with
                          recent searches displayed immediately.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4 py-2">
                        <h5 className="font-bold text-lg">
                          Improved Content Organization
                        </h5>
                        <p className="text-gray-700">
                          Better categorization and visibility of content with
                          dedicated &quot;Releases For You&quot; section.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-8">Results & Impact</h2>
              <p className="text-gray-700 text-lg mb-10 leading-relaxed">
                The redesigned Spotify interface delivered significant
                improvements:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="border border-gray-200 p-8 rounded-lg">
                  <h4 className="font-bold mb-3 text-green-500 text-5xl">
                    30%
                  </h4>
                  <p className="text-gray-700 text-lg">
                    Reduction in clicks for common tasks
                  </p>
                </div>
                <div className="border border-gray-200 p-8 rounded-lg">
                  <h4 className="font-bold mb-3 text-green-500 text-5xl">
                    87%
                  </h4>
                  <p className="text-gray-700 text-lg">
                    Task completion rate (up from 72%)
                  </p>
                </div>
                <div className="border border-gray-200 p-8 rounded-lg">
                  <h4 className="font-bold mb-3 text-green-500 text-5xl">
                    92%
                  </h4>
                  <p className="text-gray-700 text-lg">
                    User satisfaction rating
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">Key Learnings</h2>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                This project reinforced several key UX principles:
              </p>
              <ul className="list-disc pl-6 text-gray-700 text-lg mb-12 space-y-2">
                <li>
                  Small UI improvements can lead to significant usability gains
                </li>
                <li>
                  Maintaining brand identity while improving UX requires
                  thoughtful balance
                </li>
                <li>
                  Cross-platform consistency is essential for a seamless user
                  experience
                </li>
                <li>
                  User testing reveals unexpected insights that quantitative
                  data might miss
                </li>
              </ul>

              <div className="mt-12 text-center">
                <Link
                  href="/ux-ui"
                  className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300"
                >
                  <FaArrowLeft className="mr-2" /> Back to All Projects
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
