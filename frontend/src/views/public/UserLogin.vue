<template>
  <div class="connect_">
    <nav>
      <div class="nav-container">
        <div id="logo">
          <router-link to="/">
            <img class="logo" src="../../assets/logosaid.svg" alt="logo" />
          </router-link>
        </div>
      </div>
    </nav>
    <div class="user_login">
      <div class="wrapper">
        {{ connect }}
        <form @submit.prevent="login()">
          <div class="box_logo">
            <img src="../../assets/logosaid.svg" alt="logo" class="pics" />
          </div>
          <div class="input_box">
            <input
              type="email"
              id="user_email"
              placeholder="Votre email"
              v-model="user.email"
              required
            />
            <i class="fa-solid fa-user"></i>
          </div>

          <div class="input_box">
            <input
              type="password"
              id="user_password"
              placeholder="Mot de passe"
              v-model="user.password"
              required
            />
            <i class="fa-solid fa-lock"></i>
          </div>
          <div class="remember_forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forgot password</a>
          </div>
          <button type="submit" class="button">Connexion</button>
          <div class="register_link">
            <p>
              Vous avez pas encore de compte ?
              <router-link to="/signup"><a class="link">s'inscrire</a></router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/connexion/user'

export default {
  name: 'UserLogin',
  data() {
    return {
      userStore: useUserStore(),
      user: {
        email: '',
        password: ''
      },
      connect: ''
    }
  },
  methods: {
    login() {
      const formData = {
        email: this.user.email,
        password: this.user.password
      }
      const requestInfos = new Request('http://localhost:3000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      fetch(requestInfos)
        .then((data) => data.json())
        .then((data) => {
          console.log(data.status)
          if (data.status === 200) {
            // userStore.setUser({id: 1, nom: 'cmoicool'})
            this.userStore.setUser(data.data)
            if (this.userStore.user.role_id === 2) {
              this.$router.push('admin/dashboard')
            } else {
              this.$router.push('user/dashboard')
              console.log(data)
            }
          } else {
            this.connect = 'identifiant incorrect'
          }
        })
        .catch((error) => console.error(error))
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
.pics {
  width: 100px;
}

.link {
  color: white;
}

nav {
  padding: 0rem 2.4rem;
  background: transparent;
  border: 2px solid gainsboro;
  position: fixed;
  width: 95%;
  z-index: 1;
  box-shadow: 0 2px 4px -3px rgba(51, 51, 51, 0.2);
}

nav .nav-container {
  display: flex;
  align-items: center;
  max-width: 1450px;
  height: 10vh;
}

.logo {
  height: 50px;
  align-items: flex-start;
}

.box_logo {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user_login {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url(../../../public/nourriture_salade.jpeg) 0 0 no-repeat;
  background-size: cover;
  overflow: hidden;
}

.wrapper {
  width: 450px;
  background: rgba(156, 154, 156, 0.567);
  color: white;
  border-radius: 10px;
  padding: 30px 40px;
}

.wrapper .input_box {
  width: 100%;
  position: relative;
  height: 30px;
  margin: 30px 0;
}

.input_box input {
  width: 93%;
  height: 100%;
  background: transparent;
  border: none;
  border: 2px solid rgba(255, 255, 255, 0.91);
  outline: none;
  font-size: 16px;
  color: #fff;
  border-radius: 40px;
  padding: 10px 20px 10px 10px;
}

.input_box input::placeholder {
  color: #fff;
}

.input_box i {
  position: absolute;
  right: 20px;
  top: 80%;
  transform: translateY(-50%);
  font-size: 20px;
}

.wrapper .remember_forgot {
  display: flex;
  justify-content: space-between;
  font-size: 14.5px;
  margin: 0px 0 15px;
}

.remember_forgot label input {
  accent-color: #fff;
  margin-right: 3px;
}

.remember_forgot a {
  color: #fff;
  text-decoration: none;
}

.remember_forgot a:hover {
  text-decoration: underline;
}

.wrapper .button {
  width: 100%;
  height: 45px;
  background: #fff;
  border: none;
  outline: none;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 16px;
  color: #333;
  font-weight: 600;
}

.wrapper .button:hover {
  background: black;
  color: white;
}

.register_link {
  font-size: 14.5px;
  text-align: center;
  margin-top: 20px;
}

.register_link p a:hover {
  text-decoration: underline;
}
</style>
@/stores/connexion/counter
