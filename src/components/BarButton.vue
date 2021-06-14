<template>
  <router-link class="barButton" v-bind:to="endpoint">
    <b>{{ text }}</b>
  </router-link>
</template>

<script>
export default {
  name: 'BarButton',
  props: ['text', 'endpoint'],
}
</script>

<style scoped>
.barButton {
  font-size: 25px;
  float: left;
  padding: 10px;
  color: #e6e6e6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  text-decoration: none;
}

.barButton:hover {
  cursor: pointer;
  background-color: #ff55dbff;
}
</style>
