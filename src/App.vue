<template>
  <div>
    <div v-if="screenWidth() > 768" id="app">
      <ComputerBar/>
    </div>
    <div v-else>
      <MobileBar/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import ComputerBar from './components/ComputerBar.vue';
import MobileBar from "@/components/MobileBar";

export default {
  name: 'App',
  components: {
    MobileBar,
    ComputerBar
  },
  data: function () {
    return {
      screenWidth() {
        return window.innerWidth;
      }
    };
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
