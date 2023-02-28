<template>
  <div class="HeuresSoleil">
    <h1>{{ location }}</h1>
    <h2>Lever de soleil : {{ sunrise }}</h2>
    <h2>Coucher de soleil : {{ sunset }}</h2>
    
  </div>
</template>

<script>
export default {
  name: 'HeuresSoleil',
  props: {
    sunrise : String,
    sunset: String,
    location : String
  }
}
</script>