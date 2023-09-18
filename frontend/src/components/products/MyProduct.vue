<template>
  <div class="component">
    <h3>{{ title }}</h3>
    <div class="card-container">
      <div v-for="product in products" class="card" v-bind:key="product.id">
        <div class="image-container">
          <h3>{{ product.titre }}</h3>
          <img v-bind:src="product.img" alt="" v-bind:id="products" />
          <p>
            Vnez découvrir nos saveurs, avec comme ambition la chaleur humaine au coeur de la table.
          </p>
        </div>
        <div class="sale">
          <h4>Les réduc {{ product.promo }} %</h4>
        </div>
        <div class="card-text">
          <h3>{{ product.description }}</h3>
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
      title: 'Notre séléction',
      products: [
        {
          id: 1,
          titre: 'Montreuil',
          img: '../../public/resto-I.jpeg'
        },
        {
          id: 2,
          titre: 'Aulnay-Sous-Bois',
          img: '../../public/resto-II.jpeg'
        },
        {
          id: 3,
          titre: 'Le Bourget',
          img: '../../public/resto-III.jpeg'
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
  align-items: center;
  min-height: 30vh;
  flex-direction: column;
  /* padding: 10px; */
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
  border-radius: 20px;
  /* background: gainsboro; */
  padding: 10px;
  /* border-bottom: 18px solid black; */
  max-height: 55vh;
}

.card:hover {
  animation: scaler 0.8s infinite linear;
  transition: 0.2s ease;
}

.card-text {
  display: flex;
  align-items: center;
  justify-content: center;
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
  border-radius: 20px;
  /* width: 400px; */
}
</style>
