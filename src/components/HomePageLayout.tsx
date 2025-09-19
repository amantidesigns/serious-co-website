import { ChevronRight } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import StarryBackground from "./StarryBackground";
import PageFooter from "./PageFooter";
import FAQButton from "./FAQButton";
import { theme } from "@/lib/theme";

const HomePageLayout = () => {
  return (
    <section className={`relative ${theme.spacing.padding.section} pb-0 ${theme.sizing.height.xl}`} style={{ backgroundColor: theme.colors.primary.blue }}>
      <StarryBackground />

      {/* Galaxy background layer (more visible) */}
      <div className={`absolute top-0 left-0 w-full h-full ${theme.zIndex.base}`}>
        <img src="/galaxy-ascii.png" className={`w-full h-full object-cover ${theme.effects.opacity.star} animate-fade-in animate-pulse ${theme.borderRadius.lg}`} alt="" />
      </div>

      <div className={`relative ${theme.zIndex.overlay} container ${theme.sizing.maxWidth.xxl} mx-auto px-4 sm:px-6 ${theme.sizing.height.viewport}`}>
        <div className={`absolute ${theme.position.absolute.bottomLarge} ${theme.zIndex.base} lg:${theme.sizing.maxWidth.sm} ${theme.sizing.width.container} w-full lg:w-auto`}>
          <h2 className={`absolute ${theme.position.absolute.topNegativeLarge} ${theme.zIndex.base} text-left ${theme.typography.fontWeight.extralight} text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl ${theme.typography.letterSpacing.tight} leading-none px-4 sm:px-0`} style={{ color: theme.colors.primary.white }}>
            A Very Serious Company
          </h2>
        </div>
        
        <PageFooter />
        <FAQButton />
      </div>
    </section>
  );
};

export { HomePageLayout };
