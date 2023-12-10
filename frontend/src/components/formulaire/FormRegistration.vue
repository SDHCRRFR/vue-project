<template>
  <section class="form_registration">
    <h2>Formulaire d'inscription</h2>
    <form @submit.prevent="submitForm()" class="form">
      <div class="input_box">
        <!-- <label>Nom complet</label> -->
        <input
          type="text"
          id="nom_complet"
          placeholder="Votre nom"
          v-model="v$.nom.$model"
          name="nom"
          @blur="v$.nom.$touch"
        />

        <span v-for="error of v$.nom.$errors" :key="error.$uid">
          {{ error.$message }}
        </span>
      </div>

      <div class="input_box">
        <!-- <label>Addresse Email</label> -->
        <input
          type="email"
          id="client_mail"
          placeholder="Entrez votre mail"
          name="email"
          v-model="v$.contact.email.$model"
          @blur="v$.contact.email.$touch"
        />
        <span v-for="error of v$.contact.email.$errors" :key="error.$uid">
          {{ error.$message }}
        </span>
      </div>

      <div class="column">
        <div class="input_box">
          <input
            type="number"
            id="number_client"
            placeholder="Entrez votre numéro"
            name="number"
            v-model="v$.number.$model"
          />
          <span v-for="error of v$.number.$errors" :key="error.$uid">
            {{ error.$message }}
          </span>
        </div>

        <div class="input_box">
          <input
            type="text"
            placeholder="Indiquez votre date de naissance"
            v-model="v$.birthdate.$model"
            name="birthdate"
            @blur="v$.birthdate.$touch"
          />
          <span v-for="error of v$.birthdate.$errors" :key="error.$uid">
            {{ error.$message }}
          </span>
        </div>
      </div>
      <div class="gender_box">
        <h3>Genre {{ picked }}</h3>
        <div class="gender_option">
          <div class="gender">
            <input type="radio" id="Homme" name="genre" value="Homme" v-model="v$.picked.$model" />
            <label for="Homme">Homme</label>
          </div>
          <div class="gender">
            <input type="radio" id="Femme" name="genre" value="Femme" v-model="v$.picked.$model" />
            <label for="Femme">Femme</label>
          </div>
          <div class="gender">
            <input type="radio" id="Autre" name="autre" value="Autre" v-model="v$.picked.$model" />
            <label for="Autre">Autre</label>
          </div>
          <span v-for="error of v$.picked.$errors" :key="error.$uid">
            {{ error.$message }}
          </span>
        </div>
      </div>

      <div class="input_box addres">
        <!-- <label>Adresse</label> -->
        <div class="column">
          <input
            type="text"
            placeholder="Veuillez indiquer votre adresse"
            v-model="v$.address.line1.$model"
            @blur="v$.address.line1.$touch"
            required
          />
          <span v-for="error of v$.address.line1.$errors" :key="error.$uid">
            {{ error.$message }}
          </span>

          <input
            type="text"
            placeholder="Veuillez indiquer votre adresse line 2"
            v-model="v$.address.line2.$model"
            @blur="v$.address.line2.$touch"
            required
          />
          <span v-for="error of v$.address.line2.$errors" :key="error.$uid">
            {{ error.$message }}
          </span>
        </div>

        <div class="column">
          <input
            type="text"
            placeholder="Entrez votre ville"
            v-model="v$.address.ville.$model"
            @blur="v$.address.ville.$touch"
            required
          />
          <span v-for="error of v$.address.ville.$errors" :key="error.$uid">
            {{ error.$message }}
          </span>
        </div>

        <input
          type="text"
          placeholder="Entrez votre addresse postal"
          v-model="v$.address.code_postale.$model"
          @blur="v$.address.code_postale.$touch"
          required
        />
      </div>
      <!-- ================================================================== -->
      <button type="submit" class="button">Soummetre</button>
    </form>
  </section>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength } from '@vuelidate/validators'

export default {
  name: 'FormRegistration',
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      nom: '',
      contact: {
        email: ''
      },
      number: '',
      birthdate: '',
      picked: '',
      address: {
        line1: '',
        line2: '',
        ville: '',
        code_postale: ''
      }
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
      number: {
        required,
        minLengthValue: minLength(10),
        maxLength: maxLength(10),
        $autoDirty: true,
        $lazy: true
      },
      birthdate: { required },
      picked: { required },
      address: {
        line1: { required },
        line2: { minLengthValue: minLength(10) },
        ville: { required, minLengthValue: minLength(10) },
        code_postale: { required, maxLength: maxLength(5) }
      }
    }
  },
  methods: {
    async submitForm() {
    const isFormCorrect = await this.v$.$validate();
  
    if (isFormCorrect) {
      try {
        // Envoyer les données du formulaire au backend
        const response = await fetch('http://localhost:3000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nom: this.nom,
            email: this.contact.email,
            number: this.number,
            birthdate: this.birthdate,
            picked: this.picked,
            address: this.address,
          }),
        });
  
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Erreur lors de l\'envoi des données au backend:', error);
      }
    }
  }

  }
  // methods: {
  //   async submitForm() {
  //     const isFormCorrect = await this.v$.$validate()
  //     if (isFormCorrect) {
  //       console.log('mes donnee' + isFormCorrect)
  //     }
  //   }
  // }
}
</script>

<style scoped>
.form_registration {
  position: relative;
  width: 100%;
  background: rgb(237, 237, 237);
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 4px;
}

.form_registration h2 {
  font-size: 1.5rem;
  color: #333;
  font-weight: 500;
  text-align: center;
}

.form_registration .form {
  margin-top: 30px;
}

.form .input_box {
  width: 100%;
  margin-top: 20px;
}

.input_box label {
  color: #333;
}

.form :where(.input_box input, .select_box) {
  position: relative;
  height: 50px;
  width: 95%;
  font-size: 1rem;
  margin-top: 8px;
  color: #676767;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 0 15px;
}

.form .column {
  display: flex;
  column-gap: 15px;
  align-items: baseline;
}

.form .gender-box {
  margin-top: 20px;
}

.gender_box h3 {
  color: #333;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 8px;
}

.form :where(.gender_option, .gender) {
  display: flex;
  align-items: center;
  column-gap: 50px;
  flex-wrap: wrap;
}

.form .gender {
  column-gap: 5px;
  cursor: pointer;
}

.column .input_box input {
  width: 90%;
}

.form :where(.gender_option, .gender label) {
  cursor: pointer;
}

.addres :where(input, .select-box) {
  margin-top: 20px;
}

.select_box select {
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  color: #707070;
  font-size: 1rem;
}

.form button {
  height: 55px;
  width: 100%;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 400;
  border: none;
  border-radius: 6px;
  margin-top: 30px;
  transition: all 0.2s ease;
  background-color: rgb(255, 188, 188);
}

.form button:hover {
  background-color: rgb(255, 50, 50);
}

/* Responsive */
@media screen and (max-width: 500px) {
  .form .column {
    flex-wrap: wrap;
  }

  .form :where(.gender_option, .gender) {
    row-gap: 15px;
  }
}
</style>
