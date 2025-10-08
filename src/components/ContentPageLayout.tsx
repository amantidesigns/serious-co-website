"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ShootingStarBackground from "./ShootingStarBackground";
import PageFooter from "./PageFooter";
import { theme } from "@/lib/theme";

interface ContentPageLayoutProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  centerTitle?: boolean;
}

export default function ContentPageLayout({ 
  children, 
  title,
  className = "",
  centerTitle = true,
}: ContentPageLayoutProps) {
  return (
    <section className={`overflow-hidden`} style={{ backgroundColor: theme.colors.primary.blue }}>
      <ShootingStarBackground numberOfStars={60} />
      
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 pt-[var(--nav-h,64px)] min-h-[calc(100svh-var(--nav-h,64px))] grid grid-rows-[auto_1fr_auto]">
        
        {title && (
          <motion.h1 
            className={`relative z-20 ${centerTitle ? 'text-center' : 'text-left'} text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight font-playfair mb-16 leading-none pt-20 lg:pt-24`}
            style={{ color: theme.colors.primary.white }}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.3
            }}
          >
            {title.includes(' / ') ? (
              <>
                <span className="group relative inline-block align-baseline">
                  <Link 
                    href="/case-studies" 
                    className="opacity-60 hover:opacity-80 transition-opacity duration-200 no-underline"
                  >
                    {title.split(' / ')[0]}
                  </Link>
                  <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-white via-white/80 to-transparent group-hover:w-full transition-all duration-700 ease-out"></span>
                </span>
                <span className="font-mono"> / {title.split(' / ')[1]}</span>
              </>
            ) : (
              title
            )}
          </motion.h1>
        )}
        
        <motion.div 
          className="relative z-20 pb-32"
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
