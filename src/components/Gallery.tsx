"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { gallery } from "@/config/gallery";
import SectionHeading from "./SectionHeading";

/**
 * Mosaico: en móvil (2 columnas) la 1.ª y la última foto ocupan todo el ancho;
 * a partir de tablet (3 columnas) la 1.ª foto es grande (2×2) y el resto cuadradas.
 */
function tileClass(i: number, total: number) {
  if (i === 0) return "col-span-2 aspect-[16/9] sm:row-span-2 sm:aspect-auto";
  if (i === total - 1) return "col-span-2 aspect-[16/9] sm:col-span-1 sm:aspect-[4/3.4]";
  return "aspect-[4/3.4]";
}

export default function Gallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);
  const total = gallery.length;

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + total) % total)),
    [total],
  );

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    const onClose = () => setIndex(null);
    dlg.addEventListener("keydown", onKey);
    dlg.addEventListener("close", onClose);
    return () => {
      dlg.removeEventListener("keydown", onKey);
      dlg.removeEventListener("close", onClose);
    };
  }, [go]);

  const current = index !== null ? gallery[index] : null;

  return (
    <section id="galeria" aria-labelledby="galeria-title" className="scroll-mt-6">
      <SectionHeading id="galeria-title" eyebrow="Algunos de nuestros trabajos" title="Nuestros" highlight="eventos" />

      <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
        {gallery.map((img, i) => (
          <li key={img.caption + i} data-reveal className={`${tileClass(i, total)} relative`}>
            <button
              type="button"
              onClick={() => open(i)}
              className="group absolute inset-0 overflow-hidden rounded-2xl border border-gold/15 bg-coal-2"
              aria-label={`Ampliar foto: ${img.caption}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                placeholder="blur"
                sizes={i === 0 ? "(min-width: 640px) 66vw, 100vw" : "(min-width: 640px) 33vw, 50vw"}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-black/85 via-black/35 to-transparent px-3 pb-2.5 pt-8 text-left">
                <span className="text-[0.72rem] font-semibold uppercase tracking-wider sm:text-xs">{img.caption}</span>
                <Expand size={15} className="shrink-0 text-gold-light opacity-80" aria-hidden="true" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Galería de fotos ampliada"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        {current && index !== null && (
          <div
            className="flex h-full w-full flex-col"
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1);
              touchX.current = null;
            }}
          >
            <div className="flex items-center justify-between px-4 pb-2 pt-[max(1rem,env(safe-area-inset-top))]">
              <p className="text-sm font-semibold tabular-nums text-muted" aria-live="polite">
                {index + 1} / {total}
              </p>
              <button
                type="button"
                onClick={close}
                className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"
                aria-label="Cerrar galería"
                autoFocus
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>

            <div
              className="relative flex-1"
              onClick={(e) => {
                if (e.target === e.currentTarget) close();
              }}
            >
              <Image
                key={index}
                src={current.src}
                alt={current.alt}
                fill
                sizes="100vw"
                className="object-contain p-2 sm:p-8"
              />
              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-black/55 backdrop-blur-sm transition hover:bg-black/80 sm:left-6"
                aria-label="Foto anterior"
              >
                <ChevronLeft size={24} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-black/55 backdrop-blur-sm transition hover:bg-black/80 sm:right-6"
                aria-label="Foto siguiente"
              >
                <ChevronRight size={24} aria-hidden="true" />
              </button>
            </div>

            <p className="px-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-3 text-center text-sm font-semibold uppercase tracking-widest text-gold-light">
              {current.caption}
            </p>
          </div>
        )}
      </dialog>
    </section>
  );
}
