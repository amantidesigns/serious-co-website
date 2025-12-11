import type { Metadata } from "next";
import Image from "next/image";
import ContentPageLayout from "@/components/layout/ContentPageLayout";

export const metadata: Metadata = {
  title: "Our Services - A Very Serious Company",
  description: "We provide strategic creative services that transform simple ideas into exceptional digital experiences. From brand development to web design, we take your vision seriously.",
  openGraph: {
    title: "Our Services - A Very Serious Company",
    description: "We provide strategic creative services that transform simple ideas into exceptional digital experiences. From brand development to web design, we take your vision seriously.",
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
  twitter: {
    card: "summary_large_image",
    title: "Our Services - A Very Serious Company",
    description: "We provide strategic creative services that transform simple ideas into exceptional digital experiences. From brand development to web design, we take your vision seriously.",
    images: ["/a-very-serious-company.jpeg"],
  },
};

type Tier = "A" | "B" | "C";
type Variant = "web" | "email" | "presentation" | "branding" | "social" | "ai" | "default";

function BentoCard({
  title,
  tagline,
  img,
  imgHover,
  className = "",
  style,
  variant = "default",
  tier = "B",              // << add
  showHoverLines = false,  // << add
}: {
  title: string;
  tagline: string;
  img?: string;
  imgHover?: string;
  className?: string;
  style?: React.CSSProperties;
  variant?: Variant;
  tier?: Tier;
  showHoverLines?: boolean;
}) {

  return (
    <article
      className={[
        "group relative overflow-hidden rounded-2xl",
        "bg-white/5 backdrop-blur-lg",
        "border border-white/12 ring-1 ring-white/10",
        "text-white",
        "transition-transform duration-300 ease-out motion-safe:transition-transform",
        "hover:scale-[1.015] hover:border-white/25 hover:ring-white/15",
        className,
      ].join(" ")}
      style={style}
      tabIndex={0}
      aria-label={title}
    >


      {/* GHOST WORD — visible idle, fades out on hover */}
      {variant === "web" && (
        <div
          aria-hidden
          className="absolute inset-0 z-[1] flex items-center justify-center
                     text-[min(22vw,220px)] font-extrabold tracking-[-0.04em] leading-none
                     text-white/4 transition-opacity duration-200 ease-out group-hover:opacity-0">
          DESIGN
        </div>
      )}

      {/* EMAIL WATERMARK — visible idle, fades out on hover */}
      {variant === "email" && (
        <div
          aria-hidden
          className="absolute inset-0 z-[1] flex items-center justify-center
                     text-[min(22vw,200px)] font-extrabold leading-none
                     text-white/5 transition-opacity duration-200 ease-out
                     group-hover:opacity-0">
          @
        </div>
      )}

      {/* PRESENTATION WATERMARK — visible idle, fades out on hover */}
      {variant === "presentation" && (
        <div aria-hidden
             className="absolute inset-0 z-[1] flex items-center justify-center
                        text-[min(20vw,180px)] font-extrabold leading-none
                        text-white/4 transition-opacity duration-200 ease-out
                        group-hover:opacity-0">
          ▭▭
        </div>
      )}

      {/* BRANDING WATERMARK — visible idle, fades out on hover */}
      {variant === "branding" && (
        <div
          aria-hidden
          className="absolute inset-0 z-[1] flex items-center justify-center
                     text-[min(18vw,160px)] font-extrabold leading-none
                     text-white/4 transition-opacity duration-200 ease-out
                     group-hover:opacity-0">
          #
        </div>
      )}

      {/* SOCIAL WATERMARK — visible idle, fades out on hover */}
      {variant === "social" && (
        <div
          aria-hidden
          className="absolute inset-0 z-[1] flex items-center justify-center
                     text-[min(18vw,160px)] font-extrabold leading-none
                     text-white/4 transition-opacity duration-200 ease-out
                     group-hover:opacity-0">
          ↗
        </div>
      )}

      {/* title + meta (single source of truth) */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-6 sm:p-7 pointer-events-none">
        <div
          className={[
            "relative inline-block max-w-[70%] transition-transform duration-300 ease-out",
            // nudge on hover for any right-panel variants
            (["web","email","presentation","branding","social","ai"].includes(variant) ? "group-hover:translate-x-[2%]" : "")
          ].join(" ")}
        >
          <h3
            className={[
              "text-2xl sm:text-3xl font-semibold text-white leading-tight",
              "transition-transform duration-300 ease-out",
              tier === "A" ? "group-hover:scale-[var(--tier-a-type-scale)]"
              : tier === "B" ? "group-hover:scale-[var(--tier-b-type-scale)]"
              : "group-hover:scale-[var(--tier-c-type-scale)]",
            ].join(" ")}
          >
            {title}
          </h3>

          <p className="mt-1 text-sm sm:text-base text-white/80">
            {tagline}
          </p>

          <span
            aria-hidden
            className={[
              "mt-2 block h-[2px] rounded-full bg-white/60 transition-[width] duration-300 ease-out",
              tier === "A" ? "w-16 group-hover:w-[var(--tier-a-underline-w)]"
              : tier === "B" ? "w-14 group-hover:w-[var(--tier-b-underline-w)]"
              : "w-12 group-hover:w-[var(--tier-c-underline-w)]",
            ].join(" ")}
          />

          {/* prompt pill (AI only) */}
          {variant === "ai" && (
            <span
              aria-hidden
              className="mt-3 inline-flex items-center gap-1 rounded-md px-2 py-1
                         bg-white/8 ring-1 ring-white/10 text-[11px] text-white/85
                         transition-all duration-300 ease-out
                         group-hover:bg-white/10 group-hover:ring-white/15
                         pointer-events-none select-none">
              prompt
              <i className="inline-block h-3 w-[1px] bg-white/80 motion-ok"
                 style={{ animation: "caretBlink 900ms steps(1,end) infinite" }} />
            </span>
          )}
        </div>
      </div>

      {/* Image layer */}
      <div className={`absolute inset-0 ${imgHover ? 'opacity-100' : 'opacity-25 group-hover:opacity-40'} transition-opacity duration-300`}>
        {img ? (
          <>
            {/* Option A: Single image reveal (when no imgHover) */}
            {!imgHover && (
              <Image
                src={img}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 ease-out
                  group-hover:scale-105"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
            )}

            {/* Option B: Image swap (when imgHover provided) */}
            {imgHover && (
              <>
                {/* Base image */}
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover transition-all duration-700 ease-out
                    group-hover:opacity-0 group-hover:scale-105"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />

                {/* Hover image */}
                <Image
                  src={imgHover}
                  alt={`${title} hover`}
                  fill
                  className="object-cover transition-all duration-700 ease-out
                    opacity-0 group-hover:opacity-100 group-hover:scale-105"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
              </>
            )}
          </>
        ) : (
          <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.06),transparent_55%)]
            transition-transform duration-700 ease-out group-hover:scale-105" />
        )}
        {/* tiered darkening overlay */}
        <div
          className="absolute inset-0 transition-colors duration-300"
          style={{
            background: `rgba(0,0,0,${ tier==="A" ? .16 : tier==="B" ? .12 : .10 })`
          }}
        />
      </div>

      {/* Optional hover lines (one knob for all) */}
      {showHoverLines && (
        <div
          aria-hidden
          className="absolute inset-0 z-0 opacity-0 translate-y-0.5
                     transition-all duration-300 ease-out
                     group-hover:opacity-10 group-hover:translate-y-0
                     [background:repeating-linear-gradient(to_bottom,rgba(255,255,255,.16)_0px,rgba(255,255,255,.16)_1px,transparent_1px,transparent_10px)]"
        />
      )}

      {/* Web (right gallery) */}
      {variant === "web" && (
        <div aria-hidden className="absolute inset-y-0 right-0 z-[12] w-0 opacity-0 transition-all duration-300 ease-out group-hover:w-[70%] group-hover:opacity-85 pointer-events-none [mask-image:linear-gradient(to_left,transparent_0,black_12%,black_88%,transparent_100%)]">
          <div className="relative h-full w-full overflow-hidden rounded-l-[14px]">
            <Image src="/images/webstrip-1.jpg" alt="" fill className="object-cover object-top motion-ok" style={{ animation:"scrollUp 12s linear infinite" }} sizes="100vw" />
          </div>
        </div>
      )}

      {/* Email (right list) */}
      {variant === "email" && (
        <div aria-hidden className="absolute inset-y-0 right-0 z-[12] w-0 opacity-0 transition-all duration-300 ease-out group-hover:w-[45%] group-hover:opacity-85 pointer-events-none [mask-image:linear-gradient(to_left,transparent_0,black_12%,black_88%,transparent_100%)]">
          <div className="relative h-full w-full overflow-hidden rounded-l-[14px]">
            <Image src="/images/emailstrip-1.jpg" alt="" fill className="object-cover object-top motion-ok" style={{ animation:"scrollUp 14s linear infinite" }} sizes="100vw" />
            <div className="absolute left-0 right-0 top-1/3 h-8 bg-white/10 rounded pointer-events-none motion-ok" style={{ animation:"rowPulse 2200ms ease-in-out infinite" }} />
          </div>
        </div>
      )}

      {/* Presentation (film strip band) */}
      {variant === "presentation" && (
        <div aria-hidden className="absolute inset-x-0 bottom-[18%] z-[12] h-[38%] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-85 pointer-events-none [mask-image:linear-gradient(to_right,transparent,black_14%,black_86%,transparent)]">
          <div className="relative h-full w-full overflow-hidden rounded-md">
            <Image src="/images/slidestrip-1.jpg" alt="" fill className="object-cover object-center motion-ok" style={{ animation:"slidesDrift 14s linear infinite" }} sizes="100vw" />
          </div>
        </div>
      )}

      {/* Branding (tokens snap to grid) */}
      {variant === "branding" && (
        <div aria-hidden className="absolute inset-y-0 right-0 z-[12] w-[48%] pointer-events-none">
          <div className="absolute inset-0 px-6 py-5 grid grid-cols-3 gap-3 opacity-60 transition-opacity duration-300 ease-out group-hover:opacity-85">
            {Array.from({length:9}).map((_,i)=>(
              <div key={i}
                className={[
                  "aspect-square border border-white/25 bg-white/5 rounded-md transition-transform duration-300 ease-out",
                  // scattered offsets for first paint (snap to 0 on hover)
                  i===0?"translate-x-[14%] -translate-y-[12%]": i===1?"-translate-x-[10%] -translate-y-[6%]":
                  i===2?"translate-x-[22%] translate-y-[10%]":  i===3?"-translate-x-[8%] translate-y-[16%]":
                  i===4?"translate-x-[6%] -translate-y-[18%]":   i===5?"-translate-x-[16%] translate-y-[8%]":
                  i===6?"translate-x-[10%] translate-y-[6%]":    i===7?"-translate-x-[12%] -translate-y-[10%]":
                  "translate-x-[18%] -translate-y-[4%]",
                  "group-hover:translate-x-0 group-hover:translate-y-0"
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      )}

      {/* Social (right carousel) */}
      {variant === "social" && (
        <div aria-hidden className="absolute inset-y-0 right-0 z-[12] w-0 opacity-0 transition-all duration-300 ease-out group-hover:w-[55%] group-hover:opacity-85 pointer-events-none [mask-image:linear-gradient(to_left,transparent_0,black_14%,black_86%,transparent_100%)]">
          <div className="relative h-full w-full overflow-hidden rounded-l-[14px]">
            <Image src="/images/socialstrip-1.jpg" alt="" fill className="object-cover object-center motion-ok" style={{ animation:"slidesDrift 14s linear infinite" }} sizes="100vw" />
          </div>
        </div>
      )}

      {/* AI (right constellation) */}
      {variant === "ai" && (
        <div aria-hidden className="absolute inset-y-0 right-0 z-[12] w-0 opacity-0 transition-all duration-300 ease-out group-hover:w-[52%] group-hover:opacity-85 pointer-events-none [mask-image:linear-gradient(to_left,transparent_0,black_14%,black_86%,transparent_100%)]">
          <div className="relative h-full w-full overflow-hidden rounded-l-[14px]">
            <Image src="/images/aistrip-1.jpg" alt="" fill className="object-cover object-center motion-ok" style={{ animation:"aiDrift 16s ease-in-out infinite" }} sizes="100vw" />
          </div>
        </div>
      )}

    </article>
  );
}

export default function OurServicesPage() {
  return (
    <ContentPageLayout title="Our Services">
      <div className="relative z-20 w-full text-white">

        {/* Full-width Bento Grid aligned with nav */}
        <div
          className="
            mt-10 sm:mt-12
            grid grid-cols-2 md:grid-cols-4 gap-4
            auto-rows-[261px]
            w-full
          "
        >
          {/* Web — Tier A */}
          <BentoCard
            title="Web Design"
            tagline="Custom sites built to perform."
            img="/images/web.jpg"
            className="col-span-2 md:col-span-3 row-span-1"
            variant="web"
            tier="A"
            showHoverLines={true}
          />

          {/* Email — Tier C */}
          <BentoCard
            title="Email Marketing"
            tagline="Campaigns that get opened."
            img="/images/email.jpg"
            className="col-span-1 row-span-1"
            variant="email"
            tier="C"
          />

          {/* Presentation — Tier C */}
          <BentoCard
            title="Presentation Design"
            tagline="Decks that persuade, not bore."
            img="/images/presentation.jpg"
            className="col-span-1 row-span-1"
            variant="presentation"
            tier="C"
          />

          {/* Branding — Tier A */}
          <BentoCard
            title="Branding & Creative Strategy"
            tagline="Clear, bold, lasting brand identities."
            img="/images/branding.jpg"
            className="col-span-2 md:col-span-3 row-span-1"
            variant="branding"
            tier="A"
          />

          {/* Social — Tier B */}
          <BentoCard
            title="Social Media Creative"
            tagline="Content people actually share."
            img="/images/social.jpg"
            className="col-span-2 row-span-1 h-[209px]"
            variant="social"
            tier="B"
          />

          {/* AI — Tier B */}
          <BentoCard
            title="AI Consulting & Creative"
            tagline="Smarter ideas powered by AI."
            img="/images/ai.jpg"
            className="col-span-2 row-span-1 h-[209px]"
            variant="ai"
            tier="B"
          />
        </div>

        {/* Optional text */}
        <div className="mt-10 sm:mt-12 text-center space-y-2">
          <p className="text-white/80">
            We don&apos;t believe in one-size-fits-all solutions. Every project is unique, and we approach each one with fresh eyes and clear thinking.
          </p>
          <p className="text-white/80">
            Ready to take your idea seriously? Let&apos;s talk.
          </p>
        </div>
      </div>
    </ContentPageLayout>
  );
}
