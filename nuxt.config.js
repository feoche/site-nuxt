module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Francois Eoche',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Francois Eoche - UX Developer'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: 'images/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  css: [
    '~assets/fonts/MarkProLight.css',
    '~assets/fonts/MarkProMedium.css',
    '~assets/fonts/MarkProBold.css',
    '~assets/fonts/MarkProBold.css'
  ],
  plugins: ['~plugins/vue-js-plugins'],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  mode: 'spa'
};

