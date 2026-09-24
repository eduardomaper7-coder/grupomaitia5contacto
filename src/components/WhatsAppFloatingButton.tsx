"use client";

import { useEffect, useState } from "react";
import { company } from "@/config/company";
import { whatsappUrl } from "@/lib/links";
import { WhatsAppIcon } from "./icons";

/**
 * Botón flotante discreto: aparece solo cuando los botones principales
 * de la cabecera ya no se ven y se oculta al llegar al bloque de contacto final.
 */
export default function WhatsAppFloatingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-actions");
    const cta = document.getElementById("contacto");
    const footer = document.getElementById("footer");
    if (!hero) return;

    const state = { hero: true, cta: false, footer: false };
    const update = () => setVisible(!state.hero && !state.cta && !state.footer);

    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) state.hero = e.isIntersecting;
        if (e.target === cta) state.cta = e.isIntersecting;
        if (e.target === footer) state.footer = e.isIntersecting;
      }
      update();
    });
    [hero, cta, footer].forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escribir a ${company.name} por WhatsApp`}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-b from-[#22b85b] to-wa-dark text-white shadow-[0_10px_28px_-8px_rgba(18,129,60,0.8)] ring-1 ring-white/20 transition-all duration-300 ease-out ${
        visible ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-4 scale-90 opacity-0"
      }`}
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
