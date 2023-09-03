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
                    <p>Augmentez vos revenus, dotez-vous d’une meilleure visibilité et fidélisez vos clients en rejoignant
                        nos 60 000 restaurants partenaires déjà réservables sur TheFork, la première plateforme de recherche
                        et de réservation de restaurants en Europe et en Australie.</p>
                    <p>
                        Testez TheFork Manager, notre logiciel de réservation et de gestion de tables, sans engagement de
                        durée. Visibilité et inscription gratuite. Facturation à l'utilisation : les commissions sont basées
                        sur le nombre de couverts réservés et honorés.</p>

                    <img src="../../public/resto-II.jpeg" class="images" alt="">
                </div>
                <div class="block_II">
                    <form action="submit"></form>
                </div>
            </div>
        </div>
        <div class="advantage">
            <h2>{{ accroche }}</h2>
        </div>
        <div class="box" v-for="item in items" :key="item">
            <div class="boxx">
                <img v-bind:src="item.img" alt="">
                <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
            </div>

        </div>
        <footer>
      <ul class="social_icon">
        <li>
          <a href="#"><ion-icon name="logo-facebook" size="large"></ion-icon></a>
        </li>
        <li>
          <a href="#"><ion-icon name="logo-twitter" size="large">snapchat</ion-icon></a>
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

export default {
    name: 'Management',
    data: () => {
        return {
            accroche: ('Ce que vous pouvez attendre de TheFork'),
            items: [
                {
                    img: '../../public/icon-expert.webp',
                    title: ('Obtenez plus de visibilité en ligne'),
                    desc: ('TheFork Manager est la première plate-forme de recherche et de réservation de restaurants, disponible dans 12 pays ! Vous pouvez dès maintenant vous doter gratuitement d’une page personnalisée affichable sur tous les appareils.')
                },
                {
                    img: '../../public/icon-ghost.webp',
                    title: ('Augmentez votre taux doccupation'),
                    desc: ('Un modèle de gestion gagnant-gagnant sans aucun risque pour votre restaurant. Proposez des offres spéciales ou participez au programme de fidélité YUMS et aux festivals pour augmenter vos réservations en saison creuse.')
                },
                {
                    img: '../../public/icon-table.webp',
                    title: ('Luttez contre les no-shows'),
                    desc: ('Réduisez le nombre des no-shows à l’aide des outils de TheFork tels que les emails de confirmation automatiques et les SMS, le score de fiabilité des clients et la prise d’empreinte de carte de crédit.')
                },
                {
                    img: '../../public/icon-visibility.webp',
                    title: ('Faites appel aux experts du secteur'),
                    desc: ('Les équipes de TheFork collaborent avec 60000 restaurants depuis plus de 12 ans afin de les aider à développer leur activité via des formations gratuites, des prestations de conseil assurées par des experts, et un support client 7 jours sur 7.')
                },
            ]
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
    /* justify-content: center; */
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
    /* align-items: center; */

}

.block_I {
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;
}

.block_II {
    background: pink;
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
    justify-content: center;
    padding-top: 200px;
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
    flex-direction: row;
}

.boxx {
    /* width: 80%; */
    display: flex;
    flex-direction: column;
    align-items: center;
}

.images {
    width: 400px;
}

nav .nav-container #logo img {
    height: 100%;
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
</style>