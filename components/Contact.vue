<template>
    <section id="contact" class="container">
        <div class="content">
            <h2 class="contact-title">Contact me</h2>
            <p class="contact-text">
                Feel free to use these networks to get in touch with me !
            </p>
            <div class="networks">
                <a v-for="(item, index) in networks"
                   :key="index"
                   :id="item.icon"
                   class="network"
                   :href="item.url"
                   onclick="window.open(this.href); return false;">
                    <svg class="network-icon">
                        <title v-html="item.name"></title>
                        <use :xlink:href="'#' + item.icon" />
                    </svg>
                </a>
            </div>
            <p class="contact-text">
                Besides, you can also check out my work on many websites :
            </p>
            <div class="networks">
                <a v-for="(item, index) in links"
                   :key="index"
                   :id="item.icon"
                   class="network"
                   :href="item.url"
                   onclick="window.open(this.href); return false;">
                    <svg class="network-icon">
                        <title v-html="item.name"></title>
                        <use :xlink:href="'#' + item.icon" />
                    </svg>
                </a>
            </div>

            <p class="contact-text farewell">
                <em>Au revoir !</em> 🖖
            </p>
        </div>
    </section>
</template>

<script>
    export default {
        data: () => ({
            networks: [
                {
                    name: `LinkedIn`,
                    icon: `linkedin`,
                    url: `https://www.linkedin.com/in/francois-eoche`
                },
                {
                    name: `Mail`,
                    icon: `mail`,
                    url: `mailto:francoiseoche at gmail dot com`
                },
                {
                    name: `Twitter`,
                    icon: `twitter`,
                    url: `https://twitter.com/francoiseoche`
                }
            ],
            links : [
                {
                    name: `GitHub`,
                    icon: `github`,
                    url: `https://github.com/feoche`
                },
                {
                    name: `feoche.fr`,
                    icon: `programming`,
                    url: `https://feoche.fr`
                },
                {
                    name: `Codepen`,
                    icon: `3d-outlined-shape`,
                    url: `https://codepen.io/feoche`
                }
            ]
        })
    }
</script>

<style scoped>
    .contact-title {
        padding: .6em 0;
        font-family: "Quicksand", "MarkProBold", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        font-weight: 300;
        font-size: 1.7rem;
        letter-spacing: -.05rem;
    }
    .contact-text {
        padding: .8em 0 1em;
    }

    .networks {
        width: 50vw;
        margin: 0 auto 1em;
        display: flex;
        justify-content: space-around;
    }

    .network {
        position: relative;
        width: 4em;
        height: 4em;
        margin: 0 2vw;
    }

    .network svg {
        transition: all ease-in-out .1s;
        -webkit-filter: drop-shadow(2px 2px 2px transparent);
        filter: drop-shadow(2px 2px 2px transparent);
    }

    .network:hover svg, .network:focus svg {
        -webkit-filter: drop-shadow(2px 2px 2px #333);
        filter: drop-shadow(2px 2px 2px #333);
    }

    .network svg {
        position: relative;
        max-width: 100%;
        max-height: 100%;
        -webkit-filter: drop-shadow(0px 0px 1px #333);
        filter: drop-shadow(0px 0px 1px #333);
    }

    #linkedin svg {
        fill: #0077B5 !important;
    }

    #linkedin:before {
        content:'';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 0;
        background: radial-gradient(circle at center, white 65%, transparent 66%);
        margin: auto;
        max-width: 4em;
        max-height: 3em;
    }

    #twitter svg {
        fill: #55acee !important;
    }


    .farewell {
        margin: 5em 0 0;
    }

</style>
