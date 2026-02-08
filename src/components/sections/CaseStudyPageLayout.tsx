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
    } else if (item.icon === "adobe") {
      icon = <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm6.232 0L24 22.624V1.376z"/>
      </svg>;
    } else if (item.icon === "microsoft") {
      icon = <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h11.377v11.372H0zm12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zm12.623 0H24V24H12.623z"/>
      </svg>;
    } else if (item.icon === "chatgpt") {
      icon = <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073z"/>
      </svg>;
    } else if (item.icon === "canva") {
      icon = <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.886 0C5.282 16.736 5.1 14.384 5.1 12c0-2.384.182-4.736 2.455-4.892 2.102-.144 6.784-.144 8.886 0C18.718 7.264 18.9 9.616 18.9 12c0 2.384-.182 4.736-2.459 4.892z"/>
      </svg>;
    } else if (item.icon === "squarespace") {
      icon = <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/>
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
