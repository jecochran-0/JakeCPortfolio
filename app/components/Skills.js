"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaFigma, FaMobile, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: FaReact,
      skills: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "TypeScript",
        "Redux",
        "Next.js",
      ],
    },
    {
      category: "Backend & APIs",
      icon: FaNodeJs,
      skills: [
        "Node.js",
        "RESTful APIs",
        "Express",
        "Database Design",
        "API Integration",
        "MongoDB",
      ],
    },
    {
      category: "Design & Prototyping",
      icon: FaFigma,
      skills: [
        "Figma",
        "UI Design",
        "UX Design",
        "Wireframing",
        "Prototyping",
        "User Research",
        "Design Systems",
      ],
    },
    {
      category: "Styling & Frameworks",
      icon: SiTailwindcss,
      skills: [
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design",
        "CSS Grid",
        "Flexbox",
        "Framer Motion",
      ],
    },
    {
      category: "Version Control & Tools",
      icon: FaGitAlt,
      skills: ["Git", "GitHub", "Agile", "Jira", "Project Management", "CI/CD"],
    },
    {
      category: "Additional Skills",
      icon: FaMobile,
      skills: [
        "Mobile-First Design",
        "Performance Optimization",
        "Cross-browser Testing",
        "Accessibility",
        "SEO",
      ],
    },
  ];

  return (
    <div
      className="min-h-screen py-20 px-6 space-y-16"
      style={{ backgroundColor: "#171717" }}
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            SKILLS
          </h2>
          <p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            A comprehensive overview of my technical capabilities across
            development and design disciplines.
          </p>
        </motion.div>
      </div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto space-y-20">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="space-y-8"
          >
            {/* Category Header */}
            <div className="flex items-center gap-6">
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: "#CD535A",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                <category.icon className="text-white text-2xl" />
              </div>
              <h3
                className="text-2xl md:text-3xl font-bold text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {category.category}
              </h3>
            </div>

            {/* Skills List */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1 + skillIndex * 0.05,
                  }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#CD535A" }}
                  />
                  <span
                    className="text-lg text-gray-300"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Separator */}
            {index < skillCategories.length - 1 && (
              <div className="pt-8 border-b border-white/20" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-12 border-t border-white/20 space-y-8"
        >
          <h3
            className="text-2xl md:text-3xl font-bold text-white text-center"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            EXPERIENCE LEVELS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <h4
                className="text-xl font-bold text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                EXPERT
              </h4>
              <div className="space-y-3">
                <p
                  className="text-lg text-gray-300"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  React.js • JavaScript • TypeScript
                </p>
                <p
                  className="text-lg text-gray-300"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Figma • UI/UX Design • Tailwind CSS
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <h4
                className="text-xl font-bold text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                PROFICIENT
              </h4>
              <div className="space-y-3">
                <p
                  className="text-lg text-gray-300"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Node.js • Next.js • Git
                </p>
                <p
                  className="text-lg text-gray-300"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  User Research • Prototyping
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <h4
                className="text-xl font-bold text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                EXPERIENCED
              </h4>
              <div className="space-y-3">
                <p
                  className="text-lg text-gray-300"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Express • MongoDB • RESTful APIs
                </p>
                <p
                  className="text-lg text-gray-300"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Performance Optimization • SEO
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
