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
	}
};

</script>

<template>
  <div class="SignCard">
    <img v-if="sign_img" :src="sign_img" class="sign-img"/>

    <div class="SignPreview">
        <h2>{{ sign_logo }}{{ sign_name }}</h2>
        <h3>{{ date_range }}</h3>
        <h3>{{ mood }}</h3>
        <div>{{ description }}</div>
        <br />
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
    font-size: 1vw;
  }

  .SignCard {
    display: flex;
    flex-direction: row;
    align-items: center;
  }


  .SignPreview {
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color:rgb(0, 0, 0);
    font-size: 0.4vw;
    width: 20vw;
    height: 18vh;
    margin:  1vh 1vw ;
    margin-left: 0;
    padding: 3vh 2vw;
    background-color: rgba(229, 225, 194, 0.69);
    overflow: hidden;
    transition: 0.5s linear;
    backdrop-filter: blur(1px);
    flex: 1;
  }

  .SignPreview:hover {
    box-shadow: 2px 2px 2px  rgba(0, 0, 0, 0.137);

    transition: 0.5s linear;

  }


  .sign-img {
    height: 24vh;
    margin: 0;
  }

  .sign-numbers {
    font-size:0.5vw;

  }

  h1 {
    color:blueviolet;
  }

</style>