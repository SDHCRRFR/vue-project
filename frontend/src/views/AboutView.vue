<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <MyFooterVue />
</template>

<script setup>
import MyFooterVue from '../components/MyFooter.vue'
</script>

<style scoped>
@media (min-width: 1324px) {
  .about {
    text-align: center;
    width: 100%;
    min-height: 100vh;
    padding-top: 100px;
    background: goldenrod;
    justify-content: center;
    align-items: center;
  }
}
</style>
