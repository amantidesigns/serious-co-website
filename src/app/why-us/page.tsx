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
        <div className="pt-16 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            
            {/* Philosophy Statement */}
            <div className="text-center mb-16">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed text-white max-w-3xl mx-auto">
                This is what we mean by taking simple ideas <em>seriously</em>: understand what matters, then execute it properly.
              </p>
            </div>

            {/* Charlie Munger Quote - Enhanced Layout */}
            <div className="relative mb-16">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
              </div>

              {/* Quote Text */}
              <blockquote className="text-center mb-6">
                <p className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed text-white/90 italic max-w-4xl mx-auto">
                  "There is an old two-part rule that often works wonders in business, science, and elsewhere: take a simple, basic idea and take it very seriously."
                </p>
              </blockquote>

              {/* Attribution */}
              <div className="text-center">
                <p className="text-base text-white/60 font-light tracking-wide">
                  Charlie Munger
                </p>
              </div>
            </div>

            {/* Our Promise - Enhanced Layout */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/10">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full border border-white/20">
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  <p className="text-sm text-white/70 font-medium tracking-wide uppercase">
                    Our Promise
                  </p>
                </div>
                
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
                  Clear thinking applied consistently.
                </h3>
                
                <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
                  Every project starts the same way. That's why we exist.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </ContentPageLayout>
  );
}
