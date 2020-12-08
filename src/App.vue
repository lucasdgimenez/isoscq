<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
li {
  list-style: none;
}
a {
  text-decoration: none;
    color: #fff;
}
body {
  font-family: 'Nunito', sans-serif;
}

#app {
  margin: 0 auto;
}

h1 {
    text-align: center;
}
/*
.box {
    max-width: 700px;
    margin: 0 auto;
}
.button {
    margin: 0 auto;
}
span {
    display: block;
    text-align: center;
}*/

</style>
