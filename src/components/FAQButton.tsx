"use client";

import React from "react";
import { theme } from "@/lib/theme";

interface FAQButtonProps {
  className?: string;
  variant?: 'floating-top-right' | 'section-bottom-right';
}

export default function FAQButton({ className = "", variant = 'section-bottom-right' }: FAQButtonProps) {
  const baseButtonClass = `text-xs sm:text-sm font-medium rounded-full border px-4 py-2 tracking-normal transition-all duration-200 whitespace-nowrap`;
  const isFloating = variant === 'floating-top-right';
  return (
    <div
      className={
        isFloating
          ? `hidden lg:block absolute right-4 sm:right-6 lg:right-8 ${theme.zIndex.overlay} ${className}`
          : `hidden lg:block absolute bottom-12 right-4 sm:right-6 lg:right-8 ${theme.zIndex.overlay} ${className}`
      }
      style={
        isFloating
          ? {
              top: 'calc(var(--nav-h, 64px) + 60px)',
            }
          : undefined
      }
    >
      <a 
        href="/faq" 
        className={baseButtonClass}
        style={{ 
          color: theme.colors.primary.white, 
          borderColor: theme.colors.primary.white,
          backgroundColor: 'transparent'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = theme.colors.primary.lightGray;
          e.currentTarget.style.color = theme.colors.primary.blue;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = theme.colors.primary.white;
        }}
      >
        <span className="hidden sm:inline">Questions? We have answers.</span>
        <span className="sm:hidden">FAQ</span>
      </a>
    </div>
  );
}
