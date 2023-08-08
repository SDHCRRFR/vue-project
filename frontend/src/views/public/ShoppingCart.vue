<script setup>
import TheWelcome from '../../stores/TheWelcome.vue'
import MyFooter from '../../components/MyFooter.vue'

// function say(message) {
//   alert(message)
// }

// function warn(message, event) {
//   // quand on a pas accès aux enevements natives
//   if (event) {
//     event.preventDefault()
//   }
//   alert(message)
// }
</script>

<template>
  <div class="shopping-cart">
    <TheWelcome />
    <!-- slot -->
    <!-- <MyTest> Aller aller y'a rien n'as voir ici mon pote !. </MyTest> -->
    <!-- slot -->

    <!-- <button @click="say">Hello</button>
    <button @click="warn('form cannot ooo', $event)">submit</button> -->
    <!-- <button @click="(event) => warn('form oooooo', event)">
    submit</button> -->
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
