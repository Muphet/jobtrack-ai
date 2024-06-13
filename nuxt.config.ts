// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    "@nuxthub/core",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/test-utils/module",
    "nuxt-icon",
    "dayjs-nuxt",
    "nuxt-file-storage",
  ],
  fileStorage: {
    mount: ""
  },
  colorMode: {
    classSuffix: ""
  },
  imports: {
    dirs: ["types/*.ts", "stores/*.js", "types/**/*.ts"]
  }
})