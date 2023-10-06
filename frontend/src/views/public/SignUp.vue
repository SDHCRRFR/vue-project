<template>
  <div class="container_sign">
    <div class="user_login">
      <div class="wrapper">
        <form @submit.prevent="register">
          <div class="box_logo">
            <img src="../../assets/logosaid.svg" alt="logo" class="pics" />
          </div>
          <div class="input_box">
            <input type="text" id="user_name" placeholder="Votre nom" name="nom" required />
          </div>

          <div class="box_mail_pass">
            <input type="text" id="user_email" placeholder="Votre mail" name="email" required />
            <input
              type="password"
              id="user_password"
              placeholder="Veuillez saisir un mot de passe"
              name="password"
              required
            />
            <input
              type="password"
              id="user_password"
              placeholder="confirmez le mot de passe"
              required
            />
          </div>

          <button type="submit" class="button">S'inscrire</button>
          <div class="icon">
            <a href="#"><ion-icon name="logo-twitter" size="large"></ion-icon></a>
            <a href="#"><ion-icon name="logo-snapchat" size="large"></ion-icon></a>
            <a href="#"><ion-icon name="logo-linkedin" size="large"></ion-icon></a>
          </div>
          <div class="register_link">
            <p>
              Vous avez pas dêja un compte ?
              <router-link to="/login"><a class="link">Me connecté</a></router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  methods: {
    register(e) {
      const formData = Object.fromEntries(new FormData(e.target))
      const requestInfos = new Request('http://localhost:3000/api/user/register', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      fetch(requestInfos)
        .then((data) => data.json())
        .then((data) => console.log(data.message))
    }
  }
}
</script>

<style scoped>
h1 {
  color: white;
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

.icon {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon a {
  text-decoration: none;
  color: white;
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
  padding: 0px 40px;
}

.link {
  color: white;
  text-decoration: none;
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
  font-size: 18px;
  color: #fff;
  border-radius: 40px;
  padding: 10px 10px 10px 15px;
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
  font-size: 18px;
  color: #fff;
  border-radius: 40px;
  padding: 10px 10px 10px 10px;
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

.button:hover {
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
