import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | A Very Serious Company",
  description: "Notes on design, websites, and clear thinking applied consistently.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-balance text-4xl font-semibold tracking-tight">
          Blog
        </h1>
        <p className="mt-3 max-w-2xl text-pretty text-base text-muted-foreground">
          Clear thinking applied consistently. No fluff.
        </p>
      </header>

      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl border border-border/60 bg-background/40 p-6 backdrop-blur"
          >
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <time dateTime={post.date}>{post.date}</time>
              <span aria-hidden>•</span>
              <span>{post.readingMinutes} min read</span>
            </div>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:underline underline-offset-4"
              >
                {post.title}
              </Link>
            </h2>

            {post.excerpt ? (
              <p className="mt-3 text-pretty text-base text-muted-foreground">
                {post.excerpt}
              </p>
            ) : null}

            <div className="mt-4">
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                Read →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
