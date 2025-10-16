import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - A Very Serious Company",
  description: "We build brands, websites, and creative content that actually work. Using modern AI workflows, we deliver high-craft creative at speed. Simple ideas executed properly.",
  openGraph: {
    title: "Our Services - A Very Serious Company",
    description: "We build brands, websites, and creative content that actually work. Using modern AI workflows, we deliver high-craft creative at speed. Simple ideas executed properly.",
    images: [
      {
        url: "/a-very-serious-company.jpeg",
        width: 1200,
        height: 630,
        alt: "A Very Serious Company - Our Services",
      },
    ],
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
