import type { Metadata } from "next";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "Our Work - A Very Serious Company",
  description: "Here are some recent projects&nbsp;made real. From luxury spirits brands to healthcare services—simple ideas taken seriously.",
  openGraph: {
    title: "Our Work - A Very Serious Company",
    description: "Here are some recent projects&nbsp;made real. From luxury spirits brands to healthcare services—simple ideas taken seriously.",
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
    description: "Explore our portfolio of successful projects. From luxury spirits brands to healthcare services, see how we take simple ideas seriously and deliver exceptional results.",
    images: ["/a-very-serious-company.jpeg"],
  },
};


export default function OurWorkPage() {
  return (
    <ContentPageLayout>
      <CaseStudiesClient />
      
      {/* WebSite Collection Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Our Work - A Very Serious Company",
            "description": "Explore our portfolio of successful projects. From luxury spirits brands to healthcare services, see how we take simple ideas seriously and deliver exceptional results.",
            "url": "https://avery-serious-company.com/work",
            "mainEntity": {
              "@type": "ItemList",
              "name": "Creative Agency Portfolio",
              "description": "Portfolio of web design and brand development projects",
              "numberOfItems": 9,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Jayded AF Premium Gin Brand Website",
                    "url": "https://avery-serious-company.com/work/jayded-af",
                    "description": "Premium gin martini brand website design project"
                  }
                },
                {
                  "@type": "ListItem", 
                  "position": 2,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "HealThrive Recovery Healthcare Website",
                    "url": "https://avery-serious-company.com/work/healthrive-recovery",
                    "description": "Healthcare website design project for addiction treatment center"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Zachary Construction Group",
                    "url": "https://avery-serious-company.com/work/zachary-construction-group",
                    "description": "Complete brand identity and digital ecosystem for a premier general contractor"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Pet Love Cremation & Memorial",
                    "url": "https://avery-serious-company.com/work/pet-love-cremation",
                    "description": "Compassionate digital platform for pet memorial services"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Beka Wealth Advisors",
                    "url": "https://avery-serious-company.com/work/beka-wealth-advisors",
                    "description": "Professional financial advisory platform design"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "Pacific Life",
                    "url": "https://avery-serious-company.com/work/pacific-life",
                    "description": "Insurance presentation design for Pacific Life"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 7,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "EY Entrepreneur Of The Year",
                    "url": "https://avery-serious-company.com/work/weoy",
                    "description": "Event branding and advertising campaign for EY's global awards program"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 8,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "The Zachary Group",
                    "url": "https://avery-serious-company.com/work/zachary-group",
                    "description": "Insurance advisory platform serving multiple industries"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 9,
                  "item": {
                    "@type": "CreativeWork",
                    "name": "The Last Paradox",
                    "url": "https://avery-serious-company.com/work/the-last-paradox",
                    "description": "Warner Bros. Music Group artist digital experience"
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