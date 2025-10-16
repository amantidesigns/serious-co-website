import type { Metadata } from "next";
import CaseStudyPageLayout from "@/components/CaseStudyPageLayout";
import { caseStudies } from "@/lib/content/caseStudies";

export const metadata: Metadata = {
  title: "Jayded AF Case Study - A Very Serious Company",
  description: "Premium gin martini brand website design case study. See how we created a sophisticated digital presence for Jayded AF using custom AI models and brand assets to match their craft cocktail experience.",
  openGraph: {
    title: "Jayded AF Case Study - A Very Serious Company",
    description: "Premium gin martini brand website design case study. See how we created a sophisticated digital presence for Jayded AF using custom AI models and brand assets to match their craft cocktail experience.",
    images: [
      {
        url: "/jayded-af-project-video.mp4",
        width: 1200,
        height: 630,
        alt: "Jayded AF Premium Gin Brand Website Design",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayded AF Case Study - A Very Serious Company",
    description: "Premium gin martini brand website design case study. See how we created a sophisticated digital presence for Jayded AF using custom AI models and brand assets to match their craft cocktail experience.",
    images: ["/jayded-af-project-video.mp4"],
  },
};

export default function JaydedAFCaseStudy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Jayded AF Premium Gin Brand Website",
    "description": "Premium gin martini brand website design case study. See how we created a sophisticated digital presence for Jayded AF using custom AI models and brand assets to match their craft cocktail experience.",
    "creator": {
      "@type": "Organization",
      "name": "A Very Serious Company",
      "url": "https://avery-serious-company.com"
    },
    "dateCreated": "2024",
    "genre": "Web Design Case Study",
    "keywords": ["premium gin", "luxury spirits", "brand website", "digital marketing", "craft cocktail", "brand development"],
    "about": {
      "@type": "Thing",
      "name": "Premium Spirits Brand Development"
    },
    "workExample": {
      "@type": "MediaObject",
      "contentUrl": "https://avery-serious-company.com/jayded-af-project-video.mp4",
      "encodingFormat": "video/mp4"
    },
    "url": "https://avery-serious-company.com/case-studies/jayded-af",
    "image": "https://avery-serious-company.com/jayded-af-project-video.mp4",
    "isPartOf": {
      "@type": "CollectionPage",
      "name": "Case Studies",
      "url": "https://avery-serious-company.com/case-studies"
    }
  };

  return (
    <CaseStudyPageLayout 
      slug="jayded-af" 
      structuredData={structuredData}
    >
      {/* Project Media */}
      <div className="rounded-xl border border-white/15 overflow-hidden bg-black/20 backdrop-blur-sm max-w-4xl">
        <video
          src="/jayded-af-project-video.mp4"
          className="block w-full h-auto object-contain max-h-[60svh]"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </CaseStudyPageLayout>
  );
}
