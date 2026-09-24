import Image from "next/image";
import { Phone } from "lucide-react";
import { company } from "@/config/company";
import { instagramUrl, telUrl, whatsappUrl } from "@/lib/links";
import logo from "@/assets/logo-grupo-maitia-5.png";
import { InstagramIcon, WhatsAppIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();
  const social = [
    { href: whatsappUrl(), label: "WhatsApp", icon: <WhatsAppIcon size={20} />, external: true },
    { href: telUrl, label: "Llamar", icon: <Phone size={19} aria-hidden="true" />, external: false },
    { href: instagramUrl, label: "Instagram", icon: <InstagramIcon size={20} />, external: true },
  ];

  return (
    <footer id="footer" className="border-t border-line pb-[max(2rem,env(safe-area-inset-bottom))] pt-10">
      <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Image src={logo} alt="" width={56} height={56} className="h-14 w-14" />
          <div>
            <p className="text-base font-extrabold uppercase tracking-[0.12em]">{company.name}</p>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Eventos · {company.location.area}
            </p>
          </div>
        </div>

        <ul className="flex items-center gap-3" aria-label="Contacto">
          {social.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={s.label}
                className="grid h-12 w-12 place-items-center rounded-full border border-gold/30 text-gold-light transition-colors hover:border-gold hover:bg-gold/10"
              >
                {s.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7 flex flex-col items-center gap-1.5 text-sm text-muted sm:flex-row sm:justify-between">
        <p className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          <a href={telUrl} className="hover:text-white">
            {company.phone.display}
          </a>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Instagram @{company.instagram.handle}
          </a>
        </p>
        <p className="text-xs text-white/40">
          © {year} {company.name}
        </p>
      </div>
    </footer>
  );
}
