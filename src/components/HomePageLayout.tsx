import { ChevronRight } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import StarryBackground from "./StarryBackground";
import PageFooter from "./PageFooter";
import FAQButton from "./FAQButton";
import { theme } from "@/lib/theme";

const HomePageLayout = () => {
  return (
    <section className={`relative ${theme.spacing.padding.section} pb-0 overflow-hidden`} style={{ backgroundColor: theme.colors.primary.blue }}>
      <StarryBackground />

      {/* Galaxy background layer (more visible) */}
      <div className={`absolute top-0 left-0 w-full h-full ${theme.zIndex.base}`}>
        <img src="/galaxy-ascii.png" className={`w-full h-full object-cover ${theme.effects.opacity.star} animate-fade-in animate-pulse ${theme.borderRadius.lg}`} alt="" />
      </div>

      <div className={`relative ${theme.zIndex.overlay} container ${theme.sizing.maxWidth.xxl} mx-auto px-4 sm:px-6 min-h-[100svh] grid grid-rows-[1fr_auto] grid-areas-[title_footer] pb-8`}> 
        {/* Title Area */}
        <div className={`grid-area-title flex items-center ${theme.zIndex.base} lg:${theme.sizing.maxWidth.sm} ${theme.sizing.width.container} w-full lg:w-auto`}>
          <h2 
            className={`text-left ${theme.typography.fontWeight.extralight} ${theme.typography.letterSpacing.tight} leading-tight`} 
            style={{ 
              color: theme.colors.primary.white,
              fontSize: 'clamp(1.875rem, 4vw + 1rem, 4.5rem)',
              lineHeight: '1.1'
            }}
          >
            A Very Serious<br />Company
          </h2>
        </div>
        
        {/* Footer Area */}
        <div className="grid-area-footer">
          <PageFooter />
        </div>
        
        <FAQButton />
      </div>
    </section>
  );
};

export { HomePageLayout };
