<template>
    <h1>{{ site_title }}</h1>
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
      text-align: center;
      color: aliceblue;
      text-shadow: 2px 2px 50px rgb(214, 0, 189);
      font-size: 5vw;
      font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
</style>
