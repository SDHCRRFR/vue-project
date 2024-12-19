import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

interface User {
  id: number;
  nom: string;
  email: string;
}

export const useUserStore = defineStore('user', {
  state: (): { user: User | null } => { 
    return {
      user: useStorage<User | null>('user', null),
    }
  },
  actions: {
    setUser(user: User | null): void { 
      this.user = user
    },
    isAuthenticated(): boolean {
      return this.user !== null
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user',
        storage: sessionStorage
      }
    ]
  }
})
