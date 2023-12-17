<template>
  <div class="help-management">
    <div class="help">
      <FormulaireInfo />
    </div>
  </div>
</template>
<script>
import FormulaireInfo from '@/components/formulaire/FormulaireInfo.vue'

export default {
  name: 'HelpManagement',
  components: {
    FormulaireInfo
  }
}
</script>

<style scoped>
.help-management {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.help {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
}

.logo {
  width: 50px;
}

#logo_container {
  width: 80%;
}

nav {
  padding: 0rem 2.4rem;
  background: rgba(255, 255, 255, 0.97);
  position: fixed;
  width: 95%;
  z-index: 2;
  box-shadow: 0 2px 4px -3px rgba(51, 51, 51, 0.2);
}

nav .nav-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1450px;
  height: 10vh;
}
</style>
