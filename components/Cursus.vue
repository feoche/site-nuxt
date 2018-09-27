<template>
    <section id="cv" class="container">
        <div class="content">
            <h2 id="cv-career" class="cv-title">Career experience</h2>
            <div class="cv-items">
                <div class="cv-item"
                     v-for="(item, index) in cursus"
                     :key="index">
                    <h3 class="cv-item_title" v-html="item.job"></h3>
                    <div class="cv-item_subtitle"><span class="cv-item_place" v-html="item.place"></span><em>&nbsp;&mdash;&nbsp;<span
                            class="cv-item_date" v-html="item.date"></span></em></div>
                    <ul class="cv-item_missions">
                        <li class="cv-item_mission"
                            v-for="(mission, index) in item.missions"
                            :key="index"
                            v-html="mission"></li>
                    </ul>
                </div>
            </div>
            <h2 id="cv-studies" class="cv-title">Studies</h2>
            <div class="cv-items">
                <div class="cv-item"
                     v-for="(item, index) in studies"
                     :key="index">
                    <h3 class="cv-item_title" v-html="item.job"></h3>
                    <div class="cv-item_subtitle"><span class="cv-item_place" v-html="item.place"></span><em>&nbsp;&mdash;&nbsp;<span
                            class="cv-item_date" v-html="item.date"></span></em></div>
                    <ul class="cv-item_missions">
                        <li class="cv-item_mission"
                            v-for="(mission, index) in item.missions"
                            :key="index"
                            v-html="mission"></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data: () => {
            const duration = (date1, date2) => {
                let d = Math.abs(moment(date1).diff((date2 || moment()), `years`, true)).toFixed(2);
                const fraction = d.split(`.`)[1];
                d = d.split(`.`)[0];
                return `${date2 ? date2 + ' &#10145; ' : ''}${date1}${d >= 1 ? (' — ' + d + '' + (fraction > 75 ? `¾` : fraction > 50 ? `½` : `¼`) + ' year' + (d > 1 ? 's' : '')) : ''}`;
            };
            return {
                cursus: [
                    {
                        job: `Front-End UX Developer`,
                        date: `Since ${duration('Sep. 2017')}`,
                        place: `<a href="http://ovh.com/" onclick="window.open(this.href); return false;">OVH</a>`,
                        missions: [`Web/Mobile site integration - Order funnel & Customer area`, `Web Accessibility`, `Monitor technological developments`]
                    },
                    {
                        job: `Research Engineer`,
                        date: duration('Sep. 2017', 'Sep. 2014'),
                        place: `<a href="http://niji.fr/" onclick="window.open(this.href); return false;">Niji</a>`,
                        missions: [`Web/Mobile site/Hybrid app integration`, `Corrective maintenance`, `Monitor technological developments`]
                    },
                    {
                        job: `End-of-studies Internship<div class="subtitle">Study and Web/Mobile site development</div>`,
                        date: duration('Sep. 2014', 'Mar. 2014'),
                        place: `<a href="http://niji.fr/" onclick="window.open(this.href); return false;">Niji</a>`,
                        missions: [`Integration in already-existing development teams`, `Web/Mobile site/Hybrid app integration`, `Corrective maintenance`]
                    },
                    {
                        job: `1st year of Masters Internship<div class="subtitle">Integrate the IT department</div>`,
                        date: duration('Sep. 2013', 'Jun. 2013'),
                        missions: [`<abbr title="Extract Transform Load">ETL</abbr> of distant raw data to adapt in Rennes Métropole libraries' database system`, `Addition of rich media support in documentary notes`, `IT department`],
                        place: `<a href="http://metropole.rennes.fr/" onclick="window.open(this.href); return false;">Ville de Rennes</a>`
                    }
                ],
                studies: [
                    {
                        date: `Sep. 2014`,
                        job: `Masters degree Diploma`,
                        missions: [`Special emphasis on interface ergonomics and Information and Communications Technology.`, `With "Good" distinction`],
                        place: "<a href=\"http://www.istic.univ-rennes1.fr/\" onclick=\"window.open(this.href); return false;\">ISTIC – University of Rennes 1</a>"
                    },
                    {
                        date: `May. 2014`,
                        job: `<a href=\"http://www.certification-cles.fr\" onclick=\"window.open(this.href); return false;\">“Certificat de compétences en Langues de l’Enseignement Supérieur”</a><div class="subtitle">Level 2 diploma</div>`,
                        missions: [`Academic equivalent of the TOEIC test`, `~785+ TOEIC points`],
                        place: "<a href=\"http://www.istic.univ-rennes1.fr/\" onclick=\"window.open(this.href); return false;\">ISTIC – University of Rennes 1</a>"
                    },

                ]
            }
        }
    }
</script>

<style>
    #cv {
        color: white;
        text-align: left;
        text-shadow: 0 0 2px black;
    }

    .cv-title {
        text-align: center;
        padding: .6em 0;
        font-family: "MarkProBold", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        font-weight: 300;
        font-size: 1.7rem;
        letter-spacing: -.05rem;
    }

    .cv-items {
        display: flex;
        flex-flow: wrap;
        justify-content: space-between;
    }

    .cv-item {
        width: calc(50% - 1.6em);
        padding: 1.2em 0;
    }

    @media (max-width: 800px) {
        .cv-items {
            flex-flow: column wrap;
        }

        .cv-item {
            width: auto;
            padding: .8em 0;
        }
    }

    .cv-item a {
        color: #92b5fa;
    }

    .cv-item_title {
        font-family: "MarkProMedium", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        font-size: 1.2rem;
        transform: scaleX(.9);
        transform-origin: left center;
    }

    .cv-item_subtitle, .subtitle {
        color: #d4d4d4;
        font-size: .8rem;
    }

    .cv-item_subtitle {
        padding: .3em .8em 1em;
    }

    .cv-item_missions {
        padding: .2em 1.5em;
    }

    .cv-item_mission {
        padding: .1em;
        font-size: 1rem;
        list-style: circle;
    }
</style>
