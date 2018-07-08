const Config = require('./assets/config')

module.exports = {
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    titleTemplate: titleChunk => {
      // If undefined or blank then we don't need the hyphen
      return titleChunk ? `${titleChunk} - Code Challenge` : 'Code Challenge'
    },
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'viewport',
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no'
      },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: ''
      },
      {
        hid: 'image',
        name: 'image',
        content: '/images/logo.svg'
      },
      { hid: 'name', itemprop: 'name', content: 'Code Challenge' },
      {
        hid: 'description',
        itemprop: 'description',
        content: ''
      },
      {
        hid: 'image',
        itemprop: 'image',
        content: '/images/logo.svg'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: ''
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Code Challenge'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: ''
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@test' },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@test'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/images/logo.svg'
      },
      { hid: 'og:title', name: 'og:title', content: 'test Code Challenge' },
      { hid: 'og:url', name: 'og:url', content: Config.client },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Code Challenge Website'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: ''
      },
      { hid: 'og:locale', name: 'og:locale', content: 'en_GB' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'og:image',
        name: 'og:image',
        content: '/images/logo.svg'
      }
    ]
  },
  /*
  ** PWA Configuration
  */
  manifest: {
    name: 'Code Challenge',
    short_name: 'Challenge',
    theme_color: '#13294b',
    display: 'minimal-ui',
    description: ''
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    postcss: [require('postcss-responsive-type')()],
    analyze: {
      analyzerMode: 'static',
      openAnalyzer: true
    },
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        /*
        ** Run ESLint on save
        */
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            // fix: true
          }
        })
      }
    }
  },
  css: [
    // node.js module but we specify the pre-processor
    '@/assets/css/main.scss',
    '@/assets/css/swiper.css'
  ],
  /*
  ** Customize the progress-bar style
  */
  loading: {
    color: '#002650',
    height: '4px',
    failedColor: '#DF4661'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    ['nuxt-sass-resources-loader', '~/assets/css/variables.scss']
  ],
  // sitemap: {
  //   path: '/sitemap.xml',
  //   hostname: 'https://example.com',
  //   cacheTime: 1000 * 60 * 15,
  //   exclude: ['/.git']
  // },
  axios: {
    timeout: 5000,
    https: true,
    proxyHeadersIgnore: ['accept-encoding', 'host'],
    debug: false
  },
  plugins: [
    { src: '~/plugins/vue-media.js', ssr: false },
    { src: '~/plugins/vue-intersect', ssr: false },
    { src: '~/plugins/nuxt-swiper.js', ssr: false }
  ]
}
