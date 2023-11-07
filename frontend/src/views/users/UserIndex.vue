<template lang="">
  <div class="user_index">
    <h1>{{ title }} + {{ id }}</h1>
  </div>
</template>

<script>
export default {
  name: 'UserIndex',
  props: ['id'],
  data() {
    return {
      title: 'User Index'
    }
  }
}
</script>

<style>
.user_index {
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
