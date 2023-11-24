<template lang="">
  <div class="public">
    <PublicNav />
    <router-view />
    <!-- <MyFooter /> -->
  </div>
</template>

<script>
import PublicNav from '@/components/header/PublicNav.vue'
// import MyFooter from '@/components/footer/MyFooter.vue'
export default {
  name: 'PublicLayout',
  components: {
    PublicNav
    // MyFooter
  }
}
</script>

<style scoped></style>
