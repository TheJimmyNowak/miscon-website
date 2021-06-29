<template>
  <div id="bar">
    <ComputerBarButton text="Główna" endpoint="/"/>
    <ComputerBarButton text="O nas" endpoint="about"/>
    <ComputerBarButton text="Kontakt" endpoint="contact"/>
    <ComputerBarButton text="Nasi partnerzy" endpoint="partners"/>
    <ComputerBarButton text="Dokumenty" endpoint="documents"/>
  </div>
</template>

<script>
import ComputerBarButton from './ComputerBarButton.vue';

export default {
  name: 'Bar',
  components: {
    ComputerBarButton,
  }
}
</script>

<style scoped>
#bar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  background-color: rgba(255, 127, 42, 0.75);
}
</style>
