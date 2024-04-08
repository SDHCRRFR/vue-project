<template>
  <div class="management_contain">
    <img src="../../../public/admin.jpg" alt="background crimson" />
    <hr />
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard'
}
</script>

<style scoped>
.management_contain {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 95%;
  margin: 0 auto;
}

img {
  width: 95%;
  height: 80vh;
  border-radius: 20px;
}

hr {
  border: 1px solid black;
  width: 90%;
}
</style>
