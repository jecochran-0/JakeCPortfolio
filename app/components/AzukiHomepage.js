"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const AzukiHomepage = () => {
  const [hoveredPanel, setHoveredPanel] = useState(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Refs for 5th column elements
  const contactColumnRef = useRef(null);
  const contactTitleRef = useRef(null);
  const contactPhotoRef = useRef(null);
  const contactInfoRef = useRef(null);

  // InView hooks for animations - trigger every time column comes into view
  const contactTitleInView = useInView(contactTitleRef, { once: false });
  const contactPhotoInView = useInView(contactPhotoRef, { once: false });
  const contactInfoInView = useInView(contactInfoRef, { once: false });

  // Animation variants for staggered fly-in from right
  const flyInFromRight = {
    hidden: {
      opacity: 0,
      x: 100,
      transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Throttled scroll handler using requestAnimationFrame for smooth performance
  const handleScroll = useCallback(
    (e) => {
      if (isMobile) return; // Skip horizontal scrolling on mobile
      e.preventDefault();

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        const scrollAmount = e.deltaY * 2; // Increased sensitivity for smoother feel
        const maxScrollDistance = window.innerWidth * 0.25; // 25% of viewport width

        setScrollPosition((prev) => {
          const newPosition = prev + scrollAmount;
          return Math.max(0, Math.min(maxScrollDistance, newPosition));
        });
      });
    },
    [isMobile]
  );

  // Update scroll indicator based on scroll position
  useEffect(() => {
    const maxScrollDistance = window.innerWidth * 0.25; // 25% of viewport width
    setShowScrollIndicator(scrollPosition < maxScrollDistance - 50); // 50px threshold
  }, [scrollPosition]);

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
      href: "/skills",
    },
    {
      id: "development",
      title: "DEVELOPMENT",
      image: "/images/Space-Image-min.png",
      href: "/dev?tab=development",
    },
    {
      id: "ux-ui",
      title: "UX/UI",
      image: "/images/Room-Image.jpg",
      href: "/dev?tab=ux",
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

      {/* Scroll indicator - desktop only */}
      {showScrollIndicator && !isMobile && (
        <div className="fixed top-1/2 right-8 z-30 transform -translate-y-1/2">
          <div className="text-white text-8xl animate-pulse">↓</div>
        </div>
      )}

      {isMobile ? (
        // Mobile layout: vertical stack
        <div
          className="h-screen w-screen overflow-y-auto bg-black"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            className="min-h-screen bg-black"
            style={{ border: "8px solid #171717" }}
          >
            {panels.map((panel, index) => (
              <motion.div
                key={panel.id}
                className={`h-[90vh] w-full relative cursor-pointer overflow-hidden ${
                  index !== panels.length - 1 ? "border-b-8" : ""
                }`}
                style={{
                  borderBottomColor:
                    index !== panels.length - 1 ? "#171717" : "transparent",
                }}
                onClick={() => (window.location.href = panel.href)}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <motion.img
                    src={panel.image}
                    alt={panel.title}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition:
                        panel.id === "development"
                          ? "center 20%"
                          : "center center",
                    }}
                    loading="eager"
                    // Mobile hover effect: animate when in viewport
                    initial={{
                      filter:
                        panel.id === "about"
                          ? "grayscale(55%)"
                          : "grayscale(100%)",
                      transform:
                        panel.id === "development"
                          ? "scale(1.2)"
                          : "translateY(0px)",
                    }}
                    whileInView={{
                      filter: "grayscale(0%)",
                      transform:
                        panel.id === "development"
                          ? "scale(1.2)"
                          : "translateY(0px)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 22,
                      duration: 0.5,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.3,
                      margin: "0px 0px -20% 0px",
                    }}
                    // Mobile tap feedback
                    whileTap={{ scale: 0.98 }}
                  />
                </div>

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black"
                  initial={{ opacity: 0.5 }}
                  whileInView={{ opacity: 0.2 }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 22,
                    duration: 0.5,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.3,
                    margin: "0px 0px -20% 0px",
                  }}
                />

                {/* Black Bar with Text - Always Visible on Mobile */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 flex items-center"
                  style={{
                    backgroundColor: "#171717",
                    height: "140px",
                  }}
                  initial={{
                    transform: "translateY(0%)",
                    opacity: 1,
                  }}
                  animate={{
                    transform: "translateY(0%)",
                    opacity: 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 22,
                    duration: 0.5,
                  }}
                >
                  <div className="flex items-center h-full pl-6">
                    <div
                      className="text-white font-black text-3xl sm:text-4xl tracking-tight"
                      style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
                    >
                      {panel.title}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Mobile Contact Section */}
            <div
              ref={contactColumnRef}
              className="h-[90vh] w-full relative flex flex-col justify-between items-start py-8 px-8"
              style={{ backgroundColor: "#171717" }}
            >
              {/* Contact Title - Top */}
              <motion.div
                ref={contactTitleRef}
                variants={flyInFromRight}
                initial="hidden"
                animate={contactTitleInView ? "visible" : "hidden"}
                transition={{ delay: 0.1 }}
              >
                <div
                  className="text-white font-black text-3xl tracking-tight"
                  style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
                >
                  CONTACT
                </div>
              </motion.div>

              {/* Photo - Middle */}
              <motion.div
                ref={contactPhotoRef}
                variants={flyInFromRight}
                initial="hidden"
                animate={contactPhotoInView ? "visible" : "hidden"}
                transition={{ delay: 0.3 }}
              >
                <img
                  src="/Headshot3.jpg"
                  alt="Jake Cochran"
                  className="w-64 h-64 object-cover rounded-lg"
                />
              </motion.div>

              {/* Contact Info - Bottom */}
              <motion.div
                ref={contactInfoRef}
                variants={flyInFromRight}
                initial="hidden"
                animate={contactInfoInView ? "visible" : "hidden"}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-start gap-6"
              >
                <div>
                  <div
                    className="text-white text-xl font-black"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    jakecochran@gmail.com
                  </div>
                </div>
                <div className="flex gap-8">
                  <a
                    href="https://linkedin.com/in/jakecochran"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:opacity-70 transition-opacity"
                  >
                    <FaLinkedin size={32} />
                  </a>
                  <a
                    href="https://github.com/jecochran-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:opacity-70 transition-opacity"
                  >
                    <FaGithub size={32} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      ) : (
        // Desktop layout: horizontal scroll
        <div
          ref={scrollRef}
          className="h-screen w-screen overflow-hidden"
          onWheel={handleScroll}
          style={{
            scrollbarWidth: "none", // Hide scrollbar on Firefox
            msOverflowStyle: "none", // Hide scrollbar on IE/Edge
          }}
        >
          <div
            className="h-full bg-black flex relative"
            style={{
              border: "8px solid #171717",
              width: "125vw", // 5 columns × 25vw each
              transform: `translate3d(-${scrollPosition}px, 0, 0)`, // Hardware acceleration
              willChange: "transform", // Optimize for animations
              transition: "transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Faster, smoother easing
            }}
          >
            {panels.map((panel, index) => (
              <motion.a
                key={panel.id}
                href={panel.href}
                className={`h-full relative cursor-pointer group overflow-hidden block ${
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
                          ? "grayscale(55%)"
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
                      className="text-white font-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-tight"
                      style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
                    >
                      {panel.title}
                    </div>
                  </div>
                </motion.div>
              </motion.a>
            ))}

            {/* 5th Column - Contact */}
            <div
              ref={contactColumnRef}
              className="h-full relative flex flex-col justify-between items-start py-8 pl-8"
              style={{ backgroundColor: "#171717", width: "25vw" }}
            >
              {/* Contact Title - Top */}
              <motion.div
                ref={contactTitleRef}
                variants={flyInFromRight}
                initial="hidden"
                animate={contactTitleInView ? "visible" : "hidden"}
                transition={{ delay: 0.1 }}
              >
                <div
                  className="text-white font-black text-4xl md:text-5xl tracking-tight"
                  style={{ fontFamily: "Bungee, Arial Black, sans-serif" }}
                >
                  CONTACT
                </div>
              </motion.div>

              {/* Photo - Middle */}
              <motion.div
                ref={contactPhotoRef}
                variants={flyInFromRight}
                initial="hidden"
                animate={contactPhotoInView ? "visible" : "hidden"}
                transition={{ delay: 0.3 }}
              >
                <img
                  src="/Headshot3.jpg"
                  alt="Jake Cochran"
                  className="w-96 h-96 object-cover rounded-lg"
                />
              </motion.div>

              {/* Contact Info - Bottom */}
              <motion.div
                ref={contactInfoRef}
                variants={flyInFromRight}
                initial="hidden"
                animate={contactInfoInView ? "visible" : "hidden"}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-start gap-6"
              >
                {/* Email */}
                <div>
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
                    href="https://github.com/jecochran-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:opacity-70 transition-opacity"
                  >
                    <FaGithub size={40} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AzukiHomepage;
