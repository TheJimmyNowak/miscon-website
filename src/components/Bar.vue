<template>
  <div id="bar">
    <BarButton text="Główna" endpoint="/"/>
    <BarButton text="O nas" endpoint="about"/>
    <BarButton text="Kontakt" endpoint="contact"/>
    <BarButton text="Nasi partnerzy" endpoint="partners"/>
    <BarButton text="Dokumenty" endpoint="documents"/>
  </div>
</template>

<script>
import BarButton from './BarButton.vue';

export default {
  name: 'Bar',
  components: {
    BarButton,
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
