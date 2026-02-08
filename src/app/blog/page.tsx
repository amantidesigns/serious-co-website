import type { Metadata } from "next";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import BlogClient from "./BlogClient";
import { getAllPosts, getAllTags } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog - A Very Serious Company",
  description:
    "Thoughts on design, technology, and craft. Weekly perspectives from the studio on what we're building, how we think, and why simplicity always wins.",
  openGraph: {
    title: "Blog - A Very Serious Company",
    description:
      "Thoughts on design, technology, and craft. Weekly perspectives from the studio on what we're building, how we think, and why simplicity always wins.",
    images: [
      {
        url: "/a-very-serious-company.jpeg",
        width: 1200,
        height: 630,
        alt: "A Very Serious Company - Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - A Very Serious Company",
    description:
      "Thoughts on design, technology, and craft. Weekly perspectives from the studio.",
    images: ["/a-very-serious-company.jpeg"],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  // Strip content from posts for the client component (no need to send full markdown)
  const postsWithoutContent = posts.map(({ content, ...rest }) => rest);

  return (
    <ContentPageLayout>
      <BlogClient
        posts={postsWithoutContent as Parameters<typeof BlogClient>[0]["posts"]}
        tags={tags}
      />

      {/* Blog structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "A Very Serious Company Blog",
            description:
              "Thoughts on design, technology, and craft from A Very Serious Company.",
            url: "https://averyseriouscompany.com/blog",
            publisher: {
              "@type": "Organization",
              name: "A Very Serious Company",
              url: "https://averyseriouscompany.com",
            },
            blogPost: posts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              datePublished: post.date,
              author: {
                "@type": "Organization",
                name: post.author.name,
              },
              url: `https://averyseriouscompany.com/blog/${post.slug}`,
            })),
          }),
        }}
      />
    </ContentPageLayout>
  );
}
