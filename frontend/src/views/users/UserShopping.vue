<template>
  <div class="user_shop">
    <div class="container">
      <h1>et ooooooo</h1>
      <p>{{ id }}</p>

    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'UserShopping',
  props: ['id'],
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">

.user_shop {
  width: 100%;
  height: 90vh;
}
</style>
