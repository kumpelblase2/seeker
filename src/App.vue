<template>
    <div id="app">
      <template v-if="isAuthenticated">
        <Browse/>
      </template>
      <template v-else>
        <Login />
      </template>
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

    .btn > .ion {
        padding-top: 33%;
    }

    .badge {
        margin-right: 3px;
        margin-bottom: 2px;
    }
</style>
<script>
    import { assignToken } from "./api/twitch";
    import { mapGetters } from "vuex";
    import Browse from "./views/Browse.vue";
    import Login from './views/Login.vue';

    export default {
        components: { Browse, Login },
        computed: {
          ...mapGetters(['isAuthenticated', 'userToken'])
        },
        beforeMount() {
          debugger;
          if(this.isAuthenticated) {
            assignToken(this.userToken);
          }
        }
    }
</script>
