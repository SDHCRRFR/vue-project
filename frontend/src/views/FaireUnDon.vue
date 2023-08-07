<template>
  <div class="don_container">
    <div class="don_txt">
      <h1>Faire un don</h1>
      <p>Cliquez ici si vous êtes une entreprise || Cliquez ici si vous êtes une association</p>
    </div>
    <div class="container_don">
      <div class="mon_don">
        <h2>Mon don</h2>
      </div>
      
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data: () => {
    return {
      cards: [
        {
          id: 1,
          img: '../../photo-ethnique.jpg',
          date_creation: '12/03/23',
          title: 'Merci pour vor votre contribution'
        }
      ]
    }
  }
}
</script>

<style scoped>
.don_container {
  width: 100%;
  height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background: url(../../public/legume.jpeg);
}

.container_don {
  width: 30%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background: white;
  border-radius: 20px 20px 0px 0px;
  /* border-bottom: 20px solid black; */
}

.mon_don {
  width: 100%;
  height: 8vh;
  background: pink;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 10px 10px 0px 0px;
}

.don_txt {
  width: 80%;
  height: 15vh;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: 30px;
  background: rgb(255, 52, 214);
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
</style>
