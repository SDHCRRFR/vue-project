<script setup>
import Subscribe from '@/components/subscribe/SubscribeRestaurant.vue'
import MyFooterVue from '@/components/footer/MyFooter.vue'
</script>

<template>
  <div class="about">
    <h1>Nous sommes là pour vous aider !</h1>
    <div class="contact_container">
      <h2>Contactez-nous</h2>
      <div class="faq">
        <div class="ic">
          <i class="fas fa-comments"></i>
        </div>
        <div class="afq">
          <h3>Foire aux questions</h3>
          <p>Réponses rapides aux questions les plus fréquentes (Mon compte, Mes réservations…)</p>
          <button type="button">Accéder à la FAQ</button>
        </div>
      </div>
      <p class="contact_paragraphe">
        Vous ne trouvez pas ce que vous cherchez ? Vous pouvez nous envoyer un e-mail. <br /><a
          href="#"
          >houdjadji_said@carrefour.com</a
        >
      </p>
    </div>
    <Subscribe />
    <MyFooterVue />
  </div>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  width: 100%;
  text-align: left;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}

.contact_container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 70vh;
  background: url(../../public/background-crimson.jpeg) 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}

h2 {
  justify-content: flex-start;
  text-align: start;
  margin-right: 50%;
}

.faq {
  width: 40%;
  margin-right: 20%;
  display: flex;
  padding: 20px;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  border: none;
  border-radius: 20px;
  min-height: 25vh;
  background: white;
  justify-content: center;
}

p {
  font-size: 18px;
}

h1 {
  margin-right: 500px;
  font-weight: 800;
  font-size: 25px;
}

h2 {
  color: white;
}

.contact_paragraphe {
  color: white;
  margin-right: 20%;
}

a {
  text-decoration: none;
  color: goldenrod;
}

button {
  width: 200px;
  height: 5vh;
  border: 1px solid black;
  background: white;
  color: black;
  font-size: 15px;
  cursor: pointer;
  padding: 10px;
}

button:hover {
  background: black;
  color: white;
}

.ic {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  border-radius: 50%;
  background: gainsboro;
  height: 50px;
}
</style>
