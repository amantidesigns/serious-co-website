import { ChevronRight } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import StarryBackground from "./StarryBackground";
import PageFooter from "./PageFooter";
import FAQButton from "./FAQButton";
import { theme } from "@/lib/theme";

const HomePageLayout = () => {
  return (
    <section className={`relative overflow-hidden`} style={{ backgroundColor: theme.colors.primary.blue }}>
      <StarryBackground />
      
      {/* Galaxy zoom-in effect */}
      <div className={`absolute top-0 left-0 w-full h-full ${theme.zIndex.base} overflow-hidden`}>
        <img 
          src="/galaxy-ascii.png" 
          className={`w-full h-full object-cover ${theme.effects.opacity.star} animate-galaxy-zoom-in ${theme.borderRadius.lg}`} 
          alt="Galaxy approaching from distance" 
        />
      </div>

      <div className={`relative ${theme.zIndex.overlay} container ${theme.sizing.maxWidth.xxl} mx-auto px-4 sm:px-6 pt-[var(--nav-h,64px)] min-h-[calc(100svh-var(--nav-h,64px))] grid grid-rows-[1fr_auto] grid-areas-[title_footer]`}> 
        {/* Title Area */}
        <div className={`grid-area-title flex items-center ${theme.zIndex.base} lg:${theme.sizing.maxWidth.sm} ${theme.sizing.width.container} w-full lg:w-auto -mt-32 lg:mt-0`}>
          <h1 
            className={`text-left font-playfair ${theme.typography.fontWeight.extralight} ${theme.typography.letterSpacing.tight} leading-tight`} 
            style={{ 
              color: theme.colors.primary.white,
              fontSize: 'clamp(2.371875rem, 5.06vw + 1.265rem, 4.5rem)',
              lineHeight: '1.1'
            }}
          >
            A Very Serious<br />Company
          </h1>
        </div>
        
        {/* Footer Area */}
        <div className="grid-area-footer">
          <PageFooter />
        </div>
        
        <FAQButton variant="floating-top-right" />
      </div>
    </section>
  );
};

export { HomePageLayout };
