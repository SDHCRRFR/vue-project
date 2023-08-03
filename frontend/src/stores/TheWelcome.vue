<script>
export default {
  data: () => {
    return {
      products: [
        {
          id: 13,
          description: 'Patek philipe',
          price: 182,
          img: '../public/resto-I.jpeg'
        },
        {
          id: 14,
          description: 'Lacoste',
          price: 523,
          img: '../public/resto-II.jpeg'
        },
        {
          id: 15,
          description: 'Versace',
          price: 837,
          img: '../public/resto-III.jpeg'
        },
        {
          id: 16,
          description: 'Gucci',
          price: 140,
          img: '../public/resto-IIII.jpeg'
        },
        {
          id: 17,
          description: 'Prada',
          price: 387,
          img: '../public/resto-v.webp'
        },
        {
          id: 18,
          description: 'Swarovskii',
          price: 299,
          img: '../public/resto-IIII.jpeg'
        },
        {
          id: 19,
          description: 'Dior',
          price: 150,
          img: '../public/resto-III.jpeg'
        },
        {
          id: 20,
          description: 'Mesh Genova',
          price: 621,
          img: '../public/resto-II.jpeg'
        },
        {
          id: 1,
          description: 'Quarz Luxe',
          price: 12,
          img: '../public/resto-I.jpeg'
        },
        {
          id: 2,
          description: 'Curren Business',
          price: 20,
          img: '../public/resto-IIII.jpeg'
        },
        {
          id: 3,
          description: 'Curren Sport',
          price: 5,
          img: '../public/resto-v.webp'
        },
        {
          id: 4,
          description: 'Jaragar Racing',
          price: 8,
          img: '../public/resto-III.jpeg'
        },
        {
          id: 5,
          description: 'Liges Hommes',
          price: 3,
          img: '../public/resto-II.jpeg'
        },
        {
          id: 6,
          description: 'Maserati Mechanical',
          price: 65,
          img: '../public/resto-I.jpeg'
        },
        {
          id: 7,
          description: 'Montre Mecanique',
          price: 25,
          img: '../public/resto-III.jpeg'
        },
        {
          id: 8,
          description: 'Brand Designer',
          price: 28,
          img: '../public/resto-II.jpeg'
        },
        {
          id: 9,
          description: 'Relogio Masculino',
          price: 4,
          img: '../public/resto-IIII.jpeg'
        },
        {
          id: 10,
          description: 'Tissot Multifunction',
          price: 29,
          img: '../public/resto-I.jpeg'
        },
        {
          id: 11,
          description: 'Audemars Piguet',
          price: 870,
          img: '../public/resto-II.jpeg'
        },
        {
          id: 12,
          description: 'Rolex',
          price: 660,
          img: '../public/resto-III.jpeg'
        }
      ],
      searchKey: '',
      liked: [],
      cart: []
    }
  },
  computed: {
    filteredList() {
      return this.products.filter((product) => {
        return product.description.toLowerCase().includes(this.searchKey.toLowerCase())
      })
    },
    getLikeCookie() {
      let cookieValue = JSON.parse($cookies.get('like'))
      cookieValue == null ? (this.liked = []) : (this.liked = cookieValue)
    },
    cartTotalAmount() {
      let total = 0
      for (let item in this.cart) {
        total = total + this.cart[item].quantity * this.cart[item].price
      }
      // this.cart.forEach((item) => {
      //   total += item.price;
      // });
      return total
    },
    itemTotalAmount() {
      let itemTotal = 0
      for (let item in this.cart) {
        itemTotal = itemTotal + this.cart[item].quantity
      }
      return itemTotal
    }
  },
  methods: {
    // setLikeCookie() {
    //   document.addEventListener('input', () => {
    //     setTimeout(() => {
    //       $cookies.set('like', JSON.stringify(this.liked))
    //     }, 300)
    //   })
    // },
    addToCart(product) {
      // si il est déja dans le tableau
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === product.id) {
          return this.cart[i].quantity++
        }
      }
      this.cart.push({
        id: product.id,
        img: product.img,
        description: product.description,
        price: product.price,
        quantity: 1
      })
    },
    cartPlusOne(product) {
      product.quantity = product.quantity + 1
    },
    cartMinusOne(product, id) {
      debugger
      if (product.quantity == 1) {
        this.cartRemoveItem(product.id)
      } else {
        product.quantity = product.quantity - 1
      }
    },
    cartRemoveItem(id) {
      const indexOfProductToRemove = this.cart.findIndex((product) => product.id === id)
      if (indexOfProductToRemove !== -1) {
        this.cart.splice(indexOfProductToRemove, 1)
      }
      // this.$delete(this.cart, id)
    }
  }
  // à chaque lancement de page récupère les cookies et injecte les a like
  // mounted: () => {
  //     this.getLikeCookie;
  // }
}
</script>

