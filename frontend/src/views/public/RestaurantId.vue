xw
<template>
  <div class="container">
    <hr class="navHr" />
    <router-link to="/shopping-cart">
      <h1>RESTAURANT</h1>
    </router-link>
    <div class="container_block">
      <div class="container_txt">
        <h2>{{ restaurantDetails.nom }}</h2>
        <hr />
        <div class="block">
          <i class="fa-solid fa-location-crosshairs"></i>
          <a
            :href="
              'https://www.google.com/maps/search/' +
              encodeURIComponent(restaurantDetails.adresse + ' ' + restaurantDetails.code_postale)
            "
            target="_blank"
            >{{ restaurantDetails.adresse }} {{ restaurantDetails.code_postale }}</a
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
          <p>
            <a :href="'tel:' + restaurantDetails.telephone">
              {{ restaurantDetails.telephone }}
            </a>
          </p>
        </div>
      </div>
      <div class="caroussel">
        <img
          v-bind:src="`http://localhost:3000/${restaurantDetails.img}`"
          alt=""
          v-bind:id="restaurantDetails.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
const API_URL = import.meta.env.VITE_API_URL

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
      fetch(`${API_URL}/restaurant/${this.id}`)
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
  width: 83%;
  border: 1px solid black;
}

.navHr {
  width: 100%;
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

img {
  width: 100%;
  height: 100%;
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
  height: 50px;
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
