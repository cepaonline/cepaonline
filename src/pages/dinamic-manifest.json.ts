import type { APIRoute, ImageMetadata } from "astro";
import { getImage } from "astro:assets";
import icon from "@images/icon.png";
import maskableIcon from "@images/icon-maskable.png";
/**
 * Este archivo (`manifest.json.ts`) genera dinámicamente el `manifest.json` de tu PWA
 * usando una ruta de API de Astro.
 *
 * Mejora el rendimiento del manifiesto actual ofreciendo:
 *
 * ## 🚀 Ventajas Clave
 * - **Iconos Optimizados:** Astro Assets redimensiona y optimiza tus iconos automáticamente.
 * - **Mantenimiento Fácil:** Toda la lógica de iconos y manifiesto en un solo lugar.
 * - **Adaptabilidad:** Añade o cambia tamaños de iconos sin esfuerzo manual.
 * - **Control Total:** Gestiona los cambios del manifiesto con tu control de versiones.
 *
 * ## 🛠️ Pasos para Implementar
 * 1. Renombra el archivo: Cambia `dinamic-manifest.json.ts` a `manifest.json.ts`
 * (debe estar en `src/pages/`).
 * 2. Enlaza el manifiesto: Añade esta línea al `<head>` de tu layout principal
 * (ej. `src/layouts/Layout.astro`):
 * `<link rel="manifest" href="/manifest.json" />`
 */

interface Favicon {
  purpose: 'any' | 'maskable' | 'monochrome';
  src: ImageMetadata;
  sizes: number[];
}

const sizes = [192, 512];
const favicons: Favicon[] = [
  {
    purpose: 'any',
    src: icon,
    sizes,
  },
  {
    purpose: 'maskable',
    src: maskableIcon,
    sizes,
  },
];

export const GET: APIRoute = async () => {
  const icons = await Promise.all(
    favicons.flatMap((favicon) =>
      favicon.sizes.map(async (size) => {
        const image = await getImage({
          src: favicon.src,
          width: size,
          height: size,
          format: "png",
        });
        return {
          src: image.src,
          sizes: `${image.options.width}x${image.options.height}`,
          type: `image/${image.options.format}`,
          purpose: favicon.purpose,
        };
      }),
    ),
  );

  const manifest = {
    short_name: "cepa",
    name: "cepa",
    icons,
    display: "minimal-ui",
    id: "/",
    start_url: "/",
    theme_color: "#FFEDD5",
    background_color: "#262626",
  };

  return new Response(JSON.stringify(manifest));
};
