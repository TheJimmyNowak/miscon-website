<template>
  <div class="home">
    <img src="../assets/logo.png"/>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.home {
  width: auto;
  height: 100vh;
  color: #e6e6e6ff;
}

img {
  position: absolute;
  width: 1000px;
  -o-animation: animateLogo 1s;
  animation: animateLogo 1s;
  top: 50%;
  left: 50%;
  margin-left: -500px;
  margin-top: -150px;
}

@media screen and (max-width: 1000px) {
  img {
    position: absolute;
    width: 300px;
    -o-animation: animateLogo 1s;
    animation: animateLogo 1s;
    top: 50%;
    left: 50%;
    margin-left: -150px;
    margin-top: -50px;
  }
}

@keyframes animateLogo {
  0% {
    left: -100vw;
  }
  100% {
    left: 50%;
  }
}
</style>
