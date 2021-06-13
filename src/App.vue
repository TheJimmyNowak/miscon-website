<template>
	<Bar/>
	<Home/>
</template>

<script>
import Home from './components/Home.vue';
import Bar from './components/Bar.vue';

export default {
	name: 'App',
	components: {
		Home,
		Bar
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	width: auto;
	height: 100vh;
	display: block;
}
body {
	margin: 0px;
}
</style>
