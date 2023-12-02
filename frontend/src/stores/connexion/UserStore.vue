<script setup>
import { useUserStore } from '@/stores/counter'

const userStore = useUserStore()
</script>

<template>
  <div>Current Count: {{ userStore.user?.nom }}</div>
</template>
