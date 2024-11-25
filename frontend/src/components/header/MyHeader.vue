<template>
  <div class="container_img fadeInRight">
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
  background: url(../../public/background-resto.png) no-repeat fixed;
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

.fadeInRight {
  -webkit-animation: fadeInRight 5.2s both;
  -moz-animation: fadeInRight 5.2s both;
  -o-animation: fadeInRight 5.2s both;
  animation: fadeInRight 5.2s both;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(150px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}


h2::after {
  content: '';
  animation: slide 3s infinite;
  content: 'AUTO CLEAN |';
}

@keyframes slide {
  0% {
    content: 'T|';
  }
  5% {
    content: 'Ta|';
  }
  10% {
    content: 'Tab|';
  }
  15% {
    content: 'Tabl|';
  }
  20% {
    content: 'Table|';
  }
  25% {
    content: 'Table |';
  }
  30% {
    content: 'Table c|';
  }
  35% {
    content: 'Table co|';
  }
  40% {
    content: 'Table cou|';
  }
  45% {
    content: 'Table coup|';
  }
  50% {
    content: 'Table coup |';
  }
  55% {
    content: 'Table coup d|';
  }
  60% {
    content: 'Table coup de|';
  }
  65% {
    content: 'Table coup de |';
  }
  70% {
    content: 'Table coup de c|';
  }
  75% {
    content: 'Table coup de co|';
  }
  80% {
    content: 'Table coup de coe|';
  }
  85% {
    content: 'Table coup de coeu|';
  }
  90% {
    content: 'Table coup de coeur|';
  }
  100% {
    content: 'Table coup de coeur |';
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
