"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { theme } from "@/lib/theme";

interface PageFooterProps {
  className?: string;
}

export default function PageFooter({ className = "" }: PageFooterProps) {
  return (
    <div className={`absolute ${theme.position.absolute.bottomLarge} left-0 right-0 ${theme.zIndex.base} ${className}`}>
      <div className={`container ${theme.sizing.maxWidth.xxl} mx-auto px-4 sm:px-6`}>
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-8">
          {/* Left side - Company Description */}
          <div className={`w-full lg:${theme.sizing.maxWidth.sm} lg:${theme.sizing.width.container}`}>
            <p className={`${theme.spacing.margin.lg} ${theme.typography.fontWeight.normal} ${theme.typography.lineHeight.normal} text-sm sm:text-base lg:text-lg`} style={{ color: theme.colors.primary.white }}>
              <span className="pr-2" style={{ color: theme.colors.primary.white }}>
                A <em>Very</em> Serious Company is a creative agency.
              </span>{" "}
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              We build websites, create advertisements, and solve{" "}
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              specific business problems.
            </p>
          </div>

          {/* Right side - Tagline and Contact */}
          <div className={`flex flex-col items-start lg:items-end w-full lg:${theme.sizing.maxWidth.xs}`}>
            <h2 className={`text-left lg:text-right font-playfair text-3xl sm:text-4xl md:text-5xl lg:${theme.typography.fontSize.huge} xl:${theme.typography.fontSize.enormous} ${theme.typography.letterSpacing.tighter} mb-4 leading-tight`} style={{ color: theme.colors.primary.white }}>
              We take simple ideas <em>seriously.</em>
            </h2>
            <div className={`flex ${theme.spacing.gap.xs}`}>
              <a 
                href="mailto:hello@averyseriouscompany.com?subject=Hello from A Very Serious Company Website&body=Hi there,%0D%0A%0D%0AI'm interested in learning more about your services.%0D%0A%0D%0AThanks!"
                className={`group self-start lg:self-end ${theme.spacing.margin.lg} ${theme.sizing.height.xs} w-full sm:w-auto ${theme.sizing.width.xs} flex cursor-pointer ${theme.effects.hover.scale} items-center justify-center ${theme.spacing.gap.xs} ${theme.typography.fontWeight.thin} ${theme.borderRadius.full} border bg-transparent ${theme.spacing.padding.xs} py-1 ${theme.typography.letterSpacing.tight} ${theme.transition.all} ${theme.transition.duration.normal} text-xs sm:text-sm`}
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
                <span className="truncate">hello@averyseriouscompany.com</span>
                <ChevronRight className={`size-3 sm:size-4 mt-1 flex-shrink-0 ${theme.transition.all} ease-out group-hover:rotate-0`} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
