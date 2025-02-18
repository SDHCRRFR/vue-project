<template>
  <div class="my-main">
    <div class="animated" ref="fadeInLeft">
      <router-link to="/about">
        <img src="../../../public/pexelsIII.jpeg" alt="About Us" />
        <h2>A propos de nous</h2>
      </router-link>
    </div>
    <div class="animated" ref="fadeInTop">
      <router-link to="/shopping-cart">
        <img src="../../../public/pexelsII.jpeg" alt="Restaurants" />
        <h2>Restaurants</h2>
      </router-link>
    </div>
    <div class="animated" id="tst" ref="fadeInRight">
      <router-link to="/restaurateur/boutique">
        <img src="../../../public/login.jpeg" alt="Add Restaurant" />
        <h2>Ajoutez mon restaurant</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const elements = [
        { ref: this.$refs.fadeInLeft, animationClass: 'fadeInLeft' },
        { ref: this.$refs.fadeInTop, animationClass: 'fadeInTop' },
        { ref: this.$refs.fadeInRight, animationClass: 'fadeInRight' }
      ]

      elements.forEach((element) => {
        const rect = element.ref.getBoundingClientRect()
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          element.ref.classList.add(element.animationClass)
        }
      })
    }
  }
}
</script>

<style scoped>
.my-main {
  width: 100%;
  min-height: 50vh;
  display: flex;
  font-family: 'Poppins', sans-serif;
  align-items: center;
  margin-top: 70px;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;
}

a {
  text-decoration: none;
}

.my-main .my-img {
  flex-direction: row;
}

@media screen and (max-width: 1024px) {
  .my-main {
    width: 85vw;
  }

  .animated {
    height: 26vmin;
    width: 26vmin;
    font-size: 12px;
  }
}

@media screen and (max-width: 768px) {
  .my-main {
    width: 90vw;
    flex-wrap: wrap;
    gap: 50px;
  }

  .animated {
    height: 30vmin;
    width: calc(50% - 40px);
    font-size: 14px;
  }
}

@media screen and (max-width: 480px) {
  .my-main {
    gap: 35px;
  }

  .animated {
    width: 100%;
    height: 25vmin;
    font-size: 8px;
  }
}

.my-img {
  width: 100%;
  height: 60vh;
  padding: 0px 30px 0px 30px;
  gap: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
}

img {
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
}

h2 {
  text-decoration: none;
  color: black;
}

.animated {
  opacity: 0;
  align-items: center;
  text-align: center;
  flex-direction: columns;
  height: 60vh;
  width: 80%;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.fadeInLeft {
  animation: fadeInLeft 5.2s both;
}

.fadeInTop {
  animation: fadeInTop 5.2s both;
}

.fadeInRight {
  animation: fadeInRight 5.2s both;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-150px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInTop {
  0% {
    opacity: 0;
    transform: translateY(-150px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(150px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
