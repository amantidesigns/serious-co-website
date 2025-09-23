import { HomePageLayout } from "@/components/HomePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Very Serious Company - Creative Agency",
  description: "We take simple ideas seriously. A creative agency that builds websites, creates advertisements, and solves specific business problems.",
  keywords: ["creative agency", "web design", "advertising", "business solutions", "website development", "branding", "digital marketing"],
  openGraph: {
    title: "A Very Serious Company - Creative Agency",
    description: "We take simple ideas seriously. A creative agency that builds websites, creates advertisements, and solves specific business problems.",
    type: "website",
    url: "https://averyseriouscompany.com",
    images: [
      {
        url: "/A Very Serious Company.jpeg",
        width: 1200,
        height: 630,
        alt: "A Very Serious Company - Creative Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Very Serious Company - Creative Agency",
    description: "We take simple ideas seriously. A creative agency that builds websites, creates advertisements, and solves specific business problems.",
    images: ["/A Very Serious Company.jpeg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "A Very Serious Company",
    "description": "We take simple ideas seriously. A creative agency that builds websites, creates advertisements, and solves specific business problems.",
    "url": "https://averyseriouscompany.com",
    "logo": "https://averyseriouscompany.com/icon.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": "customer service",
      "email": "hello@averyseriouscompany.com"
    },
    "sameAs": [],
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "A Very Serious Company Team"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 40.7128,
        "longitude": -74.0060
      },
      "geoRadius": "10000000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Creative Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Development",
            "description": "We create beautiful, functional websites that help your business grow and connect with customers effectively."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Creative Advertising",
            "description": "From concept to execution, we design advertisements that capture attention and drive results"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Solutions",
            "description": "We solve specific business problems with creative thinking and strategic implementation tailored to your needs"
          }
        }
      ]
    }
  };

  return (
    <div className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomePageLayout />
    </div>
  );
}