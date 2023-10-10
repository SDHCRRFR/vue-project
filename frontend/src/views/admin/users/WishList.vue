<template>
  <div class="user-settings">
    <!-- components -->
    <div class="fadeInTop" id="containerI">
      <h1>Sélection Table de coeur</h1>
      <div class="container_cardI">
        <div class="card" v-for="item in items" v-bind:key="item.index">
          <div class="box_img">
            <img v-bind:src="item.img" />
          </div>
          <div class="box_txt">
            <p>{{ item.type }}</p>
            <div class="notation">
              <h2>{{ item.name }}</h2>
              <span>{{ item.like }}</span>
            </div>
            <p>{{ item.code }}</p>
            <p>prix moyen: {{ item.price }} $</p>
          </div>
        </div>
      </div>
    </div>
    <!-- end ! -->
    <h2>Sélection table de coeur</h2>

    <div class="container">
      <div class="container_card">
        <div class="container_box">
          <!-- ici image -->
        </div>
        <h2>profitez de 15% de réduction</h2>
        <p>
          Sur votre première réservation parmis les 8.0000 restaurant partenaires table de coeur pay
        </p>
        <h3>j'utilise le code</h3>
      </div>

      <div class="container_card">
        <div class="container_box">
          <!-- ici -->
        </div>
        <h2>profitez de 15% de réduction</h2>
        <p>
          Sur votre première réservation parmis les 8.0000 restaurant partenaires table de coeur pay
        </p>
        <h3>j'utilise le code</h3>
      </div>

      <div class="container_card">
        <div class="container_box">
          <!-- ici -->
        </div>
        <h2>profitez de 15% de réduction</h2>
        <p>
          Sur votre première réservation parmis les 8.0000 restaurant partenaires table de coeur pay
        </p>
        <h3>j'utilise le code</h3>
      </div>
    </div>
    <hr />
    <div class="card_cd">
      <div class="my_pic">
        <img src="../../../../public/background-resto.png" alt="" />
      </div>
      <div class="cd_card">
        <h4>Découvrez les nouvelles</h4>
        <h5>Cartes cadeaux Table de coeur</h5>
        <p>8.000 restaurants avec 1 seule carte cadeau</p>
        <button type="submit">Acceder</button>
      </div>
    </div>
    <hr />
    <SubscribeRestaurant />
    <MyFooter />
  </div>
</template>

<script>
import SubscribeRestaurant from '@/components/subscribe/SubscribeRestaurant.vue'
import MyFooter from '../../../components/footer/MyFooter.vue'

export default {
  name: 'WishList',
  data: () => {
    return {
      items: [
        {
          id: 1,
          img: '../../../public/nourriture_salade.jpeg',
          type: 'Francais . terrasse',
          name: 'Top Chef Le Bistrot',
          like: 9.8,
          code: 92300,
          price: 50
        },
        {
          id: 1,
          img: '../../../public/resto-II.jpeg',
          type: 'Francais . terrasse',
          name: 'Top Chef Le Bistrot',
          like: 9.8,
          code: 92300,
          price: 50
        },
        {
          id: 1,
          img: '../../../public/resto-III.jpeg',
          type: 'Francais . terrasse',
          name: 'Top Chef Le Bistrot',
          like: 9.8,
          code: 92300,
          price: 50
        },
        {
          id: 1,
          img: '../../../public/resto-IIII.jpeg',
          type: 'Francais . terrasse',
          name: 'Top Chef Le Bistrot',
          like: 9.8,
          code: 92300,
          price: 50
        }
      ]
    }
  },
  nameII: 'WishList',
  component: {
    SubscribeRestaurant,
    MyFooter
  }
}
</script>

<style scoped>
.user-settings {
  padding-top: 100px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  align-items: center;
  text-align: center;
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

.cd_card {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  align-items: center;
  gap: 10px;
}

.cd_card > button {
  width: 250px;
  padding: 10px;
  background: green;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 10px;
  color: white;
  font-size: 13px;
}

hr {
  width: 80%;
  border: 1px solid gainsboro;
}

.cd_card > button:hover {
  background: white;
  color: black;
}

.my_pic {
  width: 100%;
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

.container_cardI {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}

.card {
  width: 100%;
  display: flex;
  padding: 10px;
  flex-direction: column;
}

.card:hover {
  border: 1px solid gainsboro;
  transform: scale(1.04);
}

.card:hover img {
  transform: scale(1.08);
}

img {
  width: 100%;
  border-radius: 5px;
}

.box_txt {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: left;
  gap: 10px;
}

span {
  padding: 4px;
  font-size: large;
  font-weight: 700;
}

.notation {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 4px;
}

.fadeInTop {
  -webkit-animation: fadeInTop 10.2s both;
  -moz-animation: fadeInTop 10.2s both;
  -o-animation: fadeInTop 10.2s both;
  animation: fadeInTop 10.2s both;
}

@keyframes fadeInTop {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
