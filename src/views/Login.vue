<template>
  <div></div>
</template>

<script>
import { doLoginRedirect } from "@/api/twitch";
import { mapActions } from "vuex";

function parseAuthResponse(hash) {
  const paramList = hash.substr(1).split("&");
  const paramPairs = paramList.map(keyValue => keyValue.split("="));
  const data = {};
  paramPairs.forEach(pair => data[pair[0]] = pair[1]);
  return data;
}

export default {
  name: "Login",
  methods: {
    ...mapActions(['doAuth'])
  },
  mounted() {
    const hash = document.location.hash;
    debugger;
    if(hash.length > 0) {
      const authData = parseAuthResponse(hash);
      if(!authData.access_token) {
        throw new Error('No access token present.');
      }

      if(authData.token_type !== 'bearer') {
        throw new Error('got an invalid token type.');
      }

      this.doAuth(authData.access_token).then(() => {
        window.location.hash = "";
      });
    } else {
      doLoginRedirect();
    }
  }
}
</script>

<style scoped>

</style>
