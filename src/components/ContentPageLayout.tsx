import React from "react";
import StarryBackground from "./StarryBackground";
import GalaxyBackground from "./GalaxyBackground";
import PageFooter from "./PageFooter";
import FAQButton from "./FAQButton";
import { theme } from "@/lib/theme";

interface ContentPageLayoutProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export default function ContentPageLayout({ 
  children, 
  title,
  className = "" 
}: ContentPageLayoutProps) {
  return (
    <section className={`${theme.spacing.padding.section} pb-0 overflow-hidden`} style={{ backgroundColor: theme.colors.primary.blue }}>
      <StarryBackground />
      
      <div className={`relative container ${theme.sizing.maxWidth.xxl} mx-auto px-4 sm:px-6 pt-[var(--nav-h,64px)] min-h-[calc(100svh-var(--nav-h,64px))] grid grid-rows-[auto_1fr_auto]`}>
        <GalaxyBackground />
        
        {title && (
          <h2 className={`relative ${theme.zIndex.overlay} text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl ${theme.typography.letterSpacing.tight} font-playfair ${theme.spacing.margin.bottomSmall} leading-none`} style={{ color: theme.colors.primary.white }}>
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
