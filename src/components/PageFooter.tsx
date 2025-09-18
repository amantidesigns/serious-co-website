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
      <div className={`container ${theme.sizing.maxWidth.xxl} mx-auto`}>
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          {/* Left side - Company Description */}
          <div className={`${theme.sizing.maxWidth.sm} ${theme.sizing.width.container}`}>
            <p className={`${theme.spacing.margin.lg} ${theme.sizing.maxWidth.sm} ${theme.typography.fontWeight.normal} ${theme.typography.lineHeight.normal}`} style={{ color: theme.colors.primary.white }}>
              <span className="pr-2" style={{ color: theme.colors.primary.white }}>
                A <em>Very</em> Serious Company is a creative agency.
              </span>{" "}
              <br />
              We build websites, create advertisements, and solve <br />
              specific business problems.
            </p>
          </div>

          {/* Right side - Tagline and Contact */}
          <div className={`flex flex-col items-end ${theme.sizing.maxWidth.xs}`}>
            <h2 className={`text-right font-playfair ${theme.typography.fontSize.huge} ${theme.typography.letterSpacing.tighter} lg:${theme.typography.fontSize.enormous} mb-4`} style={{ color: theme.colors.primary.white }}>
              We take simple ideas <em>seriously.</em>
            </h2>
            <div className={`flex ${theme.spacing.gap.xs}`}>
              <a 
                href="mailto:hello@averyseriouscompany.com?subject=Hello from A Very Serious Company Website&body=Hi there,%0D%0A%0D%0AI'm interested in learning more about your services.%0D%0A%0D%0AThanks!"
                className={`group self-end ${theme.spacing.margin.lg} ${theme.sizing.height.xs} ${theme.sizing.width.xs} flex cursor-pointer ${theme.effects.hover.scale} items-center justify-center ${theme.spacing.gap.xs} ${theme.typography.fontWeight.thin} ${theme.borderRadius.full} border bg-transparent ${theme.spacing.padding.xs} py-1 ${theme.typography.letterSpacing.tight} ${theme.transition.all} ${theme.transition.duration.normal}`}
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
                <ChevronRight className={`size-4 mt-1 ${theme.transition.all} ease-out group-hover:rotate-0`} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
