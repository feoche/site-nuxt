<template>
    <section id="projects" class="container">
        <div class="content">
            <h2 class="projects-title">Projects</h2>
            <div class="projects-items">
                <div class="projects-item"
                     v-for="(item, index) in projects"
                     :key="index">
                    <div class="projects-item-hex"
                         @click="$modal.show(item.title)">
                        <div class="projects-item_content">
                            <img class="projects-item_img"
                                 :src="item.img[0]">
                            <img class="projects-item_img"
                                 v-if="item.img[1]"
                                 :src="item.img[1]">
                            <div class="projects-item_content-title">
                                <div class="projects-item_text-delimiter"></div>
                                <h3 class="projects-item_title"
                                    v-html="item.title"></h3>
                                <div class="projects-item_subtitle">
                                    <em class="projects-item_date"
                                        v-html="item.date"></em>
                                </div>
                                <div class="projects-item_text-delimiter-2"></div>
                            </div>
                        </div>
                    </div>
                    <modal v-bind:name="item.title">
                        <div class="modal-container"
                             @click="$modal.hide(item.title)">
                            <div class="modal-content">
                                <h3 class="projects-modal_title"
                                    v-html="item.title"></h3>
                                <em class="projects-modal_subtitle"
                                    v-html="item.date"></em>
                                <div class="projects-modal_images">
                                    <img class="projects-modal_img"
                                         :src="item.img[0]">
                                    <img class="projects-modal_img"
                                         v-if="item.img[1]"
                                         :src="item.img[1]">
                                    <img class="projects-modal_img"
                                         v-if="item.img[2]"
                                         :src="item.img[2]">
                                </div>
                                <div class="projects-modal_description">
                                    <div class="projects-modal_description_summary"
                                         v-html="item.description"></div>
                                    <div class="projects-modal_description_keywords"
                                         v-if="item.keywords">
                                        <small class="projects-modal_description_keyword"
                                               v-for="(keyword, index) in item.keywords"
                                               :key="index"
                                               v-html="keyword"></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </modal>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import { differenceInQuarters, format } from "date-fns";

  export default {
    data: () => {
      const displayShortDate = (date) => format(date, "MMMM");
      const displayDate = (date) => format(date, "MMMM YYYY");
      const duration = (date1, date2 = null, separator = `—`) => {
        let res = ``;
        let d = Math.abs(differenceInQuarters(date2 || new Date(), date1) / 4).toFixed(2);
        const fraction = d.split(`.`)[1];
        let years = d.split(`.`)[0];
        if (date2) {
          res = `${date1.getFullYear() === date2.getFullYear() ? displayShortDate(date2) : displayDate(date2)} ${separator} ${displayDate(date1)}`;
        } else {
          res = `${displayDate(date1)}`;
        }
        console.info("years : ", d);
        return res;
      };
      return {
        projects: [
          {
            "title": "OVH - Order funnel",
            "img": [require("~/static/images/projets/optimum.jpg"), require("~/static/images/projets/optimum-2.jpg")],
            "link": "https://www.ovh.com/fr/order/dedicated",
            "alt": "OVH - Order funnel",
            "description": "Responsive website for customer ordering OVH's services",
            "date": duration(new Date(2018, 1, 2), null, `<br>`)
          },
          {
            "title": "OVH - Manager",
            "img": [require("~/static/images/projets/optimum.jpg"), require("~/static/images/projets/optimum-2.jpg")],
            "link": "https://www.ovhtelecom.fr/manager/index.html#/",
            "alt": "OVH - Manager",
            "description": "Responsive website for customer management with OVH's services",
            "date": duration(new Date(2017, 9, 2), new Date(2018, 1, 1), `<br>`)
          },
          {
            "title": "RegionsJob",
            "img": [require("~/static/images/projets/optimum.jpg"), require("~/static/images/projets/optimum-2.jpg")],
            "link": "https://www.regionsjob.com/",
            "alt": "RegionsJob",
            "description": "Hybrid app on iOS/Android for job listing/job searching",
            "date": duration(new Date(2017, 8, 2), new Date(2017, 1, 1), `<br>`)
          },
          {
            "title": "CableVision<br><em>Optimum</em>",
            "img": [require("~/static/images/projets/optimum.jpg"), require("~/static/images/projets/optimum-2.jpg")],
            "link": "http://www.optimum.com/",
            "alt": "CableVision—Optimum",
            "description": "Responsive website presenting TV, mobile pre-paid and Internet services of the american company",
            "date": duration(new Date(2016, 1, 2), new Date(2015, 11, 2), `<br>`)
          },
          {
            "title": "Ionic<br><em>The Hybrid Theory</em>",
            "img": [require("~/static/images/projets/ionicthehybridtheory.jpg")],
            "link": "http://slides.com/feoche/ionic-the-hybrid-theory",
            "alt": "Ionic—The Hybrid Theory",
            "description": "Lecture about experience feedback regarding hybrid development in 2015, which took place at <a href=\"http://rennesjs.org\" target= \"_blank\">RennesJS</a>",
            "date": duration(new Date(2015, 11, 2), null, `<br>`)
          },
          {
            "title": "Aon<br><em>Aon Auto</em>",
            "img": [require("~/static/images/projets/aonauto.jpg"), require("~/static/images/projets/aonauto-2.jpg")],
            "link": "https://www.aonassurances.com/Particuliers/Assurance/Gamme_auto/Auto_classique",
            "alt": "Aon Auto—Mobile App",
            "description": "Hybrid app on iOS/Android for insurance handling on vehicule fleets",
            "keywords": ["HTML5", "CSS3", "Sass/Compass", "AngularJS", "ES2015", "Cordova", "Ionic", "Javascript", "jQuery", "JSON", "Webservices"],
            "date": duration(new Date(2015, 11, 2), new Date(2015, 10, 2), `<br>`)
          },
          {
            "title": "Virgin Mobile<br><em>eBoutique</em>",
            "img": [require("~/static/images/projets/virginmobile.jpg"), require("~/static/images/projets/virginmobile-2.jpg")],
            "link": "http://virginmobile.fr",
            "alt": "Virgin Mobile—eBoutique",
            "description": "eShop presenting phone, mobile pre-paid and Internet services with order funnel",
            "keywords": ["PHP", "Symfony/Twig", "Sass/Compass", "Javascript", "AngularJS"],
            "date": duration(new Date(2015, 10, 2), new Date(2015, 5, 2), `<br>`)
          },
          {
            "title": "ERDF<br><em>A mes côtés</em>",
            "img": [require("~/static/images/projets/amescotes.jpg"), require("~/static/images/projets/amescotes-2.jpg")],
            "link": "https://itunes.apple.com/fr/app/a-mes-cotes/id885458976?mt=8",
            "alt": "ERDF—A mes côtés",
            "description": "Hybrid app for iOS, Android and Windows Phone displaying access to self-diagnostic in case of power outage, risk prevention and contact infos",
            "keywords": ["HTML5", "CSS3", "Sass/Compass", "AngularJS", "Cordova", "Ionic", "Javascript", "jQuery", "JSON", "Webservices"],
            "date": duration(new Date(2015, 5, 2), new Date(2015, 3, 2), `<br>`)
          },
          {
            "title": "Natixis<br><em>Rouler Serein</em>",
            "img": [require("~/static/images/projets/roulerserein.jpg"), require("~/static/images/projets/roulerserein-2.jpg")],
            "link": "https://itunes.apple.com/fr/app/rouler-serein/id547607719?mt=8",
            "alt": "Natixis—Rouler Serein",
            "description": "Hybrid app for iOS and Android suggesting insurance simulation, insurance claim and customer service for customer vehicles",
            "keywords": ["HTML5", "CSS3", "Sass/Compass", "AngularJS", "Cordova", "Ionic", "Javascript", "jQuery", "JSON", "Webservices"],
            "date": duration(new Date(2015, 4, 2), new Date(2015, 0, 2), `<br>`)
          },
          {
            "title": "Edelia<br><em>Showcase site</em>",
            "img": [require("~/static/images/projets/edelia.jpg"), require("~/static/images/projets/edelia-2.jpg")],
            "link": "http://www.edelia.fr/",
            "alt": "Edelia—Showcase site",
            "description": "Responsive website displaying Edelia professional offers for energy",
            "keywords": ["Drupal7", "PHP5", "HTML5", "Sass/Compass", "Javascript", "jQuery", "RWD"],
            "date": duration(new Date(2014, 11, 2), null, `<br>`)
          },
          {
            "title": "Bouygues Telecom<br><em>B.tv - Chromecast</em>",
            "img": [require("~/static/images/projets/btv.jpg"), require("~/static/images/projets/btv-2.jpg")],
            "link": "http://www.services.bouyguestelecom.fr/television/services-tv/b-tv",
            "alt": "Bouygues Telecom—B.tv - Chromecast",
            "description": "Chromecast app linked to the BBox (Bouygues Telecom) in order to display compatible TV channels/replays",
            "keywords": ["HTML5", "CSS3", "Javascript", "Google Cast SDK"],
            "date": duration(new Date(2014, 10, 2), new Date(2014, 9, 2), `<br>`)
          },
          {
            "title": "Femmes de Bretagne<br><em>Social network</em>",
            "img": [require("~/static/images/projets/femmesBretagne.jpg")],
            "link": "http://femmesdebretagne.fr",
            "alt": "Site Web Femmes de Bretagne",
            "description": "Social network creation project for women entrepreneurs in Brittany",
            "keywords": ["Drupal7", "PHP5", "HTML5", "Sass/Compass", "Javascript", "jQuery", "Webservices", "RWD"],
            "date": duration(new Date(2014, 10, 2), new Date(2014, 7, 2), `<br>`)
          },
          {
            "title": "Banque Populaire<br><em>Showcase mobile site</em>",
            "img": [require("~/static/images/projets/bpSiteMobile.jpg"), require("~/static/images/projets/bpSiteMobile-2.jpg")],
            "link": "http://mobile.banquepopulaire.fr",
            "alt": "Banque Populaire—Showcase mobile site",
            "description": "Responsive mobile website presenting Banque Populaire offers — related to the desktop website",
            "keywords": ["Drupal7", "PHP5", "HTML5", "Sass/Compass", "Javascript", "jQuery", "Webservices", "RWD"],
            "date": duration(new Date(2014, 9, 2), new Date(2014, 3, 2), `<br>`)
          },
          {
            "title": "Bibliothèque de Rennes Métropole<br><em>Encore catalog</em>",
            "img": [require("~/static/images/projets/lesChampsLibres.jpg")],
            "link": "http://opac.si.leschampslibres.fr/",
            "alt": "Bibliothèque de Rennes Métropole—Encore catalog",
            "description": "Enhancement of documentary notes into the web catalog of Rennes Métropole libraries <a href=\"http://opac.si.leschampslibres.fr\" target= \"_blank\">(Encore)</a> thanks to enriched content coming from <a href=\"http://www.babelio.com\" target= \"_blank\">Babelio</a> database",
            "keywords": ["HTML5", "CSS3", "Javascript", "jQuery"],
            "date": duration(new Date(2013, 7, 2), null, `<br>`)
          },
          {
            "title": "Master 2<br><em>Android app : OuSuij</em>",
            "img": [require("~/static/images/projets/ousuij.jpg")],
            "alt": "Master 2—Android app : OuSuij",
            "description": "Creation of an Android app/game based on Google Maps and Google Street View APIs (vaguely similar to <a href=\"https://geoguessr.com\" target= \"_blank\">GeoGuessr</a> game)",
            "keywords": ["Android", "Java", "XML", "HTML5", "Javascript", "jQuery"],
            "date": duration(new Date(2013, 11, 2), new Date(2013, 8, 2), `<br>`)
          },
          {
            "title": "Master 1 dissertation<br><em>Touchscreens</em>",
            "img": [require("~/static/images/projets/tactile.jpg")],
            "alt": "Master 1 dissertation—Touchscreens",
            "description": "Presentation of a report summarizing the numerous usages around new tech in touchscreen scale",
            "date": duration(new Date(2014, 5, 2), new Date(2014, 0, 2), `<br>`)
          },
          {
            "title": "Master 1<br><em>&lt;IMG++&gt; project</em>",
            "img": [require("~/static/images/projets/imgpp.jpg")],
            "alt": "Master 1—&lt;IMG++&gt; project",
            "description": "Creation of a special HTML5-compatible tag that can handle \"enhanced\" pictures (HDR format, panoramas, 3D, etc.)",
            "keywords": ["HTML5", "CSS3", "WebGL", "Javascript", "jQuery"],
            "date": duration(new Date(2013, 4, 2), new Date(2012, 8, 2), `<br>`)
          }
        ]
      };
    }
  };
