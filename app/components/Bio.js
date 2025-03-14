"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Bio = () => {
  // Track button press state
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  // Handle mouse events for button press effect
  const handleMouseDown = () => {
    setIsButtonPressed(true);
  };

  const handleMouseUp = () => {
    setIsButtonPressed(false);
  };

  return (
    <section className="w-full bg-neutral-900 text-white py-10 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image */}
          <div className="mb-6 sm:mb-8">
            <div
              className="relative rounded-full overflow-hidden"
              style={{
                width: "min(300px, 80vw)",
                height: "min(300px, 80vw)",
              }}
            >
              <Image
                src="/Headshot3.png"
                alt="Jake Cochran"
                fill
                sizes="(max-width: 640px) 180px, (max-width: 768px) 240px, 300px"
                className="object-cover"
                priority
              />
            </div>
          </div>
          {/* Bio Content */}
          <p className="text-gray-300 max-w-2xl mb-8 sm:mb-10 text-base sm:text-lg px-2 sm:px-4">
            Im Jake! Im a college senior with real-world experience in frontend
            development and UI/UX design. I am passionate about creating user
            experiences people WANT, and solving complex problems through clean,
            understandable code.
          </p>
          {/* Social Links */}
          <div className="flex gap-4 sm:gap-6 mb-6 sm:mb-8">
            <a
              href="https://linkedin.com/in/jake-cochran"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin
                size={30}
                className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]"
              />
            </a>
            <a
              href="https://github.com/jecochran-0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <Github
                size={30}
                className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]"
              />
            </a>
            <a
              href="mailto:jake.e.cochran@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Email Contact"
            >
              <Mail
                size={30}
                className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]"
              />
            </a>
          </div>

          <a
            href="#work-experience"
            className={`relative overflow-hidden bg-white text-black py-2 sm:py-3 px-5 sm:px-6 rounded-full font-medium text-sm sm:text-base
                       transition-all duration-300 ease-out
                       hover:shadow-[0_5px_15px_rgba(255,255,255,0.2)] hover:scale-105 
                       active:scale-95 active:shadow-inner active:bg-gray-100
                       before:absolute before:inset-0 before:w-full before:h-full before:bg-black/5
                       before:translate-y-[100%] hover:before:translate-y-0 before:transition-transform before:duration-300
                       ${
                         isButtonPressed
                           ? "transform scale-95 shadow-inner bg-gray-100"
                           : "transform translate-y-0 shadow-lg"
                       }`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
          >
            Work Experience
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Bio;
