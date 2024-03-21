import { createResolver } from '@nuxt/kit'
import { DEVTOOLS_UI_ROUTE } from '../src/devtools'

const resolver = createResolver(import.meta.url)

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  modules: [
    '@nuxt/devtools-ui-kit',
  ],
  nitro: {
    output: {
      publicDir: resolver.resolve('../dist/client'),
    },
  },
  app: {
    baseURL: DEVTOOLS_UI_ROUTE,
  },
})
