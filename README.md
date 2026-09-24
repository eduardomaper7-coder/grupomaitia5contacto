# Grupo Maitia 5 · Tarjeta de visita digital

Tarjeta digital / mini web de **Grupo Maitia 5** (organización y servicios para eventos en Tenerife).
Pensada para abrirse desde el móvil al recibir un enlace por WhatsApp o escanear un QR.

- **Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · lucide-react · qrcode
- **Todo es estático:** sin base de datos, sin login, sin backend. Se despliega en Vercel tal cual.

---

## 1. Ejecutar en local

Requisitos: **Node.js 20.9 o superior**.

```bash
npm install
npm run dev
```

Abre http://localhost:3000 (para probar en el móvil, usa la IP de tu ordenador en la misma red Wi‑Fi).

## 2. Build de producción

```bash
npm run lint     # revisión de código
npm run build    # build de producción
npm start        # sirve el build en http://localhost:3000
```

## 3. Desplegar en Vercel

1. Sube esta carpeta a un repositorio de GitHub (sin `node_modules` ni `.next`, ya están en `.gitignore`).
2. En https://vercel.com → **Add New… → Project** → importa el repositorio.
3. Vercel detecta Next.js automáticamente. No hay que cambiar nada → **Deploy**.
4. (Recomendado) Cuando tengas el dominio definitivo, configura `NEXT_PUBLIC_SITE_URL` (ver punto 6) y vuelve a desplegar.

## 4. Cambiar teléfono, WhatsApp, Instagram y textos

Todo está centralizado en **`src/config/company.ts`**:

| Dato | Campo |
| --- | --- |
| Nombre, lema, frase principal | `name`, `tagline`, `headline` |
| Teléfono visible / para llamadas | `phone.display`, `phone.e164` |
| Número de WhatsApp y mensaje predefinido | `whatsapp.number` (solo dígitos, con 34), `whatsapp.defaultMessage` |
| Instagram | `instagram.handle` (sin @) |
| Correo (opcional, vacío = no se muestra) | `email` |
| Zona | `location` |
| Servicios (título, texto e icono) | array `services` |

Los botones, el footer, el archivo de contacto `.vcf`, el SEO y el QR leen de ahí automáticamente.

Los textos de presentación están en `src/components/Intro.tsx` y el bloque final en `src/components/ContactCTA.tsx`.

## 5. Sustituir fotografías

> ⚠️ Las fotos actuales son **provisionales**: son recortes del cartel promocional que se entregó
> (resolución baja). Conviene cambiarlas por fotos reales de trabajos de Grupo Maitia 5.

1. Copia las fotos nuevas en **`src/assets/gallery/`** (JPG o WebP; basta con ~1600 px de ancho; Next.js las optimiza solo).
2. Edita **`src/config/gallery.ts`**: cambia los `import`, el texto alternativo (`alt`) y el pie (`caption`).
   El orden del array es el orden de la galería. La primera foto sale en grande.
3. La foto de fondo de la cabecera es `heroImage` (al final de ese mismo archivo).

Otros recursos gráficos:

| Recurso | Ubicación |
| --- | --- |
| Logotipo (PNG transparente) | `src/assets/logo-grupo-maitia-5.png` y `public/logo-grupo-maitia-5.png` |
| Favicon / iconos | `src/app/favicon.ico`, `src/app/icon.png`, `src/app/apple-icon.png`, `public/icon-192.png`, `public/icon-512.png` |
| Imagen al compartir (Open Graph, 1200×630) | `public/og.jpg` |
| Foto del contacto `.vcf` | `src/assets/vcard-photo.jpg` |

## 6. Configurar `NEXT_PUBLIC_SITE_URL`

Es la URL pública definitiva de la tarjeta (por ejemplo `https://www.grupomaitia5.com`, **sin barra final**).
Se usa en las etiquetas Open Graph (vista previa en WhatsApp), en el `.vcf`, en `sitemap.xml` y en el QR.

- **En Vercel:** Project → **Settings → Environment Variables** → añade `NEXT_PUBLIC_SITE_URL` (entorno *Production*) → **Redeploy**.
- **En local:** copia `.env.example` a `.env.local` y rellénala.

Si no se define, en Vercel se usa automáticamente el dominio de producción del proyecto (`*.vercel.app` o el dominio asignado).

## 7. Código QR

La web incluye el QR listo para cuando haya URL definitiva:

- **`/qr`** → página para ver, **descargar (SVG)** o **imprimir** el QR con el logo en el centro (no se indexa en buscadores).
- **`/qr.svg`** → el QR en formato vectorial, ideal para imprenta (tarjetas, carteles, lonas…).

El QR apunta a `NEXT_PUBLIC_SITE_URL`. Pasos:

1. Configura `NEXT_PUBLIC_SITE_URL` en Vercel y vuelve a desplegar.
2. Abre `https://TU-DOMINIO/qr` y descarga el SVG.
3. Si cambias de dominio, actualiza la variable y redepliega: el QR se regenera solo.

> Usa corrección de errores alta (nivel H) para que el logo central no impida la lectura. Prueba siempre el QR impreso con varios móviles.

## 8. Funciones incluidas

- Botón principal **WhatsApp** con mensaje predefinido + botón flotante discreto al hacer scroll
- **Llamar ahora** (`tel:`)
- **Guardar contacto**: `/contacto.vcf` generado desde la configuración (nombre, teléfono, Instagram, zona, logo)
- **Instagram** (perfil real)
- **Compartir tarjeta**: Web Share API en móviles; en escritorio copia el enlace y muestra "Enlace copiado"
- Servicios, galería con visor ampliado (teclado, flechas y gesto de deslizar), bloque de confianza y CTA final
- SEO, Open Graph, favicon, `theme-color`, manifest, `robots.txt`, `sitemap.xml` y datos estructurados (LocalBusiness)
- Accesibilidad: HTML semántico, `alt`, `aria-label`, foco visible, enlace "Saltar al contenido", respeta `prefers-reduced-motion`
- Fuentes autoalojadas (Montserrat y Great Vibes, licencia OFL) → sin dependencias externas en el build

## 9. Estructura

```
src/
├─ app/
│  ├─ layout.tsx            SEO, Open Graph, fuentes, datos estructurados
│  ├─ page.tsx              Composición de la tarjeta
│  ├─ globals.css           Colores de marca, botones y animaciones
│  ├─ contacto.vcf/route.ts Archivo de contacto
│  ├─ qr/                   Página del QR
│  ├─ qr.svg/route.ts       QR descargable
│  ├─ manifest.ts · robots.ts · sitemap.ts
├─ components/              Hero, QuickActions, Intro, Services, Gallery, ContactCTA, Footer, WhatsAppFloatingButton…
├─ config/
│  ├─ company.ts            ← DATOS DE LA EMPRESA
│  └─ gallery.ts            ← FOTOS DE LA GALERÍA
├─ lib/                     Enlaces (WhatsApp, tel, Instagram, URL del sitio) y generador de QR
├─ assets/                  Logo y fotos
└─ fonts/                   Fuentes autoalojadas
```
