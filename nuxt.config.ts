// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@formkit/nuxt"],
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true,
  },
});
