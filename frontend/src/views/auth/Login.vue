<template>
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
      <form @submit.prevent="login">
        <div class="formGroup">
          <label for="user_email">Addresse e-mail</label>
          <input type="text" id="user_email" v-model="user.email" />
        </div>
        <hr />
        <div class="formGroup">
          <label for="user_password">Mot de passe</label>
          <input type="text" id="user_password" v-model="user.password" />
        </div>
        <hr />
        <div class="formGroup">
          <button type="submit" class="button">Connexion</button>
        </div>
        <div class="sub">
          <a href="">crée un compte ?</a>
          <a href="">mot de passe oublié ?</a>
        </div>
      </form>
    </div>
    <MyFooter />
  </div>
</template>

<script>
import { accountService } from '@/_services'

import MyFooter from '@/components/footer/MyFooter.vue'

export default {
  name: 'Login',
  components: {
    MyFooter
  },
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      accountService
        .login(this.user)
        .then((res) => {
          accountService.savetoken(res.data.access_token)
          this.$router.push('/admin/dashboard')
        })
        .catch((err) => console.log(err))
      // ==========================================>
      // fetch('http://localhost:8888/auth/login', {
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json'
      //   },
      //   method: 'POST',
      //   body: JSON.stringify(this.user)
      // })
      //   .then((blob) => blob.json())
      //   .then((data) => {
      //     console.log(data)
      //     localStorage.setItem('token', data.access_token)
      //     this.$router.push('/admin/dashboard')
      //   })
      //   .catch((err) => console.log(err))
    }
  }
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
  justify-content: space-between;
  margin-bottom: 8px;
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

.login {
  width: 70%;
  height: 100vh;
  display: flex;
  background: url(../../../public/ensemble.jpeg) 0 0 no-repeat;
  background-size: cover;
  overflow: hidden;
  padding-bottom: 100px;
  margin-bottom: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-position-y: center;
  overflow: hidden;
}

.sub {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

form {
  width: 400px;
  background: whitesmoke;
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

hr {
  border: 1px solid black;
}
</style>
