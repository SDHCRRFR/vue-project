<script>
const API_URL = import.meta.env.VITE_API_URL

export default {
  name: 'PublicShp',
  data: () => ({
    data: [],
    searchKey: ''
  }),
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
          this.data = data.data
        })
        .catch((error) => {
          console.error(error)
        })
    }
  },
  computed: {
    filteredList() {
      const key = this.searchKey.toLowerCase()
      return this.data.filter((product) => 
        product.code_postale.toLowerCase().includes(key) ||
        product.nom.toLowerCase().includes(key)
      )
    }
  }
}
</script>

<template>
  <div class="home-container" id="home">
    <header class="header-content">
      <h1>Recherchez parmi nos restaurants</h1>
      <div class="search">
        <input
          v-model="searchKey"
          type="search"
          id="search"
          placeholder="Recherchez..."
          autocomplete="off"
        />
        <span v-if="searchKey && filteredList.length >= 1" class="search-span">
          {{ filteredList.length }} résultat<span v-if="filteredList.length > 1">s</span>
        </span>
      </div>
    </header>
    <div class="card-cart-container">
      <div class="card-container">
        <div v-for="product in filteredList" :key="product.id" class="card">
          <router-link :to="{ name: 'restaurant', params: { id: product.id } }">
            <div class="image-container">
              <img :src="`http://localhost:3000/${product.img}`" :id="product.id" />
            </div>
            <div class="card-text">
              <h3>{{ product.nom }}</h3>
              <span>{{ product.code_postale }}</span>
            </div>
            <p>{{ product.address }}</p>
            <div class="card-icons">
              <div class="like-container">
                <label :for="product.id">
                  <p class="plus">Cliquez ici pour en savoir plus +</p>
                </label>
              </div>
            </div>
          </router-link>
        </div>

        <div v-if="filteredList.length === 0" class="no-result">
          <h3>Désolé</h3>
          <p>Aucun résultat trouvé</p>
        </div>
      </div>
    </div>
    <div class="management">
      <div class="management-contain">
        <h5>A propos de Table de Coeur</h5>
        <p class="pp">
          Vous adorez dénicher de nouveaux restaurants tendance à Paris, mais vous appréciez aussi
          les brunchs entre amis le dimanche à Bordeaux ou les dîners en amoureux à Lille ? Vous
          pensez que rien ne vaut un bon resto italien mais vous aimez sortir de la routine avec un
          restaurant japonais ou indien ? Alors, venez découvrir les meilleures tables du moment sur
          Table de coeur, parmi une sélection de plus de 60 000 adresses dans le monde entier.
        </p>

        <p class="pp">
          Tous les jours, retrouvez des promotions allant jusqu’à -50% sur la carte. De quoi se
          faire plaisir sans se ruiner ! Table de coeur est le moyen le plus rapide, disponible
          24h/24, pour trouver un bon plan resto près de chez vous, ou une expérience culinaire
          partout ailleurs. Laissez-vous guider par plus de 20 millions d’avis vérifiés de notre
          communauté et partagez les vôtres. Seuls les clients ayant honoré leur réservation peuvent
          déposer un avis et poster leurs photos de plats.
        </p>

        <p class="pp">
          Pour toutes les envies et toutes les occasions, réservez votre restaurant gratuitement en
          3 clics avec confirmation immédiate.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

.home-container {
  max-width: 100%;
  margin: 0 auto;
  padding-top: 70px;
  padding-left: 2.4rem;
}

@media screen and (max-width: 600px) {
  .home-container {
    padding-left: 0.2rem;
  }
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  background: url(../../../public/background-crimson.jpeg);
  background-size: cover;
  overflow: hidden;
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

@media screen and (max-width: 768px) {
  .search {
    width: 100%;
    max-width: 400px;
    margin-top: 10px;
  }

  header {
    height: auto;
  }
}

a {
  text-decoration: none;
  color: black;
}

.search {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-span {
  color: white;
}

.home-container h1 {
  color: white;
}

#search {
  width: 500px;
}

button {
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
}

p {
  padding-bottom: 15px;
}

#search:focus {
  outline: none;
  border: 2px solid #2eb7eb;
}

.card-cart-container {
  padding-top: 20px;
  display: flex;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  margin: 0.4rem 1rem 0.4rem 20px;
  background: white;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0px 6px rgba(51, 51, 51, 0.15);
  transition: 0.2s ease;
  width: 250px;
}

@media screen and (max-width: 600px) {
  .card {
    margin-right: 0.2rem;
  }
}

.card:hover {
  transform: scale(1.04);
}

.card:hover img {
  transform: scale(1.08);
}

.card:hover .card-text {
  opacity: 1;
  bottom: 2.3rem;
}

.plus {
  font-weight: 200;
}

.image-container {
  overflow: hidden;
}

.image-container img {
  height: 210px;
  transition: 0.4s ease;
}

.card-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 1rem;
  transition: 0.6s;
  width: 100%;
  height: 75px;
  background: linear-gradient(0deg, white 40%, transparent 100%);
}

.card-text h3 {
  font-size: 1.2rem;
  padding-right: 4px;
}

.card-text span {
  background: crimson;
  font-weight: bold;
  padding: 4px 6px;
  color: white;
  border-radius: 4px;
}

.card-icons {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 40px;
}

.card-icons i {
  padding: 3px 5px;
  transition: 0.2s;
  cursor: pointer;
}

.card-icons i:hover {
  animation: scaler 0.8s infinite linear;
}

img {
  height: 250px;
}

.card-icons .fa-heart:hover {
  color: rgba(251, 38, 38, 0.5);
}

.card-icons .fa-shopping-cart {
  font-size: 16px;
  color: #2eb7eb;
}

.card-icons .fa-shopping-cart:hover {
  filter: brightness(125%);
}

.like-container input {
  display: none;
}

.no-result {
  margin: 0 4rem 0 0.4rem;
}

.management {
  padding-top: 10px;
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.management-contain {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  float: left;
  width: 70%;
}

h5 {
  font-size: 24px;
}

.pp {
  font-size: 18px;
}
</style>
