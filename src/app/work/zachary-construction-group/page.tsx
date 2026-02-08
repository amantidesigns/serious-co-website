import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyPageLayout from "@/components/sections/CaseStudyPageLayout";

export const metadata: Metadata = {
  title: "Zachary Construction Group Case Study - A Very Serious Company",
  description:
    "Complete brand identity and digital ecosystem for a premier general contractor. Website, internal systems, marketing collateral, and brand development built from the ground up.",
  openGraph: {
    title: "Zachary Construction Group Case Study - A Very Serious Company",
    description:
      "Complete brand identity and digital ecosystem for a premier general contractor.",
    images: [
      {
        url: "/projects/zachary-construction/zachary-construction-01.png",
        width: 1200,
        height: 630,
        alt: "Zachary Construction Group Brand & Website Design",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zachary Construction Group Case Study - A Very Serious Company",
    description:
      "Complete brand identity and digital ecosystem for a premier general contractor.",
    images: ["/projects/zachary-construction/zachary-construction-01.png"],
  },
};

export default function ZacharyConstructionGroupCaseStudy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Zachary Construction Group Brand Identity & Website",
    description:
      "Complete brand identity and digital ecosystem design for a premier general contractor.",
    creator: {
      "@type": "Organization",
      name: "A Very Serious Company",
      url: "https://avery-serious-company.com",
    },
    dateCreated: "2024",
    genre: "Brand Identity & Web Design Case Study",
    keywords: [
      "construction",
      "brand identity",
      "web design",
      "digital ecosystem",
      "general contractor",
    ],
    url: "https://avery-serious-company.com/work/zachary-construction-group",
    image:
      "https://avery-serious-company.com/projects/zachary-construction/zachary-construction-01.png",
    isPartOf: {
      "@type": "CollectionPage",
      name: "Our Work",
      url: "https://avery-serious-company.com/work",
    },
  };

  return (
    <CaseStudyPageLayout
      slug="zachary-construction-group"
      structuredData={structuredData}
    >
      {/* Hero Image */}
      <div className="rounded-xl border border-white/15 overflow-hidden bg-black/20 backdrop-blur-sm max-w-4xl">
        <Image
          src="/projects/zachary-construction/zachary-construction-01.png"
          alt="Zachary Construction Group website design"
          width={1200}
          height={800}
          className="block w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Story Section */}
      <div className="max-w-3xl space-y-6">
        <h3 className="text-2xl font-light text-white">The Challenge</h3>
        <p className="text-lg text-white/70 leading-relaxed">
          Zachary Construction Group came to us at their inception—they needed
          everything built from the ground up. Not just a website, but an entire
          brand identity that would let a brand-new firm walk into competitive
          bids alongside established companies and look like they belonged there.
        </p>

        <h3 className="text-2xl font-light text-white pt-4">Our Approach</h3>
        <p className="text-lg text-white/70 leading-relaxed">
          We started with the foundation: a bold, geometric logo that
          communicates strength and precision—essential qualities in
          construction. The typography is clean and industrial, using a sturdy
          sans-serif that feels solid without being heavy-handed. The color
          palette centers on deep charcoal and construction orange, creating high
          contrast that commands attention while staying professional.
        </p>
        <p className="text-lg text-white/70 leading-relaxed">
          Beyond the website, we architected their entire digital
          ecosystem—SharePoint servers, internal documentation, marketing
          materials—ensuring consistency across every touchpoint. The result
          positions them as serious professionals from day one, helping them
          compete for major contracts alongside established firms.
        </p>
      </div>

      {/* Gallery */}
      <div className="space-y-6 max-w-4xl">
        <h3 className="text-2xl font-light text-white">Project Gallery</h3>
        <div className="grid grid-cols-1 gap-6">
          {[2, 3].map((num) => (
            <div
              key={num}
              className="rounded-xl border border-white/15 overflow-hidden bg-black/20 backdrop-blur-sm"
            >
              <Image
                src={`/projects/zachary-construction/zachary-construction-0${num}.png`}
                alt={`Zachary Construction Group design ${num}`}
                width={1200}
                height={800}
                className="block w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </CaseStudyPageLayout>
  );
}
