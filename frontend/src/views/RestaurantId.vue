<template lang="">
    <div class="container">
        <h1>Paris</h1>
        <div class="caroussel">
            <img src="../../public/ressource.png" alt="">
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Restaurants',
}
</script>


<style scoped>
    .container {
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */

    }

    .caroussel {
        width: 100%;
        height: 50vh;
    }

    img {
        width: 100%;
    }


</style>