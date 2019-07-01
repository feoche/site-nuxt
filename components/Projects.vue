<template>
    <section id="projects" class="container">
        <div class="content">
            <h2 class="projects-title">Projects</h2>
            <div class="projects-items">
                <div class="projects-item"
                     v-for="(item, index) in projects"
                     :class="{'active': activeProject === index}"
                     @click="activeProject = (activeProject === index)? null : index"
                     :key="index">
                    <div class="projects-item_container">
                        <img class="projects-item_img"
                             :src="item.img[0]">
                        <div class="projects-item_content">
                            <div class="projects-item_title"
                                v-html="item.title"></div>
                            <div class="projects-item_subtitle">
                                <em class="projects-item_date"
                                    v-html="item.date"></em>
                            </div>
                            <div class="projects-item_description"
                                 v-show="activeProject === index">
                                <div class="project_description">
                                    <div class="project_description_summary"
                                         v-html="item.description"></div>
                                    <div class="project_description_keywords"
                                         v-if="item.keywords">
                                        <small class="project_description_keyword"
                                               v-for="(keyword, index) in item.keywords"
                                               :key="index"
                                               v-html="keyword"></small>
                                    </div>
                                </div>
                                <div class="project_images">
                                    <img class="project_img"
                                         v-if="item.img[1]"
                                         :src="item.img[1]">
                                    <img class="project_img"
                                         v-if="item.img[2]"
                                         :src="item.img[2]">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import { format } from "date-fns";

  export default {
    data: () => {
      const displayShortDate = (date) => format(date, "MMMM");
      const displayDate = (date) => format(date, "MMMM YYYY");
      const duration = (date1, date2 = null, separator = `—`) => {
        let res = ``;
        if (date2) {
          res = `${date1.getFullYear() === date2.getFullYear() ? displayShortDate(date2) : displayDate(date2)} ${separator} ${displayDate(date1)}`;
        } else {
          res = `${displayDate(date1)}`;
        }
        return res;
      };
      return {
        projects: [
          {
            title: "CableVision<br><em>Optimum</em>",
            img: [require(`~/static/images/projets/optimum.jpg`), require(`~/static/images/projets/optimum-2.jpg`)],
            link: "http://www.optimum.com/",
            alt: "CableVision—Optimum",
            description: "Responsive website presenting TV, mobile pre-paid and Internet services of the american company",
            date: duration(new Date(2016, 1, 2), new Date(2015, 11, 2), `<br>`)
          },
          {
            title: "Ionic<br><em>The Hybrid Theory</em>",
            img: [require(`~/static/images/projets/ionicthehybridtheory.jpg`)],
            link: "http://slides.com/feoche/ionic-the-hybrid-theory",
            alt: "Ionic—The Hybrid Theory",
            description: "Lecture about experience feedback regarding hybrid development in 2015, which took place at <a href=\"http://rennesjs.org\" target= \"_blank\">RennesJS</a>",
            date: duration(new Date(2015, 11, 2), null, `<br>`)
          },
          {
            title: "Aon<br><em>Aon Auto</em>",
            img: [require(`~/static/images/projets/aonauto.jpg`), require(`~/static/images/projets/aonauto-2.jpg`)],
            link: "https://www.aonassurances.com/Particuliers/Assurance/Gamme_auto/Auto_classique",
            alt: "Aon Auto—Mobile App",
            description: "Hybrid app on iOS/Android for insurance handling on vehicule fleets",
            keywords: ["HTML5", "CSS3", "Sass/Compass", "AngularJS", "ES2015", "Cordova", "Ionic", "Javascript", "jQuery", "JSON", "Webservices"],
            date: duration(new Date(2015, 11, 2), new Date(2015, 10, 2), `<br>`)
          },
          {
            title: "Virgin Mobile<br><em>eBoutique</em>",
            img: [require(`~/static/images/projets/virginmobile.jpg`), require(`~/static/images/projets/virginmobile-2.jpg`)],
            link: "http://virginmobile.fr",
            alt: "Virgin Mobile—eBoutique",
            description: "eShop presenting phone, mobile pre-paid and Internet services with order funnel",
            keywords: ["PHP", "Symfony/Twig", "Sass/Compass", "Javascript", "AngularJS"],
            date: duration(new Date(2015, 10, 2), new Date(2015, 5, 2), `<br>`)
          },
          {
            title: "ERDF<br><em>A mes côtés</em>",
            img: [require(`~/static/images/projets/amescotes.jpg`), require(`~/static/images/projets/amescotes-2.jpg`)],
            link: "https://itunes.apple.com/fr/app/a-mes-cotes/id885458976?mt=8",
            alt: "ERDF—A mes côtés",
            description: "Hybrid app for iOS, Android and Windows Phone displaying access to self-diagnostic in case of power outage, risk prevention and contact infos",
            keywords: ["HTML5", "CSS3", "Sass/Compass", "AngularJS", "Cordova", "Ionic", "Javascript", "jQuery", "JSON", "Webservices"],
            date: duration(new Date(2015, 5, 2), new Date(2015, 3, 2), `<br>`)
          },
          {
            title: "Natixis<br><em>Rouler Serein</em>",
            img: [require(`~/static/images/projets/roulerserein.jpg`), require(`~/static/images/projets/roulerserein-2.jpg`)],
            link: "https://itunes.apple.com/fr/app/rouler-serein/id547607719?mt=8",
            alt: "Natixis—Rouler Serein",
            description: "Hybrid app for iOS and Android suggesting insurance simulation, insurance claim and customer service for customer vehicles",
            keywords: ["HTML5", "CSS3", "Sass/Compass", "AngularJS", "Cordova", "Ionic", "Javascript", "jQuery", "JSON", "Webservices"],
            date: duration(new Date(2015, 4, 2), new Date(2015, 0, 2), `<br>`)
          },
          {
            title: "Edelia<br><em>Showcase site</em>",
            img: [require(`~/static/images/projets/edelia.jpg`), require(`~/static/images/projets/edelia-2.jpg`)],
            link: "http://www.edelia.fr/",
            alt: "Edelia—Showcase site",
            description: "Responsive website displaying Edelia professional offers for energy",
            keywords: ["Drupal7", "PHP5", "HTML5", "Sass/Compass", "Javascript", "jQuery", "RWD"],
            date: duration(new Date(2014, 11, 2), null, `<br>`)
          },
          {
            title: "Bouygues Telecom<br><em>B.tv - Chromecast</em>",
            img: [require(`~/static/images/projets/btv.jpg`), require(`~/static/images/projets/btv-2.jpg`)],
            link: "http://www.services.bouyguestelecom.fr/television/services-tv/b-tv",
            alt: "Bouygues Telecom—B.tv - Chromecast",
            description: "Chromecast app linked to the BBox (Bouygues Telecom) in order to display compatible TV channels/replays",
            keywords: ["HTML5", "CSS3", "Javascript", "Google Cast SDK"],
            date: duration(new Date(2014, 10, 2), new Date(2014, 9, 2), `<br>`)
          },
          {
            title: "Femmes de Bretagne<br><em>Social network</em>",
            img: [require(`~/static/images/projets/femmesBretagne.jpg`)],
            link: "http://femmesdebretagne.fr",
            alt: "Site Web Femmes de Bretagne",
            description: "Social network creation project for women entrepreneurs in Brittany",
            keywords: ["Drupal7", "PHP5", "HTML5", "Sass/Compass", "Javascript", "jQuery", "Webservices", "RWD"],
            date: duration(new Date(2014, 10, 2), new Date(2014, 7, 2), `<br>`)
          },
          {
            title: "Banque Populaire<br><em>Showcase mobile site</em>",
            img: [require(`~/static/images/projets/bpSiteMobile.jpg`), require(`~/static/images/projets/bpSiteMobile-2.jpg`)],
            link: "http://mobile.banquepopulaire.fr",
            alt: "Banque Populaire—Showcase mobile site",
            description: "Responsive mobile website presenting Banque Populaire offers — related to the desktop website",
            keywords: ["Drupal7", "PHP5", "HTML5", "Sass/Compass", "Javascript", "jQuery", "Webservices", "RWD"],
            date: duration(new Date(2014, 9, 2), new Date(2014, 3, 2), `<br>`)
          },
          {
            title: "Bibliothèque de Rennes Métropole<br><em>Encore catalog</em>",
            img: [require(`~/static/images/projets/lesChampsLibres.jpg`)],
            link: "http://opac.si.leschampslibres.fr/",
            alt: "Bibliothèque de Rennes Métropole—Encore catalog",
            description: "Enhancement of documentary notes into the web catalog of Rennes Métropole libraries <a href=\"http://opac.si.leschampslibres.fr\" target= \"_blank\">(Encore)</a> thanks to enriched content coming from <a href=\"http://www.babelio.com\" target= \"_blank\">Babelio</a> database",
            keywords: ["HTML5", "CSS3", "Javascript", "jQuery"],
            date: duration(new Date(2013, 7, 2), null, `<br>`)
          },
          {
            title: "Master 2<br><em>Android app : OuSuij</em>",
            img: [require(`~/static/images/projets/ousuij.jpg`)],
            alt: "Master 2—Android app : OuSuij",
            description: "Creation of an Android app/game based on Google Maps and Google Street View APIs (vaguely similar to <a href=\"https://geoguessr.com\" target= \"_blank\">GeoGuessr</a> game)",
            keywords: ["Android", "Java", "XML", "HTML5", "Javascript", "jQuery"],
            date: duration(new Date(2013, 11, 2), new Date(2013, 8, 2), `<br>`)
          },
          {
            title: "Master 1 dissertation<br><em>Touchscreens</em>",
            img: [require(`~/static/images/projets/tactile.jpg`)],
            alt: "Master 1 dissertation—Touchscreens",
            description: "Presentation of a report summarizing the numerous usages around new tech in touchscreen scale",
            date: duration(new Date(2014, 5, 2), new Date(2014, 0, 2), `<br>`)
          },
          {
            title: "Master 1<br><em>&lt;IMG++&gt; project</em>",
            img: [require(`~/static/images/projets/imgpp.jpg`)],
            alt: "Master 1—&lt;IMG++&gt; project",
            description: "Creation of a special HTML5-compatible tag that can handle \"enhanced\" pictures (HDR format, panoramas, 3D, etc.)",
            keywords: ["HTML5", "CSS3", "WebGL", "Javascript", "jQuery"],
            date: duration(new Date(2013, 4, 2), new Date(2012, 8, 2), `<br>`)
          }
        ],
        activeProject: null
      };
    }
  };
