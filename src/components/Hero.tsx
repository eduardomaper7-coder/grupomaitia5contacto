import Image from "next/image";
import { ChevronRight, MapPin, Phone } from "lucide-react";
import { company } from "@/config/company";
import { heroImage } from "@/config/gallery";
import { telUrl, whatsappUrl } from "@/lib/links";
import logo from "@/assets/logo-grupo-maitia-5.png";
import { WhatsAppIcon } from "./icons";
import QuickActions from "./QuickActions";

/**
 * Cabecera / "tarjeta" principal: logo, nombre, lema y botones de contacto.
 * En escritorio se muestra como tarjeta fija en la columna izquierda.
 */
export default function Hero() {
  return (
    <header className="relative overflow-hidden lg:surface lg:rounded-[1.75rem]">
      {/* Fotografía de ambiente con fundido a negro */}
      <div
        className="absolute inset-x-0 top-0 h-[320px] [mask-image:linear-gradient(to_bottom,#000_45%,transparent)] sm:h-[360px] lg:h-[300px]"
        aria-hidden="true"
      >
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 440px, 100vw"
          className="object-cover object-center opacity-70"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/50 to-ink/80" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_100%,rgb(217_22_31/0.18),transparent_70%)]" />
      </div>

      <div className="animate-hero relative mx-auto flex w-full max-w-[520px] flex-col items-center px-4 pb-6 pt-14 min-[400px]:px-5 text-center sm:pt-16 lg:max-w-none lg:px-7 lg:pt-10">
        <Image
          src={logo}
          alt={`Logotipo de ${company.name}`}
          width={168}
          height={168}
          priority
          className="h-[152px] w-[152px] drop-shadow-[0_18px_30px_rgba(0,0,0,0.7)] sm:h-[168px] sm:w-[168px]"
        />

        <p className="mt-5 flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-gold">
          <MapPin size={13} aria-hidden="true" />
          {company.location.area} · {company.location.region}
        </p>

        <h1 className="mt-3 text-[2rem] font-extrabold uppercase leading-none tracking-[0.04em] sm:text-[2.35rem]">
          {company.name}
        </h1>

        <p className="font-script text-gold-metal mt-2 text-[2.35rem] leading-[1.15] sm:text-[2.6rem]">
          {company.tagline}
        </p>

        <p className="mt-2 max-w-[20rem] text-[0.98rem] leading-relaxed text-muted">
          {company.headline}
        </p>

        <div id="hero-actions" className="mt-7 flex w-full flex-col gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa whitespace-nowrap text-[0.95rem] min-[400px]:text-[1.05rem]"
            aria-label={`Hablar por WhatsApp con ${company.name} (se abre WhatsApp)`}
          >
            <span className="btn-icon">
              <WhatsAppIcon size={24} />
            </span>
            <span className="flex-1 text-left uppercase">Hablar por WhatsApp</span>
            <ChevronRight size={20} aria-hidden="true" className="opacity-80" />
          </a>

          <a
            href={telUrl}
            className="btn btn-call whitespace-nowrap text-[0.92rem] min-[400px]:text-[1rem]"
            aria-label={`Llamar ahora a ${company.name}, ${company.phone.display}`}
          >
            <span className="btn-icon h-9 w-9">
              <Phone size={19} aria-hidden="true" />
            </span>
            <span className="flex-1 text-left uppercase">Llamar ahora</span>
            <span className="hidden text-sm font-semibold opacity-85 min-[440px]:inline lg:hidden xl:inline">
              {company.phone.display}
            </span>
          </a>
        </div>

        <QuickActions />
      </div>
    </header>
  );
}
