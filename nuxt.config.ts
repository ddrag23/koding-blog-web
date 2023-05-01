// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  modules: ["@element-plus/nuxt", "@vueuse/nuxt", "@pinia/nuxt"],
  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "devextreme/dist/css/dx.light.css"
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
  runtimeConfig: {
    public: {
      BASE_URL: process.env.NUXT_PUBLIC_BASEURL_API,
    },
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
