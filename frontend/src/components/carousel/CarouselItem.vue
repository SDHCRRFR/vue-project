<template lang="">
  <div v-show="visibleSlide === index" class="carousel-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CarouselItem',
  props: ['visibleSlide', 'index'],
  data() {
    return {}
  }
}
</script>

<style scoped>
/* .carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
} */
</style>