</script>

<style scoped>
    #projects .content {
        width: 98vw;
    }

    @media (max-width: 1200px) {
        #projects .content .projects-items {
            margin: 0 2%;
        }
    }

    .projects-title {
        padding: .6em 0;
        font-family: "Quicksand", "MarkProBold", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        font-weight: 300;
        font-size: 1.7rem;
        letter-spacing: -.05rem;
    }

    .projects-items {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        overflow: hidden;
        margin: 0 7%;
    }

    .projects-items:after {
        content: "";
        display: block;
        clear: both;
    }

    .projects-item {
        margin: 0 .2em;
    }

    .projects-item:nth-child(n+6) {
        margin-top: -4.3vw;
    }

    .projects-item:nth-child(9n+6) {
        margin-left: 6.5vw;
    }

    .projects-item:nth-child(9n+9) {
        margin-right: 6.5vw;
    }

    @media (max-width: 1200px) {
        .projects-item:nth-child(n+6) {
            margin-top: 0;
        }

        .projects-item:nth-child(9n+6) {
            margin-left: .2em;
        }

        .projects-item:nth-child(9n+9) {
            margin-right: .2em;
        }

        /*RESET*/
        .projects-item:nth-child(n+4) {
            margin-top: -6.7vw;
        }

        .projects-item:nth-child(5n+4) {
            margin-left: 9.5vw;
        }

        .projects-item:nth-child(5n+5) {
            margin-right: 9.5vw;
        }

        .projects-item:nth-last-child(1):nth-child(even) {
            margin-right: 27.5vw;
            margin-left: 0;
        }
    }

    .projects-item * {
        position: absolute;
        visibility: visible;
    }

    .projects-item-hex {
        position: relative;
        width: 16vw;
        padding-bottom: 18.5vw;
        float: left;
        overflow: hidden;
        visibility: hidden;
        transform: rotate(-60deg) skewY(30deg);
    }

    @media (max-width: 1200px) {
        .projects-item-hex {
            width: 26vw;
            padding-bottom: 30vw;
        }
    }

    .projects-item:hover .projects-item_content-title {
        opacity: 1;
    }

    .projects-item:hover .projects-item_img + .projects-item_img {
        opacity: 1;
    }

    .projects-item_img {
        left: -100%;
        right: -100%;
        width: auto;
        height: 100%;
        margin: 0 auto;
    }

    .projects-item_img + .projects-item_img {
        transition: opacity ease-in-out .3s;
        opacity: 0;
    }

    .projects-item_content {
        width: 100%;
        height: 100%;
        text-align: center;
        color: black;
        overflow: hidden;
        transform: skewY(-30deg) rotate(60deg);
        -webkit-backface-visibility: hidden;
        background: white;
    }

    .projects-item_content-title {
        transition: opacity ease-in-out .2s;
        display: flex;
        width: 100%;
        height: 100%;
        align-content: space-between;
        flex-flow: row wrap;
        justify-content: center;
        background: rgba(255, 255, 255, .9);
        opacity: 0;
        cursor: pointer;
    }

    .projects-item_content-title * {
        position: relative;
    }

    .projects-item_text-delimiter {
        height: 3.7vw;
    }

    .projects-item_text-delimiter:before, .projects-item_text-delimiter:after {
        content: '';
        float: left;
        width: 6.5vw;
        height: 3.7vw;
    }

    .projects-item_text-delimiter:before {
        shape-outside: polygon(0 3.7vw, 6.5vw 0, 0 0);
    }

    .projects-item_text-delimiter:after {
        float: right;
        shape-outside: polygon(6.5vw 0, 6.5vw 3.7vw, 0 0);
    }

    .projects-item_text-delimiter-2 {
        height: 3.7vw;
    }

    .projects-item_text-delimiter-2:before, .projects-item_text-delimiter-2:after {
        content: '';
        float: left;
        width: 6.5vw;
        height: 3.7vw;
    }

    .projects-item_text-delimiter-2:before {
        shape-outside: polygon(0 3.7vw, 6.5vw 3.7vw, 0 0);
    }

    .projects-item_text-delimiter-2:after {
        float: right;
        shape-outside: polygon(6.5vw 0, 6.5vw 3.7vw, 0 3.7vw);
    }

    .projects-item_title {
        width: 100%;
        font-family: "Quicksand", "MarkProMedium", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        letter-spacing: -.1rem;
        font-size: 1.4vw;
        padding: 0 .2vw;
    }

    .projects-item_subtitle {
        font-size: 1.2vw;
        font-family: "Quicksand", "MarkProLight", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        letter-spacing: -.1rem;
    }

    .modal-container {
        position: fixed;
        box-sizing: border-box;
        overflow: hidden;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.4);
        z-index: 999;
        opacity: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-container * {
        position: relative;
    }

    .modal-content {
        position: relative;
        max-width: 60vw;
        max-height: 80vh;
        padding: 5vh 5vw;
        background: white;
        display: flex;
        flex-flow: column wrap;
        box-shadow: 0 3px 10px dimgray;
        border-radius: 10px;
    }

    @media (max-width: 1200px) {
        .modal-content {
            max-width: 80vw;
        }
    }

    .projects-modal_title {
        font-family: "Quicksand", "MarkProMedium", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        letter-spacing: -.1rem;
        font-size: 1.4vw;
        padding: 0 .2vw;
    }

    .projects-modal_images {
        display: flex;
        margin: 2vh auto;
        flex-flow: row;
        justify-content: center;
    }

    .projects-modal_img {
        min-width: 30vh;
        max-height: 30vh;
        margin: 1em;
    }

    .projects-modal_description {

    }

    .projects-modal_description_summary {

    }

    .projects-modal_description_keywords {
        margin: 1em 1em 0;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }

    .projects-modal_description_keyword {
        margin: .1em .2em;
        padding: 0 .5em;
        border-radius: 5px;
        background: lightgray;
    }

</style>
