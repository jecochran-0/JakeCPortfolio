"use client";

import { motion } from "framer-motion";
// Link removed - using <a> tags for page transition system
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const navigationLinks = [
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Development", href: "/dev" },
    { name: "UX/UI", href: "/ux-ui" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/jecochran-0",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://linkedin.com/in/jakecochran",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      href: "mailto:jake.e.cochran@gmail.com",
    },
  ];

  return (
    <footer className="py-24 px-12" style={{ backgroundColor: "#171717" }}>
      <div className="max-w-none mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3
              className="text-2xl font-bold text-white mb-8"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Contact
            </h3>
            <a
              href="mailto:jake.e.cochran@gmail.com"
              className="text-xl text-gray-300 hover:text-white transition-colors duration-300 block mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              jake.e.cochran@gmail.com
            </a>
            <p
              className="text-lg text-gray-300"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Available for remote work
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3
              className="text-2xl font-bold text-white mb-8"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Navigation
            </h3>
            <div className="space-y-4">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-xl text-gray-300 hover:text-white transition-colors duration-300"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3
              className="text-2xl font-bold text-white mb-8"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Social
            </h3>
            <div className="flex gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 border border-white/20 rounded-lg flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all duration-300"
                  >
                    <Icon className="text-2xl" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Separator */}
        <div className="border-b border-white/20 mb-12" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p
            className="text-gray-400 text-lg"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            © 2024 Jake Cochran. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
