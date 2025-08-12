"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaFigma, FaMobile, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { memo, useMemo, useState, useEffect } from "react";

// Memoized skill group component for performance - Zero Flicker
const SkillGroup = memo(({ skillGroup, index, isMobile }) => {
  // Mobile-optimized animation variants - simplified for zero flicker
  const animationVariants = useMemo(() => {
    const fastMode = isMobile;

    return {
      container: {
        initial: { opacity: 0, y: fastMode ? 15 : 20 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: fastMode ? 0.25 : 0.3,
          delay: index * (fastMode ? 0.03 : 0.05),
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
      hover: fastMode
        ? {}
        : {
            scale: 1.005,
            y: -2,
            transition: {
              duration: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
      skillItem: {
        initial: { opacity: 0, x: fastMode ? -8 : -10 },
        animate: { opacity: 1, x: 0 },
        transition: (skillIndex) => ({
          duration: fastMode ? 0.15 : 0.2,
          delay:
            index * (fastMode ? 0.03 : 0.05) +
            skillIndex * (fastMode ? 0.01 : 0.02),
          ease: [0.25, 0.46, 0.45, 0.94],
        }),
      },
    };
  }, [index, isMobile]);

  return (
    <motion.div
      initial={animationVariants.container.initial}
      whileInView={animationVariants.container.animate}
      transition={animationVariants.container.transition}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={animationVariants.hover}
      className="card-brutal group cursor-pointer relative overflow-hidden w-full min-h-[280px] sm:min-h-[300px]"
      style={{
        willChange: "transform, opacity",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
    >
      {/* Brutalist accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5 sm:h-2"
        style={{ background: skillGroup.color }}
      />

      {/* Icon and Title */}
      <div className="flex items-center mb-4 sm:mb-6">
        <div
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mr-3 sm:mr-4 border-3 sm:border-4 border-black flex-shrink-0"
          style={{
            background: skillGroup.color,
            willChange: "transform",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
        >
          <skillGroup.icon
            className="text-white text-lg sm:text-xl"
            style={{ color: "#ffffff" }}
          />
        </div>
        <h3 className="text-base sm:text-lg font-bold text-black leading-tight">
          {skillGroup.category}
        </h3>
      </div>

      {/* Skills List */}
      <div className="space-y-2 sm:space-y-3">
        {skillGroup.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill}
            className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 min-h-[44px]"
            initial={animationVariants.skillItem.initial}
            whileInView={animationVariants.skillItem.animate}
            transition={animationVariants.skillItem.transition(skillIndex)}
            viewport={{ once: true }}
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
            }}
          >
            <div
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full flex-shrink-0"
              style={{ background: skillGroup.color }}
            />
            <span className="text-sm sm:text-base text-gray-900 hover:text-black transition-colors duration-200 font-medium">
              {skill}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Hover effect overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
        style={{
          background: skillGroup.color,
          willChange: "opacity",
        }}
      />
    </motion.div>
  );
});

SkillGroup.displayName = "SkillGroup";

// Memoized skills data for performance
const skills = [
  {
    category: "Frontend Development",
    icon: FaReact,
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "TypeScript", "Redux"],
    color: "#ff6b35",
    iconColor: "#61DAFB",
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
    ],
    color: "#4ecdc4",
    iconColor: "#F24E1E",
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
    ],
    color: "#45b7d1",
    iconColor: "#68A063",
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
    ],
    color: "#f7b731",
    iconColor: "#06B6D4",
  },
  {
    category: "Version Control & Tools",
    icon: FaGitAlt,
    skills: ["Git", "GitHub", "Agile", "Jira", "Project Management"],
    color: "#26de81",
    iconColor: "#F05032",
  },
  {
    category: "Additional Skills",
    icon: FaMobile,
    skills: [
      "Mobile-First Design",
      "Performance Optimization",
      "Cross-browser Testing",
      "Accessibility",
    ],
    color: "#fc5c65",
    iconColor: "#00D4AA",
  },
];

export default memo(function Skills() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-none"
      style={{
        willChange: "contents",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
    >
      {skills.map((skillGroup, index) => (
        <SkillGroup
          key={skillGroup.category}
          skillGroup={skillGroup}
          index={index}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
});
