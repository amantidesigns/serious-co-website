"use client";

import ContentPageLayout from "@/components/layout/ContentPageLayout";
import CaseStudyNavigation from "@/components/sections/CaseStudyNavigation";
import CaseStudyCTA from "@/components/sections/CaseStudyCTA";
import ProjectDetailsGridSection from "@/components/sections/ProjectDetailsGridSection";
import { caseStudies } from "@/content/caseStudies";

interface CaseStudyPageLayoutProps {
  slug: string;
  children?: React.ReactNode;
  structuredData?: Record<string, unknown>;
}

export default function CaseStudyPageLayout({ 
  slug, 
  children, 
  structuredData 
}: CaseStudyPageLayoutProps) {
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) return null;

  // Map tech stack items with icons
  const techStackItems = (caseStudy.techStack || []).map((item) => {
    let icon = undefined;
    
    // Import icons dynamically based on what's needed
    if (item.icon === "figma") {
      icon = <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm8-8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
      </svg>;
    } else if (item.icon === "vercel") {
      icon = <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 22.525H0l12-21.05 12 21.05z"/>
      </svg>;
    } else if (item.icon === "cursor") {
      icon = <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>;
    } else if (item.icon === "lovable") {
      icon = <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>;
    } else if (item.icon === "webflow") {
      icon = <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>;
    } else if (item.icon === "midjourney") {
      icon = <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>;
    }
    
    return { ...item, icon };
  });

  return (
    <ContentPageLayout centerTitle={false}>
      <div className="relative z-20 space-y-32 text-white">
        
        {/* Hero Section with Eyebrow + Descriptive Subheading */}
        <div className="space-y-6 max-w-4xl pt-20 lg:pt-24">
          <h1 className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60">
            Case Study
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white">
            {caseStudy.title}
          </h2>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl">
            {caseStudy.description}
          </p>
          
          {/* Project Details Grid Section */}
          <div className="pt-10">
            <ProjectDetailsGridSection 
              duration={caseStudy.turnaround || ""}
              meetVia={caseStudy.clientSource || ""}
              teamMembers={caseStudy.designTeam || []}
              techStackItems={techStackItems}
            />
          </div>
        </div>

        {/* Project Media - This is where children content goes */}
        {children}

        {/* Case Study Navigation */}
        <CaseStudyNavigation currentSlug={slug} />

        {/* CTA Section */}
        <CaseStudyCTA />
      </div>
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </ContentPageLayout>
  );
}
