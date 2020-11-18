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
                             :src="showImg(item.key)"
                             loading="lazy">
                        <div class="projects-item_content">
                            <div class="projects-item_title"
                                v-html="item.title"></div>
                            <div class="projects-item_subtitle">
                                <em class="projects-item_date"
                                    v-html="item.date"></em>
                            </div>
                            <div class="projects-item_description">
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
                                         v-if="showImg(item.key+'-2')"
                                         :src="showImg(item.key+'-2')"
                                         loading="lazy">
                                    <img class="project_img"
                                         v-if="showImg(item.key+'-3')"
                                         :src="showImg(item.key+'-3')"
                                         loading="lazy">
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
    methods: {
      showImg: (key) => {
          try {
              return require(`~/static/images/projets/${key}.jpg`)
          } catch (e) {
              return false
          }
        }
    },
  data: () => {
    const displayShortDate = date => format(date, "MMMM");
    const displayDate = date => format(date, "MMMM YYYY");
    const duration = (date1, date2 = null, separator = `—`) => {
      let res = ``;
      if (date2) {
        res = `${
          date1.getFullYear() === date2.getFullYear()
            ? displayShortDate(date2)
            : displayDate(date2)
        } ${separator} ${displayDate(date1)}`;
      } else {
        res = `${displayDate(date1)}`;
      }
      return res;
    };
    return {
      projects: [
        {
          key: "ovhorder",
          title: "OVH - Order funnel",
          link: "https://www.ovh.com/fr/order/dedicated",
          alt: "OVH - Order funnel",
          description:
            "Responsive website for customer ordering OVH's services",
          date: duration(new Date(2018, 1, 2), null, `<br>`)
        },
        {
          key: `ovhmanager`,
          title: "OVH - Manager",
          link: "https://www.ovhtelecom.fr/manager/index.html#/",
          alt: "OVH - Manager",
          description:
            "Responsive website for customer management with OVH's services",
          date: duration(new Date(2017, 9, 2), new Date(2018, 1, 1), `<br>`)
        },
        {
          key: `regionsjob`,
          title: "RegionsJob",
          link: "https://www.regionsjob.com/",
          alt: "RegionsJob",
          description:
            "Hybrid app on iOS/Android for job listing/job searching",
          date: duration(new Date(2017, 8, 2), new Date(2017, 1, 1), `<br>`)
        },
        {
          key: `optimum`,
          title: "CableVision<br><em>Optimum</em>",
          link: "http://www.optimum.com/",
          alt: "CableVision—Optimum",
          description:
            "Responsive website presenting TV, mobile pre-paid and Internet services of the american company",
          date: duration(new Date(2016, 1, 2), new Date(2015, 11, 2), `<br>`)
        },
        {
          key: `ionicthehybridtheory`,
          title: "Ionic<br><em>The Hybrid Theory</em>",
          link: "http://slides.com/feoche/ionic-the-hybrid-theory",
          alt: "Ionic—The Hybrid Theory",
          description:
            'Lecture about experience feedback regarding hybrid development in 2015, which took place at <a href="http://rennesjs.org" target= "_blank">RennesJS</a>',
          date: duration(new Date(2015, 11, 2), null, `<br>`)
        },
        {
          key: `aonauto`,
          title: "Aon<br><em>Aon Auto</em>",
          link:
            "https://www.aonassurances.com/Particuliers/Assurance/Gamme_auto/Auto_classique",
          alt: "Aon Auto—Mobile App",
          description:
            "Hybrid app on iOS/Android for insurance handling on vehicule fleets",
          keywords: [
            "HTML5",
            "CSS3",
            "Sass/Compass",
            "AngularJS",
            "ES2015",
            "Cordova",
            "Ionic",
            "Javascript",
            "jQuery",
            "JSON",
            "Webservices"
          ],
          date: duration(new Date(2015, 11, 2), new Date(2015, 10, 2), `<br>`)
        },
        {
          key: `virginmobile`,
          title: "Virgin Mobile<br><em>eBoutique</em>",
          link: "http://virginmobile.fr",
          alt: "Virgin Mobile—eBoutique",
          description:
            "eShop presenting phone, mobile pre-paid and Internet services with order funnel",
          keywords: [
            "PHP",
            "Symfony/Twig",
            "Sass/Compass",
            "Javascript",
            "AngularJS"
          ],
          date: duration(new Date(2015, 10, 2), new Date(2015, 5, 2), `<br>`)
        },
        {
          key: `amescotes`,
          title: "ERDF<br><em>A mes côtés</em>",
          link: "https://itunes.apple.com/fr/app/a-mes-cotes/id885458976?mt=8",
          alt: "ERDF—A mes côtés",
          description:
            "Hybrid app for iOS, Android and Windows Phone displaying access to self-diagnostic in case of power outage, risk prevention and contact infos",
          keywords: [
            "HTML5",
            "CSS3",
            "Sass/Compass",
            "AngularJS",
            "Cordova",
            "Ionic",
            "Javascript",
            "jQuery",
            "JSON",
            "Webservices"
          ],
          date: duration(new Date(2015, 5, 2), new Date(2015, 3, 2), `<br>`)
        },
        {
          key: `roulerserein`,
          title: "Natixis<br><em>Rouler Serein</em>",
          link:
            "https://itunes.apple.com/fr/app/rouler-serein/id547607719?mt=8",
          alt: "Natixis—Rouler Serein",
          description:
            "Hybrid app for iOS and Android suggesting insurance simulation, insurance claim and customer service for customer vehicles",
          keywords: [
            "HTML5",
            "CSS3",
            "Sass/Compass",
            "AngularJS",
            "Cordova",
            "Ionic",
            "Javascript",
            "jQuery",
            "JSON",
            "Webservices"
          ],
          date: duration(new Date(2015, 4, 2), new Date(2015, 0, 2), `<br>`)
        },
        {
          key: `edelia`,
          title: "Edelia<br><em>Showcase site</em>",
          link: "http://www.edelia.fr/",
          alt: "Edelia—Showcase site",
          description:
            "Responsive website displaying Edelia professional offers for energy",
          keywords: [
            "Drupal7",
            "PHP5",
            "HTML5",
            "Sass/Compass",
            "Javascript",
            "jQuery",
            "RWD"
          ],
          date: duration(new Date(2014, 11, 2), null, `<br>`)
        },
        {
          key: `btv`,
          title: "Bouygues Telecom<br><em>B.tv - Chromecast</em>",
          link:
            "http://www.services.bouyguestelecom.fr/television/services-tv/b-tv",
          alt: "Bouygues Telecom—B.tv - Chromecast",
          description:
            "Chromecast app linked to the BBox (Bouygues Telecom) in order to display compatible TV channels/replays",
          keywords: ["HTML5", "CSS3", "Javascript", "Google Cast SDK"],
          date: duration(new Date(2014, 10, 2), new Date(2014, 9, 2), `<br>`)
        },
        {
          key: `femmesBretagne`,
          title: "Femmes de Bretagne<br><em>Social network</em>",
          link: "http://femmesdebretagne.fr",
          alt: "Site Web Femmes de Bretagne",
          description:
            "Social network creation project for women entrepreneurs in Brittany",
          keywords: [
            "Drupal7",
            "PHP5",
            "HTML5",
            "Sass/Compass",
            "Javascript",
            "jQuery",
            "Webservices",
            "RWD"
          ],
          date: duration(new Date(2014, 10, 2), new Date(2014, 7, 2), `<br>`)
        },
        {
          key: `bpSiteMobile`,
          title: "Banque Populaire<br><em>Showcase mobile site</em>",
          link: "http://mobile.banquepopulaire.fr",
          alt: "Banque Populaire—Showcase mobile site",
          description:
            "Responsive mobile website presenting Banque Populaire offers — related to the desktop website",
          keywords: [
            "Drupal7",
            "PHP5",
            "HTML5",
            "Sass/Compass",
            "Javascript",
            "jQuery",
            "Webservices",
            "RWD"
          ],
          date: duration(new Date(2014, 9, 2), new Date(2014, 3, 2), `<br>`)
        },
        {
          key: `lesChampsLibres`,
          title: "Bibliothèque de Rennes Métropole<br><em>Encore catalog</em>",
          link: "http://opac.si.leschampslibres.fr/",
          alt: "Bibliothèque de Rennes Métropole—Encore catalog",
          description:
            'Enhancement of documentary notes into the web catalog of Rennes Métropole libraries <a href="http://opac.si.leschampslibres.fr" target= "_blank">(Encore)</a> thanks to enriched content coming from <a href="http://www.babelio.com" target= "_blank">Babelio</a> database',
          keywords: ["HTML5", "CSS3", "Javascript", "jQuery"],
          date: duration(new Date(2013, 7, 2), null, `<br>`)
        },
        {
          key: `ousuij`,
          title: "Master 2<br><em>Android app : OuSuij</em>",
          alt: "Master 2—Android app : OuSuij",
          description:
            'Creation of an Android app/game based on Google Maps and Google Street View APIs (vaguely similar to <a href="https://geoguessr.com" target= "_blank">GeoGuessr</a> game)',
          keywords: ["Android", "Java", "XML", "HTML5", "Javascript", "jQuery"],
          date: duration(new Date(2013, 11, 2), new Date(2013, 8, 2), `<br>`)
        },
        {
          key: `tactile`,
          title: "Master 1 dissertation<br><em>Touchscreens</em>",
          alt: "Master 1 dissertation—Touchscreens",
          description:
            "Presentation of a report summarizing the numerous usages around new tech in touchscreen scale",
          date: duration(new Date(2014, 5, 2), new Date(2014, 0, 2), `<br>`)
        },
        {
          key: `imgpp`,
          title: "Master 1<br><em>&lt;IMG++&gt; project</em>",
          alt: "Master 1—&lt;IMG++&gt; project",
          description:
            'Creation of a special HTML5-compatible tag that can handle "enhanced" pictures (HDR format, panoramas, 3D, etc.)',
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
      transition: min-height ease-in-out 0.3s;
      position: relative;
      width: 100%;
      max-width: 69rem;
      min-height: 7rem;
      margin: 0 auto;
      cursor: pointer;
      overflow: hidden;

      &.active {
        transition: min-height ease-in-out 0.3s;
        max-height: 50rem;
        cursor: zoom-out;

        .projects-item_description {
          max-height: 25rem;
        }

        .projects-item_content {
          transition: padding 0s;
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

      &_subtitle {
        padding-bottom: 0;
      }

      &_description {
        transition: max-height ease-in-out .3s;
        overflow: hidden;
        max-height: 0;
      }

      &_container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;

        .projects-item_content {
          transition: opacity ease-in-out .2s, padding ease-in-out 0s .3s;
          z-index: 1;
          opacity: 0;
          color: white;
          display: flex;
          flex-flow: column;

          &::before {
            content: "";
            background: rgba(0, 0, 0, 0.9);
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
          align-items: start;

          .project_img {
            max-width: 49%;
          }
        }

        .project_description {
          margin-top: 1rem;
        }

        .project_description_keywords {
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          margin: 1rem 0 0;

          .project_description_keyword {
            margin: 0.2rem 0.1rem;
            padding: 0.2rem 0.4rem;
            border-radius: 0.5rem;
            background: dimgray;
          }
        }
      }
    }
  }
}
</style>
