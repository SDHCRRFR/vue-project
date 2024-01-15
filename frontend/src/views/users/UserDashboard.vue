<script setup>
import { ref } from 'vue'
import HeaderDashboard from '@/components/header/HeaderDashboard.vue'
import UserMain from '@/components/main/UserMain.vue'
import MyProduct from '@/components/products/MyProduct.vue'
import BestOf from '@/components/products/BestOf.vue'
import SocialMedia from '@/components/products/SocialMedia.vue'
import TypeRestaurant from '@/components/products/TypeRestaurant.vue'

const check = 'Découvrer notre annuaire des plus beaux restaurants'
const show = ref(true)
</script>

<template>
  <div class="home-view">
    <HeaderDashboard />
    <hr class="transition_hr" @mouseover="show = !show" />
    <Transition name="slide-fade">
      <div v-if="show" class="home">
        <h1 :style="{ color: 'black' }">{{ check }}</h1>
        <span>
          <hr class="two_hr" />
          <hr class="one_hr" />
        </span>
      </div>
    </Transition>
    <UserMain />
    <MyProduct />
    <BestOf />
    <SocialMedia />
    <TypeRestaurant />
    <SubscribeRestaurant />
  </div>
</template>

<style scoped>
.transition_hr {
  width: 80%;
  height: 10px;
  background: goldenrod;
  border: none;
  border-radius: 2px;
}

.home-view {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 79px;
  flex-direction: column;
  justify-content: center;
  min-height: 80vh;
}

img {
  width: 100%;
  height: 300px;
  border-radius: 20px;
}
h1 {
  font-size: 30px;
  width: 800px;
}

.slide-fade-enter-active {
  transition: all 0.8s linear;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.8, 0.5, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(1000px);
  opacity: 0;
}

h3 {
  font-size: 30px;
}

.two_hr {
  width: 80px;
  height: 8px;
  background: crimson;
  margin-right: 100px;
  border: none;
  border-radius: 3px;
}

.one_hr {
  width: 180px;
  height: 8px;
  background: crimson;
  border: none;
  border-radius: 3px;
}

.home {
  width: 100%;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: flex-start;
}

h5 {
  display: flex;
  justify-content: space-between;
}
</style>
