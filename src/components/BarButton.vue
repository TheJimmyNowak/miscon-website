<template>
  <div class="barButton">
	<b>{{ text }}</b>
  </div>
</template>

<script>
export default {
	name: 'BarButton',
	props: ['text'],
}
</script>

<style scoped>
.barButton {
	height: 100%;
	float: left;
	padding: 10px;
	vertical-align: middle;
	color: #e6e6e6ff;
}
.barButton:hover {
	transform: scale(1.1);
}
</style>
