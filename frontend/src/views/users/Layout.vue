<template>
  <div class="admin">
    <AdminHeader />
    <div class="admin_display">
      <router-view />
    </div>
  </div>
</template>
<script>
import AdminHeader from '../../components/header/AdminHeader.vue'
export default {
  name: 'AdminLayout',
  components: {
    AdminHeader
  }
}
</script>

<style scoped></style>
