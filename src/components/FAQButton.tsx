"use client";

import React from "react";
import { theme } from "@/lib/theme";

interface FAQButtonProps {
  className?: string;
}

export default function FAQButton({ className = "" }: FAQButtonProps) {
  return (
    <div className={`absolute ${theme.position.absolute.top} right-8 ${theme.zIndex.overlay} ${className}`}>
      <a 
        href="/faq" 
        className={`${theme.typography.fontSize.xs} ${theme.typography.fontWeight.thin} ${theme.borderRadius.full} border bg-transparent ${theme.spacing.padding.xs} py-2 ${theme.typography.letterSpacing.tight} ${theme.transition.all} ${theme.transition.duration.normal}`}
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
        Questions? We have answers.
      </a>
    </div>
  );
}
