<template>
  <div class="public_wishlist">
    <carousel :slides="slides"></carousel>
  </div>
</template>

<script>
import Carousel from '../../components/carousel/Carousel.vue'

export default {
  name: 'WishList',
  components: { Carousel },
  data: () => ({
    slides: [
      '../../../public/resto-III.jpeg',
      '../../../public/resto-I.jpeg',
      '../../../public/resto-II.jpeg',
      '../../../public/resto-III.jpeg',
      '../../../public/resto-IIII.jpeg'
    ]
  })
}
</script>

<style>
.public_wishlist {
  width: 100%;
  padding-top: 100px;
  min-height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

img {
  width: 300px;
}
</style>
