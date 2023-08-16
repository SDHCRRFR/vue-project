<template lang="">
  <div class="carousel-item" v-for="slide in slides" :key="slide">
    <img v-bind:src="slide" />
  </div>
</template>

<script>
export default {
  name: 'CarouselItem',
  props: ['slide']
}
</script>

<style scoped>
.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
