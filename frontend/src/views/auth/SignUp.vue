<template>
  <div class="container_sign">
    <nav>
      <div class="nav-container">
        <div id="logo">
          <router-link to="/">
            <img src="../../assets/logosaid.svg" alt="logo" />
          </router-link>
        </div>
        <ul id="icons">
          <router-link to="/">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </router-link>
        </ul>
      </div>
    </nav>
    <div class="container_box">
      <!-- <h1>Inscription</h1> -->
      <img src="../../assets/logosaid.svg" alt="logo" class="pics" />
      <form>
        <div class="formGroup">
          <label for="user_name">votre nom</label>
          <input type="text" id="user_email" />
        </div>
        <hr />
        <div class="formGroup">
          <label for="user_email">votre adresse email</label>
          <input type="text" id="user_email" />
        </div>
        <hr />
        <div class="formGroup">
          <label for="user_password">Choisissez un mot de passe</label>
          <input type="text" id="user_password" />
        </div>
        <hr />
        <div class="formGroup">
          <button type="submit" class="button">Ce connecter</button>
        </div>
        <div class="sub">
          <router-link to="/login">
            <button type="button" class="create_account">dêja un compte ?</button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp'
}
</script>

<style scoped>
.container_sign {
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
}

h1 {
  color: white;
}

.container_box {
  min-height: 98vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* height: 80vh; */
  align-items: center;
  justify-content: center;
  background: url(../../../public/resto-I.jpeg) 0 0 no-repeat;
  overflow: hidden;
  background-size: cover;
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
  justify-content: space-between;
  margin-bottom: 8px;
}

label {
  color: white;
}

.sub {
  align-items: center;
  width: 100%;
}
.create_account {
  width: 100%;
  border-radius: 6px;
  height: 4vh;
  border: none;
  background: green;
  color: white;
}

.create_account:hover {
  background: white;
  color: black;
}

form {
  width: 400px;
  background: rgba(245, 245, 245, 0.493);
  margin: 0 auto;
  border: 1px solid black;
  padding: 20px;
  border-radius: 10px;
}

.button {
  width: 100%;
  height: 4vh;
  background: white;
  border-radius: 6px;
  border: 1px solid black;
  cursor: pointer;
}

.button:hover {
  background: black;
  color: white;
}

.pics {
  width: 250px;
  height: 200px;
}
</style>
