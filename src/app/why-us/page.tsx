"use client";

import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";
import { theme } from "@/lib/theme";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    id: 1,
    number: "01",
    title: "Our Philosophy",
    content: "We take simple ideas seriously. We understand them deeply, execute them properly, and respect their power."
  },
  {
    id: 2,
    number: "02",
    title: "Our Approach",
    content: "Most teams present elaborate processes and proprietary frameworks. We believe the best process is no process at all—just clear thinking applied consistently."
  },
  {
    id: 3,
    number: "03",
    title: "In Practice",
    content: "\"Take this website: we identified what visitors need to know, then said exactly that. Nothing more, nothing less.\"",
    isItalic: true
  }
];

export default function WhyUsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sections.length);
    }, 4000); // Auto-cycle every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <ContentPageLayout>
      <div className="relative z-20 space-y-32 text-white">
        
        {/* Hero Section with Eyebrow + Descriptive Subheading */}
        <div className="text-center space-y-6 max-w-4xl mx-auto pt-20 lg:pt-24">
          <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60">
            Why Us
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white">
            Most agencies either overcomplicate everything or miss the <em>point</em>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            We take simple ideas seriously. That means understanding them deeply, executing them properly, and respecting their power.
          </p>
        </div>

        {/* Interactive Auto-Cycling Sections */}
        <div 
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Tabs */}
          <div className="flex justify-center gap-2 sm:gap-4 mb-12">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActiveIndex(index)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-500 ${
                  activeIndex === index
                    ? 'bg-white/10 text-white border border-white/30'
                    : 'bg-transparent text-white/50 border border-white/10 hover:text-white/70 hover:border-white/20'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="relative min-h-[280px] sm:min-h-[240px]">
            <AnimatePresence mode="wait">
              {sections.map((section, index) => (
                activeIndex === index && (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ 
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                  >
                    <div className="max-w-3xl mx-auto space-y-6">
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="text-xs font-mono tracking-tight text-white/40">
                          {section.number}
                        </span>
                        <div className="h-px w-8 bg-gradient-to-r from-white/30 to-transparent"></div>
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-light tracking-wide text-white mb-6">
                        {section.title}
                      </h3>
                      <p className={`text-lg sm:text-xl leading-relaxed ${section.isItalic ? 'italic' : ''} text-white/80`}>
                        {section.content}
                      </p>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mt-12">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="relative w-12 sm:w-16 h-1 bg-white/10 rounded-full overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-white/60 rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ 
                    scaleX: activeIndex === index && !isPaused ? 1 : activeIndex === index ? 0.5 : 0
                  }}
                  transition={{ 
                    duration: activeIndex === index && !isPaused ? 4 : 0.3,
                    ease: "linear"
                  }}
                />
              </button>
            ))}
          </div>

          {/* Hover hint */}
          <div className="text-center mt-6">
            <p className="text-xs text-white/30 font-light tracking-wide">
              {isPaused ? "Paused — Move cursor away to continue" : "Hover to pause"}
            </p>
          </div>
        </div>

        {/* Integrated Philosophy Statement */}
        <div className="pt-12 border-t border-white/10">
          <div className="max-w-3xl">
            <div className="space-y-8">
              
              {/* Philosophy Statement */}
              <div className="space-y-6">
                <p className="text-xl sm:text-2xl font-light leading-relaxed text-white">
                  This is what we mean by taking simple ideas seriously: understand what matters, then execute it properly.
                </p>
                
                <div className="pl-6 border-l border-white/20">
                  <p className="text-lg leading-relaxed text-white/80 italic mb-4">
                    "There is an old two-part rule that often works wonders in business, science, and elsewhere: take a simple, basic idea and take it very seriously."
                  </p>
                  <p className="text-sm text-white/50 font-light tracking-wide uppercase">
                    Charlie Munger
                  </p>
                </div>
              </div>

              {/* Closing Statement */}
              <div className="pt-4">
                <div className="space-y-3">
                  <p className="text-sm text-white/60 font-medium tracking-wide uppercase">
                    Our Promise
                  </p>
                  <p className="text-2xl sm:text-3xl font-light text-white leading-tight">
                    Clear thinking applied consistently.
                  </p>
                  <p className="text-base text-white/70 pt-2">
                    Every project starts the same way. That's why we exist.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </ContentPageLayout>
  );
}
