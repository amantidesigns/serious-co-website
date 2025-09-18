"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { theme } from "@/lib/theme";

interface ContactButtonProps {
  className?: string;
}

export default function ContactButton({ className = "" }: ContactButtonProps) {
  return (
    <div className={`absolute flex flex-col items-end bottom-32 ${theme.zIndex.base} ${theme.sizing.maxWidth.xs} lg:right-0 lg:bottom-40 ${className}`}>
      <h2 className={`relative ${theme.zIndex.overlay} text-right font-playfair ${theme.typography.fontSize.huge} ${theme.typography.letterSpacing.tighter} lg:${theme.typography.fontSize.enormous}`} style={{ color: '#000000' }}>
        We take simple ideas <em>seriously.</em>
      </h2>
      <div className={`flex ${theme.spacing.gap.xs}`}>
        <a 
          href="mailto:hello@averyseriouscompany.com?subject=Hello from A Very Serious Company Website&body=Hi there,%0D%0A%0D%0AI'm interested in learning more about your services.%0D%0A%0D%0AThanks!"
          className={`group self-end ${theme.spacing.margin.lg} ${theme.sizing.height.xs} ${theme.sizing.width.xs} flex cursor-pointer ${theme.effects.hover.scale} items-center justify-center ${theme.spacing.gap.xs} ${theme.typography.fontWeight.thin} ${theme.borderRadius.full} border bg-transparent ${theme.spacing.padding.xs} py-1 ${theme.typography.letterSpacing.tight} ${theme.transition.all} ${theme.transition.duration.normal}`}
          style={{ 
            color: '#000000', 
            borderColor: '#000000',
            backgroundColor: 'transparent'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.primary.lightGray;
            e.currentTarget.style.color = theme.colors.primary.blue;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#000000';
          }}
        >
          hello@averyseriouscompany.com
          <ChevronRight className={`size-4 mt-1 ${theme.transition.all} ease-out group-hover:rotate-0`} />
        </a>
      </div>
    </div>
  );
}
