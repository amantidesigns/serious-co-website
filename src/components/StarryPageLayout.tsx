import React from "react";
import StarryBackground from "./StarryBackground";
import GalaxyBackground from "./GalaxyBackground";
import PageFooter from "./PageFooter";
import FAQButton from "./FAQButton";
import { theme } from "@/lib/theme";

interface StarryPageLayoutProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export default function StarryPageLayout({ 
  children, 
  title,
  className = "" 
}: StarryPageLayoutProps) {
  return (
    <section className={`${theme.spacing.padding.section} pb-0 ${theme.sizing.height.xl} ${className}`} style={{ backgroundColor: theme.colors.primary.blue }}>
      <StarryBackground />
      
      <div className={`relative container ${theme.sizing.maxWidth.xxl} mx-auto px-4 sm:px-6 ${theme.sizing.height.viewport}`}>
        <GalaxyBackground />
        
        {title && (
          <h2 className={`relative ${theme.zIndex.overlay} text-5xl sm:text-4xl md:text-5xl lg:${theme.typography.fontSize.massive} xl:${theme.typography.fontSize.gigantic} ${theme.typography.letterSpacing.tight} font-playfair ${theme.spacing.margin.bottomSmall} leading-none`} style={{ color: theme.colors.primary.white }}>
            {title}
          </h2>
        )}
        
        <div className="relative z-20">
          {children}
        </div>
        
        <PageFooter />
        <FAQButton />
      </div>
    </section>
  );
}
