<template>
    <div>
        <logo/>
        <intro/>
        <cursus/>
        <skills/>
        <projects/>
        <extra/>
        <contact/>
    </div>
</template>

<script>
    import Vue from 'vue'
    import vueSmoothScroll from 'vue-smooth-scroll'
    import VueSplitter from "@rmp135/vue-splitter"

    // Internal
    import Logo from '~/components/Logo.vue'
    import Intro from '~/components/Intro.vue'
    import Cursus from '~/components/Cursus.vue'
    import Skills from '~/components/Skills.vue'
    import Projects from '~/components/Projects.vue'
    import Extra from '~/components/Extra.vue'
    import Contact from '~/components/Contact.vue'

    Vue.use(vueSmoothScroll);

    export default {
        components: {
            VueSplitter,

            // Internal
            Logo,
            Intro,
            Cursus,
            Skills,
            Projects,
            Extra,
            Contact
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

    .container .content {
        width: 80vw;
    }

    #logo {
        background: #2abfb8;
    }

    #introduction {
        background: #eaeaea;
    }

    #cv {
        background: #354458;
    }

    #skills {
        background: #fefefe;
    }

    #projects {
        background: #b9d2ff;
    }

    #extra {
        background: #ffe39e;
    }

    #contact {
        background: #eb7260;
    }
</style>

