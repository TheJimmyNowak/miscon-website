<template>
  <div id="mobile-bar">
    <div @click="toggleMenu" id="icon-container" ref="menuIcon">
      <div class="icon-part"/>
      <div class="icon-part"/>
      <div class="icon-part"/>
    </div>
  </div>
  <transition name="rollDownMenu">
    <nav v-if="isMenuOpen" id="menu-list">
      <MenuButton v-for="button in menuButtons" :key="button.id" @click="toggleMenu" v-bind:text="button.text"
                  v-bind:endpoint="button.endpoint"/>
    </nav>
  </transition>
</template>

<script>
import MenuButton from "@/components/MenuButton";

export default {
  name: "Menu",
  components: {MenuButton},
  data: function () {
    return {
      isMenuOpen: false,
      menuButtons: [
        {
          id: 1,
          text: "Główna",
          endpoint: "/"
        },
        {
          id: 2,
          text: "O nas",
          endpoint: "about"
        },
        {
          id: 3,
          text: "Kontakt",
          endpoint: "contact"
        }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      if(this.isMenuOpen)
        this.$refs.menuIcon.style.transform = `rotate(20deg)`
      else
        this.$refs.menuIcon.style.transform = `rotate(0deg)`
    },
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

#icon-container {
  position: absolute;
  right: 1vw;
  top: 1vw;
  z-index: 10;
}

#icon-container:hover {
  cursor: pointer;
}

#mobile-bar {
  position: absolute;
  right: 0;
  padding: 1vw 1vw 5vw 5vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: rgb(190, 99, 35);
  border-radius: 0 0 0 10vw;
}


@media screen and (max-width: 1200px) {
  #mobile-bar {
    padding: 2vw 2vw 6vw 6vw;
    border-radius: 0 0 0 16vw;
  }
}

@media screen and (max-width: 768px) {
  #mobile-bar {
    padding: 5vw 5vw 8vw 8vw;
    border-radius: 0 0 0 20vw;
  }
}

@media screen and (max-width: 480px) {
  #mobile-bar {
    padding: 10vw 10vw 10vw 10vw;
    border-radius: 0 0 0 20vw;
  }
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

/* Animations */
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
