<template>
  <div class="admin_dashboard">
    <nav>
      <div class="nav-container">
        <div id="logo">
          <img src="../../assets/logosaid.svg" alt="logo" />
        </div>
        <ul id="icons">
          <li>
            <router-link to="/edit/user">
              <i class="fa-regular fa-user"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/edit/restaurant">
              <i class="fa-solid fa-utensils"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/logout">
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <h3>
        CRUD Manager <span><i class="fa-solid fa-gear"></i> </span>
      </h3>
      <hr />
      <div class="container_block">
        <main class="container">
          <div class="management">
            <div class="management_contain">
              <h5>A propos de Table de Coeur</h5>
              <p class="pp">
                Vous adorez dénicher de nouveaux restaurants tendance à Paris, mais vous appréciez
                aussi les brunchs entre amis le dimanche à Bordeaux ou les dîners en amoureux à
                Lille ? Vous pensez que rien ne vaut un bon resto italien mais vous aimez sortir de
                la routine avec un restaurant japonais ou indien ? Alors, venez découvrir les
                meilleures tables du moment sur Table de coeur, parmi une sélection de plus de 60
                000 adresses dans le monde entier.
              </p>

              <p class="pp">
                Tous les jours, retrouvez des promotions allant jusqu’à -50% sur la carte. De quoi
                se faire plaisir sans se ruiner ! Table de coeur est le moyen le plus rapide,
                disponible 24h/24, pour trouver un bon plan resto près de chez vous, ou une
                expérience culinaire partout ailleurs. Laissez-vous guider par plus de 20 millions
                d’avis vérifiés de notre communauté et partagez les vôtres. Seuls les clients ayant
                honoré leur réservation peuvent déposer un avis et poster leurs photos de plats.
              </p>

              <p class="pp">
                Pour toutes les envies et toutes les occasions, réservez votre restaurant
                gratuitement en 3 clics avec confirmation immédiate.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard',
  props: ['name'],
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.admin_dashboard {
  width: 100%;
  min-height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.container {
  width: 80%;
  min-height: 50vh;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}

.container_block {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

ul,
li {
  list-style: none;
}

a,
a:visited {
  color: #333;
}

nav {
  padding: 0rem 2.4rem;
  background: #fff;
  position: fixed;
  width: 95%;
  z-index: 2;
  box-shadow: 0 2px 4px -3px rgba(51, 51, 51, 0.2);
}

h4 {
  text-decoration: underline black;
}

nav .nav-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1450px;
}

nav .nav-container #logo {
  height: 32px;
  width: 66%;
}

nav .nav-container #logo img {
  height: 100%;
}

nav .nav-container #icons {
  display: flex;
  font-size: 24px;
  width: 34%;
  justify-content: flex-end;
}

nav .nav-container #icons li {
  margin-left: calc(35% + 8px);
}

nav .nav-container #icons li a {
  position: relative;
}

nav .nav-container #icons #nav-not {
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: #ff2929;
  position: absolute;
  visibility: hidden;
  opacity: 1;
  transition: 0.6s;
  transform: translate(-4px, -1px);
}

nav .nav-container #icons i {
  transition: 0.25s;
  cursor: pointer;
}

nav .nav-container #icons i:hover {
  color: rgba(34, 34, 34, 0.65);
}

hr {
  border: 1px solid black;
  width: 100%;
}

.management {
  /* padding-top: 10px; */
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
  width: 80%;
}

h5 {
  font-size: 24px;
}

.pp {
  font-size: 18px;
}
</style>
