<template>
  <div class="admin_dashboard">
    <!-- <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-purple">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">CRUD Manager {{ message }} </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: showHome }"
                aria-current="page"
                href="#"
                @click.prevent="goToHome()"
                >Accueil</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: showCreateForm || showStudentsList }"
                href="#"
                @click.prevent="goToStudentsList()"
                >Gestion des étudiants</a
              >
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">Recherche</button>
          </form>
        </div>
      </div>
    </nav> -->
    <nav>
      <div class="nav-container">
        <div id="logo">
          <img src="../../assets/logosaid.svg" alt="logo" />
        </div>
        <ul id="icons">
          <li>
            <router-link to="/user/shop/13"> </router-link>
          </li>
          <li>
            <router-link to="/user/shop/13"> </router-link>
          </li>
          <li>
            <router-link to="/user/logout">
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <h4>
        Administration <span><i class="fa-solid fa-gear"></i> </span>
      </h4>
      <hr />
      <div class="container_block">
        <main class="container">
          <div class="bg-light p-5 rounded" v-if="showHome">
            <h1>CRUD Manager</h1>
            <p class="lead">
              This example is a quick exercise to illustrate how fixed to top navbar works. As you
              scroll, it will remain fixed to the top of your browser’s viewport.
            </p>
          </div>

          <div class="row mt-5" v-if="showCreateForm || showStudentsList">
            <div class="col">
              <div class="card">
                <div class="card-header text-black bg-purple-light">Gestion des étudiants</div>
                <div class="card-body">
                  <div class="mb-4" v-if="showCreateForm">
                    <div class="d-flex mb-2">
                      <h5 class="card-title flex-grow-1">
                        Formulaire de création de nouvel étudiant
                      </h5>
                    </div>
                    <form class="row g-3">
                      <div class="col-6">
                        <label for="inputName" class="form-label">Nom(s)</label>
                        <input required type="text" class="form-control" id="inputName" />
                      </div>
                      <div class="col-6">
                        <label for="inputFirstname" class="form-label">Prénom(s)</label>
                        <input required type="text" class="form-control" id="inputFirstname" />
                      </div>
                      <div class="col-6">
                        <label for="inputDatenaissance" class="form-label">Date de naissance</label>
                        <input required type="date" class="form-control" id="inputDatenaissance" />
                      </div>
                      <div class="col-6">
                        <label for="selectNiveauScolaire" class="form-label">Niveau scolaire</label>
                        <select required id="selectNiveauScolaire" class="form-select">
                          <option value=""></option>
                          <option value="Terminal A">Terminal A</option>
                          <option value="Terminal D">Terminal D</option>
                          <option value="Terminal C">Terminal C</option>
                          <option value="Première A">Première A</option>
                          <option value="Première D">Première D</option>
                          <option value="Première C">Première C</option>
                          <option value="Seconde A">Seconde A</option>
                          <option value="Seconde C">Seconde C</option>
                        </select>
                      </div>

                      <div class="col-12">
                        <button type="submit" class="btn btn-primary">
                          <i class="fas fa-save"></i> Créer
                        </button>
                        <button
                          type="button"
                          @click.prevent="goToStudentsList()"
                          class="btn btn-danger ms-2"
                        >
                          <i class="fas fa-backspace"></i> Retouner à la liste
                        </button>
                      </div>
                    </form>
                  </div>
                  <div v-if="showStudentsList">
                    <div class="d-flex mb-2">
                      <h5 class="card-title flex-grow-1">Liste des étudiants</h5>
                      <div class="d-flex">
                        <a href="" @click.prevent="goToCreateForm()" class="btn btn-link d-block">
                          <i class="fas fa-user-plus"></i> Ajouter un nouvel étudiant</a
                        >
                        <input type="text" name="" id="" class="form-control" />
                      </div>
                    </div>
                    <table class="table table-bordered table-striped">
                      <thead>
                        <th class="text-center">Nom(s)</th>
                        <th class="text-center">Prénom(s)</th>
                        <th class="text-center">Date de naissance</th>
                        <th class="text-center">Niveau Scolaire</th>
                        <th class="text-center">Action</th>
                      </thead>

                      <tbody>
                        <tr>
                          <td class="text-center">Test</td>
                          <td class="text-center">Test</td>
                          <td class="text-center">Test</td>
                          <td class="text-center">Test</td>
                          <td class="text-center">
                            <button class="btn btn-link">
                              <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn btn-link">
                              <i class="fas fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard',
  data() {
    return {
      showHome: false,
      showCreateForm: false,
      showStudentsList: false
    }
  },

  mounted() {
    this.changeNavigationState('home')
  },

  methods: {
    goToHome() {
      this.changeNavigationState('home')
    },
    goToCreateForm() {
      this.changeNavigationState('create')
    },

    goToStudentsList() {
      this.changeNavigationState('list')
    },

    changeNavigationState(destination) {
      this.showCreateForm = false
      this.showHome = false
      this.showStudentsList = false

      switch (destination) {
        case 'home':
          this.showHome = true
          break
        case 'create':
          this.showCreateForm = true
          break
        case 'list':
          this.showStudentsList = true
          break

        default:
          this.showHome = true
          break
      }
    }
  }
}
</script>

<style scoped>
.admin_dashboard {
  width: 100%;
  min-height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.container {
  width: 80%;
  height: 87vh;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}

.container_block {
  width: 60%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}

ul,
li {
  list-style: none;
}

a,
a:visited {
  color: #333;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
body {
  min-height: 75rem;
  padding-top: 4.5rem;
}

.bg-purple {
  background-color: #7367f0;
}

.bg-purple-light {
  background: #e6e4ff !important;
}

[v-cloak] {
  display: none;
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
  justify-content: space-around;
  align-items: center;
  max-width: 1450px;
}

nav .nav-container #logo {
  height: 32px;
  width: 66%;
}

nav .nav-container #logo img {
  height: 100%;
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

nav .nav-container #icons #nav-not {
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: #ff2929;
  position: absolute;
  visibility: hidden;
  opacity: 1;
  transition: 0.6s;
  transform: translate(-4px, -1px);
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
