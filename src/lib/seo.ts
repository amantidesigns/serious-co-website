export const siteConfig = {
  name: "A Very Serious Company",
  shortName: "AVSC",
  url: "https://avery-serious-company.com",
  email: "hello@averyseriouscompany.com",
  description:
    "A modern creative company for brands, websites, content, and practical AI implementation.",
  image: "/a-very-serious-company.jpeg",
} as const;

export const organizationId = `${siteConfig.url}/#organization`;
export const websiteId = `${siteConfig.url}/#website`;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      url: siteConfig.url,
      description: siteConfig.description,
      email: `mailto:${siteConfig.email}`,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/icon.svg"),
        contentUrl: absoluteUrl("/icon.svg"),
      },
      image: absoluteUrl(siteConfig.image),
      knowsAbout: [
        "Brand strategy",
        "Web design and development",
        "Creative production",
        "Artificial intelligence consulting",
        "Search engine optimization",
        "AI search optimization",
        "YouTube content optimization",
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteConfig.url,
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      description: siteConfig.description,
      publisher: { "@id": organizationId },
      inLanguage: "en-US",
    },
  ],
};
