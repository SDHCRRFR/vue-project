<template>
  <div class="management">
    <div class="manage_container">
      <h1>À propos de Table coup de coeur</h1>
      <div class="propos">
        <p>
          Vous adorez dénicher de nouveaux restaurants tendance à Paris, mais vous appréciez aussi
          les brunchs entre amis le dimanche à Bordeaux ou les dîners en amoureux à Lille ? Vous
          pensez que rien ne vaut un bon resto italien mais vous aimez sortir de la routine avec un
          restaurant japonais ou indien ? Alors, venez découvrir les meilleures tables du moment sur
          Table coup de coeur, parmi une sélection de plus de 60 000 adresses dans le monde entier.
          <br />
          <br />Tous les jours, retrouvez des promotions allant jusqu’à -50% sur la carte. De quoi
          se faire plaisir sans se ruiner ! Table coup de coeur est le moyen le plus rapide,
          disponible 24h/24, pour trouver un bon plan resto près de chez vous, ou une expérience
          culinaire partout ailleurs. Laissez-vous guider par plus de 20 millions d’avis vérifiés de
          notre communauté et partagez les vôtres. Seuls les clients ayant honoré leur réservation
          peuvent déposer un avis et poster leurs photos de plats.
        </p>
        <p>
          Pour toutes les envies et toutes les occasions, réservez votre restaurant gratuitement en
          3 clics avec confirmation immédiate.
        </p>
        <h2>Êtes-vous un restaurateur ?</h2>
        <div class="post">
          <img src="../../../public/nourriture_salade.jpeg" class="myImage" alt="" />
          <div class="txt">
            <h4>Inscrivez votre restaurant</h4>
            <p>
              Donnez-nous plus de détails, et nous vous contacterons le plus rapidement possible.
            </p>
            <button type="button">inscrivez votre restaurant</button>
            <h4>Déjà client</h4>
            <p>Connectez-vous à Table coup de coeur et contactez-nous avec le Chat.</p>
            <button type="button">Connectez vous a Table coup de coeur</button>
          </div>
        </div>
      </div>
      <hr />
      <h2>Contactez nous</h2>
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
  </div>
</template>

<script>
import FormRegistration from '@/components/formulaire/FormRegistration.vue'

export default {
  name: 'AboutView',
  data: () => {
    return {
      accroche: 'Ce que vous pouvez attendre de Table de coeur'
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
  padding: 30px;
  padding-bottom: 20%;
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

.txt {
  margin-bottom: 50px;
  margin-right: 20px;
}

.propos {
  margin-bottom: 100px;
}

.post {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid gainsboro;
  justify-content: space-between;
  height: 48vh;
}

button:hover {
  background-color: rgb(0, 0, 0);
  color: white;
}

.manage_block {
  min-height: 100vh;
  display: flex;
  flex-direction: row;
}


.block_I {
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
}

.myImage {
  width: 650px;
  height: 450px;
}

.block_II {
  width: 100%;
}


h2 {
  font-size: 40px;
}

.images {
  width: 400px;
}

button {
  width: 263px;
  padding: 16px;
  border-radius: 10px;
  border: none;
  background: rgb(254, 255, 254);
  color: black;
  border: 1px solid black;
}

h4 {
  font-size: 30px;
}

h3 {
  font-size: 40px;
  text-align: center;
  font-weight: 600;
}

hr {
  width: 100%;
  border: 2px solid gainsboro;
}
</style>
