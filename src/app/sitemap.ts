import type { MetadataRoute } from "next";
import { services } from "@/components/serviceData";

const SITE_URL = "https://suwonsevrance.vercel.app";//임시 도메인

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      priority: 1,
      changeFrequency: "weekly",
    },
    {
      url: `${SITE_URL}/services`,
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: `${SITE_URL}/doctors`,
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${SITE_URL}/about`,
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${SITE_URL}/contact`,
      priority: 0.8,
      changeFrequency: "monthly",
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    priority: 0.85,
    changeFrequency: "monthly",
  }));

  return [...staticPages, ...servicePages];
}