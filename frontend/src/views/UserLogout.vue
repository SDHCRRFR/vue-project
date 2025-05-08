<template>
  <div class="logout">
    <img src="../assets/logosaid.svg" class="image" />
    <div class="block_logout">
      <h1>Are you sure you want to sign out?</h1>
      <button type="submit" @click="logout()">Sign Out</button>
    </div>
    <div v-if="loading" class="loading-overlay">
      <div class="spinner"><i class="fas fa-heart fa-spin" style="color: #ff0000"></i></div>
      <p>Déconnexion en cours...</p>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/connexion/user'
import { toast } from 'vue3-toastify'

export default {
  name: 'UserLogout',
  data() {
    return {
      userStore: useUserStore(),
      loading: false
    }
  },
  methods: {
    logout() {
      this.loading = true

      this.userStore.setUser(null)

      toast.success('Déconnexion réussie ! 🎉', {
        autoClose: 3000,
        position: toast.POSITION.BOTTOM_RIGHT
      })

      setTimeout(() => {
        this.loading = false
        this.$router.push('/')
      }, 5000)
    }
  }
}
</script>


<style scoped>
.image {
  width: 100%;
  max-width: 100px;
}

.logout {
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

button {
  width: 100%;
  max-width: 300px;
  font-size: 15px;
  border-radius: 10px;
  padding: 10px;
  border: none;
  background: black;
  color: white;
  cursor: pointer;
}

button:hover {
  background: white;
  color: black;
  border: 1px solid black;
}

.block_logout {
  width: 80%;
  max-width: 400px;
  height: auto;
  display: flex;
  text-align: center;
  padding: 20px;
  border-radius: 20px;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
