<template>
  <div class="user_shop">
    <h1>Sélection table de coeur</h1>
    <div class="container">
      <div class="container_card">
        <div class="container_box"></div>
        <h2>profitez de 15% de réduction</h2>
        <p>
          Sur votre première réservation parmis les 8.0000 restaurant partenaires table de coeur pay
        </p>
        <h3>j'utilise le code</h3>
      </div>

      <div class="container_card">
        <div class="container_box"></div>
        <h2>profitez de 15% de réduction</h2>
        <p>
          Sur votre première réservation parmis les 8.0000 restaurant partenaires table de coeur pay
        </p>
        <h3>j'utilise le code</h3>
      </div>

      <div class="container_card">
        <div class="container_box"></div>
        <h2>profitez de 15% de réduction</h2>
        <p>
          Sur votre première réservation parmis les 8.0000 restaurant partenaires table de coeur pay
        </p>
        <h3>j'utilise le code</h3>
      </div>
    </div>
    <hr />
    <TheWelcome />
  </div>
</template>

<script lang="ts">
import TheWelcome from '../../stores/TheWelcome.vue'
export default {
  name: 'UserShopping',
  components: { TheWelcome },
  data() {
    return {}
  }
}
</script>

<style scoped lang="css">
.user_shop {
  padding-top: 100px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  align-items: center;
  margin-bottom: 150px;
}

.container {
  width: 80%;
  min-height: 30vh;
  padding: 10px;
  gap: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

h4 {
  font-size: 25px;
  font-weight: 300;
}

.container_card {
  padding: 10px;
  text-align: left;
}

img {
  width: 500px;
  height: 250px;
}

.card_cd {
  width: 80%;
  height: 40vh;
  display: flex;
  padding: 25px;
  flex-direction: row;
  border-radius: 20px;
}

.container_card:hover {
  border: 1px solid gainsboro;
  border-radius: 20px;
}

.container_box {
  background: url(../../public/legume.jpeg) 0 0;
  background-size: cover;
  overflow: hidden;
  width: 100%;
  height: 250px;
}

h1 {
  margin-right: 867px;
}

h3 {
  color: green;
  cursor: pointer;
}

/* product */

#container {
  width: 80%;
  display: flex;
  text-align: left;
  gap: 30px;
  flex-direction: column;
}

img {
  width: 100%;
  border-radius: 5px;
}
</style>
