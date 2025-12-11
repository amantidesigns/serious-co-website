"use client";

interface CaseStudyHeroHeaderProps {
  projectName: string;
  description: string;
}

export default function CaseStudyHeroHeader({
  projectName,
  description
}: CaseStudyHeroHeaderProps) {
  return (
    <div className="text-center max-w-4xl mx-auto pt-20 lg:pt-24 space-y-6">
      <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60">
        Case Study
      </h1>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white">
        {projectName}
      </h2>
      <p className="text-lg sm:text-lg text-white/80 leading-relaxed max-w-4xl mx-auto">
        {description}
      </p>
    </div>
  );
}
