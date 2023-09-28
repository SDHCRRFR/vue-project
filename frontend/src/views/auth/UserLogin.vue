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

    <div class="user_login">
      <div class="wrapper">
        <form @submit.prevent="login">
          <div class="box_logo">
            <img src="../../assets/logosaid.svg" alt="logo" class="pics" />
          </div>
          <!-- <form @submit.prevent="login"> -->
          <div class="input_box">
            <input
              type="text"
              id="user_email"
              placeholder="Nom d'utilisateur"
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
              <router-link to="/signup"><a>s'inscrire</a></router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import { accountService } from '@/_services'

export default {
  name: 'UserLogin',
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  }
  // methods: {
  //   login() {
  //     accountService
  //       .login(this.user)
  //       .then((res) => {
  //         accountService.savetoken(res.data.access_token)
  //         this.$router.push('/admin/dashboard')
  //       })
  //       .catch((err) => console.log(err))
  //     // ==========================================>
  //     fetch('http://localhost:5173/auth/login', {
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //       method: 'POST',
  //       body: JSON.stringify(this.user)
  //     })
  //       .then((blob) => blob.json())
  //       .then((data) => {
  //         console.log(data)
  //         localStorage.setItem('token', data.access_token)
  //         this.$router.push('/admin/dashboard')
  //       })
  //       .catch((err) => console.log(err))
  //   }
  // }
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
.pics {
  width: 100px;
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
  /* background: seagreen; */
  background: url(../../../public/everyone.jpeg) 0 0 no-repeat;
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
  border: 2px solid rgba(255, 255, 255, 0.2);
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

.register_link {
  font-size: 14.5px;
  text-align: center;
  margin-top: 20px;
}

.register_link p a:hover {
  text-decoration: underline;
}
</style>
