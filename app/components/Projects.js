"use client";

import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = ({ project, index, spanTwo = false }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -6,
        transition: {
          type: "spring",
          stiffness: 80,
          damping: 30,
          duration: 0.8,
        },
      }}
      className={`group card-brutal card-no-shift rounded-none bg-white text-black overflow-hidden ${
        spanTwo ? "lg:col-span-2" : ""
      }`}
      style={{ willChange: "transform, opacity" }}
    >
      {/* Media - framed for synergy with card */}
      <div className="relative bg-white p-3 sm:p-4 border-b-4 border-black">
        <div className="relative aspect-video border-4 border-black overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]"
              priority={index < 2}
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <span className="text-gray-900 text-xl font-black tracking-wide">
                {project.title}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 md:p-7">
        <h3 className="text-lg sm:text-xl font-black tracking-tight mb-3 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-gray-800 text-sm leading-relaxed mb-4 min-h-[56px] line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-1.5 mb-5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-[5px] bg-orange-100 text-orange-800 rounded-none font-bold border-2 border-black"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-[11px] px-2 py-[5px] bg-gray-100 text-gray-800 rounded-none font-bold border-2 border-black">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2 sm:gap-3 mt-2">
          <motion.a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brutal btn-card btn-no-shift btn-brutal-interactive w-full text-center"
            style={{ minWidth: "fit-content", padding: "0.75rem 1rem" }}
            whileHover={{
              y: -2,
              transition: { type: "spring", stiffness: 280, damping: 22 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-normal text-sm">
              <FaExternalLinkAlt size={12} />
              <span className="whitespace-nowrap">Live</span>
            </span>
          </motion.a>

          <motion.a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brutal btn-card btn-no-shift w-full text-center"
            style={{
              background: "#ffffff",
              color: "#000000",
              minWidth: "fit-content",
              padding: "0.75rem 1rem",
            }}
            whileHover={{
              y: -2,
              transition: { type: "spring", stiffness: 280, damping: 22 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-normal text-sm">
              <FaGithub size={14} />
              <span className="whitespace-nowrap" style={{ color: "#000000" }}>
                GitHub
              </span>
            </span>
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Pizza E-Commerce Store",
      description:
        "A fully functional e-commerce prototype featuring a dynamic menu API, shopping cart system, and Redux state management.",
      image: "/PizzaStore2.png",
      tags: ["React.js", "Tailwind", "Redux"],
      links: {
        live: "https://react-pizza-store-omega.vercel.app/",
        github: "https://github.com/jecochran-0/React-Pizza-Store",
      },
    },
    {
      id: 2,
      title: "Wizards Chess",
      description:
        "A chess game with integrated spells to drastically change the game. Built with React, CSS, and JavaScript.",
      image: "/WizardChessPreview.jpg",
      tags: ["React.js", "Tailwind", "JavaScript"],
      links: {
        live: "https://react-wizard-chess.vercel.app/",
        github: "https://github.com/jecochran-0/React-Wizard-Chess",
      },
    },
    {
      id: 3,
      title: "BentoBox",
      description:
        "A modern web application that uses AI to create beautiful, responsive Bento grid layouts from your photos. Upload 3-5 images and the app will generate three distinct grid layouts optimized for your specific photos.",
      image: "/BentoBoxPreview.jpg",
      tags: ["JavaScript", "API", "CSS"],
      links: {
        live: "https://jecochran-0.github.io/BentoBox/",
        github: "https://github.com/jecochran-0/BentoBox/tree/main",
      },
    },
    {
      id: 4,
      title: "Pixel Character Creator",
      description:
        "A browser-based application that dynamically generates unique pixel-art heroes using OpenAI's API.",
      image: "/PixelCharacterGenerator2.png",
      tags: ["HTML", "CSS", "JavaScript", "OpenAI", "api"],
      links: {
        live: "https://pixel-character-generator.vercel.app/",
        github: "https://github.com/jecochran-0/pixelCharacterGenerator",
      },
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
    },
  ];

  const spanTwoOnLarge = projects.length % 3 === 1;

  return (
    <section id="projects-section" className="py-8 md:py-12 text-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              spanTwo={spanTwoOnLarge && index === projects.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
