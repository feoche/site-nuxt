<template>
    <section id="introduction" class="container">
        <div class="content">
            <p class="introduction-text">
                Hi! I'm François, a 28 year-old front-end developer from Rennes, France.
            </p>
            <p class="introduction-text">
                I've been working for {{ workDuration }} years as a developer in <a v-smooth-scroll="{duration:2000}"
                                                                                    href="#cv-career">several
                companies</a> and
                on many many projects.<br>
                Apart from that, I'm also keen to work on styling, accessibility and <abbr
                    title="User Experience">UX</abbr>.
            </p>
            <p class="introduction-text">
                I <a v-smooth-scroll="{duration:2000}" href="#cv-studies">graduated</a> in 2014 with a Masters degree in
                Computer Science with a special emphasis on
                interface ergonomics and <abbr title="Information and Communications Technology">ICT</abbr>.
            </p>
            <p class="introduction-text">
                On this website you will mostly find <a v-smooth-scroll="{duration:2000}" href="#projects">what I have
                worked on</a> and what <a v-smooth-scroll="{duration:2000}" href="#skills">I'm fond of</a>, but
                also <a v-smooth-scroll="{duration:2000}" href="#projects-personal">my personal projects</a> and some of
                the <a v-smooth-scroll="{duration:2000}" href="#extras">side activities I take care of</a>.
            </p>
            <p class="introduction-text">
                To conclude, you will have the different ways to <a v-smooth-scroll="{duration:2000}" href="#contact">contact
                me</a> or follow any news. Enjoy your visit!
            </p>
        </div>
    </section>
</template>

<script>
  import { differenceInQuarters, differenceInCalendarYears } from 'date-fns'

  export default {
        data: () => {
            let duration = `more than ${((differenceInQuarters(new Date(), '2014-03-10')/4).toFixed(2)).split(`.`)[0]}`;

            return {
                age: differenceInCalendarYears(new Date(), '1990-09-06'),
                workDuration: duration
            };
        }
    }
</script>

<style scoped>
    #introduction {
        padding: 6vh 0;
        margin: 0 auto;
        text-align: left;
    }

    .introduction-text {
        padding: .3em 0;
    }

    .introduction-text a {
        color: #005194;
    }
</style>
