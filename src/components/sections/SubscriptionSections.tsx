import CTAButton from "../ui/CTAButton";
import { CONTACT_EMAIL, WEBSITE_INQUIRY_EMAIL_URL } from "@/lib/booking";

const STEPS = [
  { title: "Subscribe", body: "Pick a plan. Pay by card. Fill out a short form." },
  { title: "Send your stuff", body: "Logo, photos, what isn't working. We take it from there." },
  { title: "Go live", body: "In about a week. After that, text us changes whenever you need them." },
];

const PLANS = [
  {
    name: "Site",
    price: "$349",
    note: "Founding rate $279 for the first 5 clients",
    items: ["Up to 5 pages", "Design, build, hosting, security", "Google profile and SEO basics", "Unlimited small changes"],
    featured: false,
  },
  {
    name: "Site + Content",
    price: "$599",
    note: "Founding rate $479 for the first 5 clients",
    items: ["Up to 10 pages", "Everything in Site", "A video edit or graphic set every month", "Campaign pages, priority turnaround"],
    featured: true,
  },
  {
    name: "Multi-brand",
    price: "Let's talk",
    note: "Several sites or brands, one plan",
    items: ["Every site and brand covered", "A brand hub for your team", "Monthly creative work"],
    featured: false,
  },
];

const FAQS = [
  {
    q: "What counts as a small change?",
    a: "Anything under about an hour: text, photos, a new staff bio, an address, a blog post. One at a time, usually by the next business day.",
  },
  {
    q: "What about bigger projects?",
    a: "A new logo, a full rebrand or a video shoot gets a fixed quote before anything starts.",
  },
  {
    q: "Why a 6-month minimum?",
    a: "There's no upfront build fee. Six months covers the build. After that it's month to month.",
  },
  {
    q: "What if I cancel?",
    a: "We keep your site running one more month for free, then hand everything over. Your domain always stays in your name.",
  },
];

export function SubscriptionSections() {
  return (
    <div className="relative z-20 text-white" style={{ backgroundColor: "var(--brand-blue, #0B3D91)" }}>
      {/* How it works */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-24 sm:py-32 border-t border-white/15">
        <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-white/60 mb-6">The plan</p>
        <h2 className="font-playfair font-extralight tracking-tight leading-[1.1] max-w-3xl" style={{ fontSize: "clamp(2rem, 3.6vw + 1rem, 3.75rem)" }}>
          One monthly plan. <em>Your website, handled.</em>
        </h2>
        <p className="mt-6 max-w-xl text-base sm:text-lg text-white/70">
          Design, build, hosting and every change after launch, for one flat price.
        </p>
        <ol className="mt-16 grid gap-10 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step.title} className="border-t border-white/25 pt-6">
              <span className="font-playfair italic text-white/50 text-2xl">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-medium">{step.title}</h3>
              <p className="mt-2 text-white/70">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-24 sm:py-32 border-t border-white/15">
        <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-white/60 mb-6">Pricing</p>
        <h2 className="font-playfair font-extralight tracking-tight leading-[1.1] max-w-3xl" style={{ fontSize: "clamp(2rem, 3.6vw + 1rem, 3.75rem)" }}>
          Simple, <em>seriously.</em>
        </h2>
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl p-8 ${
                plan.featured ? "bg-white text-black" : "border border-white/25"
              }`}
            >
              <h3 className="text-lg font-medium">{plan.name}</h3>
              <p className="mt-4 font-playfair font-light tracking-tight text-5xl">
                {plan.price}
                {plan.price.startsWith("$") && (
                  <span className={`ml-1 font-sans text-base ${plan.featured ? "text-black/60" : "text-white/60"}`}>/mo</span>
                )}
              </p>
              <p className={`mt-2 text-sm ${plan.featured ? "text-black/60" : "text-white/60"}`}>{plan.note}</p>
              <ul className={`mt-6 space-y-2 text-sm flex-1 ${plan.featured ? "text-black/80" : "text-white/80"}`}>
                {plan.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a
                href="/book"
                className={`mt-8 inline-flex h-11 items-center justify-center rounded-full border text-sm font-medium transition-colors ${
                  plan.featured
                    ? "border-black bg-black text-white hover:bg-black/85"
                    : "border-white text-white hover:bg-white/10"
                }`}
              >
                {plan.price === "Let's talk" ? "Book a call" : `Start with ${plan.name}`}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-white/60">6-month minimum, then month to month. Nonprofit rate available.</p>
      </section>

      {/* FAQ */}
      <section id="questions" className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-24 sm:py-32 border-t border-white/15 grid gap-12 lg:grid-cols-[1fr_2fr]">
        <h2 className="font-playfair font-extralight tracking-tight leading-[1.1]" style={{ fontSize: "clamp(2rem, 3.6vw + 1rem, 3.75rem)" }}>
          Fair <em>questions.</em>
        </h2>
        <div className="divide-y divide-white/15 border-y border-white/15">
          {FAQS.map((faq) => (
            <details key={faq.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                {faq.q}
                <span aria-hidden="true" className="text-2xl font-light text-white/60 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-2xl text-white/70">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-24 sm:py-32 border-t border-white/15">
        <h2 className="font-playfair font-extralight tracking-tight leading-[1.05] max-w-3xl" style={{ fontSize: "clamp(2.25rem, 5vw + 1rem, 4.5rem)" }}>
          See if it&apos;s a fit. <em>15 minutes.</em>
        </h2>
        <div className="mt-10 flex flex-row max-[400px]:flex-col gap-3">
          <CTAButton href="/book" variant="primary" size="lg">
            Book a call
          </CTAButton>
          <CTAButton href={WEBSITE_INQUIRY_EMAIL_URL} variant="secondary" size="lg">
            Email us
          </CTAButton>
        </div>
        <p className="mt-6 text-sm text-white/50">{CONTACT_EMAIL}</p>
      </section>
    </div>
  );
}
