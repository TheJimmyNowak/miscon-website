<template>
	<Bar/>
	<router-view/>
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
  display: block;
}

body {
  margin: 0px;
  background: #333333ff;
}
</style>