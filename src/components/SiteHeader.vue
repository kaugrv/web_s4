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
    font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>
