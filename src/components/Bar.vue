<template>
	<div id="bar">
		<BarButton text="O nas"/>
	</div>
</template>

<script>
import BarButton from './BarButton.vue';

export default {
	name: 'Bar',
	components: {
		BarButton,
	}
}
</script>

<style scoped>
#bar {
	position: absolute;
	top: 0;
	left: 0;
	z-index:10;
	background-color: red;
	width: 100vw;
	height: 10vh;
}
</style>
