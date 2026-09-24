import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/links";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: getSiteUrl(), changeFrequency: "monthly", priority: 1 }];
}
