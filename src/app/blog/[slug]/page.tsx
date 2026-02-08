import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPageLayout from "@/components/layout/ContentPageLayout";
import BlogPostContent from "./BlogPostContent";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found - A Very Serious Company" };
  }

  return {
    title: `${post.title} - A Very Serious Company`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same tags, excluding current post)
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter(
      (p) =>
        p.slug !== post.slug &&
        p.tags.some((tag) => post.tags.includes(tag))
    )
    .slice(0, 3)
    .map(({ content, ...rest }) => rest);

  return (
    <ContentPageLayout centerTitle={false}>
      <BlogPostContent post={post} relatedPosts={relatedPosts} />

      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: {
              "@type": "Organization",
              name: post.author.name,
            },
            publisher: {
              "@type": "Organization",
              name: "A Very Serious Company",
              url: "https://averyseriouscompany.com",
            },
            image: post.coverImage,
            url: `https://averyseriouscompany.com/blog/${post.slug}`,
            keywords: post.tags.join(", "),
          }),
        }}
      />
    </ContentPageLayout>
  );
}
