<template>
  <div class="container">
    <hr />
    <h1>RESTAURANT</h1>
    <div class="container_block">
      <div class="container_txt">
        <!-- <h1>{{ item.restaurantDetails }}</h1> -->
        <h2>{{ restaurantDetails.nom }}</h2>
        <hr />
        <div class="block">
          <i class="fa-solid fa-location-crosshairs"></i>
          <a
            href="https://www.google.com/maps/place/Quai+Gallieni,+92150+Suresnes/@48.8704791,2.2319365,17z/data=!3m1!4b1!4m6!3m5!1s0x47e664d868b02a05:0x764ae9196d83627a!8m2!3d48.8704791!4d2.2319365!16s%2Fg%2F1tqf_n0g?entry=ttu"
            >Quai Gallieni, 92150 Suresnes - <strong>Métro 5 et 6</strong></a
          >
        </div>
        <hr />
        <div class="block">
          <i class="fa-solid fa-utensils"></i>
          <p>{{ restaurantDetails.type_restaurant_id }} - Terrasse</p>
        </div>
        <hr />
        <div class="block">
          <i class="fa-solid fa-euro-sign"></i>
          <p>De 36 à 50 €</p>
        </div>
        <hr />
        <div class="block">
          <i class="fa-regular fa-clock"></i>
          <p>De 12h15 à 13h45 et de 19h15 à 21h45. Fermé dimanche et lundi.</p>
        </div>
        <hr />
        <div class="block">
          <i class="fa-solid fa-phone"></i>
          <a href="0605702732">0606767899</a>
        </div>
      </div>
      <div class="caroussel"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestaurantId',
  props: ['id'],
  data() {
    return {
      restaurantDetails: {}
    }
  },
  created() {
    this.fetchRestaurantDetails()
  },
  methods: {
    fetchRestaurantDetails() {
      fetch(`http://localhost:3000/api/restaurant/${this.id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Erreur lors de la récupération des détails du restaurant')
          }
          return response.json()
        })
        .then((data) => {
          this.restaurantDetails = data.data
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
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

a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: underline;
}

.caroussel {
  width: 100%;
  background: gainsboro;
}
</style>
