<template>
    <section id="logo" class="container">
        <div class="content">
            <img class="logo-img"
                 alt="Photo of myself"
                 src="~/static/images/photo.jpg">
            <h1>
                <span class="title">
                  François Eoche
                </span>
                <span class="subtitle">
                  Web Cabinetmaker
                </span>
            </h1>
        </div>
    </section>
</template>

<style scoped
       lang="scss">

    #logo {

        .logo-img {
            display: inline-block;
            position: relative;
            overflow: hidden;
            width: 10em;
            border-radius: 50%;
            box-shadow: 0 0 2px #35495e;
            min-height: 10em;
        }

        .title {
            font-family: "Quicksand", "MarkProBold", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
            display: block;
            font-weight: 300;
            font-size: 4rem;
            letter-spacing: -.2rem;
        }

        .subtitle {
            font-family: "Quicksand", "MarkProMedium", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
            font-weight: 300;
            font-size: 2rem;
            font-style: normal;
            letter-spacing: -.1rem;
        }
    }
</style>

