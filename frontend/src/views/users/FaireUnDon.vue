<template>
  <div class="don_container">
    <div class="don_txt">
      <h1>Faire un don</h1>
      <p>Cliquez ici si vous êtes une entreprise || Cliquez ici si vous êtes une association</p>
    </div>
    <div class="don_button">
      <h3>Vous êtes le n°{{ id }} aujourd'hui</h3>
      <hr />
      <div class="txt"></div>
      <a href="https://www.leetchi.com/fr/money-pot/create/private" class="donate-button"
        >Faire un don <i class="fa-solid fa-right-from-bracket"></i
      ></a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FaireUnDon',
  props: ['id'],
  data() {
    return {}
  }
}
</script>

<style scoped>
.don_container {
  width: 100%;
  height: 86vh;
  padding-top: 100px;
  display: flex;
  background: url(../../../public_hold/resto-IIII.jpeg) 0 0 no-repeat;
  background-size: cover;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

hr {
  border: 1px solid rgb(13, 4, 4);
  width: 80%;
}

a {
  display: flex;
  justify-content: space-between;
}

.don_txt {
  width: 80%;
  height: 15vh;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: 30px;
  background: gainsboro;
}

h1 {
  color: white;
}

p {
  color: white;
}

img {
  height: 250px;
  width: 100%;
}

.don_button {
  width: 23%;
  height: 50vh;
  display: flex;
  align-items: center;
  padding: 10px;
  flex-direction: column;
  border-radius: 20px;
  background: gainsboro;
}

.donate-button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #3498db;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.txt {
  width: 90%;
  height: 70%;
  margin: 10px;
  background: black;
}

.donate-button:hover {
  background-color: #2980b9;
}
</style>
