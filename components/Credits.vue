<template>
    <section id="credits" class="container">
        <p>Made with <span>こころ</span>, using <a href="https://nuxtjs.org/" onclick="window.open(this.href); return false;">Nuxt</a>.</p>
    </section>
</template>

<style scoped>
    #credits {
        font-family: "MarkProMedium", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        padding: .8em 0;
        font-size: .8rem;
    }

    #credits span {
        font-weight: bold;
        color: deeppink;
        margin-left: -.2em;
        letter-spacing: -.2em;
    }
</style>
