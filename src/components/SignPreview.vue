<script>
  export default {
    name: 'SignPreview',
    props: {
      "sign_logo": String,
      "sign_name": String,
      "sign_img":String,
      "date_range": String,
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

        <h3>{{ date_range }}</h3>
        <h3>{{ mood }}</h3>
        <div>{{ description }}</div>

        <br>

        <div class="sign-numbers">
             <b>🎨 Color :</b> {{ color }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <b>🔢 Lucky number :</b> {{ lucky_number }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <b>🕒 Lucky time :</b> {{ lucky_time }}   
      </div>
    </div>
  </div>
</template>


<style scoped>

  h2 {
    font-family: 'Amatic SC', cursive;
    font-size: 5em;
  }

  .SignCard {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .SignPreview {
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color:rgb(0, 0, 0);

    font-size: 0.4em;

    height: 35vh;

    margin:  1vh 1vw ;
    margin-left: 0;

    background-size: cover;
    background-position: center;

  }

  .SignPreview:hover {
    box-shadow: 2px 2px 2px  rgba(0, 0, 0, 0.137);
    transition: 0.5s linear;

    color:rgb(255, 255, 255);
  }

  .sign-img {
    height: 35vh;
    margin: 0;
  }

  .sign-numbers {
    font-size:0.5vw;
  }

  .sky_img {
    height: 24vh;
  }



</style>