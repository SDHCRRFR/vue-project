<template>
  <div class="public_wishlist">
    <div class="carousel">
      <div class="carousel-inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WishList',
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
