<template>
  <div class="carousel">
    <div class="carousel-inner">
      <carousel-slide
        v-for="(slide, index) in slides"
        :slide="slide"
        :key="`item-${index}`"
        :current-slide="currentSlide"
        :index="index"
      ></carousel-slide>
    </div>
  </div>
</template>

<script>
import CarouselSlide from './CarouselSlide.vue'

export default {
  name: 'Carousel',
  components: { CarouselSlide },
  data: () => ({
    currentSlide: 0,
    slideInterval: null
  }),
  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index;
    }
  },
  mounted () {
    this.slideInterval = setInterval(() => {
      const index = this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : 0;
      this.setCurrentSlide(index);
    }, 3000)
  },
  beforeUnmount () {
    clearInterval(this.slideInterval);
  }
}
</script>

<style scoped>
.carousel {
  display: flex;
  justify-content: center;
}

.carousel-inner {
  position: relative;
  width: 900px;
  height: 400px;
  overflow: hidden;
}
</style>
