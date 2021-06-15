<template>
  <div class="social-media-bar">
    <div id="facebook">
      <a href="https://fb.com/przemysl.konwent" target="_blank">
        <img src="../assets/facebook.svg" alt="fb"/>
      </a>
    </div>
    <div id="instagram">
      <a href="https://www.instagram.com/miscon.przemysl/" target="_blank">
        <img src="../assets/instagram.svg" alt="Instagram"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialMediaBar"
}
</script>

<style scoped>
.social-media-bar {
  position: absolute;
  top: 85vh;
  left: 80vw;
  display: flex;
}

img {
  width: 4vw;
  padding: 10px;
}

@media screen and (max-width: 768px) {
  .social-media-bar {
    top: 85vh;
    left: 55vw;
  }

  img {
    width: 15vw;
    padding: 10px;
  }
}
</style>