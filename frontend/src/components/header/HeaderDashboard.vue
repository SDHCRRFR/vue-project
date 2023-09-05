<template>
  <div class="container_img">
    <hgroup>
      <h1>
        {{ accroche }}
        <span>
          <i class="fa-solid fa-heart-pulse fa-beat" style="color: #ff0000"></i>
        </span>
      </h1>
      <h2 class="content"></h2>
    </hgroup>
    <!-- search display -->
    <input
      v-model="searchKey"
      type="search"
      id="search"
      placeholder="Que recherchez vous ?"
      autocomplete="on"
      class="search"
    />
    <span v-if="searchKey && filteredList.length >= 1">
      {{ filteredList.length }} résultat <span v-if="filteredList.length >= 2">s</span></span
    >
  </div>
</template>

<script>
export default {
  name: 'HeaderDashboard',
  data: function () {
    return {
      accroche: 'Ayez du coeur',
      searchKey: '',
      products: []
    }
  }
}
</script>

<style scoped>
.container_img {
  background: url(../../public/resto-IIII.jpeg) 0 0 no-repeat;
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
  animation: slide 1s linear infinite;
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
    content: 'Table d|';
  }

  35% {
    content: 'Table de|';
  }

  40% {
    content: 'Table de |';
  }

  45% {
    content: 'Table de c|';
  }

  50% {
    content: 'Table de co|';
  }

  55% {
    content: 'Table de coe|';
  }

  55% {
    content: 'Table de coeu|';
  }

  60% {
    content: 'Table de coeur|';
  }

  100% {
    content: 'Table de coeur |';
  }
}

h2 {
  font-size: 90px;
  color: white;
  margin: 0;
  padding: 0;
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
