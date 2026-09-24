import { company } from "@/config/company";

/** Enlace de WhatsApp con mensaje predefinido (codificado para URL). */
export function whatsappUrl(message: string = company.whatsapp.defaultMessage) {
  return `https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const telUrl = `tel:${company.phone.e164}`;

export const instagramUrl = `https://www.instagram.com/${company.instagram.handle}/`;

/** Ruta del archivo de contacto (.vcf) generado en src/app/contacto.vcf/route.ts */
export const vcardPath = "/contacto.vcf";

/**
 * URL pública de la tarjeta.
 * 1. NEXT_PUBLIC_SITE_URL (defínela en Vercel cuando tengas el dominio definitivo)
 * 2. Dominio de producción que Vercel expone automáticamente en el build
 * 3. null si no se conoce (desarrollo local)
 */
export function getConfiguredSiteUrl(): string | null {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/+$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel}`;
  return null;
}

export function getSiteUrl(): string {
  return getConfiguredSiteUrl() ?? "http://localhost:3000";
}
