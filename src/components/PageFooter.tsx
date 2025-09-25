"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { theme } from "@/lib/theme";

interface PageFooterProps {
  className?: string;
}

export default function PageFooter({ className = "" }: PageFooterProps) {
  return (
    <div className={`relative ${theme.zIndex.base} ${className}`}>
      <div className={`container ${theme.sizing.maxWidth.xxl} mx-auto px-4 sm:px-6`}>
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-8">
          {/* Left side - Company Description */}
          <div className={`max-w-sm w-full lg:w-auto`}>
            <p className={`${theme.spacing.margin.lg} ${theme.sizing.maxWidth.sm} ${theme.typography.fontWeight.normal} ${theme.typography.lineHeight.normal} text-sm sm:text-base lg:text-lg`} style={{ color: theme.colors.primary.white }}>
              A <em>Very</em> Serious Company is a creative agency.
              <br />
              We create serious, high-end websites, graphics, and videos using next-gen AI.
            </p>
          </div>

          {/* Right side - Tagline and Contact */}
          <div className={`flex flex-col items-start lg:items-end max-w-md w-full lg:w-auto`}>
            <h2 className={`text-left lg:text-right font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${theme.typography.letterSpacing.tighter} mb-4 leading-tight`} style={{ color: theme.colors.primary.white }}>
              We&nbsp;take simple&nbsp;ideas <em>seriously.</em>
            </h2>
            <div className={`flex ${theme.spacing.gap.xs}`}>
              <a 
                href="mailto:hello@averyseriouscompany.com?subject=Hello from A Very Serious Company Website&body=Hi there,%0D%0A%0D%0AI'm interested in learning more about your services.%0D%0A%0D%0AThanks!"
                className={`group self-start lg:self-end ${theme.spacing.margin.lg} ${theme.sizing.height.xs} ${theme.sizing.width.xs} flex cursor-pointer ${theme.effects.hover.scale} items-center justify-center ${theme.spacing.gap.xs} font-medium ${theme.borderRadius.full} border ${theme.spacing.padding.xs} py-1 text-xs sm:text-sm tracking-normal ${theme.transition.all} ${theme.transition.duration.normal}`}
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
                hello@averyseriouscompany.com
                <ChevronRight className={`size-3 sm:size-4 mt-1 ${theme.transition.all} ease-out group-hover:rotate-0`} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
