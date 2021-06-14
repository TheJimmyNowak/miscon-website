<template>
  <div class="text-container">
    <div class="text-block">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Text"
}
</script>

<style scoped>
.text-container {
  margin-top: 6vh;
  color: #E6E6E6FF;
  width: 100vw;
  max-width: 100%;
  display: flex;
  justify-content: center;
}

.text-block {
  width: 75vw;
  text-align: justify;
}
</style>