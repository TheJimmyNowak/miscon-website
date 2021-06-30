<template>
  <router-link class="menuButton" v-bind:to="endpoint">
    <b>{{ text }}</b>
  </router-link>
</template>

<script>
export default {
  name: 'MenuButton',
  props: ['text', 'endpoint'],
}
</script>

<style scoped>
.menuButton {
  font-size: 25px;
  float: left;
  color: #e6e6e6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  text-decoration: none;
  margin: 10px 0 10px;
  width: 100vw;
  max-width: 100%;
}

.menuButton:hover {
  cursor: pointer;
  background-color: rgb(153, 75, 25);
}
</style>
