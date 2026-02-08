import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyPageLayout from "@/components/sections/CaseStudyPageLayout";

export const metadata: Metadata = {
  title: "Pacific Life Case Study - A Very Serious Company",
  description:
    "Presentation design for Pacific Life's insurance and financial services division. Complex insurance concepts transformed into digestible, sophisticated visual narratives.",
  openGraph: {
    title: "Pacific Life Case Study - A Very Serious Company",
    description:
      "Presentation design transforming complex insurance concepts into polished visual narratives.",
    images: [
      {
        url: "/projects/pacific-life/pacific-life-01.png",
        width: 1200,
        height: 630,
        alt: "Pacific Life Presentation Design",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pacific Life Case Study - A Very Serious Company",
    description:
      "Insurance presentation design that makes complex products feel accessible.",
    images: ["/projects/pacific-life/pacific-life-01.png"],
  },
};

export default function PacificLifeCaseStudy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Pacific Life Insurance Presentation Design",
    description:
      "Comprehensive presentation design for Pacific Life's insurance division.",
    creator: {
      "@type": "Organization",
      name: "A Very Serious Company",
      url: "https://avery-serious-company.com",
    },
    dateCreated: "2024",
    genre: "Presentation Design Case Study",
    keywords: [
      "insurance",
      "financial services",
      "presentation design",
      "Pacific Life",
      "enterprise",
    ],
    url: "https://avery-serious-company.com/work/pacific-life",
    image:
      "https://avery-serious-company.com/projects/pacific-life/pacific-life-01.png",
    isPartOf: {
      "@type": "CollectionPage",
      name: "Our Work",
      url: "https://avery-serious-company.com/work",
    },
  };

  return (
    <CaseStudyPageLayout
      slug="pacific-life"
      structuredData={structuredData}
    >
      {/* Hero Image */}
      <div className="rounded-xl border border-white/15 overflow-hidden bg-black/20 backdrop-blur-sm max-w-4xl">
        <Image
          src="/projects/pacific-life/pacific-life-01.png"
          alt="Pacific Life presentation design"
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
          Pacific Life needed presentation materials that could make complex
          insurance concepts digestible without losing sophistication. The
          existing decks were dense, text-heavy, and didn&apos;t reflect the
          caliber of the product being presented to prospective clients.
        </p>

        <h3 className="text-2xl font-light text-white pt-4">Our Approach</h3>
        <p className="text-lg text-white/70 leading-relaxed">
          We built strong visual hierarchy using bold typography for key messages
          and muted tones for supporting details—guiding the eye exactly where
          it needs to go. Each slide follows a consistent grid system that
          creates rhythm, making it easier for audiences to parse information
          quickly. Pacific Life&apos;s brand colors are used as strategic accents
          rather than overwhelming the slides.
        </p>
        <p className="text-lg text-white/70 leading-relaxed">
          The result is a presentation system that elevates their business
          development with clarity and polish, making complex products feel
          accessible and compelling to prospective clients.
        </p>
      </div>

      {/* Gallery */}
      <div className="space-y-6 max-w-4xl">
        <h3 className="text-2xl font-light text-white">Project Gallery</h3>
        <div className="grid grid-cols-1 gap-6">
          {[2, 3, 4, 5, 6].map((num) => (
            <div
              key={num}
              className="rounded-xl border border-white/15 overflow-hidden bg-black/20 backdrop-blur-sm"
            >
              <Image
                src={`/projects/pacific-life/pacific-life-0${num}.png`}
                alt={`Pacific Life presentation design ${num}`}
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
