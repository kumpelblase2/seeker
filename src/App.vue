<template>
    <div id="app">
        <Browse/>
    </div>
</template>

<style>
    #app {
        height: 100%;
    }

    html, body {
        height: 100%;
    }

    body {
        background: rgba(0, 0, 0, 0.8);
        color: rgb(239, 239, 241);
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .row {
        margin: 0;
    }

    .col {
        padding-left: 5px;
        padding-right: 5px;
    }

    .btn > .ion {
        padding-top: 33%;
    }
</style>
<script>
    import Browse from "./views/Browse";

    export default {
        components: { Browse }
    }
</script>
