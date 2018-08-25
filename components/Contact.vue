<template>
    <section id="contact" class="container">
        <div class="content">
            <h2 class="contact-title">Contact me</h2>
            <p class="contact-text">
                Feel free to use these networks to get in touch with me !
            </p>
            <div class="networks">
                <span class="network"><img src="" alt="LinkedIn"></span>
                <span class="network"><img src="" alt="Mail"></span>
                <span class="network"><img src="" alt="Twitter"></span>
            </div>
            <p class="contact-text">
                Besides, you can also check out my work on many websites :
            </p>
            <div class="networks">
                <span class="network"><img src="" alt="feoche.fr"></span>
                <span class="network"><img src="" alt="GitHub"></span>
                <span class="network"><img src="" alt="CodePen"></span>
            </div>

            <p class="contact-text farewell">
                Au revoir ! 🖖
            </p>
        </div>
    </section>
</template>

<script>
    module.exports = {
        data: () => ({})
    }
</script>

<style scoped>
    #contact {

    }

    .contact-title {
        padding: .6em 0;
        font-family: "MarkProMedium", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        font-weight: 300;
        font-size: 1.7rem;
        letter-spacing: -.05rem;
    }

    .contact-text {
        padding: .5em 0;
    }

    .networks {
        width: 50vw;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
    }

    .network img {
        width: 10em;
        height: 10em;
    }

    .farewell {
        margin: 3em 0 0;
    }

</style>
