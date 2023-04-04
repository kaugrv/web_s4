<template>
  <h1><img src="../assets/logo.png" class="logo"/>  {{ site_title }}</h1>
</template>

<script>
  export default {
    name: 'SiteHeader',
    props: {
      site_title: String
    }
  }
</script>

<style scoped>
  h1 {
      margin: auto;
      color: aliceblue;
      font-size: 7vw;
      font-family:'Futura Round Cond Light';
  }

  .logo {
    width: 4vw;
  }
</style>
