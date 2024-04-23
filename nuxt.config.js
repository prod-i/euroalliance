import path from 'path'
import env from './env.config'

const srcDir = path.resolve(__dirname, 'src')
const config = {
  modules: [],
  server: {
    host: env.host,
    port: env.port
  },
  /*
   ** root folder of the project file structure
  */
  srcDir,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
   ** Global page headers: https://go.nuxtjs.dev/config-head
  */
  head: {
    title: 'Евроальянс',
    htmlAttrs: {
      lang: 'ru'
    },
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      !env.devMode ? { src: '/OneSignalSDKWorker.js', defer: true } : {},
      {
        hid: 'force-init-script'
        // eslint-disable-next-line
      },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,600&display=swap' }
    ]
  },
  // Подключение глобальных CSS стилей
  css: [
    '@/assets/scss/style.scss'
  ],

  styleResources: {
    scss: [
      '@/assets/scss/global.scss'
    ]
  },

  // Плагины, которые будут загружены перед инициализацией приложения
  plugins: [
    '~/plugins/filters.ts',
    '~/plugins/common.ts',
    '~/plugins/faq.ts',
    {
      src: '~/plugins/vue-splide',
      mode: 'client'
    }
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: false,
  loading: {
    color: '#4B4F54',
    height: '0'
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extractCSS: true,
    loaders: {
      scss: {
        additionalData: `$isMobileApp: ${process.env.CAPACITOR};`
      }
    }
  },
  buildModules: [
    // Модуль @nuxt/typescript-build для поддержки TypeScript
    '@nuxt/typescript-build'
  ],
  render: {
    static: {
      maxAge: 10000 * 60 * 60 * 20
    }
  }
}

export default config
