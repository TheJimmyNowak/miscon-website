<template>
  <div class="home">
    <img src="../assets/logo.png" alt="Logo"/>
    <SocialMediaBar/>
  </div>
</template>

<script>
import SocialMediaBar from "@/components/SocialMediaBar";

export default {
  name: 'Home',
  components: {SocialMediaBar},
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
  width: 55vw;
  top: 45%;
  left: 50%;
  margin-left: -30vw;
  margin-top: -10vh;
  -o-animation: animateLogo 1s;
  animation: animateLogo 1s;
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
