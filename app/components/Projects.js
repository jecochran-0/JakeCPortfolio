"use client";

import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

// Mobile-optimized project card with better readability
const ProjectCard = ({ project, index }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calculate the grid span based on whether the project is featured
  let gridClasses = "";

  // Make Pizza Store and Wizards Chess take up more space on desktop
  if (project.title === "Pizza E-Commerce Store") {
    gridClasses = "md:col-span-8 md:row-span-2";
  } else if (project.title === "Wizards Chess") {
    gridClasses = "md:col-span-4 md:row-span-2";
  } else {
    // Other projects
    gridClasses = "md:col-span-4 md:row-span-1";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4, // Reduced from 0.5
        delay: index * 0.05, // Reduced from 0.1
      }}
      className={`group relative overflow-hidden rounded-xl bg-white border border-gray-200
        hover:border-blue-300 transition-all duration-300
        shadow-lg hover:shadow-xl ${gridClasses}`}
      style={{ willChange: "transform, opacity" }}
    >
      {/* Project Image */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            loading={index < 2 ? "eager" : "lazy"}
            priority={index === 0}
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-gray-800 text-xl font-bold">
              {project.title}
            </span>
          </div>
        )}
      </div>

      {/* Content - Always visible on mobile, hover effect on desktop */}
      <div
        className={`p-4 ${
          isMobile ? "bg-white" : "bg-white group-hover:bg-gray-50"
        } transition-colors duration-300`}
      >
        {/* Title - Always visible and readable */}
        <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900 line-clamp-2">
          {project.title}
        </h3>

        {/* Description - Always visible on mobile, smooth fade on desktop */}
        <p
          className={`text-gray-700 mb-6 text-sm leading-relaxed transition-opacity duration-300 ${
            isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          {project.description}
        </p>

        {/* Tags - Always visible */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full font-medium border border-blue-100"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs px-2 py-1 bg-gray-50 text-gray-600 rounded-full font-medium border border-gray-200">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Buttons - Always visible with smooth hover effects */}
        <div className="flex gap-2">
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-500
                     px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium flex-1 justify-center
                     transform hover:scale-105 active:scale-95"
          >
            <FaExternalLinkAlt size={12} />
            <span className="hidden sm:inline">Live Demo</span>
            <span className="sm:hidden">Demo</span>
          </a>
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 bg-gray-100 hover:bg-gray-200
                     px-3 py-2 rounded-lg border border-gray-200 transition-all duration-200 text-sm font-medium flex-1 justify-center
                     transform hover:scale-105 active:scale-95"
          >
            <FaGithub size={12} />
            <span className="hidden sm:inline">GitHub</span>
            <span className="sm:hidden">Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Pizza E-Commerce Store",
      description:
        "A fully functional e-commerce prototype featuring a dynamic menu API, shopping cart system, and Redux state management.",
      image: "/PizzaStore.png",
      tags: ["React.js", "Tailwind", "Redux"],
      links: {
        live: "https://react-pizza-store-omega.vercel.app/",
        github: "https://github.com/jecochran-0/React-Pizza-Store",
      },
      featured: true,
    },
    {
      id: 2,
      title: "Wizards Chess",
      description:
        "A chess game with integrated spells to drastically change the game. Built with React, CSS, and JavaScript.",
      image: "/WizardChessPreview.png",
      tags: ["React.js", "Tailwind", "JavaScript"],
      links: {
        live: "https://react-wizard-chess.vercel.app/",
        github: "https://github.com/jecochran-0/React-Wizard-Chess",
      },
      featured: true,
    },
    {
      id: 3,
      title: "BentoBox",
      description:
        "A modern web application that uses AI to create beautiful, responsive Bento grid layouts from your photos. Upload 3-5 images and the app will generate three distinct grid layouts optimized for your specific photos.",
      image: "/BentoBoxPreview.png",
      tags: ["JavaScript", "API", "CSS"],
      links: {
        live: "https://jecochran-0.github.io/BentoBox/",
        github: "https://github.com/jecochran-0/BentoBox/tree/main",
      },
      featured: false,
    },
    {
      id: 4,
      title: "Pixel Character Creator",
      description:
        "A browser-based application that dynamically generates unique pixel-art heroes using OpenAI's API.",
      image: "/PixelCharacterGenerator.png",
      tags: ["HTML", "CSS", "JavaScript", "OpenAI", "api"],
      links: {
        live: "https://pixel-character-generator.vercel.app/",
        github: "https://github.com/jecochran-0/pixelCharacterGenerator",
      },
      featured: false,
    },
    {
      id: 5,
      title: "Algorithm Visualizer",
      description:
        "A full-stack task management application with user authentication, task prioritization, and deadline tracking.",
      image: "/AlgorithmVisualizer_Preview.png",
      tags: ["React.js", "Node.js", "MongoDB"],
      links: {
        live: "https://jecochran-0.github.io/algorithm_visualizer/",
        github: "https://github.com/jecochran-0/algorithm_visualizer",
      },
      featured: false,
    },
  ];

  // Reorder the projects to ensure Pizza Store and Wizards Chess are first
  const orderedProjects = [...projects].sort((a, b) => {
    if (a.title === "Pizza E-Commerce Store") return -1;
    if (b.title === "Pizza E-Commerce Store") return 1;
    if (a.title === "Wizards Chess") return -1;
    if (b.title === "Wizards Chess") return 1;
    return 0;
  });

  return (
    <section id="projects-section" className="py-8 md:py-12 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-auto">
          {orderedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
