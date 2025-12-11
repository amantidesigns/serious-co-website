import type { Metadata } from "next";
import CaseStudyPageLayout from "@/components/sections/CaseStudyPageLayout";
import { caseStudies } from "@/content/caseStudies";

export const metadata: Metadata = {
  title: "HealThrive Recovery Case Study - A Very Serious Company",
  description: "Healthcare website design case study for addiction treatment center. See how we created a compassionate, trustworthy digital presence for HealThrive Recovery to help families find hope and healing.",
  openGraph: {
    title: "HealThrive Recovery Case Study - A Very Serious Company",
    description: "Healthcare website design case study for addiction treatment center. See how we created a compassionate, trustworthy digital presence for HealThrive Recovery to help families find hope and healing.",
    images: [
      {
        url: "/healthrive-recovery-project.png",
        width: 1200,
        height: 630,
        alt: "HealThrive Recovery Healthcare Website Design",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "HealThrive Recovery Case Study - A Very Serious Company",
    description: "Healthcare website design case study for addiction treatment center. See how we created a compassionate, trustworthy digital presence for HealThrive Recovery to help families find hope and healing.",
    images: ["/healthrive-recovery-project.png"],
  },
};

export default function HealThriveRecoveryCaseStudy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "HealThrive Recovery Healthcare Website",
    "description": "Healthcare website design case study for addiction treatment center. See how we created a compassionate, trustworthy digital presence for HealThrive Recovery to help families find hope and healing.",
    "creator": {
      "@type": "Organization",
      "name": "A Very Serious Company",
      "url": "https://avery-serious-company.com"
    },
    "dateCreated": "2024",
    "genre": "Healthcare Web Design Case Study",
    "keywords": ["healthcare website", "addiction treatment", "mental health", "digital healthcare", "compassionate design", "healthcare marketing"],
    "about": {
      "@type": "Thing",
      "name": "Healthcare Digital Marketing"
    },
    "workExample": {
      "@type": "MediaObject",
      "contentUrl": "https://avery-serious-company.com/healthrive-recovery-project.png",
      "encodingFormat": "image/png"
    },
    "url": "https://avery-serious-company.com/case-studies/healthrive-recovery",
    "image": "https://avery-serious-company.com/healthrive-recovery-project.png",
    "isPartOf": {
      "@type": "CollectionPage",
      "name": "Case Studies",
      "url": "https://avery-serious-company.com/case-studies"
    }
  };

  return (
    <CaseStudyPageLayout 
      slug="healthrive-recovery" 
      structuredData={structuredData}
    >
      {/* Project Media */}
      <div className="rounded-xl border border-white/15 overflow-hidden bg-black/20 backdrop-blur-sm max-w-4xl">
        <img
          src="/healthrive-recovery-project.png"
          alt="HealThrive Recovery project preview"
          className="block w-full h-auto object-contain max-h-[60svh]"
        />
      </div>
    </CaseStudyPageLayout>
  );
}
