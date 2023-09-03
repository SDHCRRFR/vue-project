<template>

<nav>
    <div class="nav-container">
      <div id="logo">
        <router-link to="/">
          <img src="../../assets/logosaid.svg" alt="logo" />
        </router-link>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
    name: 'NavFictif'
}
</script>

<style scoped>
nav {
  padding: 0rem 2.4rem;
  background: rgba(255, 255, 255, 0.97);
  position: fixed;
  width: 95%;
  z-index: 2;
  box-shadow: 0 2px 4px -3px rgba(51, 51, 51, 0.2);
}

nav .nav-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1450px;
  height: 10vh;
}

nav .nav-container #logo {
  height: 32px;
  width: 66%;
}

nav .nav-container #logo img {
  height: 100%;
}



</style>