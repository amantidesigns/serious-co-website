import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";
import CaseStudiesClient from "./CaseStudiesClient";
import { getCaseStudies } from "@/lib/content/case-studies";

export const metadata: Metadata = {
  title: "Our Work - A Very Serious Company",
  description:
    "Here are some recent projects made real. From luxury spirits brands to healthcare services—simple ideas taken seriously.",
  openGraph: {
    title: "Our Work - A Very Serious Company",
    description:
      "Here are some recent projects made real. From luxury spirits brands to healthcare services—simple ideas taken seriously.",
    images: [
      {
        url: "/a-very-serious-company.jpeg",
        width: 1200,
        height: 630,
        alt: "A Very Serious Company - Our Work",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work - A Very Serious Company",
    description:
      "Explore our portfolio of successful projects. From luxury spirits brands to healthcare services, see how we take simple ideas seriously and deliver exceptional results.",
    images: ["/a-very-serious-company.jpeg"],
  },
};

export default function OurWorkPage() {
  const studies = getCaseStudies();
  const structuredItemList = studies.map((study, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: study.title,
      description: study.description,
      url:
        study.status === "published"
          ? `https://avery-serious-company.com/work/${study.slug}`
          : "https://avery-serious-company.com/work",
    },
  }));

  return (
    <ContentPageLayout>
      <CaseStudiesClient studies={studies} />

      {/* Website Collection Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Our Work - A Very Serious Company",
            description:
              "Explore our portfolio of successful projects. From luxury spirits brands to healthcare services, see how we take simple ideas seriously and deliver exceptional results.",
            url: "https://avery-serious-company.com/work",
            mainEntity: {
              "@type": "ItemList",
              name: "Creative Agency Portfolio",
              description: "Portfolio of web design and brand development projects",
              numberOfItems: studies.length,
              itemListElement: structuredItemList,
            },
            isPartOf: {
              "@type": "WebSite",
              name: "A Very Serious Company",
              url: "https://avery-serious-company.com",
            },
          }),
        }}
      />
    </ContentPageLayout>
  );
}
