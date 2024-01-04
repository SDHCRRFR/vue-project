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
            <!-- Ajoutez ici des boutons pour le CRUD -->
            <button><i class="fa-solid fa-pen-to-square"></i></button>
            <button><i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="si" v-if="isRestaurateur">

    </div>
  </div>
</template>

<script>
const API_URL = 'http://localhost:3000' // Définissez l'URL de base du serveur

export default {
  name: 'AdminDashboard',
  data: () => {
    return {
      data: [{}]
    }
  },
  mounted() {
    this.fetchData() // Assurez-vous d'appeler fetchData au moment approprié
  },
  methods: {
    fetchData() {
      fetch(`${API_URL}/users`) // Utilisez la route correcte
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
