<template>
  <div class="public_wishlist">
    <carousel>
      <carousel-slide v-for="(slide, index) in slides" :key="slide" :index="index" :visibleSlide="visibleSlide">
        <img :src="slide" />
      </carousel-slide>
    </carousel>
  </div>
</template>

<script>
import Carousel from '../../components/carousel/Carousel.vue'
import CarouselItem from '../../components/carousel/CarouselItem.vue'

export default {
  name: 'WishList',
  components: { Carousel, CarouselItem },
  data: () => ({
    slides: [
      '../../../public/resto-III.jpeg',
      '../../../public/resto-I.jpeg',
      '../../../public/resto-II.jpeg',
      '../../../public/resto-III.jpeg',
      '../../../public/resto-IIII.jpeg'
    ],
    visibleSlide: 0
  })
}
</script>

<style>
/* .public_wishlist {
  width: 100%;
  padding-top: 100px;
  min-height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
} */

/* img {
  width: 300px;
} */
</style>
