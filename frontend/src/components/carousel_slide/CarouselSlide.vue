<template>
  <!-- caroussel -->
  <article class="CarouselSlide">
    <i
      class="fa-sharp fa-solid fa-circle-arrow-left CarousselSlide__left"
      @click="previousSection"
    ></i>
    <!--cadre-->
    <div class="CarouselSlide__frame">
      <div
        class="CarouselSlide__content CarouselSlide__content-previous CarouselSlide__content-next"
      >
        <section class="CarouselSlide__section">
          <div class="CarouselSlide__section-img">
            <img src="../../../public/pexel.webp" alt="" />
          </div>
          <div class="CarouselSlide__section-content">
            <h3 class="CarouselSlide__section-title">La sérénité</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias natus ratione cum
              ullam aliquid atque eum alias recusandae doloribus, eos aperiam id voluptatem harum,
              voluptas dolorem repellat architecto est blanditiis. Asperiores odio atque fugit
              provident aut! Optio asperiores quaerat quis alias facilis eius nostrum accusantium
              deleniti voluptate cumque unde ab atque, quibusdam, tempora quidem debitis autem.
              Quidem cum molestiae officia? Amet voluptas, ut ratione esse nobis natus soluta
              pariatur delectus cumque cupiditate eligendi eos ex ipsa quas animi numquam, alias nam
              recusandae optio quasi? Voluptatem perferendis aut iure temporibus nesciunt!
            </p>
            <router-link to="/authentification">
              <ButtonPage color="terra" size="s" class="CarousselSlide_button">
                Il suffit de te connecter
              </ButtonPage>
            </router-link>
          </div>
        </section>
        <section class="CarouselSlide__section">
          <div class="CarouselSlide__section-img">
            <img src="../../../public/pexel.webp" alt="" />
          </div>
          <div class="CarouselSlide__section-content">
            <h3 class="CarouselSlide__section-title">Les rencontres et le partage</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quidem impedit
              velit eos consectetur deleniti iure assumenda ipsa beatae totam? Veniam molestiae
              molestias dignissimos dolor, doloremque ab rerum ex repellat. Nihil itaque deserunt
              officia, cupiditate ipsum dicta culpa aliquid voluptate laborum, est, possimus
              accusantium porro! Molestias, vero est fugiat repellat odit eveniet, perferendis,
              earum consequuntur consequatur qui voluptatibus laborum facilis.
            </p>
            <router-link to="/authentification">
              <ButtonPage color="terra" size="s" class="CarousselSlide_button">
                Il suffit de te connecter
              </ButtonPage>
            </router-link>
          </div>
        </section>
        <section class="CarouselSlide__section">
          <div class="CarouselSlide__section-img">
            <img src="../../../public/pexelsIII.jpeg" alt="" />
          </div>
          <div class="CarouselSlide__section-content">
            <h3 class="CarouselSlide__section-title">Apprendre de notre expertise</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae necessitatibus, soluta
              dolorem ducimus, explicabo doloribus error sequi, atque quidem cum animi. Perspiciatis
              fuga, pariatur unde officia possimus mollitia tempora soluta.
              <a href="#Gmap" class="CarousselSlide__a">carte</a> avec le badge "<i
                class="fa-solid fa-user-doctor"
              ></i
              >".
            </p>
            <router-link to="/blog">
              <ButtonPage color="terra" size="s" class="CarousselSlide_button">
                Visite notre blog
              </ButtonPage>
            </router-link>
          </div>
        </section>
      </div>
    </div>
    <i
      class="fa-sharp fa-solid fa-circle-arrow-right CarousselSlide__right"
      @click="nextSection"
    ></i>
  </article>
</template>
<script>
import ButtonPage from '../ButtonPage/ButtonPage.vue'
export default {
  name: 'CarouselSlide',
  components: {
    ButtonPage
  },
  data() {
    return {
      previous: false,
      next: true,
      numImage: 0
    }
  },
  props: {},

  methods: {
    contentPrevious() {
      let left = document.querySelector('.CarouselSlide__content-previous ')
      left.style.transform = `translateX(-${this.numImage * 675}px)`
    },
    contentNext() {
      let right = document.querySelector('.CarouselSlide__content-next')
      right.style.transform = `translateX(${this.numImage * 675}px)`
    },
    previousSection() {
      console.log('hola')
      if (this.numImage == 2) {
        this.numImage = 0
      } else {
        this.numImage++
      }
      console.log(this.numImage)
      // this.previous = true
      this.contentPrevious()
    },
    nextSection() {
      console.log('coucou')
      if (this.numImage == -2) {
        this.numImage = 0
      } else {
        this.numImage--
      }
      console.log(this.numImage)
      this.contentNext()
    }
  }
}
</script>
<style scoped>
:root {
  --caroussel: 0;
}
.CarouselSlide {
  margin: auto;
  width: 100%;
  max-width: 675px;
  display: flex;
  column-gap: 1rem;
}

.CarouselSlide__content {
  display: flex;
  z-index: 1;
}

.CarouselSlide__section {
  display: flex;
  width: 675px;
  column-gap: 1rem;
}

.CarouselSlide__section-img {
  width: 33%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.CarouselSlide__section-img img {
  width: 100%;
}

.CarouselSlide__section-content {
  width: 55%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.CarousselSlide__a {
  text-decoration: none;
  color: black;
}

.CarousselSlide__a:hover {
  color: var(--verde);
}

.CarouselSlide__frame {
  overflow: hidden;
  display: flex;
  position: relative;
  z-index: 1;
  width: 675px;
}

.CarousselSlide__left,
.CarousselSlide__right {
  color: var(--tierra);
  align-self: center;
}

.CarousselSlide__left:hover,
.CarousselSlide__right:hover {
  color: var(--verde);
}

@media screen and (max-width: 767px) {
  .CarouselSlide__section-img {
    width: 30%;
    margin: auto;
  }

  .fa-sharp {
    display: none;
  }

  .CarouselSlide__content {
    flex-direction: column;
  }

  .CarouselSlide__section {
    flex-direction: column;
    width: 100vw;
    margin-bottom: 10%;
    align-items: center;
  }

  .CarouselSlide__section-content {
    width: 100vw;
  }

  .CarousselSlide_button {
    width: 100vw;
  }

  .CarouselSlide__section-title {
    text-align: center;
  }
}
</style>
