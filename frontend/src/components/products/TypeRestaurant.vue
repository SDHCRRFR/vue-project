<template>
  <div class="user-settings">
    <div class="fadeInTop" id="container">
      <h1>A chacun son style culinaire !</h1>
      <p class="special">Découvrez les spécialités du moment</p>
      <div class="container_card">
        <div class="card" v-for="item in data" :key="item.id">
          <router-link :to="{ name: 'restaurant', params: { id: item.id } }">
            <div class="box_img">
              <img :src="`http://localhost:3000/${item.img}`" :id="item.id" />
            </div>
            <div class="box_txt">
              <p>{{ item.type }}</p>
              <div class="notation">
                <h2>{{ item.nom }}</h2>
              </div>
              <p>{{ item.code_postale }}</p>
              <div class="price_block">
                <p>prix moyen: {{ price }} €</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const API_URL = import.meta.env.VITE_API_URL

export default {
  name: 'TypeRestaurant',
  data() {
    return {
      data: [],
      price: 17.99,
      type: 'Asiatiques'
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      fetch(`${API_URL}/restaurant`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données')
          }
          return response.json()
        })
        .then((data) => {
          this.data = data.data.slice(1, 5)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.user-settings {
  width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#container {
  width: 95%;
  display: flex;
  text-align: left;
  padding: 10px;
  gap: 10px;
  flex-direction: column;
}

h1 {
  font-size: 24px;
  padding-left: 20px;
}

p {
  font-size: 18px;
  /* padding-left: 20px; */
}


.special {
  padding-left: 15px;
}

.container_card {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
}

.card {
  flex: 1 1 calc(25% - 20px);
  padding: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.price_block {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.card:hover {
  border: 1px solid gainsboro;
  transform: scale(1.04);
}

a {
  text-decoration: none;
  color: black;
}

.card:hover img {
  transform: scale(1.08);
}

img {
  width: 100%;
  border-radius: 5px;
}

.box_txt {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: left;
  gap: 10px;
}

.notation {
  width: 100%;
}

#container {
  border: 1px solid black;
}

.fadeInTop {
  animation: fadeInTop 10.2s both;
}

@keyframes fadeInTop {
  0% {
    opacity: 0;
    transform: translateY(250px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 900px) {
  h1 {
    font-size: 20px;
  }

  p {
    font-size: 16px;
  }

  .card {
    flex: 1 1 calc(33.33% - 20px);
  }
}

@media screen and (max-width: 750px) {
  .container_card {
    gap: 10px;
  }

  .card {
    flex: 1 1 calc(50% - 20px);
    font-size: 18px;
  }
}

@media screen and (max-width: 580px) {
  .card {
    flex: 1 1 calc(100% - 20px);
  }
}

@media screen and (max-width: 380px) {
  .card {
    margin-bottom: 10px;
  }
}
</style>
