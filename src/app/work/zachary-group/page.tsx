import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyPageLayout from "@/components/sections/CaseStudyPageLayout";

export const metadata: Metadata = {
  title: "The Zachary Group Case Study - A Very Serious Company",
  description:
    "Expert insurance advisors providing comprehensive risk management across North America. We designed a modular digital platform serving diverse industries with brand cohesion.",
  openGraph: {
    title: "The Zachary Group Case Study - A Very Serious Company",
    description:
      "Insurance advisory platform specializing in real estate, education, and construction industries.",
    images: [
      {
        url: "/projects/zachary-group/zachary-group-01.png",
        width: 1200,
        height: 630,
        alt: "The Zachary Group Insurance Platform Design",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Zachary Group Case Study - A Very Serious Company",
    description:
      "Modular insurance advisory platform design for diverse industries.",
    images: ["/projects/zachary-group/zachary-group-01.png"],
  },
};

export default function ZacharyGroupCaseStudy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "The Zachary Group Insurance Platform",
    description:
      "Insurance services platform design serving multiple industries.",
    creator: {
      "@type": "Organization",
      name: "A Very Serious Company",
      url: "https://avery-serious-company.com",
    },
    dateCreated: "2024",
    genre: "Web Design Case Study",
    keywords: [
      "insurance",
      "risk management",
      "web design",
      "modular design",
      "multi-industry",
    ],
    url: "https://avery-serious-company.com/work/zachary-group",
    image:
      "https://avery-serious-company.com/projects/zachary-group/zachary-group-01.png",
    isPartOf: {
      "@type": "CollectionPage",
      name: "Our Work",
      url: "https://avery-serious-company.com/work",
    },
  };

  return (
    <CaseStudyPageLayout
      slug="zachary-group"
      structuredData={structuredData}
    >
      {/* Hero Image */}
      <div className="rounded-xl border border-white/15 overflow-hidden bg-black/20 backdrop-blur-sm max-w-4xl">
        <Image
          src="/projects/zachary-group/zachary-group-01.png"
          alt="The Zachary Group insurance platform design"
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
          The Zachary Group provides insurance across diverse
          industries—real estate, education, construction—which meant speaking to
          vastly different audiences simultaneously. They needed a platform that
          could serve all of them without feeling generic or diluted.
        </p>

        <h3 className="text-2xl font-light text-white pt-4">Our Approach</h3>
        <p className="text-lg text-white/70 leading-relaxed">
          We organized their offerings using a modular card-based layout where
          each industry gets its own visual identity through custom iconography
          and color accents. This lets different audiences immediately recognize
          their sector while maintaining brand cohesion. The homepage uses a
          dynamic filtering system that lets visitors self-select their industry,
          instantly reconfiguring content to show relevant services.
        </p>
        <p className="text-lg text-white/70 leading-relaxed">
          We directed custom photography featuring real business
          environments—construction sites, educational facilities, restaurant
          kitchens—rather than generic stock imagery. The layout adapts
          aggressively across breakpoints, shifting from multi-column grid on
          desktop to linear, swipeable cards on mobile.
        </p>
      </div>

      {/* Gallery */}
      <div className="space-y-6 max-w-4xl">
        <h3 className="text-2xl font-light text-white">Project Gallery</h3>
        <div className="grid grid-cols-1 gap-6">
          {[2, 3, 4, 5].map((num) => (
            <div
              key={num}
              className="rounded-xl border border-white/15 overflow-hidden bg-black/20 backdrop-blur-sm"
            >
              <Image
                src={`/projects/zachary-group/zachary-group-0${num}.png`}
                alt={`The Zachary Group design ${num}`}
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
