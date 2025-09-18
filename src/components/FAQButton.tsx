"use client";

import React from "react";
import { theme } from "@/lib/theme";

interface FAQButtonProps {
  className?: string;
}

export default function FAQButton({ className = "" }: FAQButtonProps) {
  return (
    <div className={`absolute ${theme.position.absolute.top} right-4 sm:right-6 lg:right-8 ${theme.zIndex.overlay} ${className}`}>
      <a 
        href="/faq" 
        className={`text-xs sm:${theme.typography.fontSize.xs} ${theme.typography.fontWeight.thin} ${theme.borderRadius.full} border bg-transparent ${theme.spacing.padding.xs} py-1 sm:py-2 ${theme.typography.letterSpacing.tight} ${theme.transition.all} ${theme.transition.duration.normal} whitespace-nowrap`}
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
