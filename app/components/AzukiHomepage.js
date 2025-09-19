"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const AzukiHomepage = () => {
  const [hoveredPanel, setHoveredPanel] = useState(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Panel data with 4 columns: Forest, City, Space, Room (left to right)
  const panels = [
    {
      id: "about",
      title: "ABOUT",
      image: "/images/Forest-Image.jpg",
      href: "/about",
    },
    {
      id: "skills",
      title: "SKILLS",
      image: "/images/City-Image.jpg",
      href: "/about",
    },
    {
      id: "development",
      title: "DEVELOPMENT",
      image: "/images/Space-Image-min.png",
      href: "/dev",
    },
    {
      id: "ux-ui",
      title: "UX/UI",
      image: "/images/Room-Image.jpg",
      href: "/ux-ui",
    },
  ];

  return (
    <div className="h-screen w-screen relative">
      {/* Fixed Name box in top left */}
      <div className="fixed top-4 left-4 z-30">
        <div
          className="px-4 py-2 rounded-sm"
          style={{ backgroundColor: "#B4323B" }}
        >
          <div
            className="text-white text-sm tracking-wide uppercase"
            style={{
              fontFamily: "Bungee, Arial Black, sans-serif",
              fontSize: "16px",
            }}
          >
            Jake Cochran
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {showScrollIndicator && (
        <div className="fixed top-1/2 right-8 z-30 transform -translate-y-1/2">
          <div className="text-white text-8xl animate-pulse">→</div>
        </div>
      )}

      <div
        className="h-screen w-screen overflow-x-auto overflow-y-hidden"
        onWheel={(e) => {
          e.preventDefault();
          e.currentTarget.scrollLeft += e.deltaY;
        }}
        onScroll={(e) => {
          // Hide scroll indicator when scrolled to 5th column
          const scrollLeft = e.target.scrollLeft;
          const maxScroll = e.target.scrollWidth - e.target.clientWidth;
          setShowScrollIndicator(scrollLeft < maxScroll - 50); // 50px threshold
        }}
      >
        <div
          className="h-full bg-black flex relative"
          style={{
            border: "8px solid #171717",
            width: "125vw", // 5 columns × 25vw each
          }}
        >
          {panels.map((panel, index) => (
            <motion.div
              key={panel.id}
              className={`h-full relative cursor-pointer group overflow-hidden ${
                index !== panels.length - 1 ? "border-r-8" : ""
              }`}
              style={{
                width: "25vw", // Each column is 25% of viewport width
                borderRightColor:
                  index !== panels.length - 1 ? "#171717" : "transparent",
              }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setHoveredPanel(panel.id)}
              onMouseLeave={() => setHoveredPanel(null)}
              onClick={() => (window.location.href = panel.href)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={panel.image}
                  alt={panel.title}
                  className="w-full h-full object-cover"
                  style={{
                    transition: "all 500ms cubic-bezier(0.25, 0.1, 0.25, 1)",
                    objectPosition:
                      panel.id === "development"
                        ? "center 20%"
                        : "center center",
                    filter:
                      hoveredPanel === panel.id
                        ? "grayscale(0%)"
                        : panel.id === "about"
                        ? "grayscale(70%)"
                        : "grayscale(100%)",
                    transform:
                      hoveredPanel === panel.id
                        ? panel.id === "development"
                          ? "scale(1.2) translateY(-40px)"
                          : "translateY(-40px)"
                        : panel.id === "development"
                        ? "scale(1.2)"
                        : "translateY(0px)",
                  }}
                />
              </div>

              {/* Dark overlay that reduces on hover */}
              <motion.div
                className="absolute inset-0 bg-black/50"
                animate={{ opacity: hoveredPanel === panel.id ? 0.2 : 0.5 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              />

              {/* Black bar rising from bottom on hover */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 z-10"
                style={{ backgroundColor: "#171717" }}
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: hoveredPanel === panel.id ? 80 : 0,
                  opacity: hoveredPanel === panel.id ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex items-center h-full pl-6">
                  <div
                    className="text-white font-black text-4xl md:text-5xl tracking-tight"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {panel.title}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* 5th Column - Contact */}
          <div
            className="h-full relative flex flex-col justify-center items-start pl-8"
            style={{ backgroundColor: "#171717", width: "25vw" }}
          >
            {/* Contact Title */}
            <div className="mb-12">
              <div
                className="text-white font-black text-4xl md:text-5xl tracking-tight"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                CONTACT
              </div>
            </div>

            {/* Photo */}
            <div className="mb-12">
              <img
                src="/Headshot3.png"
                alt="Jake Cochran"
                className="w-80 h-80 object-cover rounded-lg"
              />
            </div>

            {/* Email */}
            <div className="mb-12">
              <div
                className="text-white text-2xl font-black"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                jakecochran@gmail.com
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-8">
              <a
                href="https://linkedin.com/in/jakecochran"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-70 transition-opacity"
              >
                <FaLinkedin size={40} />
              </a>
              <a
                href="https://github.com/jakecochran"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-70 transition-opacity"
              >
                <FaGithub size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AzukiHomepage;
