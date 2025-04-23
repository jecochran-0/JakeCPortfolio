"use client";

import React, { useState } from "react";
// Import icons individually to reduce bundle size
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { FaAccessibleIcon } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";
import { TbBrandOpenai } from "react-icons/tb";
import { BsDatabaseCheck } from "react-icons/bs";
import { motion } from "framer-motion";

// Simple rating component without memo or animations
const SkillRating = ({ level }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`${i < level ? "text-blue-500" : "text-gray-300"} text-sm`}
        />
      ))}
    </div>
  );
};

const Skills = ({ showOnly }) => {
  const [selectedUXCategory, setSelectedUXCategory] = useState("all-ux");
  const [selectedDevCategory, setSelectedDevCategory] = useState("all-dev");

  // UX/UI Design skills
  const uxSkillsData = [
    {
      name: "UI Design",
      icon: <FaPalette />,
      category: "design",
      level: 4,
    },
    {
      name: "UX Design",
      icon: <MdDesignServices />,
      category: "design",
      level: 4,
    },
    {
      name: "Information Architecture",
      icon: <FaGitAlt />,
      category: "research",
      level: 3,
    },
    {
      name: "Interaction Design",
      icon: <SiFramer />,
      category: "design",
      level: 3,
    },
    {
      name: "Accessibility (a11y)",
      icon: <FaAccessibleIcon />,
      category: "research",
      level: 4,
    },
    {
      name: "Frontend Development",
      icon: <FaHtml5 />,
      category: "design-tools",
      level: 5,
    },
    {
      name: "Analytics & Data",
      icon: <BiCodeAlt />,
      category: "research",
      level: 4,
    },
    {
      name: "Design Systems",
      icon: <MdDesignServices />,
      category: "design-tools",
      level: 4,
    },
    {
      name: "User Research",
      icon: <FaUserCheck />,
      category: "research",
      level: 3,
    },
    {
      name: "Wireframing",
      icon: <BiCodeAlt />,
      category: "design",
      level: 5,
    },
    {
      name: "Prototyping",
      icon: <SiFramer />,
      category: "design-tools",
      level: 5,
    },
    {
      name: "Figma",
      icon: <FaFigma />,
      category: "design-tools",
      level: 5,
    },
  ];

  // Software Development skills
  const devSkillsData = [
    {
      name: "JavaScript",
      icon: <FaJsSquare />,
      category: "frontend",
      level: 5,
    },
    {
      name: "React.js",
      icon: <FaReact />,
      category: "frontend",
      level: 5,
    },
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      category: "frontend",
      level: 4,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      category: "frontend",
      level: 4,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      category: "frontend",
      level: 3,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      category: "backend",
      level: 3,
    },
    {
      name: "Java",
      icon: <FaJava />,
      category: "backend",
      level: 3,
    },
    {
      name: "SQL",
      icon: <BsDatabaseCheck />,
      category: "backend",
      level: 2,
    },
    {
      name: "RESTful APIs",
      icon: <BiCodeAlt />,
      category: "backend",
      level: 4,
    },
    {
      name: "Redux",
      icon: <SiRedux />,
      category: "frontend",
      level: 2,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      category: "frontend",
      level: 3,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      category: "frontend",
      level: 4,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      category: "tools",
      level: 5,
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      category: "tools",
      level: 5,
    },
    {
      name: "AI Prompting",
      icon: <TbBrandOpenai />,
      category: "tools",
      level: 5,
    },
    {
      name: "Agile",
      icon: <BiCodeAlt />,
      category: "tools",
      level: 3,
    },
    {
      name: "Jira",
      icon: <SiJira />,
      category: "tools",
      level: 3,
    },
  ];

  // UX/UI Categories
  const uxCategories = [
    { id: "all-ux", name: "All UX Skills" },
    { id: "design", name: "Design" },
    { id: "design-tools", name: "Design Tools" },
    { id: "research", name: "Research" },
  ];

  // Development Categories
  const devCategories = [
    { id: "all-dev", name: "All Dev Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tools", name: "Tools" },
  ];

  // Filter skills based on selected categories
  const filteredUXSkills =
    selectedUXCategory === "all-ux"
      ? uxSkillsData
      : uxSkillsData.filter((skill) => skill.category === selectedUXCategory);

  const filteredDevSkills =
    selectedDevCategory === "all-dev"
      ? devSkillsData
      : devSkillsData.filter((skill) => skill.category === selectedDevCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  // Hide the title if we're on a dedicated skills page
  const showTitle = !showOnly;

  return (
    <section id="skills-section" className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        {showTitle && (
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16 text-gray-900"
          >
            My Skills
          </motion.h2>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* UX/UI Design Side - Only show if showOnly is undefined or "ux" */}
          {(!showOnly || showOnly === "ux") && (
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-500 text-center">
                UX/UI Design
              </h3>

              {/* UX Category tabs */}
              <div className="flex justify-center flex-wrap gap-2 mb-8">
                {uxCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedUXCategory(category.id)}
                    className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                      selectedUXCategory === category.id
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* UX/UI Skills grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              >
                {filteredUXSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="bg-white border border-gray-200 p-4 rounded-xl flex flex-col items-center text-center transition-all duration-300
                      hover:shadow-md hover:border-blue-300"
                  >
                    <div className="text-3xl sm:text-4xl text-blue-500 mb-2">
                      {skill.icon}
                    </div>
                    <h3 className="font-medium text-sm sm:text-base mb-1">
                      {skill.name}
                    </h3>
                    <SkillRating level={skill.level} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}

          {/* Software Development Side - Only show if showOnly is undefined or "dev" */}
          {(!showOnly || showOnly === "dev") && (
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-500 text-center">
                Software Development
              </h3>

              {/* Dev Category tabs */}
              <div className="flex justify-center flex-wrap gap-2 mb-8">
                {devCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedDevCategory(category.id)}
                    className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                      selectedDevCategory === category.id
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Dev Skills grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              >
                {filteredDevSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="bg-white border border-gray-200 p-4 rounded-xl flex flex-col items-center text-center transition-all duration-300
                      hover:shadow-md hover:border-blue-300"
                  >
                    <div className="text-3xl sm:text-4xl text-blue-500 mb-2">
                      {skill.icon}
                    </div>
                    <h3 className="font-medium text-sm sm:text-base mb-1">
                      {skill.name}
                    </h3>
                    <SkillRating level={skill.level} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Set default props
Skills.defaultProps = {
  showOnly: null,
};

export default Skills;
