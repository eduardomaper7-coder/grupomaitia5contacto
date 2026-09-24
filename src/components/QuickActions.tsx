"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, LayoutGrid, Share2, UserPlus } from "lucide-react";
import { company } from "@/config/company";
import { instagramUrl, vcardPath } from "@/lib/links";
import { InstagramIcon } from "./icons";

/** Accesos rápidos: Instagram · Guardar contacto · Compartir · Servicios */
export default function QuickActions() {
  const { share, toast } = useShareCard();

  return (
    <>
      <nav aria-label="Accesos rápidos" className="mt-4 w-full">
        <ul className="grid grid-cols-4 gap-2.5">
          <li>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="surface quick"
              aria-label={`Instagram @${company.instagram.handle} (se abre en una pestaña nueva)`}
            >
              <InstagramIcon size={22} />
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a
              href={vcardPath}
              download="Grupo-Maitia-5.vcf"
              className="surface quick"
              aria-label="Guardar contacto en la agenda (descarga un archivo de contacto)"
            >
              <UserPlus size={22} strokeWidth={1.7} aria-hidden="true" />
              <span>
                Guardar
                <br />
                contacto
              </span>
            </a>
          </li>
          <li>
            <button type="button" onClick={share} className="surface quick w-full" aria-label="Compartir tarjeta">
              <Share2 size={22} strokeWidth={1.7} aria-hidden="true" />
              <span>Compartir</span>
            </button>
          </li>
          <li>
            <a href="#servicios" className="surface quick">
              <LayoutGrid size={22} strokeWidth={1.7} aria-hidden="true" />
              <span>Servicios</span>
            </a>
          </li>
        </ul>
      </nav>
      <Toast message={toast} />
    </>
  );
}

function Toast({ message }: { message: string | null }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`pointer-events-none fixed inset-x-0 bottom-[calc(1.25rem+env(safe-area-inset-bottom))] z-[60] flex justify-center px-4 transition-all duration-300 ${
        message ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
    >
      {message && (
        <span className="surface flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold">
          <Check size={16} className="text-gold" aria-hidden="true" />
          {message}
        </span>
      )}
    </div>
  );
}

/** Web Share API con alternativa de copiar al portapapeles */
export function useShareCard() {
  const [toast, setToast] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const notify = useCallback((msg: string) => {
    setToast(msg);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 2200);
  }, []);

  const share = useCallback(async () => {
    const url = window.location.origin + window.location.pathname;
    const data = {
      title: `${company.name} | Eventos en Tenerife`,
      text: `${company.name} · ${company.tagline}. Tarjeta digital:`,
      url,
    };

    if (typeof navigator.share === "function") {
      try {
        await navigator.share(data);
        return;
      } catch (err) {
        // El usuario canceló: no hacemos nada
        if (err instanceof DOMException && err.name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      notify("Enlace copiado");
    } catch {
      // Último recurso para navegadores sin API de portapapeles
      const input = document.createElement("textarea");
      input.value = url;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      const ok = document.execCommand("copy");
      input.remove();
      notify(ok ? "Enlace copiado" : url);
    }
  }, [notify]);

  return { share, toast };
}
