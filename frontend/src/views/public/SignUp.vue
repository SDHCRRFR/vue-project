<template>
  <div class="container_sign">
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
        <form @submit.prevent="submitForm()" name="submitForm">
          <div class="box_logo">
            <img src="../../assets/logosaid.svg" alt="logo" class="pics" />
          </div>

          <div class="input_box">
            <input
              type="text"
              id="user_name"
              placeholder="Votre nom"
              v-model="v$.nom.$model"
              name="nom"
              @blur="v$.nom.$touch"
              @keydown.enter.prevent="submitForm"
            />

            <span v-for="error of v$.nom.$errors" :key="error.$uid">
              {{ error.$message }}
            </span>

            <input
              type="email"
              id="user_email"
              placeholder="Votre mail"
              v-model="v$.contact.email.$model"
              name="email"
            />
            <span
              v-for="error of v$.contact.email.$errors"
              :key="error.$uid"
              @keydown.enter.prevent="submitForm"
            >
              {{ error.$message }}
            </span>
            <div class="input_boxii">
              <input
                :type="showPassword ? 'text' : 'password'"
                id="user_password"
                placeholder="Veuillez saisir un mot de passe"
                v-model="v$.password.$model"
                @keydown.enter.prevent="submitForm"
                name="password"
              />
              <i class="fa-solid fa-eye fa-lg" @click="togglePasswordVisibility"></i>
            </div>
            <span v-for="error of v$.password.$errors" :key="error.$uid">{{ error.$message }}</span>
          </div>
          <button type="submit" class="button" @keydown.enter.prevent="submitForm">
            S'inscrire
          </button>
          <span>{{ connect }}</span>
          <div class="register_link">
            <p>
              Vous avez dêja un compte ?
              <router-link to="/login"><a class="link">Me connecté</a></router-link>
            </p>
          </div>
        </form>
        <div v-if="loading" class="loading-overlay">
          <div class="spinner"><i class="fas fa-heart fa-spin" style="color: #ff0000"></i></div>
          <p style="color: black;">Inscription en cours...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { toast } from 'vue3-toastify'
const API_URL = import.meta.env.VITE_API_URL

export default {
  name: 'SignUp',
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      nom: '',
      contact: {
        email: ''
      },
      password: '',
      showPassword: false,
      connect: '',
      loading: false
    }
  },
  validations() {
    return {
      nom: {
        required,
        minLengthValue: minLength(10),
        $autoDirty: true,
        $lazy: true
      },
      contact: {
        email: {
          required,
          email
        }
      },
      password: {
        required,
        minLengthValue: minLength(5),
        $autoDirty: true,
        $lazy: true
      }
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword
    },
    submitForm() {
      const isFormCorrect = this.v$.$pending ? false : (this.v$.$pending = true)

      if (isFormCorrect) {
        this.register()
      }
    },
    register() {
      this.loading = true;
      const formData = {
        nom: this.nom,
        email: this.contact.email,
        password: this.password
      }
      const requestInfos = new Request(`${API_URL}/user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      fetch(requestInfos)
        .then((data) => data.json())
        .then((data) => {
          if (data.status === 200) {
            toast.success('Inscription réussie ! 🎉', {
              autoClose: 5000,
              position: toast.POSITION.BOTTOM_RIGHT
            })
            // this.loading = false;
            setTimeout(() => {
              this.$router.push('restaurateur/dashboard')
            }, 5000)
            console.log(data)
          } else if (data.status === 400) {
            this.connect = 'le compte existe deja'
            console.log('ca a merdé' + connect)
            // return connect;
          } else {
            console.log('ca a merdé' + data)
          }
        })
        .catch((error) => {
      this.loading = false; // Même en cas d'erreur
      console.error('Erreur lors de l’inscription :', error)
    })
    }
  }
}
</script>

<style scoped>
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

.input_box i {
  position: absolute;
  right: 20px;
  transform: translateY(-50%);
  font-size: 20px;
}

.logo {
  height: 50px;
  align-items: flex-start;
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
  width: 93%;
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

form {
  gap: 42px;
  display: flex;
  flex-direction: column;
}

span {
  width: 100%;
  font-weight: 500 bold;
  display: flex;
  justify-content: center;
  color: white;
}

.input_box input::placeholder {
  color: #fff;
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

.input_boxii {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
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

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
