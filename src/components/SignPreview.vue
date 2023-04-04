<script>

  export default {
    name: 'SignPreview',
    props: {
      "sign_logo": String,
      "sign_name": String,
      "date_range": String,
      "current_date": String,
      "description": String,
      "compatibility": String,
      "mood": String,
      "color": String,
      "lucky_number": String,
      "lucky_time": String,
	}
}

</script>

<template>

  <div class="SignPreview">
    <h2>{{ sign_logo }}{{ sign_name }}</h2>
    <h3>{{ date_range }}</h3>
    <h3>{{ mood }}</h3>
    <div>{{ description }}</div>
    <br>
    <div>🎨 <b>Color :</b> {{ color }}</div>
    <div>🔢 <b>Lucky number :</b> {{ lucky_number }}</div>
    <div>🕒 <b>Lucky time :</b> {{ lucky_time }}</div>

  </div>

</template>

<style scoped>

  .SignPreview {
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color:aliceblue;
    font-size: small;
    width: 70vw;
    height: 40vh;
    margin: 1vw;
    padding: 10px;
    background-color: rgba(238, 130, 238, 0.241);
    border-radius: 1%;
    box-shadow: 2px 2px 2px 2px  rgba(0, 0, 0, 0.208);
    overflow: auto;
    transition: 0.3s;
    backdrop-filter: blur(5px);
  }

  .SignPreview:hover {
      background-color: rgba(235, 149, 235, 0.573);
      color:black;
      box-shadow: 2px 2px 2px 5px  rgba(0, 0, 0, 0.279);
      backdrop-filter: blur(12px);
  }

  h1 {
    color:blueviolet;
  }

</style>