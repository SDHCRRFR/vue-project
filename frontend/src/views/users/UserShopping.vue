<script>
import PopUpCreateRestaurant from '../../components/popup/PopUpCreateRestaurant.vue'
const API_URL = import.meta.env.VITE_API_URL

export default {
  name: 'UserShopping',
  components: { PopUpCreateRestaurant },
  data: () => {
    return {
      data: [],
      searchKey: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      fetch(`${API_URL}/restaurant`)
        .then((response) => {
          console.log(response)
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
      return this.data.filter((product) => {
        return (
          product.code_postale.toLowerCase().includes(this.searchKey.toLowerCase()) ||
          product.nom.toLowerCase().includes(this.searchKey.toLowerCase())
        )
      })
    }
  }
}
</script>
<template>
  <div class="home-container" id="home">
    <header>
      <input
        v-model="searchKey"
        type="search"
        id="search"
        placeholder="Recherchez..."
        autocomplete="off"
      />
      <span v-if="searchKey && filteredList.length >= 1">
        {{ filteredList.length }} résultat
        <span v-if="filteredList.length >= 2">s</span>
      </span>
      <pop-up-create-restaurant />
    </header>

    <div class="card-cart-container">
      <div class="card-container">
        <div v-for="product in filteredList" class="card" v-bind:key="product.id">
          <router-link :to="{ name: 'restaurant-edit', params: { id: product.id } }">
            <div class="image-container">
              <img
                v-bind:src="`http://localhost:3000/${product.img}`"
                alt=""
                v-bind:id="product.id"
              />
            </div>

            <div class="card-text">
              <h3>{{ product.nom }}</h3>
              <span>{{ product.code_postale }}</span>
            </div>
            <p>{{ product.address }}</p>
            <div class="card-icons">
              <div class="like-container">
                <label v-bind:for="product.id" class="phone">
                  <i class="fa-solid fa-phone"></i>
                </label>
                <label v-bind:for="product.id">
                  <p>{{ product.adresse }}</p>
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
      <div class="management_contain">
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

<style scoped lang="css">
h4 {
  font-size: 25px;
  font-weight: 300;
}

img {
  width: 500px;
  height: 250px;
}

h1 {
  margin-right: 867px;
}

/* product */

.phone {
  padding-bottom: 15px;
}

#container {
  width: 80%;
  display: flex;
  text-align: left;
  gap: 30px;
  flex-direction: column;
}

img {
  width: 100%;
  border-radius: 5px;
}

/* media query */

.home-container {
  max-width: 100%;
  margin: 0 auto;
  padding-top: 100px;
  padding-left: 2.4rem;
}

@media screen and (max-width: 600px) {
  .home-container {
    padding-left: 0.2rem;
  }
}

header {
  width: 94%;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
}

/* POP UP */

/* ================================================================================================ */

a {
  text-decoration: none;
  color: black;
}

.like-container {
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
}

.home-container h1 {
  padding-left: 0;
  padding-top: 100px;
}

.home-container #search {
  height: 2.4rem;
  padding: 0 0.5rem;
  border-radius: 5px;
  transition: 0.4s ease;
  border: 2px solid rgba(51, 51, 51, 0.835);
}

#search {
  width: 300px;
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

.home-container #search:focus {
  outline: none;
  border: 2px solid pink;
}

.home-container .card-cart-container {
  display: flex;
}

.home-container .card-cart-container .card-container {
  display: flex;
  flex-wrap: wrap;
}

.home-container .card-cart-container .card-container .card {
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
  .home-container .card-cart-container .card-container .card {
    margin-right: 0.2rem;
  }
}

.home-container .card-cart-container .card-container .card:hover {
  transform: scale(1.04);
}

.home-container .card-cart-container .card-container .card:hover img {
  transform: scale(1.08);
}

.home-container .card-cart-container .card-container .card:hover .card-text {
  opacity: 1;
  bottom: 2.3rem;
}

.home-container .card-cart-container .card-container .card {
  overflow: hidden;
}

.home-container .card-cart-container .card-container .card img {
  height: 210px;
  transition: 0.4s ease;
}

.home-container .card-cart-container .card-container .card .card-text {
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

.home-container .card-cart-container .card-container .card .card-text h3 {
  font-size: 1.2rem;
  padding-right: 4px;
}

.home-container .card-cart-container .card-container .card .card-text span {
  background: crimson;
  font-weight: bold;
  padding: 4px 6px;
  color: white;
  border-radius: 4px;
}

.home-container .card-cart-container .card-container .card .card-icons {
  display: flex;
  width: 100%;
  align-items: center;
  text-align: center;
  padding: 15px;
  justify-content: space-between;
  height: 10px;
}

.home-container .card-cart-container .card-container .card .card-icons i {
  padding: 3px 5px;
  transition: 0.2s;
  cursor: pointer;
}

.home-container .card-cart-container .card-container .card .card-icons i:hover {
  animation: scaler 0.8s infinite linear;
}

img {
  height: 250px;
}

.home-container .card-cart-container .card-container .no-result {
  margin: 0 4rem 0 0.4rem;
}

.home-container .cart-anim-enter-active,
.home-container .cart-anim-leave-active {
  transition: 1.3s cubic-bezier(0.23, 0.66, 0.08, 0.93);
  transform: translateX(0px);
}

.home-container .cart-anim-enter,
.home-container .cart-anim-leave-to {
  opacity: 0;
  transform: translateX(400px);
}

.home-container .item-anim-enter-active,
.home-container .item-anim-leave-active {
  opacity: 1;
  transition: 0.8s;
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

.management_contain {
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
