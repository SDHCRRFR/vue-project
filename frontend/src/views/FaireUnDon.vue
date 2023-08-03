<template>
  <div class="don_container">
    <div class="don_txt">
      <h1>Faire un don</h1>
      <p>Cliquez ici si vous êtes une entreprise || Cliquez ici si vous êtes une association</p>
    </div>
    <div class="container_don">
      <!-- <div class="mon_don">
        <h2>Mon don</h2>
      </div> -->
      <div v-for="item in cards" :key="item.id" class="container_img">
        <img v-bind:src="item.img" alt="" v-bind:key="item.id" />
      </div>
      <div class="card_txt" v-for="item in cards" :key="item.id">
        <span>{{ item.date_creation }}</span>
        <h3>{{ item.title }}</h3>
        <button>Faire un don</button>
      </div>
    </div>
    <div class="description">
      <div class="box">
        <h4>A quoi ont servis vos dons</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellendus quae numquam
          saepe modi. Tenetur voluptatibus natus dolore magnam, blanditiis saepe adipisci dolorum
          voluptatum sint nostrum ex consectetur, consequuntur dolor. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Beatae iure corrupti dignissimos dolor ea ex alias accusamus
          deleniti quos facilis inventore nulla, vero aspernatur sapiente possimus quas ipsa rem
          quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In consequuntur velit
          vero minima fugiat, esse sed eos facere eum maiores similique natus sunt quae perferendis!
          Maiores error nesciunt nulla quae! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quidem dignissimos nisi eligendi perferendis cumque accusantium labore doloremque
          facere ab nesciunt magni qui eveniet, quae sit voluptatem enim. Temporibus, sequi
          exercitationem!
        </p>
      </div>
      <div class="box">
        <h4>A quoi ont servis vos dons</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellendus quae numquam
          saepe modi. Tenetur voluptatibus natus dolore magnam, blanditiis saepe adipisci dolorum
          voluptatum sint nostrum ex consectetur, consequuntur dolor. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Beatae iure corrupti dignissimos dolor ea ex alias accusamus
          deleniti quos facilis inventore nulla, vero aspernatur sapiente possimus quas ipsa rem
          quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In consequuntur velit
          vero minima fugiat, esse sed eos facere eum maiores similique natus sunt quae perferendis!
          Maiores error nesciunt nulla quae! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quidem dignissimos nisi eligendi perferendis cumque accusantium labore doloremque
          facere ab nesciunt magni qui eveniet, quae sit voluptatem enim. Temporibus, sequi
          exercitationem!
        </p>
        <img src="../../public//ressource.png" alt="" class="ressou" />
      </div>
      <div class="box">
        <h4>A quoi ont servis vos dons</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellendus quae numquam
          saepe modi. Tenetur voluptatibus natus dolore magnam, blanditiis saepe adipisci dolorum
          voluptatum sint nostrum ex consectetur, consequuntur dolor. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Beatae iure corrupti dignissimos dolor ea ex alias accusamus
          deleniti quos facilis inventore nulla, vero aspernatur sapiente possimus quas ipsa rem
          quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In consequuntur velit
          vero minima fugiat, esse sed eos facere eum maiores similique natus sunt quae perferendis!
          Maiores error nesciunt nulla quae! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quidem dignissimos nisi eligendi perferendis cumque accusantium labore doloremque
          facere ab nesciunt magni qui eveniet, quae sit voluptatem enim. Temporibus, sequi
          exercitationem!
        </p>
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
  min-height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background: url(../../public/legume.jpeg);
}

.ressou {
  width: 240px;
  /* height: ; */
}

.container_don {
  width: 30%;
  height: 80vh;
  display: flex;
  padding: 30px;
  gap: 10px;
  margin: 10px;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background: white;
  border-radius: 20px 20px 20px 20px;
  /* border-bottom: 20px solid black; */
}

/* .mon_don {
  width: 100%;
  height: 8vh;
  background: pink;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 10px 10px 0px 0px;
} */

.description {
  width: 100%;
  min-height: 60vh;
  background: gainsboro;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.box {
  padding-top: 20px;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  text-align: center;
  width: 50%;
}

.don_txt {
  width: 80%;
  display: flex;
  flex-direction: column;
  height: 20vh;
  padding: 10px;
  gap: 5px;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: 30px;
  background: rgb(255, 88, 222);
}

h1 {
  color: white;
}

p {
  color: white;
}

img {
  /* height: 250px; */
  border-radius: 20px;
  width: 100%;
}
</style>
