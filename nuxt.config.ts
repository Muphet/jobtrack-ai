// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
    "nuxt-chatgpt"
  ],
  chatgpt: {
    apiKey: "sk-proj-bUFFMuWCCtZZupYtb3EET3BlbkFJTB4fGNmYe8CiiI15b2dm"
  },
  hub: {
    database: true
  },
  fileStorage: {
    mount: ""
  }
})