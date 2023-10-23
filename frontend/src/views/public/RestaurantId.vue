<template>
  <div class="container">
    <hr>
    <h1>RESTAURANT</h1>
    <div class="container_block">
      <div class="container_txt">
        <h2>Le bistrot</h2>
        <hr>
        <div class="block">
          <i class="fa-solid fa-location-crosshairs"></i>
          <p>Quai Gallieni, 92150 Suresnes - <strong>Métro 5 et 6</strong> </p>
        </div>
        <hr>
        <div class="block">
          <i class="fa-solid fa-utensils"></i>
          <p>Français - Terrasse</p>
        </div>
        <hr>
        <div class="block">
          <i class="fa-solid fa-euro-sign"></i>
          <p>De 36 à 50 € </p>
        </div>
        <hr>
        <div class="block">
          <i class="fa-regular fa-clock"></i>
          <p>De 12h15 à 13h45 et de 19h15 à 21h45. Fermé dimanche et lundi.</p>
        </div>
        <hr>
        <div class="block">
          <i class="fa-solid fa-phone"></i>
          <p>0606767899</p>
        </div>
      </div>
      <div class="caroussel">
        
      </div>
    </div>
  </div>
</template>

<script>
// import { restaurants } from '../../stores/restaurants';

export default {
  name: 'RestaurantId',
  // props: [restaurants]
}
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 80vh;
  padding-top: 67px;
  display: flex;
  align-items: center;
  text-align: left;
  flex-direction: column;

}

hr {
  width: 100%;
  border: 1px solid black;
}

h1 {
  margin-right: 1000px;
  display: block;
  color: white;
  width: 220px;
  background: orange;
}

h2 {
  font-size: 33px;
}

.container_block {
  gap: 25px;
  width: 85%;
  display: flex;
  flex-direction: row;
  padding: 20px;
  min-height: 70vh;
}

.container_txt {
  width: 100%;
  height: 100%;
}

.block {
  width: 80%;
  display: flex;
  align-items: center;
  gap: 50px;
}

.caroussel {
  width: 100%;
  background: gainsboro;
  /* background: url(../../public/resto-II.jpeg) 0 0 no-repeat;
  background-size: cover;
  overflow: hidden; */
}
</style>
