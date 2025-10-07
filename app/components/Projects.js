"use client";

import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = ({ project, index, isFeatured = false }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -8,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 25,
          duration: 0.4,
        },
      }}
      className="group"
    >
      {/* Image Section */}
      <div className="relative mb-6">
        <div
          className={`relative ${
            isFeatured ? "aspect-[4/3]" : "aspect-[3/2]"
          } border-4 border-black overflow-hidden`}
        >
          {isFeatured && project.images ? (
            <div className="relative w-full h-full">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority={true}
              />
              {/* Additional images overlay */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                {project.images.slice(1, 4).map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="relative w-16 h-12 border-2 border-white rounded overflow-hidden shadow-lg"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} ${imgIndex + 2}`}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              priority={index < 2}
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <span className="text-gray-900 text-2xl font-black tracking-wide">
                {project.title}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-6">
        {/* Title */}
        <h3
          className={`${
            isFeatured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
          } font-black tracking-tight text-black leading-tight`}
        >
          {project.title || "No Title"}
        </h3>

        {/* Description */}
        <p
          className={`text-gray-700 ${
            isFeatured ? "text-base sm:text-lg" : "text-sm sm:text-base"
          } leading-relaxed`}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, isFeatured ? 5 : 3).map((tag) => (
            <span
              key={tag}
              className={`${
                isFeatured ? "text-xs px-3 py-1.5" : "text-xs px-2.5 py-1"
              } bg-orange-100 text-orange-800 font-bold border-2 border-black`}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > (isFeatured ? 5 : 3) && (
            <span
              className={`${
                isFeatured ? "text-xs px-3 py-1.5" : "text-xs px-2.5 py-1"
              } bg-gray-100 text-gray-800 font-bold border-2 border-black`}
            >
              +{project.tags.length - (isFeatured ? 5 : 3)}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <motion.a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-orange-500 text-white border-4 border-black font-black text-sm py-3 px-4 text-center hover:bg-orange-400 transition-colors duration-200"
            whileHover={{
              y: -2,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="inline-flex items-center justify-center gap-2">
              <FaExternalLinkAlt size={12} />
              LIVE
            </span>
          </motion.a>

          <motion.a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white text-black border-4 border-black font-black text-sm py-3 px-4 text-center hover:bg-gray-50 transition-colors duration-200"
            whileHover={{
              y: -2,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="inline-flex items-center justify-center gap-2">
              <FaGithub size={14} />
              GITHUB
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
      title: "Wizard's Chess",
      description:
        "A fully interactive chess game with AI opponents, move validation, and beautiful animations. Built with modern web technologies for an immersive gaming experience.",
      image: "/WizardChessPreview.png",
      images: ["/WizardChessPreview.png", "/Chess.jpg"],
      featured: true,
      tags: ["React.js", "JavaScript", "CSS", "Game Logic"],
      links: {
        live: "https://wizards-chess.vercel.app/",
        github: "https://github.com/jecochran-0/WizardsChess",
      },
    },
    {
      id: 2,
      title: "Pizza E-commerce Store",
      description:
        "A fully functional e-commerce prototype featuring a dynamic menu API, shopping cart system, and Redux state management.",
      image: "/PizzaStore.png",
      tags: ["React.js", "Tailwind", "Redux"],
      links: {
        live: "https://jecochran-0.github.io/PizzaStore/",
        github: "https://github.com/jecochran-0/PizzaStore",
      },
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
    },
    {
      id: 4,
      title: "Pixel Character Creator",
      description:
        "A browser-based application that dynamically generates unique pixel-art heroes using OpenAI's API.",
      image: "/PixelCharacterGenerator.png",
      tags: ["HTML", "CSS", "JavaScript", "OpenAI"],
      links: {
        live: "https://pixel-character-generator.vercel.app/",
        github: "https://github.com/jecochran-0/pixelCharacterGenerator",
      },
    },
    {
      id: 5,
      title: "Algorithm Visualizer",
      description:
        "An interactive visualization tool that demonstrates how various sorting and searching algorithms work step by step.",
      image: "/AlgorithmVisualizer_Preview.png",
      tags: ["React.js", "JavaScript", "Algorithms"],
      links: {
        live: "https://jecochran-0.github.io/algorithm_visualizer/",
        github: "https://github.com/jecochran-0/algorithm_visualizer",
      },
    },
  ];

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-20 lg:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <ProjectCard
                project={featuredProject}
                index={0}
                isFeatured={true}
              />
            </motion.div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
