import type { StaticImageData } from "next/image";

/**
 * GALERÍA — para sustituir fotos:
 * 1. Copia las nuevas fotos en src/assets/gallery/ (JPG o WebP, ~1600px de ancho máx.)
 * 2. Cambia los imports y los textos de abajo.
 * El orden del array es el orden en que aparecen en la web.
 */
import carpaBanquete from "@/assets/gallery/carpa-banquete.jpg";
import banqueteBoda from "@/assets/gallery/banquete-boda.jpg";
import casetaRoja from "@/assets/gallery/caseta-roja.jpg";
import barraGrifos from "@/assets/gallery/barra-grifos.jpg";
import carpasNoche from "@/assets/gallery/carpas-noche.jpg";
import mesasExterior from "@/assets/gallery/mesas-exterior.jpg";

export type GalleryImage = {
  src: StaticImageData;
  alt: string;
  caption: string;
};

export const gallery: GalleryImage[] = [
  {
    src: carpaBanquete,
    alt: "Carpa blanca iluminada con mesas de banquete al aire libre al atardecer",
    caption: "Carpa para banquete",
  },
  {
    src: casetaRoja,
    alt: "Caseta roja con barra y luces cálidas montada entre palmeras",
    caption: "Caseta con barra",
  },
  {
    src: mesasExterior,
    alt: "Mesas vestidas con centros de flores bajo guirnaldas de luces",
    caption: "Banquete al aire libre",
  },
  {
    src: carpasNoche,
    alt: "Carpas blancas con iluminación nocturna y palmeras",
    caption: "Montaje de carpas",
  },
  {
    src: barraGrifos,
    alt: "Grifos de cerveza sirviendo una caña en una barra",
    caption: "Barra y grifos",
  },
  {
    src: banqueteBoda,
    alt: "Mesas de boda decoradas con flores y guirnaldas de luces junto al mar",
    caption: "Celebración de boda",
  },
];

/** Foto de fondo de la cabecera */
export { banqueteBoda as heroImage };
