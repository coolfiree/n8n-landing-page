import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'], // Blocks API routes from being crawled 
    },
    sitemap: 'https://yourdomain.com/sitemap.xml', // FIXME: Replace with deployed domain
  };
}
