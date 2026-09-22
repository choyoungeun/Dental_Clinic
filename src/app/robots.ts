import type { MetadataRoute } from "next";

const SITE_URL = "https://suwonsevrance.vercel.app"; // 임시 도메인

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],

    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}