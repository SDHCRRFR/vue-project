<script setup>
import MyFooterVue from '../components/MyFooter.vue'
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  min-height: 80vh;
  padding-top: 100px;
  justify-content: center;
  align-items: center;
}

.contact_container {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 65vh;
  opacity: 0.7;
  background: url(../../public/background-crimson.jpeg) 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}

.faq {
  width: 35%;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 25vh;
  background: white;
  justify-content: center;
}
</style>
<template>
  <div class="about">
    <h1>Nous sommes là pour vous aider !</h1>
    <div class="contact_container">
      <h2>Contactez-nous</h2>
      <div class="faq">
        <div class="ic">
          <i class="fa-solid fa-message-lines" style="color: #008040;"></i>
        </div>
        <div class="afq">
          <h3>Foire aux questions</h3>
          <p>Réponses rapides aux questions les plus fréquentes (Mon compte, Mes réservations…)</p>
          <button type="button">Accéder à la FAQ</button>
        </div>
      </div>
      <p>Vous ne trouvez pas ce que vous cherchez ? Vous pouvez nous envoyer un e-mail.</p>
      <a href="#">contact@tabledecoeur.fr</a>
    </div>
  </div>
  <MyFooterVue />
</template>
