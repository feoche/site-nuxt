<template>
    <div>
        <app-logo/>
        <intro/>
        <cursus/>
    </div>
</template>

<script>
    import AppLogo from '~/components/AppLogo.vue'
    import Intro from '~/components/Intro.vue'
    import Cursus from '~/components/cursus.vue'

    export default {
        components: {
            AppLogo,
            Intro,
            Cursus
        }
    }
</script>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        padding: 5vh 0;
    }

    .logo {
        background: #e5faf7;
    }

    .intro {
        background: #fcfcfc;
    }

    .title {
        font-family: "MarkProBold", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        display: block;
        font-weight: 300;
        font-size: 4rem;
        color: #35495e;
        letter-spacing: -.3rem;
    }

    .subtitle {
        font-family: "MarkProMedium", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        font-weight: 300;
        font-size: 2rem;
        color: #35495e;
        padding-bottom: 15px;
        letter-spacing: -.1rem;
    }
</style>

