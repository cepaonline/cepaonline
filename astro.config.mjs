import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import db from "@astrojs/db";
import auth from "auth-astro";
import partytown from '@astrojs/partytown'
import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://cepaonline.cl",
  image: {
    domains: ["images.unsplash.com"]
  },
  // i18n: {
  //   defaultLocale: "es",
  //   locales: ["es", "en"],
  //   fallback: {
  //     en: "es"
  //   },
  //   routing: {
  //     prefixDefaultLocale: false
  //   }
  // },
  // prefetch: true,
  integrations: [
    tailwind(),
    // sitemap({
    //   i18n: {
    //     defaultLocale: "es",
    //     // All urls that don't contain `fr` after `https://screwfast.uk/` will be treated as default locale, i.e. `en`
    //     locales: {
    //       es: "es",
    //       // The `defaultLocale` value must present in `locales` keys
    //       en: "en"
    //     }
    //   }
    // }),
    db(),
    auth(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    AstroPWA({
      registerType: 'autoUpdate', // Opciones de registro del SW
      manifest: {
        name: 'Cepa Online',
        short_name: 'Cepa Online',
        description: 'Evaluaciones precisas con el TBA. La mejor tecnología para los estudios cognitivos',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            src: '/img/logo/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/logo/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/img/logos/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
      },
    })
  ],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});