"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaPalette,
  FaCode,
  FaUser,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const navigationSections = [
    {
      title: "UX/UI Design",
      description: "User-centered design solutions",
      icon: FaPalette,
      path: "/ux-ui",
      color: "from-purple-500 to-pink-500",
      delay: 0.1,
    },
    {
      title: "Development",
      description: "Cutting-edge web applications",
      icon: FaCode,
      path: "/dev",
      color: "from-green-500 to-blue-500",
      delay: 0.2,
    },
    {
      title: "About",
      description: "Learn more about my journey",
      icon: FaUser,
      path: "/about",
      color: "from-orange-500 to-red-500",
      delay: 0.3,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/jake148",
      delay: 0.4,
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://linkedin.com/in/jakecochran",
      delay: 0.5,
    },
    {
      name: "Email",
      icon: FaEnvelope,
      href: "mailto:jake.e.cochran@gmail.com",
      delay: 0.6,
    },
  ];

  return (
    <footer className="relative bg-black/90 backdrop-blur-sm border-t-4 border-orange-400 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-32 h-32 border border-white/30 rounded-full" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border border-white/30 rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-white/20 rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-6 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left Column - Navigation Sections */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl lg:text-3xl font-bold text-white mb-8"
            >
              Explore My Work
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {navigationSections.map((section) => {
                const Icon = section.icon;
                return (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: section.delay }}
                    whileHover={{ y: -4 }}
                    className="group"
                  >
                    <Link href={section.path}>
                      <div className="card-brutal p-4 lg:p-6 h-full relative overflow-hidden cursor-pointer transition-all duration-300">
                        {/* Gradient Overlay */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                        />

                        {/* Content */}
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-3">
                            <Icon className="text-2xl text-orange-400 group-hover:text-white transition-colors duration-300" />
                            <motion.div
                              className="text-orange-400 group-hover:text-white transition-colors duration-300"
                              initial={{ x: 0 }}
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.2 }}
                            >
                              <FaArrowRight size={16} />
                            </motion.div>
                          </div>

                          <h3 className="text-lg font-bold text-black mb-2 group-hover:text-gray-800 transition-colors duration-300">
                            {section.title}
                          </h3>

                          <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                            {section.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Contact & Social */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Let&apos;s Connect
              </h2>

              <div className="glass-card p-6 lg:p-8">
                <p className="text-white/90 text-lg mb-6 leading-relaxed">
                  Ready to bring your ideas to life? I&apos;m always excited to
                  collaborate on innovative projects that push the boundaries of
                  design and technology.
                </p>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-brutal btn-brutal-interactive text-white bg-orange-400 hover:bg-orange-500 transition-colors duration-300"
                  onClick={() =>
                    window.open("mailto:jake.e.cochran@gmail.com", "_blank")
                  }
                >
                  Start a Conversation
                </motion.button>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Follow My Journey
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: social.delay }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
                    >
                      <Icon className="text-xl group-hover:text-orange-400 transition-colors duration-300" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border-t border-white/20 pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <motion.div
                className="w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-white font-bold text-sm">JC</span>
              </motion.div>
              <span className="text-white/80 font-medium">
                © 2024 Jake Cochran. Crafted with precision.
              </span>
            </div>

            <div className="flex items-center space-x-6 text-white/60 text-sm">
              <motion.span
                whileHover={{ color: "rgba(255, 255, 255, 0.9)" }}
                transition={{ duration: 0.2 }}
                className="cursor-pointer"
              >
                Privacy Policy
              </motion.span>
              <motion.span
                whileHover={{ color: "rgba(255, 255, 255, 0.9)" }}
                transition={{ duration: 0.2 }}
                className="cursor-pointer"
              >
                Terms of Service
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
