<template>
  <div class="admin">
    <AdminNav />
    <router-view />
  </div>
</template>

<script>
import AdminNav from '@/components/header/AdminNav.vue'

export default {
  name: 'AdminLayout',
  components: { AdminNav }
}
</script>

<style scoped></style>
