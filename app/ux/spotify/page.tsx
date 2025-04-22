"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  FileText,
  Monitor,
  Smartphone,
  ArrowLeft,
} from "lucide-react";

export default function SpotifyCaseStudy() {
  const [selectedView, setSelectedView] = useState("overview");
  const [deviceType, setDeviceType] = useState("desktop");

  const caseStudyFiles = {
    desktop: {
      old: {
        home: "/Spotify_CaseStudy/Desktop_Old_Home.pdf",
        breakdown: "/Spotify_CaseStudy/Desktop_Old_Breakdown.pdf",
      },
      new: {
        home: "/Spotify_CaseStudy/Desktop_Home_New.pdf",
        breakdown: "/Spotify_CaseStudy/Desktop_New_Breakdown.pdf",
      },
    },
    mobile: {
      old: {
        home: "/Spotify_CaseStudy/Mobile_Home_Old.pdf",
        breakdown: "/Spotify_CaseStudy/Mobile_Old_Breakdown.pdf",
      },
      new: {
        home: "/Spotify_CaseStudy/Mobile_Home_New.pdf",
        breakdown: "/Spotify_CaseStudy/New_Mobile_Breakdown.pdf",
      },
    },
    flow: "/Spotify_CaseStudy/Flow_Breakdown.pdf",
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Header with background */}
      <div className="relative w-full h-[30vh] md:h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-green-900/20">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url(/SpotifyBackground.png)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/50 to-neutral-900" />
        </div>

        {/* Back button */}
        <div className="absolute top-4 left-4 z-10">
          <Link
            href="/#ux-projects-section"
            className="flex items-center gap-2 text-white hover:text-green-400 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to projects</span>
          </Link>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Spotify UX Redesign
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl"
          >
            A comprehensive redesign focusing on improving navigation, content
            discovery, and user engagement
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Project overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-4">
                This case study explores a redesign of Spotify's interface to
                address user pain points around navigation, content discovery,
                and playlist management. The project included extensive user
                research, wireframing, prototyping, and visual design phases.
              </p>
              <p className="text-gray-300 mb-4">
                The redesign aims to improve the overall user experience while
                maintaining Spotify's brand identity and aesthetics. Key
                improvements focus on streamlining the navigation structure,
                enhancing content discovery features, and making playlist
                management more intuitive.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-3">Key Improvements</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>
                    Simplified navigation structure for easier access to key
                    features
                  </li>
                  <li>
                    Enhanced content discovery through improved recommendation
                    algorithms
                  </li>
                  <li>
                    Redesigned player interface for better usability across
                    devices
                  </li>
                  <li>
                    Streamlined playlist management with intuitive controls
                  </li>
                  <li>
                    Consistent design language across desktop and mobile
                    platforms
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-neutral-800 rounded-xl p-6 h-fit">
              <h3 className="text-xl font-bold mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-green-400 font-medium">Timeline</h4>
                  <p className="text-gray-300">
                    8 weeks (Research, Design, Prototyping, Testing)
                  </p>
                </div>
                <div>
                  <h4 className="text-green-400 font-medium">My Role</h4>
                  <p className="text-gray-300">
                    UX/UI Designer, User Researcher
                  </p>
                </div>
                <div>
                  <h4 className="text-green-400 font-medium">Tools Used</h4>
                  <p className="text-gray-300">
                    Figma, Adobe XD, Usability Hub
                  </p>
                </div>
                <div>
                  <h4 className="text-green-400 font-medium">Deliverables</h4>
                  <p className="text-gray-300">
                    User Research, Wireframes, Hi-Fi Mockups, Interactive
                    Prototypes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case study content viewer */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Case Study</h2>

          {/* Navigation tabs */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => setSelectedView("overview")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors 
                ${
                  selectedView === "overview"
                    ? "bg-green-600 text-white"
                    : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
                }`}
            >
              Overview
            </button>
            <button
              onClick={() => setSelectedView("before-after")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors 
                ${
                  selectedView === "before-after"
                    ? "bg-green-600 text-white"
                    : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
                }`}
            >
              Before & After
            </button>
            <button
              onClick={() => setSelectedView("user-flow")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors 
                ${
                  selectedView === "user-flow"
                    ? "bg-green-600 text-white"
                    : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
                }`}
            >
              User Flow
            </button>
          </div>

          {/* Device type selector (only for before-after view) */}
          {selectedView === "before-after" && (
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => setDeviceType("desktop")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors 
                  ${
                    deviceType === "desktop"
                      ? "bg-white text-black"
                      : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
                  }`}
              >
                <Monitor size={16} />
                Desktop
              </button>
              <button
                onClick={() => setDeviceType("mobile")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors 
                  ${
                    deviceType === "mobile"
                      ? "bg-white text-black"
                      : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
                  }`}
              >
                <Smartphone size={16} />
                Mobile
              </button>
            </div>
          )}

          {/* Content viewer */}
          <div className="bg-neutral-800 rounded-xl p-4 md:p-6">
            {/* Overview view */}
            {selectedView === "overview" && (
              <div className="text-gray-300 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">
                    Problem Statement
                  </h3>
                  <p>
                    Despite Spotify's popularity, users reported difficulties
                    with navigation, content discovery, and playlist management.
                    The challenge was to redesign the interface to address these
                    pain points while maintaining the platform's familiar feel
                    and brand identity.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">
                    Research Methodology
                  </h3>
                  <p>
                    The research phase involved user interviews, competitive
                    analysis, and usability testing of the existing interface.
                    Key findings revealed that users struggled with:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Finding specific content in large libraries</li>
                    <li>Navigating between different sections of the app</li>
                    <li>Managing playlists efficiently</li>
                    <li>
                      Discovering new music beyond algorithmic recommendations
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">
                    Design Process
                  </h3>
                  <p>
                    The design process followed a user-centered approach with
                    the following steps:
                  </p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>User research and persona development</li>
                    <li>Information architecture restructuring</li>
                    <li>Wireframing key screens and user flows</li>
                    <li>Creating high-fidelity mockups</li>
                    <li>Prototyping and usability testing</li>
                    <li>Iterating based on user feedback</li>
                  </ol>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">
                    Key Solutions
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <span className="font-medium text-green-400">
                        Simplified Navigation:
                      </span>{" "}
                      Reduced the number of primary navigation items and
                      reorganized the information architecture
                    </li>
                    <li>
                      <span className="font-medium text-green-400">
                        Enhanced Search:
                      </span>{" "}
                      Improved search functionality with filters and contextual
                      results
                    </li>
                    <li>
                      <span className="font-medium text-green-400">
                        Content Discovery:
                      </span>{" "}
                      Added curated content sections and personalized
                      recommendations
                    </li>
                    <li>
                      <span className="font-medium text-green-400">
                        Playlist Management:
                      </span>{" "}
                      Redesigned playlist creation and editing workflows
                    </li>
                    <li>
                      <span className="font-medium text-green-400">
                        Cross-Platform Consistency:
                      </span>{" "}
                      Ensured design consistency across desktop and mobile
                      platforms
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">
                    Results & Impact
                  </h3>
                  <p>
                    Usability testing with the new design showed significant
                    improvements:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>30% reduction in time to complete common tasks</li>
                    <li>
                      85% of users reported improved satisfaction with
                      navigation
                    </li>
                    <li>70% increase in engagement with discovery features</li>
                    <li>
                      Consistent experience across devices led to 25% more
                      cross-platform usage
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Before & After view */}
            {selectedView === "before-after" && (
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4">
                    Home Screen Comparison
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Before */}
                    <div className="space-y-3">
                      <h4 className="text-xl font-medium text-gray-400">
                        Before
                      </h4>
                      <a
                        href={
                          deviceType === "desktop"
                            ? caseStudyFiles.desktop.old.home
                            : caseStudyFiles.mobile.old.home
                        }
                        target="_blank"
                        className="block h-64 md:h-80 relative bg-neutral-700 rounded-lg overflow-hidden border border-neutral-600 hover:border-green-500 transition-colors"
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <FileText size={24} className="text-gray-400" />
                          <span className="ml-2 text-gray-300">View PDF</span>
                        </div>
                      </a>
                      <p className="text-sm text-gray-400">
                        The original {deviceType} home screen had issues with
                        content organization and visual hierarchy.
                      </p>
                    </div>

                    {/* After */}
                    <div className="space-y-3">
                      <h4 className="text-xl font-medium text-green-400">
                        After
                      </h4>
                      <a
                        href={
                          deviceType === "desktop"
                            ? caseStudyFiles.desktop.new.home
                            : caseStudyFiles.mobile.new.home
                        }
                        target="_blank"
                        className="block h-64 md:h-80 relative bg-neutral-700 rounded-lg overflow-hidden border border-neutral-600 hover:border-green-500 transition-colors"
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <FileText size={24} className="text-gray-400" />
                          <span className="ml-2 text-gray-300">View PDF</span>
                        </div>
                      </a>
                      <p className="text-sm text-gray-400">
                        The redesigned {deviceType} home screen improves content
                        discovery and visual hierarchy.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Detailed Breakdown
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Before */}
                    <div className="space-y-3">
                      <h4 className="text-xl font-medium text-gray-400">
                        Before
                      </h4>
                      <a
                        href={
                          deviceType === "desktop"
                            ? caseStudyFiles.desktop.old.breakdown
                            : caseStudyFiles.mobile.old.breakdown
                        }
                        target="_blank"
                        className="block h-64 md:h-80 relative bg-neutral-700 rounded-lg overflow-hidden border border-neutral-600 hover:border-green-500 transition-colors"
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <FileText size={24} className="text-gray-400" />
                          <span className="ml-2 text-gray-300">View PDF</span>
                        </div>
                      </a>
                      <p className="text-sm text-gray-400">
                        Detailed analysis of the original {deviceType}{" "}
                        interface's pain points and usability issues.
                      </p>
                    </div>

                    {/* After */}
                    <div className="space-y-3">
                      <h4 className="text-xl font-medium text-green-400">
                        After
                      </h4>
                      <a
                        href={
                          deviceType === "desktop"
                            ? caseStudyFiles.desktop.new.breakdown
                            : caseStudyFiles.mobile.new.breakdown
                        }
                        target="_blank"
                        className="block h-64 md:h-80 relative bg-neutral-700 rounded-lg overflow-hidden border border-neutral-600 hover:border-green-500 transition-colors"
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <FileText size={24} className="text-gray-400" />
                          <span className="ml-2 text-gray-300">View PDF</span>
                        </div>
                      </a>
                      <p className="text-sm text-gray-400">
                        Comprehensive breakdown of the redesigned {deviceType}{" "}
                        interface with key improvements highlighted.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* User Flow view */}
            {selectedView === "user-flow" && (
              <div>
                <h3 className="text-2xl font-bold mb-4">User Flow Analysis</h3>
                <p className="text-gray-300 mb-6">
                  This document provides a detailed analysis of the redesigned
                  user flows, focusing on common tasks and how the new interface
                  improves the user journey.
                </p>
                <a
                  href={caseStudyFiles.flow}
                  target="_blank"
                  className="block h-64 md:h-96 relative bg-neutral-700 rounded-lg overflow-hidden border border-neutral-600 hover:border-green-500 transition-colors"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText size={24} className="text-gray-400" />
                    <span className="ml-2 text-gray-300">
                      View User Flow PDF
                    </span>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Conclusion */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
          <div className="bg-neutral-800 rounded-xl p-6">
            <p className="text-gray-300 mb-4">
              The Spotify redesign project successfully addressed key user pain
              points while maintaining the platform's core identity. Through
              careful research, iterative design, and user testing, the new
              interface provides a more intuitive and enjoyable experience.
            </p>
            <p className="text-gray-300 mb-4">
              Key achievements include a simplified navigation structure,
              enhanced content discovery features, and improved cross-platform
              consistency. User testing validated these improvements with
              significant gains in task completion times and overall
              satisfaction.
            </p>
            <p className="text-gray-300">
              This case study demonstrates how thoughtful UX design can enhance
              an already successful product by focusing on user needs and pain
              points, ultimately leading to a more engaging and satisfying
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
