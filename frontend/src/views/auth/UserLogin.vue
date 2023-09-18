<template>
  <div class="connect_">
    <nav>
      <div class="nav-container">
        <div id="logo">
          <router-link to="/">
            <img src="../../assets/logosaid.svg" alt="logo" />
          </router-link>
        </div>
        <ul id="icons">
          <li>
            <router-link to="/">
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="log">
      <div class="login">
        <h1>Connexion</h1>
        <form>
          <div class="formGroup">
            <input type="text" placeholder="Enter Name" />
            <input type="text" placeholder="Enter Email" />
            <input type="password" placeholder="Enter Password" />
            <button v-on:click="signUp">Sign Up</button>
            <router-link to="/signup">Login</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserLogin'
}
</script>

<style scoped>
h1 {
  color: white;
}

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

.formGroup {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* margin-bottom: 8px; */
}

.log {
  width: 100%;
  min-height: 100vh;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(57, 57, 57);
}

img {
  width: 350px;
  height: 200px;
}

.login {
  width: 70%;
  height: 100vh;
  display: flex;
  padding-bottom: 100px;
  margin-bottom: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

input {
  width: 390px;
  height: 34px;
  border-radius: 10px;
  margin: 5px;
  font-size: 15px;
}
</style>
