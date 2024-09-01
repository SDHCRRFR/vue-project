<template>
  <nav>
    <div class="nav-container">
      <div id="logo">
        <router-link to="/">
          <img src="../../assets/logosaid.svg" alt="logo" title="accueil" />
        </router-link>
      </div>
      <ul id="icons">
        <li>
          <router-link to="/shopping-cart">
            <i class="fa-solid fa-utensils" title="restos"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            <i class="fas fa-address-card" title="à propos"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/login" title="connexion">
            <i class="far fa-user"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'PublicNav'
}
</script>

<style scoped>
ul,
li {
  list-style: none;
}

a,
a:visited {
  color: #333;
}

nav {
  padding: 0rem 2.4rem;
  background: #fff;
  position: fixed;
  width: 100%;
  z-index: 2;
  box-shadow: 0 2px 4px -3px rgba(51, 51, 51, 0.2);
}

nav .nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
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
  width: 20%;
  justify-content: space-around;
}

nav .nav-container #icons i {
  transition: 0.25s;
  cursor: pointer;
}

nav .nav-container #icons i:hover {
  color: rgba(34, 34, 34, 0.65);
}
</style>
