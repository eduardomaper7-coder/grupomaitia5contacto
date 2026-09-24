/**
 * ============================================================
 *  DATOS DE LA EMPRESA — edita aquí y se actualiza toda la web
 * ============================================================
 * Teléfono, WhatsApp, Instagram, textos principales y servicios
 * se leen desde este archivo. No hace falta tocar los componentes.
 */

export const company = {
  name: "Grupo Maitia 5",
  /** Nombre corto (vCard, manifest, títulos compactos) */
  shortName: "Maitia 5",
  tagline: "Tu evento, en buenas manos",
  headline: "Organización y servicios para eventos en Tenerife",

  location: {
    area: "Tenerife",
    region: "Islas Canarias",
    country: "España",
    countryCode: "ES",
  },

  phone: {
    /** Formato visible para las personas */
    display: "+34 675 99 92 86",
    /** Formato E.164 para enlaces tel: y vCard */
    e164: "+34675999286",
  },

  whatsapp: {
    /** Solo dígitos, con prefijo de país y sin "+" (formato wa.me) */
    number: "34675999286",
    defaultMessage:
      "Hola Grupo Maitia 5 👋 Me gustaría solicitar información para un evento.",
  },

  instagram: {
    handle: "grupomaitia5",
  },

  /** Correo público (déjalo vacío si no se quiere mostrar) */
  email: "",
} as const;

export type ServiceIconName =
  | "rings"
  | "chalice"
  | "cake"
  | "tent"
  | "cocktail"
  | "tap";

export type Service = {
  title: string;
  description: string;
  icon: ServiceIconName;
};

export const services: Service[] = [
  {
    title: "Bodas",
    description: "Montaje y servicios para celebrar el gran día sin preocupaciones.",
    icon: "rings",
  },
  {
    title: "Comuniones",
    description: "Celebraciones familiares cuidadas en cada detalle.",
    icon: "chalice",
  },
  {
    title: "Cumpleaños",
    description: "Fiestas a tu medida, en casa, en una finca o al aire libre.",
    icon: "cake",
  },
  {
    title: "Casetas y carpas",
    description: "Montaje de casetas y carpas para cubrir y equipar tu evento.",
    icon: "tent",
  },
  {
    title: "Barras libres",
    description: "Servicio de barra libre para que tú solo te ocupes de disfrutar.",
    icon: "cocktail",
  },
  {
    title: "Bebidas y grifos de cerveza",
    description: "Distribución de bebidas e instalación de grifos de cerveza.",
    icon: "tap",
  },
];
