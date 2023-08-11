<template>
  <div class="log">
    <router-link to="/">
      <a>Annuler</a>
    </router-link>
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
import MyFooter from '../../components/MyFooter.vue'

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
      accountService.login(this.user)
        .then(res => {
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

.formGroup {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.log {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: gainsboro;
}

.login {
  width: 50%;
  height: 90vh;
  display: flex;
  background: url(../../../public/ensemble.jpeg) 0 0 no-repeat;
  background-size: cover;
  overflow: hidden;
  padding-bottom: 100px;
  margin-bottom: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
