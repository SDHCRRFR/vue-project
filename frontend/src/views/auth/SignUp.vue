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
    <div class="user_login">
      <div class="wrapper">
        <form>
          <div class="box_logo">
            <img src="../../assets/logosaid.svg" alt="logo" class="pics" />
          </div>
          <div class="input_box">
            <input type="text" id="user_name" placeholder="Votre nom" required />

            <input
              type="text"
              id="user_name"
              placeholder="Votre prénom"
              required />
          </div>

          <div class="box_mail_pass">
            <input type="text" id="user_email" placeholder="Votre mail" required>
            <input type="password" id="user_password" placeholder="Veuillez saisir un mot de passe" required>
            <input type="password" id="user_password" placeholder="confirmez le mot de passe" required>
          </div>

          <button type="submit" class="button">S'inscrire</button>

          <div class="register_link">
            <p>
              Vous avez pas dêja un compte ?
              <router-link to="/login"><a>Me connecté</a></router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp'
}
</script>

<style scoped>

h1 {
  color: white;
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
  padding-top: 50px;
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
  padding: 10px 40px;
}

.wrapper .input_box {
  width: 100%;
  height: 10px;
  margin: 20px 0;
  display: flex;
}

.input_box input {
  width: 96%;
  height: 100%;
  background: transparent;
  border: none;
  border: 2px solid rgba(255, 255, 255, 0.91);
  outline: none;
  font-size: 16px;
  color: #fff;
  border-radius: 40px;
  padding: 10px 10px 10px 5px;
}

.box_mail_pass {
  width: 100%;
  height: 114px;
  margin: -30px 0;
  display: flex;
  gap: 10px;
  flex-direction: column;
}

form {
  gap: 40px;
  display: flex;
  flex-direction: column;
}

.box_mail_pass input {
  width: 96%;
  height: 100%;
  background: transparent;
  /* border: none; */
  border: 2px solid rgba(255, 255, 255, 0.91);
  outline: none;
  font-size: 16px;
  color: #fff;
  border-radius: 40px;
  padding: 10px 10px 10px 5px;
}

.input_box input::placeholder {
  color: #fff;
}

.wrapper .remember_forgot {
  display: flex;
  justify-content: space-between;
  font-size: 14.5px;
  margin: 0px 0 15px;
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
