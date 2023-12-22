<template>
    <div class="management">
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
  
            <img src="../../../public/background-crimson.jpeg" class="images" alt="" />
          </div>
          <div class="block_II">
            <FormRegistration />
          </div>
        </div>
      </div>
      <div class="advantage">
        <h2>{{ accroche }}</h2>
      </div>
      <div class="box">
        <div class="boxx" v-for="item in items" :key="item">
          <img v-bind:src="item.img" alt="" class="mypics" />
          <h3>{{ item.title }}</h3>
          <p class="paragraphe">{{ item.desc }}</p>
        </div>
      </div>
      <div class="review">
        <h3>Vous souhaitez attirer plus de clients dans votre restaurant ?</h3>
        <p>
          Associez-vous à Table de coeur dès aujourd'hui : c'est simple et vous pouvez annuler à tout
          moment !
        </p>
        <router-link to="/help-management">
          <button class="my_button">Commencez</button>
        </router-link>
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
  
  <script>
  import FormRegistration from '@/components/formulaire/FormRegistration.vue'
  
  export default {
    name: 'StoreManagement',
    data: () => {
      return {
        accroche: 'Ce que vous pouvez attendre de Table de coeur',
        items: [
          {
            img: '../../public/icon-expert.webp',
            title: 'Obtenez plus de visibilité en ligne',
            desc: 'Table de coeur Manager est la première plate-forme de recherche et de réservation de restaurants, disponible dans 12 pays ! Vous pouvez dès maintenant vous doter gratuitement d’une page personnalisée affichable sur tous.'
          },
          {
            img: '../../public/icon-ghost.webp',
            title: 'Augmentez votre taux doccupation',
            desc: 'Un modèle de gestion gagnant-gagnant sans aucun risque pour votre restaurant. Proposez des offres spéciales ou participez au programme de fidélité YUMS et aux festivals pour augmenter vos réservations en saison creuse.'
          },
          {
            img: '../../public/icon-table.webp',
            title: 'Luttez contre les no-shows',
            desc: 'Réduisez le nombre des no-shows à l’aide des outils de Table de coeur tels que les emails de confirmation automatiques et les SMS, le score de fiabilité des clients et la prise d’empreinte de carte'
          },
          {
            img: '../../public/icon-visibility.webp',
            title: 'Faites appel aux experts du secteur',
            desc: 'Les équipes de Table de coeur collaborent avec 60000 restaurants depuis plus de 12 ans afin de les aider à développer leur activité via des formations gratuites, des prestations de conseil assurées par des experts, et un support client 7 jours sur 7.'
          }
        ]
      }
    },
    components: {
      FormRegistration
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
  
  .my_button {
    width: 200px;
    height: 40px;
  }
  
  .my_button:hover {
    background: rgba(0, 182, 0, 0.947);
  }
  
  .review {
    width: 80%;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .manage_container {
    width: 80%;
    height: 90vh;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
  }
  
  p {
    font-size: 25px;
  }
  
  .paragraphe {
    font-size: 20px;
    font-weight: 300;
  }
  
  .manage_block {
    min-height: 50vh;
    display: flex;
    flex-direction: row;
  }
  
  .mypics {
    height: 100px;
    /* width: 250px; */
  }
  
  input {
    width: 96%;
    height: 100%;
    background: transparent;
    border: none;
    border: 2px solid rgba(255, 255, 255, 0.91);
    outline: none;
    font-size: 16px;
    color: #fff;
    border-radius: 40px;
    padding: 10px 10px 10px 5px;
  }
  
  .block_I {
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;
  }
  
  .block_II {
    width: 100%;
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
  
  .review {
    width: 90%;
    min-height: 50vh;
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
    font-size: 30px;
    text-align: center;
    font-weight: 600;
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
  