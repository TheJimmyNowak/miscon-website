<template>
	<div id="bar">
		<BarButton text="O nas"/>
		<BarButton text="Zostań członkiem"/>
		<BarButton text="Dokumenty"/>
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
	width: 100vw;
	height: 10vh;

	display: flex;
	justify-content: space-evenly;
}
</style>
