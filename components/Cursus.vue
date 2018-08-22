<template>
    <section class="container cv">
        <h3>Career experiences</h3>
        <div class="cv-item"
             v-for="(item, index) in cursus"
             :key="index">
            <span class="cv-item_title" v-html="item.job"></span>
            &nbsp;&mdash;&nbsp;<span class="cv-item_place" v-html="item.place"></span>
            &nbsp;&mdash;&nbsp;<span class="cv-item_date" v-html="item.date"></span>
            <ul class="cv-item_missions">
                <li class="cv-item_mission"
                    v-for="(mission, index) in item.missions"
                    :key="index"
                    v-html="mission"></li>
            </ul>
        </div>
    </section>
</template>

<script>
    module.exports = {
        data: () => ({
            cursus: [
                {
                    date: `Since september 2017`,
                    job: `Front-End UX Developer`,
                    missions: [`Web/Mobile site integration - Order funnel & customer area`, `Web Accessibility`, `Monitor technological developments`],
                    place: `<a href="http://ovh.com/" onclick="window.open(this.href); return false;">OVH</a>`
                },
                {
                    date: `Sep. 2014 🠚 Sep. 2017`,
                    job: `Research Engineer`,
                    missions: [`Web/Mobile site/Hybrid app integration`, `Corrective maintenance`, `Monitor technological developments`],
                    place: `<a href="http://niji.fr/" onclick="window.open(this.href); return false;">Niji</a>`
                },
                {
                    date: `Mar. 2014 🠚 Sep. 2014`,
                    job: `End-of-studies Internship - Study and Web/Mobile site development`,
                    missions: [`Integration in already-existing development teams`, `Web/Mobile site/Hybrid app integration`, `Corrective maintenance`],
                    place: `<a href="http://niji.fr/" onclick="window.open(this.href); return false;">Niji</a>`
                },
                {
                    date: `Jun. 2013 🠚 Aug. 2013`,
                    job: `1st year of Masters Internship`,
                    missions: [`<abbr title="Extract Transform Load">ETL</abbr> of distant raw data to adapt in Rennes Métropole libraries' database system`, `Addition of rich media support in documentary notes`, `IT department`],
                    place: `<a href="http://metropole.rennes.fr/" onclick="window.open(this.href); return false;">Ville de Rennes</a>`
                }
            ]
        })
    }
</script>

<style>
    .cv {
        background: #35495e;
        color: white;
    }

    .cv a {
        color: #92b5fa;
    }
</style>
