<template>
  <nav class="site-footer">
      <img class ="logo-imac" src="https://www.ingenieur-imac.fr/images/logoIMAC.png"> S4 IMAC Project, 2023 | <a href="https://github.com/kaugrv/web_s4">GitHub</a> | Horoscope by <a href="https://github.com/TwinFlame-Development/horoscopeAPI">TwinFlame API</a>  | Astronomy by <a href="http://www.wikisky.org/ImageGenerator_1.0.html">wikisky.org</a>
  </nav>
</template>

<script>
  export default {
    name: 'SiteFooter'
  }
</script>

<style scoped>

.site-footer {
    color:rgb(0, 0, 0);
    font-family:'Futura Round Cond Light';    
    font-size: 1em;
    background-color: #E3DDBE;  
    padding: 0.8%;  
    margin : 0
}

.logo-imac {
  height: 1em;
  vertical-align:middle;
}

</style>
