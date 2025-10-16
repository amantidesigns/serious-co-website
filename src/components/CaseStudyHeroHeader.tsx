"use client";

import { theme } from "@/lib/theme";

interface CaseStudyHeroHeaderProps {
  projectName: string;
  description: string;
}

export default function CaseStudyHeroHeader({ 
  projectName, 
  description 
}: CaseStudyHeroHeaderProps) {
  return (
    <div className={`text-center ${theme.spacing.space.xl} ${theme.sizing.maxWidth.lg} mx-auto pt-20 lg:pt-24`}>
      <h1 className={`${theme.typography.fontSize.xs} sm:${theme.typography.fontSize.sm} font-medium tracking-widest uppercase text-white/60`}>
        Case Study
      </h1>
      <h2 className={`${theme.typography.fontSize.xxxl} sm:text-4xl lg:text-5xl font-light leading-tight text-white`}>
        {projectName}
      </h2>
      <p className={`${theme.typography.fontSize.lg} sm:${theme.typography.fontSize.lg} text-white/80 leading-relaxed ${theme.sizing.maxWidth.lg} mx-auto`}>
        {description}
      </p>
    </div>
  );
}
