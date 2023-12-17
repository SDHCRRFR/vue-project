<template>
  <div class="formulaire_info">
    <form class="form" @submit.prevent="submitForm()">
      <h1>On en discute ?</h1>
      <p>
        Vous êtes un restaurateur et souhaitez en savoir plus sur Table de coeur ? Remplissez vos
        informations personnelles et un membre de notre équipe reviendra rapidement vers vous.
      </p>
      <div class="column">
        <div class="input_box">
          <input
            type="text"
            id="nom"
            placeholder="Votre nom complet"
            v-model="v$.nom.$model"
            name="nom"
            @blur="v$.nom.$touch"
          />
          <span v-for="error of v$.nom.$errors" :key="error.$uid">
            {{ error.$message }}
          </span>
        </div>
        <div class="input_box">
          <input
            type="text"
            id="prenom"
            placeholder="Votre Prénom"
            v-model="v$.prenom.$model"
            name="prenom"
            @blur="v$.prenom.$touch"
          />
          <span v-for="error of v$.prenom.$errors" :key="error.$uid">
            {{ error.$message }}
          </span>
        </div>
      </div>
      <div class="input_box">
        <input
          type="email"
          id="client_mail"
          placeholder="Entrez votre mail"
          name="email"
          v-model="v$.email.$model"
          @blur="v$.email.$touch"
        />
        <span v-for="error of v$.email.$errors" :key="error.$uid">
          {{ error.$message }}
        </span>
      </div>
      <div class="column">
        <div class="input_box">
          <input
            type="text"
            id="number"
            placeholder="Entrez votre numéro"
            name="number"
            v-model="v$.number.$model"
          />
          <span v-for="error of v$.number.$errors" :key="error.$uid">
            {{ error.$message }}
          </span>
        </div>
      </div>
      <div class="remember_forgot">
        <input type="checkbox" name="picked" />
        <p>En cliquant sur "Suivant" j'accepte la Politique de confidentialité de TheFork.</p>
      </div>
      <button type="submit">Envoyez</button>
    </form>
    <img src="../../../public/photo-ethnique.jpg" alt="" />
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength } from '@vuelidate/validators'

export default {
  name: 'FormulaireInfo',
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      nom: '',
      prenom: '',
      email: '',
      number: ''
    }
  },
  validations() {
    return {
      nom: {
        required,
        $message: 'veuillez indiquez votre nom complet !',
        minLengthValue: minLength(10),
        $autoDirty: true,
        $lazy: true
      },
      prenom: {
        required,
        $message: 'veuillez indiquez votre prénom !',
        minLengthValue: minLength(10),
        $autoDirty: true,
        $lazy: true
      },
      email: {
        required,
        email
      },
      number: {
        required,
        minLengthValue: minLength(10),
        maxLength: maxLength(10),
        $autoDirty: true,
        $lazy: true
      }
    }
  },
  methods: {
    async submitForm() {
      const isFormCorrect = await this.v$.$validate()

      if (isFormCorrect) {
        console.log('mes donnee' + isFormCorrect)
      }
    }
  }
}
</script>

<style scoped>
.formulaire_info {
  width: 100%;
  background: rgba(47, 210, 255, 0.084);
  border: none;
  display: flex;
  flex-direction: row;
  height: 100%;
  box-shadow: 0 0 4px;
}

.form {
  width: 100%;
  padding: 10px;
  font-size: 20px;
}

button {
  margin-top: 30px;
  width: 330px;
  height: 35px;
  color: white;
  border-radius: 5px;
  border: none;
  margin-left: 52%;
  transition: all 1.5s ease-in-out;
  background: rgba(0, 101, 30, 0.563);
  cursor: pointer;
}

button:hover {
  background: rgba(0, 101, 30, 0.748);
}

h1 {
  font-size: 65px;
  font-weight: 900;
}

img {
  width: 50%;
}

.form .column {
  display: flex;
  column-gap: 15px;
  align-items: baseline;
}

.form .input_box {
  width: 100%;
  margin-top: 20px;
}

.remember_forgot {
  display: flex;
  width: 90%;
  /* justify-content: space-around; */
  align-items: center;
  font-size: 20px;
}

.remember_forgot label input {
  accent-color: #fff;
  margin-right: 3px;
}

.remember_forgot {
  color: black;
  text-decoration: none;
}

.remember_forgot p:hover {
  text-decoration: underline;
}

.form .input_box input {
  position: relative;
  height: 50px;
  width: 85%;
  font-size: 1rem;
  margin-top: 8px;
  color: #676767;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 0 15px;
}
</style>
