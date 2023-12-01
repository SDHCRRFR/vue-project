<script setup>
import { useUserStore } from '@/stores/counter'

const userStore = useUserStore()

// counter.user = 10
// with autocompletion ✨
// counter.$patch({ user: counter.count + 1 })
// or using an action instead
// userStore.setUser({id: 1, name: 'titi'})
</script>

<template>
  <!-- Access the state directly from the store -->
  <div>Current Count: {{ userStore.user?.nom }}</div>
</template>