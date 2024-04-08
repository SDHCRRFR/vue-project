<template>
  <div class="management">
    <pop-up-create-restaurant />
    <table class="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>img</th>
          <th>numéro de tel</th>
          <th>addresse</th>
          <th>menu</th>
          <th>Date de création</th>
          <th>Trash</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="restaurant in donnee" :key="restaurant.id">
          <td>
            <strong>{{ restaurant.id }}</strong>
          </td>
          <td>{{ restaurant.nom }}</td>
          <td><img :src="`http://localhost:3000/${restaurant.img}`" :id="restaurant.id" /></td>
          <td>
            <a :href="'tel:' + restaurant.telephone">{{ restaurant.telephone }}</a>
          </td>
          <td>{{ restaurant.adresse }}</td>
          <td>{{ restaurant.menu }}</td>
          <td>{{ restaurant.created_at }}</td>
          <td>
            <button @click="trashRestaurant(restaurant.id)">
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import PopUpCreateRestaurant from '../popup/PopUpCreateRestaurant.vue'
const API_URL = 'http://localhost:3000'

export default {
  components: { PopUpCreateRestaurant },
  name: 'RestaurantsTable',
  data: () => {
    return {
      donnee: []
    }
  },
  mounted() {
    this.fetchRestaurantData()
  },
  methods: {
    fetchRestaurantData() {
      fetch(`${API_URL}/restaurant`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données')
          }
          return response.json()
        })
        .then((donnee) => {
          this.donnee = donnee.data
        })
        .catch((error) => {
          console.error(error)
        })
    },
    trashRestaurant(restaurantId) {
      if (confirm('Êtes-vous sûr de vouloir supprimer ce restaurant ?')) {
        fetch(`${API_URL}/restaurant/${restaurantId}`, {
          method: 'DELETE'
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Erreur lors de la suppression de l'utilisateur")
            }
            return response.json()
          })
          .then(() => {
            this.fetchRestaurantData
          })
          .catch((error) => {
            console.error(error)
          })
      }
    }
  }
}
</script>

<style scoped>
img {
  width: 60px;
  border-radius: 50%;
}

.user-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.user-table th,
.user-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.user-table th {
  background-color: #f2f2f2;
}
</style>