<template>
  <div class="home-container" id="home">
    <!-- search display -->
    <input
      v-model="searchKey"
      type="search"
      id="search"
      placeholder="Recherchez..."
      autocomplete="off"
    />
    <span v-if="searchKey && filteredList.length >= 1">
      {{ filteredList.length }} résultat
      <span v-if="filteredList.length >= 2">s</span>
    </span>

    <!-- cards display -->
    <div class="card-cart-container">
      <div class="card-container">
        <div v-for="product in filteredList" class="card" v-bind:key="product.id">
          <div class="image-container">
            <img v-bind:src="product.img" alt="" v-bind:id="products" />
          </div>

          <div class="card-text">
            <h3>{{ product.description }}</h3>
            <span>{{ product.price }}€</span>
          </div>

          <div class="card-icons">
            <div class="like-container">
              <input
                type="checkbox"
                name="checkbox"
                v-bind:id="product.id"
                :value="product.id"
                v-model="liked"
                @click="setLikeCookie()"
              />

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
        <div v-if="filteredList.length == []" class="no-result">
          <h3>Désolé</h3>
          <p>Aucun résultat trouvé</p>
        </div>
      </div>

      <!-- cart display -->

      <transition-group name="cart-anim">
        <div v-if="cart.length > 0" class="shopping-cart" id="shopping-cart">
          <h2>Panier</h2>

          <div class="item-group">
            <div v-for="product in cart" :key="product.id" class="item">
              <div class="img-container">
                <img v-bind:src="product.img" alt="" />
              </div>

              <div class="item-description">
                <h4>{{ product.description }}</h4>
                <p>{{ product.price }}</p>
              </div>

              <div class="item-quantity">
                <h6>quantité : {{ product.quantity }}</h6>

                <div class="cart-icons">
                  <button v-on:click="cartPlusOne(product)">
                    <i class="fa fa-plus"></i>
                  </button>
                  <button @:click="cartMinusOne(product)">
                    <i class="fa fa-minus"></i>
                  </button>
                  <button @click="cartRemoveItem(product.id)">
                    <i class="fa fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="grand-total">
            <div class="total">
              <h2>Total</h2>
              <h2>{{ cartTotalAmount }}€</h2>
            </div>
            <h6>Total articles : {{ itemTotalAmount }}</h6>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
  <transition name="cart-anim"></transition>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
/* .home-container {
  padding-top: 100px;
} */

.home-container {
  max-width: 1350px;
  margin: 0 auto;
  padding-left: 2.4rem;
}

@media screen and (max-width: 600px) {
  .home-container {
    padding-left: 0.2rem;
  }
}

.home-container h1 {
  padding-left: 0;
  padding-top: 100px;
}

.home-container #search {
  margin: 1rem 73rem 2rem 0;
  height: 2.4rem;
  padding: 0 0.5rem;
  border-radius: 5px;
  transition: 0.4s ease;
  border: 2px solid rgba(51, 51, 51, 0.835);
}

#search {
  width: 300px;
}

button {
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
}

.home-container #search:focus {
  outline: none;
  border: 2px solid #2eb7eb;
}

.home-container .card-cart-container {
  display: flex;
}

.home-container .card-cart-container .card-container {
  display: flex;
  flex-wrap: wrap;
}

.home-container .card-cart-container .card-container .card {
  margin: 0.4rem 1rem 0.4rem 0;
  background: white;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0px 6px rgba(51, 51, 51, 0.15);
  transition: 0.2s ease;
  width: 350px;
}

