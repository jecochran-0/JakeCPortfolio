"use client";

import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

// Enhanced project card with advanced hover effects
const ProjectCard = ({ project, index }) => {
  // Calculate the grid span based on whether the project is featured
  let gridClasses = "";

  // Make Pizza Store and Wizards Chess take up more space
  if (project.title === "Pizza E-Commerce Store") {
    gridClasses = "col-span-12 md:col-span-8 row-span-2";
  } else if (project.title === "Wizards Chess") {
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
        shadow-lg hover:shadow-xl hover:scale-[1.02] hover:z-10 ${gridClasses}`}
      style={{ willChange: "transform, opacity" }}
    >
      {/* Project Image - Optimized with Next.js Image component */}
      <div className="absolute inset-0 bg-white z-0 overflow-hidden">
        <div className="w-full h-full relative">
          {project.image ? (
            <div className="absolute inset-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover opacity-90 group-hover:opacity-80 transition-opacity duration-300"
                loading={index < 2 ? "eager" : "lazy"}
                priority={index === 0}
              />
            </div>
          ) : (
            <div
              className="absolute inset-0 bg-gray-100 flex items-center justify-center opacity-90 group-hover:opacity-80 transition-opacity duration-300"
              style={{ willChange: "opacity" }}
            >
              <span className="text-gray-800 text-xl font-bold">
                {project.title}
              </span>
            </div>
          )}
        </div>
        {/* Enhanced overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      </div>

      {/* Accent line - enhanced */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-blue-500 opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10"></div>

      {/* Base Content - always visible with improved contrast */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Expanded Content - Improved for better readability */}
      <div
        className="absolute inset-0 p-5 bg-white/95
                   flex flex-col opacity-0 group-hover:opacity-100
                   transition-opacity duration-300 ease-out z-20 backdrop-blur-sm"
        style={{ willChange: "opacity" }}
      >
        <div className="flex-1 overflow-auto scrollbar-hide">
          <h3 className="text-xl font-bold mb-2 text-blue-600">
            {project.title}
          </h3>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-blue-50 rounded-full text-blue-700 border border-blue-100 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Improved buttons with better styling */}
        <div className="flex gap-3 pt-2 mt-auto">
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-500
                     px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
          >
            <FaExternalLinkAlt size={12} /> Live Demo
          </a>
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 bg-gray-100 hover:bg-gray-200
                     px-4 py-2 rounded-lg border border-gray-200 transition-colors duration-200 text-sm font-medium"
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

  // Reorder the projects to ensure Pizza Store and Wizards Chess are first
  const orderedProjects = [...projects].sort((a, b) => {
    if (a.title === "Pizza E-Commerce Store") return -1;
    if (b.title === "Pizza E-Commerce Store") return 1;
    if (a.title === "Wizards Chess") return -1;
    if (b.title === "Wizards Chess") return 1;
    return 0;
  });

  return (
    <section id="projects-section" className="py-12 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 auto-rows-[min(250px,_20vw)] gap-6">
          {orderedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
