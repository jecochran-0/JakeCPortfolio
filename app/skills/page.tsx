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
        {/* Top Left Branding */}
        <motion.div
          className="fixed top-8 left-8 z-20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link href="/">
            <motion.div
              className="px-4 py-2 rounded-lg cursor-pointer"
              style={{ backgroundColor: "#B4323B" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span
                className="text-white font-black text-lg tracking-wider uppercase"
                style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
              >
                Jake Cochran
              </span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Top Navigation */}
        <motion.div
          className="fixed top-8 right-8 z-20 flex items-center space-x-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.a
            href="/"
            className="px-4 py-2 border border-white/30 text-white hover:text-gray-300 hover:border-white/50 transition-all duration-300 font-light text-sm tracking-wider rounded-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Go to homepage"
          >
            HOME
          </motion.a>
          <motion.a
            href="/about"
            className="px-4 py-2 border border-white/30 text-white hover:text-gray-300 hover:border-white/50 transition-all duration-300 font-light text-sm tracking-wider rounded-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Go to about page"
          >
            ABOUT
          </motion.a>
          <motion.a
            href="/dev"
            className="px-4 py-2 border border-white/30 text-white hover:text-gray-300 hover:border-white/50 transition-all duration-300 font-light text-sm tracking-wider rounded-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Go to development page"
          >
            WORK
          </motion.a>
          <motion.a
            href="/contact"
            className="px-4 py-2 border border-white/30 text-white hover:text-gray-300 hover:border-white/50 transition-all duration-300 font-light text-sm tracking-wider rounded-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Go to contact page"
          >
            CONTACT
          </motion.a>
        </motion.div>

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

      </div>
    </div>
  );
}
