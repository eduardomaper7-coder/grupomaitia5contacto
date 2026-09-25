import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import RevealObserver from "@/components/RevealObserver";

/**
 * Tarjeta simplificada: cabecera de contacto + servicios.
 * Móvil: una sola columna (tarjeta → servicios).
 * Escritorio: la tarjeta queda a la izquierda y los servicios a la derecha.
 */
export default function Home() {
  return (
    <>
      <div className="mx-auto w-full max-w-[1180px] lg:grid lg:min-h-dvh lg:grid-cols-[minmax(380px,440px)_1fr] lg:items-center lg:gap-14 lg:px-8 lg:py-8 xl:gap-20">
        <aside className="lg:self-center" aria-label="Tarjeta de contacto">
          <Hero />
        </aside>

        <main
          id="contenido"
          className="mx-auto w-full max-w-[520px] px-5 pb-16 pt-10 sm:max-w-[680px] sm:px-6 lg:max-w-none lg:px-0 lg:py-0"
        >
          <Services />
        </main>
      </div>

      <WhatsAppFloatingButton />
      <RevealObserver />
    </>
  );
}
