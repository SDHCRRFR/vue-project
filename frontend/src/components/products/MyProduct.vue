<template>
  <div class="user-settings">
    <div class="fadeInTop" id="container">
      <h1>Sélection Table de coeur</h1>
      <div class="container_card">
        <!-- ============================================================================= -->
        <div class="card" v-for="item in items" v-bind:key="item.index">
          <router-link to="/restaurant/12">
            <div class="box_img">
              <img v-bind:src="item.img" />
            </div>
            <div class="box_txt">
              <p>{{ item.type }}</p>
              <div class="notation">
                <h2>{{ item.name }}</h2>
                <span>{{ item.like }} <i class="fa-solid fa-star" style="color: #ffff00"></i></span>
              </div>
              <p>{{ item.code }}</p>
              <div class="price_block">
                <p>prix moyen: {{ item.price }} €</p>
              </div>
            </div>
          </router-link>
        </div>
        <!-- ================================================================================ -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyProduct',
  data: () => {
    return {
      items: [
        {
          id: 1,
          img: '../../../public/nourriture_salade.jpeg',
          type: 'Francais . terrasse',
          name: 'Brochette',
          like: 7.0,
          code: 75015,
          price: 30
        },
        {
          id: 2,
          img: '../../../public/resto-II.jpeg',
          type: 'Chinois . intérieur',
          name: 'Le Bistrot',
          like: 9.8,
          code: 75018,
          price: 50
        },
        {
          id: 3,
          img: '../../../public/resto-III.jpeg',
          type: 'Indien . terrasse',
          name: "O'tacos",
          like: 5.5,
          code: 13014,
          price: 37
        },
        {
          id: 4,
          img: '../../../public/resto-IIII.jpeg',
          type: 'Indien . terrasse',
          name: 'Nabab',
          like: 5.5,
          code: 13014,
          price: 37
        }
      ]
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media screen and (max-width: 900px) {
  h2 {
    font-size: 20px;
  }
}

@media screen and (max-width: 750px) {
  .container_card {
    width: 80vw;
  }

  h2 {
    font-size: 18px;
  }

  .card {
    height: 26vmin;
    width: 20vmin;
    font-size: 22px;
  }
}

@media screen and (max-width: 580px) {
  .container_card {
    width: 80vw;
    flex-wrap: wrap;
    gap: 500px;
  }

  h2 {
    font-size: 15px;
  }
  .card {
    height: 80vmin;
    width: calc(50% - 40px);
    font-size: 15px;
  }
}
@media screen and (max-width: 380px) {
  .container_card {
    gap: 500px;
  }

  .card {
    height: 25vmin;
  }
}

.user-settings {
  width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#container {
  width: 80%;
  display: flex;
  text-align: left;
  gap: 30px;
  flex-direction: column;
}

.container_card {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}

.card {
  width: 100%;
  display: flex;
  padding: 20px;
  flex-direction: column;
}

.price_block {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.card:hover {
  border: 1px solid gainsboro;
  transform: scale(1.04);
}

a {
  text-decoration: none;
  color: black;
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
    transform: translateY(250px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
