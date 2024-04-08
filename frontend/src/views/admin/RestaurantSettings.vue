<template>
  <div class="restaurant_settings">
    <h1>Restaurants settings</h1>
    <RestaurantsTable />
  </div>
</template>
<script>
import RestaurantsTable from '@/components/settings/RestaurantsTable.vue'

export default {
  name: 'RestaurantSettings',
  components: {
    RestaurantsTable
  }
}
</script>
<style scoped>
.restaurant_settings {
  padding-top: 100px;
  width: 100%;
  min-height: 80vh;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
