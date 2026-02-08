"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  featured: boolean;
  coverImage: string;
  author: {
    name: string;
    role: string;
  };
  readingTime: number;
}

interface BlogPostContentProps {
  post: BlogPost;
  relatedPosts: Omit<BlogPost, "content">[];
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostContent({
  post,
  relatedPosts,
}: BlogPostContentProps) {
  return (
    <div className="relative z-20 text-white">
      {/* Back navigation */}
      <motion.div
        className="mb-12 pt-20 lg:pt-24"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
      </motion.div>

      {/* Article Header */}
      <motion.header
        className="mb-12 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-white/60 hover:bg-white/20 hover:text-white/80 transition-all"
            >
              {tag}
            </Link>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair tracking-tight leading-[1.1] text-white mb-6">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-8">
          {post.excerpt}
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-white/40">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-medium text-white/60">
              {post.author.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <p className="text-white/70 font-medium text-sm">
                {post.author.name}
              </p>
              <p className="text-white/40 text-xs">{post.author.role}</p>
            </div>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTime} min read
          </span>
        </div>
      </motion.header>

      {/* Cover Image */}
      <motion.div
        className="relative aspect-[1.91/1] rounded-2xl overflow-hidden mb-16 border border-white/10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91]/60 to-transparent" />
      </motion.div>

      {/* Article Content */}
      <motion.article
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="prose prose-invert prose-lg max-w-none [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:font-light [&>h2]:tracking-tight [&>h2]:text-white [&>h2]:mt-16 [&>h2]:mb-6 [&>h2]:border-t [&>h2]:border-white/10 [&>h2]:pt-12 [&>h3]:text-xl [&>h3]:font-medium [&>h3]:text-white/90 [&>h3]:mt-10 [&>h3]:mb-4 [&>p]:text-white/70 [&>p]:leading-relaxed [&>p]:mb-6 [&>ul]:text-white/70 [&>ul]:space-y-2 [&>ul]:mb-6 [&>ol]:text-white/70 [&>ol]:space-y-2 [&>ol]:mb-6 [&>blockquote]:border-l-2 [&>blockquote]:border-white/30 [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-white/60 [&>blockquote>p]:text-white/60 [&_strong]:text-white [&_em]:text-white/80 [&_a]:text-white [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-white/30 [&_a:hover]:decoration-white/60 [&_code]:bg-white/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:text-white/80 [&_pre]:bg-white/5 [&_pre]:border [&_pre]:border-white/10 [&_pre]:rounded-xl [&_pre]:p-6 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_table]:w-full [&_table]:border-collapse [&_th]:text-left [&_th]:text-white/60 [&_th]:text-sm [&_th]:font-medium [&_th]:pb-3 [&_th]:border-b [&_th]:border-white/10 [&_td]:text-white/60 [&_td]:text-sm [&_td]:py-3 [&_td]:border-b [&_td]:border-white/5 [&_hr]:border-white/10 [&_hr]:my-12 [&>*:first-child]:mt-0 [&_li]:text-white/70">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </motion.article>

      {/* Share / Tags Footer */}
      <motion.div
        className="max-w-3xl mx-auto mt-20 pt-10 border-t border-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/50 hover:bg-white/10 hover:text-white/70 transition-all"
              >
                {tag}
              </Link>
            ))}
          </div>
          <p className="text-xs text-white/30">
            {formatDate(post.date)} &middot; {post.readingTime} min read
          </p>
        </div>
      </motion.div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <motion.section
          className="mt-24 pt-16 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-sm font-medium tracking-widest uppercase text-white/60">
              More from the blog
            </h2>
            <Link
              href="/blog"
              className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1"
            >
              View all
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group block"
              >
                <article className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 h-full">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={relatedPost.coverImage}
                      alt={relatedPost.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91] via-[#0B3D91]/40 to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {relatedPost.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-white/10 text-[11px] font-medium text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-base font-light text-white mb-2 group-hover:text-white/90 transition-colors leading-snug">
                      {relatedPost.title}
                    </h3>
                    <p className="text-xs text-white/40">
                      {formatDate(relatedPost.date)} &middot;{" "}
                      {relatedPost.readingTime} min read
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </motion.section>
      )}
    </div>
  );
}
