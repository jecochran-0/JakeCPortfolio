"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

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

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "jake.e.cochran@gmail.com",
      href: "mailto:jake.e.cochran@gmail.com",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Available for remote work",
    },
  ];

  return (
    <footer
      className="py-20 px-6"
      style={{ backgroundColor: "#171717" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          {/* Left Column - Brand & Contact */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                JAKE COCHRAN
              </h2>
              <p
                className="text-xl text-gray-300 leading-relaxed"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Full-Stack Developer & UX/UI Designer crafting digital experiences that bridge innovation and intention.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              {contactInfo.map((contact) => {
                const Icon = contact.icon;
                return (
                  <div key={contact.label} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "#CD535A" }}
                    >
                      <Icon className="text-white text-lg" />
                    </div>
                    <div>
                      <p
                        className="text-sm text-gray-400 uppercase tracking-wider"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {contact.label}
                      </p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="text-white hover:text-gray-300 transition-colors duration-300"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p
                          className="text-white"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          {contact.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Middle Column - Navigation */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3
                className="text-2xl font-bold text-white mb-8"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Navigation
              </h3>
              <div className="space-y-4">
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                    >
                      <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                      <span
                        className="text-lg"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Social & CTA */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3
                className="text-2xl font-bold text-white mb-8"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Let&apos;s Connect
              </h3>
              <p
                className="text-gray-300 leading-relaxed mb-8"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Ready to transform your vision into an exceptional digital experience? Let&apos;s discuss how we can bring your ideas to life.
              </p>
              
              <motion.a
                href="mailto:jake.e.cochran@gmail.com"
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-gray-300 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Get in touch
                <FaArrowRight size={14} />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4
                className="text-lg font-bold text-white mb-6"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Follow My Journey
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 border border-white/20 rounded-lg flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all duration-300"
                    >
                      <Icon className="text-xl" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Separator */}
        <div className="border-b border-white/20 mb-8" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p
            className="text-gray-400 text-sm"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            © 2024 Jake Cochran. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span
              className="text-gray-400 text-sm"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Built with Next.js & Framer Motion
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
