<template>
    <div class="container">
        <h1>Paris</h1>
        <div class="caroussel">
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
        text-align: left;
        flex-direction: column;
        /* align-items: center; */
        /* justify-content: center; */

    }

    h1 {
        margin-left: 100px;
    }

    .caroussel {
        width: 100%;
        height: 50vh;
        background: url(../../public/background-crimson.jpeg) 0 0 no-repeat;
        background-size: cover;
        overflow: hidden;
    }


</style>