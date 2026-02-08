"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  featured: boolean;
  coverImage: string;
  author: {
    name: string;
    role: string;
  };
  readingTime: number;
}

interface BlogClientProps {
  posts: BlogPost[];
  tags: string[];
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogClient({ posts, tags }: BlogClientProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const featuredPosts = useMemo(
    () => posts.filter((p) => p.featured),
    [posts]
  );

  const filteredPosts = useMemo(() => {
    if (!activeTag) return posts;
    return posts.filter((post) =>
      post.tags.map((t) => t.toLowerCase()).includes(activeTag.toLowerCase())
    );
  }, [posts, activeTag]);

  return (
    <div className="relative z-20 text-white">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-4xl mx-auto pt-20 lg:pt-24 mb-16">
        <motion.p
          className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/60"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Blog
        </motion.p>
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-playfair tracking-tight leading-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Thoughts on design,
          <br />
          technology &amp; craft
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Weekly perspectives from the studio — on what we&apos;re building, how
          we think, and why simplicity always wins.
        </motion.p>
      </div>

      {/* Pill-shaped Tag Filter */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <button
          onClick={() => setActiveTag(null)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
            activeTag === null
              ? "bg-white text-[#0B3D91] border-white shadow-lg shadow-white/20"
              : "bg-white/5 text-white/70 border-white/20 hover:bg-white/10 hover:text-white hover:border-white/40"
          }`}
        >
          All Posts
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
              activeTag === tag
                ? "bg-white text-[#0B3D91] border-white shadow-lg shadow-white/20"
                : "bg-white/5 text-white/70 border-white/20 hover:bg-white/10 hover:text-white hover:border-white/40"
            }`}
          >
            {tag}
          </button>
        ))}
      </motion.div>

      {/* Featured Posts Section */}
      {!activeTag && featuredPosts.length > 0 && (
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-5 h-5 text-white/60" />
            <h2 className="text-sm font-medium tracking-widest uppercase text-white/60">
              Featured
            </h2>
          </div>

          <div
            className={`grid gap-6 ${
              featuredPosts.length === 1
                ? "grid-cols-1"
                : "grid-cols-1 lg:grid-cols-2"
            }`}
          >
            {featuredPosts.map((post, idx) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <motion.article
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500 h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  {/* Cover Image */}
                  <div className="relative aspect-[2/1] overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91] via-[#0B3D91]/60 to-transparent" />

                    {/* Featured badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-medium text-white">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-light tracking-tight text-white mb-3 group-hover:text-white/90 transition-colors leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-white/40">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readingTime} min read
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-xs text-white/40 group-hover:text-white/70 transition-colors">
                        Read
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </motion.section>
      )}

      {/* All Posts Grid */}
      <section>
        {!activeTag && featuredPosts.length > 0 && (
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-sm font-medium tracking-widest uppercase text-white/60">
              All Posts
            </h2>
            <div className="flex-1 h-px bg-white/10" />
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTag || "all"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {filteredPosts.map((post, idx) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <motion.article
                  className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 h-full flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  {/* Cover Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91] via-[#0B3D91]/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/10 text-[11px] font-medium text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg font-light tracking-tight text-white mb-2 group-hover:text-white/90 transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex items-center gap-3 text-xs text-white/40">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readingTime}m
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-white/40 text-lg">
              No posts found for &ldquo;{activeTag}&rdquo;
            </p>
            <button
              onClick={() => setActiveTag(null)}
              className="mt-4 text-white/60 hover:text-white underline underline-offset-4 text-sm transition-colors"
            >
              Clear filter
            </button>
          </motion.div>
        )}
      </section>
    </div>
  );
}
