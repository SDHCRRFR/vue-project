<template>
  <div class="user_table">
    <table class="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Date_création</th>
          <th>Role_id</th>
          <th>Supprimé</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in data" :key="user.id">
          <td><strong>{{ user.id }}</strong></td>
          <td>{{ user.nom }}</td>
          <td><a href="email">{{ user.email }}</a></td>
          <td>{{ user.date_creation }}</td>
          <td>{{ user.role_id }}</td>
          <td><button @click="trashUser(user.id)"><i class="fa-solid fa-trash"></i></button></td>
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
  name: 'UsersTable',
  data: () => {
    return {
      data: [{}],
      isAddUserModalVisible: false,
      newUser: {
        nom: '',
        email: '',
        password: ''
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
      fetch(`${API_URL}/user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.newUser)
      })
        .then((response) => response.json())
        .then(() => {
          this.fetchData()
          this.closeAddUserModal()
        })
        .catch((error) => {
          console.error("Erreur lors de l'ajout de l'utilisateur:", error)
        })
    }
  }

  // ======================================================================
}
</script>
<style scoped>
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

.user_table {
  width: 80%;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  display: flex;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

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
</style>
