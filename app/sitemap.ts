import { getServices } from '@/lib/strapi';
import type { MetadataRoute } from 'next'

export const revalidate = 3600
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let data = await getServices(null);

  const services = data.map((item : any) => (
    {
      url: `https://xcta.com.au/${item.documentId}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  ))
  
  return [
    {
      url: 'https://xcta.com.au',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://xcta.com.au/our-services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://xcta.com.au/about-us',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://xcta.com.au/our-team',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...services
  ]
}