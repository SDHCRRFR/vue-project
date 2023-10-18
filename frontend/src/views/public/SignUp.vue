<template>
  <div class="container_sign">
    <div class="user_login">
      <div class="wrapper">
        <form @submit.prevent="submitForm()" name="submitForm">
          <div class="box_logo">
            <img src="../../assets/logosaid.svg" alt="logo" class="pics" />
          </div>
          <div class="input_box">
            <input
              type="text"
              id="user_name"
              placeholder="Votre nom"
              v-model="v$.name.$model"
              name="nom"
              @blur="v$.name.$touch"
            />
            <span v-for="error of v$.name.$errors" :key="error.$uid"> {{ error.$message }} </span>

            <input
              type="text"
              id="user_email"
              placeholder="Votre mail"
              v-model="v$.contact.email.$model"
              name="email"
            />
            <span v-for="error of v$.contact.email.$errors" :key="error.$uid">
              {{ error.$message }}
            </span>

            <input
              type="password"
              id="user_password"
              placeholder="Veuillez saisir un mot de passe"
              v-model="v$.password.$model"
              name="password"
            />
            <span v-for="error of v$.password.$errors" :key="error.$uid">{{ error.$message }}</span>
          </div>
          <button type="submit" @click="submitForm()" class="button">S'inscrire</button>

          <div class="icon">
            <a href="#"><ion-icon name="logo-twitter" size="large"></ion-icon></a>
            <a href="#"><ion-icon name="logo-snapchat" size="large"></ion-icon></a>
            <a href="#"><ion-icon name="logo-linkedin" size="large"></ion-icon></a>
            <a href="#"><i class="fa-brands fa-square-instagram fa-2xl"></i></a>
          </div>
          <div class="register_link">
            <p>
              Vous n'avez pas encore de compte ?
              <router-link to="/login"><a class="link">Me connecté</a></router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default {
  name: 'SignUp',
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      name: '',
      contact: {
        email: ''
      },
      password: ''
    }
  },
  validations() {
    return {
      name: {
        required,
        minLengthValue: minLength(10),
        $autoDirty: true,
        $lazy: true
      }, // Matches this.firstName
      contact: {
        email: {
          required,
          email
        } // Matches this.contact.email
      },
      password: {
        required,
        minLengthValue: minLength(5),
        $autoDirty: true,
        $lazy: true
      } // Matches this.lastName
    }
  },
  methods: {
    async submitForm() {
      const isFormCorrect = await this.v$.$validate()

      if (isFormCorrect) {
        this.register()
      }
    },
    register() {
    const formData = {
      nom: this.name,
      email: this.contact.email,
      password: this.password
    };

    const requestInfos = new Request('http://localhost:3000/api/user/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    fetch(requestInfos)
      .then((data) => data.json())
      .then((data) => console.log(data.message))
      .catch((error) => console.error(error));
  }
}
    // register(e) {
    //   const formData = Object.fromEntries(new FormData(e.target))
    //   const requestInfos = new Request('http://localhost:3000/api/user/register', {
    //     method: 'post',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(formData)
    //   })
    //   fetch(requestInfos)
    //     .then((data) => data.json())
    //     .then((data) => console.log(data.message))
    // }
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

.input_box {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 20vh;
  padding: 0px;
  gap: 7px;
}

.icon {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
  width: 400px;
  background: rgba(156, 154, 156, 0.567);
  color: white;
  border-radius: 10px;
  padding: 0px 40px;
  margin-top: 100px;
}

.link {
  color: white;
  text-decoration: none;
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
  gap: 42px;
  display: flex;
  flex-direction: column;
}

span {
  width: 90%;
  border-radius: 10px;
  background: crimson;
  font-weight: 500;
  display: flex;
  justify-content: center;
  padding: 10px;
  color: white;
  height: 2vh;
}

.box_mail_pass input {
  width: 96%;
  height: 100%;
  background: transparent;
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
}

.register_link p a:hover {
  text-decoration: underline;
}
</style>
