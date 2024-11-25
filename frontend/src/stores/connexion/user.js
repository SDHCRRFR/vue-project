import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: useStorage('user', null)
    }
  },
  actions: {
    setUser(user) {
      this.user = user
    },
    isAuthenticated() {
      return this.user !== null
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user',
        storage: sessionStorage // contrairement au localStorage les sessionStorage sont nettoyées quand la session navigateur prend fin.
      }
    ]
  }
})
