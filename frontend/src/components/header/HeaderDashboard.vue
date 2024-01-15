<template>
  <div class="container_img">
    <hgroup>
      <h2 class="content"></h2>
    </hgroup>
  </div>
</template>

<script>
export default {
  name: 'HeaderDashboard',
  data: function () {
    return {
    }
  },
  beforeCreate() {
    console.log('Je ne suis pas encore  créé')
  },
  created() {
    console.log('Je suis créé !')
  },
  beforeMount() {
    console.log('Je vais bientôt être monté sur le DOM!')
  },
  mounted() {
    console.log('Je suis monté sur le DOM!')
  },
  beforeUnmount() {
    console.log('Je suis sur le point de disparaître du DOM !')
  },
  unmounted() {
    console.log('Je suis supprimé')
  }
}
</script>

<style scoped>
.container_img {
  background: url(../../public_hold/resto-IIII.jpeg) no-repeat fixed;
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

h2::after {
  content: '';
  animation: slide 3s linear;
  content: 'Table coup de coeur';
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
  55% {
    content: 'Table coup de|';
  }
  60% {
    content: 'Table coup de |';
  }
  65% {
    content: 'Table coup de c|';
  }
  70% {
    content: 'Table coup de co|';
  }
  75% {
    content: 'Table coup de coe|';
  }
  80% {
    content: 'Table coup de coeu|';
  }
  85% {
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
