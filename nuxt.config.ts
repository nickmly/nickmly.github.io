// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-icon',
    '@vueuse/nuxt',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Montserrat: true
        }
      }
    ]
  ],
})
