<template>
  <div class="logout">
    <img src="../assets/logosaid.svg" class="image" />
    <div class="block_logout">
      <h1>Are you sure you want to sign out?</h1>
      <button type="submit" @click="logout()">Sign Out</button>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/counter'

export default {
  name: 'UserLogout',
  data() {
    return {
      userStore: useUserStore()
    }
  },
  methods: {
    logout() {
      this.userStore.setUser(null)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.image {
  width: 100px;
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
  width: 300px;
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
  width: 25%;
  height: 25vh;
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
</style>
