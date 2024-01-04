<template lang="">
  <div class="public">
    <PublicNav />
    <router-view />
  </div>
</template>

<script>
import PublicNav from '@/components/header/PublicNav.vue'
export default {
  name: 'PublicLayout',
  components: {
    PublicNav
  }
}
// setup() {
//   const state = reactive({
//     data: [],
//   });

//   const fetchData = async () => {
//     try {
//       const response = await fetch(`${API_URL}/api/user`); // Utilisez la route correcte
//       if (!response.ok) {
//         throw new Error('Erreur lors de la récupération des données');
//       }
//       const result = await response.json();
//       state.data = result.data.users;
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   // Appel fetchData au montage du composant
//   onMounted(fetchData);

//   return { state, fetchData };
// },
</script>

<style scoped></style>
