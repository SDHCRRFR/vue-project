<template>
  <div class="formulaire_info">
    <form action="#" class="form" @submit.prevent="submit">
      <h1>On en discute ?</h1>
      <p>
        Vous êtes un restaurateur et souhaitez en savoir plus sur Table de coeur ? Remplissez vos
        informations personnelles et un membre de notre équipe reviendra rapidement vers vous.
      </p>
      <div class="column">
        <div class="input_box">
          <input type="text" placeholder="Votre Prénom" required />
        </div>
        <div class="input_box">
          <input type="text" placeholder="Votre Prénom" required />
        </div>
      </div>
      <div class="input_box">
        <input type="text" placeholder="Entrez votre mail" required />
      </div>
      <div class="column">
        <div class="input_box">
          <input type="text" placeholder="Entrez votre numéro" required />
        </div>
      </div>
      <div class="remember_forgot">
        <label><input type="checkbox" /></label>
        <p>En cliquant sur "Suivant" j'accepte la Politique de confidentialité de TheFork.</p>
      </div>
      <button type="submit">Envoyez</button>
    </form>
    <img src="../../../public/photo-ethnique.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: 'FormulaireInfo'
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
  width: 100%;
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
  justify-content: space-around;
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
