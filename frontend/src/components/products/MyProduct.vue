<template>
  <div class="user-settings">
    <div class="fadeInTop" id="container">
      <h1>Sélection des restaurants les plus visités cette semaine</h1>
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
  name: 'MyProduct',
  data: () => {
    return {
      data: [],
      price: 5.5,
      type: 'Français'
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
          this.data = data.data.slice(0, 4)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>

<style scoped>
/* Styles communs à toutes les tailles d'écrans */
.user-settings {
  width: 100%;
  min-height: 55vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#container {
  width: 80%;
  display: flex;
  text-align: left;
  padding: 20px;
  gap: 30px;
  flex-direction: column;
}

h1 {
  font-size: 24px;
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
  box-sizing: border-box;
}

@media screen and (max-width: 900px) {
  h1 {
    font-size: 20px;
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
}

span {
  padding: 4px;
  font-size: large;
  font-weight: 700;
}

.notation {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 4px;
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
</style>
