<template>
  <div class="animated fadeInLeft">
    <h2>Table coup de coeur sur Instagram !</h2>
    <div class="container">
      <div v-for="item in items" :key="item.id" class="my_img">
        <div class="test">
          <img v-bind:key="item.id" :src="item.img" alt="" />
        </div>
      </div>
    </div>
    <button type="submit">
      <a href="#">Instagram</a>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SocialMedia',
  data: () => {
    return {
      items: [
        {
          id: 1,
          img: '../../../pexel.webp'
        },
        {
          id: 2,
          img: '../../../pexelsI.jpeg'
        },
        {
          id: 3,
          img: '../../../pexelsI.jpeg'
        },
        {
          id: 4,
          img: '../../../pexel.webp'
        }
      ]
    }
  }
}
</script>

<style scoped>
.animated {
  background: rgba(229, 228, 228, 0.911);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
}

.container {
  width: 100%;
  /* max-width: 1200px; */
  margin: 0 auto;
  align-items: center;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
}

h2 {
  color: white;
  text-align: center;
}

.fadeInLeft {
  animation: fadeInLeft 1s both;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.my_img {
  width: 80%;
  display: flex;
  /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
  gap: 10px;
  padding: 10px;
  align-items: center;
  /* justify-content: center; */
}

img {
  width: 100%;
}

button {
  margin-top: 20px;
  padding: 10px;
  background: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
}

button a {
  color: white;
  text-decoration: none;
}

button:hover {
  background: white;
  color: black;
}
</style>
