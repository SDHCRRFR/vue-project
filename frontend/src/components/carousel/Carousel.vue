<template>
  <div class="carousel">
    <carousel :per-page="1" :pagination="true" :navigation="true">
      <slide v-for="(item, index) in items" :key="index">
        <!-- Contenu de chaque diapositive (slide) -->
        <h2>{{ item.title }}</h2>
        <div class="carousel-item">
          <!-- Votre contenu ici -->
          <p>{{ item.description }}</p>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
// import { ref } from 'vue';
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      items: [
        { title: 'Slide 1', description: 'Description de la diapositive 1' },
        { title: 'Slide 2', description: 'Description de la diapositive 2' },
        { title: 'Slide 3', description: 'Description de la diapositive 3' }
      ]
    }
  }
}
</script>

<style scoped>
.carousel {
  /* position: relative; */
  width: 100%;
  height: 50vh;
  /* overflow: hidden; */
}

/* button {
  position: absolute;
  height: 40px;
  width: 50px;
  top: calc(50% - 20px);
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: #fff;
}

button:active, button:hover {
  outline: none;
  cursor: pointer;
}.next {
  right: 0;
}.prev {
  left: 0;
} */
</style>
