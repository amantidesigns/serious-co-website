"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

interface ChatGPT101ButtonProps {
  className?: string;
  variant?: 'floating-top-right' | 'section-bottom-right';
}

export default function ChatGPT101Button({ 
  className = "", 
  variant = 'floating-top-right' 
}: ChatGPT101ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isFloating = variant === 'floating-top-right';

  return (
    <div
      className={
        isFloating
          ? `hidden lg:block absolute right-4 sm:right-6 lg:right-8 z-20 ${className}`
          : `hidden lg:block absolute bottom-12 right-4 sm:right-6 lg:right-8 z-20 ${className}`
      }
      style={
        isFloating
          ? {
              top: 'calc(var(--nav-h, 64px) + 60px)',
            }
          : undefined
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href="/chatgpt-101">
        <div className="relative">
          {/* Main Button */}
          <motion.div
            className="relative overflow-hidden rounded-full border border-white/40 bg-transparent text-white cursor-pointer backdrop-blur-sm"
            animate={{
              scale: isHovered ? 1.02 : 1,
              borderColor: isHovered ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.4)',
            }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Subtle background on hover */}
            <motion.div
              className="absolute inset-0 bg-white/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Thin shimmer line */}
            <motion.div
              className="absolute inset-0"
              animate={{
                background: isHovered 
                  ? 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)'
                  : 'transparent',
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: isHovered ? ['-100%', '200%'] : '-100%',
                }}
                transition={{
                  duration: 2,
                  repeat: isHovered ? Infinity : 0,
                  ease: 'linear',
                }}
                style={{ width: '40%' }}
              />
            </motion.div>

            <div className="relative px-4 py-2 flex items-center gap-2">
              <motion.div
                animate={{ 
                  rotate: isHovered ? [0, 10, -10, 0] : 0,
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles className="w-4 h-4 flex-shrink-0" />
              </motion.div>
              <span className="text-xs sm:text-sm font-medium tracking-normal whitespace-nowrap">
                <span className="hidden sm:inline">ChatGPT 101 Workshop</span>
                <span className="sm:hidden">ChatGPT 101</span>
              </span>
              <motion.div
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
              </motion.div>
            </div>
          </motion.div>

          {/* Sleek Tooltip - Blue/White Design */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -5 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.95, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="absolute top-full right-0 mt-3 w-80 z-30"
                style={{
                  transformOrigin: 'top right',
                }}
              >
                {/* Thin arrow pointer */}
                <div className="absolute -top-px right-6 w-3 h-3 transform rotate-45 bg-[#0B3D91] border-l border-t border-white/30" />
                
                {/* Tooltip container - Blue background with white borders */}
                <motion.div
                  className="relative bg-[#0B3D91] border border-white/30 rounded-lg overflow-hidden shadow-2xl"
                  initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                  animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {/* Thin decorative lines */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  
                  {/* Content */}
                  <div className="relative p-5 space-y-4">
                    {/* Header */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full border border-white/30 bg-white/5 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-white mb-1.5 leading-tight">
                          ChatGPT 101 Workshop
                        </h3>
                        <p className="text-xs text-white/70 leading-relaxed">
                          Hands-on training that teaches practical ChatGPT workflows, clear prompts, and responsible use.
                        </p>
                      </div>
                    </div>
                    
                    {/* Divider line */}
                    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    
                    {/* Footer info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        <span className="text-xs text-white/60 font-light">Beginner friendly</span>
                      </div>
                      <motion.div
                        className="flex items-center gap-1.5 text-xs font-medium text-white/90"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 }}
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-3 h-3" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Link>
    </div>
  );
}
