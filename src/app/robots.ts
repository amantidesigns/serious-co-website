import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  const disallow = [
    '/api/',
    '/admin/',
    '/private/',
  ]
  
  return {
    rules: [
      {
        userAgent: ['OAI-SearchBot', 'Google-Extended'],
        allow: '/',
        disallow,
      },
      {
        userAgent: '*',
        allow: '/',
        disallow,
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  }
}
