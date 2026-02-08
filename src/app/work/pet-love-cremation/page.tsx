import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyPageLayout from "@/components/sections/CaseStudyPageLayout";

export const metadata: Metadata = {
  title: "Pet Love Cremation & Memorial Case Study - A Very Serious Company",
  description:
    "A compassionate digital platform for pet memorial services. See how we designed a gentle, purposeful user experience that helps grieving families honor their beloved pets with dignity.",
  openGraph: {
    title:
      "Pet Love Cremation & Memorial Case Study - A Very Serious Company",
    description:
      "A compassionate digital platform for pet memorial services helping families honor their beloved pets.",
    images: [
      {
        url: "/projects/pet-love/pet-love-01.png",
        width: 1200,
        height: 630,
        alt: "Pet Love Cremation & Memorial Website Design",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pet Love Cremation & Memorial Case Study - A Very Serious Company",
    description:
      "A compassionate digital platform for pet memorial services.",
    images: ["/projects/pet-love/pet-love-01.png"],
  },
};

export default function PetLoveCremationCaseStudy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Pet Love Cremation & Memorial Platform",
    description:
      "Compassionate pet memorial services platform design case study.",
    creator: {
      "@type": "Organization",
      name: "A Very Serious Company",
      url: "https://avery-serious-company.com",
    },
    dateCreated: "2024",
    genre: "Web Design Case Study",
    keywords: [
      "pet services",
      "memorial",
      "compassionate design",
      "web design",
      "user experience",
    ],
    url: "https://avery-serious-company.com/work/pet-love-cremation",
    image:
      "https://avery-serious-company.com/projects/pet-love/pet-love-01.png",
    isPartOf: {
      "@type": "CollectionPage",
      name: "Our Work",
      url: "https://avery-serious-company.com/work",
    },
  };

  return (
    <CaseStudyPageLayout
      slug="pet-love-cremation"
      structuredData={structuredData}
    >
      {/* Hero Image */}
      <div className="rounded-xl border border-white/15 overflow-hidden bg-black/20 backdrop-blur-sm max-w-4xl">
        <Image
          src="/projects/pet-love/pet-love-01.png"
          alt="Pet Love Cremation & Memorial platform design"
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
          Pet Love Cremation &amp; Memorial serves families experiencing the
          heartbreaking loss of a beloved pet. The challenge wasn&apos;t just
          building a website—it was creating a digital space that feels like a
          warm, gentle hand on the shoulder during one of the hardest moments a
          pet owner faces.
        </p>

        <h3 className="text-2xl font-light text-white pt-4">Our Approach</h3>
        <p className="text-lg text-white/70 leading-relaxed">
          We designed the platform with soft pastels and gentle imagery—peaceful
          outdoor settings rather than clinical or overly sentimental photos—to
          create calm and comfort. The layout uses a single-column flow guiding
          families through one thoughtful step at a time, preventing overwhelm
          during grief. We structured the navigation to mirror the emotional
          journey: learning the process, exploring memorial options, then
          connecting with support.
        </p>
        <p className="text-lg text-white/70 leading-relaxed">
          Subtle animations ease transitions between sections, avoiding anything
          jarring. The imagery maintains a soft, slightly blurred quality that
          feels gentle on the eyes and heart. Every design decision was made with
          empathy as the primary lens.
        </p>
      </div>

      {/* Gallery */}
      <div className="space-y-6 max-w-4xl">
        <h3 className="text-2xl font-light text-white">Project Gallery</h3>
        <div className="grid grid-cols-1 gap-6">
          {[2, 3, 4].map((num) => (
            <div
              key={num}
              className="rounded-xl border border-white/15 overflow-hidden bg-black/20 backdrop-blur-sm"
            >
              <Image
                src={`/projects/pet-love/pet-love-0${num}.png`}
                alt={`Pet Love Cremation design ${num}`}
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
