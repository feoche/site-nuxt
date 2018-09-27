<template>
    <section id="extras" class="container">
        <div class="content">
            <h2 class="extra-title">Extras</h2>
            <div class="extra-items">
                <div class="extra-item"
                     v-for="(item, index) in extras"
                     :key="index">
                    <h3 class="extra-item_title" v-html="item.job"></h3>
                    <div class="extra-item_subtitle"><span class="extra-item_place" v-html="item.place"></span><em><span
                            class="extra-item_date" v-html="item.date"></span></em></div>
                    <ul class="extra-item_missions">
                        <li class="extra-item_mission"
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
                return `${date2 ? date2 + ' 🠚 ' : ''}${date1}${d >= 1 ? (' — ' + d + '' + (fraction > 75 ? `¾` : fraction > 50 ? `½` : `¼`) + ' year' + (d > 1 ? 's' : '')) : ''}`;
            };
            return {
                extras: [
                    {
                        job: `<a href="https://rennesjs.org" onclick="window.open(this.href); return false;">RennesJS</a> Staff`,
                        date: `Since ${duration('Aug. 2017')}`,
                        missions: [`Meetup organization`, `In touch with <a href="http://lafrenchtech-rennes.fr" onclick="window.open(this.href); return false;">French Tech</a>`, `Monitor technological developments`]
                    },
                    {
                        job: `<a href="https://indieco.xyz" onclick="window.open(this.href); return false;">Indie Collective</a> Secretary`,
                        date: `Since ${duration('Apr. 2017')}`,
                        missions: [`<a href="https://stunfest.com/" onclick="window.open(this.href); return false;">Stunfest</a> main staff`, `Game Jams organizer`, `Weekly meetup host`]
                    },
                    {
                        job: `<a href="https://speedrennes.com" onclick="window.open(this.href); return false;">SpeedRennes</a> Founder`,
                        date: `Since ${duration('Jan. 2017')}`,
                        missions: [`Game speedrun commentary host`, `Conferences about speedrun organizer`]
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    #extras {
        text-align: left;
    }

    .extra-title {
        text-align: center;
        padding: .6em 0;
        font-family: "MarkProBold", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        font-weight: 300;
        font-size: 1.7rem;
        letter-spacing: -.05rem;
    }

    .extra-items {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
    }

    .extra-item {
        width: 33%;
        padding: 1.2em 0;
    }

    @media (max-width: 800px) {
        .extra-items {
            flex-flow: column wrap;
        }

        .extra-item {
            width: auto;
            padding: .5em 0;
        }
    }

    .extra-item a {
        color: #92b5fa;
    }

    .extra-item_title {
        font-size: 1.2rem;
        font-family: "MarkProMedium", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        transform: scaleX(.9);
        transform-origin: left center;
    }

    .extra-item_subtitle {
        font-size: .8rem;
    }

    .extra-item_subtitle {
        padding: .3em .8em .5em;
    }

    .extra-item_missions {
        padding: .2em 1.5em;
    }

    .extra-item_mission {
        padding: .1em;
        font-size: 1rem;
        list-style: circle;
    }
</style>