@media screen and (max-width: 600px) {
  .home-container .card-cart-container .card-container .card {
    margin-right: 0.2rem;
  }
}

.home-container .card-cart-container .card-container .card:hover {
  transform: scale(1.04);
}

.home-container .card-cart-container .card-container .card:hover img {
  transform: scale(1.08);
}

.home-container .card-cart-container .card-container .card:hover .card-text {
  opacity: 1;
  bottom: 2.3rem;
}

.home-container .card-cart-container .card-container .card .img-container {
  overflow: hidden;
}

.home-container .card-cart-container .card-container .card .img-container img {
  height: 210px;
  transition: 0.4s ease;
}

.home-container .card-cart-container .card-container .card .card-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 0.3rem 0.8rem; */
  position: absolute;
  bottom: 1rem;
  /* opacity: 0; */
  transition: 0.6s;
  width: 100%;
  height: 75px;
  background: linear-gradient(0deg, white 40%, transparent 100%);
}

.home-container .card-cart-container .card-container .card .card-text h3 {
  font-size: 1.2rem;
  padding-right: 4px;
}

.home-container .card-cart-container .card-container .card .card-text span {
  background: #2eb7eb;
  font-weight: bold;
  padding: 4px 6px;
  color: white;
  border-radius: 4px;
}

.home-container .card-cart-container .card-container .card .card-icons {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 40px;
}

.home-container .card-cart-container .card-container .card .card-icons i {
  padding: 3px 5px;
  transition: 0.2s;
  cursor: pointer;
}

.home-container .card-cart-container .card-container .card .card-icons i:hover {
  animation: scaler 0.8s infinite linear;
}

img {
  height: 250px;
  /* width: 400px; */
}

.home-container .card-cart-container .card-container .card .card-icons .fa-heart:hover {
  color: rgba(251, 38, 38, 0.5);
}

.home-container .card-cart-container .card-container .card .card-icons .fa-shopping-cart {
  font-size: 16px;
  color: #2eb7eb;
}

.home-container .card-cart-container .card-container .card .card-icons .fa-shopping-cart:hover {
  filter: brightness(125%);
}

.home-container .card-cart-container .card-container .card .card-icons .like-container input {
  display: none;
}

.home-container
  .card-cart-container
  .card-container
  .card
  .card-icons
  .like-container
  input:checked
  + label
  i {
  color: #fb2626;
  animation: heart 1.3s forwards ease;
}

@keyframes heart {
  0% {
    filter: hue-rotate(0deg);
    transform: scale(1);
  }

  50% {
    filter: hue-rotate(-270deg);
    transform: scale(1.3);
  }

  100% {
    filter: hue-rotate(0deg);
    transform: scale(1);
  }
}

.home-container .card-cart-container .card-container .no-result {
  margin: 0 4rem 0 0.4rem;
}

.home-container .shopping-cart {
  transition: 0.4s ease;
  background: #292b2a;
  color: white;
  padding: 1.4rem;
  border-radius: 4px;
  min-width: 400px;
  box-shadow: 0 1px 6px rgba(51, 51, 51, 0.25);
  height: 100%;
  /* margin: -8rem 2.4rem 0 0; */
}

.home-container .shopping-cart h2 {
  margin-bottom: 1rem;
  color: white;
  text-align: center;
}

.home-container .shopping-cart .item-group {
  max-height: 400px;
  /* overflow-y: scroll; */
  overflow-x: hidden;
  padding-right: 6px;
}

.home-container .shopping-cart .item-group::-webkit-scrollbar {
  display: none;
  overflow-y: hidden;
}

.home-container .shopping-cart .item-group .item {
  margin-bottom: 2.4rem;
  position: relative;
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 60% 40%;
  grid-template-areas: 'a b' 'a c';
}

.home-container .shopping-cart .item-group .item:after {
  content: '';
  position: absolute;
  height: 1px;
  width: 100%;
  background: rgba(85, 85, 85, 0.2);
  left: 50%;
  bottom: -22px;
  transform: translateX(-50%);
}

.home-container .shopping-cart .item-group .item .img-container {
  grid-area: a;
  display: flex;
  align-items: center;
}

