import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/links";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/qr"] },
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