</script>

<style scoped
       lang="scss">
    #projects {
        .projects-items {
            display: flex;
            flex-flow: row wrap;

            .projects-item {
                transition: min-height ease-in-out .3s;
                position: relative;
                width: 100%;
                min-height: 7rem;
                cursor: pointer;
                overflow: hidden;

                &.active {
                    transition: min-height ease-in-out .3s;
                    min-height: 30rem;
                    cursor: zoom-out;

                    .projects-item_content {
                        text-align: left;
                        padding: 2rem;
                    }
                }

                &:hover,
                &.active {
                    .projects-item_container {
                        .projects-item_content {
                            opacity: 1;
                        }
                    }
                }

                &_img {
                     position: absolute;
                     margin: auto;
                     backface-visibility: visible;
                }

                &_container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;

                    .projects-item_content {
                        transition: opacity ease-in-out .2s;
                        z-index: 1;
                        opacity: 0;
                        color: white;
                        display: flex;
                        flex-flow: column;

                        &::before {
                            content: "";
                            background: rgba(0,0,0,.8);
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            z-index: -1;
                        }
                    }

                    .project_images {
                        display: flex;
                        flex-flow: row wrap;
                        justify-content: space-evenly;
                        margin: 2rem 0 0;

                        .project_img {
                            max-width: 40%;
                        }
                    }

                    .project_description_keywords {
                        display: flex;
                        flex-flow: row wrap;
                        margin: 1rem 0 0;

                        .project_description_keyword {
                            margin: .2rem .1rem;
                            padding: .2rem .4rem;
                            border-radius: .5rem;
                            background: dimgray;
                        }
                    }
                }
            }
        }
    }
</style>
