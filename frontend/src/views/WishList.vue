<template>
  <div class="user-settings">
    <!-- {{ aff }} -->
  </div>
  <MyFooter />
</template>

<script setup>
import { useTasksStore } from '../stores/tasks'
import MyFooter from '../components/MyFooter.vue'

const tasksStore = useTasksStore()
console.log(tasksStore)
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
