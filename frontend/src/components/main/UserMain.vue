<template>
  <div class="user-main">
    <div class="animated fadeInLeft">
      <a href="#impact">
        <img src="../../../public/background-resto.png" />
        <h2>A propos de nous</h2>
      </a>
    </div>
    <div class="animated fadeInTop">
      <router-link to="/user/shop">
        <img src="../../../public/pexelsI.jpeg" />
        <h2>Restaurants</h2>
      </router-link>
    </div>
    <div class="animated fadeInRight">
      <router-link to="/">
        <img src="../../../public/pexel.webp" />
        <h2>Ajoutez mon restaurant</h2>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.user-main {
  width: 100%;
  min-height: 50vh;
  display: flex;
  font-family: 'Poppins', sans-serif;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;
}

a {
  text-decoration: none;
}

.user-main .user-img {
  flex-direction: row;
}

@media screen and (max-width: 1024px) {
  .user-main {
    width: 85vw;
  }

  .animated {
    height: 26vmin;
    width: 26vmin;
    font-size: 12px;
  }
}

@media screen and (max-width: 768px) {
  .user-main {
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
  .user-main {
    gap: 35px;
  }

  .animated {
    width: 100%;
    height: 25vmin;
    font-size: 8px;
  }
}

.user-img {
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
  align-items: center;
  text-align: center;
  flex-direction: columns;
  height: 60vh;
  width: 80%;
}

.fadeInLeft {
  -webkit-animation: fadeInLeft 5.2s both;
  -moz-animation: fadeInLeft 5.2s both;
  -o-animation: fadeInLeft 5.2s both;
  animation: fadeInLeft 5.2s both;
}

@-webkit-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
  }
}

@-moz-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -moz-transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    -moz-transform: translateX(0);
  }
}

@-o-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -o-transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    -o-transform: translateX(0);
  }
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

.fadeInTop {
  -webkit-animation: fadeInTop 5.2s both;
  -moz-animation: fadeInTop 5.2s both;
  -o-animation: fadeInTop 5.2s both;
  animation: fadeInTop 5.2s both;
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
.fadeInRight {
  -webkit-animation: fadeInRight 5.2s both;
  -moz-animation: fadeInRight 5.2s both;
  -o-animation: fadeInRight 5.2s both;
  animation: fadeInRight 5.2s both;
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
