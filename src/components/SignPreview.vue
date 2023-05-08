<script>
  export default {
    name: 'SignPreview',
    props: {
      "sign_logo": String,
      "sign_name": String,
      "sign_img":String,
      "current_date": String,
      "description": String,
      "compatibility": String,
      "mood": String,
      "color": String,
      "lucky_number": String,
      "lucky_time": String,
      "sky_img_url":String },

    computed: {
      skyImageUrl() {
      return "url("+this.sky_img_url+")";
    }
  }
};
</script>

<template>
  <div class="SignCard">
    <img v-if="sign_img" :src="sign_img" class="sign-img"/>

    <div class="SignPreview" :style="{ backgroundImage: skyImageUrl }">
        <h2>{{ sign_logo }}{{ sign_name }}</h2>

        <div class = "sign-description">{{ description }}</div>

        <br>

        <div class ="mood-number">        
          <h3>{{ mood }}</h3>

          <div class="sign-numbers">
          <b>🎨 Color :</b> {{ color }}<br>
          <b>🔢 Lucky number :</b> {{ lucky_number }}<br>
          <b>🕒 Lucky time :</b> {{ lucky_time }}   

        </div>

    </div>

        

    </div>
  </div>
</template>


<style scoped>

  h2 {
    font-family: 'Amatic SC', cursive;
    font-size: 5em;
  }

  h3 {
    font-size: 3em;
  }

  .mood-number {
  }

  .mood-number h3 {
    margin: 0;
  }

  .SignCard {
    display: flex;
    flex-direction: row;
    align-items: center;


  }

  .SignPreview {
    color:rgb(0, 0, 0);
    font-size: 0.4em;
    height: 35vh;
    margin:  1vh 1vw ;
    margin-left: 0;
    background-size: cover;
    background-position: center;
    border-radius: 0px 30px 30px 0px;
    box-shadow: 3px 5px 15px rgba(0, 0, 0, 0.1);

  }


  .sign-description {
    font-size: 1.4em  ;
  }
  .sign-img {
    height: 35vh;
    border-radius: 30px 0px 0px 30px;
  }

  .sign-numbers {
    font-size:1.5em;  
    
  }

</style>