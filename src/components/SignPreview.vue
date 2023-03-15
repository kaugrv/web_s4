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

  </div>

</template>

<style scoped>
  .SignPreview {
    color:aliceblue;
    width: 250px;
    height: 200px;
    margin: 10px;
    padding: 10px;
    background-color: rgba(238, 130, 238, 0.705);
    border-radius: 1%;
    box-shadow: 2px 2px 2px 2px  rgba(165, 11, 144, 0.621);
    overflow: auto;
    transition: 0.3s;

  }

  .SignPreview:hover {
      background-color: rgba(107, 15, 107, 0.985);
      box-shadow: 2px 2px 2px 5px  rgba(165, 11, 144, 0.621);


  }

  h1 {
    color:blueviolet;
  }

</style>