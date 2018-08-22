<template>
    <div class="introduction">
        <p class="introduction-text">
            Hi! I'm François, a 28 year-old front-end developer from Rennes, France.
        </p>
        <p class="introduction-text">
            I've been working for {{ workDuration }} years as a developer in <a href="#">several companies</a> and on many many projects.<br>
            Apart from that, I'm also keen to work on styling, accessibility and <abbr title="User Experience">UX</abbr>.
        </p>
        <p class="introduction-text">
            I <a href="#">graduated</a> in 2014 with a Masters degree in Computer Science with a special emphasis on interface ergonomics and <abbr title="Information and Communications Technology">ICT</abbr>.
        </p>
        <p class="introduction-text">
            On this website you will mostly find <a href="#">what I have worked on</a> and what I'm fond of, but also <a href="#">my personal projects</a> and some of the <a href="#">side activities I take care of</a>. Enjoy your visit!
        </p>
    </div>
</template>

<script>
    module.exports = {
        data: () => {
            let duration = Math.abs(moment(`2014-03-10`).diff(moment(), `years`, true)).toFixed(2);
            const fraction = duration.split(`.`)[1];
            duration = `${duration.split(`.`)[0]}${fraction > 50? `¾` : fraction > 25? `½` : `¼`}`;

            return {
                age: Math.abs(moment(`1990-09-06`).diff(moment(), `years`)) + 1,
                workDuration: duration
            };
        }
    }
</script>

<style>
    .introduction {
        width: 80vw;
        margin: 0 auto;
        font-size: 1.2rem;
        text-align: left;
    }

    .introduction-text {
        padding: .3em 0;
    }

    .introduction-text abbr {
        text-decoration: underline;
    }
</style>
