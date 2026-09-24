import { ChevronRight, Phone } from "lucide-react";
import { company } from "@/config/company";
import { telUrl, whatsappUrl } from "@/lib/links";
import { WhatsAppIcon } from "./icons";
import TeideSilhouette from "./TeideSilhouette";

/** Bloque final de conversión, antes del footer */
export default function ContactCTA() {
  return (
    <section
      id="contacto"
      aria-labelledby="cta-title"
      data-reveal
      className="relative isolate overflow-hidden rounded-[1.75rem] border border-gold/25 bg-[radial-gradient(120%_90%_at_50%_0%,#2a0b0d_0%,#120707_45%,#0a0a0a_100%)] px-6 pb-28 pt-10 text-center sm:px-10 sm:pb-36 sm:pt-14"
    >
      <div className="hairline-gold absolute inset-x-8 top-0" aria-hidden="true" />

      <p className="eyebrow">Hablemos</p>
      <h2 id="cta-title" className="mx-auto mt-3 max-w-md text-[1.75rem] font-extrabold leading-[1.1] sm:text-[2.3rem]">
        ¿Estás preparando un evento?
      </h2>
      <p className="font-script text-gold-metal mt-2 text-[2.1rem] leading-tight sm:text-[2.5rem]">
        Cuéntanos qué necesitas.
      </p>

      <div className="mx-auto mt-7 flex max-w-sm flex-col gap-3">
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-wa text-[1rem]"
          aria-label="Pedir información por WhatsApp (se abre WhatsApp)"
        >
          <span className="btn-icon">
            <WhatsAppIcon size={24} />
          </span>
          <span className="flex-1 whitespace-nowrap text-left text-[0.95rem] uppercase leading-tight">
            Pedir información
            <span className="block text-[0.78rem] font-semibold normal-case tracking-normal opacity-90">
              por WhatsApp
            </span>
          </span>
          <ChevronRight size={20} aria-hidden="true" className="opacity-80" />
        </a>
        <p className="text-sm text-muted">
          o llámanos al{" "}
          <a
            href={telUrl}
            className="inline-flex items-center gap-1 font-bold text-white underline decoration-brand-red decoration-2 underline-offset-4 hover:text-gold-light"
          >
            <Phone size={14} aria-hidden="true" />
            {company.phone.display}
          </a>
        </p>
      </div>

      <TeideSilhouette className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 w-full sm:h-32" />
    </section>
  );
}
