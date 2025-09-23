import type { Metadata } from "next";
import ContentPageLayout from "@/components/ContentPageLayout";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "Case Studies - A Very Serious Company",
  description: "Explore our portfolio of successful projects. From luxury spirits brands to healthcare services, see how we take simple ideas seriously and deliver exceptional results.",
  openGraph: {
    title: "Case Studies - A Very Serious Company",
    description: "Explore our portfolio of successful projects. From luxury spirits brands to healthcare services, see how we take simple ideas seriously and deliver exceptional results.",
    images: [
      {
        url: "/A Very Serious Company.jpeg",
        width: 1200,
        height: 630,
        alt: "A Very Serious Company - Case Studies",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies - A Very Serious Company",
    description: "Explore our portfolio of successful projects. From luxury spirits brands to healthcare services, see how we take simple ideas seriously and deliver exceptional results.",
    images: ["/A Very Serious Company.jpeg"],
  },
};


export default function CaseStudiesPage() {
  return (
    <ContentPageLayout title="Case Studies">
      <CaseStudiesClient />
      
      {/* WebSite Collection Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Case Studies - A Very Serious Company",
            "description": "Explore our portfolio of successful projects. From luxury spirits brands to healthcare services, see how we take simple ideas seriously and deliver exceptional results.",
            "url": "https://avery-serious-company.com/case-studies",
            "mainEntity": {
              "@type": "ItemList",
              "name": "Creative Agency Case Studies",
              "description": "Portfolio of web design and brand development projects",
              "numberOfItems": 6,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Jayded AF Premium Gin Brand Website",
                    "url": "https://avery-serious-company.com/case-studies/jayded-af",
                    "description": "Premium gin martini brand website design case study"
                  }
                },
                {
                  "@type": "ListItem", 
                  "position": 2,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "HealThrive Recovery Healthcare Website",
                    "url": "https://avery-serious-company.com/case-studies/healthrive-recovery",
                    "description": "Healthcare website design case study for addiction treatment center"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Zachary Construction Group",
                    "url": "https://avery-serious-company.com/case-studies",
                    "description": "Construction company digital presence (Coming Soon)"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Pet Love Cremation & Memorial",
                    "url": "https://avery-serious-company.com/case-studies",
                    "description": "Pet memorial services digital platform (Coming Soon)"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Beka Wealth Advisors",
                    "url": "https://avery-serious-company.com/case-studies",
                    "description": "Financial advisory platform (Coming Soon)"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "The Last Paradox",
                    "url": "https://avery-serious-company.com/case-studies",
                    "description": "Warner Bros. Music Group artist digital experience (Coming Soon)"
                  }
                }
              ]
            },
            "isPartOf": {
              "@type": "WebSite",
              "name": "A Very Serious Company",
              "url": "https://avery-serious-company.com"
            }
          })
        }}
      />
    </ContentPageLayout>
  );
}