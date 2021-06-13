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
	float: left;
	padding: 10px;
	color: #e6e6e6ff;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-grow: 1;
}
.barButton:hover {
	cursor: pointer;
	
	background-image:none !important; 
	-o-animation: fadeIt 1s ease-in-out; 
	animation: fadeIt 1s ease-in-out; 
}
@-o-keyframes fadeIt {
	0%   { background-color: #AAAAAA; }
	50%  { background-color: #EEEEEE;}
	100% { background-color: #FFFFFF; }
}
@keyframes fadeIt {
	0%   { background-color: #AAAAAA; }
	50%  { background-color: #EEEEEE;}
	100% { background-color: #FFFFFF; }
}
</style>
