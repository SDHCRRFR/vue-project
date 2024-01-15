<template>
  <div class="animated fadeInLeft">
    <div class="container">
      <h2>Table coup de coeur sur Instagram !</h2>
      <div class="my_img">
        <img src="../../../background-resto.png" alt="" />
        <img src="../../../background-resto.png" alt="" />
        <img src="../../../background-resto.png" alt="" />
        <img src="../../../background-resto.png" alt="" />
        <!-- <img src="../../../public/background-resto.png" alt=""> -->
      </div>
      <div class="my_img">
        <img src="../../../background-resto.png" alt="" />
        <img src="../../../background-resto.png" alt="" />
        <img src="../../../background-resto.png" alt="" />
        <img src="../../../background-resto.png" alt="" />
      </div>
      <button type="submit">
        <a href="#">Instagram</a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialMedia',
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
  flex-direction: column;
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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  padding: 10px;
  align-items: center;
  /* justify-content: center; */
}

img {
  width: 100%;
  height: auto;
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
