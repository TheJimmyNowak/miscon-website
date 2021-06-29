<template>
  <div id="mobile-bar">
    <div @click="toggleMenu" id="icon-container">
      <div class="icon-part"/>
      <div class="icon-part"/>
      <div class="icon-part"/>
    </div>
  </div>
  <transition name="rollDownMenu">
    <div v-if="isMenuOpen" id="menu-list">
      <MobileBarButton @click="buttonClicked" text="Główna" endpoint="/"/>
      <MobileBarButton @click="buttonClicked" text="O nas" endpoint="about"/>
      <MobileBarButton @click="buttonClicked" text="Kontakt" endpoint="contact"/>
      <MobileBarButton @click="buttonClicked" text="Nasi partnerzy" endpoint="partners"/>
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
    },
    buttonClicked() {
      this.toggleMenu();

    }
  }
}
</script>

<style scoped>
.icon-part {
  width: 35px;
  height: 5px;
  background-color: rgb(230, 230, 230);
  margin: 6px 0;
  border-radius: 10px;
}

#icon-container:hover {
  cursor: pointer;
}

#mobile-bar {
  position: absolute;
  right: 0;
  padding: 3vw 3vw 5vw 5vw;
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: rgb(190, 99, 35);
  border-radius: 0 0 0 10vw;
}

#menu-list {
  padding-top: 50px;
  padding-bottom: 10px;
  position: absolute;
  background-color: rgb(190, 99, 35);
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
    z-index: 9;
    transform: scaleY(0) scaleX(0);
  }
  100% {
    transform: scaleY(1) scaleX(1);
  }
}
</style>
