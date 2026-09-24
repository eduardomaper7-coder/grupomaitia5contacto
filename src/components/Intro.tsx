import { Handshake, Sparkles, Tent } from "lucide-react";
import { company } from "@/config/company";

const pillars = [
  { icon: Tent, title: "Montaje", text: "Casetas y carpas listas para tu celebración." },
  { icon: Sparkles, title: "Servicio", text: "Barra, bebidas y grifos de cerveza." },
  { icon: Handshake, title: "Un solo contacto", text: "Nos cuentas la idea y lo coordinamos contigo." },
];

/** Bloque de confianza / presentación. Sin cifras ni afirmaciones inventadas. */
export default function Intro() {
  return (
    <section aria-labelledby="intro-title" className="relative">
      <p data-reveal className="eyebrow">
        Eventos en {company.location.area}
      </p>
      <h2
        id="intro-title"
        data-reveal
        className="mt-3 text-[1.7rem] font-extrabold leading-[1.12] tracking-tight sm:text-[2.2rem] lg:text-[2.6rem]"
      >
        Tú disfrutas.{" "}
        <span className="text-gold-metal">Nosotros nos encargamos del resto.</span>
      </h2>
      <p data-reveal className="mt-4 max-w-xl text-[1rem] leading-relaxed text-muted">
        En {company.name} nos ocupamos del montaje y de los servicios de tu evento para que tú solo
        tengas que disfrutarlo. Bodas, comuniones, cumpleaños o cualquier celebración: cuéntanos qué
        necesitas y lo preparamos contigo.
      </p>

      <ul className="mt-7 grid gap-3 sm:grid-cols-3">
        {pillars.map(({ icon: Icon, title, text }, i) => (
          <li
            key={title}
            data-reveal
            style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
            className="flex items-start gap-3 border-l-2 border-brand-red/80 py-1 pl-4 sm:flex-col sm:gap-2"
          >
            <Icon size={22} strokeWidth={1.6} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide">{title}</h3>
              <p className="mt-0.5 text-sm leading-snug text-muted">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
