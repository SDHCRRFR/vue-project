<template lang="">
  <div class="carousel-item" v-for="slide in slides" v-bind:key="slide">
    <img v-bind:src="slides" />
  </div>
</template>

<script>
export default {
  name: 'CarouselItem',
  props: ['slide']
}
</script>

<style></style>
