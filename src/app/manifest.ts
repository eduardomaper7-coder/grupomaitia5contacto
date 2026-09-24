import type { MetadataRoute } from "next";
import { company } from "@/config/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${company.name} · Eventos en Tenerife`,
    short_name: company.shortName,
    description: company.headline,
    start_url: "/",
    display: "standalone",
    background_color: "#070707",
    theme_color: "#070707",
    lang: "es",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
