<template>
  <div class="firstcomponent">
    <h1>{{ msg }}</h1>
    <a src="#">Lien</a>
    
  </div>
</template>

<script>
export default {
  name: 'FirstComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #b9426e;
}
a:hover {
  color:red;
}
</style>
