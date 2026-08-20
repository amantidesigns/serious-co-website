import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import { caseStudies } from '@/content/caseStudies'
import { services } from '@/content/services'
import { teamMembers } from '@/content/team'
import { siteConfig } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  const blogPosts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const caseStudyPages = caseStudies.map((cs) => ({
    url: `${baseUrl}/work/${cs.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    changeFrequency: 'monthly' as const,
    priority: service.featured ? 0.8 : 0.6,
  }))

  const teamPages = teamMembers.map((member) => ({
    url: `${baseUrl}/team/${member.slug}`,
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }))

  return [
    {
      url: baseUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...servicePages,
    {
      url: `${baseUrl}/work`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...caseStudyPages,
    {
      url: `${baseUrl}/blog`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...blogPosts,
    {
      url: `${baseUrl}/why-us`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...teamPages,
    {
      url: `${baseUrl}/faq`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ai-training`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/chatgpt-for-seniors`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
