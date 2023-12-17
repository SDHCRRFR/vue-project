<template>
  <div class="management">
    <div class="help">
      <FormulaireInfo />
    </div>
  </div>
</template>
<script>
import FormulaireInfo from '@/components/formulaire/FormulaireInfo.vue'

export default {
  name: 'ManagementHelp',
  components: {
    FormulaireInfo
  }
}
</script>
<style scoped>
.management {
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
</style>
