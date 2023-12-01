import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return { user: null }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    setUser(user) {
      this.user = user
    },
  },
})