.home-container .shopping-cart .item-group .item .img-container img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  transform: scale(0);
  animation: img-scale 1s forwards;
}

@keyframes img-scale {
  to {
    transform: scale(1);
  }
}

.home-container .shopping-cart .item-group .item .item-description {
  grid-area: b;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 10px;
}

.home-container .shopping-cart .item-group .item .item-description h4 {
  margin: 0 0.9rem 0.9rem 0;
  background: rgba(51, 51, 51, 0.1);
  padding: 3px 5px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(51, 51, 51, 0.15);
  transform: scaleX(0);
  transform-origin: left;
  animation: img-scale 1s forwards;
}

@keyframes img-scale {
  to {
    transform: scaleX(1);
  }
}

.home-container .shopping-cart .item-group .item .item-description p {
  transform: translateY(3px);
}

.home-container .shopping-cart .item-group .item .item-quantity {
  grid-area: c;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
}

.home-container .shopping-cart .item-group .item .item-quantity h6 {
  color: whitesmoke;
}

.home-container .shopping-cart .item-group .item .item-quantity .cart-icons {
  display: flex;
  justify-content: space-between;
  width: 30%;
  margin-left: 10px;
}

.home-container .shopping-cart .item-group .item .item-quantity .cart-icons button {
  transform: scaleY(0);
}

.home-container .shopping-cart .item-group .item .item-quantity .cart-icons button:nth-child(1) {
  animation: icon 0.5s ease forwards;
  animation-delay: 0.2s;
}

@keyframes icon {
  to {
    transform: scaleY(1);
  }
}

.home-container .shopping-cart .item-group .item .item-quantity .cart-icons button:nth-child(2) {
  animation: icon 0.5s ease forwards;
  animation-delay: 0.4s;
}

@keyframes icon {
  to {
    transform: scaleY(1);
  }
}

.home-container .shopping-cart .item-group .item .item-quantity .cart-icons button:nth-child(3) {
  animation: icon 0.5s ease forwards;
  animation-delay: 0.6s;
}

@keyframes icon {
  to {
    transform: scaleY(1);
  }
}

.home-container .shopping-cart .item-group .item .item-quantity .cart-icons i {
  font-size: 0.55rem;
  padding: 5px;
  margin: 0 2px;
  background: white;
  border-radius: 50%;
  color: #2eb7eb;
  transition: 0.3s ease;
}

.home-container .shopping-cart .item-group .item .item-quantity .cart-icons i:hover {
  background: #222;
  color: #2eb7eb;
}

.home-container .shopping-cart .grand-total h6 {
  color: white;
}

.home-container .shopping-cart .grand-total .total {
  display: flex;
  justify-content: space-between;
  margin: 1.4rem 0 0.4rem;
}

.home-container .shopping-cart .grand-total .total h2 {
  color: white;
  margin-bottom: 0;
}

.home-container .shopping-cart .order-button {
  margin: 1rem auto 0;
  width: 100%;
  text-align: center;
}

.home-container .shopping-cart .order-button button {
  background: white;
  padding: 0.8rem;
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(51, 51, 51, 0.2);
  transition: all 0.2s ease;
  letter-spacing: 1px;
}

.home-container .shopping-cart .order-button button:hover {
  background: black;
  color: #2eb7eb;
  font-weight: bold;
  letter-spacing: 6px;
  animation: scaler 1.5s infinite linear;
}

.home-container .shopping-cart .order-button button:active {
  transform: scale(0.92);
}

.home-container .cart-anim-enter-active,
.home-container .cart-anim-leave-active {
  transition: 1.3s cubic-bezier(0.23, 0.66, 0.08, 0.93);
  transform: translateX(0px);
}

.home-container .cart-anim-enter,
.home-container .cart-anim-leave-to {
  opacity: 0;
  transform: translateX(400px);
}

.home-container .item-anim-enter-active,
.home-container .item-anim-leave-active {
  opacity: 1;
  transition: 0.8s;
}

.home-container .item-anim-enter,
.home-container .item-anim-leave-to {
  opacity: 0;
  transform: translateY(100px);
  transition: 0.7s;
}

@keyframes scaler {
  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}
</style>
