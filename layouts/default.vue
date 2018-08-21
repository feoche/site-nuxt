<template>
    <nuxt/>
</template>

<style>
    html {
        font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 1rem;
        word-spacing: .1rem;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
    }

    a {
        color: #0077d8;
        text-decoration: none;
        text-shadow:
                -2px -2px white,
                -2px 2px white,
                2px -2px white,
                2px 2px white;
        box-shadow: inset 0 -0.1em white,
        inset 0 -0.125em #007cdd;
    }

    a::selection {
        text-shadow: none;
        box-shadow: none;
        background-color: #008cf9;
        color: white;
    }
</style>
