<template>
  <div class="management_contain">
    <nav>
      <div class="nav-container">
        <ul id="icons">
          <li>
            <router-link to="/logout">
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="clik"></div>
    <h5>Liste des Restaurateurs</h5>
    <!-- ... (votre code existant) -->
    <table class="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Email</th>
          <th>Date de création</th>
          <th>Role_id</th>
          <th>modifier/supprimé</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in data" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.nom }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.date_creation }}</td>
          <td>{{ user.role_id }}</td>
          <td>
            <button @click="trashUser(user.id)"><i class="fa-solid fa-trash"></i></button>
            <button @click="getUserDetails(user.id)">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
          </td>
        </tr>
        <button @click="openAddUserModal()">Ajouter <i class="fa-solid fa-plus"></i></button>
        <div v-if="isAddUserModalVisible" class="modal">
          <div class="modal-content">
            <form @submit.prevent="addUser()">
              <label for="nom">Nom:</label>
              <input type="text" id="nom" v-model="newUser.nom" required />
              <label for="email">Email:</label>
              <input type="email" id="email" v-model="newUser.email" required />
              <label for="password">Password:</label>
              <input type="password" id="password" v-model="newUser.password" required />
              <label for="role_id">Role:</label>
              <input type="text" id="role_id" v-model="newUser.role_id" required />
              <button type="submit">Ajouter utilisateur</button>
            </form>
            <i @click="closeAddUserModal()" class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </tbody>
    </table>
  </div>
</template>

<script>
const API_URL = 'http://localhost:3000'

export default {
  name: 'AdminDashboard',
  data: () => {
    return {
      data: [{}],
      isAddUserModalVisible: false, // Nouvel état
      newUser: {
        nom: '',
        email: '',
        password: '',
        role_id: ''
      }
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    openAddUserModal() {
      this.isAddUserModalVisible = true
    },
    closeAddUserModal() {
      this.isAddUserModalVisible = false
    },
    trashUser(userId) {
      if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur?')) {
        fetch(`${API_URL}/users/${userId}`, {
          method: 'DELETE'
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Erreur lors de la suppression de l'utilisateur")
            }
            return response.json()
          })
          .then(() => {
            this.fetchData()
          })
          .catch((error) => {
            console.error(error)
          })
      }
    },
    addUser() {
      // Vérifiez si l'utilisateur a un ID (dans ce cas, il s'agit d'une édition)
      const isEditing = this.newUser.id !== undefined
      // Utilisez la bonne URL en fonction de l'action (édition ou ajout)
      const apiUrl = isEditing
        ? `${API_URL}/user/update/${this.newUser.id}`
        : `${API_URL}/user/register`
      // Utilisez la bonne méthode HTTP en fonction de l'action (édition ou ajout)
      const httpMethod = isEditing ? 'PUT' : 'POST'
      // Envoyez les données de l'utilisateur au serveur
      fetch(apiUrl, {
        method: httpMethod,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.newUser)
      })
        .then((response) => response.json())
        .then(() => {
          // Mettez à jour votre liste après l'ajout ou la modification
          this.fetchData()
          // Fermez le formulaire
          this.closeAddUserModal()
        })
        .catch((error) => {
          console.error("Erreur lors de l'ajout ou de la modification de l'utilisateur:", error)
        })
    },
    getUserDetails(userId) {
      fetch(`${API_URL}/users/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          this.newUser = {
            id: data.id,
            nom: data.nom,
            email: data.email,
            password: data.password,
            role_id: data.role_id
            // ... autres champs
          }
          this.openAddUserModal()
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des détails de l'utilisateur:", error)
        })
    },
    fetchData() {
      fetch(`${API_URL}/users`)
        .then((response) => {
          console.log(response)
          if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données')
          }
          return response.json()
        })
        .then((data) => {
          console.log('Données reçues :', data)
          this.data = data.data
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>

<style scoped>
/* ========================================================================= */
/* Ajoutez votre CSS ici */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  display: flex;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

/* ========================================================================== */

.user-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.user-table th,
.user-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.user-table th {
  background-color: #f2f2f2;
}

.management_contain {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 80%;
  margin: 0 auto;
}

h5 {
  margin-top: 100px;
  font-size: 24px;
}

nav {
  padding: 0rem 2.4rem;
  background: #fff;
  position: fixed;
  width: 95%;
  z-index: 2;
  box-shadow: 0 2px 4px -3px rgba(51, 51, 51, 0.2);
}

h4 {
  text-decoration: underline black;
}

nav .nav-container {
  display: flex;
  justify-content: end;
  max-width: 1450px;
}

nav .nav-container #icons {
  display: flex;
  font-size: 24px;
  width: 34%;
  justify-content: flex-end;
}

nav .nav-container #icons li {
  margin-left: calc(35% + 8px);
}

nav .nav-container #icons li a {
  position: relative;
}

ul,
li {
  list-style: none;
}

a,
a:visited {
  color: #333;
}

nav .nav-container #icons i {
  transition: 0.25s;
  cursor: pointer;
}

nav .nav-container #icons i:hover {
  color: rgba(34, 34, 34, 0.65);
}

hr {
  border: 1px solid black;
  width: 100%;
}
</style>
