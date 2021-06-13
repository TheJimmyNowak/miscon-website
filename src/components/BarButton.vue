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
  -o-animation: fadeIt 1s ease-in-out;
  animation: fadeIt 1s ease-in-out;
}

@-o-keyframes fadeIt {
  0% {
    background-color: #AAAAAA;
  }
  50% {
    background-color: #EEEEEE;
  }
  100% {
    background-color: #FFFFFF;
  }
}

@keyframes fadeIt {
  0% {
    background-color: #AAAAAA;
  }
  50% {
    background-color: #EEEEEE;
  }
  100% {
    background-color: #FFFFFF;
  }
}
</style>
