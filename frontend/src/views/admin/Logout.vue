<template>
  <div class="logout">
    <img src="../../assets/logosaid.svg" alt="" enter-class="image" />
    <div class="block_logout">
      <h1>Are you sure you want to sign out?</h1>
      <button type="submit">Sign Out</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logout'
}
</script>

<style scoped>
.image {
  width: 100px;
}

.logout {
  width: 100%;
  min-height: 90vh;
  display: flex;
  background: gainsboro;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


.block_logout {
  width: 30%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
}
</style>
