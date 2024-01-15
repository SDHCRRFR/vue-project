<template>
  <div class="error">
    <h1>ERROR 404 :(</h1>
    <p>Désolé, la page que vous cherchez peut-être indisponible ou n'existe pas.</p>
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
  text-align: center;
}

p {
  color: white;
  font-size: 16px;
}

span {
  color: white;
}

h1 {
  color: crimson;
  font-size: 36px;
  margin-bottom: 20px;
}
</style>
