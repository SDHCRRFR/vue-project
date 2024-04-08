<template>
  <div class="users_settings">
    <h1>Users settings</h1>
    <UsersTable />
  </div>
</template>

<script>
import UsersTable from '@/components/settings/UsersTable.vue'

export default {
  name: 'UserSettings',
  components: {
    UsersTable
  }
}
</script>

<style scoped>
.users_settings {
  padding-top: 100px;
  width: 100%;
  min-height: 80vh;
  flex-direction: column;
  display: flex;
  align-items: center;
}
</style>
