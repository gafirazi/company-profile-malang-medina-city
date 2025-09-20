// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  alias: {
    '@': new URL('./', import.meta.url).pathname
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxt/icon'
  ],
  tailwindcss: {
    cssPath: 'assets/css/tailwind.css'
  },
  googleFonts: {
    families: {
      'Playfair Display': [400, 600, 700],
      Inter: [400, 500, 600]
    },
    display: 'swap'
  },
  runtimeConfig: {
    contentful: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
      cdaToken: process.env.CONTENTFUL_CDA_TOKEN,
      previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN
    },
    public: {}
  }
})
