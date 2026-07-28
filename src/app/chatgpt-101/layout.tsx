import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatGPT 101 - A Very Serious Company",
  description: "A hands-on workshop that teaches teams and communities how to use ChatGPT effectively with real workflows, clear prompts, and responsible practices.",
  openGraph: {
    title: "ChatGPT 101 - A Very Serious Company",
    description: "A hands-on workshop that teaches teams and communities how to use ChatGPT effectively with real workflows, clear prompts, and responsible practices.",
    images: [
      {
        url: "/a-very-serious-company.jpeg",
        width: 1200,
        height: 630,
        alt: "ChatGPT 101 - A Very Serious Company",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT 101 - A Very Serious Company",
    description: "A hands-on workshop that teaches teams and communities how to use ChatGPT effectively with real workflows, clear prompts, and responsible practices.",
    images: ["/a-very-serious-company.jpeg"],
  },
};

export default function ChatGPT101Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
