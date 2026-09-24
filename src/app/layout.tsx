import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { company } from "@/config/company";
import { getSiteUrl, instagramUrl } from "@/lib/links";
import "./globals.css";

// Fuentes autoalojadas (sin peticiones a Google Fonts): Montserrat + Great Vibes (OFL)
const montserrat = localFont({
  src: "../fonts/montserrat-latin-variable.woff2",
  variable: "--font-montserrat",
  weight: "100 900",
  display: "swap",
});

const greatVibes = localFont({
  src: "../fonts/great-vibes-latin.woff2",
  variable: "--font-great-vibes",
  weight: "400",
  display: "swap",
});

const title = `${company.name} | Eventos en Tenerife`;
const description =
  "Organización y servicios para bodas, comuniones, cumpleaños y eventos en Tenerife. Casetas, carpas, barras libres, bebidas y grifos de cerveza.";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title,
  description,
  applicationName: company.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: company.name,
    title,
    description,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${company.name} · ${company.tagline} · Eventos en Tenerife`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"],
  },
  formatDetection: { telephone: false },
  appleWebApp: { title: company.name, statusBarStyle: "black-translucent" },
};

export const viewport: Viewport = {
  themeColor: "#070707",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  slogan: company.tagline,
  description,
  url: getSiteUrl(),
  image: `${getSiteUrl()}/og.jpg`,
  logo: `${getSiteUrl()}/logo-grupo-maitia-5.png`,
  telephone: company.phone.e164,
  areaServed: { "@type": "Place", name: `${company.location.area}, ${company.location.region}` },
  address: {
    "@type": "PostalAddress",
    addressRegion: `${company.location.area}, ${company.location.region}`,
    addressCountry: company.location.countryCode,
  },
  sameAs: [instagramUrl],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${greatVibes.variable} antialiased`}>
      <body className="min-h-dvh">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Saltar al contenido
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
