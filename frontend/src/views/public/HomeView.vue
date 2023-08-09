<script setup>
import MyHeader from '../../components/MyHeader.vue'
import MyMain from '../../components/MyMain.vue'
import { ref } from 'vue'
import MyProduct from '../../components/MyProduct.vue'
import GoogleMaps from '../../components/GoogleMaps.vue'
import MyCount from '../../components/MyCount.vue'
import Impact from '../../components/Impact.vue'
import MyFooter from '../../components/MyFooter.vue'

const check = "Et si c'était vous ?"
const show = ref(true)
</script>

<template>
  <div class="home-view">
    <!-- my component -->
    <MyHeader />
    <!-- end -->

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
  </div>
  <div class="component">
    <!--  -->
    <MyProduct />
    <!--  -->
    <GoogleMaps />
    <MyCount />
    <Impact />
  </div>

  <MyFooter />
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
.home-view {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 88px;
  /* margin: 0; */
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

/* transition */

h1 {
  font-size: 50px;
  width: 150px;
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

.component {
  width: 100%;
  min-height: 70vh;
  padding: 0;
  margin: 0;
  gap: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
