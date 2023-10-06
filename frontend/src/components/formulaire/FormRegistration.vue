<template lang="">
  <section class="form_registration">
    <h2>Formulaire d'inscription</h2>
    <form action="#" class="form">
      <div class="input_box">
        <label>Nom complet</label>
        <input type="text" placeholder="Votre nom complet" required />
      </div>
      <div class="input_box">
        <label>Addresse Email</label>
        <input type="text" placeholder="Entrez votre mail" required />
      </div>

      <div class="column">
        <div class="input_box">
          <label>Numéro de tél</label>
          <input type="text" placeholder="Entrez votre numéro" required />
        </div>
        <div class="input_box">
          <label>Date de naissance</label>
          <input type="text" placeholder="Indiquez votre date de naissance" required />
        </div>
      </div>
      <div class="gender_box">
        <h3>Gender</h3>
        <div class="gender_option">
          <div class="gender">
            <input type="radio" id="check" name="gender" />
            <label for="check-male">Homme</label>
          </div>
          <div class="gender">
            <input type="radio" id="check" name="gender" />
            <label for="check-femal">Femme</label>
          </div>
          <div class="gender">
            <input type="radio" id="check" name="gender" />
            <label for="check-other">Autre</label>
          </div>
        </div>
      </div>
      <div class="input_box">
        <label>Adresse</label>
        <input type="text" placeholder="Veuillez indiquez votre addresse s'il vous plaît" required />
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'FormRegistration'
}
</script>

<style scoped>
.form_registration {
  position: relative;
  width: 100%;
  background: #fff;
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

.form .input_box input {
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
}

.form :where(.gender_option, .gender) {
  display: flex;
  align-items: center;
  column-gap: 50px;
}

.form .gender {
  column-gap: 5px;
  cursor: pointer;
}

.column .input_box input {
  width: 90%;
}
</style>
