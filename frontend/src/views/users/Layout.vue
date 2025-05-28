<template>
  <div class="admin">
    <AdminHeader />
    <div class="admin_display">
      <router-view />
    </div>
    <FooterDefault />
  </div>
</template>
<script>
import AdminHeader from '../../components/header/AdminHeader.vue'
import FooterDefault from '@/components/footer/FooterDefault.vue'

export default {
  name: 'AdminLayout',
  components: {
    AdminHeader,
    FooterDefault
  }
}
</script>

<style scoped></style>
