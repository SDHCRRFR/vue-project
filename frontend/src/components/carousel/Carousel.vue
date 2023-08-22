<template lang="">
  <div class="carousel">
    <slot></slot>

    <button class="next">Next</button>
    <button class="prev">Prev</button>
  </div>
</template>

<script>
export default {
  data: () => ({})
}
</script>

<style scoped>
.carousel {
  position: relative;
  width: 600px;
  height: 350px;
  overflow: hidden;
}

button {
  position: relative;
  width: 50px;
  height: 40px;
  top: calc(50% - 20px);
  background: rgba(0, 0, 0, 0.8);
  border: none;
  color: #fff;
}

button:active,
button:hover {
  outline: none;
  cursor: pointer;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}
</style>
