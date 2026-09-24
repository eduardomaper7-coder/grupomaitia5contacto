import { services } from "@/config/company";
import { ServiceIcon } from "./icons";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="scroll-mt-6">
      <SectionHeading id="servicios-title" eyebrow="Qué hacemos" title="Nuestros" highlight="servicios" />

      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {services.map((service, i) => (
          <li
            key={service.title}
            data-reveal
            style={{ "--reveal-delay": `${(i % 3) * 70}ms` } as React.CSSProperties}
            className="surface group relative flex flex-col items-center rounded-2xl px-3 pb-5 pt-5 text-center sm:items-start sm:px-5 sm:text-left"
          >
            <span className="grid h-[3.6rem] w-[3.6rem] place-items-center rounded-full border border-gold/45 bg-[radial-gradient(circle_at_30%_25%,rgb(214_166_81/0.16),transparent_70%)] text-gold transition-colors duration-300 group-hover:border-gold">
              <ServiceIcon name={service.icon} size={28} />
            </span>
            <h3 className="mt-3.5 text-[0.86rem] font-bold uppercase leading-tight tracking-wide sm:text-[0.95rem]">
              {service.title}
            </h3>
            <p className="mt-1.5 text-[0.8rem] leading-snug text-muted sm:text-[0.86rem]">
              {service.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
