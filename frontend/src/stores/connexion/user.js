import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return { user: null }
  },
  actions: {
    setUser(user) {
      this.user = user
    },
    isAuthenticated() {
      return this.user !== null;
    },
  },
})
