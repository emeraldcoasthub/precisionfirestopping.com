const pkg = require('./package')

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Firestopping Solutions',
    titleTemplate: '%s • Precision Firestopping',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff',
  },

  /*
   ** Global CSS
   */
  // css: ["@/assets/overwrites.scss"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ,
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
  ],

  /*
   ** Build configuration
   */
  build: {
    output: {
      hashFunction: 'xxhash64',
    },
    extend(config, ctx) {},
  },
  target: 'static',
}
