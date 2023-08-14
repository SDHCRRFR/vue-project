<template>
  <div class="public_wishlist">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'WishList',
  data() {
    return {
      title: 'Public Wishlist'
    }
  }
}
</script>

<style>
.public_wishlist {
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
