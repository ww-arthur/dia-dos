// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  app: {
    head: {
      title: 'Feliz Dia dos Namorados',
      meta: [
        {
          name: 'viewport',
          content: [
            'initial-scale=1.0',
            'width=device-width',
            'height=device-height',
            'viewport-fit=cover',
            'user-scalable=no',
          ].join(','),
        },
        {
          charset: 'utf-8',
        },
       
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  modules: [
    
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
 
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})