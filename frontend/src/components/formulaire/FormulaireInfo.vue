<template>
    <div class="formulaire_info">
        <form action="#" class="form">
            <h1>On en discute ?</h1>
            <p>Vous êtes un restaurateur et souhaitez en savoir plus sur Table de coeur ? Remplissez vos informations personnelles et un membre de notre équipe reviendra rapidement vers vous. </p>

            <div class="column">
                <div class="input_box">
                    <label>Prénom</label>
                    <input type="text" placeholder="Votre Prénom" required />
                </div>
                <div class="input_box">
                    <label>Nom</label>
                    <input type="text" placeholder="Votre Prénom" required />
                </div>
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
            </div>
        </form>
        <img src="../../../public/nourriture_salade_o.jpeg" alt="">
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
  background: rgba(172, 255, 47, 0.177);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  height: 88vh;
  box-shadow: 0 0 4px;
}

.form {
    width: 100%;
    padding: 10px;
}

h1 {
    font-size: 70px;
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