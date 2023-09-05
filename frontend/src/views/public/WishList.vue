<template>
  <div class="public_wishlist">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'WishList',
  data: () => ({
    title: 'Wish-List',
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
.public_wishlist {
  width: 100%;
  padding-top: 100px;
  min-height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
