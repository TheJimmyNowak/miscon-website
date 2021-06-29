<template>
  <router-link class="mobileBarButton" v-bind:to="endpoint">
    <b>{{ text }}</b>
  </router-link>
</template>

<script>
export default {
  name: 'MobileBarButton',
  props: ['text', 'endpoint'],
}
</script>

<style scoped>
.mobileBarButton {
  font-size: 25px;
  float: left;
  color: #e6e6e6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  text-decoration: none;
  margin: 10px 0 10px;
}

.mobileBarButton:hover {
  cursor: pointer;
  background-color: rgb(153, 75, 25);
}
</style>
