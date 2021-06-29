<template>
  <div id="mobile-bar">
    <div @click="toggleMenu" id="icon">
      <div class="icon"/>
      <div class="icon"/>
      <div class="icon"/>
    </div>
  </div>
  <transition name="rollDownMenu">
    <div v-if="isMenuOpen" id="menu-list">
      <MobileBarButton @click="toggleMenu" text="Główna" endpoint="/"/>
      <MobileBarButton @click="toggleMenu" text="O nas" endpoint="about"/>
      <MobileBarButton @click="toggleMenu" text="Kontakt" endpoint="contact"/>
      <MobileBarButton @click="toggleMenu" text="Naszecele i działania" endpoint="contact"/>
      <MobileBarButton @click="toggleMenu" text="" endpoint="contact"/>
      <MobileBarButton @click="toggleMenu" text="Nasi partnerzy" endpoint="partners"/>
    </div>
  </transition>
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
  background-color: rgba(230, 230, 230, 0.75);
  margin: 6px 0;
  border-radius: 10px;
}

#icon {
  margin-top: 5px;
}

#icon:hover {
  cursor: pointer;
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
  justify-content: center;
}

#menu-list {
  padding-top: 50px;
  padding-bottom: 10px;
  position: absolute;
  background-color: rgba(255, 127, 42, 0.75);
  width: 100vw;
  max-width: 100%;
  z-index: 9;
  transform-origin: top right;
}

.rollDownMenu-enter-active {
  animation: rollDownMenu 300ms;
}

.rollDownMenu-leave-active {
  animation: rollDownMenu 300ms reverse;
}

@keyframes rollDownMenu {
  0% {
    transform: scaleY(0) scaleX(0);
  }
  100% {
    transform: scaleY(1) scaleX(1);
  }
}
</style>