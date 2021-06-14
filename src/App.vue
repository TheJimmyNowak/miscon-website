<template>
  <div id="app">
    <Bar/>
    <router-view/>
  </div>
</template>

<script>
import Bar from './components/Bar.vue';

export default {
  name: 'App',
  components: {
    Bar
  }
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