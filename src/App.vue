<template>
  <div>
      <Menu/>
      <router-view/>
  </div>
</template>

<script>
import Menu from "@/components/Menu";

export default {
  name: 'App',
  components: {
    Menu
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Grenze');

#app {
  font-family: 'Grenze', sans-serif;
  width: auto;
  height: 100vh;
  display: block;
}

body {
  margin: 0px;
  background-image: url("assets/background.png");
}

p {
  font-size: 25px;
}

h1 {
  font-size: 40px;
  text-align: center;
}
</style>
