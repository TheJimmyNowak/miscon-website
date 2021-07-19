<template>
  <footer>
    <p>Miścon &copy; 2021</p>
    <p>Wykonał Mikołaj Data</p>
  </footer>
</template>

<script>
export default {
  name: "copyright"
}
</script>

<style scoped>
footer {
  position: absolute;
  top: 86vh;
  left: 10vw;
  display: flex;
  flex-direction: column;
}

p {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  color: #666666;
}
</style>
