<template>
  <div class="don_container">
    <div class="don_txt">
      <h1>Faire un don</h1>
      <p>Cliquez ici si vous êtes une entreprise || Cliquez ici si vous êtes une association</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FaireUnDon',
  props: ['id'],
  data() {
    return {}
  }
  // mounted() {
  //   console.log(this.$route.params.id)
  // },
  // updated() {
  //   console.log(this.$route.params.id)
  // }
}
</script>

<style scoped>
.don_container {
  width: 100%;
  height: 86vh;
  padding-top: 100px;
  display: flex;
  background: url(../../../../public/resto-II.jpeg) 0 0 no-repeat;
  background-size: cover;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

hr {
  border: 1px solid gainsboro;
  height: 75px;
}

.don_txt {
  width: 80%;
  height: 15vh;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: 30px;
  background: pink;
}

h1 {
  color: white;
}

p {
  color: white;
}

img {
  height: 250px;
  width: 100%;
}
</style>
