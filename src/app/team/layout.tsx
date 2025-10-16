import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team - A Very Serious Company",
  description: "Meet the talented team behind A Very Serious Company. Learn about our designers, developers, copywriters, and AI strategist.",
  openGraph: {
    title: "Team - A Very Serious Company",
    description: "Meet the talented team behind A Very Serious Company.",
    images: [
      {
        url: "/a-very-serious-company.jpeg",
        width: 1200,
        height: 630,
        alt: "A Very Serious Company - Team",
      },
    ],
    type: "website",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
