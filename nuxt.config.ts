export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@nuxt/image',
    '@nuxt/ui'
  ],
  css: ['~/assets/css/main.css']
})