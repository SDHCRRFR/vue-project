<template lang="">
    <div>
        <nav>
    <div class="nav-container">
      <div id="logo">
        <router-link to="/">
          <img src="../src/assets/logosaid.svg" alt="logo" />
        </router-link>
      </div>
      <ul id="icons">
        <li>
          <router-link to="/wish-list">
            <i class="fas fa-heart"></i>
            <span id="nav-not"></span>
          </router-link>
        </li>

        <li>
          <router-link to="/shopping-cart">
            <i class="fa-solid fa-utensils"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/shopping-cart">
            <i class="fa-solid fa-gear"></i>                 </router-link>
        </li>

        <li>
          <router-link to="/about">
            <i class="fas fa-address-card"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/login">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
    </div>
</template>

<script>
export default {
    name: 'AdminHeader'
}
</script>

<style scoped>
    /* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */

ul,
li {
  list-style: none;
}

a,
a:visited {
  color: #333;
}

nav {
  padding: 0.8rem 2.4rem;
  background: rgba(255, 255, 255, 0.97);
  position: fixed;
  width: 99%;
  z-index: 2;
  box-shadow: 0 2px 4px -3px rgba(51, 51, 51, 0.2);
}

nav .nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1450px;
  margin: 0 auto;
}

nav .nav-container #logo {
  height: 32px;
  width: 66%;
}

nav .nav-container #logo img {
  height: 100%;
}

nav .nav-container #icons {
  display: flex;
  font-size: 24px;
  width: 34%;
  justify-content: flex-end;
}

nav .nav-container #icons li {
  margin-left: calc(35% + 8px);
}

nav .nav-container #icons li a {
  position: relative;
}

nav .nav-container #icons #nav-not {
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: #ff2929;
  position: absolute;
  visibility: hidden;
  opacity: 1;
  transition: 0.6s;
  transform: translate(-4px, -1px);
}

nav .nav-container #icons i {
  transition: 0.25s;
  cursor: pointer;
}

nav .nav-container #icons i:hover {
  color: rgba(34, 34, 34, 0.65);
}

</style>