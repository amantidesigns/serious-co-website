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
      
      <div className={`relative container ${theme.sizing.maxWidth.xxl} mx-auto px-6 ${theme.sizing.height.viewport}`}>
        <GalaxyBackground />
        
        {title && (
          <h2 className={`relative ${theme.zIndex.overlay} ${theme.typography.fontSize.massive} lg:${theme.typography.fontSize.gigantic} ${theme.typography.letterSpacing.tight} font-playfair ${theme.spacing.margin.bottomSmall}`} style={{ color: theme.colors.primary.white }}>
            {title}
          </h2>
        )}
        
        {children}
        
        <PageFooter />
        <FAQButton />
      </div>
    </section>
  );
}
