<template>
  <div class ="site-header">
    
    <span class="title"><img src="../assets/logo.png" class="logo"/>  {{ site_title }} </span>     

    <br>

    <span class="today-date" v-if="$data.dateData.hasOwnProperty(0)"><b>Today's date : </b>{{dateData}}</span>

</div> 

</template>

<script>
  import {getTodayDate} from '@/services/api/getTodayDate.js'

  export default {
    name: 'SiteHeader',

    props: {
      site_title: String
    },

    data() {
        return {
            dateData : []
        }
    },

    created: function() {
        this.retrieveDateData()
    },
    
    methods: {
        async retrieveDateData() {
                this.dateData = await getTodayDate()
        }
    }
}
</script>

<style scoped>

  .site-header {
    background-color: #E3DDBE;
    backdrop-filter: blur(4px);
    padding: 0.8%;  
    margin : 0
  }

 .title {
    color:rgb(0, 0, 0);
    font-size: 4em;
    font-family: 'Amatic SC', cursive;
    vertical-align: middle;
  }

  .logo {
    height: 1em; 
    vertical-align: middle;
  }

  .today-date {
      color: rgb(0, 0, 0);
      font-size: 1.2em;
      font-family:'Futura Round Cond Light';

  }
    
</style>
