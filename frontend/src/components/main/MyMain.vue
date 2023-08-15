<template>
  <div class="my-main">
    <div class="my-img">
      <div class="container_tm">
        <img src="../../../public/resto-I.jpeg" alt="" />
        <router-link to="/wish-list">
          <h2>Impact</h2>
        </router-link>
      </div>
      <div class="container_tm">
        <img src="../../../public/resto-IIII.jpeg" alt="" />
        <router-link to="/shopping-cart">
          <h2>Nos-Restaurant</h2>
        </router-link>
      </div>
      <div class="container_tm">
        <img src="../../../public/ensemble.jpeg" alt="" />
        <router-link to="/faire-un-don">
          <h2>Don</h2>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {}
  }
}
</script>

<style scoped>
.my-main {
  width: 100%;
  min-height: 50vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;
}

.my-main .my-img {
  flex-direction: row;
}

.my-img {
  width: 100%;
  /* background: pink; */
  height: 60vh;
  padding: 0px 30px 0px 30px;
  gap: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  /* flex-wrap: wrap; */
}

img {
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
}

.container_tm {
  align-items: center;
  text-align: center;
  flex-direction: columns;
  height: 60vh;
  width: 80%;
}

h2 {
  text-decoration: none;
  color: black;
}
</style>
