// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

const srcDir = 'src/'
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins?.push(
          vuetify()
        )
      })
    }
  ],
  build: {
    transpile: ['vuetify']
  },
  srcDir,
  vite: {
    define: {
      'window.global': {}
    },
    // https://stackoverflow.com/questions/70938763/build-problem-with-react-vitejs-and-was-amplify
    resolve: {
      alias: {
        './runtimeConfig': './runtimeConfig.browser'
      }
    }
  },
})
