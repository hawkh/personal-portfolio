import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.SITE_URL || 'https://hawkh.github.io/portfolio'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/_next/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}