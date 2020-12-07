<template>
  <div id="app">
    <Menu class="menu" v-show="auth"/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Menu from "./components/Menu"

export default {
  name: 'App',
  data() {
    return {
      auth: true
    }
  },
  components: {
    Menu
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
  display: flex;
  margin: 0 auto;
}
.menu {
  background:#4E73DF;
  width: 300px;
}
.content {
  flex: 4;
  background-color:#EBECEF;
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
