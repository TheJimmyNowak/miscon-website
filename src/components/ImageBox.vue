<template>
  <div class="image-box">
    <img v-bind:src="require(`@/assets/${image}`)" v-bind:alt="alt"/>
  </div>
</template>

<script>
export default {
  name: "ImageBox",
  props: ["image", "alt"]
}
</script>

<style scoped>
  img {
    margin-top: 2vw;
    margin-left: 7.5vw;
    width: 60vw;
  }
  @media screen and (max-width: 768px){
    img {
      margin: 2vw;
      width: 73vw;
    }
  }
</style>