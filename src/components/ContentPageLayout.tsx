"use client";

import React from "react";
import { motion } from "framer-motion";
import StarryBackground from "./StarryBackground";
import GalaxyBackground from "./GalaxyBackground";
import PageFooter from "./PageFooter";
import { theme } from "@/lib/theme";

interface ContentPageLayoutProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export default function ContentPageLayout({ 
  children, 
  title,
  className = "" 
}: ContentPageLayoutProps) {
  return (
    <section className={`overflow-hidden`} style={{ backgroundColor: theme.colors.primary.blue }}>
      <StarryBackground />
      
      <div className={`relative container ${theme.sizing.maxWidth.xxl} mx-auto px-4 sm:px-6 pt-[var(--nav-h,64px)] min-h-[calc(100svh-var(--nav-h,64px))] grid grid-rows-[auto_1fr_auto]`}>
        <GalaxyBackground />
        
        {title && (
          <motion.h1 
            className={`relative ${theme.zIndex.overlay} text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl ${theme.typography.letterSpacing.tight} font-playfair ${theme.spacing.margin.bottomSmall} leading-none pt-8`} 
            style={{ color: theme.colors.primary.white }}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.3
            }}
          >
            {title}
          </motion.h1>
        )}
        
        <motion.div 
          className="relative z-20"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.5
          }}
        >
          {children}
        </motion.div>
        
        <PageFooter />
      </div>
    </section>
  );
}
