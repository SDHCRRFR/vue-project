<template>
  <div class="my-pop">
    <i class="fa-solid fa-plus pop_up" @click="openPopup"></i>
    <div class="popup-overlay" v-if="isPopupOpen">
      <div class="popup">
        <h2>Ajouter un nouveau restaurant</h2>
        <form @submit.prevent="submitForm()" method="post" enctype="multipart/form-data">
          <i class="fa-solid fa-xmark fa-xs pop_up" @click="closePopup"></i>
          <input
            placeholder="Nom du restaurant"
            type="text"
            id="nom"
            v-model="newRestaurantData.nom"
            name="nom"
            required
          />
          <input
            placeholder="adresse"
            type="text"
            name="adresse"
            id="adresse"
            v-model="newRestaurantData.adresse"
            required
          />
          <input
            list="defaultTels"
            placeholder="Votre numéro de tel +33 || 00"
            type="tel"
            name="telephone"
            id="telephone"
            v-model="newRestaurantData.telephone"
            required
          />
          <datalist id="defaultTels">
            <option value="+333-"></option>
            <option value="+262"></option>
            <option value="+269"></option>
            <option value="06-"></option>
          </datalist>
          <div>
            <picture-input
              name="img"
              id="img"
              ref="imageInput"
              width="700"
              height="200"
              margin="10"
              accept="image/jpeg,image/png"
              size="5"
              button-class="btn"
              :custom-strings="{ upload: '<h1>Bummer!</h1>', drag: 'Insérez votre photos😺' }"
            />

            <button class="button" @click="removeImage">Remove image</button>
          </div>
          <input
            placeholder="Votre code postale"
            type="text"
            name="code_postale"
            id="type_restaurant_id"
            v-model="newRestaurantData.code_postale"
            required
          />
          <input
            placeholder="Indiquer le type de restaurant"
            type="text"
            name="type_restaurant_id"
            id="type_restaurant_id"
            v-model="newRestaurantData.type_restaurant_id"
            required
          />
          <input
            type="text"
            placeholder="menu"
            name="menu"
            id="menu"
            v-model="newRestaurantData.menu"
            required
          />
          <button type="submit">Ajouter</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import PictureInput from 'vue-picture-input'
const API_URL = import.meta.env.VITE_API_URL

export default {
  name: 'PopUpCreateRestaurant',
  data: () => {
    return {
      isPopupOpen: false,
      newRestaurantData: {
        nom: '',
        adresse: '',
        telephone: '',
        img: '',
        code_postale: '',
        menu: '',
        type_restaurant_id: ''
      }
    }
  },
  components: {
    PictureInput
  },
  methods: {
    openPopup() {
      this.isPopupOpen = true
    },
    closePopup() {
      this.isPopupOpen = false
    },
    submitForm() {
      this.createRestaurant()
    },
    createRestaurant() {
      fetch(`${API_URL}/restaurant`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(this.newRestaurantData)
      })
        .then((data) => data.json())
        .then(() => {
          console.log('Création réussi voici vos données' + newRestaurantData)
          this.closePopup()
        })
        .catch((error) => console.error('Echec de la création du restaurant', error))
    }
  }
}
</script>
<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup {
  background: white;
  display: flex;
  width: 450px;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  animation: slideIn 0.3s ease-out;
}

.popup h2 {
  margin-bottom: 20px;
  color: #333;
}

.popup form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.popup label {
  font-weight: bold;
}

.popup input,
.popup button {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
}

.popup button {
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
}

.button {
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
  width: 100%;
}

.popup button:hover {
  background-color: #45a049;
}

.popup i {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5em;
  color: #555;
}

@keyframes slideIn {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
