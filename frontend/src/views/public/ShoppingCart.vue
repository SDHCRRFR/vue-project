<script setup>
import PublicShp from '@/stores/PublicShp.vue'
import MyFooter from '@/components/footer/MyFooter.vue'
</script>

<template>
  <div class="shopping-cart">
    <PublicShp />
  </div>
  <MyFooter />
</template>
<style scoped>
.shopping-cart {
  text-align: center;
  min-height: 55vh;
  gap: 10px;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#search {
  width: 350px;
  height: 4vh;
  border-radius: 5px;
  border: 1px solid black;
}

#search:hover {
  color: white;
  background: black;
}
</style>
