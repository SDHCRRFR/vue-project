<template>
  <div class="management">
    <nav>
      <div class="nav-container">
        <div id="logo">
          <router-link to="/">
            <img src="../assets/logosaid.svg" alt="logo" />
          </router-link>
        </div>
      </div>
    </nav>
    <div class="manage_container">
      <h1>Inscrivez votre restaurant sur Table de coeur</h1>
      <div class="manage_block">
        <div class="block_I">
          <p>
            Augmentez vos revenus, dotez-vous d’une meilleure visibilité et fidélisez vos clients en
            rejoignant nos 60 000 restaurants partenaires déjà réservables sur TheFork, la première
            plateforme de recherche et de réservation de restaurants en Europe et en Australie.
          </p>
          <p>
            Testez TheFork Manager, notre logiciel de réservation et de gestion de tables, sans
            engagement de durée. Visibilité et inscription gratuite. Facturation à l'utilisation :
            les commissions sont basées sur le nombre de couverts réservés et honorés.
          </p>

          <img src="../../public/resto-II.jpeg" class="images" alt="" />
        </div>
        <div class="block_II"></div>
      </div>
    </div>
    <div class="advantage">
      <h2>{{ accroche }}</h2>
    </div>
    <div class="box">
      <div class="boxx" v-for="item in items" :key="item">
        <img v-bind:src="item.img" alt="" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
      </div>
    </div>
    <div class="review">
      <hr />
      <div class="content_rev">
        <div class="rev_composition">
          <h3>Envie d'en savoir + ?</h3>
          <iframe
            width="560"
            height="360"
            src="https://www.youtube.com/embed/QLUewSJQ3l8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <h4>Vous souhaitez attirez plus de clients dans votrr restaurants ?</h4>
      <p>associez vous a Table de coeur dès aujourd'hui et vous pouvez annulez à tout moment.</p>
      <button type="button">Commencez</button>
    </div>
    <footer>
      <ul class="social_icon">
        <li>
          <a href="#"><ion-icon name="logo-facebook" size="large"></ion-icon></a>
        </li>
        <li>
          <a href="#"><ion-icon name="logo-twitter" size="large"></ion-icon></a>
        </li>
        <li>
          <a href="#"><ion-icon name="logo-snapchat" size="large"></ion-icon></a>
        </li>
        <li>
          <a href="#"><ion-icon name="logo-linkedin" size="large"></ion-icon></a>
        </li>
      </ul>
      <ul class="menu">
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Impact</a></li>
        <li><a href="#">Rejoignez-nous</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <p>ipsum dolor sit amet consectetur || consectetur adipisicing elit.</p>
    </footer>
  </div>
</template>

<script setup>
export default {
  name: 'ManagementStore',
  data: () => {
    return {
      accroche: 'Ce que vous pouvez attendre de Table de coeur',
      items: [
        {
          img: '../../public/icon-expert.webp',
          title: 'Obtenez plus de visibilité en ligne',
          desc: 'Table de coeur Manager est la première plate-forme de recherche et de réservation de restaurants, disponible dans 12 pays ! Vous pouvez dès maintenant vous doter gratuitement d’une page personnalisée affichable sur tous les appareils.'
        },
        {
          img: '../../public/icon-ghost.webp',
          title: 'Augmentez votre taux doccupation',
          desc: 'Un modèle de gestion gagnant-gagnant sans aucun risque pour votre restaurant. Proposez des offres spéciales ou participez au programme de fidélité YUMS et aux festivals pour augmenter vos réservations en saison creuse.'
        },
        {
          img: '../../public/icon-table.webp',
          title: 'Luttez contre les no-shows',
          desc: 'Réduisez le nombre des no-shows à l’aide des outils de Table de coeur tels que les emails de confirmation automatiques et les SMS, le score de fiabilité des clients et la prise d’empreinte de carte de crédit.'
        },
        {
          img: '../../public/icon-visibility.webp',
          title: 'Faites appel aux experts du secteur',
          desc: 'Les équipes de Table de coeur collaborent avec 60000 restaurants depuis plus de 12 ans afin de les aider à développer leur activité via des formations gratuites, des prestations de conseil assurées par des experts, et un support client 7 jours sur 7.'
        }
      ],
      restaurant: {
        email: '',
        number: ''
      }
    }
  }
}
</script>

<style scoped>
.management {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.manage_container {
  width: 80%;
  height: 80vh;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
}

p {
  font-size: 25px;
}

.manage_block {
  min-height: 50vh;
  display: flex;
  flex-direction: row;
}

.block_I {
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
}

.block_II {
  background: url(../../public/resto-III.jpeg) 0 0 no-repeat;
  background-position: center;
  overflow: hidden;
  background-size: cover;
  width: 100%;
}

nav {
  padding: 0rem 2.4rem;
  background: rgba(255, 255, 255, 0.97);
  position: fixed;
  width: 95%;
  z-index: 2;
  box-shadow: 0 2px 4px -3px rgba(51, 51, 51, 0.2);
}

nav .nav-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1450px;
  height: 10vh;
}

.advantage {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 280px;
}

h2 {
  font-size: 40px;
}

nav .nav-container #logo {
  height: 32px;
  width: 66%;
}

.box {
  display: flex;
  width: 80%;
  /* gap: 15px; */
  padding: 10px;
  flex-direction: row;
}

.boxx {
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
}

.images {
  width: 400px;
}

nav .nav-container #logo img {
  height: 100%;
}

.review {
  width: 90%;
  min-height: 59vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px;
}
.content_rev {
  width: 100%;
  display: flex;
  padding: 5px;
  flex-direction: column;
  align-items: center;
  height: 40vh;
  background: gray;
}

button {
  width: 150px;
  height: 30px;
  padding: 3px;
  border-radius: 10px;
  border: none;
  background: rgb(0, 101, 0);
  color: white;
}

.rev_composition {
  width: 100%;
  display: flex;
  padding: 5px;
  flex-direction: column;
  align-items: center;
  height: 40vh;
  background: gray;
}

h4 {
  font-size: 40px;
}

footer {
  position: relative;
  width: 90%;
  background: black;
  min-height: 100px;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
footer .social_icon,
footer .menu {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;
}
footer .social_icon li,
footer .menu li {
  list-style: none;
}

footer .social_icon li a {
  font-size: 2em;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
}
footer .social_icon li a:hover {
  transform: translateY(-10px);
}
footer .menu li a {
  font-size: 1.2em;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  text-decoration: none;
  opacity: 0.75;
}
footer .menu li a:hover {
  opacity: 1;
}
footer p {
  color: #fff;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 1.1em;
}

.log {
  width: 100%;
  min-height: 100vh;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(57, 57, 57);
}

.login {
  width: 70%;
  height: 100vh;
  display: flex;
  background: url(../../../public/ensemble.jpeg) 0 0 no-repeat;
  background-size: cover;
  overflow: hidden;
  padding-bottom: 100px;
  margin-bottom: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-position-y: center;
  overflow: hidden;
}

h3 {
  font-size: 35px;
  text-align: center;
}

.sub {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

hr {
  width: 100%;
  border: 2px solid gainsboro;
}
</style>
