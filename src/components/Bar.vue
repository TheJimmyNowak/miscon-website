<template>
	<div id="bar">
		<BarButton text="O nas" endpoint="about"/>
		<BarButton text="Zostań członkiem" endpoint="membership"/>
		<BarButton text="Dokumenty" endpoint="documents"/>
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
	width: 99vw;
	display: flex;
	flex-wrap: wrap;
}
</style>
