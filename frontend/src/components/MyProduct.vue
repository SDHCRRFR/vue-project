<template>
  <div class="component">
    <h3>{{ title }}</h3>
    <div class="card-container">
      <div v-for="product in products" class="card" v-bind:key="product.id">
        <div class="image-container">
          <img v-bind:src="product.img" alt="" v-bind:id="products" />
        </div>

        <!-- rajout ici -->
        <div class="sale">
          <h4>Les réduc {{ product.promo }} %</h4>
        </div>

        <div class="card-text">
          <h3>{{ product.description }}</h3>
          <span>{{ product.price }} €</span>
        </div>

        <!-- rajout ici -->

        <div class="card-icons">
          <div class="like-container">
            <label v-bind:for="product.id">
              <i class="fas fa-heart"></i>
            </label>
          </div>

          <div class="add-to-cart">
            <button v-on:click="addToCart(product)">
              <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- no result message -->
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      title: 'Notre séléction',
      products: [
        {
          id: 1,
          description: 'Le baobab',
          price: 3.99,
          img: '../../public/resto-I.jpeg',
          promo: 30
        },
        {
          id: 2,
          description: 'Le baobab',
          price: 3.99,
          img: '../../public/resto-II.jpeg',
          promo: 25
        },
        {
          id: 3,
          description: 'Le baobab',
          price: 3.99,
          img: '../../public/resto-III.jpeg',
          promo: 20
        }
      ]
    }
  }
}
</script>

<style scoped>
.component {
  width: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  margin-top: 50px;
}

.sale {
  position: absolute;
  width: 200px;
  align-items: center;
  display: flex;
  text-align: center;
  height: 30px;
  background: black;
}

h4 {
  color: white;
}

button {
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
}

.image-container {
  display: flex;
  width: 100%;
  min-height: 30vh;
  flex-direction: column;
  padding: 10px;
}

img {
  padding: 10px;
  gap: 10px;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px 20px 0px 0px;
  background: gainsboro;
  padding: 10px;
  border-bottom: 18px solid black;
}

.card:hover {
  animation: scaler 0.8s infinite linear;
  transition: 0.2s ease;
}

.card-text {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 80%;
}

.card-icons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 80%;
}
.card-container {
  display: flex;
  flex-direction: row;
  /* background: gainsboro; */
  justify-content: space-around;
  padding: 10px;
  gap: 10px;
  width: 80%;
}

span {
  /* color: white; */
  font-size: 25px;
}

img {
  height: 250px;
  border-radius: 20px 20px 0px 0px;
  /* width: 400px; */
}
</style>
