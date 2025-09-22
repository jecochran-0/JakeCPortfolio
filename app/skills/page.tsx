"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaFigma, FaMobile, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function SkillsPage() {
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
      className="min-h-screen py-20 px-6"
      style={{ backgroundColor: "#171717" }}
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Navigation */}
        <nav className="flex items-center justify-between">
          <Link href="/">
            <motion.div
              className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors duration-200"
              whileHover={{ x: -5 }}
            >
              <FaArrowRight size={16} className="rotate-180" />
              <span style={{ fontFamily: "Montserrat, sans-serif" }}>
                Back to Home
              </span>
            </motion.div>
          </Link>
        </nav>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h1
            className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-none"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            SKILLS
          </h1>
          <p
            className="text-2xl text-gray-300 leading-relaxed max-w-4xl"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            A comprehensive overview of my technical capabilities across
            development and design disciplines.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-32">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
            >
              {/* Category Header - Left Column */}
              <div className="lg:col-span-3 space-y-6">
                <div
                  className="w-20 h-20 rounded-lg flex items-center justify-center mb-6"
                  style={{
                    backgroundColor: "#CD535A",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  <category.icon className="text-white text-3xl" />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-white leading-tight"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {category.category}
                </h2>
              </div>

              {/* Skills List - Right Column */}
              <div className="lg:col-span-9">
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-8">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + skillIndex * 0.03,
                      }}
                      className="flex items-center gap-4"
                    >
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "#CD535A" }}
                      />
                      <span
                        className="text-xl text-gray-300 font-medium"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Separator */}
              {index < skillCategories.length - 1 && (
                <div className="col-span-full pt-16 border-b border-white/20" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Experience Levels Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-24 border-t border-white/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Header */}
            <div className="lg:col-span-3">
              <h2
                className="text-3xl md:text-4xl font-bold text-white leading-tight"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                EXPERIENCE LEVELS
              </h2>
            </div>

            {/* Experience Grid */}
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div
                      className="w-12 h-1"
                      style={{ backgroundColor: "#CD535A" }}
                    />
                    <h3
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      EXPERT
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <span
                        className="text-lg text-gray-300 block"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        React.js
                      </span>
                      <span
                        className="text-lg text-gray-300 block"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        JavaScript
                      </span>
                      <span
                        className="text-lg text-gray-300 block"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        TypeScript
                      </span>
                      <span
                        className="text-lg text-gray-300 block"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Figma
                      </span>
                      <span
                        className="text-lg text-gray-300 block"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        UI/UX Design
                      </span>
                      <span
                        className="text-lg text-gray-300 block"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Tailwind CSS
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <div
                      className="w-12 h-1"
                      style={{ backgroundColor: "#CD535A" }}
                    />
                    <h3
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      PROFICIENT
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <span
                        className="text-lg text-gray-300 block"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Node.js
                      </span>
                      <span
                        className="text-lg text-gray-300 block"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Next.js
                      </span>
                      <span
                        className="text-lg text-gray-300 block"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Git
                      </span>
                      <span
                        className="text-lg text-gray-300 block"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        User Research
                      </span>
                      <span
                        className="text-lg text-gray-300 block"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Prototyping
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <div
                      className="w-12 h-1"
                      style={{ backgroundColor: "#CD535A" }}
                    />
                    <h3
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      EXPERIENCED
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <span
                        className="text-lg text-gray-300 block"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Express
                      </span>
                      <span
                        className="text-lg text-gray-300 block"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        MongoDB
                      </span>
                      <span
                        className="text-lg text-gray-300 block"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        RESTful APIs
                      </span>
                      <span
                        className="text-lg text-gray-300 block"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Performance Optimization
                      </span>
                      <span
                        className="text-lg text-gray-300 block"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        SEO
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
