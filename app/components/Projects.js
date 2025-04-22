"use client";

import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

// Enhanced project card with advanced hover effects
const ProjectCard = ({ project, index }) => {
  // Calculate the grid span based on whether the project is featured
  let gridClasses = "";

  // First two projects (Pizza Store and Wizards Chess) take up more space
  if (index === 0) {
    gridClasses = "col-span-12 md:col-span-8 row-span-2";
  } else if (index === 1) {
    gridClasses = "col-span-12 md:col-span-4 row-span-2";
  } else {
    // Other projects
    gridClasses = "col-span-12 md:col-span-4 row-span-1";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className={`group relative overflow-hidden rounded-xl bg-white border border-gray-200
        hover:border-blue-300 transition-all duration-300
        shadow-md hover:shadow-xl hover:scale-[1.02] hover:z-10 ${gridClasses}`}
      style={{ willChange: "transform, opacity" }}
    >
      {/* Project Image - Replace img with Next.js Image component */}
      <div className="absolute inset-0 bg-white z-0 overflow-hidden">
        <div className="w-full h-full relative">
          {project.image ? (
            // Use a div with background-image instead of <img>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-90 group-hover:opacity-70 transition-opacity duration-300"
              style={{
                backgroundImage: `url(${project.image})`,
                willChange: "opacity",
              }}
            />
          ) : (
            <div
              className="absolute inset-0 bg-gray-100 flex items-center justify-center opacity-90 group-hover:opacity-70 transition-opacity duration-300"
              style={{ willChange: "opacity" }}
            >
              <span className="text-gray-800 text-xl font-bold">
                {project.title}
              </span>
            </div>
          )}
        </div>
        {/* Simple overlay for better performance */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent"></div>
      </div>

      {/* Accent line - simplified */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>

      {/* Base Content - always visible */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-xl font-bold mb-2 text-gray-900">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Expanded Content - Optimized for performance and button visibility */}
      <div
        className="absolute inset-0 p-4 bg-white/95
                   flex flex-col opacity-0 group-hover:opacity-100
                   transition-opacity duration-300 ease-out z-20"
        style={{ willChange: "opacity" }}
      >
        <div className="flex-1 overflow-auto scrollbar-hide">
          <h3 className="text-xl font-bold mb-2 text-blue-500">
            {project.title}
          </h3>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700 border border-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Fixed positioning for buttons to ensure visibility */}
        <div className="flex gap-3 pt-2 mt-auto">
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-500
                     px-3 py-1.5 rounded-lg transition-colors duration-200 text-sm"
          >
            <FaExternalLinkAlt size={12} /> Live Demo
          </a>
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white bg-gray-700 hover:bg-gray-600
                     px-3 py-1.5 rounded-lg border border-gray-600 transition-colors duration-200 text-sm"
          >
            <FaGithub size={12} /> GitHub
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

  return (
    <section id="projects-section" className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          My Projects
        </h2>

        <div className="grid grid-cols-12 auto-rows-[min(250px,_20vw)] gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
