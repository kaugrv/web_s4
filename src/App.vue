<template>
  <img src="./assets/soleil.jpg">
  <HeuresSoleil location="Champs-Sur-Marne" sunrise="7:32:07 AM" sunset="6:32:09 PM"/>
  <br>
  <HeuresSoleil location="Assérac" sunrise="7:50:27 AM" sunset="6:53:46 PM "/>
  <img src="./assets/2soleils.jpg">

</template>

<script>
import HeuresSoleil from './components/HeuresSoleil.vue'

export default {
  name: 'App',
  components: {
    HeuresSoleil
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
