export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['./app/assets/css/main.css'],
  
  app: {
    baseURL: '/jeder49.github.io/', // Replace with your repo name
    buildAssetsDir: 'assets',
  },
  
  nitro: {
    preset: 'github_pages'
  }
})