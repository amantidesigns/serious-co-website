import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #05060a 0%, #0b1020 45%, #05060a 100%)",
          color: "white",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto",
        }}
      >
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#9AE6B4",
              boxShadow: "0 0 24px rgba(154,230,180,0.35)",
            }}
          />
          <div style={{ fontSize: 22, opacity: 0.85 }}>
            A Very Serious Company
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 650,
              letterSpacing: -1.2,
              lineHeight: 1.06,
            }}
          >
            {post.title}
          </div>
          <div style={{ fontSize: 24, opacity: 0.8, maxWidth: 980 }}>
            {post.excerpt}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, opacity: 0.7 }}>
          <div>veryseriouscompany.com</div>
          <div>{post.date}</div>
        </div>
      </div>
    ),
    size
  );
}
