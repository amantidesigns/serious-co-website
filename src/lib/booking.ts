// Booking configuration for A Very Serious Company

export type SessionType = "quick-chat" | "discovery";

export const SESSION_TYPES: Record<
  SessionType,
  { label: string; duration: string; minutes: number; description: string }
> = {
  "quick-chat": {
    label: "Quick Chat",
    duration: "15 min",
    minutes: 15,
    description: "Fast intro to see if we're a good fit",
  },
  discovery: {
    label: "Discovery Call",
    duration: "30 min",
    minutes: 30,
    description: "Explore scope, goals, and next steps",
  },
};

export const SERVICE_TYPES = [
  "Web Design",
  "Web Development",
  "Presentation Design",
  "Branding & Creative Strategy",
  "Video Production",
  "Content Creation",
  "Social Media Creative",
  "AI Consulting & Integration",
  "AI SEO & LLM Optimization",
  "Other",
] as const;

export type ServiceType = (typeof SERVICE_TYPES)[number];

export const BUDGET_RANGES = [
  "Under $2k",
  "$2k \u2013 $5k",
  "$5k \u2013 $10k",
  "$10k \u2013 $25k",
  "$25k+",
  "Not sure yet",
] as const;

export const TIMELINES = [
  "ASAP",
  "1\u20132 weeks",
  "1 month",
  "2\u20133 months",
  "Flexible",
] as const;

export const REFERRAL_SOURCES = [
  "Google search",
  "Social media",
  "Referral",
  "LinkedIn",
  "Saw our work",
  "Other",
] as const;

/**
 * Per-service prep notes included in the Google Calendar invite.
 * Tells the client what to bring or think about before the call.
 */
export const PREP_NOTES: Record<ServiceType, string[]> = {
  "Web Design": [
    "Have 2\u20133 examples of websites you like (and why)",
    "Know your target audience and what action you want visitors to take",
    "Have your brand assets ready (logo, colors, fonts) if they exist",
  ],
  "Web Development": [
    "Outline the features or functionality you need",
    "Note any integrations (payments, CRM, APIs, etc.)",
    "Share your current site URL if you have one",
  ],
  "Presentation Design": [
    "Bring your existing deck or content outline",
    "Know your audience and the setting (pitch, keynote, internal, etc.)",
    "Have any brand guidelines or templates you need to follow",
  ],
  "Branding & Creative Strategy": [
    "Think about 3 brands you admire and what draws you to them",
    "Know your target market and what sets you apart",
    "Have a sense of where the brand will live (web, print, social, etc.)",
  ],
  "Video Production": [
    "Know the purpose of the video (ad, explainer, brand film, etc.)",
    "Have a rough idea of length and where it will be published",
    "Gather any reference videos or mood boards",
  ],
  "Content Creation": [
    "Know your target audience and the tone you're going for",
    "Have examples of content you like from other brands",
    "List the platforms or channels where this content will live",
  ],
  "Social Media Creative": [
    "Share your current social profiles so we can review them",
    "Know which platforms are highest priority",
    "Have examples of posts or campaigns you admire",
  ],
  "AI Consulting & Integration": [
    "Describe your current workflow and where you feel bottlenecked",
    "List the tools and platforms your team uses today",
    "Have a sense of what 'success' looks like for AI integration",
  ],
  "AI SEO & LLM Optimization": [
    "Share your website, YouTube channel, and highest-priority public profiles",
    "List the searches and customer questions that matter most to the business",
    "Bring any Search Console, analytics, or recent content performance data",
  ],
  Other: [
    "Write a brief description of what you need",
    "Gather any relevant files, links, or references",
    "Think about your timeline and budget range",
  ],
};

export const CONTACT_EMAIL = "amantidesigns@gmail.com";
export const CONTACT_EMAIL_URL = `mailto:${CONTACT_EMAIL}`;
export const WEBSITE_INQUIRY_EMAIL_URL = `${CONTACT_EMAIL_URL}?subject=Hello%20from%20A%20Very%20Serious%20Company%20Website&body=Hi%20there%2C%0D%0A%0D%0AI%27m%20interested%20in%20learning%20more%20about%20your%20services.%0D%0A%0D%0AThanks!`;
export const BOOK_CALL_EMAIL_URL = `${CONTACT_EMAIL_URL}?subject=Book%20a%20Call%20with%20A%20Very%20Serious%20Company&body=Hi%20there%2C%0D%0A%0D%0AI%27d%20like%20to%20book%20a%20call%20about%20a%20project.%0D%0A%0D%0AThanks!`;
export const AI_TRAINING_EMAIL_URL = `${CONTACT_EMAIL_URL}?subject=AI%20Training%20Registration`;
export const CHATGPT_FOR_SENIORS_EMAIL_URL = `${CONTACT_EMAIL_URL}?subject=ChatGPT%20for%20Seniors%20Inquiry`;
export const BOOKING_TIMEZONE = "America/Chicago";
