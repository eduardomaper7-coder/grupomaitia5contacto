import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import RevealObserver from "@/components/RevealObserver";

/**
 * Móvil: una sola columna (tarjeta → contenido).
 * Escritorio: la tarjeta de contacto queda fija a la izquierda y el
 * contenido (servicios, galería, contacto) se desplaza a la derecha.
 */
export default function Home() {
  return (
    <>
      <div className="mx-auto w-full max-w-[1180px] lg:grid lg:grid-cols-[minmax(380px,440px)_1fr] lg:gap-14 lg:px-8 lg:py-8 xl:gap-20">
        <aside className="card-sticky lg:self-start" aria-label="Tarjeta de contacto">
          <Hero />
        </aside>

        <main id="contenido" className="mx-auto flex w-full max-w-[520px] flex-col gap-16 px-5 pt-10 sm:max-w-[680px] sm:px-6 lg:max-w-none lg:px-0 lg:pt-6">
          <Intro />
          <div className="hairline-gold" aria-hidden="true" />
          <Services />
          <Gallery />
          <ContactCTA />
          <Footer />
        </main>
      </div>

      <WhatsAppFloatingButton />
      <RevealObserver />
    </>
  );
}
