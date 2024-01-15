<template lang="">
  <div class="public">
    <PublicNav />
    <router-view />
  </div>
</template>

<script>
import PublicNav from '@/components/header/PublicNav.vue'
export default {
  name: 'PublicLayout',
  components: {
    PublicNav
  }
}
</script>

<style scoped></style>
