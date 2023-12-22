<template>
  <div class="animated fadeInLeft">
    <div class="container">
      <h2>Table coup de coeur sur Instagram !</h2>
      <div class="my_img">
        <img src="../../../public/pexelsI.jpeg" alt="" />
        <img src="../../../public/pexelsII.jpeg" alt="" />
        <img src="../../../public/pexelsI.jpeg" alt="" />
        <img src="../../../public/pexelsI.jpeg" alt="" />
        <img src="../../../public/pexelsI.jpeg" alt="" />
      </div>
      <div class="my_img">
        <img src="../../../public/pexelsI.jpeg" alt="" />
        <img src="../../../public/pexelsII.jpeg" alt="" />
        <img src="../../../public/pexelsIII.jpeg" alt="" />
        <img src="../../../public/pexelsI.jpeg" alt="" />
        <img src="../../../public/pexelsI.jpeg" alt="" />
      </div>
      <button type="submit">
        <a href="#">Instagram </a>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SocialMedia'
}
</script>
<style scoped>
.animated {
  background: gainsboro;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 100%;
}

.container {
  align-items: center;
  width: 90%;
  display: flex;
  flex-direction: column;
  height: 80vh;
  /* background: pink; */
}

h2 {
  color: white;
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

.my_img {
  width: 80%;
  padding: 10px;
  gap: 10px;
  display: flex;
}

img {
  width: 200px;
  height: 200px;
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
</style>
