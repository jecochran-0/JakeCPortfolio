"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaComments,
  FaBrain,
  FaUserFriends,
  FaClock,
  FaCheck,
} from "react-icons/fa";

const SoftSkills = () => {
  const communicationSkills = [
    "Clear and concise verbal communication",
    "Active listening and feedback incorporation",
    "Technical concept explanation to non-technical audiences",
    "Effective written documentation",
  ];

  const problemSolvingSkills = [
    "Analytical thinking and root cause analysis",
    "Creative solution development",
    "Debugging and troubleshooting",
    "Decision-making under pressure",
  ];

  const teamworkSkills = [
    "Collaborative project execution",
    "Constructive feedback exchange",
    "Cross-functional team coordination",
    "Conflict resolution and mediation",
  ];

  const workEthicSkills = [
    "Self-motivated and proactive approach",
    "Deadline adherence and time management",
    "Attention to detail and quality focus",
    "Continuous learning and improvement",
  ];

  return (
    <section id="soft-skills-section" className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-gray-900"
        >
          Soft Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Communication skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <FaComments className="text-2xl text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Communication
              </h3>
            </div>
            <ul className="space-y-4">
              {communicationSkills.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="flex items-center"
                >
                  <span className="mr-3 text-blue-500">
                    <FaCheck />
                  </span>
                  <span className="flex-grow text-gray-700">{skill}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Problem-solving skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <FaBrain className="text-2xl text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Problem Solving
              </h3>
            </div>
            <ul className="space-y-4">
              {problemSolvingSkills.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="flex items-center"
                >
                  <span className="mr-3 text-blue-500">
                    <FaCheck />
                  </span>
                  <span className="flex-grow text-gray-700">{skill}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Teamwork skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <FaUserFriends className="text-2xl text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Teamwork</h3>
            </div>
            <ul className="space-y-4">
              {teamworkSkills.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="flex items-center"
                >
                  <span className="mr-3 text-blue-500">
                    <FaCheck />
                  </span>
                  <span className="flex-grow text-gray-700">{skill}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Work ethic skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <FaClock className="text-2xl text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Work Ethic</h3>
            </div>
            <ul className="space-y-4">
              {workEthicSkills.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="flex items-center"
                >
                  <span className="mr-3 text-blue-500">
                    <FaCheck />
                  </span>
                  <span className="flex-grow text-gray-700">{skill}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
