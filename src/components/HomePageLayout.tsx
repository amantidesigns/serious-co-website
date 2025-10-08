"use client";

import React from "react";
import { motion } from "framer-motion";
import ShootingStarBackground from "./ShootingStarBackground";
import PageFooter from "./PageFooter";
import { theme } from "@/lib/theme";
import CaseStudiesClient from "@/app/work/CaseStudiesClient";

const HomePageLayout = () => {
  return (
    <section className={`relative overflow-hidden`} style={{ backgroundColor: theme.colors.primary.blue }}>
      <ShootingStarBackground numberOfStars={100} />
      
      <div className="relative z-20 max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 pt-[var(--nav-h,64px)] pb-20"> 
        {/* Hero Section */}
        <motion.div 
          className="min-h-[70svh] flex flex-col justify-center space-y-6 py-20"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2
          }}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 1.0, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.4
            }}
          >
            <h1 
              className={`text-left font-playfair ${theme.typography.fontWeight.extralight} ${theme.typography.letterSpacing.tight} leading-tight mb-4`} 
              style={{ 
                color: theme.colors.primary.white,
                fontSize: 'clamp(2.5rem, 6vw + 1rem, 5rem)',
                lineHeight: '1.1'
              }}
            >
              Amanti Melkamu
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-white/90 mb-6">
              Product Designer
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              Product Designer specializing in AI-powered design, brand identity, and digital experiences. 
              From luxury spirits to healthcare platforms, I blend creativity with cutting-edge technology 
              to create meaningful solutions.
            </p>
          </motion.div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.8
          }}
        >
          <CaseStudiesClient />
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="mt-32"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 1.0
          }}
        >
          <PageFooter />
        </motion.div>
      </div>
    </section>
  );
};

export { HomePageLayout };
