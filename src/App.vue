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
    padding-left : 2vw;
  }

  body {
    background-image: url("./assets/background.jpg") ;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-color: rgb(33, 23, 23);
  }

  ::selection{
    background-color : #f0a67896;
    color : #fff
}
</style>
