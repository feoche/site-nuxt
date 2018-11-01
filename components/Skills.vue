<template>
    <section id="skills" class="container">
        <div class="content">
            <h2 class="skills-title">Skills</h2>
            <div class="skills-sections">
                <div class="skills-section"
                     v-for="(item, index) in skills" :key="index">
                    <h3 class="skills-section_title"
                        v-html="item.section">Front-End</h3>
                    <div class="skills-section_list">
                        <div class="skills-section_item"
                             v-for="(skill, i) in item.skills"
                             :key="i"
                             v-html="skill">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data: () => ({
            skills: [
                {
                    section: `Front-End`,
                    skills: [
                        `CSS3`,
                        `Javascript (ES6)`,
                        `JSON`,
                        `XML`,
                        `PHP`
                    ]
                },
                {
                    section: `Frameworks & APIs`,
                    skills: [
                        `Sass/Less`,
                        `Angular/AngularJS`,
                        `Ionic/Cordova`,
                        `VueJS`,
                        `NodeJS`,
                        `Lodash`,
                        `jQuery`,
                        `Google Maps API`
                    ]
                },
                {
                    section: `IDEs & Tools`,
                    skills: [
                        `IntelliJ Suite`,
                        `Brackets`,
                        `ZSH`,
                        `Atom`,
                        `VSCode`
                    ]
                },
                {
                    section: `Concepts`,
                    skills: [
                        `<abbr title="Responsive Web Design">RWD</abbr>`,
                        `Mobile First`,
                        `<abbr title="User Interfaces">UI</abbr> - <abbr title="User Experience">UX</abbr>`,
                        `Web Accessibility`,
                        `Design Patterns`
                    ]
                },
                {
                    section: `Other`,
                    skills: [
                        `Android/Java`,
                        `Drupal, Wordpress`,
                        `Office suite`,
                        `Adobe Photoshop`,
                        `C++`
                    ]
                },
                {
                    section: `Language`,
                    skills: [
                        `French - Mother tongue`,
                        `English - Complete professional skill`,
                        `German - Basic concepts`,
                    ]
                }
            ]
        })
    }
</script>

<style scoped>
    #skills {
        text-align: center;
    }

    .skills-title {
        padding: .6em 0;
        font-family: "MarkProBold", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        font-weight: 300;
        font-size: 1.7rem;
        letter-spacing: -.05rem;
    }

    .skills-sections {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }

    .skills-section {
        text-align: left;
        margin: .6em auto;
        max-width: 13em;
    }

    .skills-section_title {
        padding-bottom: .8em;
    }

    @media (max-width: 550px) {
        .skills-sections {
            flex-flow: column wrap;
        }
        .skills-section {
            margin: .6em 0;
        }
        .skills-section+.skills-section.skills-section {
            padding-left: 0;
        }
    }

    .skills-section+.skills-section {
        padding-left: 1em;
    }

    .skills-section_title {
        padding: .6em 0;
        font-family: "MarkProMedium", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        font-size: 1.2rem;
        letter-spacing: -.05rem;
        transform: scaleX(.9);
        transform-origin: left center;
    }

    .skills-section_list {
        padding-left: .2em;
    }

    .skills-section_item {
        padding-bottom: .3em;
    }
</style>
