import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import '@/styles/main.scss'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
      directives,
      icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi,
        },
      },
      defaults: {
          VBtn: { rounded: 'xl' },
      },
      ssr: false,
      theme: {
        defaultTheme: 'dark',
        variations: {
            colors: ['primary', 'secondary'],
            lighten: 5,
            darken: 5,
          },
        themes: {
          dark: {
            colors: {
                primary: '#e55451',
                secondary: '#573678',
                tertiary: '#367871',
                accent: '#CDAFA0',
            },
          },
          light: {
            colors: {
                primary: '#e55451',
                secondary: '#573678',
                tertiary: '#367871',
                accent: '#CDAFA0',
            },
          },
        },
      },
  })
  app.vueApp.use(vuetify)
})