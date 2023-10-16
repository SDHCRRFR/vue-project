<template>
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

      <div class="input_box addres">
        <label>Adresse</label>
        <div class="column">
          <input type="text" placeholder="Veuillez indiquez votre addresse" required />
          <input type="text" placeholder="Veuillez indiquez votre addresse line 2" required />

        </div>

        <div class="column">
          <div class="select_box">
            <select>
              <option hidden>Ville</option>
              <option>Paris</option>
              <option>Marseille</option>
              <option>Lyon</option>
              <option>Nice</option>
              <option>Laon</option>
              <option>Lille</option>
              <option>Monaco</option>
              <option>Montpellier</option>
            </select>
          </div>
          <input type="text" placeholder="Entrez votre ville" required />
        </div>

        <input type="text" placeholder="Entrez votre addresse postal" required />
      </div>
      <button>Soummetre</button>
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
  background: rgba(172, 255, 47, 0.177);
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
  background-color: rgba(172, 255, 47, 0.801);
}

.form button:hover {
  background-color: rgb(172, 255, 50);
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
