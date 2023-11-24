<template>
  <div class="user_index">
    <h1>C'est la défaite</h1>
    <div v-for="restaurant in data" :key="restaurant.id" class="container">
      <img :src="restaurant.logo_url" alt="" />
      <h3>{{ restaurant.nom }}</h3>
      <p>{{ restaurant.adresse }}</p>
      <p>{{ restaurant.localisation }}</p>
      <p>{{ restaurant.telephone }}</p>
      <a>{{ restaurant.adresse }}</a>
      <a>{{ restaurant.type_restaurant }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserIndex',
  data() {
    return {
      data: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      fetch('http://localhost:3000/api/restaurant')
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
  }
}
</script>

<style scoped>
.user_index {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
