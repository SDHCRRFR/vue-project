<template>
  <div class="don_container">
    <div class="don_txt">
      <h1>Faire un don</h1>
      <p>Cliquez ici si vous êtes une entreprise || Cliquez ici si vous êtes une association</p>
    </div>
    <div class="container_don">
      <div class="mon_don">
        <h2>
          Mercii beaucoup vous êtes le n°<span>{{ id }} aujourd'hui</span>
        </h2>
      </div>
      <div class="the_don">
        <h2>1 999 873 122 $</h2>
        <h3>Collectés</h3>
      </div>
      <div class="days">
        <div class="time">
          <i class="fa-solid fa-clock"></i><span>27</span>
          <p class="day">Jours restant</p>
        </div>
        <hr>
        <div class="people">
          <i class="fa-solid fa-user"></i><span>51368</span>
          <p class="person">participation</p>
        </div>
      </div>
      <input type="submit" placeholder="JE FAIS UN DON">
      <input type="submit">
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'FaireUnDon',
  props: ['id'],
  data() {
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
  // mounted(){
  //   console.log(this.$route.params.id)
  //   this.test = this.$route.params.id
  // },
  // updated(){
  //   console.log(this.$route.params.id)
  //   this.test = this.$route.params.id
  // }
}
</script>

<style scoped>
.don_container {
  width: 100%;
  height: 86vh;
  padding-top: 100px;
  display: flex;
  background: url(../../../../public/resto-II.jpeg) 0 0 no-repeat;
  background-size: cover;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

input {
  width: 70%;
  height: 30px;
  background: green;
  border: none;
  border-radius: 15px;
  color: white;
}

input:hover {
  background: black;
  color: white;
}

.person {
  color: black;
}

.day {
  color: black;
}

hr {border: 1px solid black;
height: 50px;}

.days {
  width: 70%;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  display: flex;
  flex-direction: row;

}

.container_don {
  width: 25%;
  min-height: 55vh;
  display: flex;
  /* padding: 10px; */
  gap: 15px;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background: #fff;
  border-radius: 20px 20px 20px 20px;
  box-shadow: 0 0 10px;
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
  background: pink;
}

.the_don {
  width: 100%;
  /* display: flex;
  flex-direction: column; */
  align-items: center;
  justify-content: center;
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
