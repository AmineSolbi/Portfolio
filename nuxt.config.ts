// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    server: {     
    port: 8000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  }, 
  devtools: { enabled: true },
  css: ['~/style.css'],
  modules: ['@nuxt/ui'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [{ src: "~/aos.js", ssr: false, mode: "client" }],

  

})