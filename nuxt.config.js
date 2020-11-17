const routerBase = process.env.DEPLOY_ENV === "GH_PAGES" ? {
        router: {
            base: "/site-nuxt/"
        }
    } : {};

module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'Francois Eoche - Web Cabinetmaker',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Francois Eoche - UX Developer'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    ...routerBase,
    /*
    ** Customize the progress bar color
    */
    loading: {color: '#3B8070'},
    target: 'static',
    css: [
        '~/assets/fonts/BoosterNextFYBold.css',
        '~/assets/fonts/BoosterNextFYMedium.css',
        '~/assets/fonts/MarkProLight.css',
        '~/assets/fonts/MarkProMedium.css',
        '~/assets/fonts/MarkProBold.css',
        '~/assets/fonts/remissis.css',

        '~/assets/sass/themes.sass'
    ],
    plugins: ['~plugins/vue-js-plugins'],
    /*
    ** Build configuration
    */
    buildDir: '_nuxt',
    build: {
        publicPath: '_nuxt/dist/',
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

