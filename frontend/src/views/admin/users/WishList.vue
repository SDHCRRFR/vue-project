<template>
  <div class="user-settings">
    <!-- <div class="container_img"> -->
      <div class="carousel-inner">
        <carousel @next="next"
                  @prev="prev"
        >
          <carousel-slide v-for="(slide, index) in slides"
                                 :key="slide"
                                 :index="index"
                                 :visibleSlide="visibleSlide"
                                 >
            <img :src="slide"/>
          </carousel-slide>
        </carousel>
      </div>
      <!-- <img src="../../../../public/background-crimson.jpeg" alt="" /> -->
    <!-- </div> -->

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
    <MyFooter />
  </div>
</template>

<script>
import Carousel from '../../../components/carousel/Carousel.vue'
import CarouselSlide from '../../../components/carousel/CarouselSlide.vue'
import MyFooter from '../../../components/footer/MyFooter.vue'

export default {
  name: 'WishList',
  data: () => ({
    slides: [
      '../../../../public/resto-I.jpeg',
      '../../../../public/resto-II.jpeg',
      '../../../../public/resto-III.jpeg',
      '../../../../public/resto-IIII.jpeg',
      '../../../../public/resto-v.webp'
    ],
    visibleSlide: 0,
  }
  ),
  computed: {
      slidesLen() {
        return this.slides.length;
      }
  },
  methods: {
      next() {
          if(this.visibleSlide >= this.slides.length - 1) {
            this.visibleSlide = 0;
          }else {
            this.visibleSlide++;
          }
      },
      prev() {
        if(this.visibleSlide <= 0) {
            this.visibleSlide = this.slidesLen - 1;
          }else {
            this.visibleSlide--;
          }
      }
  },
  component: {
       Carousel, 
       CarouselSlide, 
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

.carousel-inner {
  display: flex;
  justify-content: center;
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
</style>
