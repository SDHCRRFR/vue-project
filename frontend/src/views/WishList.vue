<template>
  <div class="user-settings">
    <AlertBox>
  Click me! <!-- slot content -->
  <slot></slot>
    </AlertBox>
    <!-- <div class="user">
      <div class="demo">
        <button
          v-for="(_, tab) in tabs"
          :key="tab"
          :class="['tab-button', { active: currentTab === tab }]"
          @click="currentTab = tab"
        >
          {{ tab }}
        </button>
        <component :is="tabs[currentTab]" class="tab"></component>
      </div>
    </div> -->
  </div>
  <MyFooter />
</template>

<script setup>
import MyTest from '../stores/MyTest.vue'
// import Homes from '../components/Homes.vue'
// import Posts from '../components/Posts.vue'
// import Archive from '../components/Archive.vue'
// import { ref } from 'vue'
import MyFooter from '../components/MyFooter.vue'

// const data = [
//   {
//     id: 1,
//     items: 'bateau',
//     price: 11900
//   }
// ]

// const currentTab = ref('Homes')

// const tabs = {
//   Homes,
//   Posts,
//   Archive
// }
// export default {

// }
</script>

<style scoped>
.user-settings {
  padding-bottom: 260px;
  text-align: center;
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  justify-content: center;
  align-items: center;
}

.user {
  width: 90%;
  height: 90vh;
}

.demo {
  font-family: sans-serif;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px 30px;
  margin-top: 1em;
  height: 100vh;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
  height: 80vh;
}
</style>
