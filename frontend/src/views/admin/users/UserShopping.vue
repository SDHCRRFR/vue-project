<template>
  <div class="user_shop">
    <h1>
      user shop <span>user: {{ id }}</span>
    </h1>
  </div>
</template>
<script>
export default {
  name: 'UserShopping',
  props: ['id'],
  data() {
    return {}
  }
  // mounted() {
  //   console.log(this.$route.params.id)
  // }
}
</script>
<style scoped>
.user_shop {
  width: 100%;
  padding-top: 100px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
