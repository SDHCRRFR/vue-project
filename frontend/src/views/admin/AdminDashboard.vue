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
  <h5>Liste des Restaurateurs</h5>
  <table class="user-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Nom</th>
        <th>Email</th>
        <th>Date de création</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurateur in data" :key="restaurateur.id">
        <td>{{ restaurateur.id }}</td>
        <td>{{ restaurateur.nom }}</td>
        <td>{{ restaurateur.email }}</td>
        <td>{{ restaurateur.date_creation }}</td>
      </tr>
    </tbody>
  </table>
</div>

</template>

<script>
const API_URL = import.meta.env.VITE_API_URL


export default {
  name: 'PublicShp',
  data: () => {
    return {
      data: [],
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      fetch(`${API_URL}/api/user`)
        .then((response) => {
          console.log(response)
          if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données')
          }
          return response.json()
        })
        .then((data) => {
          this.data = data.data
          console.log(data)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  },
}
</script>

<style scoped>
.user-table {
width: 100%;
border-collapse: collapse;
margin-top: 20px;
}

.user-table th, .user-table td {
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
