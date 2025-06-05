"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { TypingEffect } from "@/components/animations/typing-effect";
import { SectionTransition } from "@/components/animations/section-transition";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useNavigation } from "@/context/navigation-context";

const quotes = [
  "Craft seamless digital experiences with clear purpose",
  "Turn ideas into elegant, user‑focused designs",
  "Build and scale robust backends using MERN and MySQL,",
  "Integrate API's flawlessly to bring your vision to life",
];

const skills = [
  "MERN, Full‑Stack Development",
  "Responsive & Adaptive UI/UX Design",
  "Robust Backend Architectures node.js, MySQL, MongoDB",
  "API Design, Integration & Database Management",
];

export function HomeSection() {
  const { scrollToSection } = useNavigation();
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [showQuote, setShowQuote] = useState(true);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setShowQuote(false);
      setTimeout(() => {
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
        setShowQuote(true);
      }, 500);
    }, 5000);

    const skillInterval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 5000);

    return () => {
      clearInterval(quoteInterval);
      clearInterval(skillInterval);
    };
  }, []);
 
  return (
    <SectionTransition className="flex flex-col items-center justify-center text-center py-8 relative w-[100%]">
      <motion.div
        className="w-[100%] flex flex-col items-center justi"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
  
        <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-10 mb-6">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="h-30 w-30 sm:h-30 sm:w-30 md:h-38 md:w-38 lg:h-60 lg:w-60 rounded-full bg-primary/20 overflow-hidden shadow-lg ring-2 ring-primary/10">
              <img
                src="/images/profile.jpg"
                alt="Muhammad Adil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name Text */}
          <div className="text-left">
            <TypingEffect
              text="Hi, I am"
              className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-lg text-foreground/80 mb-1"
              delay={300}
              speed={70}
            />
            <TypingEffect
              text="Muhammad Adil"
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text"
              delay={800}
              speed={70}
            />
          </div>
        </div>

        <motion.div
          className="min-h-16 sm:h-10 md:h-12 mb-4 relative overflow-hidden flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.div
            key={currentQuoteIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showQuote ? 1 : 0, y: showQuote ? 0 : -20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-base sm:text-lg md:text-2xl font-medium text-foreground/80 leading-relaxed"
          >
            {quotes[currentQuoteIndex]}
          </motion.div>
        </motion.div>

        <motion.div
          className="h-6 sm:h-8 md:h-10 mb-6 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.div
            key={currentSkillIndex}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="text-xs sm:text-sm md:text-lg text-muted-foreground"
          >
            {skills[currentSkillIndex]}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-row gap-3 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Button
            size="default"
            className="text-xs sm:text-sm md:text-base"
            onClick={() => scrollToSection("portfolio")}
          >
            View My Work
          </Button>
          <Button
            size="default"
            variant="outline"
            className="text-xs sm:text-sm md:text-base"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          className="scroll-down-indicator mt-10 flex justify-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="opacity-80 flex flex-col items-center"
          >
            <div className="relative w-6 h-10 border-2 border-primary/60 rounded-full mb-1">
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-primary rounded-full"
              />
            </div>
            <div className="flex flex-col items-center">
              <ChevronDown className="h-4 w-4 text-primary" />
              <span className="text-[10px] sm:text-xs text-primary/80">
                Scroll Down
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionTransition>
  );
}