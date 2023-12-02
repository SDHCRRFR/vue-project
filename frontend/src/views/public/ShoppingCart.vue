<script>
export default {
  name: 'PublicShp',
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
      fetch('http://localhost:3000/api/restaurant')
        .then((response) => {
          console.log(response)
          if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données')
          }
          return response.json()
        })
        .then((data) => {
          this.data = data.data
          console.log(data)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  },
  computed: {
    filteredList() {
      return this.data.filter((product) => {
        return product.nom.toLowerCase().includes(this.searchKey.toLowerCase())
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
    </header>
    <div class="card-cart-container">
      <div class="card-container">
        <div v-for="product in filteredList" class="card" v-bind:key="product.id">
          <router-link :to="{ name: 'restaurant', params: { id: product.id } }">
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
                <label v-bind:for="product.id">
                  <p>{{ product.adresse }}</p>
                </label>
              </div>
              <div class="add-to-cart"></div>
            </div>
          </router-link>
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

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
  width: 28vw;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
}

a {
  text-decoration: none;
  color: black;
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
  border: 2px solid #2eb7eb;
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

.home-container .card-cart-container .card-container .card .img-container {
  overflow: hidden;
}

.home-container .card-cart-container .card-container .card .img-container img {
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
  align-items: center;
  justify-content: space-around;
  height: 40px;
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

.home-container .card-cart-container .card-container .card .card-icons .fa-heart:hover {
  color: rgba(251, 38, 38, 0.5);
}

.home-container .card-cart-container .card-container .card .card-icons .fa-shopping-cart {
  font-size: 16px;
  color: #2eb7eb;
}

.home-container .card-cart-container .card-container .card .card-icons .fa-shopping-cart:hover {
  filter: brightness(125%);
}

.home-container .card-cart-container .card-container .card .card-icons .like-container input {
  display: none;
}

.home-container
  .card-cart-container
  .card-container
  .card
  .card-icons
  .like-container
  input:checked
  + label
  i {
  color: #fb2626;
  animation: heart 1.3s forwards ease;
}

@keyframes heart {
  0% {
    filter: hue-rotate(0deg);
    transform: scale(1);
  }

  50% {
    filter: hue-rotate(-270deg);
    transform: scale(1.3);
  }

  100% {
    filter: hue-rotate(0deg);
    transform: scale(1);
  }
}

.home-container .card-cart-container .card-container .no-result {
  margin: 0 4rem 0 0.4rem;
}

.home-container .shopping-cart {
  transition: 0.4s ease;
  background: #292b2a;
  color: white;
  padding: 1.4rem;
  border-radius: 4px;
  min-width: 400px;
  box-shadow: 0 1px 6px rgba(51, 51, 51, 0.25);
  height: 100%;
}

.home-container .shopping-cart h2 {
  margin-bottom: 1rem;
  color: white;
  text-align: center;
}

.home-container .shopping-cart .item-group {
  max-height: 400px;
  overflow-x: hidden;
  padding-right: 6px;
}

.home-container .shopping-cart .item-group::-webkit-scrollbar {
  display: none;
  overflow-y: hidden;
}

.home-container .shopping-cart .item-group .item {
  margin-bottom: 2.4rem;
  position: relative;
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 60% 40%;
  grid-template-areas: 'a b' 'a c';
}

.home-container .shopping-cart .item-group .item:after {
  content: '';
  position: absolute;
  height: 1px;
  width: 100%;
  background: rgba(85, 85, 85, 0.2);
  left: 50%;
  bottom: -22px;
  transform: translateX(-50%);
}

.home-container .shopping-cart .item-group .item .img-container {
  grid-area: a;
  display: flex;
  align-items: center;
}

.home-container .shopping-cart .item-group .item .img-container img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  transform: scale(0);
  animation: img-scale 1s forwards;
}

@keyframes img-scale {
  to {
    transform: scale(1);
  }
}

.home-container .shopping-cart .item-group .item .item-description {
  grid-area: b;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 10px;
}

.home-container .shopping-cart .item-group .item .item-description h4 {
  margin: 0 0.9rem 0.9rem 0;
  background: rgba(51, 51, 51, 0.1);
  padding: 3px 5px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(51, 51, 51, 0.15);
  transform: scaleX(0);
  transform-origin: left;
  animation: img-scale 1s forwards;
}

@keyframes img-scale {
  to {
    transform: scaleX(1);
  }
}

.home-container .shopping-cart .item-group .item .item-description p {
  transform: translateY(3px);
}

.home-container .shopping-cart .item-group .item .item-quantity {
  grid-area: c;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
}

.home-container .shopping-cart .item-group .item .item-quantity h6 {
  color: whitesmoke;
}

.home-container .shopping-cart .item-group .item .item-quantity .cart-icons {
  display: flex;
  justify-content: space-between;
  width: 30%;
  margin-left: 10px;
}

.home-container .shopping-cart .item-group .item .item-quantity .cart-icons button {
  transform: scaleY(0);
}

.home-container .shopping-cart .item-group .item .item-quantity .cart-icons button:nth-child(1) {
  animation: icon 0.5s ease forwards;
  animation-delay: 0.2s;
}

@keyframes icon {
  to {
    transform: scaleY(1);
  }
}

.home-container .shopping-cart .item-group .item .item-quantity .cart-icons button:nth-child(2) {
  animation: icon 0.5s ease forwards;
  animation-delay: 0.4s;
}

@keyframes icon {
  to {
    transform: scaleY(1);
  }
}

.home-container .shopping-cart .item-group .item .item-quantity .cart-icons button:nth-child(3) {
  animation: icon 0.5s ease forwards;
  animation-delay: 0.6s;
}

@keyframes icon {
  to {
    transform: scaleY(1);
  }
}

.home-container .shopping-cart .item-group .item .item-quantity .cart-icons i {
  font-size: 0.55rem;
  padding: 5px;
  margin: 0 2px;
  background: white;
  border-radius: 50%;
  color: #2eb7eb;
  transition: 0.3s ease;
}

.home-container .shopping-cart .item-group .item .item-quantity .cart-icons i:hover {
  background: #222;
  color: #2eb7eb;
}

.home-container .shopping-cart .grand-total h6 {
  color: white;
}

.home-container .shopping-cart .grand-total .total {
  display: flex;
  justify-content: space-between;
  margin: 1.4rem 0 0.4rem;
}

.home-container .shopping-cart .grand-total .total h2 {
  color: white;
  margin-bottom: 0;
}

.home-container .shopping-cart .order-button {
  margin: 1rem auto 0;
  width: 100%;
  text-align: center;
}

.home-container .shopping-cart .order-button button {
  background: white;
  padding: 0.8rem;
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(51, 51, 51, 0.2);
  transition: all 0.2s ease;
  letter-spacing: 1px;
}

.home-container .shopping-cart .order-button button:hover {
  background: black;
  color: #2eb7eb;
  font-weight: bold;
  letter-spacing: 6px;
  animation: scaler 1.5s infinite linear;
}

.home-container .shopping-cart .order-button button:active {
  transform: scale(0.92);
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

.home-container .item-anim-enter,
.home-container .item-anim-leave-to {
  opacity: 0;
  transform: translateY(100px);
  transition: 0.7s;
}

@keyframes scaler {
  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
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
