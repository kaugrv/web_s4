<template>
  <div class="Footer"><img class ="logo-imac" src="https://www.ingenieur-imac.fr/images/logoIMAC.png"> S4 IMAC Project, 2023 | <a href="https://github.com/kaugrv/web_s4">GitHub</a> | Horoscope by <a href="https://github.com/TwinFlame-Development/horoscopeAPI">TwinFlame API</a>
  </div>
</template>

<script>
  export default {
    name: 'SiteFooter'
  }
</script>

<style scoped>

.Footer {
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color:rgb(0, 0, 0);
    font-size: 2vh;
    width: 94%;
    height: 3vh;
    margin:  1vh 1vw ;
    margin-left: 0;
    padding: 3vh 2vw;
    background-color: rgba(229, 225, 194, 0.69);
    overflow: hidden;
    transition: 0.5s linear;
    backdrop-filter: blur(1px);
    flex: 1;
}

.logo-imac {
  height: 2vh;
  vertical-align:middle;
}

</style>
