<template>
  <div class="my-main">
    <div class="my-img" v-for="item in images" :key="item">
      <img v-bind:src="item.img" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      images: [
        {
          id: 1,
          img: '../../public/resto-IIII.jpeg',
          name: 'restoI'
        },
        {
          id: 2,
          img: '../../public/resto-II.jpeg',
          name: 'restoII'
        },
        {
          id: 3,
          img: '../../public/resto-i.jpeg',
          name: 'restoIII'
        }
      ]
    }
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
}

.my-main .my-img {
  flex-direction: row;
}
.my-img {
  /* width: 50vw; */
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

.text_link {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  width: 100%;
}
</style>
