
<title>Astrovue</title>

<script>
  import SiteHeader from './components/SiteHeader.vue';
  import SignGallery from './components/SignGallery.vue';
  import SiteFooter from './components/SiteFooter.vue';
    
  export default {
    name: 'App',
    components: {
      SiteHeader,
      SignGallery,
      SiteFooter
    }
  }
</script>

<template>
  <SiteHeader site_title="Astrovue"/>
  <SignGallery/>
  <SiteFooter/>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');
  
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    /* background-image: url("./assets/background.jpg") ;
    background-position: fixed;
    background-repeat: no-repeat; */
    background-color: rgb(43, 36, 13); 
  }

  ::selection{
    background-color : #ffffff96;
    color : #000000
}
</style>
