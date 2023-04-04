<script>
  import SiteHeader from './components/SiteHeader.vue';
  import TodayDate from './components/TodayDate.vue';
  import SignGallery from './components/SignGallery.vue';

  export default {
    name: 'App',
    components: {
      SiteHeader,
      TodayDate,
      SignGallery
    }
  }
</script>

<title>Astrovue</title>

<template>
  <SiteHeader site_title="Astrovue"/>
  <TodayDate/>
  <SignGallery/>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  body {
    background-image: url("./assets/background.jpg") ;
    background-size: cover;
  }
</style>
