import { getConfiguredSiteUrl } from "@/lib/links";
import { buildQrSvg } from "@/lib/qr";

/** /qr.svg — QR descargable (vectorial, ideal para imprenta) */
export const dynamic = "force-static";

export async function GET() {
  const url = getConfiguredSiteUrl();
  if (!url) {
    return new Response(
      "Configura NEXT_PUBLIC_SITE_URL con la URL definitiva de la tarjeta para generar el QR.",
      { status: 404, headers: { "Content-Type": "text/plain; charset=utf-8" } },
    );
  }
  const svg = await buildQrSvg(url);
  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Content-Disposition": 'inline; filename="qr-grupo-maitia-5.svg"',
    },
  });
}
