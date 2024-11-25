<script setup>
import { ref } from 'vue'
import MyHeader from '@/components/header/MyHeader.vue'
import MyMain from '@/components/main/MyMain.vue'
import MyProduct from '@/components/products/MyProduct.vue'
import BestOf from '@/components/products/BestOf.vue'
import SocialMedia from '@/components/products/SocialMedia.vue'
import TypeRestaurant from '@/components/products/TypeRestaurant.vue'

const check = 'Découvrer notre annuaire des plus beaux restaurants'
const show = ref(true)
</script>
<template>
  <div class="home-view">
    <MyHeader />
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
    <MyMain />
    <MyProduct />
    <BestOf />
    <SocialMedia />
    <TypeRestaurant />
  </div>
</template>

<style scoped>
h4,
h5,
span {
  color: white;
}

.transition_hr {
  width: 80%;
  height: 10px;
  background: goldenrod;
  border: none;
  border-radius: 2px;
}

.maps {
  width: 80%;
  min-height: 80vh;
  background: crimson;
}
.home-view {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 83px;
  flex-direction: column;
  justify-content: center;
  min-height: 80vh;
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

h1 {
  font-size: 30px;
  width: 800px;
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

.card_picture {
  min-height: 70vh;
  width: 90%;
  gap: 30px;
  display: flex;
  padding: 10px;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
}

h5 {
  display: flex;
  justify-content: space-between;
}

img {
  width: 100%;
  height: 300px;
  border-radius: 20px;
}
</style>
