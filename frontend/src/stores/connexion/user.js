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
        storage: sessionStorage // les données stockées dans le localStorage n'ont pas de délai d'expiration, alors que les données stockées dans le sessionStorage sont nettoyées quand la session navigateur prend fin
      }
    ]
  }
})
