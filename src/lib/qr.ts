import { readFile } from "node:fs/promises";
import path from "node:path";
import QRCode from "qrcode";

/**
 * Genera un código QR en SVG apuntando a `url`, con el logotipo en el centro.
 * Usa corrección de errores alta (H) para que el logo no impida la lectura.
 */
export async function buildQrSvg(url: string): Promise<string> {
  const raw = await QRCode.toString(url, {
    type: "svg",
    errorCorrectionLevel: "H",
    margin: 2,
    color: { dark: "#0b0b0b", light: "#ffffff" },
  });

  const size = Number(/viewBox="0 0 (\d+) \d+"/.exec(raw)?.[1] ?? 0);
  if (!size) return raw;

  let logo = "";
  try {
    const buf = await readFile(path.join(process.cwd(), "public/logo-grupo-maitia-5.png"));
    logo = `data:image/png;base64,${buf.toString("base64")}`;
  } catch {
    return raw;
  }

  // El logo ocupa ~22 % del ancho (seguro con nivel H)
  const logoSize = size * 0.22;
  const pos = (size - logoSize) / 2;
  const overlay =
    `<circle cx="${size / 2}" cy="${size / 2}" r="${(logoSize / 2) * 1.12}" fill="#ffffff"/>` +
    `<image href="${logo}" x="${pos}" y="${pos}" width="${logoSize}" height="${logoSize}"/>`;

  return raw.replace("</svg>", `${overlay}</svg>`);
}
