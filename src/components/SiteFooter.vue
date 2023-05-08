<template>
  <footer>
      <nav class="site-footer">
          <img class ="logo-imac" src="https://www.ingenieur-imac.fr/images/logoIMAC.png"> S4 IMAC Project, 2023 | <a href="https://github.com/kaugrv/web_s4">GitHub</a> | Horoscope by <a href="https://github.com/TwinFlame-Development/horoscopeAPI">TwinFlame API</a>  | Astronomy by <a href="http://www.wikisky.org/ImageGenerator_1.0.html">wikisky.org</a> *･｡ﾟ
      </nav>
    </footer>
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
        padding: 1%;  
        margin : 10px;
        backdrop-filter: blur(2px);
        border-radius: 30px;
        background-color: #e3ddbe36;
        
    box-shadow: 3px 5px 15px rgba(0, 0, 0, 0.1);

    }

  .logo-imac {
    height: 1em;
    vertical-align:middle;
  }
</style>
