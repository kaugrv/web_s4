<script>

  import SignPreview from './components/SignPreview.vue';

  export default {
    name: 'App',
    components: {
      SignPreview
    }
  }

</script>


<title>Astroview</title>


<template>

  <SignPreview sign_name = "Sagittarius" sign_logo ="♐" date_range = "Nov 23 - Dec 21"/>
  <SignPreview sign_name = "Gemini" sign_logo ="♊" date_range = "May 21 - Jun 21"/>

</template>


<style>

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    border-width:2px;
    border-style:solid;
    border-color:black;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: row;
  }
  
</style>
