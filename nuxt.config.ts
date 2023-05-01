// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  modules: ["@element-plus/nuxt", "@vueuse/nuxt", "@pinia/nuxt"],
  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  elementPlus: {
    icon: "ElIcon",
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title:'Koding Blog',
      meta:[{
        name : 'Koding blog',
        content: 'koding blog merupakan web berisi content untuk belajar tentang bahasa pemrogramman'
      }]
    }
  },
});
