<template>
  <div class="admin">
    <AdminHeader />
    <div class="admin_display">
      <router-view />
    </div>
    <MyFooter />
  </div>
</template>
<script>
import AdminHeader from '../../components/header/AdminHeader.vue'
import MyFooter from '@/components/footer/MyFooter.vue'
export default {
  name: 'AdminLayout',
  components: {
    AdminHeader,
    MyFooter
  }
}
</script>

<style scoped></style>
