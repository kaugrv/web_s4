<script>
import getSignData from '@/services/api/signRepository.js'

  export default {
    name: 'SignPreview',
    props: {
      sign_name : String,
      sign_logo : String,
      date_range : String
    },
    data() {
      return {
        signData: []
      }
    },
    methods: {
			async retrieveSignData() {
					this.signData = await getSignData()
			}
	}
}

</script>

<template>

  <div class="SignPreview">
    <h1>{{ sign_logo }} {{ sign_name }}</h1>
    <h2>{{ date_range }}</h2>
  </div>

</template>

<style scoped>
  .SignPreview {
    margin: 10px;
    padding: 10px;
    background-color: rgba(238, 130, 238, 0.455);
    border-radius: 5%;
  }

  h1 {
    color:blueviolet;
  }

</style>