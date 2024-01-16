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
          <img src="../../../public/background-crimson.jpeg" class="images"/>
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
  </div>
</template>

<script>
import FormRegistration from '@/components/formulaire/FormRegistration.vue'

export default {
  name: 'AboutView',
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
  padding: 20px;
}

.my_button {
  width: 100%;
  height: 40px;
  margin-top: 10px;
}

.review {
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
}

.manage_container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.manage_block {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
}

.advantage {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 20px;
  flex-direction: column;
  text-align: center;
}

.box {
  display: flex;
  width: 100%;
  padding: 10px;
  flex-direction: column;
}

.boxx {
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
}

.images {
  max-width: 100%;
  height: auto;
}


@media screen and (max-width: 1064px) {
  .advantage {
    padding-top: 40px;
  }

  .manage_block {
    display: flex;
    flex-direction: column;
    min-height: 90vh;
  }
}

@media screen and (max-width: 500px) {
  .review,
  .box {
    flex-direction: column;
  }
}
</style>
