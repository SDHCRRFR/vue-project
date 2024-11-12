<template>
  <div class="container_img">
    <hgroup>
      <h2 class="content"></h2>
    </hgroup>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      searchKey: '',
      products: []
    }
  }
}
</script>

<style scoped>
.container_img {
  background: url(../../public/mercedes-benz.jpg) no-repeat fixed;
  width: 90%;
  height: 87vh;
  border-radius: 20px 20px 20px 20px;
  background-size: cover;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
#search {
  width: 600px;
  font-size: 20px;
  padding-left: 30px;
  border: none;
  height: 6vh;
  border-radius: 10px;
}
.search {
  margin-left: 50px;
}

h2::after {
  content: '';
  animation: slide 3s infinite;
  content: 'AUTO CLEAN |';
}

@keyframes slide {
  10% {
    content: 'A|';
  }
  20% {
    content: 'AU|';
  }
  30% {
    content: 'AUT|';
  }
  40% {
    content: 'AUTO|';
  }
  50% {
    content: 'AUTO |';
  }
  60% {
    content: 'AUTO C|';
  }
  70% {
    content: 'AUTO CL|';
  }
  80% {
    content: 'AUTO CLE|';
  }
  90% {
    content: 'AUTO CLEA|';
  }
  95% {
    content: 'AUTO CLEAN|';
  }
  100% {
    content: 'AUTO CLEAN |';
  }
}

h2 {
  font-size: 90px;
  color: white;
  margin: 0;
  padding: 0;
}

@media screen and (max-width: 768px) {
  h2 {
    font-size: 40px;
  }
}

hgroup {
  padding-bottom: 10px;
  padding-left: 40px;
}

h1 {
  margin: 0;
  color: white;
  padding: 0;
}
</style>
