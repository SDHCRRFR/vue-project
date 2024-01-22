<template>
  <div class="management">
    <div class="manage_container">
      <h1>Contactez nous</h1>
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

.manage_block {
  min-height: 50vh;
  display: flex;
  flex-direction: row;
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
button {
  width: 150px;
  height: 30px;
  padding: 3px;
  border-radius: 10px;
  border: none;
  background: rgb(0, 101, 0);
  color: white;
}

h4 {
  font-size: 40px;
}

h3 {
  font-size: 30px;
  text-align: center;
  font-weight: 600;
}
hr {
  width: 100%;
  border: 2px solid gainsboro;
}
</style>
