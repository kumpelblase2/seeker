<template>
  <div id="app">
      <Browse/>
  </div>
</template>

<style>
body {
    background: rgba(0, 0, 0, 0.8);
    color: rgb(239, 239, 241);
}

a {
    color: inherit;
    text-decoration: none;
}
</style>
<script>
    import Browse from "./views/Browse";
    export default {
        components: { Browse }
    }
</script>
