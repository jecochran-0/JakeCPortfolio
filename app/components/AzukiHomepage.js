"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AzukiHomepage = () => {
  const [hoveredPanel, setHoveredPanel] = useState(null);

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
    <div
      className="h-screen w-full bg-black flex"
      style={{ border: "8px solid #171717" }}
    >
      {panels.map((panel, index) => (
        <motion.div
          key={panel.id}
          className={`w-1/4 h-full relative cursor-pointer group overflow-hidden ${
            index !== panels.length - 1 ? "border-r-8" : ""
          }`}
          style={{
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
                  panel.id === "development" ? "center 20%" : "center center",
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
    </div>
  );
};

export default AzukiHomepage;
