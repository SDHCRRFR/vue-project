<template>
  <div class="user-settings">
    <div class="fadeInTop" id="container">
      <h1>Sélection Table de coeur</h1>
      <div class="container_card">
        <div class="card" v-for="item in items" v-bind:key="item.index">
          <div class="box_img">
            <img v-bind:src="item.img" />
          </div>
          <div class="box_txt">
            <p>{{ item.type }}</p>
            <div class="notation">
              <h2>{{ item.name }}</h2>
              <span>{{ item.like }} <i class="fa-solid fa-star" style="color: #ffff00;"></i></span>
            </div>
            <p>{{ item.code }}</p>
            <p>prix moyen: {{ item.price }} $</p>
          </div>
        </div>
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
          name: 'La brochette',
          like: 7.0,
          code: 75015,
          price: 30
        },
        {
          id: 1,
          img: '../../../public/resto-II.jpeg',
          type: 'Chinois . intérieur',
          name: 'Le Bistrot',
          like: 9.8,
          code: 75018,
          price: 50
        },
        {
          id: 1,
          img: '../../../public/resto-III.jpeg',
          type: 'Indien . terrasse',
          name: "O'tacos",
          like: 5.5,
          code: 13014,
          price: 37
        },
        {
          id: 1,
          img: '../../../public/resto-IIII.jpeg',
          type: 'Francais . terrasse',
          name: 'Le Baobab',
          like: 4.5,
          code: 92300,
          price: 25
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
    transform: translateY(250px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
