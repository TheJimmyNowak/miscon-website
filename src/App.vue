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
#app {
  width: auto;
  height: 100vh;
  display: block;
}

body {
  margin: 0px;
  background-image: url("assets/background.png");
}
</style>