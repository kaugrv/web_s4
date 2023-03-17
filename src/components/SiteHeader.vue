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
    color: aliceblue;
    font-size: 5vw;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>
