<template>
  <div id="mobile-bar">
    <div @click="toggleMenu" id="icon">
      <div class="icon"/>
      <div class="icon"/>
      <div class="icon"/>
    </div>
  </div>
  <div v-if="isMenuOpen" id="menu-list">
    <MobileBarButton @click="toggleMenu" text="Główna" endpoint="/"/>
    <MobileBarButton @click="toggleMenu" text="O nas" endpoint="about"/>
    <MobileBarButton @click="toggleMenu" text="Kontakt" endpoint="contact"/>
    <MobileBarButton @click="toggleMenu" text="Nasi partnerzy" endpoint="partners"/>
  </div>
</template>

<script>
import MobileBarButton from "@/components/MobileBarButton";

export default {
  name: "MobileBar",
  components: {MobileBarButton},
  data: function () {
    return {isMenuOpen: false}
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>

<style scoped>
.icon {
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
}

#icon {
  margin-top: 5px;
}

#icon:hover {
  cursor: pointer;
  transform: rotate(30deg);
}

#menu-list {
  position: absolute;
  top: 0px;
  background-color: rgba(255, 127, 42, 0.75);
  width: 100vw;
  max-width: 100%;
  z-index: 9;
  animation: growDown 300ms ease-in-out forwards;
  transform-origin: top right;
}

#mobile-bar {
  position: absolute;
  top: 0;
  left: 90vw;
  z-index: 10;
  width: 10vw;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  background-color: rgba(255, 127, 42, 0.75);
  justify-content: center;
  border-bottom-left-radius: 2vw;
}

@keyframes growDown {
  0% {
    transform: scaleY(0) scaleX(0);
  }
  80% {
    transform: scaleY(1.1) scaleX(1);
  }
  100% {
    transform: scaleY(1) scaleX(1);
  }
}
</style>