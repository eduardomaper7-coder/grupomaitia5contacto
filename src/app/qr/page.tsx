import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { company } from "@/config/company";
import { getConfiguredSiteUrl } from "@/lib/links";
import { buildQrSvg } from "@/lib/qr";
import logo from "@/assets/logo-grupo-maitia-5.png";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: `Código QR | ${company.name}`,
  robots: { index: false, follow: false },
};

/**
 * /qr — Página interna para descargar o imprimir el QR de la tarjeta.
 * El QR apunta a NEXT_PUBLIC_SITE_URL (o, si no existe, al dominio de producción de Vercel).
 */
export default async function QrPage() {
  const url = getConfiguredSiteUrl();
  const fromEnv = Boolean(process.env.NEXT_PUBLIC_SITE_URL?.trim());
  const svg = url ? await buildQrSvg(url) : null;

  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col items-center px-5 py-12 text-center print:py-0">
      <Image src={logo} alt={`Logotipo de ${company.name}`} width={96} height={96} className="h-24 w-24" />
      <h1 className="mt-4 text-2xl font-extrabold uppercase tracking-wide">{company.name}</h1>
      <p className="font-script text-gold-metal text-3xl">{company.tagline}</p>

      {svg && url ? (
        <>
          <div
            className="mt-8 w-full max-w-[320px] rounded-3xl bg-white p-4 shadow-2xl [&>svg]:h-auto [&>svg]:w-full"
            role="img"
            aria-label={`Código QR que abre ${url}`}
            dangerouslySetInnerHTML={{ __html: svg }}
          />
          <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-gold">
            Escanea y descubre nuestra tarjeta
          </p>
          <p className="mt-2 break-all text-sm text-muted">{url}</p>
          {!fromEnv && (
            <p className="mt-4 rounded-xl border border-gold/30 bg-gold/5 p-3 text-xs text-gold-light print:hidden">
              Este QR usa el dominio automático de Vercel. Cuando tengas el dominio definitivo, define
              NEXT_PUBLIC_SITE_URL y vuelve a desplegar.
            </p>
          )}
          <div className="mt-7 flex w-full flex-col gap-3 print:hidden">
            <a href="/qr.svg" download="qr-grupo-maitia-5.svg" className="btn btn-call justify-center">
              <Download size={20} aria-hidden="true" />
              Descargar QR (SVG)
            </a>
            <PrintButton />
          </div>
        </>
      ) : (
        <div className="surface mt-8 rounded-2xl p-5 text-left text-sm leading-relaxed text-muted">
          <p className="font-bold text-white">El QR todavía no está configurado.</p>
          <p className="mt-2">
            Define la variable de entorno <code className="text-gold-light">NEXT_PUBLIC_SITE_URL</code> con
            la URL definitiva de la tarjeta (por ejemplo en Vercel → Settings → Environment Variables) y
            vuelve a desplegar. El QR aparecerá aquí automáticamente.
          </p>
        </div>
      )}

      <Link href="/" className="mt-10 text-sm text-muted underline underline-offset-4 hover:text-white print:hidden">
        Volver a la tarjeta
      </Link>
    </main>
  );
}
