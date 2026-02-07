import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  excerpt: string;
  tags?: string[];
  coverImage?: string;
  readingMinutes: number;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

function assertContentDirExists() {
  if (!fs.existsSync(CONTENT_DIR)) {
    throw new Error(`Missing blog content dir: ${CONTENT_DIR}`);
  }
}

export function getAllPostSlugs(): string[] {
  assertContentDirExists();
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.(md|mdx)$/, ""));
}

export function getPostBySlug(slug: string) {
  assertContentDirExists();
  const mdPath = path.join(CONTENT_DIR, `${slug}.md`);
  const mdxPath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

  if (!fs.existsSync(filePath)) {
    throw new Error(`Post not found for slug: ${slug}`);
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const title = String(data.title ?? slug);
  const date = String(data.date ?? "");
  const excerpt = String(data.excerpt ?? "");
  const tags = Array.isArray(data.tags) ? data.tags.map(String) : undefined;
  const coverImage = data.coverImage ? String(data.coverImage) : undefined;

  const rt = readingTime(content);

  return {
    slug,
    title,
    date,
    excerpt,
    tags,
    coverImage,
    readingMinutes: Math.max(1, Math.round(rt.minutes)),
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  const slugs = getAllPostSlugs();
  const posts = slugs.map((slug) => {
    const p = getPostBySlug(slug);
    return {
      slug: p.slug,
      title: p.title,
      date: p.date,
      excerpt: p.excerpt,
      tags: p.tags,
      coverImage: p.coverImage,
      readingMinutes: p.readingMinutes,
    } satisfies BlogPost;
  });

  // newest first
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
