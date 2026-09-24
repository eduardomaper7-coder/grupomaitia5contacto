import { readFile } from "node:fs/promises";
import path from "node:path";
import { company } from "@/config/company";
import { getConfiguredSiteUrl, instagramUrl } from "@/lib/links";

/**
 * Genera /contacto.vcf (tarjeta de contacto) a partir de src/config/company.ts.
 * Se genera en el build como archivo estático.
 */
export const dynamic = "force-static";

/** Plegado de líneas según RFC 2425/6350 (máx. 75 octetos por línea) */
function fold(line: string) {
  const out: string[] = [];
  let rest = line;
  while (rest.length > 74) {
    out.push(rest.slice(0, 74));
    rest = " " + rest.slice(74);
  }
  out.push(rest);
  return out.join("\r\n");
}

const esc = (v: string) => v.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;");

export async function GET() {
  let photo = "";
  try {
    const buf = await readFile(path.join(process.cwd(), "src/assets/vcard-photo.jpg"));
    photo = buf.toString("base64");
  } catch {
    // Sin foto: el contacto sigue siendo válido
  }

  const site = getConfiguredSiteUrl();
  const { location } = company;

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:;${esc(company.name)};;;`,
    `FN:${esc(company.name)}`,
    `ORG:${esc(company.name)}`,
    `TITLE:${esc("Organización y servicios para eventos")}`,
    `TEL;TYPE=CELL,VOICE,pref:${company.phone.e164}`,
    company.email ? `EMAIL;TYPE=WORK:${company.email}` : "",
    `ADR;TYPE=WORK:;;;${esc(location.area)};${esc(location.region)};;${esc(location.country)}`,
    `URL;TYPE=Instagram:${instagramUrl}`,
    site ? `URL;TYPE=Web:${site}` : "",
    `X-SOCIALPROFILE;TYPE=instagram:${instagramUrl}`,
    `NOTE:${esc(
      `${company.tagline}. Bodas, comuniones, cumpleaños, casetas y carpas, barras libres, bebidas y grifos de cerveza en ${location.area}. Instagram @${company.instagram.handle}. WhatsApp ${company.phone.display}.`,
    )}`,
    photo ? `PHOTO;ENCODING=b;TYPE=JPEG:${photo}` : "",
    "END:VCARD",
  ].filter(Boolean);

  const body = lines.map(fold).join("\r\n") + "\r\n";

  return new Response(body, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Grupo-Maitia-5.vcf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
