<template>
  <div class="error">
    <h1>ERROR 404 page Not Found !!</h1>
    <p>vérifier votre connexion internet</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.error {
  width: 100%;
  min-height: 98vh;
  display: flex;
  flex-direction: column;
  background: black;
  align-items: center;
  justify-content: center;
}

p {
  color: white;
}

h1 {
  color: crimson;
}
</style>
